import Link from 'next/link'
import PostForm from '@/components/admin/PostForm'

export default function NewPostPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/blog" className="text-[#999] hover:text-[#1e1e20] text-sm transition-colors">
          ← All Posts
        </Link>
        <span className="text-[#d9d9d9]">/</span>
        <h1 className="font-black text-lg uppercase text-[#1e1e20] tracking-tight">New Post</h1>
      </div>
      <PostForm />
    </div>
  )
}
