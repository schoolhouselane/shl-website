import type { Metadata } from 'next'
import { Suspense } from 'react'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Services — Brand Strategy, Identity & Creative Commerce',
  description: 'Brand Identity, Campaigns, Websites, AI Creative, and Growth Consulting. We transform brand from a cost centre into a measurable engine for enterprise value creation.',
  alternates: { canonical: 'https://schoolhouselane.co/services' },
  openGraph: {
    title: 'Services — Schoolhouse Lane Brand Strategy & Creative',
    description: 'Brand Identity, Campaigns, Websites, AI Creative, and Growth Consulting.',
    url: 'https://schoolhouselane.co/services',
    images: [{ url: '/images/services-hero.png', width: 1200, height: 630, alt: 'Schoolhouse Lane Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services — Schoolhouse Lane',
    description: 'Brand Identity, Campaigns, Websites, AI Creative, and Growth Consulting.',
    images: ['/images/services-hero.png'],
  },
}
import ServicesHero from '@/components/services/ServicesHero'
import ServicesAccordion from '@/components/services/ServicesAccordion'
import ServicesCTADark from '@/components/services/ServicesCTADark'
import ServicesMethod from '@/components/services/ServicesMethod'
import ServicesCTAGrey from '@/components/services/ServicesCTAGrey'
import Footer from '@/components/Footer'

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Schoolhouse Lane Services",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "Service", "name": "Strategy & Growth Consulting", "provider": { "@type": "Organization", "name": "Schoolhouse Lane" }, "url": "https://schoolhouselane.co/services" } },
    { "@type": "ListItem", "position": 2, "item": { "@type": "Service", "name": "Brand Identity & Positioning", "provider": { "@type": "Organization", "name": "Schoolhouse Lane" }, "url": "https://schoolhouselane.co/services" } },
    { "@type": "ListItem", "position": 3, "item": { "@type": "Service", "name": "AI Creative & Innovation", "provider": { "@type": "Organization", "name": "Schoolhouse Lane" }, "url": "https://schoolhouselane.co/services" } },
    { "@type": "ListItem", "position": 4, "item": { "@type": "Service", "name": "Campaigns & Creative Direction", "provider": { "@type": "Organization", "name": "Schoolhouse Lane" }, "url": "https://schoolhouselane.co/services" } },
    { "@type": "ListItem", "position": 5, "item": { "@type": "Service", "name": "Websites & Digital Experiences", "provider": { "@type": "Organization", "name": "Schoolhouse Lane" }, "url": "https://schoolhouselane.co/services" } },
  ],
}

export default function ServicesPage() {
  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <Header forceDark />
      <ServicesHero />
      <Suspense fallback={null}>
        <ServicesAccordion />
      </Suspense>
      <ServicesCTADark />
      <ServicesMethod />
      <ServicesCTAGrey />
      <Footer />
    </main>
  )
}
