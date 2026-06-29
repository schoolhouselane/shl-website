import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogHero from '@/components/blog/BlogHero'
import BlogArticle from '@/components/blog/BlogArticle'
import BlogNewsletter from '@/components/blog/BlogNewsletter'
import { getCmsRowById, rowToBlogPost } from '@/lib/cms-blog'

export default async function PreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const row = await getCmsRowById(parseInt(id, 10))
  if (!row) notFound()

  const post = rowToBlogPost(row)

  return (
    <>
      {/* Preview banner */}
      <div className="sticky top-0 z-50 bg-[#d07502] text-white px-6 py-3 flex items-center justify-between text-sm font-medium">
        <div className="flex items-center gap-3">
          <span className="bg-white text-[#d07502] px-2 py-0.5 rounded text-xs font-black uppercase tracking-wide">
            Preview
          </span>
          <span>{row.is_published ? 'Published' : 'Draft — not live yet'}</span>
        </div>
        <Link
          href={`/admin/blog/${id}/edit`}
          className="border border-white/50 px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors"
        >
          ← Back to Editor
        </Link>
      </div>

      <Header />
      <main>
        <BlogHero src={post.heroImage} alt={post.title} />
        <BlogArticle post={post} />
        <BlogNewsletter />
      </main>
      <Footer />
    </>
  )
}
