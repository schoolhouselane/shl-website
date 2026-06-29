import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import type { ReactNode } from 'react'

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await auth()
  if (!session?.user) redirect('/login?callbackUrl=/admin/blog')

  return (
    <div className="min-h-screen bg-[#f5f3ef]">
      <nav className="bg-[#1e1e20] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white font-black text-lg tracking-tight uppercase">
            SHL
          </Link>
          <span className="text-[#555] text-sm">|</span>
          <Link href="/admin/blog" className="text-[#ccc] hover:text-white text-sm uppercase tracking-wide transition-colors">
            Blog CMS
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#777] text-sm">{session.user.email}</span>
          <Link
            href="/api/auth/signout"
            className="text-[#aaa] hover:text-white text-sm transition-colors"
          >
            Sign out
          </Link>
        </div>
      </nav>
      <main className="max-w-5xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  )
}
