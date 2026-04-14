import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'About — Schoolhouse Lane',
  description: 'A small, senior team of strategists, creatives, and brand architects. We bring deep expertise and genuine curiosity to every brief.',
  alternates: { canonical: 'https://schoolhouselane.co/about' },
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
