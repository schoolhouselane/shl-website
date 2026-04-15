import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Schoolhouse Lane — Creative Commerce Agency',
  description: 'We exist at the intersection of creativity and revenue growth. A senior team of brand strategists and creatives transforming brand into a high-leverage strategic asset.',
  alternates: { canonical: 'https://schoolhouselane.co' },
}
import Hero from '@/components/Hero'
import WorkStrip from '@/components/WorkStrip'
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
      <WorkStrip />
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
