'use server'

import { supabaseAdmin } from '@/app/utils/supabase/server'
import { requireAdmin } from '@/app/utils/admin-session'

const MAX_IMAGE_BYTES = 8 * 1024 * 1024
const IMAGE_EXTENSIONS: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
}

export async function uploadNewsImage(formData: FormData) {
  await requireAdmin()
  const file = formData.get('file')
  if (!(file instanceof File) || file.size === 0) {
    return { error: 'Nije priložen fajl.' }
  }
  const extension = IMAGE_EXTENSIONS[file.type]
  if (!extension) return { error: 'Dozvoljene su JPEG, PNG i WebP slike.' }
  if (file.size > MAX_IMAGE_BYTES) return { error: 'Slika ne sme biti veća od 8 MB.' }

  try {
    const buffer = await file.arrayBuffer()
    const fileName = `${crypto.randomUUID()}.${extension}`
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
  await requireAdmin()
  if (!path || path.includes('..')) return { error: 'Neispravna putanja slike.' }
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
