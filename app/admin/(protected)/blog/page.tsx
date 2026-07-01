import Link from 'next/link'
import { getAllCmsRows } from '@/lib/cms-blog'

export default async function AdminBlogPage() {
  const posts = await getAllCmsRows()

  return (
    <div className="h-full overflow-y-auto">
    <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-8">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-black text-[32px] uppercase text-[#1e1e20] leading-tight tracking-tight">
            Blog Posts
          </h1>
          <p className="text-[#777] text-sm mt-1">{posts.length} post{posts.length !== 1 ? 's' : ''} in the CMS</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="bg-[#1e1e20] text-white px-6 py-3 rounded-full font-medium uppercase text-sm tracking-wide hover:bg-[#333] transition-colors"
        >
          + New Post
        </Link>
      </div>

      {/* Post list */}
      <div className="flex flex-col gap-2">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-white border border-[#e8e4df] rounded-lg p-4 flex items-center justify-between gap-4"
          >
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[#1e1e20] truncate">{post.title}</p>
              <p className="text-sm text-[#999] mt-0.5">
                {post.category} · {post.published_at} · edited {new Date(post.updated_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  post.is_published
                    ? 'bg-[#dcf5dc] text-[#2d7d2d]'
                    : post.scheduled_at
                    ? 'bg-[#fef3c7] text-[#8a6430]'
                    : 'bg-[#f0efed] text-[#888]'
                }`}
              >
                {post.is_published ? 'Published' : post.scheduled_at ? `⏰ ${new Date(post.scheduled_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}` : 'Draft'}
              </span>
              {post.is_published && (
                <Link
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  className="text-xs text-[#999] hover:text-[#1e1e20] transition-colors"
                >
                  View ↗
                </Link>
              )}
              <Link
                href={`/admin/blog/${post.id}/edit`}
                className="text-sm border border-[#1e1e20] px-4 py-2 rounded-full hover:bg-[#1e1e20] hover:text-white transition-colors uppercase tracking-wide"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}

        {posts.length === 0 && (
          <div className="text-center py-16 text-[#999]">
            <p className="text-lg">No posts yet.</p>
            <p className="text-sm mt-1">Create your first post to get started.</p>
          </div>
        )}
      </div>

    </div>
    </div>
  )
}
