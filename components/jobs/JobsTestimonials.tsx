'use client'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import type { Testimonial } from '@/lib/jobs-data'

function ArrowRight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

interface Props {
  testimonials: Testimonial[]
}

export default function JobsTestimonials({ testimonials }: Props) {
  const [ref, inView] = useInView(0.1)
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 2 : c - 2 < 0 ? 0 : c - 2))
  const next = () => setCurrent((c) => (c + 2 >= testimonials.length ? 0 : c + 2))

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#1e1e20] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div className="flex flex-col gap-[48px] md:gap-[60px] lg:gap-[80px] lg:items-end">

        {/* Heading */}
        <h2 className="font-black text-[36px] md:text-[44px] lg:text-[56px] text-white uppercase leading-[1.07] tracking-tight">
          Straight From The<br className="hidden lg:block" /> People Inside
        </h2>

        {/* Desktop: two testimonials side by side */}
        <div className="hidden lg:flex flex-col gap-[30px] w-full">
          <div className="flex gap-[34px] items-start">
            {testimonials.slice(current, current + 2).map((t, i) => (
              <div key={i} className="flex gap-[20px] items-start flex-1">
                {/* Quote text */}
                <p className="font-extralight italic text-[24px] text-white leading-[1.5] flex-1">
                  {t.quote}
                </p>
                {/* Divider + name */}
                <div className="border-l-[3px] border-white flex flex-col h-[110px] items-start shrink-0">
                  <div className="px-[20px] py-[8px]">
                    <p className="font-black text-[24px] text-white uppercase leading-[1.2]">
                      {t.name}
                    </p>
                  </div>
                  <div className="px-[20px] py-[8px]">
                    <p className="font-medium text-[20px] text-white leading-[1.2]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-[30px] justify-end">
            <button
              onClick={prev}
              className="flex items-center justify-center size-[55px] rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white cursor-pointer"
              aria-label="Previous testimonials"
            >
              <span className="rotate-180 inline-flex">
                <ArrowRight size={22} />
              </span>
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center size-[55px] rounded-full bg-white hover:bg-white/90 transition-colors text-[#1e1e20] cursor-pointer"
              aria-label="Next testimonials"
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </div>

        {/* Mobile + Tablet: stacked testimonials */}
        <div className="lg:hidden flex flex-col gap-[32px] md:gap-[40px]">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col gap-[16px] md:gap-[20px] border-t border-white/30 pt-[24px] md:pt-[28px]">
              <p className="font-extralight italic text-[16px] md:text-[20px] text-white leading-[1.5]">
                {t.quote}
              </p>
              <div className="border-l-[3px] border-white pl-[16px]">
                <p className="font-black text-[16px] md:text-[20px] text-white uppercase leading-[1.2]">
                  {t.name}
                </p>
                <p className="font-medium text-[14px] md:text-[16px] text-white leading-[1.2] mt-[4px]">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
