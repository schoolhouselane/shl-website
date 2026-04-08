'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

const slides = [
  {
    image: '/images/hero-1.png',
    heading: 'Creative Commerce',
    sub: 'We exist at the intersection of creativity and revenue growth',
  },
  {
    image: '/images/hero-2.png',
    heading: 'Brand That Builds Revenue',
    sub: 'Strategy-first creative that turns brand into your most valuable asset',
  },
  {
    image: '/images/hero-3.png',
    heading: 'Vision Led Value Creation',
    sub: 'From identity to campaigns — every touchpoint engineered for growth',
  },
]

const SLIDE_DURATION = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (index: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % slides.length)
    }, SLIDE_DURATION)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className={`relative w-full overflow-hidden transition-[height] duration-700 ease-in-out ${
        scrolled ? 'h-[500px] md:h-[584px]' : 'h-screen'
      }`}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            className="object-cover object-top"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Content */}
      <div className={`absolute left-5 md:left-[90px] flex flex-col gap-5 md:gap-[30px] max-w-[95vw] md:max-w-[698px] pr-5 md:pr-0 z-20 transition-all duration-700 ${
        scrolled ? 'bottom-10 md:bottom-[80px]' : 'bottom-[20vh] md:bottom-[28vh]'
      }`}>
        <div
          key={current}
          className="flex flex-col gap-1 text-white animate-fadeIn"
        >
          <h1 className="font-black text-[36px] md:text-[64px] leading-[0.87] tracking-[-1px] md:tracking-[-1.28px] uppercase">
            {slides[current].heading}
          </h1>
          <p className="font-normal text-[18px] md:text-[24px] leading-tight mt-2 max-w-[453px]">
            {slides[current].sub}
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

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-5 md:left-[90px] z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
        {/* Progress bar */}
        <div className="ml-2 w-[80px] h-[2px] bg-white/30 rounded-full overflow-hidden">
          <div
            key={current}
            className="h-full bg-white rounded-full animate-progress"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute right-8 md:right-[90px] bottom-8 md:bottom-10 z-20 flex flex-col items-center gap-2 transition-opacity duration-500 ${
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
