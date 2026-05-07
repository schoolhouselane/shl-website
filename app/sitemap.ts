import { MetadataRoute } from 'next'
import { projects } from '@/lib/work-data'
import { allBlogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://schoolhouselane.co'
  const siteLastMod = new Date('2026-05-07')

  const caseStudyUrls: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: siteLastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const blogUrls: MetadataRoute.Sitemap = allBlogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: base,
      lastModified: siteLastMod,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: siteLastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/services`,
      lastModified: siteLastMod,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/pricing`,
      lastModified: siteLastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/work`,
      lastModified: siteLastMod,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...caseStudyUrls,
    {
      url: `${base}/blog`,
      lastModified: siteLastMod,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...blogUrls,
    {
      url: `${base}/jobs`,
      lastModified: siteLastMod,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: siteLastMod,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
