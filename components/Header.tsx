'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 border-b border-[rgba(54,31,6,0.16)]">
      <div className="flex items-center justify-between px-5 md:px-[90px] h-[72px] md:h-[91px]">
        <Link href="/">
          <Image src="/logo.png" alt="Schoolhouse Lane" width={100} height={40} className="object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          <Link href="/" className="font-bold text-[#1e1e20] text-[20px] border-b border-[#1e1e20] pb-1">Home</Link>
          <Link href="/about" className="text-[#1e1e20] text-[20px]">About</Link>
          <Link href="/services" className="text-[#1e1e20] text-[20px]">Services</Link>
          <Link href="/work" className="text-[#1e1e20] text-[20px]">Work</Link>
          <Link href="/blog" className="text-[#1e1e20] text-[20px]">Blog</Link>
          <Link href="/jobs" className="text-[#1e1e20] text-[20px]">Jobs</Link>
          <Link href="/contact" className="flex items-center gap-2 border border-[#1e1e20] rounded-full px-5 py-2 text-[15px] font-medium uppercase hover:bg-[#1e1e20] hover:text-white transition-colors">
            Let&apos;s Talk
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-0.5 bg-[#1e1e20] transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1e1e20] transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1e1e20] transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#f5f3ef] border-t border-[rgba(54,31,6,0.16)] flex flex-col px-5 py-6 gap-5">
          {['/', '/about', '/services', '/work', '/blog', '/jobs'].map((href, i) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="text-[#1e1e20] text-[20px] font-medium">
              {['Home', 'About', 'Services', 'Work', 'Blog', 'Jobs'][i]}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center gap-2 w-fit border border-[#1e1e20] rounded-full px-5 py-2 text-[15px] font-medium uppercase">
            Let&apos;s Talk
          </Link>
        </nav>
      )}
    </header>
  )
}
