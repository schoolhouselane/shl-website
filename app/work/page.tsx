import type { Metadata } from 'next'
import Header from '@/components/Header'
import WorkHero from '@/components/work/WorkHero'
import WorkGrid from '@/components/work/WorkGrid'
import WorkGallery from '@/components/work/WorkGallery'
import WorkCTA from '@/components/work/WorkCTA'
import LifeAtSHL from '@/components/LifeAtSHL'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Work — Selected Case Studies That Delivered Growth',
  description: 'Selected case studies where creativity met commerce and revenue followed. 80+ brands transformed across hospitality, fintech, consumer, wellness, fashion, and more.',
  alternates: { canonical: 'https://schoolhouselane.co/work' },
  openGraph: {
    title: 'Our Work — Schoolhouse Lane Case Studies',
    description: 'Selected case studies where creativity met commerce and revenue followed. 80+ brands transformed.',
    url: 'https://schoolhouselane.co/work',
    images: [{ url: '/images/work-hero-fashion.jpg', width: 1200, height: 630, alt: 'Schoolhouse Lane Work Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work — Schoolhouse Lane',
    description: 'Selected case studies where creativity met commerce and revenue followed.',
    images: ['/images/work-hero-fashion.jpg'],
  },
}

const workCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Work — Schoolhouse Lane',
  description: 'Selected case studies where creativity met commerce and revenue followed.',
  url: 'https://schoolhouselane.co/work',
  publisher: { '@id': 'https://schoolhouselane.co/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://schoolhouselane.co' },
      { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://schoolhouselane.co/work' },
    ],
  },
}

export default function WorkPage() {
  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workCollectionSchema) }}
      />
      <Header forceDark />
      <WorkHero />
      <WorkGrid />
      <LifeAtSHL />
      <WorkGallery />
      <WorkCTA />
      <Footer />
    </main>
  )
}
