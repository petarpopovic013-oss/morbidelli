'use server'

import { supabaseAdmin } from '@/app/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export type News = {
  id: string
  title: string
  slug: string
  date: string // YYYY-MM-DD
  content: string
  images: string[]
  created_at: string
}

export async function getNews() {
  const { data, error } = await supabaseAdmin
    .from('morbidelli_news')
    .select('*')
    .order('date', { ascending: false })

  if (error) {
    console.error('Error fetching news:', JSON.stringify(error, null, 2))
    return []
  }

  return data as News[]
}

export async function getNewsById(id: string) {
  const { data, error } = await supabaseAdmin
    .from('morbidelli_news')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching news by id:', JSON.stringify(error, null, 2))
    return null
  }

  return data as News
}

export async function getNewsBySlug(slug: string) {
  const { data, error } = await supabaseAdmin
    .from('morbidelli_news')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching news by slug:', JSON.stringify(error, null, 2))
    return null
  }

  return data as News
}

export async function createNews(data: Omit<News, 'id' | 'created_at'>) {
  const { error } = await supabaseAdmin
    .from('morbidelli_news')
    .insert([data])

  if (error) {
    console.error('Error creating news:', error)
    return { error: error.message }
  }

  revalidatePath('/admin/novosti')
  revalidatePath('/novosti')
  return { success: true }
}

export async function updateNews(id: string, data: Partial<Omit<News, 'id' | 'created_at'>>) {
  const { error } = await supabaseAdmin
    .from('morbidelli_news')
    .update(data)
    .eq('id', id)

  if (error) {
    console.error('Error updating news:', error)
    return { error: error.message }
  }

  revalidatePath('/admin/novosti')
  revalidatePath('/novosti')
  revalidatePath(`/novosti/${id}`)
  return { success: true }
}

import { deleteNewsImage } from '@/app/actions/news-storage'

export async function deleteNews(id: string) {
  // Prvo dohvati vest da bismo videli da li ima slike
  const newsItem = await getNewsById(id)

  if (newsItem && newsItem.images && newsItem.images.length > 0) {
    // Obriši svaku sliku iz storage-a
    for (const imageUrl of newsItem.images) {
      await deleteNewsImage(imageUrl)
    }
  }

  // Zatim obriši red iz baze
  const { error } = await supabaseAdmin
    .from('morbidelli_news')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting news:', error)
    return { error: error.message }
  }

  revalidatePath('/admin/novosti')
  revalidatePath('/novosti')
  return { success: true }
}
