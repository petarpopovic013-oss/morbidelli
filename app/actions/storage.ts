'use server'

import { supabaseAdmin } from '@/app/utils/supabase/server'
import { requireAdmin } from '@/app/utils/admin-session'
import sharp from 'sharp'

const MAX_IMAGE_BYTES = 8 * 1024 * 1024
const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp'])

export async function uploadImage(formData: FormData) {
  await requireAdmin()
  const file = formData.get('file')
  if (!(file instanceof File) || file.size === 0) {
    return { error: 'Nije priložen fajl.' }
  }
  if (!ALLOWED_IMAGE_TYPES.has(file.type)) return { error: 'Dozvoljene su JPEG, PNG i WebP slike.' }
  if (file.size > MAX_IMAGE_BYTES) return { error: 'Slika ne sme biti veća od 8 MB.' }

  try {
    const buffer = await file.arrayBuffer()
    
    // Konverzija u WEBP pomoću sharp-a
    const webpBuffer = await sharp(buffer)
      .webp({ quality: 80 })
      .toBuffer()

    const fileName = `${crypto.randomUUID()}.webp`
    const filePath = `${fileName}` // in bucket morbidelli_images

    const { error } = await supabaseAdmin.storage
      .from('morbidelli_images')
      .upload(filePath, webpBuffer, {
        contentType: 'image/webp',
        upsert: false
      })

    if (error) {
      console.error('Error uploading image:', error)
      return { error: error.message }
    }

    const { data: publicUrlData } = supabaseAdmin.storage
      .from('morbidelli_images')
      .getPublicUrl(filePath)

    return { publicUrl: publicUrlData.publicUrl, path: filePath }
  } catch (err: unknown) {
    console.error('Error processing image:', err)
    return { error: 'Greška pri obradi slike (WEBP konverzija). ' + (err instanceof Error ? err.message : String(err)) }
  }
}

export async function deleteImage(path: string) {
  await requireAdmin()
  if (!path || path.includes('..')) return { error: 'Neispravna putanja slike.' }
  // Ako je prosleđen puni URL, izvuci samo putanju unutar bucketa
  let filePath = path
  const searchString = '/storage/v1/object/public/morbidelli_images/'
  if (path.includes(searchString)) {
    filePath = path.split(searchString)[1]
  }

  const { error } = await supabaseAdmin.storage
    .from('morbidelli_images')
    .remove([filePath])

  if (error) {
    console.error('Error deleting image:', error)
    return { error: error.message }
  }

  return { success: true }
}
