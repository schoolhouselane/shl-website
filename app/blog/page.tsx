import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogList from '@/components/blog/BlogList'
import BlogNewsletter from '@/components/blog/BlogNewsletter'
import { allBlogPosts } from '@/lib/blog-data'

const BASE_URL = 'https://schoolhouselane.co'

export const metadata: Metadata = {
  title: 'The Journal — Schoolhouse Lane',
  description: 'Strategy, branding, and digital thinking from the Schoolhouse Lane team.',
  alternates: { canonical: `${BASE_URL}/blog` },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'The Journal — Schoolhouse Lane',
    description: 'Strategy, branding, and digital thinking from the Schoolhouse Lane team.',
    url: `${BASE_URL}/blog`,
    siteName: 'Schoolhouse Lane',
    locale: 'en_IE',
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogList posts={allBlogPosts} />
        <BlogNewsletter />
      </main>
      <Footer />
    </>
  )
}
