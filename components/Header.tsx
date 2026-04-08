'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textColor = scrolled ? 'text-[#1e1e20]' : 'text-white'
  const borderColor = scrolled ? 'border-[#1e1e20]' : 'border-white'
  const hamburgerColor = scrolled ? 'bg-[#1e1e20]' : 'bg-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#f5f3ef] border-b border-[rgba(54,31,6,0.16)]' : 'bg-transparent border-b border-white/20'
    }`}>
      <div className="flex items-center justify-between px-5 md:px-[90px] h-[64px] md:h-[82px]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Schoolhouse Lane"
            width={122}
            height={48}
            className={`object-contain transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-[36px] font-manrope">
          <Link href="/" className={`font-bold text-[18px] border-b pb-0.5 ${textColor} ${borderColor} transition-colors duration-300`}>Home</Link>
          <Link href="/services" className={`text-[16px] transition-colors duration-300 ${textColor} hover:opacity-70`}>Services</Link>
          <Link href="/about" className={`text-[16px] transition-colors duration-300 ${textColor} hover:opacity-70`}>About</Link>
          <Link href="/work" className={`text-[16px] transition-colors duration-300 ${textColor} hover:opacity-70`}>Work</Link>
          <Link href="/blog" className={`text-[16px] transition-colors duration-300 ${textColor} hover:opacity-70`}>Blog</Link>
          <Link href="/jobs" className={`text-[16px] transition-colors duration-300 ${textColor} hover:opacity-70`}>Jobs</Link>
          <Link href="/contact" className={`flex items-center gap-2 border rounded-full px-6 py-2 text-[16px] font-medium uppercase transition-all duration-300 ${borderColor} ${textColor} hover:bg-[#1e1e20] hover:text-white hover:border-[#1e1e20]`}>
            Let&apos;s Talk
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#f5f3ef] border-t border-[rgba(54,31,6,0.16)] flex flex-col px-5 py-6 gap-5">
          {['/', '/services', '/about', '/work', '/blog', '/jobs'].map((href, i) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="text-[#1e1e20] text-[20px] font-medium">
              {['Home', 'Services', 'About', 'Work', 'Blog', 'Jobs'][i]}
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
