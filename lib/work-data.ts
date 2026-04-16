export interface WorkProject {
  id: number
  slug: string
  title: string
  category: string
  tags: string[]
  description: string
  image: string
  heroImage: string
  year: string
  client: string
  challenge: string
  approach: string
  deliverables: string[]
  results: Array<{ value: string; label: string }>
}

export const projects: WorkProject[] = [
  {
    id: 1,
    slug: 'shelby',
    title: 'Shelby for the Ride',
    category: 'BRAND IDENTITY',
    tags: ['BRAND IDENTITY', 'CAMPAIGNS'],
    description:
      'A heritage motorsport brand repositioned for the modern performance lifestyle market. Bold visual identity, campaign direction, and digital activation across every touchpoint.',
    image: '/images/work-shelby.png',
    heroImage: '/images/case-shelby-1.png',
    year: '2024',
    client: 'Shelby',
    challenge:
      'Shelby carried decades of motorsport heritage — iconic, respected, but ageing. The brief was clear: honour the legacy without being imprisoned by it. A new generation of performance enthusiasts needed to be captured without alienating existing loyal fans.',
    approach:
      'We started with deep positioning work — finding the space where heritage authenticity meets modern performance lifestyle. The visual system draws on the rawness of motorsport culture, reframed in a contemporary design language: bold typography, high-contrast compositions, and campaign direction that puts the rider at the centre of the story.',
    deliverables: [],
    results: [],
  },
  {
    id: 2,
    slug: 'vivo-hotels',
    title: 'Vivo Hotels',
    category: 'WEBSITES',
    tags: ['WEBSITES', 'BRAND IDENTITY'],
    description:
      'Conversion-engineered digital experience for a boutique hotel group. Built to elevate perceived value and turn browsers into bookers.',
    image: '/images/work-vivo.png',
    heroImage: '/images/work-vivo.png',
    year: '2024',
    client: 'Vivo Hotels',
    challenge:
      'Vivo Hotels had a strong physical product but their digital presence failed to communicate it. The website was losing potential guests to OTAs and competitors — every booking made through a third party was margin lost, and the brand told.',
    approach:
      'We rebuilt the website from a conversion lens, starting with how guests actually shop hotels online. A premium editorial design language — full-bleed photography, refined typography, and considered page architecture — elevated perceived value. Booking friction was removed at every step.',
    deliverables: [
      'UX Strategy',
      'Web Design',
      'Front-End Development',
      'Brand Refresh',
      'Photography Art Direction',
      'SEO Foundations',
    ],
    results: [
      { value: '+42%', label: 'Direct booking conversion' },
      { value: '-28%', label: 'OTA dependency' },
      { value: '2.4×', label: 'Average session duration' },
    ],
  },
  {
    id: 3,
    slug: 'datadirect',
    title: 'DataDirect',
    category: 'WEBSITES',
    tags: ['WEBSITES', 'STRATEGY'],
    description:
      'Conversion-engineered digital experience for an enterprise data platform. Built to communicate complex technical value and drive qualified pipeline growth.',
    image: '/images/work-datadirect.png',
    heroImage: '/images/work-datadirect.png',
    year: '2024',
    client: 'DataDirect',
    challenge:
      'DataDirect had a powerful product but a website that failed to translate its value to enterprise buyers. The existing site was technically dense and conversion-blind — losing qualified leads at every step of the funnel.',
    approach:
      'We redesigned the digital experience around the enterprise buying journey — clear value propositions, social proof architecture, and a conversion flow built to guide prospects from awareness to demo request. The result was a site that finally worked as hard as the product it represented.',
    deliverables: [
      'UX Strategy',
      'Web Design',
      'Front-End Development',
      'Messaging Architecture',
      'SEO Foundations',
      'Analytics Setup',
    ],
    results: [
      { value: '+38%', label: 'Demo request conversion' },
      { value: '↓ 44%', label: 'Bounce rate' },
      { value: '2×', label: 'Qualified pipeline growth' },
    ],
  },
  {
    id: 4,
    slug: 'real-map-wipes',
    title: 'Real Map Wipes',
    category: 'BRAND IDENTITY',
    tags: ['BRAND IDENTITY', 'CAMPAIGNS'],
    description:
      'Brand identity and packaging system built to command shelf presence and own a distinct visual language in a crowded consumer category.',
    image: '/images/work-real-map-wipes.png',
    heroImage: '/images/work-real-map-wipes.png',
    year: '2024',
    client: 'Real Map Wipes',
    challenge:
      'In a saturated personal care category, differentiation at shelf is everything. Real Map Wipes needed an identity system that communicated product efficacy, premium positioning, and brand personality — all within seconds of a purchase decision.',
    approach:
      'We developed a bold, distinctive visual identity system anchored in a confident brand personality. The packaging design uses contrast, typography, and considered material choices to stand out in-store and translate seamlessly across DTC digital channels.',
    deliverables: [
      'Brand Strategy',
      'Visual Identity',
      'Packaging Design',
      'Brand Guidelines',
      'Digital Adaptation',
      'Retail Rollout',
    ],
    results: [
      { value: '↑ 3×', label: 'Shelf standout score' },
      { value: '+55%', label: 'DTC conversion rate' },
      { value: '12', label: 'Retail doors launched' },
    ],
  },
]

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  prev: WorkProject | null
  next: WorkProject | null
} {
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
