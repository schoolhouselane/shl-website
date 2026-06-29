import Link from 'next/link'
import { notFound } from 'next/navigation'
import PostForm, { type PostFormData } from '@/components/admin/PostForm'
import { getCmsRowById } from '@/lib/cms-blog'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const row = await getCmsRowById(parseInt(id, 10))
  if (!row) notFound()

  const initialData: PostFormData = {
    title: row.title,
    slug: row.slug,
    category: row.category,
    heroImage: row.hero_image,
    listingImage: row.listing_image ?? '',
    seoTitle: row.seo_title ?? '',
    seoDescription: row.seo_description ?? '',
    keywords: row.keywords.join(', '),
    publishedAt: row.published_at,
    authorName: row.author_name,
    authorRole: row.author_role,
    authorBio: row.author_bio,
    authorImage: row.author_image,
    body: row.body,
    isPublished: row.is_published,
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/blog" className="text-[#999] hover:text-[#1e1e20] text-sm transition-colors">
          ← All Posts
        </Link>
        <span className="text-[#d9d9d9]">/</span>
        <h1 className="font-black text-lg uppercase text-[#1e1e20] tracking-tight truncate">{row.title}</h1>
        {row.is_published && (
          <Link
            href={`/blog/${row.slug}`}
            target="_blank"
            className="ml-auto text-xs text-[#999] hover:text-[#1e1e20] transition-colors shrink-0"
          >
            View live ↗
          </Link>
        )}
      </div>
      <PostForm postId={row.id} initialData={initialData} />
    </div>
  )
}
