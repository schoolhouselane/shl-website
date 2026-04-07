import Header from '@/components/Header'
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
    <main className="bg-[#f5f3ef] overflow-hidden">
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
