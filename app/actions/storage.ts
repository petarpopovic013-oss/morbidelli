'use server'

import { supabaseAdmin } from '@/app/utils/supabase/server'
import sharp from 'sharp'

export async function uploadImage(formData: FormData) {
  const file = formData.get('file') as File
  if (!file) {
    return { error: 'Nije priložen fajl.' }
  }

  try {
    const buffer = await file.arrayBuffer()
    
    // Konverzija u WEBP pomoću sharp-a
    const webpBuffer = await sharp(buffer)
      .webp({ quality: 80 })
      .toBuffer()

    const fileName = `${crypto.randomUUID()}.webp`
    const filePath = `${fileName}` // in bucket morbidelli_images

    const { data, error } = await supabaseAdmin.storage
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
  } catch (err: any) {
    console.error('Error processing image:', err)
    return { error: 'Greška pri obradi slike (WEBP konverzija). ' + (err.message || '') }
  }
}

export async function deleteImage(path: string) {
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
