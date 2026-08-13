// Single source of truth for blog categories (rendered as tags on /blog and
// /blog/[slug], and offered in the admin editor).
//
// Renames are handled by LEGACY_ALIASES + normalizeCategory rather than a data
// migration, so posts already sitting in cms_posts keep displaying correctly
// without a DB write. Add the old name here whenever a category is renamed.

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

// 'AI' covers AI subject matter; 'Technology' covers the platform/product posts
// (Client Hub). Every historical AI spelling collapses into 'AI'.
const LEGACY_ALIASES: Record<string, BlogCategory> = {
  Branding: 'Marketing',
  'Branding & Finance': 'Marketing',
  'AI Strategy': 'AI',
  'AI & Strategy': 'AI',
  'AI & Technology': 'AI',
  'AI & Leadership': 'Leadership',
  'Creative Commerce': 'Creative',
  Digital: 'Technology',
}

/** Map any stored category string onto the current set. Unknown values fall back to Strategy. */
export function normalizeCategory(raw: string | null | undefined): BlogCategory {
  if (!raw) return 'Strategy'
  const trimmed = raw.trim()
  if ((BLOG_CATEGORIES as readonly string[]).includes(trimmed)) return trimmed as BlogCategory
  return LEGACY_ALIASES[trimmed] ?? 'Strategy'
}
