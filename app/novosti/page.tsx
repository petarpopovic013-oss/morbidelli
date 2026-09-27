import type { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { getNews } from '@/app/actions/news'
import Link from 'next/link'
import Image from 'next/image'
import { Newspaper, ArrowRight } from 'lucide-react'
import InnerPageHero from '@/app/components/InnerPageHero'

export const metadata: Metadata = {
  title: 'Novosti',
  description:
    'Najnovije Morbidelli vesti iz Srbije: novi modeli motocikala, predstavljanja, događaji, ponude i priče iz sveta vožnje.',
  alternates: { canonical: '/novosti' },
  openGraph: {
    url: '/novosti',
    title: 'Morbidelli novosti',
    description: 'Novi modeli, događaji i aktuelnosti iz sveta Morbidelli motocikala.',
  },
}

export const dynamic = 'force-dynamic'

export default async function NewsPage() {
  const newsList = await getNews()

  return (
    <>
      <Header />
      <main className="min-h-screen w-full flex-grow bg-white pt-[76px] lg:pt-[88px]">
        <InnerPageHero
          eyebrow="Aktuelnosti"
          title="Novosti"
          description="Pratite najnovije Morbidelli vesti iz Srbije — nove modele, predstavljanja, događaje, ponude i priče iz sveta vožnje."
          summary={
            <div>
              <strong className="block font-replica text-3xl font-bold text-black">
                {newsList.length.toString().padStart(2, '0')}
              </strong>
              <span className="font-replica-light text-[10px] uppercase tracking-[0.16em] text-gray-500">
                {newsList.length === 1 ? 'Objavljena vest' : 'Objavljenih vesti'}
              </span>
            </div>
          }
        />

        <section className="w-full bg-[#f5f5f3] px-4 py-14 md:px-6 md:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-8 md:mb-12">
              <span className="mb-3 block font-replica text-xs font-bold uppercase tracking-[0.2em] text-track-cyan">
                Morbidelli priče
              </span>
              <h2 className="font-replica text-3xl font-bold leading-[1.05] text-black md:text-5xl">
                Najnovije iz našeg sveta
              </h2>
            </div>

            {newsList.length === 0 ? (
              <div className="flex flex-col items-center justify-center border border-black/10 bg-white px-6 py-20 text-center">
                <Newspaper aria-hidden="true" className="mb-6 h-12 w-12 text-gray-300" />
                <h2 className="mb-4 font-replica text-3xl font-bold uppercase tracking-tight text-black">
                  Trenutno nema vesti
                </h2>
                <p className="mx-auto max-w-md font-replica-light text-sm leading-relaxed text-gray-500">
                  Pratite našu stranicu, uskoro ćemo objaviti nove informacije i događaje!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newsList.map((item) => (
                  <article
                    key={item.id}
                    className="group flex flex-col border border-black/10 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-black/30 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-gray-200 bg-gray-100">
                      {item.images && item.images.length > 0 ? (
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          fill
                          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Newspaper aria-hidden="true" className="h-12 w-12 text-gray-300" />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-8">
                      <span className="mb-4 block font-replica-light text-[9px] font-bold uppercase tracking-widest text-track-cyan">
                        {new Date(item.date).toLocaleDateString('sr-RS')}
                      </span>
                      <h3 className="mb-4 line-clamp-2 font-replica text-2xl font-bold uppercase tracking-tight text-black transition-colors group-hover:text-track-cyan">
                        {item.title}
                      </h3>
                      <p className="mb-6 line-clamp-3 font-replica-light text-sm text-gray-500">
                        {item.content}
                      </p>

                      <div className="mt-auto border-t border-gray-100 pt-6">
                        <Link
                          href={`/novosti/${item.slug}`}
                          className="flex items-center gap-2 font-replica text-[10px] font-bold uppercase tracking-widest text-black transition-all duration-300 hover:text-track-cyan"
                        >
                          PROČITAJ VIŠE
                          <ArrowRight
                            aria-hidden="true"
                            className="h-3 w-3 transition-transform group-hover:translate-x-2"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
