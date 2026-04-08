'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

const team = [
  { src: '/images/people-1.png', name: 'Sarah Mitchell',  role: 'Creative Director' },
  { src: '/images/people-2.png', name: 'James Okafor',    role: 'Brand Strategist' },
  { src: '/images/people-3.png', name: 'Elena Vasquez',   role: 'Art Director' },
  { src: '/images/people-4.png', name: 'Tom Brennan',     role: 'Campaign Lead' },
  {
    src: '/images/people-5.png',
    name: 'Darren McGrath',
    role: 'Founder & Strategy Director.',
    quote: 'A pioneer in aligning profit with purpose to capture hearts, minds, and market share.',
    email: 'dmg@schoolhouselane.co',
    featured: true,
  },
  { src: '/images/people-6.png', name: 'Priya Nair',      role: 'Digital Designer' },
  { src: '/images/people-7.png', name: 'Lucas Ferreira',  role: 'Motion Designer' },
  { src: '/images/people-8.png', name: 'Anna Kowalski',   role: 'Content Strategist' },
  { src: '/images/people-9.png', name: 'Marcus Chen',     role: 'UX Designer' },
]

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateState = () => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setProgress(scrollLeft / (scrollWidth - clientWidth))
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateState, { passive: true })
    updateState()
    return () => el.removeEventListener('scroll', updateState)
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 420 : -420, behavior: 'smooth' })
  }

  return (
    <section className="bg-[#f5f3ef] py-[60px] flex flex-col gap-[40px]">

      {/* Title */}
      <div className="px-5 md:px-[90px] flex items-center justify-end">
        <h2 className="font-black text-[36px] md:text-[64px] leading-[0.9] tracking-[-1px] md:tracking-[-1.28px] uppercase text-[#1e1e20] text-right"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
          People behind everything
        </h2>
      </div>

      {/* Scrollable strip */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-px overflow-x-auto scrollbar-hide"
        >
          {team.map((member, i) =>
            member.featured ? (
              /* Featured — hover shows full white card overlay */
              <div key={i} className="group relative w-[140px] md:w-[200px] h-[460px] md:h-[759px] shrink-0 overflow-hidden">
                <Image src={member.src} alt={member.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between px-5 py-8">
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-black text-[15px] md:text-[18px] text-[#111] leading-tight"
                       style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                      {member.name}
                    </p>
                    <p className="text-[12px] md:text-[14px] text-[#111] italic font-light">{member.role}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-[12px] md:text-[13px] text-[#111] font-semibold italic leading-snug">{member.quote}</p>
                    <p className="text-[12px] md:text-[13px] text-[#111] italic">{member.email}</p>
                  </div>
                </div>
              </div>
            ) : (
              /* Regular photo */
              <div key={i} className="group relative w-[140px] md:w-[200px] h-[460px] md:h-[759px] shrink-0 overflow-hidden">
                <Image src={member.src} alt={member.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-bold text-[15px] leading-tight">{member.name}</p>
                  <p className="text-white/80 text-[13px] italic">{member.role}</p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Scroll arrows */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-white rounded-full w-[44px] h-[44px] shadow-md transition-all duration-200 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <button
          onClick={() => scroll('right')}
          className={`absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-white rounded-full w-[44px] h-[44px] shadow-md transition-all duration-200 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* Scroll progress bar */}
      <div className="px-5 md:px-[90px]">
        <div className="w-full h-[2px] bg-[#1e1e20]/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1e1e20] rounded-full transition-all duration-150"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </div>

      {/* Footer text + CTA */}
      <div className="px-5 md:px-[90px] flex flex-col gap-[25px]">
        <p className="text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20] max-w-[532px]"
           style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 400 }}>
          A small, senior team of strategists, creatives, and brand architects. We bring deep expertise and genuine curiosity to every brief.
        </p>
        <Link
          href="/jobs"
          className="inline-flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-6 py-3 text-[16px] font-medium uppercase hover:bg-[#1e1e20] hover:text-white transition-colors"
        >
          See Open Roles
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
