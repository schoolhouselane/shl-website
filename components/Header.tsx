'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const LIGHT_BG_ROUTES = ['/services', '/about', '/work', '/blog', '/jobs', '/contact']

export default function Header({ forceDark = false }: { forceDark?: boolean }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pageForceDark = LIGHT_BG_ROUTES.some((r) => pathname.startsWith(r))
  const isDark = scrolled || forceDark || pageForceDark
  const textColor = isDark ? 'text-[#1e1e20]' : 'text-white'
  const borderColor = isDark ? 'border-[#1e1e20]' : 'border-white'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDark ? 'bg-[#f5f3ef] border-b border-[rgba(54,31,6,0.16)]' : 'bg-transparent border-b border-white/20'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-[90px] h-[64px] md:h-[95px] lg:h-[82px]">
        <Link href="/">
          <Image
            src={isDark ? '/logo.svg' : '/logo-white.svg'}
            alt="Schoolhouse Lane"
            width={122}
            height={48}
            className="w-[65px] md:w-[122px] h-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-[18px] lg:gap-[36px] font-manrope">
          {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/work', 'Work'], ['/blog', 'Blog'], ['/jobs', 'Jobs']].map(([href, label]) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link key={href} href={href} className={`transition-colors duration-300 ${isActive ? `font-bold text-[18px] border-b pb-0.5 ${textColor} ${borderColor}` : `text-[16px] ${textColor} hover:opacity-70`}`}>
                {label}
              </Link>
            )
          })}
          <Link href="/contact" className={`btn-cta flex items-center gap-[12px] border rounded-full px-[24px] py-[8px] text-[16px] font-medium uppercase transition-all duration-300 ${borderColor} ${textColor}`}>
            Book a Demo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden flex items-center pb-[2px] border-b transition-all duration-300 ${borderColor}`}
          onClick={() => setOpen(!open)}
        >
          <span className={`text-[16px] font-medium uppercase tracking-wide transition-colors duration-300 ${textColor}`}>
            {open ? 'Close' : 'Menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu — slide down */}
      <nav
        className="md:hidden bg-[#f5f3ef] border-t border-[rgba(54,31,6,0.16)] flex flex-col px-5 gap-5 overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '400px' : '0', paddingTop: open ? '24px' : '0', paddingBottom: open ? '24px' : '0' }}
      >
        {['/', '/services', '/about', '/work', '/blog', '/jobs', '/contact'].map((href, i) => (
          <Link key={href} href={href} onClick={() => setOpen(false)} className="text-[#1e1e20] text-[20px] font-medium">
            {['Home', 'Services', 'About', 'Work', 'Blog', 'Jobs', 'Contact'][i]}
          </Link>
        ))}
      </nav>
    </header>
  )
}
