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
      <p className="font-extralight italic text-[16px] text-white leading-[1.5] flex-1 min-w-0">
        {t.quote}
      </p>
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
  const [page, setPage] = useState(0)

  const totalPagesDesktop = Math.ceil(testimonials.length / 2)
  const totalPagesMobile = testimonials.length

  const prevPage = () => setPage((p) => Math.max(0, p - 1))
  const nextPageDesktop = () => setPage((p) => Math.min(totalPagesDesktop - 1, p + 1))
  const nextPageMobile = () => setPage((p) => Math.min(totalPagesMobile - 1, p + 1))

  const isFirstPage = page === 0
  const isLastDesktop = page >= totalPagesDesktop - 1
  const isLastMobile = page >= totalPagesMobile - 1

  // Group into pairs for desktop
  const pairs: Testimonial[][] = []
  for (let i = 0; i < testimonials.length; i += 2) {
    pairs.push(testimonials.slice(i, i + 2))
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#1e1e20] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div className="flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">

        {/* Heading */}
        <h2 className="font-black text-[36px] md:text-[44px] lg:text-[56px] text-white uppercase leading-[1.07] tracking-tight">
          Straight From The<br />People Inside
        </h2>

        {/* ── Desktop: 2-up sliding carousel ─────────────────────────── */}
        <div className="hidden lg:flex flex-col gap-[30px]">
          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pairs.map((pair, i) => (
                <div key={i} className="flex gap-[34px] items-start w-full shrink-0">
                  {pair.map((t, j) => (
                    <TestimonialCard key={j} t={t} />
                  ))}
                  {pair.length === 1 && <div className="flex-1 min-w-0" />}
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <p className="text-white/40 text-[13px] font-normal tracking-wide">
              {page + 1} / {totalPagesDesktop}
            </p>
            <div className="flex items-center gap-[16px]">
              <button
                onClick={prevPage}
                disabled={isFirstPage}
                className="flex items-center justify-center size-[55px] rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 transition-colors text-white cursor-pointer disabled:cursor-default"
                aria-label="Previous"
              >
                <span className="rotate-180 inline-flex"><ArrowRight size={22} /></span>
              </button>
              <button
                onClick={nextPageDesktop}
                disabled={isLastDesktop}
                className="flex items-center justify-center size-[55px] rounded-full bg-white hover:bg-white/80 disabled:opacity-30 transition-colors text-[#1e1e20] cursor-pointer disabled:cursor-default"
                aria-label="Next"
              >
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile + Tablet: 1-up sliding carousel ─────────────────── */}
        <div className="lg:hidden flex flex-col gap-[24px] md:gap-[32px]">
          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="flex gap-[16px] md:gap-[20px] items-start w-full shrink-0">
                  <p className="font-extralight italic text-[16px] text-white leading-[1.5] flex-1 min-w-0">
                    {t.quote}
                  </p>
                  <div className="border-l-[3px] border-white flex flex-col shrink-0">
                    <div className="px-[12px] md:px-[16px] py-[6px]">
                      <p className="font-black text-[13px] md:text-[16px] text-white uppercase leading-[1.2] whitespace-nowrap">
                        {t.name}
                      </p>
                    </div>
                    <div className="px-[12px] md:px-[16px] py-[6px]">
                      <p className="font-medium text-[12px] md:text-[14px] text-white leading-[1.2] whitespace-nowrap">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots + arrows */}
          <div className="flex items-center justify-between">
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
            <div className="flex gap-[12px]">
              <button
                onClick={prevPage}
                disabled={isFirstPage}
                className="flex items-center justify-center size-[44px] rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 transition-colors text-white cursor-pointer disabled:cursor-default"
                aria-label="Previous"
              >
                <span className="rotate-180 inline-flex"><ArrowRight size={18} /></span>
              </button>
              <button
                onClick={nextPageMobile}
                disabled={isLastMobile}
                className="flex items-center justify-center size-[44px] rounded-full bg-white hover:bg-white/80 disabled:opacity-30 transition-colors text-[#1e1e20] cursor-pointer disabled:cursor-default"
                aria-label="Next"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
