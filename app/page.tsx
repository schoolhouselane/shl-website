import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Schoolhouse Lane — Creative Commerce Agency',
  description: 'Brand strategy, identity, campaigns, and websites built to drive revenue. 80+ brands transformed across hospitality, fintech, consumer, wellness, and fashion.',
  alternates: { canonical: 'https://schoolhouselane.co' },
  openGraph: {
    title: 'Schoolhouse Lane — Creative Commerce Agency',
    description: 'Brand strategy, identity, campaigns, and websites built to drive revenue.',
    url: 'https://schoolhouselane.co',
    images: [{ url: '/images/hero-1.png', width: 1200, height: 630, alt: 'Schoolhouse Lane' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schoolhouse Lane — Creative Commerce Agency',
    description: 'Brand strategy, identity, campaigns, and websites built to drive revenue.',
    images: ['/images/hero-1.png'],
  },
}
import Hero from '@/components/Hero'
import ServicesTabs from '@/components/ServicesTabs'
import SelectedWork from '@/components/SelectedWork'
import Vision from '@/components/Vision'
import Stats from '@/components/Stats'
import LatestNews from '@/components/LatestNews'
import Team from '@/components/Team'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#f5f3ef] overflow-x-hidden">
      <Header />
      <Hero />
      <ServicesTabs />
      <SelectedWork />
      <Vision />
      <Stats />
      <LatestNews />
      <Team />
      <Gallery />
      <Footer />
    </main>
  )
}
