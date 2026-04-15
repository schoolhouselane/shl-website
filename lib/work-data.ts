// ─── Case Study rich content ────────────────────────────────────────────────
// Each project can have an optional `caseStudy` block.
// To create a NEW case study page:
//   1. Add a new object to the `projects` array below (copy an existing one)
//   2. Fill in all the fields — especially the `caseStudy` block
//   3. Add images to /public/images/  and reference them in `sideImages` / `galleryImages`
//   4. The page will be live at /work/<slug> automatically
// ─────────────────────────────────────────────────────────────────────────────
export interface CaseStudyData {
  heroColor: string           // background colour behind the hero image, e.g. '#04f9f4'
  heroImage: string           // hero image path (different from card thumbnail), e.g. '/images/cs-shelby-hero.png'
  heroLines: string[]         // text lines overlaid on the right side of the hero
  heroAccentLine: number      // index (0-based) of the line that gets the accent colour
  heroAccentColor: string     // colour of the accent line, e.g. '#d8c09c'
  category: string            // tag line, e.g. 'BRAND IDENTITY — Campaigns'
  subtitle: string            // one-line subtitle below the big title

  // Three content sections (title + body text)
  section1Title: string       // e.g. 'The Challenger Strategy'
  section1Body: string        // body copy — use \n\n for paragraph breaks

  section2Title: string       // e.g. 'Engineering the Ecosystem'
  section2Body: string

  section3Title: string       // e.g. 'The Human Advantage'
  section3Body: string

  // Left-column images (shown beside sections 1 & 2)
  sideImage1: string          // /images/...
  sideImage2: string          // /images/...

  // Small photo grid shown inside section 2
  galleryImages: string[]     // 3–6 images, e.g. ['/images/cs-shelby-g1.png', ...]

  // Project metadata row at the bottom
  metaClient: string
  metaYear: string
  metaArea: string
  metaProject: string

  // Slugs of 3 other projects to show in "Related Work"
  relatedSlugs: [string, string, string]
}

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
  caseStudy?: CaseStudyData   // optional — if present, uses the rich Figma template
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
    heroImage: '/images/work-shelby.png',
    year: '2024',
    client: 'Shelby',
    challenge:
      'Shelby carried decades of motorsport heritage — iconic, respected, but ageing. The brief was clear: honour the legacy without being imprisoned by it. A new generation of performance enthusiasts needed to be captured without alienating existing loyal fans.',
    approach:
      'We started with deep positioning work — finding the space where heritage authenticity meets modern performance lifestyle. The visual system draws on the rawness of motorsport culture, reframed in a contemporary design language: bold typography, high-contrast compositions, and campaign direction that puts the rider at the centre of the story.',
    deliverables: [
      'Brand Strategy',
      'Visual Identity System',
      'Campaign Direction',
      'Digital Activation',
      'Photography Direction',
      'Brand Guidelines',
    ],
    results: [
      { value: '3×', label: 'Increase in brand engagement' },
      { value: '2.1M+', label: 'Campaign impressions' },
      { value: '4', label: 'Markets launched' },
    ],

    // ── CASE STUDY RICH CONTENT ──────────────────────────────────────────────
    // To create a new case study: copy this entire `caseStudy` block,
    // paste it into another project entry, and change the text + images.
    // ─────────────────────────────────────────────────────────────────────────
    caseStudy: {
      heroColor: '#04f9f4',
      heroImage: '/images/cs-shelby-hero.png',
      heroLines: ['The original', 'American ride.', 'Reimagined.'],
      heroAccentLine: 2,
      heroAccentColor: '#d8c09c',
      category: 'BRAND IDENTITY — Campaigns',
      subtitle: 'Reimagining Legacy through Creative Commerce',

      section1Title: 'The Challenger Strategy',
      section1Body:
        'Following our proven challenger brand principles — seen in our work for Real Man Wipes — we identified a market gap where competitors focused solely on marginal aerodynamic gains. Shelby instead weaponises a dual-engine strategy:\n\n' +
        '1. Unassailable Financials: A high-margin D2C model targeting a $41M SOM by Year 3, underpinned by a modular hardware architecture that creates a defensible "switching cost" moat.\n\n' +
        '2. Unapologetic Intelligence: Moving beyond "hardware-only" sales to a software-defined ownership model, integrating a safety-first OS that drives recurring revenue and ecosystem LTV.',

      section2Title: 'Engineering the Ecosystem',
      section2Body:
        'We architected the infrastructure for an exceptional brand experience, bridging the gap between heritage and the future of mobility intelligence.\n\n' +
        'The "Explorer" Archetype: We grounded the brand in the Explorer archetype — pioneering and ambitious — to create an emotional connection with urban riders seeking fulfilment through discovery.\n\n' +
        'Data Economics: Each bike acts as a "sensor node," transforming a static product into a living system where value compounds as the network grows.\n\n' +
        'Strategic Pricing: We locked a flagship anchor at €9,490, utilising premium "Founders Edition" positioning to build brand equity and protect the floor against industry-standard discounting.',

      section3Title: 'The Human Advantage',
      section3Body:
        'At Schoolhouse Lane, we believe there is "no cure for curiosity". For Shelby, this meant a human-centric design approach that prioritises rider protection and community. This work ensures that Shelby\'s most intangible asset — its 100-year soul — becomes its most measurable competitive advantage in the global bicycle arena.',

      // Left-column images (add your own images here)
      sideImage1: '/images/work-shelby.png',
      sideImage2: '/images/work-shelby.png',

      // Small photo grid inside section 2 (3–6 images)
      galleryImages: [
        '/images/work-shelby.png',
        '/images/work-shelby.png',
        '/images/work-shelby.png',
        '/images/work-shelby.png',
      ],

      metaClient: 'Shelby Cycles',
      metaYear: '2026',
      metaArea: 'Creative + AI',
      metaProject: 'Brand Identity',

      relatedSlugs: ['vivo-hotels', 'datadirect', 'real-map-wipes'],
    },
  },
  {
    id: 2,
    slug: 'sealac',
    title: 'SEALAC',
    category: 'BRAND IDENTITY',
    tags: ['BRAND IDENTITY', 'CAMPAIGNS'],
    description:
      'Complete brand transformation for an international aquaculture company. From market positioning to visual identity, built to command a premium category.',
    image: '/images/work-2.png',
    heroImage: '/images/work-2.jpg',
    year: '2024',
    client: 'SEALAC',
    challenge:
      'Operating in a commoditised sector, SEALAC needed to break out of category conventions and establish a premium position in international markets. Their existing identity undersold the quality and innovation behind their operations.',
    approach:
      'We conducted category analysis and stakeholder interviews to identify whitespace in the premium aquaculture segment. The resulting brand system uses refined typography, a restrained colour palette, and imagery that elevates the natural quality of the product — positioning SEALAC as the benchmark in the sector.',
    deliverables: [
      'Market Positioning',
      'Brand Identity',
      'Campaign Strategy',
      'Packaging Direction',
      'Digital Presence',
      'Investor Presentation',
    ],
    results: [
      { value: '↑ 60%', label: 'Premium category perception' },
      { value: '3', label: 'International markets entered' },
      { value: '18mo', label: 'Brief to market launch' },
    ],
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    slug: 'minful',
    title: 'Minful — Health Come First',
    category: 'CAMPAIGNS',
    tags: ['CAMPAIGNS', 'BRAND IDENTITY'],
    description:
      'Integrated campaign strategy and creative direction for a wellness platform. Positioned at the intersection of clinical credibility and consumer desirability.',
    image: '/images/work-4.png',
    heroImage: '/images/work-4.jpg',
    year: '2024',
    client: 'Minful',
    challenge:
      'The wellness category is overcrowded and under-differentiated. Minful needed to earn trust from a health-aware audience without losing the warmth and accessibility that drive consumer adoption. Clinical and approachable are not natural bedfellows.',
    approach:
      "We built the campaign strategy on a single insight: people don't want to be lectured about health — they want to feel empowered. Creative direction used real stories, honest language, and visual choices that balanced aspiration with accessibility. The result was a brand that felt both credible and human.",
    deliverables: [
      'Campaign Strategy',
      'Creative Direction',
      'Brand Identity',
      'Social Content System',
      'Influencer Framework',
      'Launch Activation',
    ],
    results: [
      { value: '2M+', label: 'Platform users reached' },
      { value: '4.2×', label: 'App download growth' },
      { value: '67%', label: 'Audience retention rate' },
    ],
  },
  {
    id: 6,
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
  {
    id: 7,
    slug: 'gallery-series',
    title: 'Gallery Campaign Series',
    category: 'GALLERY & VIDEOS',
    tags: ['GALLERY & VIDEOS', 'CAMPAIGNS'],
    description:
      'Cinematic product and lifestyle photography and video series that elevated perceived value and drove conversion across DTC channels.',
    image: '/images/work-5.png',
    heroImage: '/images/work-5.jpg',
    year: '2024',
    client: 'Gallery',
    challenge:
      "The client's products were premium in quality but their visual assets told a different story. Generic photography was suppressing conversion rates and undermining the brand's premium positioning across paid and organic channels.",
    approach:
      "We directed and produced a series of cinematic campaign shoots — stills and video — with art direction built around the product's core values. Location, talent, and post-production were managed to a clear visual brief that prioritised elevated, conversion-led imagery.",
    deliverables: [
      'Art Direction',
      'Photography Direction',
      'Video Production',
      'Post Production',
      'Campaign Rollout',
      'Asset Library',
    ],
    results: [
      { value: '+89%', label: 'DTC conversion uplift' },
      { value: '120+', label: 'Campaign assets delivered' },
      { value: '3×', label: 'Paid social ROAS' },
    ],
  },
  {
    id: 8,
    slug: 'ai-creative',
    title: 'AI Creative System',
    category: 'AI CREATIVE',
    tags: ['AI CREATIVE', 'STRATEGY'],
    description:
      'An LLM-powered brand voice engine and generative visual system built for a fast-scaling consumer brand. Speed without sacrificing strategic intent.',
    image: '/images/work-6.png',
    heroImage: '/images/work-6.jpg',
    year: '2024',
    client: 'Confidential',
    challenge:
      'A fast-growing DTC brand needed to produce high-quality brand content at a pace traditional creative processes could not support. The challenge was not just speed — it was maintaining brand coherence and strategic intent across a high-volume output.',
    approach:
      "We designed and built a custom LLM-powered brand voice engine, trained on the brand's strategic positioning, tone guidelines, and top-performing content. Paired with a generative visual system, the result was always-on creative infrastructure that produced on-brand output at scale — with human oversight at every strategic touchpoint.",
    deliverables: [
      'AI Strategy',
      'Brand Voice Engine',
      'Generative Visual System',
      'Content Framework',
      'Quality Governance',
      'Team Training',
    ],
    results: [
      { value: '10×', label: 'Content output increase' },
      { value: '-65%', label: 'Cost per creative asset' },
      { value: '100%', label: 'Brand consistency score' },
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
