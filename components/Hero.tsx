'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      setParallaxY(y * 0.3)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className={`relative w-full overflow-hidden transition-[height] duration-700 ease-in-out ${
        scrolled ? 'h-[500px] md:h-[584px]' : 'h-screen'
      }`}
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 scale-125"
        style={{ transform: `scale(1.25) translateY(${parallaxY * 0.4}px)` }}
      >
        <Image
          src="https://www.figma.com/api/mcp/asset/36e093c6-d8c9-4fc6-a20a-1301ef1d77d9"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Main content */}
      <div className={`absolute left-5 md:left-[90px] flex flex-col gap-5 md:gap-[30px] max-w-[95vw] md:max-w-[698px] pr-5 md:pr-0 transition-all duration-700 ${
        scrolled ? 'bottom-10 md:bottom-[80px]' : 'bottom-[20vh] md:bottom-[28vh]'
      }`}>
        <div className="flex flex-col gap-1 text-white">
          <h1 className="font-black text-[36px] md:text-[64px] leading-[0.87] tracking-[-1px] md:tracking-[-1.28px] uppercase">
            Creative Commerce
          </h1>
          <p className="font-normal text-[18px] md:text-[24px] leading-tight mt-2 max-w-[453px]">
            We exist at the intersection of creativity and revenue growth
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 border border-white rounded-full px-4 md:px-6 py-3 text-white text-[13px] md:text-[16px] font-medium uppercase hover:bg-white hover:text-[#1e1e20] transition-all duration-300"
          >
            Let&apos;s Build Something Exceptional
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link
            href="/work"
            className="flex items-center justify-center bg-white rounded-full px-6 py-3 text-[#1e1e20] text-[13px] md:text-[16px] font-medium uppercase hover:bg-[#f5f3ef] hover:scale-105 transition-all duration-300"
          >
            See Our Work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute right-8 md:right-[90px] bottom-8 md:bottom-10 flex flex-col items-center gap-2 transition-opacity duration-500 ${
        scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="border border-white rounded-full w-[55px] h-[55px] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
        <p className="text-white text-[14px] uppercase tracking-widest font-light">Scroll</p>
      </div>
    </section>
  )
}
