'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { createMotorcycle, updateMotorcycle, Motorcycle } from '@/app/actions/motorcycles'
import { MOTORCYCLE_CATEGORIES, MotorcycleCategory } from '@/app/constants/motorcycles'
import { uploadImage, deleteImage } from '@/app/actions/storage'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, Upload, Save, XCircle, Image as ImageIcon } from 'lucide-react'

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

  // Basic Info
  const [name, setName] = useState(initialData?.name || '')
  const [slug, setSlug] = useState(initialData?.slug || '')
  const [price, setPrice] = useState(initialData?.price?.toString() || '')
  const [category, setCategory] = useState(initialData?.category || '')
  const [shortDesc, setShortDesc] = useState(initialData?.short_description || '')

  // Images
  const [mainImage, setMainImage] = useState<File | null>(null)
  const [mainImageUrl, setMainImageUrl] = useState(initialData?.image_url || '')
  const [existingGallery, setExistingGallery] = useState<string[]>(initialData?.gallery || [])
  const [newGalleryFiles, setNewGalleryFiles] = useState<File[]>([])
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([])

  // Extra Specs State
  const [extraSpecs, setExtraSpecs] = useState<{ id: string; category: string; label: string; value: string }[]>(() => {
    if (!initialData?.specifications) return []
    if (Array.isArray(initialData.specifications)) {
      return initialData.specifications.map((s: any, i: number) => ({
        id: s.id || Date.now().toString() + i,
        category: s.category || '',
        label: s.label || s.key || '',
        value: s.value || ''
      }))
    }
    if (typeof initialData.specifications === 'object') {
      return Object.entries(initialData.specifications).map(([key, value], i) => ({
        id: Date.now().toString() + i,
        category: 'Ostalo',
        label: key,
        value: String(value)
      }))
    }
    return []
  })

  const addExtraSpec = () => {
    setExtraSpecs([...extraSpecs, { id: Date.now().toString(), category: '', label: '', value: '' }])
  }

  const removeExtraSpec = (id: string) => {
    setExtraSpecs(extraSpecs.filter(s => s.id !== id))
  }

  const updateExtraSpec = (id: string, field: 'category' | 'label' | 'value', val: string) => {
    setExtraSpecs(extraSpecs.map(s => s.id === id ? { ...s, [field]: val } : s))
  }

  // Specs State
  const [specs, setSpecs] = useState({
    model_year: initialData?.model_year?.toString() || '',
    displacement: initialData?.displacement?.toString() || '',
    engine_type: initialData?.engine_type || '',
    bore_stroke: initialData?.bore_stroke || '',
    power: initialData?.power || '',
    max_torque: initialData?.max_torque || '',
    compression_ratio: initialData?.compression_ratio || '',
    fuel_system: initialData?.fuel_system || '',
    valve_train: initialData?.valve_train || '',
    ignition_system: initialData?.ignition_system || '',
    starter: initialData?.starter || '',
    lubrication_system: initialData?.lubrication_system || '',
    cooling_system: initialData?.cooling_system || '',
    
    gear_shifting_type: initialData?.gear_shifting_type || '',
    transmission_type: initialData?.transmission_type || '',
    clutch_type: initialData?.clutch_type || '',
    tcs: initialData?.tcs || '',
    
    frame: initialData?.frame || '',
    front_wheel: initialData?.front_wheel || '',
    front_suspension: initialData?.front_suspension || '',
    front_suspension_travel: initialData?.front_suspension_travel?.toString() || '',
    front_tyre: initialData?.front_tyre || '',
    rear_tyre: initialData?.rear_tyre || '',
    rear_wheel: initialData?.rear_wheel || '',
    rear_suspension: initialData?.rear_suspension || '',
    rear_suspension_travel: initialData?.rear_suspension_travel?.toString() || '',
    front_brake: initialData?.front_brake || '',
    front_brake_diameter: initialData?.front_brake_diameter?.toString() || '',
    rear_brake: initialData?.rear_brake || '',
    rear_brake_diameter: initialData?.rear_brake_diameter?.toString() || '',
    
    curb_weight: initialData?.curb_weight?.toString() || '',
    seat_height: initialData?.seat_height?.toString() || '',
    wheelbase: initialData?.wheelbase?.toString() || '',
    overall_length: initialData?.overall_length?.toString() || '',
    overall_width: initialData?.overall_width?.toString() || '',
    overall_height: initialData?.overall_height?.toString() || '',
    ground_clearance: initialData?.ground_clearance?.toString() || '',
    fuel_capacity: initialData?.fuel_capacity?.toString() || '',
    top_speed: initialData?.top_speed?.toString() || '',
    max_loadage: initialData?.max_loadage?.toString() || '',
    battery: initialData?.battery || '',
    
    throttle_configuration: initialData?.throttle_configuration || '',
    
    gear_indicator: initialData?.gear_indicator || '',
    usb_charging_port: initialData?.usb_charging_port || '',
    
    headlight: initialData?.headlight || '',
    taillight: initialData?.taillight || '',
    turn_signal: initialData?.turn_signal || '',
    hazard_light: initialData?.hazard_light || '',
    
    abs_system: initialData?.abs_system || '',
    traction_control_system: initialData?.traction_control_system || ''
  })

  const updateSpec = (key: keyof typeof specs, value: string) => {
    setSpecs(prev => ({ ...prev, [key]: value }))
  }

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

        const finalExtraSpecs = extraSpecs.filter(s => s.label.trim() !== '' || s.value.trim() !== '')

        const data = {
          name,
          slug,
          price: Number(price),
          category: (category as MotorcycleCategory) || null,
          short_description: shortDesc || null,
          image_url: finalImageUrl,
          gallery: finalGallery.length > 0 ? finalGallery : null,
          specifications: finalExtraSpecs.length > 0 ? finalExtraSpecs : null,
          
          model_year: specs.model_year ? Number(specs.model_year) : null,
          displacement: specs.displacement ? Number(specs.displacement) : null,
          engine_type: specs.engine_type || null,
          bore_stroke: specs.bore_stroke || null,
          power: specs.power || null,
          max_torque: specs.max_torque || null,
          compression_ratio: specs.compression_ratio || null,
          fuel_system: specs.fuel_system || null,
          valve_train: specs.valve_train || null,
          ignition_system: specs.ignition_system || null,
          starter: specs.starter || null,
          lubrication_system: specs.lubrication_system || null,
          cooling_system: specs.cooling_system || null,
          gear_shifting_type: specs.gear_shifting_type || null,
          transmission_type: specs.transmission_type || null,
          clutch_type: specs.clutch_type || null,
          tcs: specs.tcs || null,
          frame: specs.frame || null,
          front_wheel: specs.front_wheel || null,
          front_suspension: specs.front_suspension || null,
          front_suspension_travel: specs.front_suspension_travel ? Number(specs.front_suspension_travel) : null,
          front_tyre: specs.front_tyre || null,
          rear_tyre: specs.rear_tyre || null,
          rear_wheel: specs.rear_wheel || null,
          rear_suspension: specs.rear_suspension || null,
          rear_suspension_travel: specs.rear_suspension_travel ? Number(specs.rear_suspension_travel) : null,
          front_brake: specs.front_brake || null,
          front_brake_diameter: specs.front_brake_diameter ? Number(specs.front_brake_diameter) : null,
          rear_brake: specs.rear_brake || null,
          rear_brake_diameter: specs.rear_brake_diameter ? Number(specs.rear_brake_diameter) : null,
          curb_weight: specs.curb_weight ? Number(specs.curb_weight) : null,
          seat_height: specs.seat_height ? Number(specs.seat_height) : null,
          wheelbase: specs.wheelbase ? Number(specs.wheelbase) : null,
          overall_length: specs.overall_length ? Number(specs.overall_length) : null,
          overall_width: specs.overall_width ? Number(specs.overall_width) : null,
          overall_height: specs.overall_height ? Number(specs.overall_height) : null,
          ground_clearance: specs.ground_clearance ? Number(specs.ground_clearance) : null,
          fuel_capacity: specs.fuel_capacity ? Number(specs.fuel_capacity) : null,
          top_speed: specs.top_speed ? Number(specs.top_speed) : null,
          max_loadage: specs.max_loadage ? Number(specs.max_loadage) : null,
          battery: specs.battery || null,
          throttle_configuration: specs.throttle_configuration || null,
          gear_indicator: specs.gear_indicator || null,
          usb_charging_port: specs.usb_charging_port || null,
          headlight: specs.headlight || null,
          taillight: specs.taillight || null,
          turn_signal: specs.turn_signal || null,
          hazard_light: specs.hazard_light || null,
          abs_system: specs.abs_system || null,
          traction_control_system: specs.traction_control_system || null
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

  const SectionHeader = ({ title, num }: { title: string, num: string }) => (
    <div className="border-b-2 border-black pb-4 mb-8 mt-16 first:mt-0">
      <h2 className="text-3xl font-replica font-bold text-black uppercase tracking-tight">
        {num}. {title}
      </h2>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit} 
        className="space-y-12"
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
        
        {/* 1. Podaci o modelu (Model Information) */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <SectionHeader num="1" title="Podaci o modelu" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <InputLabel>Naziv modela *</InputLabel>
              <input 
                type="text" required value={name} onChange={handleNameChange}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none transition-all font-replica-light text-sm" 
                placeholder='npr. "Morbidelli C652V"'
              />
            </div>
            <div>
              <InputLabel>Slug (URL) *</InputLabel>
              <input 
                type="text" required value={slug} onChange={(e) => setSlug(e.target.value)} readOnly
                className="w-full bg-gray-100 border border-gray-200 px-5 py-4 text-gray-500 focus:outline-none transition-all cursor-not-allowed font-replica-light text-sm" 
              />
            </div>
            <div>
              <InputLabel>Godina modela</InputLabel>
              <input 
                type="number" value={specs.model_year} onChange={(e) => updateSpec('model_year', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none transition-all font-replica-light text-sm" 
                placeholder='npr. 2026'
              />
            </div>
            <div>
              <InputLabel>Kategorija</InputLabel>
              <select 
                value={category} onChange={(e) => setCategory(e.target.value as MotorcycleCategory)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none transition-all font-replica-light text-sm appearance-none" 
              >
                <option value="" disabled>Odaberite kategoriju...</option>
                {MOTORCYCLE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <InputLabel>Cena (€) *</InputLabel>
              <input 
                type="number" required value={price} onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none transition-all font-replica-light text-sm" 
                placeholder="npr. 9500"
              />
            </div>
            <div className="md:col-span-2">
              <InputLabel>Kratak opis</InputLabel>
              <textarea 
                value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} rows={3}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none transition-all resize-none font-replica-light text-sm" 
                placeholder="Kratak opis motora za katalog..."
              />
            </div>
          </div>
        </div>

        {/* 2. Motor (Engine) */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <SectionHeader num="2" title="Motor (Engine)" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <InputLabel>Zapremina (ccm)</InputLabel>
              <input 
                type="number" value={specs.displacement} onChange={(e) => updateSpec('displacement', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 650" />
            </div>
            <div>
              <InputLabel>Tip motora</InputLabel>
              <input 
                type="text" value={specs.engine_type} onChange={(e) => updateSpec('engine_type', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. V-2-cilindrični / 4-taktni..." />
            </div>
            <div>
              <InputLabel>Prečnik x Hod klipa</InputLabel>
              <input 
                type="text" value={specs.bore_stroke} onChange={(e) => updateSpec('bore_stroke', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 82×61.5" />
            </div>
            <div>
              <InputLabel>Snaga (KS)</InputLabel>
              <input 
                type="text" value={specs.power} onChange={(e) => updateSpec('power', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 55.76 pri 7500 o/min" />
            </div>
            <div>
              <InputLabel>Maks. obrtni moment</InputLabel>
              <input 
                type="text" value={specs.max_torque} onChange={(e) => updateSpec('max_torque', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 62.0 Nm pri 6000 o/min" />
            </div>
            <div>
              <InputLabel>Stepen kompresije</InputLabel>
              <input 
                type="text" value={specs.compression_ratio} onChange={(e) => updateSpec('compression_ratio', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 10.3:1" />
            </div>
            <div>
              <InputLabel>Sistem ubrizgavanja goriva</InputLabel>
              <input 
                type="text" value={specs.fuel_system} onChange={(e) => updateSpec('fuel_system', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. EFI" />
            </div>
            <div>
              <InputLabel>Razvodni mehanizam</InputLabel>
              <input 
                type="text" value={specs.valve_train} onChange={(e) => updateSpec('valve_train', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. SOHC" />
            </div>
            <div>
              <InputLabel>Sistem paljenja</InputLabel>
              <input 
                type="text" value={specs.ignition_system} onChange={(e) => updateSpec('ignition_system', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. TCI" />
            </div>
            <div>
              <InputLabel>Starter</InputLabel>
              <input 
                type="text" value={specs.starter} onChange={(e) => updateSpec('starter', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Električni" />
            </div>
            <div>
              <InputLabel>Sistem podmazivanja</InputLabel>
              <input 
                type="text" value={specs.lubrication_system} onChange={(e) => updateSpec('lubrication_system', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Podmazivanje pod pritiskom..." />
            </div>
            <div>
              <InputLabel>Sistem hlađenja</InputLabel>
              <input 
                type="text" value={specs.cooling_system} onChange={(e) => updateSpec('cooling_system', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Tečnošću hlađen" />
            </div>
          </div>
        </div>

        {/* 3. Prenos (Transmission) */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <SectionHeader num="3" title="Prenos (Transmission)" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <InputLabel>Tip menjača</InputLabel>
              <input 
                type="text" value={specs.gear_shifting_type} onChange={(e) => updateSpec('gear_shifting_type', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 6-stepeni" />
            </div>
            <div>
              <InputLabel>Finalni prenos</InputLabel>
              <input 
                type="text" value={specs.transmission_type} onChange={(e) => updateSpec('transmission_type', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Kaiš" />
            </div>
            <div>
              <InputLabel>Tip kvačila</InputLabel>
              <input 
                type="text" value={specs.clutch_type} onChange={(e) => updateSpec('clutch_type', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Proklizavajuće kvačilo..." />
            </div>
            <div>
              <InputLabel>TCS (Kontrola proklizavanja)</InputLabel>
              <input 
                type="text" value={specs.tcs} onChange={(e) => updateSpec('tcs', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Sistem kontrole proklizavanja" />
            </div>
          </div>
        </div>

        {/* 4. Šasija i vešanje (Chassis) */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <SectionHeader num="4" title="Šasija i vešanje (Chassis)" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <InputLabel>Ram / Okvir</InputLabel>
              <input 
                type="text" value={specs.frame} onChange={(e) => updateSpec('frame', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Dupli cevasti" />
            </div>
            <div>
              <InputLabel>Prednji točak</InputLabel>
              <input 
                type="text" value={specs.front_wheel} onChange={(e) => updateSpec('front_wheel', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Aluminijumska legura" />
            </div>
            <div>
              <InputLabel>Prednje vešanje</InputLabel>
              <input 
                type="text" value={specs.front_suspension} onChange={(e) => updateSpec('front_suspension', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 43mm okrenuta teleskopska viljuška" />
            </div>
            <div>
              <InputLabel>Hod prednjeg vešanja (mm)</InputLabel>
              <input 
                type="number" value={specs.front_suspension_travel} onChange={(e) => updateSpec('front_suspension_travel', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 138" />
            </div>
            <div>
              <InputLabel>Prednja guma</InputLabel>
              <input 
                type="text" value={specs.front_tyre} onChange={(e) => updateSpec('front_tyre', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 130/70R18, CST" />
            </div>
            <div>
              <InputLabel>Zadnji točak</InputLabel>
              <input 
                type="text" value={specs.rear_wheel} onChange={(e) => updateSpec('rear_wheel', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Aluminijumska legura" />
            </div>
            <div>
              <InputLabel>Zadnje vešanje</InputLabel>
              <input 
                type="text" value={specs.rear_suspension} onChange={(e) => updateSpec('rear_suspension', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Pro-link mono amortizer..." />
            </div>
            <div>
              <InputLabel>Hod zadnjeg vešanja (mm)</InputLabel>
              <input 
                type="number" value={specs.rear_suspension_travel} onChange={(e) => updateSpec('rear_suspension_travel', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 48" />
            </div>
            <div>
              <InputLabel>Zadnja guma</InputLabel>
              <input 
                type="text" value={specs.rear_tyre} onChange={(e) => updateSpec('rear_tyre', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 200/55R16, CST" />
            </div>
            <div>
              <InputLabel>Prednja kočnica</InputLabel>
              <input 
                type="text" value={specs.front_brake} onChange={(e) => updateSpec('front_brake', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Dvostruki diskovi..." />
            </div>
            <div>
              <InputLabel>Prečnik prednjeg diska (mm)</InputLabel>
              <input 
                type="number" value={specs.front_brake_diameter} onChange={(e) => updateSpec('front_brake_diameter', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 300" />
            </div>
            <div>
              <InputLabel>Zadnja kočnica</InputLabel>
              <input 
                type="text" value={specs.rear_brake} onChange={(e) => updateSpec('rear_brake', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Disk, jednoklipna klešta" />
            </div>
            <div>
              <InputLabel>Prečnik zadnjeg diska (mm)</InputLabel>
              <input 
                type="number" value={specs.rear_brake_diameter} onChange={(e) => updateSpec('rear_brake_diameter', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 240" />
            </div>
          </div>
        </div>

        {/* 5. Dimenzije i težine (Dimensions and Weights) */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <SectionHeader num="5" title="Dimenzije i težine" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <InputLabel>Masa praznog vozila (kg)</InputLabel>
              <input 
                type="number" value={specs.curb_weight} onChange={(e) => updateSpec('curb_weight', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 255" />
            </div>
            <div>
              <InputLabel>Visina sedišta (mm)</InputLabel>
              <input 
                type="number" value={specs.seat_height} onChange={(e) => updateSpec('seat_height', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 710" />
            </div>
            <div>
              <InputLabel>Međuosovinsko rastojanje (mm)</InputLabel>
              <input 
                type="number" value={specs.wheelbase} onChange={(e) => updateSpec('wheelbase', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 1645" />
            </div>
            <div>
              <InputLabel>Ukupna dužina (mm)</InputLabel>
              <input 
                type="number" value={specs.overall_length} onChange={(e) => updateSpec('overall_length', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 2330" />
            </div>
            <div>
              <InputLabel>Ukupna širina (mm)</InputLabel>
              <input 
                type="number" value={specs.overall_width} onChange={(e) => updateSpec('overall_width', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 890" />
            </div>
            <div>
              <InputLabel>Ukupna visina (mm)</InputLabel>
              <input 
                type="number" value={specs.overall_height} onChange={(e) => updateSpec('overall_height', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 1115" />
            </div>
            <div>
              <InputLabel>Klirens / Odstojanje od tla (mm)</InputLabel>
              <input 
                type="number" value={specs.ground_clearance} onChange={(e) => updateSpec('ground_clearance', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 145" />
            </div>
            <div>
              <InputLabel>Kapacitet rezervoara (L)</InputLabel>
              <input 
                type="number" step="0.1" value={specs.fuel_capacity} onChange={(e) => updateSpec('fuel_capacity', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 18.5" />
            </div>
            <div>
              <InputLabel>Maksimalna brzina (km/h)</InputLabel>
              <input 
                type="number" value={specs.top_speed} onChange={(e) => updateSpec('top_speed', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 170" />
            </div>
            <div>
              <InputLabel>Maksimalna nosivost (kg)</InputLabel>
              <input 
                type="number" value={specs.max_loadage} onChange={(e) => updateSpec('max_loadage', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 180" />
            </div>
            <div>
              <InputLabel>Baterija</InputLabel>
              <input 
                type="text" value={specs.battery} onChange={(e) => updateSpec('battery', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. 12V, 14Ah" />
            </div>
          </div>
        </div>

        {/* 6. Sistemi asistencije i kontrole (Assistive and Control Features) */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <SectionHeader num="6" title="Sistemi asistencije i kontrole" />
          <div className="grid grid-cols-1 gap-8">
            <div>
              <InputLabel>Konfiguracija gasa</InputLabel>
              <input 
                type="text" value={specs.throttle_configuration} onChange={(e) => updateSpec('throttle_configuration', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Kontrola gasa sa dva kabla" />
            </div>
          </div>
        </div>

        {/* 7. Multimedija i komfor (Multimedia & Comfort Features) */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <SectionHeader num="7" title="Multimedija i komfor" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <InputLabel>Indikator stepena prenosa</InputLabel>
              <input 
                type="text" value={specs.gear_indicator} onChange={(e) => updateSpec('gear_indicator', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Uključeno" />
            </div>
            <div>
              <InputLabel>USB priključak za punjenje</InputLabel>
              <input 
                type="text" value={specs.usb_charging_port} onChange={(e) => updateSpec('usb_charging_port', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Type-A" />
            </div>
          </div>
        </div>

        {/* 8. Osvetljenje (Lighting Configuration) */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <SectionHeader num="8" title="Osvetljenje" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <InputLabel>Prednje svetlo</InputLabel>
              <input 
                type="text" value={specs.headlight} onChange={(e) => updateSpec('headlight', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. LED projektor + DRL" />
            </div>
            <div>
              <InputLabel>Zadnje svetlo</InputLabel>
              <input 
                type="text" value={specs.taillight} onChange={(e) => updateSpec('taillight', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. LED" />
            </div>
            <div>
              <InputLabel>Migavci</InputLabel>
              <input 
                type="text" value={specs.turn_signal} onChange={(e) => updateSpec('turn_signal', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. LED" />
            </div>
            <div>
              <InputLabel>Sva četiri migavca (hazard)</InputLabel>
              <input 
                type="text" value={specs.hazard_light} onChange={(e) => updateSpec('hazard_light', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Uključeno" />
            </div>
          </div>
        </div>

        {/* 9. Aktivna/Pasivna bezbednost (Active/Passive Safety Features) */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <SectionHeader num="9" title="Aktivna/Pasivna bezbednost" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <InputLabel>ABS sistem</InputLabel>
              <input 
                type="text" value={specs.abs_system} onChange={(e) => updateSpec('abs_system', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Uključeno, dvokanalni" />
            </div>
            <div>
              <InputLabel>Sistem kontrole trakcije (TCS)</InputLabel>
              <input 
                type="text" value={specs.traction_control_system} onChange={(e) => updateSpec('traction_control_system', e.target.value)}
                className="w-full bg-white border border-gray-300 px-5 py-4 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Uključeno" />
            </div>
          </div>
        </div>

        {/* 10. Dodatne specifikacije (Extra Specs) */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <SectionHeader num="10" title="Dodatne specifikacije" />
          <p className="text-gray-500 font-replica-light text-sm mb-6">
            Ovde možete dodati sve specifikacije koje se ne uklapaju u standardna polja iznad. Obavezno unesite kategoriju kojoj pripadaju (npr. "Komfor", "Multimedija", "Povezivost").
          </p>
          
          <div className="space-y-4">
            {extraSpecs.map((spec) => (
              <div key={spec.id} className="flex flex-col md:flex-row gap-4 items-start md:items-end border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <div className="w-full md:w-1/4">
                  <InputLabel>Kategorija</InputLabel>
                  <input 
                    type="text" value={spec.category} onChange={(e) => updateExtraSpec(spec.id, 'category', e.target.value)}
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Multimedija" />
                </div>
                <div className="w-full md:w-1/3">
                  <InputLabel>Naziv polja</InputLabel>
                  <input 
                    type="text" value={spec.label} onChange={(e) => updateExtraSpec(spec.id, 'label', e.target.value)}
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Grejači sedišta" />
                </div>
                <div className="w-full md:flex-1">
                  <InputLabel>Vrednost</InputLabel>
                  <input 
                    type="text" value={spec.value} onChange={(e) => updateExtraSpec(spec.id, 'value', e.target.value)}
                    className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:border-black focus:outline-none font-replica-light text-sm" placeholder="npr. Da" />
                </div>
                <button 
                  type="button" 
                  onClick={() => removeExtraSpec(spec.id)}
                  className="bg-red-500 text-white p-3 hover:bg-red-600 transition-colors shrink-0"
                  title="Obriši specifikaciju"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
            
            <button 
              type="button" 
              onClick={addExtraSpec}
              className="flex items-center gap-2 text-black font-replica font-bold uppercase tracking-widest text-[11px] hover:text-track-cyan transition-colors mt-4"
            >
              <Plus className="w-4 h-4" />
              Dodaj polje
            </button>
          </div>
        </div>

        {/* Slike Motora */}
        <div className="bg-gray-50 p-8 border border-gray-200 mt-12">
          <SectionHeader num="11" title="Slike Motora" />
          <div className="mb-10">
            <InputLabel>Glavna slika * (Prikazuje se na kartici i kao prva slika)</InputLabel>
            <div className="flex flex-col md:flex-row items-start gap-6 mt-2">
              {mainImageUrl && !mainImage && (
                <div className="relative w-full md:w-64 aspect-[4/3] overflow-hidden border border-gray-200">
                  <Image src={mainImageUrl} alt="Trenutna slika" fill className="object-cover" />
                </div>
              )}
              <div className="flex-1 w-full">
                <label className="flex flex-col items-center justify-center w-full aspect-[4/3] md:aspect-auto md:h-48 border-2 border-gray-300 border-dashed cursor-pointer hover:bg-white hover:border-black transition-all group bg-white/50">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="w-8 h-8 mb-4 text-gray-400 group-hover:text-black transition-colors" />
                    <p className="text-sm text-gray-500 group-hover:text-black transition-colors font-replica-light">
                      <span className="font-bold font-replica text-black">Klikni</span> ili prevuci sliku
                    </p>
                  </div>
                  <input type="file" accept="image/*" onChange={(e) => setMainImage(e.target.files?.[0] || null)} className="hidden" />
                </label>
                {mainImage && (
                  <p className="mt-3 text-xs text-black font-bold font-replica uppercase tracking-widest flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-track-cyan" /> Nova slika: {mainImage.name}
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
                    key={url} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
                    className="relative w-40 aspect-[4/3] overflow-hidden border border-gray-200 group"
                  >
                    <Image src={url} alt="Galerija" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button type="button" onClick={() => removeExistingGalleryImage(url)} className="bg-red-500 text-white w-10 h-10 flex items-center justify-center hover:bg-red-600 transition-all transform hover:scale-110">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
                {newGalleryFiles.map((file, index) => (
                  <motion.div 
                    key={`new-${index}`} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
                    className="relative w-40 aspect-[4/3] overflow-hidden border-2 border-black group"
                  >
                    <Image src={URL.createObjectURL(file)} alt="Nova slika" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button type="button" onClick={() => removeNewGalleryFile(index)} className="bg-red-500 text-white w-10 h-10 flex items-center justify-center hover:bg-red-600 transition-all transform hover:scale-110">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <label className="flex flex-col items-center justify-center w-40 aspect-[4/3] border-2 border-gray-300 border-dashed cursor-pointer hover:bg-white hover:border-black transition-all group bg-white/50">
                <Plus className="w-8 h-8 text-gray-400 group-hover:text-black transition-colors mb-2" />
                <span className="text-[10px] text-gray-400 font-replica-light group-hover:text-black transition-colors uppercase tracking-widest font-bold">Dodaj sliku</span>
                <input type="file" multiple accept="image/*" onChange={handleGalleryChange} className="hidden" />
              </label>
            </div>
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
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
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
