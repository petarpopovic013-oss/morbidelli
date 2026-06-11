'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { createNews, updateNews, News } from '@/app/actions/news'
import { uploadNewsImage, deleteNewsImage } from '@/app/actions/news-storage'
import { convertToWebP } from '@/app/utils/image-converter'
import { motion, AnimatePresence } from 'framer-motion'
import { XCircle, X } from 'lucide-react'
import Image from 'next/image'

function generateSlug(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

export function NewsForm({ initialData }: { initialData?: News }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const [title, setTitle] = useState(initialData?.title || '')
  const [slug, setSlug] = useState(initialData?.slug || '')
  const [date, setDate] = useState(initialData?.date ? new Date(initialData.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0])
  const [content, setContent] = useState(initialData?.content || '')

  const [existingImages, setExistingImages] = useState<string[]>(initialData?.images || [])
  const [newImageFiles, setNewImageFiles] = useState<File[]>([])
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([])

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      const validFiles = filesArray.filter(f => f.size <= 10 * 1024 * 1024)
      if (validFiles.length < filesArray.length) {
        setError('Neke slike su ignorisane jer su veće od 10MB.')
      }
      
      const totalImages = existingImages.length + newImageFiles.length + validFiles.length;
      if (totalImages > 3) {
        setError('Maksimalan broj slika po vesti je 3.')
        return
      }

      setNewImageFiles(prev => [...prev, ...validFiles])
    }
    e.target.value = ''
  }

  const removeNewImageFile = (index: number) => {
    setNewImageFiles(prev => prev.filter((_, i) => i !== index))
  }

  const removeExistingImage = (url: string) => {
    setExistingImages(prev => prev.filter(img => img !== url))
    setImagesToDelete(prev => [...prev, url])
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    if (!initialData) {
      setSlug(generateSlug(e.target.value))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    startTransition(async () => {
      try {
        const uploadedImageUrls: string[] = []
        
        for (const file of newImageFiles) {
          // Client-side WebP Conversion
          const compressedBlob = await convertToWebP(file)
          const newFile = new File([compressedBlob], file.name.replace(/\.[^/.]+$/, "") + ".webp", { type: 'image/webp' })
          
          const formData = new FormData()
          formData.append('file', newFile)
          const res = await uploadNewsImage(formData)
          
          if (res.error) {
            setError(`Greška pri uploadu slike: ${res.error}`)
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
          }
          if (res.publicUrl) {
            uploadedImageUrls.push(res.publicUrl)
          }
        }

        const finalImages = [...existingImages, ...uploadedImageUrls]

        const data = {
          title,
          slug,
          date,
          content,
          images: finalImages
        }

        let res
        if (initialData) {
          res = await updateNews(initialData.id, data)
        } else {
          res = await createNews(data)
        }

        if (res.error) {
          setError(res.error)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          for (const url of imagesToDelete) {
            await deleteNewsImage(url)
          }
          router.push('/admin/novosti')
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Došlo je do greške prilikom čuvanja.')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit} 
        className="space-y-8"
      >
        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: 32 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="bg-black text-white p-4 flex items-center gap-3"
            >
              <XCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
              <p className="font-replica-light text-sm">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="bg-gray-50 p-8 border border-gray-200">
          <div className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-black text-[10px] font-replica font-bold uppercase tracking-widest mb-2">Naslov *</label>
                <input 
                  type="text" required value={title} onChange={handleTitleChange}
                  className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none transition-all font-replica-light text-sm" 
                  placeholder="Naslov vesti"
                />
              </div>
              <div>
                <label className="block text-black text-[10px] font-replica font-bold uppercase tracking-widest mb-2">Slug (URL) *</label>
                <input 
                  type="text" required value={slug} onChange={(e) => setSlug(e.target.value)} readOnly
                  className="w-full bg-gray-100 border border-gray-200 px-5 py-4 text-gray-500 focus:outline-none transition-all cursor-not-allowed font-replica-light text-sm" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-black text-[10px] font-replica font-bold uppercase tracking-widest mb-2">Datum *</label>
              <input 
                type="date" required value={date} onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none transition-all font-replica-light text-sm" 
              />
            </div>

            <div>
              <label className="block text-black text-[10px] font-replica font-bold uppercase tracking-widest mb-2">Tekst vesti *</label>
              <textarea 
                required value={content} onChange={(e) => setContent(e.target.value)} rows={10}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none transition-all font-replica-light text-sm resize-none" 
                placeholder="Unesite tekst vesti..."
              />
            </div>
            
            <div>
              <label className="block text-black text-[10px] font-replica font-bold uppercase tracking-widest mb-2">Slike (maksimalno 3)</label>
              
              <div className="flex flex-wrap gap-4 mb-4">
                {existingImages.map((url, i) => (
                  <div key={`existing-${i}`} className="relative w-32 h-32 border border-gray-200 group">
                    <Image src={url} alt={`Image ${i}`} fill className="object-cover" />
                    <button type="button" onClick={() => removeExistingImage(url)} className="absolute top-2 right-2 bg-black text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                {newImageFiles.map((file, i) => (
                  <div key={`new-${i}`} className="relative w-32 h-32 border border-gray-200 group">
                    <img src={URL.createObjectURL(file)} alt={`New Image ${i}`} className="w-full h-full object-cover" />
                    <button type="button" onClick={() => removeNewImageFile(i)} className="absolute top-2 right-2 bg-black text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {existingImages.length + newImageFiles.length < 3 && (
                <input 
                  type="file" multiple accept="image/*" onChange={handleImagesChange}
                  className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none transition-all font-replica-light text-sm" 
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button type="button" onClick={() => router.back()} className="px-8 py-4 bg-gray-200 text-black font-replica uppercase text-sm tracking-widest hover:bg-gray-300 transition-colors">
            Otkaži
          </button>
          <button type="submit" disabled={isPending} className="px-8 py-4 bg-black text-white font-replica uppercase text-sm tracking-widest hover:bg-red-600 transition-colors disabled:opacity-50">
            {isPending ? 'Čuvanje...' : (initialData ? 'Sačuvaj izmene' : 'Dodaj vest')}
          </button>
        </div>
      </motion.form>
    </div>
  )
}
