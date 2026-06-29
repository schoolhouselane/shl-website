import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import type { ReactNode } from 'react'
import AdminLogout from './AdminLogout'

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const jar = await cookies()
  if (jar.get('admin_auth')?.value !== '1') redirect('/admin/login')

  return (
    <div className="min-h-screen bg-[#f5f3ef]">
      <nav className="bg-[#1e1e20] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white font-black text-lg tracking-tight uppercase">SHL</Link>
          <span className="text-[#555] text-sm">|</span>
          <Link href="/admin/blog" className="text-[#ccc] hover:text-white text-sm uppercase tracking-wide transition-colors">
            Blog CMS
          </Link>
        </div>
        <AdminLogout />
      </nav>
      <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
    </div>
  )
}
