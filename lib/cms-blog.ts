import sql from './db'
import { allBlogPosts, type BlogPost, type ContentBlock } from './blog-data'

// ─── DB row type ─────────────────────────────────────────────────────────────

export interface CmsRow {
  id: number
  slug: string
  title: string
  category: string
  hero_image: string
  listing_image: string | null
  seo_title: string | null
  seo_description: string | null
  keywords: string[]
  published_at: string
  author_name: string
  author_role: string
  author_bio: string
  author_image: string
  body: ContentBlock[]
  is_published: boolean
  created_at: Date
  updated_at: Date
}

// ─── Write operations ─────────────────────────────────────────────────────────

export interface PostInput {
  slug: string
  title: string
  category: string
  heroImage: string
  listingImage: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
  publishedAt: string
  authorName: string
  authorRole: string
  authorBio: string
  authorImage: string
  body: ContentBlock[]
  isPublished: boolean
}

export async function createPost(data: PostInput): Promise<number> {
  const rows = await sql<[{ id: number }]>`
    INSERT INTO cms_posts (
      slug, title, category, hero_image, listing_image,
      seo_title, seo_description, keywords, published_at,
      author_name, author_role, author_bio, author_image,
      body, is_published
    ) VALUES (
      ${data.slug}, ${data.title}, ${data.category},
      ${data.heroImage}, ${data.listingImage || null},
      ${data.seoTitle || null}, ${data.seoDescription || null},
      ${data.keywords}, ${data.publishedAt},
      ${data.authorName}, ${data.authorRole}, ${data.authorBio}, ${data.authorImage},
      ${JSON.stringify(data.body)}::jsonb, ${data.isPublished}
    )
    RETURNING id
  `
  return rows[0].id
}

export async function updatePost(id: number, data: PostInput): Promise<void> {
  await sql`
    UPDATE cms_posts SET
      slug = ${data.slug},
      title = ${data.title},
      category = ${data.category},
      hero_image = ${data.heroImage},
      listing_image = ${data.listingImage || null},
      seo_title = ${data.seoTitle || null},
      seo_description = ${data.seoDescription || null},
      keywords = ${data.keywords},
      published_at = ${data.publishedAt},
      author_name = ${data.authorName},
      author_role = ${data.authorRole},
      author_bio = ${data.authorBio},
      author_image = ${data.authorImage},
      body = ${JSON.stringify(data.body)}::jsonb,
      is_published = ${data.isPublished}
    WHERE id = ${id}
  `
}

export async function deletePost(id: number): Promise<void> {
  await sql`DELETE FROM cms_posts WHERE id = ${id}`
}

// ─── Read operations ──────────────────────────────────────────────────────────

export async function getAllCmsRows(): Promise<CmsRow[]> {
  try {
    return await sql<CmsRow[]>`
      SELECT * FROM cms_posts ORDER BY created_at DESC
    `
  } catch {
    return []
  }
}

export async function getCmsRowById(id: number): Promise<CmsRow | null> {
  try {
    const rows = await sql<CmsRow[]>`
      SELECT * FROM cms_posts WHERE id = ${id} LIMIT 1
    `
    return rows[0] ?? null
  } catch {
    return null
  }
}

export async function getPublishedCmsRows(): Promise<CmsRow[]> {
  try {
    return await sql<CmsRow[]>`
      SELECT * FROM cms_posts WHERE is_published = TRUE ORDER BY published_at DESC
    `
  } catch {
    return []
  }
}

export async function getPublishedCmsRowBySlug(slug: string): Promise<CmsRow | null> {
  try {
    const rows = await sql<CmsRow[]>`
      SELECT * FROM cms_posts WHERE slug = ${slug} AND is_published = TRUE LIMIT 1
    `
    return rows[0] ?? null
  } catch {
    return null
  }
}

export async function getPublishedCmsSlugs(): Promise<string[]> {
  try {
    const rows = await sql<{ slug: string }[]>`
      SELECT slug FROM cms_posts WHERE is_published = TRUE
    `
    return rows.map(r => r.slug)
  } catch {
    return []
  }
}

// ─── DB row → BlogPost ────────────────────────────────────────────────────────

export function rowToBlogPost(row: CmsRow): BlogPost {
  // Auto-generate related articles from static posts (exclude self)
  const others = allBlogPosts.filter(p => p.slug !== row.slug)
  const relatedArticles = others.slice(0, 3).map(p => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.seoDescription ?? '',
    thumbnail: p.listingImage ?? p.heroImage,
  }))
  const journalCards = others.slice(0, 3).map(p => ({
    slug: p.slug,
    title: p.title,
    image: p.listingImage ?? p.heroImage,
  }))

  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    heroImage: row.hero_image,
    listingImage: row.listing_image ?? undefined,
    seoTitle: row.seo_title ?? undefined,
    seoDescription: row.seo_description ?? undefined,
    keywords: row.keywords,
    publishedAt: row.published_at,
    author: {
      name: row.author_name,
      role: row.author_role,
      bio: row.author_bio,
      image: row.author_image,
    },
    body: row.body,
    relatedArticles,
    journalCards,
  }
}

// ─── Merged helpers (static + DB) ────────────────────────────────────────────

export async function getAllPostsMerged(): Promise<BlogPost[]> {
  const cmsRows = await getPublishedCmsRows()
  const cmsPosts = cmsRows.map(rowToBlogPost)
  // DB posts that don't clash with static slugs come first (newest)
  const staticSlugs = new Set(allBlogPosts.map(p => p.slug))
  const freshCms = cmsPosts.filter(p => !staticSlugs.has(p.slug))
  return [...freshCms, ...allBlogPosts]
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  // Static posts take precedence (they can't be overwritten)
  const staticPost = allBlogPosts.find(p => p.slug === slug)
  if (staticPost) return staticPost
  const row = await getPublishedCmsRowBySlug(slug)
  return row ? rowToBlogPost(row) : undefined
}

export async function getAllSlugs(): Promise<string[]> {
  const staticSlugs = allBlogPosts.map(p => p.slug)
  const dbSlugs = await getPublishedCmsSlugs()
  return [...new Set([...staticSlugs, ...dbSlugs])]
}
