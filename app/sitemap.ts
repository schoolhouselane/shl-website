import { MetadataRoute } from 'next'
import { projects } from '@/lib/work-data'
import { allBlogPosts, type BlogPost } from '@/lib/blog-data'
import { getAllPostsMerged } from '@/lib/cms-blog'

// Without this the sitemap is frozen at build time, so posts published from the
// CMS never reach it until the next deploy. The publish routes also revalidate
// this path for immediacy; this is the safety net if that ever fails.
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://schoolhouselane.ai'
  const lastMod = new Date('2026-06-15')

  // Include CMS-published posts, not just the static ones — otherwise new posts
  // stay undiscoverable to search/AI crawlers. Falls back to the static set if
  // the DB is unreachable.
  let posts: BlogPost[]
  try {
    posts = await getAllPostsMerged()
  } catch {
    posts = allBlogPosts
  }

  // Real per-post dates: a single hardcoded lastmod across every URL tells
  // crawlers nothing about which pages actually changed.
  const postLastMod = (p: BlogPost) => {
    const raw = p.updatedAt ?? p.publishedAt
    const d = new Date(raw)
    return Number.isNaN(d.getTime()) ? lastMod : d
  }

  const caseStudyUrls: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const blogUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: postLastMod(p),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  // The listing is as fresh as its newest post.
  const blogListingLastMod = posts.length
    ? new Date(Math.max(...posts.map((p) => postLastMod(p).getTime())))
    : lastMod

  return [
    {
      url: base,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/services`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/work`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...caseStudyUrls,
    {
      url: `${base}/blog`,
      lastModified: blogListingLastMod,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    ...blogUrls,
    {
      url: `${base}/jobs`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/privacy`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/code-of-conduct`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
