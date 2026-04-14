import type { Metadata } from 'next'
import Header from '@/components/Header'
import WorkHero from '@/components/work/WorkHero'
import WorkGrid from '@/components/work/WorkGrid'
import WorkGallery from '@/components/work/WorkGallery'
import WorkCTA from '@/components/work/WorkCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Work — Schoolhouse Lane',
  description: 'Selected projects where creativity met commerce and revenue followed. 80+ brands transformed across hospitality, fintech, consumer, wellness, fashion, and more.',
  alternates: { canonical: 'https://schoolhouselane.co/work' },
  openGraph: {
    title: 'Work — Schoolhouse Lane',
    description: 'Selected projects where creativity met commerce and revenue followed.',
    url: 'https://schoolhouselane.co/work',
  },
}

export default function WorkPage() {
  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <Header forceDark />
      <WorkHero />
      <WorkGrid />
      <WorkGallery />
      <WorkCTA />
      <Footer />
    </main>
  )
}
