'use client'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import type { Testimonial } from '@/lib/jobs-data'

function ArrowRight({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

interface Props {
  testimonials: Testimonial[]
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex gap-[20px] items-start flex-1 min-w-0">
      {/* Quote */}
      <p className="font-extralight italic text-[18px] md:text-[20px] lg:text-[24px] text-white leading-[1.5] flex-1 min-w-0">
        {t.quote}
      </p>
      {/* Divider + name block */}
      <div className="border-l-[3px] border-white flex flex-col shrink-0 min-w-[140px] lg:min-w-[180px]">
        <div className="px-[16px] lg:px-[20px] py-[8px]">
          <p className="font-black text-[16px] md:text-[18px] lg:text-[24px] text-white uppercase leading-[1.2] whitespace-nowrap">
            {t.name}
          </p>
        </div>
        <div className="px-[16px] lg:px-[20px] py-[8px]">
          <p className="font-medium text-[14px] md:text-[16px] lg:text-[20px] text-white leading-[1.2] whitespace-nowrap">
            {t.role}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function JobsTestimonials({ testimonials }: Props) {
  const [ref, inView] = useInView(0.05)
  // Desktop shows 2 per page; mobile/tablet shows 1 per page
  const [page, setPage] = useState(0)

  const totalPages2 = Math.ceil(testimonials.length / 2)
  const totalPages1 = testimonials.length

  const prevPage = () => setPage((p) => Math.max(0, p - 1))
  const nextPage = () => setPage((p) => Math.min(totalPages2 - 1, p + 1))

  const prevMobile = () => setPage((p) => Math.max(0, p - 1))
  const nextMobile = () => setPage((p) => Math.min(totalPages1 - 1, p + 1))

  // Desktop: show pair at current page
  const desktopPair = testimonials.slice(page * 2, page * 2 + 2)
  // Mobile/tablet: show single at current page
  const mobileItem = testimonials[page] ?? testimonials[0]

  const isFirstPage = page === 0
  const isLastDesktop = page >= totalPages2 - 1
  const isLastMobile = page >= totalPages1 - 1

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#1e1e20] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div className="flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">

        {/* Heading — always left */}
        <h2 className="font-black text-[36px] md:text-[44px] lg:text-[56px] text-white uppercase leading-[1.07] tracking-tight">
          Straight From The<br />People Inside
        </h2>

        {/* ── Desktop: 2-up carousel ─────────────────────────────────── */}
        <div className="hidden lg:flex flex-col gap-[30px]">
          <div className="flex gap-[34px] items-start">
            {desktopPair.map((t, i) => (
              <TestimonialCard key={`${page}-${i}`} t={t} />
            ))}
            {/* Pad if only one card on last odd page */}
            {desktopPair.length === 1 && <div className="flex-1 min-w-0" />}
          </div>

          {/* Prev / Next arrows */}
          <div className="flex items-center gap-[30px] justify-end">
            <button
              onClick={prevPage}
              disabled={isFirstPage}
              className="flex items-center justify-center size-[55px] rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 transition-colors text-white cursor-pointer disabled:cursor-default"
              aria-label="Previous"
            >
              <span className="rotate-180 inline-flex"><ArrowRight size={22} /></span>
            </button>
            <button
              onClick={nextPage}
              disabled={isLastDesktop}
              className="flex items-center justify-center size-[55px] rounded-full bg-white hover:bg-white/80 disabled:opacity-30 transition-colors text-[#1e1e20] cursor-pointer disabled:cursor-default"
              aria-label="Next"
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </div>

        {/* ── Mobile + Tablet: 1-up carousel ────────────────────────── */}
        <div className="lg:hidden flex flex-col gap-[24px] md:gap-[32px]">
          {/* Single card */}
          <div className="flex gap-[16px] md:gap-[20px] items-start">
            <p className="font-extralight italic text-[15px] md:text-[18px] text-white leading-[1.5] flex-1 min-w-0">
              {mobileItem.quote}
            </p>
            <div className="border-l-[3px] border-white flex flex-col shrink-0">
              <div className="px-[12px] md:px-[16px] py-[6px]">
                <p className="font-black text-[13px] md:text-[16px] text-white uppercase leading-[1.2] whitespace-nowrap">
                  {mobileItem.name}
                </p>
              </div>
              <div className="px-[12px] md:px-[16px] py-[6px]">
                <p className="font-medium text-[12px] md:text-[14px] text-white leading-[1.2] whitespace-nowrap">
                  {mobileItem.role}
                </p>
              </div>
            </div>
          </div>

          {/* Dot indicator + arrows */}
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-[6px]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`rounded-full transition-all cursor-pointer ${
                    i === page ? 'bg-white w-[20px] h-[6px]' : 'bg-white/30 w-[6px] h-[6px]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-[12px]">
              <button
                onClick={prevMobile}
                disabled={isFirstPage}
                className="flex items-center justify-center size-[44px] rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 transition-colors text-white cursor-pointer disabled:cursor-default"
                aria-label="Previous"
              >
                <span className="rotate-180 inline-flex"><ArrowRight size={18} /></span>
              </button>
              <button
                onClick={nextMobile}
                disabled={isLastMobile}
                className="flex items-center justify-center size-[44px] rounded-full bg-white hover:bg-white/80 disabled:opacity-30 transition-colors text-[#1e1e20] cursor-pointer disabled:cursor-default"
                aria-label="Next"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Page indicator */}
        <p className="hidden lg:block text-white/40 text-[13px] font-normal tracking-wide self-end">
          {page + 1} / {totalPages2}
        </p>

      </div>
    </section>
  )
}
