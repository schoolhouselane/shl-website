'use client'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import CalendlyButton from '@/components/CalendlyButton'

export default function AboutCTA() {
  const [ref, inView] = useInView(0.15)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#d7d7d7] px-4 md:px-6 lg:px-[90px] py-[50px] md:py-[60px] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 md:gap-10 transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >

      {/* Left: headline + body */}
      <div className="flex flex-col gap-[19px] max-w-full lg:max-w-[446px]">
        <h2 className="font-black text-[28px] md:text-[32px] lg:text-[60px] leading-[0.92] tracking-[-1.5px] uppercase text-[#1e1e20]">
          LET&apos;S BUILD<br />SOMETHING<br />remarkable.
        </h2>
        <p className="text-[16px] lg:text-[20px] leading-[1.6] text-[#1e1e20]">
          15-minute strategy call. Let&apos;s discuss real ideas for your brand and what growth actually looks like for you.
        </p>
      </div>

      {/* Right: CTA + email */}
      <div className="flex flex-col gap-[12px] items-start lg:items-end lg:w-[245px] shrink-0">
        <CalendlyButton className="btn-cta flex items-center gap-3 bg-white rounded-full px-[18px] md:px-[20px] lg:px-[24px] py-[12px] md:py-[16px] lg:py-[20px] text-[15px] md:text-[18px] lg:text-[24px] font-medium uppercase text-[#1e1e20] w-fit">
          Book a Call
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </CalendlyButton>
        <Link
          href="mailto:hello@schoolhouselane.co"
          className="text-[16px] text-[#1e1e20] tracking-[0.96px] hover:opacity-70 transition-opacity"
        >
          hello@schoolhouselane.co
        </Link>
      </div>

    </section>
  )
}
