'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { createMotorcycle, updateMotorcycle, Motorcycle } from '@/app/actions/motorcycles'
import { MOTORCYCLE_CATEGORIES, MotorcycleCategory } from '@/app/constants/motorcycles'
import { uploadImage, deleteImage } from '@/app/actions/storage'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, Upload, Save, XCircle, Settings2, Image as ImageIcon } from 'lucide-react'

type SpecField = { id: string; key: string; value: string }

function generateSlug(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

export function MotorcycleForm({ initialData }: { initialData?: Motorcycle }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const [name, setName] = useState(initialData?.name || '')
  const [slug, setSlug] = useState(initialData?.slug || '')
  const [price, setPrice] = useState(initialData?.price?.toString() || '')
  const [category, setCategory] = useState(initialData?.category || '')
  const [engineCapacity, setEngineCapacity] = useState(initialData?.engine_capacity_ccm?.toString() || '')
  const [powerKw, setPowerKw] = useState(initialData?.power_kw?.toString() || '')
  const [shortDesc, setShortDesc] = useState(initialData?.short_description || '')

  const [mainImage, setMainImage] = useState<File | null>(null)
  const [mainImageUrl, setMainImageUrl] = useState(initialData?.image_url || '')

  const [existingGallery, setExistingGallery] = useState<string[]>(initialData?.gallery || [])
  const [newGalleryFiles, setNewGalleryFiles] = useState<File[]>([])
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([])

  const initialSpecs = initialData?.specifications 
    ? Object.entries(initialData.specifications).map(([key, value]) => ({
        id: crypto.randomUUID(),
        key,
        value: value as string
      }))
    : []
  const [specs, setSpecs] = useState<SpecField[]>(initialSpecs)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (!initialData) {
      setSlug(generateSlug(e.target.value))
    }
  }

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setNewGalleryFiles(prev => [...prev, ...filesArray])
    }
    e.target.value = ''
  }

  const removeNewGalleryFile = (index: number) => {
    setNewGalleryFiles(prev => prev.filter((_, i) => i !== index))
  }

  const removeExistingGalleryImage = (url: string) => {
    setExistingGallery(prev => prev.filter(img => img !== url))
    setImagesToDelete(prev => [...prev, url])
  }

  const addSpec = () => {
    setSpecs([...specs, { id: crypto.randomUUID(), key: '', value: '' }])
  }

  const removeSpec = (id: string) => {
    setSpecs(specs.filter(s => s.id !== id))
  }

  const updateSpec = (id: string, field: 'key' | 'value', val: string) => {
    setSpecs(specs.map(s => s.id === id ? { ...s, [field]: val } : s))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    startTransition(async () => {
      try {
        let finalImageUrl = mainImageUrl
        
        if (mainImage) {
          const formData = new FormData()
          formData.append('file', mainImage)
          const uploadRes = await uploadImage(formData)
          if (uploadRes.error) {
            setError(uploadRes.error)
            return
          }
          finalImageUrl = uploadRes.publicUrl!
          
          if (initialData?.image_url) {
            await deleteImage(initialData.image_url)
          }
        }

        if (!finalImageUrl) {
          setError('Glavna slika je obavezna.')
          return
        }

        const uploadedGalleryUrls: string[] = []
        for (const file of newGalleryFiles) {
          const formData = new FormData()
          formData.append('file', file)
          const res = await uploadImage(formData)
          if (res.error) {
            setError(`Greška pri uploadu galerije: ${res.error}`)
            return
          }
          if (res.publicUrl) {
            uploadedGalleryUrls.push(res.publicUrl)
          }
        }

        const finalGallery = [...existingGallery, ...uploadedGalleryUrls]

        const specifications = specs.reduce((acc, curr) => {
          if (curr.key.trim() && curr.value.trim()) {
            acc[curr.key.trim()] = curr.value.trim()
          }
          return acc
        }, {} as Record<string, string>)

        const data = {
          name,
          slug,
          price: Number(price),
          category: (category as MotorcycleCategory) || null,
          engine_capacity_ccm: engineCapacity ? Number(engineCapacity) : null,
          power_kw: powerKw ? Number(powerKw) : null,
          short_description: shortDesc || null,
          image_url: finalImageUrl,
          gallery: finalGallery.length > 0 ? finalGallery : null,
          specifications: Object.keys(specifications).length > 0 ? specifications : null
        }

        let res
        if (initialData) {
          res = await updateMotorcycle(initialData.id, data)
        } else {
          res = await createMotorcycle(data)
        }

        if (res.error) {
          setError(res.error)
        } else {
          for (const url of imagesToDelete) {
            await deleteImage(url)
          }
          router.push('/admin')
        }
      } catch (err: any) {
        setError(err.message || 'Došlo je do greške')
      }
    })
  }

  const InputLabel = ({ children }: { children: React.ReactNode }) => (
    <label className="block text-black text-[10px] font-replica font-bold uppercase tracking-widest mb-2">
      {children}
    </label>
  );

  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit} 
        className="space-y-16"
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
        
        {/* Basic Info Section */}
        <div className="space-y-8">
          <div className="border-b-2 border-black pb-4 mb-8">
            <h2 className="text-3xl font-replica font-bold text-black uppercase tracking-tight">
              1. Osnovne Informacije
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <InputLabel>Naziv motora *</InputLabel>
              <input 
                type="text" 
                required 
                value={name} 
                onChange={handleNameChange}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-all duration-300 font-replica-light text-sm rounded-none" 
                placeholder="Npr. Morbidelli T1002VX"
              />
            </div>
            
            <div>
              <InputLabel>Slug (URL) *</InputLabel>
              <input 
                type="text" 
                required 
                value={slug} 
                onChange={(e) => setSlug(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 px-5 py-4 text-gray-500 focus:outline-none transition-all duration-300 cursor-not-allowed font-replica-light text-sm rounded-none" 
                readOnly
              />
            </div>
            
            <div>
              <InputLabel>Cena (€) *</InputLabel>
              <input 
                type="number" 
                required 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-all duration-300 font-replica-light text-sm rounded-none" 
                placeholder="Npr. 9500"
              />
            </div>

            <div>
              <InputLabel>Kategorija</InputLabel>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value as MotorcycleCategory)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-all duration-300 font-replica-light text-sm rounded-none appearance-none" 
              >
                <option value="" disabled>Odaberite kategoriju...</option>
                {MOTORCYCLE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <InputLabel>Zapremina (cc)</InputLabel>
              <input 
                type="number" 
                value={engineCapacity} 
                onChange={(e) => setEngineCapacity(e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-all duration-300 font-replica-light text-sm rounded-none" 
                placeholder="Npr. 486"
              />
            </div>

            <div>
              <InputLabel>Snaga (kW)</InputLabel>
              <input 
                type="number" 
                value={powerKw} 
                onChange={(e) => setPowerKw(e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-all duration-300 font-replica-light text-sm rounded-none" 
                placeholder="Npr. 35"
              />
            </div>

            <div className="md:col-span-2">
              <InputLabel>Kratak opis</InputLabel>
              <textarea 
                value={shortDesc} 
                onChange={(e) => setShortDesc(e.target.value)}
                rows={4}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-all duration-300 resize-none font-replica-light text-sm rounded-none" 
                placeholder="Kratak opis motora za katalog..."
              />
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div className="space-y-8">
          <div className="border-b-2 border-black pb-4 mb-8">
            <h2 className="text-3xl font-replica font-bold text-black uppercase tracking-tight">
              2. Slike Motora
            </h2>
          </div>
          
          <div className="mb-10">
            <InputLabel>Glavna slika * (Prikazuje se na kartici i kao prva slika)</InputLabel>
            <div className="flex flex-col md:flex-row items-start gap-6 mt-2">
              {mainImageUrl && !mainImage && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="relative w-full md:w-64 aspect-[4/3] overflow-hidden border border-gray-200"
                >
                  <Image src={mainImageUrl} alt="Trenutna slika" fill className="object-cover" />
                </motion.div>
              )}
              <div className="flex-1 w-full">
                <label className="flex flex-col items-center justify-center w-full aspect-[4/3] md:aspect-auto md:h-48 border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-50 hover:border-black transition-all duration-300 group">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="w-8 h-8 mb-4 text-gray-400 group-hover:text-black transition-colors" />
                    <p className="text-sm text-gray-500 group-hover:text-black transition-colors font-replica-light">
                      <span className="font-bold font-replica text-black">Klikni</span> ili prevuci sliku
                    </p>
                  </div>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => setMainImage(e.target.files?.[0] || null)}
                    className="hidden"
                  />
                </label>
                {mainImage && (
                  <p className="mt-3 text-xs text-black font-bold font-replica uppercase tracking-widest flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-track-cyan" />
                    Nova slika: {mainImage.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <InputLabel>Galerija (Dodatne slike)</InputLabel>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <AnimatePresence>
                {existingGallery.map((url) => (
                  <motion.div 
                    key={url} 
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="relative w-40 aspect-[4/3] overflow-hidden border border-gray-200 group"
                  >
                    <Image src={url} alt="Galerija" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => removeExistingGalleryImage(url)}
                        className="bg-black text-white w-10 h-10 flex items-center justify-center hover:bg-red-500 transition-all transform hover:scale-110"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}

                {newGalleryFiles.map((file, index) => (
                  <motion.div 
                    key={`new-${index}`} 
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="relative w-40 aspect-[4/3] overflow-hidden border-2 border-black group"
                  >
                    <Image src={URL.createObjectURL(file)} alt="Nova slika" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => removeNewGalleryFile(index)}
                        className="bg-black text-white w-10 h-10 flex items-center justify-center hover:bg-red-500 transition-all transform hover:scale-110"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              <label className="flex flex-col items-center justify-center w-40 aspect-[4/3] border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-50 hover:border-black transition-all duration-300 group">
                <Plus className="w-8 h-8 text-gray-400 group-hover:text-black transition-colors mb-2" />
                <span className="text-[10px] text-gray-400 font-replica-light group-hover:text-black transition-colors uppercase tracking-widest font-bold">Dodaj sliku</span>
                <input 
                  type="file" 
                  multiple
                  accept="image/*"
                  onChange={handleGalleryChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Specs Section */}
        <div className="space-y-8">
          <div className="border-b-2 border-black pb-4 flex justify-between items-end">
            <h2 className="text-3xl font-replica font-bold text-black uppercase tracking-tight">
              3. Specifikacije
            </h2>
            <button 
              type="button" 
              onClick={addSpec}
              className="flex items-center gap-2 text-white bg-black hover:bg-track-cyan px-4 py-2 text-[10px] font-replica font-bold uppercase tracking-widest transition-colors duration-300"
            >
              <Plus className="w-3 h-3" />
              Dodaj stavku
            </button>
          </div>
          
          <div className="space-y-4">
            <AnimatePresence>
              {specs.map((spec) => (
                <motion.div 
                  key={spec.id} 
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  className="flex flex-col md:flex-row gap-4 items-center group"
                >
                  <input 
                    type="text" 
                    placeholder="Ključ (Npr. Zapremina)"
                    value={spec.key}
                    onChange={(e) => updateSpec(spec.id, 'key', e.target.value)}
                    className="w-full md:w-1/2 bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-all font-replica-light text-sm rounded-none"
                  />
                  <input 
                    type="text" 
                    placeholder="Vrednost (Npr. 1000cc)"
                    value={spec.value}
                    onChange={(e) => updateSpec(spec.id, 'value', e.target.value)}
                    className="w-full md:w-1/2 bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:ring-1 focus:ring-black focus:outline-none transition-all font-replica-light text-sm rounded-none"
                  />
                  <button 
                    type="button" 
                    onClick={() => removeSpec(spec.id)}
                    className="text-gray-400 hover:text-white hover:bg-red-500 p-4 transition-all border border-gray-200 hover:border-red-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
            {specs.length === 0 && (
               <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 text-sm font-replica-light text-center py-12 bg-gray-50 border border-gray-200 border-dashed">
                 Nema dodatih specifikacija. Kliknite na "Dodaj stavku" da započnete.
               </motion.p>
            )}
          </div>
        </div>

        {/* Submit Actions */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 pt-12 mt-12 border-t-2 border-black">
          <button 
            type="button" 
            onClick={() => router.push('/admin')}
            className="px-8 py-5 font-replica font-bold uppercase tracking-widest text-[11px] text-black hover:text-white hover:bg-black transition-colors border border-black w-full sm:w-auto text-center"
          >
            Odustani
          </button>
          <button 
            type="submit" 
            disabled={isPending}
            className="flex items-center justify-center gap-3 bg-black text-white px-10 py-5 font-replica font-bold uppercase tracking-widest text-[11px] hover:bg-track-cyan transition-colors duration-300 disabled:opacity-50 w-full sm:w-auto"
          >
            {isPending ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {isPending ? 'Čuvanje...' : 'Sačuvaj Motor'}
          </button>
        </div>
      </motion.form>
    </div>
  )
}
