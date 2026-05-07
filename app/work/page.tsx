import type { Metadata } from 'next'
import Header from '@/components/Header'
import WorkHero from '@/components/work/WorkHero'
import WorkGrid from '@/components/work/WorkGrid'
import WorkGallery from '@/components/work/WorkGallery'
import WorkCTA from '@/components/work/WorkCTA'
import LifeAtSHL from '@/components/LifeAtSHL'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Creative Work & Case Studies - Schoolhouse Lane',
  description: 'Real case studies in AI-powered brand identity design, campaigns, ecommerce & DTC creative. Work that moves fast, scales smart, and sells beautifully.',
  alternates: { canonical: 'https://schoolhouselane.co/work' },
  openGraph: {
    title: 'AI Creative Work & Case Studies - Schoolhouse Lane',
    description: 'Real case studies in AI-powered brand identity design, campaigns, ecommerce & DTC creative. Work that moves fast, scales smart, and sells beautifully.',
    url: 'https://schoolhouselane.co/work',
    siteName: 'Schoolhouse Lane',
    locale: 'en_IE',
    images: [{ url: '/images/work-hero-fashion.jpg', width: 1200, height: 630, alt: 'Schoolhouse Lane AI Creative Work' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Creative Work & Case Studies - Schoolhouse Lane',
    description: 'Real case studies in AI-powered brand identity design, campaigns, ecommerce & DTC creative.',
    images: ['/images/work-hero-fashion.jpg'],
  },
}

const workSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://schoolhouselane.co/work#webpage',
      url: 'https://schoolhouselane.co/work',
      name: 'AI Creative Work & Case Studies — Schoolhouse Lane',
      description: 'Real case studies in AI-powered brand identity, campaign creative, ecommerce, and DTC strategy. Work produced through a Creative-as-a-Service model that moves fast, scales smart, and sells beautifully.',
      isPartOf: { '@id': 'https://schoolhouselane.co/#website' },
      about: { '@id': 'https://schoolhouselane.co/#organization' },
    },
    {
      '@type': 'ItemList',
      name: 'Selected AI-Powered Work That Delivered Growth',
      description: 'AI-powered brand identity, campaign, and digital commerce case studies from Schoolhouse Lane — a Creative-as-a-Service platform for modern marketing teams.',
      url: 'https://schoolhouselane.co/work',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'CreativeWork',
            name: 'DataDirect',
            description: 'A full AI-powered brand strategy and digital engagement for an enterprise data platform. AI-assisted design and development rebuilt their entire digital experience to communicate complex technical value clearly and convert qualified pipeline at scale.',
            url: 'https://schoolhouselane.co/work/datadirect',
            creator: { '@id': 'https://schoolhouselane.co/#organization' },
            keywords: 'ai brand strategy, ai powered website design, ai digital experience, caas creative, enterprise digital marketing',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'CreativeWork',
            name: 'Vivi Hotels',
            description: 'AI-powered brand identity and ecommerce website for a boutique hotel group. AI-assisted design elevated their digital presence to match the in-person guest experience — turning passive browsers into confident bookers, faster than traditional production.',
            url: 'https://schoolhouselane.co/work/vivo-hotels',
            creator: { '@id': 'https://schoolhouselane.co/#organization' },
            keywords: 'ai brand identity design, ai powered visual identity, ai ecommerce website, caas brand design, hospitality brand identity',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'CreativeWork',
            name: 'Shelby Cycles',
            description: 'An AI-powered brand repositioning and creative campaign for a heritage motorsport brand entering the modern performance lifestyle market. Bold AI-assisted identity, campaign direction, and digital activation — repositioned from legacy to cultural relevance at CaaS speed.',
            url: 'https://schoolhouselane.co/work/shelby',
            creator: { '@id': 'https://schoolhouselane.co/#organization' },
            keywords: 'ai brand repositioning, ai creative campaign, ai visual identity design, generative ai brand design, caas campaign production',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'CreativeWork',
            name: 'Real Man Wipes',
            description: 'An AI-powered DTC brand strategy and identity project for a consumer brand competing for shelf space in a crowded category. AI-accelerated packaging and visual identity design built to stop the scroll, own the aisle, and scale across every touchpoint.',
            url: 'https://schoolhouselane.co/work/real-map-wipes',
            creator: { '@id': 'https://schoolhouselane.co/#organization' },
            keywords: 'ai dtc brand strategy, ai brand identity, ai powered packaging design, generative ai creative, caas dtc creative, ai consumer brand design',
          },
        },
      ],
    },
  ],
}

export default function WorkPage() {
  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }} suppressHydrationWarning />
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
