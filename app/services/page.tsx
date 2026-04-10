import Header from '@/components/Header'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesAccordion from '@/components/services/ServicesAccordion'
import Stats from '@/components/Stats'
import ServicesMethod from '@/components/services/ServicesMethod'
import ServicesCTAGrey from '@/components/services/ServicesCTAGrey'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <Header />
      <ServicesHero />
      <ServicesAccordion />
      <Stats />
      <ServicesMethod />
      <ServicesCTAGrey />
      <Footer />
    </main>
  )
}
