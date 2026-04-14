import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cursor-demo', '/page-2'],
    },
    sitemap: 'https://schoolhouselane.co/sitemap.xml',
  }
}
