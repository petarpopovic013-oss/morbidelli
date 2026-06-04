'use server'

import { supabaseAdmin } from '@/app/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { MotorcycleCategory } from '@/app/constants/motorcycles'

export type Motorcycle = {
  id: string
  name: string
  slug: string
  price: number
  category: MotorcycleCategory | null
  engine_capacity_ccm: number | null
  power_kw: number | null
  short_description: string | null
  image_url: string
  gallery: string[] | null
  specifications: Record<string, string> | null
  created_at: string
}

export async function getMotorcycles() {
  const { data, error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching motorcycles:', error)
    return []
  }

  return data as Motorcycle[]
}

export async function getMotorcycleById(id: string) {
  const { data, error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching motorcycle:', error)
    return null
  }

  return data as Motorcycle
}

export async function getMotorcycleBySlug(slug: string) {
  const { data, error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    console.error('Error fetching motorcycle by slug:', error)
    return null
  }

  return data as Motorcycle
}

export async function createMotorcycle(data: Omit<Motorcycle, 'id' | 'created_at'>) {
  const { error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .insert([data])

  if (error) {
    console.error('Error creating motorcycle:', error)
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/katalog')
  return { success: true }
}

export async function updateMotorcycle(id: string, data: Partial<Omit<Motorcycle, 'id' | 'created_at'>>) {
  const { error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .update(data)
    .eq('id', id)

  if (error) {
    console.error('Error updating motorcycle:', error)
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/katalog')
  return { success: true }
}

export async function deleteMotorcycle(id: string) {
  const { error } = await supabaseAdmin
    .from('morbidelli_motorcycles')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting motorcycle:', error)
    return { error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/katalog')
  return { success: true }
}
