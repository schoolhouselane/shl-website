import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingHero from '@/components/pricing/PricingHero'
import PricingLogos from '@/components/pricing/PricingLogos'
import PricingAIFirst from '@/components/pricing/PricingAIFirst'
import PricingPhotoStrip from '@/components/pricing/PricingPhotoStrip'
import PricingIncludes from '@/components/pricing/PricingIncludes'
import PricingPlans from '@/components/pricing/PricingPlans'
import PricingTestimonials from '@/components/pricing/PricingTestimonials'
import PricingFAQ from '@/components/pricing/PricingFAQ'
import PricingCTABanner from '@/components/pricing/PricingCTABanner'

export const metadata: Metadata = {
  title: 'Pricing — Serious Strategy. Unbeatable Speed.',
  description: 'Simple, transparent pricing for world-class brand strategy and AI-powered creative. From Brand Essentials at $3,500 to full enterprise creative suites.',
  alternates: { canonical: 'https://schoolhouselane.co/pricing' },
  openGraph: {
    title: 'Pricing — Schoolhouse Lane',
    description: 'Simple, transparent pricing for world-class brand strategy and AI-powered creative.',
    url: 'https://schoolhouselane.co/pricing',
    images: [{ url: '/images/pricing.png', width: 1200, height: 630, alt: 'Schoolhouse Lane Pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Schoolhouse Lane',
    description: 'Simple, transparent pricing for world-class brand strategy and AI-powered creative.',
    images: ['/images/pricing.png'],
  },
}

export default function PricingPage() {
  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <Header />
      <PricingHero />
      <PricingLogos />
      <PricingAIFirst />
      <PricingPhotoStrip />
      <PricingIncludes />
      <PricingPlans />
      <PricingTestimonials />
      <PricingFAQ />
      <PricingCTABanner />
      <Footer />
    </main>
  )
}
