import type { Metadata } from 'next'
import Header from '@/components/Header'
import ContactHero from '@/components/contact/ContactHero'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact — Let\'s Build Something Remarkable',
  description: 'Get in touch with Schoolhouse Lane. 15 minutes, no sales pitch — just actionable growth ideas tailored to your brand. hello@schoolhouselane.co',
  alternates: { canonical: 'https://schoolhouselane.co/contact' },
  openGraph: {
    title: 'Contact Schoolhouse Lane — Let\'s Talk Growth',
    description: '15 minutes, no sales pitch. Just actionable growth ideas tailored to your brand.',
    url: 'https://schoolhouselane.co/contact',
    images: [{ url: '/images/hero-1.png', width: 1200, height: 630, alt: 'Contact Schoolhouse Lane' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Schoolhouse Lane',
    description: '15 minutes, no sales pitch. Just actionable growth ideas tailored to your brand.',
    images: ['/images/hero-1.png'],
  },
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
