import { MetadataRoute } from 'next'
import { projects } from '@/lib/work-data'
import { allBlogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://schoolhouselane.ai'
  const lastMod = new Date('2026-06-15')

  const caseStudyUrls: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const blogUrls: MetadataRoute.Sitemap = allBlogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
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
