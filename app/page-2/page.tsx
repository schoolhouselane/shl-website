export const metadata = { robots: { index: false, follow: false } }

import Header from '@/components/Header'
import HeroFullBleed from '@/components/HeroFullBleed'
import ServicesTabs from '@/components/ServicesTabs'
import SelectedWork from '@/components/SelectedWork'
import Vision from '@/components/Vision'
import Stats from '@/components/Stats'
import LatestNews from '@/components/LatestNews'
import Team from '@/components/Team'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function HomeV2() {
  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <Header />
      <HeroFullBleed />
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
