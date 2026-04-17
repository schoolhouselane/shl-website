import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'About Us — Schoolhouse Lane',
  description: 'Senior strategists, creatives, and brand architects operating at the intersection of imagination and commercial rigour. 79+ projects. 5-star rated. 99% client retention.',
  alternates: { canonical: 'https://schoolhouselane.co/about' },
  openGraph: {
    title: 'About Schoolhouse Lane — Senior Creative Commerce Team',
    description: 'Senior strategists, creatives, and brand architects. 79+ projects, 5-star rated, 99% client retention.',
    url: 'https://schoolhouselane.co/about',
    images: [{ url: '/images/about-hero.png', width: 1200, height: 630, alt: 'Schoolhouse Lane Team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Schoolhouse Lane',
    description: 'Senior strategists, creatives, and brand architects. 79+ projects, 5-star rated, 99% client retention.',
    images: ['/images/about-hero.png'],
  },
}
import Footer from '@/components/Footer'
import AboutHero from '@/components/about/AboutHero'
import Discovery from '@/components/about/Discovery'
import Principles from '@/components/about/Principles'
import AboutTeam from '@/components/about/AboutTeam'
import AboutStats from '@/components/about/AboutStats'
import LifeAtSHL from '@/components/about/LifeAtSHL'
import AboutCTA from '@/components/about/AboutCTA'

export default function AboutPage() {
  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <Header />
      <div className="pt-[64px] md:pt-[82px]">
        <AboutHero />
        <Discovery />
        <Principles />
        <AboutTeam />
        <AboutStats />
        <LifeAtSHL />
        <AboutCTA />
        <Footer />
      </div>
    </main>
  )
}
