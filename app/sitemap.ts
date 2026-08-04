import { MetadataRoute } from 'next'
import { projects } from '@/lib/work-data'
import { allBlogPosts } from '@/lib/blog-data'
import { getAllSlugs } from '@/lib/cms-blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://schoolhouselane.ai'
  const lastMod = new Date('2026-06-15')

  // Include CMS-published posts, not just the static ones — otherwise new posts
  // never reach the sitemap and stay undiscoverable to search/AI crawlers.
  // Falls back to static slugs if the DB is unreachable at build time.
  let blogSlugs: string[]
  try {
    blogSlugs = await getAllSlugs()
  } catch {
    blogSlugs = allBlogPosts.map((p) => p.slug)
  }

  const caseStudyUrls: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const blogUrls: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

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
      lastModified: lastMod,
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
