import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServicesTabs from '@/components/ServicesTabs'
import SelectedWork from '@/components/SelectedWork'
import Vision from '@/components/Vision'
import LatestNews from '@/components/LatestNews'
import Team from '@/components/Team'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Schoolhouse Lane | AI-Powered Creative-as-a-Service Agency',
  description: 'SHL is an AI-powered Creative-as-a-Service (CaaS) platform. Brand identity, campaigns, AI creative & ecommerce — delivered at speed and scale for modern marketing teams.',
  alternates: { canonical: 'https://schoolhouselane.co' },
  openGraph: {
    title: 'Schoolhouse Lane | AI-Powered Creative-as-a-Service Agency',
    description: 'SHL is an AI-powered Creative-as-a-Service (CaaS) platform. Brand identity, campaigns, AI creative & ecommerce — delivered at speed and scale for modern marketing teams.',
    url: 'https://schoolhouselane.co',
    siteName: 'Schoolhouse Lane',
    locale: 'en_IE',
    type: 'website',
    images: [{ url: '/images/hero-1.webp', width: 1200, height: 630, alt: 'Schoolhouse Lane — AI-Powered Creative Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schoolhouse Lane | AI-Powered Creative-as-a-Service Agency',
    description: 'SHL is an AI-powered Creative-as-a-Service (CaaS) platform. Brand identity, campaigns, AI creative & ecommerce — delivered at speed and scale for modern marketing teams.',
    images: ['/images/hero-1.webp'],
  },
}

const homepageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://schoolhouselane.co/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Creative-as-a-Service and how does Schoolhouse Lane deliver it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Creative-as-a-Service (CaaS) means your marketing team gets a dedicated, on-demand creative partner — without hiring in-house or briefing a slow traditional agency. We embed AI-powered workflows into every project so you get enterprise-grade creative at a fraction of the time and cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Schoolhouse Lane different from a traditional creative agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We're not a traditional agency. We're an AI-powered CaaS platform — AI runs through every workflow, which means faster turnaround, greater output volume, and no compromise on craft.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with startups or only established brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both. We've worked with challenger DTC brands finding their voice and established businesses repositioning for new markets. What matters is ambition and a belief that great creative should move fast.",
      },
    },
    {
      '@type': 'Question',
      name: 'What services does your CaaS platform cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brand identity, AI creative, campaigns, ecommerce advertising, websites, and brand strategy. Most clients start with one need and expand across the platform as they see what AI-powered creative production can actually deliver.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can you deliver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Significantly faster than a traditional agency. AI-assisted workflows mean brand identity projects that used to take 12+ weeks can be delivered in 4–6. Campaign creative that once took weeks is turned in days. We scope everything clearly upfront so you always know what to expect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are your teams based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We operate across Dublin, Pristina, Lahore, and São Paulo — giving us full time-zone coverage so your creative never waits on a geography.',
      },
    },
  ],
}

export default function Home() {
  return (
    <main className="bg-[#f5f3ef] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }} suppressHydrationWarning />
      <Header />
      <Hero />
      <ServicesTabs />
      <SelectedWork />
      <Vision />
      <LatestNews />
      <Team />
      <Gallery />
      <Footer />
    </main>
  )
}
