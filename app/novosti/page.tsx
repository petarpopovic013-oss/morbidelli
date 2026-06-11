import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { getNews } from '@/app/actions/news'
import Link from 'next/link'
import Image from 'next/image'
import { Newspaper, ArrowRight } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function NewsPage() {
  const newsList = await getNews()

  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col w-full bg-white pt-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl py-20 flex-grow flex flex-col">
          <div className="border-b-2 border-black pb-8 mb-16">
            <span className="text-track-cyan font-replica-light tracking-widest text-xs font-bold uppercase mb-2 block">
              Aktuelnosti
            </span>
            <h1 className="text-5xl md:text-6xl font-replica font-bold text-black uppercase tracking-tight">
              Novosti
            </h1>
          </div>

          {newsList.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 p-20 text-center flex flex-col items-center justify-center">
              <Newspaper className="w-12 h-12 text-gray-300 mb-6" />
              <h2 className="text-3xl font-bold font-replica mb-4 uppercase tracking-tight text-black">Trenutno nema vesti</h2>
              <p className="text-gray-500 font-replica-light text-sm max-w-md mx-auto leading-relaxed">
                Pratite našu stranicu, uskoro ćemo objaviti nove informacije i događaje!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsList.map((item) => (
                <div key={item.id} className="group flex flex-col bg-white border border-gray-200 hover:border-black transition-all duration-300">
                  <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden border-b border-gray-200">
                    {item.images && item.images.length > 0 ? (
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Newspaper className="w-12 h-12 text-gray-300" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="text-track-cyan font-replica-light tracking-widest text-[9px] font-bold uppercase mb-4 block">
                      {new Date(item.date).toLocaleDateString('sr-RS')}
                    </span>
                    <h3 className="text-2xl font-bold font-replica mb-4 group-hover:text-track-cyan transition-colors uppercase tracking-tight text-black line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 font-replica-light text-sm mb-6 line-clamp-3">
                      {item.content}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <Link 
                        href={`/novosti/${item.slug}`}
                        className="flex items-center gap-2 text-black hover:text-track-cyan font-replica uppercase tracking-widest text-[10px] font-bold transition-all duration-300"
                      >
                        PROČITAJ VIŠE
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
