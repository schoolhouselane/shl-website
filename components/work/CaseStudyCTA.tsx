'use client'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import CalendlyButton from '@/components/CalendlyButton'

export default function CaseStudyCTA() {
  const [ref, inView] = useInView(0.15)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#1e1e20] px-5 md:px-6 lg:px-[90px] py-[40px] md:py-[40px] lg:py-[60px] flex flex-row items-end justify-between gap-[12px] md:gap-[40px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >

      {/* Headline */}
      <h2 className="font-black text-[28px] md:text-[40px] lg:text-[60px] uppercase text-white leading-[0.92] tracking-[-1.5px]">
        LOVED THIS?<br />
        LET&apos;S APPLY IT<br />
        TO YOUR BRAND.
      </h2>

      {/* CTA group */}
      <div className="flex flex-col gap-[8px] items-end shrink-0 md:w-[183px]">
        <CalendlyButton className="bg-white flex items-center gap-[12px] px-[24px] py-[12px] md:py-[12px] lg:py-[20px] rounded-[50px] whitespace-nowrap hover:bg-[#f5f3ef] transition-colors">
          <span className="font-medium text-[#1e1e20] text-[14px] md:text-[16px] lg:text-[24px] uppercase leading-normal">
            Book a Call
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </CalendlyButton>
        <p className="text-[12px] text-white font-normal tracking-[0.72px] text-center">
          hello@schoolhouselane.co
        </p>
      </div>

    </section>
  )
}
