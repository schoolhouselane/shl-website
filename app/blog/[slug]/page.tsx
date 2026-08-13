import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogHero from '@/components/blog/BlogHero'
import BlogArticle from '@/components/blog/BlogArticle'
import BlogMoreJournal from '@/components/blog/BlogMoreJournal'
import BlogNewsletter from '@/components/blog/BlogNewsletter'
import CaseStudyCTA from '@/components/work/CaseStudyCTA'
import { allBlogPosts, type JournalCard } from '@/lib/blog-data'
import { getPostBySlug, getAllSlugs } from '@/lib/cms-blog'
import { normalizeCategory } from '@/lib/blog-categories'

const BASE_URL = 'https://schoolhouselane.ai'

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  // Authored titles often already end in "— Schoolhouse Lane", and the root layout
  // template appends "| Schoolhouse Lane" — strip the suffix so it isn't doubled.
  const title = (post.seoTitle ?? post.title).replace(/\s*[—–|-]\s*Schoolhouse Lane\s*$/, '').trim()
  // openGraph/twitter titles don't inherit the template, so brand them explicitly.
  const brandedTitle = `${title} | Schoolhouse Lane`
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
      title: brandedTitle,
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
      title: brandedTitle,
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
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const url = `${BASE_URL}/blog/${slug}`
  const imageUrl = post.heroImage.startsWith('http') ? post.heroImage : `${BASE_URL}${post.heroImage}`

  // Pick 3 varied posts for "More From The Journal" — different selection per slug
  const others = allBlogPosts.filter(p => p.slug !== slug)
  const offset = allBlogPosts.findIndex(p => p.slug === slug)
  const step = Math.max(1, Math.floor(others.length / 3))
  const journalCards: JournalCard[] = [
    others[offset % others.length],
    others[(offset + step) % others.length],
    others[(offset + step * 2) % others.length],
  ].filter(Boolean).map(p => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.seoDescription ?? '',
    image: p.listingImage ?? p.heroImage,
  }))

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': url,
    headline: post.title,
    description: post.seoDescription,
    image: imageUrl,
    datePublished: post.publishedAt,
    // Real edit time for CMS posts, so an updated article reads as updated.
    dateModified: post.updatedAt ?? post.publishedAt,
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
    articleSection: normalizeCategory(post.category),
    isPartOf: { '@type': 'Blog', name: 'The Journal', url: `${BASE_URL}/blog` },
  }

  // Spells out Home > The Journal > this post, which is how AI assistants and
  // Google work out where a page sits in the site.
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'The Journal', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        <BlogHero src={post.heroImage} alt={post.title} />
        <BlogArticle post={post} />
        <CaseStudyCTA />
        <BlogMoreJournal cards={journalCards} />
        <BlogNewsletter />
      </main>
      <Footer />
    </>
  )
}
