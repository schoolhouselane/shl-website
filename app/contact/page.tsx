import type { Metadata } from 'next'
import Header from '@/components/Header'
import ContactHero from '@/components/contact/ContactHero'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact — Schoolhouse Lane',
  description: 'Get in touch. 15 minutes, no sales pitch. Just actionable growth ideas tailored to your brand.',
  alternates: { canonical: 'https://schoolhouselane.co/contact' },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Schoolhouse Lane",
  "description": "Get in touch. 15 minutes, no sales pitch. Just actionable growth ideas tailored to your brand.",
  "url": "https://schoolhouselane.co/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Schoolhouse Lane",
    "email": "hello@schoolhouselane.co",
    "url": "https://schoolhouselane.co",
  },
}

export default function ContactPage() {
  return (
    <main className="bg-[#f5f3ef] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Header forceDark />
      <ContactHero />
      <Footer />
    </main>
  )
}
