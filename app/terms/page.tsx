import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TermsConditions from '@/components/legal/TermsConditions'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions governing your use of the Schoolhouse Lane website.',
  alternates: { canonical: 'https://schoolhouselane.ai/terms' },
  openGraph: {
    title: 'Terms & Conditions — Schoolhouse Lane',
    description: 'Read the terms and conditions governing your use of the Schoolhouse Lane website.',
    url: 'https://schoolhouselane.ai/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <TermsConditions />
      </main>
      <Footer />
    </>
  )
}
