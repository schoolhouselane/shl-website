import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PrivacyPolicy from '@/components/legal/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how Schoolhouse Lane collects, processes, and protects your personal data.',
  alternates: { canonical: 'https://schoolhouselane.ai/privacy' },
  openGraph: {
    title: 'Privacy Policy — Schoolhouse Lane',
    description: 'Read our privacy policy to understand how Schoolhouse Lane collects, processes, and protects your personal data.',
    url: 'https://schoolhouselane.ai/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  )
}
