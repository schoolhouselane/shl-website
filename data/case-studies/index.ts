// ─── Case Study Registry ─────────────────────────────────────────────────────
// To add a new case study:
//   1. Create  /data/case-studies/<slug>.ts   (copy shelby.ts as a starting point)
//   2. Import and add one line below
//   3. That's it — /work/<slug> will use the rich template automatically
// ─────────────────────────────────────────────────────────────────────────────

import type { CaseStudyData } from '@/lib/case-study-types'
import { shelbyData } from './shelby'
import { vivoHotelsData } from './vivo-hotels'
import { realMapWipesData } from './real-map-wipes'
import { datadirectData } from './datadirect'

const registry: Record<string, CaseStudyData> = {
  shelby: shelbyData,
  'vivo-hotels': vivoHotelsData,
  'real-map-wipes': realMapWipesData,
  datadirect: datadirectData,
}

export function getCaseStudyData(slug: string): CaseStudyData | undefined {
  return registry[slug]
}
