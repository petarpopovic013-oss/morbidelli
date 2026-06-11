'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Newspaper, ArrowRight } from 'lucide-react'
import { DeleteNewsButton } from './DeleteNewsButton'
import { News } from '@/app/actions/news'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
} as const

export function NewsDashboardClient({ newsList }: { newsList: News[] }) {
  return (
    <div className="py-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 border-b-2 border-black pb-8"
      >
        <div>
          <span className="text-track-cyan font-replica-light tracking-widest text-xs font-bold uppercase mb-2 block">
            Administracija
          </span>
          <h1 className="text-5xl font-replica font-bold text-black uppercase tracking-tight">
            Vesti
          </h1>
        </div>
        
        <Link 
          href="/admin/novosti/add"
          className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 font-replica font-bold uppercase tracking-widest text-[11px] hover:bg-track-cyan transition-colors duration-300 w-full md:w-auto"
        >
          <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
          Dodaj Novu Vest
        </Link>
      </motion.div>

      {newsList.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-50 border border-gray-200 p-20 text-center flex flex-col items-center justify-center shadow-sm"
        >
          <div className="w-24 h-24 bg-white border border-gray-200 flex items-center justify-center mb-8">
            <Newspaper className="w-12 h-12 text-gray-300" />
          </div>
          <h2 className="text-3xl font-bold font-replica mb-4 uppercase tracking-tight text-black">Nema vesti</h2>
          <p className="text-gray-500 font-replica-light text-sm max-w-md mx-auto leading-relaxed">
            Još uvek nema dodatih vesti. Kliknite na dugme iznad da biste dodali prvu vest.
          </p>
        </motion.div>
      ) : (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsList.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className="group bg-white border border-gray-200 flex flex-col hover:border-black transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden border-b border-gray-200">
                {item.images && item.images.length > 0 ? (
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-gray-300" />
                  </div>
                )}
                
                <div className="absolute bottom-4 right-4">
                  <span className="inline-block bg-track-cyan text-black text-[11px] uppercase tracking-widest font-bold px-3 py-2 font-replica">
                    {new Date(item.date).toLocaleDateString('sr-RS')}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col bg-white">
                <h3 className="text-2xl font-bold font-replica mb-4 group-hover:text-track-cyan transition-colors uppercase tracking-tight text-black line-clamp-2">
                  {item.title}
                </h3>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-4">
                  <Link 
                    href={`/admin/novosti/${item.id}/edit`}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-black text-black hover:text-white border border-gray-200 hover:border-black py-3 font-replica uppercase tracking-widest text-[10px] font-bold transition-all duration-300"
                  >
                    IZMENI
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <DeleteNewsButton id={item.id} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
