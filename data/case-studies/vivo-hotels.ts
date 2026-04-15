// ─── Shelby for the Ride — Case Study Data ──────────────────────────────────
// Edit this file to update the /work/shelby page.
// Never touch CaseStudyContent.tsx or CaseStudyHero.tsx.
// ─────────────────────────────────────────────────────────────────────────────

import type { CaseStudyData } from '@/lib/case-study-types'

export const vivoHotelsData: CaseStudyData = {
  // ── Hero ──────────────────────────────────────────────────────────────────
  heroColor: '#1e1208',
  heroImage: '/images/case-vivo-1.png',
  heroLines: [],
  heroAccentLine: 1,
  heroAccentColor: '#d8c09c',

  // ── Title block ───────────────────────────────────────────────────────────
  category: 'BRAND IDENTITY — Campaigns',
  subtitle: 'Architecting the Theatre of the Living',

  // ── Sections ──────────────────────────────────────────────────────────────
  challengerStrategy: {
    title: 'The Challenger\nStrategy',
    intro:
      'Our philosophy centers on the conviction that profit follows purpose. For Vivo—a name defined by "life and vigour"—we identified that the most powerful engine for growth is not a spreadsheet, but the relentless inquiry into the traveler\'s psyche.',
    items: [
      {
        label: 'Targeting the Modern Mid-Lifer',
        text: 'We focused on the high-value 35–55 demographic, for whom travel is a curated immersion into local energy rather than a retreat from it.',
      },
      {
        label: 'The Intersection of Creativity and Revenue:',
        text: ' By shifting from "sterile cocoons" to "vibrant communal hubs," we transform the hotel into a high-leverage asset that validates the guest\'s relevance and vitality.',
      },
    ],
  },

  engineeringEcosystem: {
    title: 'Communication Strategy:\nCreative Commerce\nin Motion',
    intro:
      'We architected a brand ecosystem where every touchpoint accelerates business goals by fostering emotional and ethical connections.',
    items: [
      {
        label: 'Anti-Isolationism & Vitality:',
        text: 'Marketing imagery has been strategically pivoted away from "quiet spas" toward sensory "cues of life," such as ambient music and visible social movement, to act as a psychological "fountain of youth" for guests.',
      },
      {
        label: 'The "Work-Life Integration" Shift:',
        text: 'For the business traveler, the hotel\'s energy serves as an antidote to corporate fatigue, making a calendar obligation feel like a life experience.',
      },
      {
        label: 'Visual & Structural Alignment:',
        text: 'Using a grounded palette and the modern "Aptly" typeface, we created a soft yet structural aesthetic that prioritises legibility and architectural transparency.',
      },
    ],
  },

  humanAdvantage: {
    title: 'The Measurable \nAdvantage',
    intro:
      "By treating brand as business strategy made tangible, we ensure that Vivo Hotels does not just capture market share, but captures hearts and minds.",
  },

  // ── Challenger Strategy image ─────────────────────────────────────────────
  challengerSideImage: '/images/case-vivo-2.png',

  // ── Engineering Ecosystem images ──────────────────────────────────────────
  // Two images stacked in the LEFT column, alongside the text on the right.
  ecosystemSideImages: ['/images/case-vivo-3.png', '/images/case-vivo-4.png'],
  // Mood-board / collage image shown below the text on the right side.
  ecosystemMoodBoard: '/images/case-vivo-5.png',

  // ── Metadata ──────────────────────────────────────────────────────────────
  metaClient: 'vivo hotel',
  metaYear: '2026',
  metaArea: 'Creative + AI',
  metaProject: 'Brand Identity',

  // ── Related work ──────────────────────────────────────────────────────────
  relatedSlugs: ['real-map-wipes', 'vivo-hotels', 'datadirect'],
  relatedThumbnails: [
    '/images/related-real-man-wipes.png',
    '/images/related-vivo-hotels.png',
    '/images/work-datadirect.png',
  ],
}
