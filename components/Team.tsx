'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

const team = [
  {
    src: '/images/people-1.png',
    name: 'Sarah Mitchell',
    role: 'Creative Director.',
    quote: 'A pioneer in aligning profit with purpose to capture hearts, minds, and market share.',
    email: 'sarah@schoolhouselane.co',
  },
  {
    src: '/images/people-2.png',
    name: 'James Okafor',
    role: 'Brand Strategist.',
    quote: 'Building brands that outlast trends and earn genuine loyalty from the right audiences.',
    email: 'james@schoolhouselane.co',
  },
  {
    src: '/images/people-3.png',
    name: 'Elena Vasquez',
    role: 'Art Director.',
    quote: 'Visual storytelling that cuts through noise and speaks directly to what people value.',
    email: 'elena@schoolhouselane.co',
  },
  {
    src: '/images/people-4.png',
    name: 'Tom Brennan',
    role: 'Campaign Lead.',
    quote: 'Every campaign is a conversation — we make sure it is one worth having.',
    email: 'tom@schoolhouselane.co',
  },
  {
    src: '/images/people-5.png',
    name: 'Darren McGrath',
    role: 'Founder & Strategy Director.',
    quote: 'A pioneer in aligning profit with purpose to capture hearts, minds, and market share.',
    email: 'dmg@schoolhouselane.co',
  },
  {
    src: '/images/people-6.png',
    name: 'Priya Nair',
    role: 'Digital Designer.',
    quote: 'Design is not decoration — it is the first argument your brand makes.',
    email: 'priya@schoolhouselane.co',
  },
  {
    src: '/images/people-7.png',
    name: 'Lucas Ferreira',
    role: 'Motion Designer.',
    quote: 'Movement gives ideas a heartbeat. That is what we design for.',
    email: 'lucas@schoolhouselane.co',
  },
  {
    src: '/images/people-8.png',
    name: 'Anna Kowalski',
    role: 'Content Strategist.',
    quote: 'Words are the architecture of trust. We build every sentence with intention.',
    email: 'anna@schoolhouselane.co',
  },
  {
    src: '/images/people-9.png',
    name: 'Marcus Chen',
    role: 'UX Designer.',
    quote: 'Good experience design is invisible — great experience design is unforgettable.',
    email: 'marcus@schoolhouselane.co',
  },
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
      <div className="px-5 md:px-[90px] flex justify-end">
        <h2 className="font-black text-[36px] md:text-[64px] leading-[0.9] tracking-[-1px] md:tracking-[-1.28px] uppercase text-[#1e1e20] text-right">
          People behind everything
        </h2>
      </div>

      {/* Scrollable strip */}
      <div className="relative">
        <div ref={scrollRef} className="flex gap-px overflow-x-auto scrollbar-hide">
          {team.map((member, i) => (
            <div key={i} className="group flex shrink-0">

              {/* Photo */}
              <div className="relative w-[140px] md:w-[200px] h-[300px] md:h-[759px] overflow-hidden">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* White info card — expands on hover */}
              <div className="overflow-hidden transition-all duration-500 ease-in-out w-0 group-hover:w-[200px] md:group-hover:w-[347px] h-[300px] md:h-[759px] bg-white">
                <div className="w-[200px] md:w-[347px] h-full flex flex-col justify-between px-[20px] md:px-[40px] py-[24px] md:py-[60px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-black text-[18px] md:text-[24px] text-[#111] leading-tight">
                      {member.name}
                    </p>
                    <p className="text-[13px] md:text-[16px] text-[#111] italic font-light">
                      {member.role}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[14px] md:gap-[18px]">
                    <p className="text-[13px] md:text-[16px] text-[#111] font-semibold italic leading-snug">
                      {member.quote}
                    </p>
                    <p className="text-[13px] md:text-[16px] text-[#111] italic">
                      {member.email}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Scroll arrows */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-white rounded-full w-[44px] h-[44px] shadow-md transition-opacity duration-200 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <button
          onClick={() => scroll('right')}
          className={`absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-white rounded-full w-[44px] h-[44px] shadow-md transition-opacity duration-200 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="px-5 md:px-[90px]">
        <div className="w-full h-[2px] bg-[#1e1e20]/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1e1e20] rounded-full transition-all duration-150"
            style={{ width: `${Math.max(6, progress * 100)}%` }}
          />
        </div>
      </div>

      {/* Footer text + CTA */}
      <div className="px-5 md:px-[90px] flex flex-col gap-[25px]">
        <p className="text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20] max-w-[532px]">
          A small, senior team of strategists, creatives, and brand architects. We bring deep expertise and genuine curiosity to every brief.
        </p>
        <Link
          href="/jobs"
          className="btn-cta inline-flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-6 py-3 text-[16px] font-medium uppercase transition-colors"
        >
          See Open Roles
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
