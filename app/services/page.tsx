import type { Metadata } from 'next'
import { Suspense } from 'react'
import Header from '@/components/Header'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesAccordion from '@/components/services/ServicesAccordion'
import ServicesCTADark from '@/components/services/ServicesCTADark'
import ServicesMethod from '@/components/services/ServicesMethod'
import ServicesCTAGrey from '@/components/services/ServicesCTAGrey'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI-Powered Creative & Design Services - Schoolhouse Lane',
  description: 'Brand identity, AI creative, campaigns & web design — all delivered through an AI-powered CaaS model built for marketing teams that need speed, quality, and scale.',
  alternates: { canonical: 'https://schoolhouselane.co/services' },
  openGraph: {
    title: 'AI-Powered Creative & Design Services - Schoolhouse Lane',
    description: 'Brand identity, AI creative, campaigns & web design — all delivered through an AI-powered CaaS model built for marketing teams that need speed, quality, and scale.',
    url: 'https://schoolhouselane.co/services',
    siteName: 'Schoolhouse Lane',
    locale: 'en_IE',
    images: [{ url: '/images/services-hero.webp', width: 1200, height: 630, alt: 'Schoolhouse Lane AI Creative Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Creative & Design Services - Schoolhouse Lane',
    description: 'Brand identity, AI creative, campaigns & web design — all delivered through an AI-powered CaaS model.',
    images: ['/images/services-hero.webp'],
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://schoolhouselane.co/services#webpage',
      url: 'https://schoolhouselane.co/services',
      name: 'AI-Powered Creative Services & CaaS Platform — Schoolhouse Lane',
      description: 'AI-powered brand identity, generative AI creative, campaigns, websites, and strategy — delivered through a Creative-as-a-Service platform built for marketing teams that need speed and scale.',
      isPartOf: { '@id': 'https://schoolhouselane.co/#website' },
      about: { '@id': 'https://schoolhouselane.co/#organization' },
    },
    {
      '@type': 'Service',
      name: 'AI-Informed Brand Strategy',
      description: 'AI-powered brand strategy, go-to-market planning, competitive market analysis, positioning, and growth audits — built for brands that need strategic clarity fast.',
      provider: { '@id': 'https://schoolhouselane.co/#organization' },
      url: 'https://schoolhouselane.co/services',
    },
    {
      '@type': 'Service',
      name: 'AI-Powered Brand Identity',
      description: 'AI-accelerated brand identity design covering logo, visual identity systems, colour, typography, motion identity, verbal identity, and brand guidelines — delivered at CaaS speed.',
      provider: { '@id': 'https://schoolhouselane.co/#organization' },
      url: 'https://schoolhouselane.co/services',
    },
    {
      '@type': 'Service',
      name: 'Generative AI Creative Production',
      description: 'AI-powered creative production including generative visual systems, campaign asset creation, AI creative iteration, and on-demand content at scale — the core of our CaaS model.',
      provider: { '@id': 'https://schoolhouselane.co/#organization' },
      url: 'https://schoolhouselane.co/services',
    },
    {
      '@type': 'Service',
      name: 'AI-Powered Campaigns & Creative Direction',
      description: 'AI-accelerated campaign production spanning integrated campaigns, creative direction, art direction, and social-first content — delivered faster without sacrificing creative ambition.',
      provider: { '@id': 'https://schoolhouselane.co/#organization' },
      url: 'https://schoolhouselane.co/services',
    },
    {
      '@type': 'Service',
      name: 'AI-Assisted Websites & Digital Experiences',
      description: 'Conversion-focused website design and development built through AI-assisted workflows — Webflow, Next.js, ecommerce, and DTC builds rooted in brand strategy and performance.',
      provider: { '@id': 'https://schoolhouselane.co/#organization' },
      url: 'https://schoolhouselane.co/services',
    },
    {
      '@type': 'Service',
      name: 'AI-Enhanced Photography & Video',
      description: 'Cinematic brand photography and video production enhanced by AI-powered post-production — delivering more assets, faster, at the quality modern marketing teams demand.',
      provider: { '@id': 'https://schoolhouselane.co/#organization' },
      url: 'https://schoolhouselane.co/services',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://schoolhouselane.co/services#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Creative-as-a-Service actually mean for my marketing team?',
          acceptedAnswer: { '@type': 'Answer', text: 'It means you get a dedicated, on-demand creative team — covering brand identity, AI creative, campaigns, video, and web — without the overhead of building in-house or the friction of a traditional agency retainer. You brief us, we deliver. AI workflows mean you get more output, faster, without paying more for it.' },
        },
        {
          '@type': 'Question',
          name: 'What AI tools and workflows do you use?',
          acceptedAnswer: { '@type': 'Answer', text: "We use a combination of leading generative AI tools alongside our own proprietary workflows — embedded across concept development, visual system generation, campaign production, and asset delivery. We use AI to make our senior team's thinking move faster and produce more, not to replace it." },
        },
        {
          '@type': 'Question',
          name: 'What does your brand identity service include?',
          acceptedAnswer: { '@type': 'Answer', text: 'Everything from logo and visual identity design to colour systems, typography, motion identity, verbal identity, and full brand guidelines — built and iterated at AI-assisted speed. We deliver complete identity systems, not just logos, in significantly less time than a traditional studio.' },
        },
        {
          '@type': 'Question',
          name: 'How is this different from hiring a traditional branding agency?',
          acceptedAnswer: { '@type': 'Answer', text: 'Speed, scale, and structure. A traditional agency builds linearly. We operate as an always-on CaaS platform — AI-powered workflows run in parallel, iterations happen in real time, and your output does not stop when a project ends. Most clients see 2–3x faster delivery on equivalent scope.' },
        },
        {
          '@type': 'Question',
          name: 'Do you work with in-house marketing teams or replace them?',
          acceptedAnswer: { '@type': 'Answer', text: 'We work alongside them. Schoolhouse Lane is built to be your marketing team\'s creative team — extending your capacity without duplicating your headcount. We plug into your workflows, your brand guidelines, and your brief cadence.' },
        },
        {
          '@type': 'Question',
          name: 'How does AI fit into brand strategy — not just design?',
          acceptedAnswer: { '@type': 'Answer', text: 'Significantly. We use AI-powered market analysis, competitive auditing, and audience research to inform brand positioning before a single creative decision is made. Strategy built on real data, delivered faster — that\'s the CaaS difference.' },
        },
      ],
    },
  ],
}

export default function ServicesPage() {
  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} suppressHydrationWarning />
      <Header forceDark />
      <ServicesHero />
      <Suspense fallback={null}>
        <ServicesAccordion />
      </Suspense>
      <ServicesCTADark />
      <ServicesMethod />
      <ServicesCTAGrey />
      <Footer />
    </main>
  )
}
