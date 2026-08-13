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
    tags: row.tags ?? [],
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
    scheduledAt: row.scheduled_at ? row.scheduled_at.toISOString() : '',
    updatedAt: row.updated_at.toISOString(),
  }

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-[#e8e4df] bg-[#f5f3ef] flex items-center gap-3 shrink-0">
        <Link href="/admin/blog" className="text-[#999] hover:text-[#1e1e20] text-sm transition-colors">
          ← All Posts
        </Link>
        <span className="text-[#d9d9d9]">/</span>
        <h1 className="font-black text-sm uppercase text-[#1e1e20] tracking-tight truncate flex-1">{row.title}</h1>
        <span className="text-xs text-[#bbb] shrink-0">
          Edited {new Date(row.updated_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
        </span>
        {row.is_published && (
          <Link
            href={`/blog/${row.slug}`}
            target="_blank"
            className="text-xs text-[#999] hover:text-[#1e1e20] transition-colors shrink-0"
          >
            View live ↗
          </Link>
        )}
      </div>
      <div className="flex-1 min-h-0">
        <PostForm postId={row.id} initialData={initialData} />
      </div>
    </div>
  )
}
