import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutHero from '@/components/about/AboutHero'
import Discovery from '@/components/about/Discovery'
import Principles from '@/components/about/Principles'
import AboutTeam from '@/components/about/AboutTeam'
import AboutStats from '@/components/about/AboutStats'
import LifeAtSHL from '@/components/about/LifeAtSHL'
import AboutCTA from '@/components/about/AboutCTA'

export const metadata: Metadata = {
  title: 'About Schoolhouse Lane — AI-Powered Creative-as-a-Service Platform',
  description: 'Learn about Schoolhouse Lane — an AI-powered CaaS platform for marketing teams. Creative directors, designers & AI specialists working at the intersection of brand and generative AI.',
  alternates: { canonical: 'https://schoolhouselane.co/about' },
  openGraph: {
    title: 'About Schoolhouse Lane — AI-Powered Creative-as-a-Service Platform',
    description: 'Learn about Schoolhouse Lane — an AI-powered CaaS platform for marketing teams. Creative directors, designers & AI specialists working at the intersection of brand and generative AI.',
    url: 'https://schoolhouselane.co/about',
    siteName: 'Schoolhouse Lane',
    locale: 'en_IE',
    images: [{ url: '/images/about-hero.png', width: 1200, height: 630, alt: 'Schoolhouse Lane Team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Schoolhouse Lane — AI-Powered CaaS Platform',
    description: 'Creative directors, designers & AI specialists working at the intersection of brand and generative AI.',
    images: ['/images/about-hero.png'],
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://schoolhouselane.co/about#webpage',
      url: 'https://schoolhouselane.co/about',
      name: 'About Schoolhouse Lane — AI-Powered Creative-as-a-Service Platform Since 2018',
      description: 'Meet the team behind Schoolhouse Lane — an AI-powered Creative-as-a-Service (CaaS) platform for modern marketing teams. Creative directors, AI specialists, brand strategists, and designers working at the intersection of generative AI and human craft since 2018.',
      isPartOf: { '@id': 'https://schoolhouselane.co/#website' },
      about: { '@id': 'https://schoolhouselane.co/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://schoolhouselane.co/#organization',
      name: 'Schoolhouse Lane',
      url: 'https://schoolhouselane.co',
      logo: 'https://schoolhouselane.co/logo.svg',
      email: 'hello@schoolhouselane.co',
      foundingDate: '2018',
      description: 'Schoolhouse Lane is an AI-powered Creative-as-a-Service (CaaS) platform — your marketing team\'s dedicated creative team. We deliver brand identity, AI creative, campaigns, ecommerce advertising, and strategy through AI-powered workflows built for speed, scale, and craft.',
      sameAs: [
        'https://linkedin.com/company/schoolhouselane',
        'https://behance.net/schoolhouselane',
        'https://instagram.com/schoolhouselane_',
      ],
      serviceType: [
        'AI-Powered Creative Production',
        'Creative-as-a-Service (CaaS)',
        'Generative AI Creative',
        'AI Brand Identity Design',
        'AI-Powered Campaign Production',
        'Ecommerce Advertising',
        'AI-Assisted Website Development',
        'DTC Brand Strategy',
        'Brand Strategy',
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Schoolhouse Lane Leadership & Creative Team',
      description: "The senior creative directors, AI specialists, strategists, designers, and advisors behind Schoolhouse Lane's AI-powered CaaS platform.",
      url: 'https://schoolhouselane.co/about',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Person', name: 'Darren McGrath', jobTitle: 'Partner & Creative Strategist', description: 'Cannes Lion-winning creative strategist with 25 years of experience in brand strategy, enterprise value creation, and AI-powered creative production.', worksFor: { '@id': 'https://schoolhouselane.co/#organization' } } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Person', name: 'Tea Sebenick', jobTitle: 'Client Services Manager', description: "Manages client relationships and CaaS delivery workflows across Schoolhouse Lane's global creative team.", worksFor: { '@id': 'https://schoolhouselane.co/#organization' } } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Person', name: 'Ermir Kryeziu', jobTitle: 'AI Creative Designer', description: 'AI-powered brand identity designer specialising in visual systems, generative design, and creative production at scale.', worksFor: { '@id': 'https://schoolhouselane.co/#organization' } } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Person', name: 'Marigona Culaj', jobTitle: 'AI Creative Designer', description: 'AI-powered designer delivering brand identity systems, campaign assets, and generative visual production across the CaaS platform.', worksFor: { '@id': 'https://schoolhouselane.co/#organization' } } },
        { '@type': 'ListItem', position: 5, item: { '@type': 'Person', name: 'Hassan Butt', jobTitle: 'Software Engineer', description: "Builds and maintains the AI-assisted digital platforms, ecommerce experiences, and web infrastructure powering Schoolhouse Lane's CaaS delivery.", worksFor: { '@id': 'https://schoolhouselane.co/#organization' } } },
        { '@type': 'ListItem', position: 6, item: { '@type': 'Person', name: 'Kamran Hussain', jobTitle: 'SEO & GEO Specialist', description: 'Drives organic growth and search visibility for Schoolhouse Lane and its clients through AI-informed SEO, GEO, and content strategy.', worksFor: { '@id': 'https://schoolhouselane.co/#organization' } } },
        { '@type': 'ListItem', position: 7, item: { '@type': 'Person', name: 'Dea Gjoshi', jobTitle: 'AI Content & Video Creator', description: 'Produces AI-enhanced video, social content, and brand storytelling assets across the Schoolhouse Lane CaaS platform.', worksFor: { '@id': 'https://schoolhouselane.co/#organization' } } },
        { '@type': 'ListItem', position: 8, item: { '@type': 'Person', name: 'Keith O\'Loughlin', jobTitle: 'Advisor to the Board', description: "Board advisor supporting Schoolhouse Lane's strategic growth, commercial development, and CaaS platform expansion.", worksFor: { '@id': 'https://schoolhouselane.co/#organization' } } },
        { '@type': 'ListItem', position: 9, item: { '@type': 'Person', name: 'Andy Hoskins', jobTitle: 'Advisor to the Board', description: 'Board advisor contributing expertise in brand growth, creative commerce, and AI-powered marketing platform development.', worksFor: { '@id': 'https://schoolhouselane.co/#organization' } } },
        { '@type': 'ListItem', position: 10, item: { '@type': 'Person', name: 'Johnny Ingle', jobTitle: 'Advisor to the Board', description: "Board advisor supporting Schoolhouse Lane's positioning as a leading AI-powered Creative-as-a-Service platform for modern marketing teams.", worksFor: { '@id': 'https://schoolhouselane.co/#organization' } } },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} suppressHydrationWarning />
      <Header />
      <div className="pt-[64px] md:pt-[82px]">
        <AboutHero />
        <Discovery />
        <Principles />
        <AboutTeam />
        <AboutStats />
        <LifeAtSHL />
        <AboutCTA />
        <Footer />
      </div>
    </main>
  )
}
