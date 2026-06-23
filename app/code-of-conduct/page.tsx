import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeOfConduct from '@/components/legal/CodeOfConduct'

export const metadata: Metadata = {
  title: 'Code of Conduct — Schoolhouse Lane',
  description: 'Our Code of Conduct sets out the standards we expect from everyone who interacts with Schoolhouse Lane.',
  alternates: { canonical: 'https://schoolhouselane.ai/code-of-conduct' },
  openGraph: {
    title: 'Code of Conduct — Schoolhouse Lane',
    description: 'Our Code of Conduct sets out the standards we expect from everyone who interacts with Schoolhouse Lane.',
    url: 'https://schoolhouselane.ai/code-of-conduct',
  },
}

export default function CodeOfConductPage() {
  return (
    <>
      <Header />
      <main>
        <CodeOfConduct />
      </main>
      <Footer />
    </>
  )
}
