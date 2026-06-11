'use server'

import { supabaseAdmin } from '@/app/utils/supabase/server'

export async function uploadNewsImage(formData: FormData) {
  const file = formData.get('file') as File
  if (!file) {
    return { error: 'Nije priložen fajl.' }
  }

  try {
    const buffer = await file.arrayBuffer()
    const fileName = `${crypto.randomUUID()}-${file.name}`
    const filePath = `${fileName}` // in bucket morbidelli_news_images

    const { error } = await supabaseAdmin.storage
      .from('morbidelli_news_images')
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false
      })

    if (error) {
      console.error('Error uploading news image:', error)
      return { error: error.message }
    }

    const { data: publicUrlData } = supabaseAdmin.storage
      .from('morbidelli_news_images')
      .getPublicUrl(filePath)

    return { publicUrl: publicUrlData.publicUrl, path: filePath }
  } catch (err: unknown) {
    console.error('Error processing news image:', err)
    return { error: 'Greška pri obradi slike. ' + (err instanceof Error ? err.message : String(err)) }
  }
}

export async function deleteNewsImage(path: string) {
  // Ako je prosleđen puni URL, izvuci samo putanju unutar bucketa
  let filePath = path
  const searchString = '/storage/v1/object/public/morbidelli_news_images/'
  if (path.includes(searchString)) {
    filePath = path.split(searchString)[1]
  }

  const { error } = await supabaseAdmin.storage
    .from('morbidelli_news_images')
    .remove([filePath])

  if (error) {
    console.error('Error deleting news image:', error)
    return { error: error.message }
  }

  return { success: true }
}
