import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { getNews, getNewsBySlug } from '@/app/actions/news'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import StructuredData from '@/app/components/StructuredData'
import { absoluteUrl, truncateDescription } from '@/app/lib/seo'

export async function generateStaticParams() {
  const news = await getNews()
  return news.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const newsItem = await getNewsBySlug(slug)

  if (!newsItem) {
    return {
      title: 'Vest nije pronađena',
      robots: { index: false, follow: false },
    }
  }

  const description = truncateDescription(newsItem.content)
  const pathname = `/novosti/${newsItem.slug}`

  return {
    title: newsItem.title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: 'article',
      locale: 'sr_RS',
      url: pathname,
      title: newsItem.title,
      description,
      publishedTime: new Date(newsItem.date).toISOString(),
      images: newsItem.images?.map((image) => ({ url: image, alt: newsItem.title })),
    },
    twitter: {
      card: 'summary_large_image',
      title: newsItem.title,
      description,
      images: newsItem.images?.[0] ? [newsItem.images[0]] : undefined,
    },
  }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const newsItem = await getNewsBySlug(resolvedParams.slug)

  if (!newsItem) {
    notFound()
  }

  // Odvajamo prvu sliku kao hero sliku, ostale idu ispod
  const heroImage = newsItem.images && newsItem.images.length > 0 ? newsItem.images[0] : null
  const galleryImages = newsItem.images && newsItem.images.length > 1 ? newsItem.images.slice(1) : []
  const articleUrl = absoluteUrl(`/novosti/${newsItem.slug}`)
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${articleUrl}#article`,
    headline: newsItem.title,
    description: truncateDescription(newsItem.content),
    image: newsItem.images || [],
    datePublished: new Date(newsItem.date).toISOString(),
    dateModified: new Date(newsItem.created_at || newsItem.date).toISOString(),
    inLanguage: "sr-RS",
    mainEntityOfPage: articleUrl,
    author: { "@id": `${absoluteUrl("/")}#organization` },
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
  }
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Naslovna", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Novosti", item: absoluteUrl("/novosti") },
      { "@type": "ListItem", position: 3, name: newsItem.title, item: articleUrl },
    ],
  }

  return (
    <>
      <StructuredData data={[articleStructuredData, breadcrumbStructuredData]} />
      <Header />
      <main className="flex-grow flex flex-col w-full bg-white pt-24 min-h-screen selection:bg-track-cyan selection:text-black">
        <article className="container mx-auto px-6 max-w-5xl py-20">
          
          {/* Breadcrumb / Back button */}
          <Link 
            href="/novosti"
            className="inline-flex items-center gap-3 text-gray-500 hover:text-black font-replica uppercase tracking-widest text-[11px] font-bold mb-16 transition-all hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Nazad na Vesti
          </Link>

          {/* Header Sekcija */}
          <header className="mb-16">
            <div className="flex items-center gap-3 text-track-cyan font-replica-light text-sm mb-6 border-l-2 border-track-cyan pl-4">
              <Calendar className="w-5 h-5 text-black" />
              <time dateTime={newsItem.date} className="text-black uppercase tracking-widest font-bold">
                {new Date(newsItem.date).toLocaleDateString('sr-RS', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-replica font-bold text-black uppercase tracking-tighter leading-[1.1]">
              {newsItem.title}
            </h1>
          </header>

          {/* Hero Slika (Prva slika) */}
          {heroImage && (
            <div className="relative w-full aspect-[21/9] bg-gray-100 overflow-hidden mb-20">
              <Image
                src={heroImage}
                alt={newsItem.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Sadržaj (Tekst) */}
          <div className="max-w-3xl mx-auto mb-24">
            <div className="prose prose-lg md:prose-xl prose-p:font-replica-light prose-p:text-gray-600 prose-p:leading-relaxed prose-headings:font-replica prose-headings:uppercase prose-headings:tracking-tight prose-a:text-track-cyan whitespace-pre-wrap">
              {newsItem.content}
            </div>
          </div>

          {/* Galerija Slika (Ostale slike) */}
          {galleryImages.length > 0 && (
            <div className="border-t-2 border-black pt-16">
              <h3 className="text-2xl font-replica font-bold uppercase tracking-tight mb-8">
                Galerija
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="group relative w-full aspect-[4/3] bg-gray-100 overflow-hidden border border-gray-200 hover:border-black transition-colors">
                    <Image
                      src={img}
                      alt={`${newsItem.title} - galerija slika ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}
