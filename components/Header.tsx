'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import CalendlyButton from '@/components/CalendlyButton'

const LIGHT_BG_ROUTES = ['/services', '/about', '/work', '/blog', '/jobs', '/contact', '/login']

const MOBILE_NAV = [
  { label: 'SERVICES', href: '/services' },
  { label: 'ABOUT',    href: '/about' },
  { label: 'WORK',     href: '/work' },
  { label: 'BLOG',     href: '/blog' },
  { label: 'JOBS',     href: '/jobs' },
  { label: 'PRICING',  href: '/pricing' },
]

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const pageForceDark = LIGHT_BG_ROUTES.some((r) => pathname.startsWith(r))
  const isDark = scrolled || forceDark || pageForceDark
  const textColor = isDark ? 'text-[#1e1e20]' : 'text-white'
  const borderColor = isDark ? 'border-[#1e1e20]' : 'border-white'

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark ? 'bg-[#f5f3ef] border-b border-[rgba(54,31,6,0.16)]' : 'bg-transparent border-b border-white/20'
      }`}>
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-[90px] h-[64px] md:h-[95px] lg:h-[82px]">
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt="Schoolhouse Lane"
              width={122}
              height={48}
              className={`w-[65px] md:w-[122px] h-auto object-contain transition-all duration-300 ${isDark ? 'invert' : ''}`}
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
            <Link href="/login" className={`transition-colors duration-300 text-[16px] ${textColor} hover:opacity-70`}>
              Login
            </Link>
            <Link href="/contact" className={`btn-cta flex items-center gap-[12px] border rounded-full px-[24px] py-[8px] text-[16px] font-medium uppercase whitespace-nowrap transition-all duration-300 ${borderColor} ${textColor}`}>
              Book a Demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden flex items-center pb-[2px] border-b transition-all duration-300 ${borderColor}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className={`text-[16px] font-medium uppercase tracking-wide transition-colors duration-300 ${textColor}`}>
              Menu
            </span>
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[200] bg-[#f5f3ef] flex flex-col">

          {/* Overlay header: dark logo + X */}
          <div className="flex items-center justify-between px-[16px] h-[64px] border-b border-[rgba(54,31,6,0.16)] shrink-0">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src="/logo-white.svg"
                alt="Schoolhouse Lane"
                width={94}
                height={37}
                className="h-[37px] w-auto invert"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-[30px] h-[30px] text-[#1e1e20]"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav + CTA — inner scrollable area */}
          <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-[40px] px-[24px] pt-[32px] pb-[32px]">

            {/* Nav items */}
            <div className="flex flex-col gap-[40px]">
              {MOBILE_NAV.map(({ label, href }) => (
                <div key={href} className="flex flex-col gap-[20px]">
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="font-black text-[16px] text-[#2f2f2f] uppercase leading-normal"
                  >
                    {label}
                  </Link>
                  <div className="h-px bg-[rgba(54,31,6,0.16)]" />
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-[18px]">
              <CalendlyButton className="w-full h-[58px] bg-[#1e1e20] rounded-[50px] flex items-center justify-center text-[16px] font-bold text-white">
                Book a Demo
              </CalendlyButton>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="w-full h-[44px] border border-[#1e1e20] rounded-[50px] flex items-center justify-center text-[16px] font-bold text-[#1e1e20]"
              >
                Sign In
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
