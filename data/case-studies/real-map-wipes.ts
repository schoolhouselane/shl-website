// ─── Real Map Wipes — Case Study Data ────────────────────────────────────────
// Edit this file to update the /work/real-map-wipes page.
// Never touch CaseStudyContent.tsx or CaseStudyHero.tsx.
// ─────────────────────────────────────────────────────────────────────────────

import type { CaseStudyData } from '@/lib/case-study-types'

export const realMapWipesData: CaseStudyData = {
  // ── Hero ──────────────────────────────────────────────────────────────────
  heroColor: '#1e1e20',
  heroImage: '/images/case-rmw-1.png',
  heroLines: [],
  heroAccentLine: 0,
  heroAccentColor: '#ffffff',

  // ── Title block ───────────────────────────────────────────────────────────
  category: 'BRAND IDENTITY — Campaigns',
  subtitle: 'Weaponising Commercial Models with Attitude',

  // ── Sections ──────────────────────────────────────────────────────────────
  challengerStrategy: {
    title: 'The Challenger Strategy:\nCalculated War',
    intro:
      'Following our proven principles of efficiency and commercial discipline, we identified a market saturated with a single tone and engineered a dual-engine strategy to declare war on the establishment:',
    items: [
      {
        label: 'Unassailable Financials:',
        text: 'We built a profitable brand from the ground up, first crafting a ruthlessly efficient supply chain and margin structure to ensure the business is a force for significant returns.',
      },
      {
        label: 'Unapologetic Attitude:',
        text: 'We are weaponising this commercial model for Europe with an irreverent, masculine brand voice and a "Man cleaning made easy" communications platform.',
      },
    ],
  },

  engineeringEcosystem: {
    title: 'Engineering the\nInfluencer Ecosystem',
    intro:
      'At Schoolhouse Lane, we bridge the gap between imagination and revenue by identifying the true levers of growth:',
    items: [
      {
        label: 'Strategic Targeting:',
        text: "While the product champions a masculine identity, our advertising strategically targets women. By speaking to the primary household purchasing agents, we drive trial and adoption through the home's most powerful influencer.",
      },
      {
        label: 'Creative Commerce:',
        text: 'This synergy of calculated financial modeling and bold, category-challenging creativity carves out a culturally resonant position from market leaders.',
      },
    ],
  },

  humanAdvantage: {
    title: 'The Measurable\nAdvantage',
    intro:
      "By treating brand as business strategy made tangible, we allow new product launches to punch way above their weight. This work ensures that Real Man Wipes doesn't just capture market share, but establishes a highly profitable, defensible position within the establishment.",
  },

  // ── Images ────────────────────────────────────────────────────────────────
  challengerSideImage: '/images/case-rmw-2.png',
  ecosystemSideImages: ['/images/case-rmw-3.png', '/images/case-rmw-4.png'],
  ecosystemMoodBoard: '/images/case-rmw-5.png',

  // ── Metadata ──────────────────────────────────────────────────────────────
  metaClient: 'Real Man Wipes',
  metaYear: '2026',
  metaArea: 'Creative + AI',
  metaProject: 'Brand Identity',

  // ── Related work ──────────────────────────────────────────────────────────
  relatedSlugs: ['shelby', 'vivo-hotels', 'datadirect'],
  relatedThumbnails: [
    '/images/related-shelby.png',
    '/images/related-vivo-hotels.png',
    '/images/work-datadirect.png',
  ],
}
