// ─── DataDirect — Case Study Data ────────────────────────────────────────────
// Edit this file to update the /work/datadirect page.
// Never touch CaseStudyContent.tsx or CaseStudyHero.tsx.
// ─────────────────────────────────────────────────────────────────────────────

import type { CaseStudyData } from '@/lib/case-study-types'

export const datadirectData: CaseStudyData = {
  // ── Hero ──────────────────────────────────────────────────────────────────
  heroColor: '#1e1e20',
  heroImage: '/images/case-datadirect-1.png',
  heroLines: [],
  heroAccentLine: 0,
  heroAccentColor: '#ffffff',

  // ── Title block ───────────────────────────────────────────────────────────
  category: 'WEBSITES — Strategy',
  subtitle: 'Re-engineering the Growth Engine',

  // ── Sections ──────────────────────────────────────────────────────────────
  challengerStrategy: {
    title: 'The Transformation Strategy:\nDefining a New Game',
    intro:
      'Following our proven principles of Commercial Discipline, we recognized that the legacy model of traditional IT supply was becoming obsolete. We architected a complete market transformation to move DataDirect from a participant to a category creator:',
    items: [
      {
        label: 'Repositioning the Asset:',
        text: 'We shifted market perception from a "box-mover" to an indispensable, forward-thinking partner, creating a competitive shield and spear.',
      },
      {
        label: 'Building the Infrastructure:',
        text: 'What appears as a digital presence is actually a scalable commercial infrastructure — a living growth engine designed to drive customer acquisition and lifetime value.',
      },
    ],
  },

  engineeringEcosystem: {
    title: 'Engineering Latent Value:\nThe Intelligence Node',
    intro:
      'At Schoolhouse Lane, we use relentless inquiry to unearth the potential already existing within an organisation:',
    items: [
      {
        label: 'Collaborative Vision:',
        text: 'This strategy was co-created with the DataDirect team, using their granular market insight as the bedrock for a vision that unlocks latent value.',
      },
      {
        label: 'Data-Driven Foresight:',
        text: 'By treating brand as business strategy made tangible, we equipped the team with the foresight to dominate the market through unparalleled efficiency.',
      },
    ],
  },

  humanAdvantage: {
    title: 'The Measurable\nAdvantage',
    intro:
      "Our work provides the clarity necessary to unify internal cultures under a single, potent organising principle. This ensures that DataDirect's brand is no longer a downstream cost, but a strategic engine driving the business into its next phase of enterprise value creation.",
  },

  // ── Images ────────────────────────────────────────────────────────────────
  challengerSideImage: '/images/case-datadirect-2.png',
  ecosystemSideImages: ['/images/case-datadirect-3.png', '/images/case-datadirect-4.png'],
  ecosystemMoodBoard: '/images/case-datadirect-5.png',

  // ── Metadata ──────────────────────────────────────────────────────────────
  metaClient: 'DataDirect',
  metaYear: '2025',
  metaArea: 'Creative + AI',
  metaProject: 'Brand Identity',

  // ── Related work ──────────────────────────────────────────────────────────
  relatedSlugs: ['vivo-hotels', 'shelby', 'real-map-wipes'],
  relatedThumbnails: [
    '/images/related-vivo-hotels.png',
    '/images/related-shelby.png',
    '/images/related-real-man-wipes.png',
  ],
}
