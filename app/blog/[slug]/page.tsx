import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogHero from '@/components/blog/BlogHero'
import BlogArticle from '@/components/blog/BlogArticle'
import BlogMoreJournal from '@/components/blog/BlogMoreJournal'
import BlogNewsletter from '@/components/blog/BlogNewsletter'
import CaseStudyCTA from '@/components/work/CaseStudyCTA'
import { getBlogPost, blogPosts } from '@/lib/blog-data'

const BASE_URL = 'https://schoolhouselane.co'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  const title = post.seoTitle ?? post.title
  const description = post.seoDescription ?? ''
  const url = `${BASE_URL}/blog/${slug}`
  const imageUrl = post.heroImage.startsWith('http') ? post.heroImage : `${BASE_URL}${post.heroImage}`

  return {
    title,
    description,
    keywords: post.keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: 'Schoolhouse Lane',
      locale: 'en_IE',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.keywords,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const url = `${BASE_URL}/blog/${slug}`
  const imageUrl = post.heroImage.startsWith('http') ? post.heroImage : `${BASE_URL}${post.heroImage}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': url,
    headline: post.title,
    description: post.seoDescription,
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url,
    inLanguage: 'en-IE',
    keywords: post.keywords?.join(', '),
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: { '@type': 'Organization', name: 'Schoolhouse Lane', url: BASE_URL },
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Schoolhouse Lane',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo-white.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: post.category,
    isPartOf: { '@type': 'Blog', name: 'The Journal', url: `${BASE_URL}/blog` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main>
        <BlogHero src={post.heroImage} alt={post.title} />
        <BlogArticle post={post} />
        <CaseStudyCTA />
        <BlogMoreJournal cards={post.journalCards} />
        <BlogNewsletter />
      </main>
      <Footer />
    </>
  )
}
