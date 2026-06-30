import Link from 'next/link'
import PostForm from '@/components/admin/PostForm'

export default function NewPostPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-[#e8e4df] bg-[#f5f3ef] flex items-center gap-3 shrink-0">
        <Link href="/admin/blog" className="text-[#999] hover:text-[#1e1e20] text-sm transition-colors">
          ← All Posts
        </Link>
        <span className="text-[#d9d9d9]">/</span>
        <h1 className="font-black text-sm uppercase text-[#1e1e20] tracking-tight">New Post</h1>
      </div>
      <div className="flex-1 min-h-0">
        <PostForm />
      </div>
    </div>
  )
}
