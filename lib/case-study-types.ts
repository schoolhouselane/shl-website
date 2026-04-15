// ─── Case Study — Type Definitions ──────────────────────────────────────────
//
// HOW TO ADD A NEW CASE STUDY:
//   1. Copy /data/case-studies/shelby.ts  →  rename it (e.g. vivo-hotels.ts)
//   2. Fill in every field (text, images, colours)
//   3. Add one line to /data/case-studies/index.ts
//   4. Done — /work/<slug> auto-uses the rich template
//
// ─────────────────────────────────────────────────────────────────────────────

export interface CaseStudySection {
  title: string          // supports \n line breaks, e.g. 'The Challenger\nStrategy'
  intro: string          // opening paragraph (Inter Regular)
  items?: Array<{
    label: string        // bold prefix, e.g. 'Unassailable Financials:'
    text: string         // rest of the list item (Inter Regular)
  }>
}

export interface CaseStudyData {
  // ── SEO (optional — falls back to project title/description) ─────────────
  seoTitle?: string
  seoDescription?: string

  // ── Hero ─────────────────────────────────────────────────────────────────
  heroColor: string          // background colour behind hero image, e.g. '#04f9f4'
  heroImage: string          // path to the wide hero image, e.g. '/images/cs-shelby-hero.png'
  heroLines: string[]        // italic lines on the right side of hero
  heroAccentLine: number     // 0-based index of the line that gets the accent colour
  heroAccentColor: string    // colour of that line, e.g. '#d8c09c'

  // ── Title block (below hero) ──────────────────────────────────────────────
  category: string           // breadcrumb tag, e.g. 'BRAND IDENTITY — Campaigns'
  subtitle: string           // subtitle below the big project title

  // ── Content sections ──────────────────────────────────────────────────────
  // Rendered in this order — communicationStrategy is optional
  challengerStrategy: CaseStudySection     // section 1: right-aligned (title left, list right)
  engineeringEcosystem: CaseStudySection   // section 2: same right-aligned layout + image below
  communicationStrategy?: CaseStudySection // section 2b: optional extra section
  humanAdvantage: CaseStudySection         // section 3: alongside related work sidebar

  // ── Images (Challenger Strategy section) ─────────────────────────────────
  challengerSideImage?: string   // single image in the left column of Challenger Strategy

  // ── Images (Engineering Ecosystem section) ───────────────────────────────
  ecosystemSideImages?: string[] // 1-2 images stacked in the left column of Engineering Ecosystem
  ecosystemMoodBoard?: string    // mood-board / collage image below the text on the right side

  // ── Metadata row ─────────────────────────────────────────────────────────
  metaClient: string
  metaYear: string
  metaArea: string
  metaProject: string

  // ── Related work ─────────────────────────────────────────────────────────
  relatedSlugs: [string, string, string]         // slugs from work-data.ts
  relatedThumbnails?: [string, string, string]   // optional thumbnail overrides (same order as relatedSlugs)
}
