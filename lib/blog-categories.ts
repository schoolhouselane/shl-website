// Single source of truth for blog tags (rendered on /blog and /blog/[slug],
// offered in the admin editor, and used by the listing filter).
//
// A post carries one or more tags and appears under every one of them in the
// filter — e.g. an AI post tagged ['AI', 'Strategy'] shows under both.
//
// Renames are handled by LEGACY_ALIASES + normalizeTag rather than a data
// migration, so rows already in cms_posts keep displaying correctly.

export const BLOG_CATEGORIES = [
  'Strategy',
  'Marketing',
  'AI',
  'Technology',
  'Leadership',
  'Culture',
  'Creative',
  'SEO',
] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

const LEGACY_ALIASES: Record<string, BlogCategory> = {
  Branding: 'Marketing',
  'Branding & Finance': 'Marketing',
  Digital: 'Technology',
  'AI Strategy': 'AI',
  'AI & Strategy': 'AI',
  'AI & Technology': 'AI',
  'AI & Leadership': 'AI',
  'Creative Commerce': 'Creative',
}

/** Map one stored label onto the current set. Unknown values fall back to Strategy. */
export function normalizeCategory(raw: string | null | undefined): BlogCategory {
  if (!raw) return 'Strategy'
  const trimmed = raw.trim()
  if ((BLOG_CATEGORIES as readonly string[]).includes(trimmed)) return trimmed as BlogCategory
  return LEGACY_ALIASES[trimmed] ?? 'Strategy'
}

/**
 * Normalize whatever a post stores into a deduped tag list in BLOG_CATEGORIES
 * order. Accepts a tags array, a single legacy category string, or a
 * comma-separated string, so old and new records both work.
 */
export function normalizeTags(raw: string | string[] | null | undefined): BlogCategory[] {
  const parts = Array.isArray(raw) ? raw : String(raw ?? '').split(',')
  const mapped = parts.map(p => p.trim()).filter(Boolean).map(normalizeCategory)
  const unique = [...new Set(mapped.length ? mapped : ['Strategy' as BlogCategory])]
  // Stable, canonical order so two posts with the same tags render identically.
  return BLOG_CATEGORIES.filter(c => unique.includes(c))
}
