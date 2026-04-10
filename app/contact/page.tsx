import Header from '@/components/Header'
import ContactHero from '@/components/contact/ContactHero'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact — Schoolhouse Lane',
  description: 'Get in touch. 15 minutes, no sales pitch. Just actionable growth ideas tailored to your brand.',
}

export default function ContactPage() {
  return (
    <main className="bg-[#f5f3ef] overflow-x-hidden">
      <Header forceDark />
      <ContactHero />
      <Footer />
    </main>
  )
}
