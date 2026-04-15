// ─── Shelby for the Ride — Case Study Data ──────────────────────────────────
// Edit this file to update the /work/shelby page.
// Never touch CaseStudyContent.tsx or CaseStudyHero.tsx.
// ─────────────────────────────────────────────────────────────────────────────

import type { CaseStudyData } from '@/lib/case-study-types'

export const shelbyData: CaseStudyData = {
  // ── Hero ──────────────────────────────────────────────────────────────────
  heroColor: '#04f9f4',
  heroImage: '/images/cs-shelby-hero.png',
  heroLines: ['The original', 'American ride.', 'Reimagined.'],
  heroAccentLine: 2,
  heroAccentColor: '#d8c09c',
  accentColor: '#d8c09c',

  // ── Title block ───────────────────────────────────────────────────────────
  category: 'BRAND IDENTITY — Campaigns',
  subtitle: 'Reimagining Legacy through Creative Commerce',

  // ── Sections ──────────────────────────────────────────────────────────────
  challengerStrategy: {
    title: 'The Challenger\nStrategy',
    intro:
      'Following our proven challenger brand principles — seen in our work for Real Man Wipes — we identified a market gap where competitors focused solely on marginal aerodynamic gains. Shelby instead weaponizes a dual-engine strategy:',
    items: [
      {
        label: 'Unassailable Financials:',
        text: 'A high-margin D2C model targeting a $41M SOM by Year 3, underpinned by a modular hardware architecture that creates a defensible "switching cost" moat.',
      },
      {
        label: 'Unapologetic Intelligence:',
        text: 'Moving beyond "hardware-only" sales to a software-defined ownership model, integrating a safety-first OS that drives recurring revenue and ecosystem LTV.',
      },
    ],
  },

  engineeringEcosystem: {
    title: 'Engineering\nthe Ecosystem',
    intro:
      'We architected the infrastructure for an exceptional brand experience, bridging the gap between heritage and the future of mobility intelligence.',
    items: [
      {
        label: 'The "Explorer" Archetype:',
        text: 'We grounded the brand in the Explorer archetype — pioneering and ambitious — to create an emotional connection with urban riders seeking fulfilment through discovery.',
      },
      {
        label: 'Data Economics:',
        text: 'Each bike acts as a "sensor node," transforming a static product into a living system where value compounds as the network grows.',
      },
      {
        label: 'Strategic Pricing:',
        text: 'We locked a flagship anchor at €9,490, utilising premium "Founders Edition" positioning to build brand equity and protect the floor against industry-standard discounting.',
      },
    ],
  },

  humanAdvantage: {
    title: 'The Human\nAdvantage',
    intro:
      "At Schoolhouse Lane, we believe there is \"no cure for curiosity\". For Shelby, this meant a human-centric design approach that prioritises rider protection and community. This work ensures that Shelby's most intangible asset — its 100-year soul — becomes its most measurable competitive advantage in the global bicycle arena.",
  },

  // ── Image ─────────────────────────────────────────────────────────────────
  // Full-width 16:9 image shown at the bottom of the Engineering Ecosystem section
  // Replace with a real case study photo
  sectionImage: '/images/work-shelby.png',

  // ── Metadata ──────────────────────────────────────────────────────────────
  metaClient: 'Shelby Cycles',
  metaYear: '2026',
  metaArea: 'Creative + AI',
  metaProject: 'Brand Identity',

  // ── Related work ──────────────────────────────────────────────────────────
  relatedSlugs: ['vivo-hotels', 'datadirect', 'real-map-wipes'],
}
