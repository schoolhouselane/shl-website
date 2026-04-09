'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
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
            src={scrolled ? '/logo.svg' : '/logo-white.svg'}
            alt="Schoolhouse Lane"
            width={122}
            height={48}
            className="object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-[36px] font-manrope">
          {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/work', 'Work'], ['/blog', 'Blog'], ['/jobs', 'Jobs']].map(([href, label]) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link key={href} href={href} className={`transition-colors duration-300 ${isActive ? `font-bold text-[18px] border-b pb-0.5 ${textColor} ${borderColor}` : `text-[16px] ${textColor} hover:opacity-70`}`}>
                {label}
              </Link>
            )
          })}
          <Link href="/contact" className={`btn-cta flex items-center gap-2 border rounded-full px-6 py-2 text-[16px] font-medium uppercase transition-all duration-300 ${borderColor} ${textColor}`}>
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
