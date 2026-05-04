'use client'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import CalendlyButton from '@/components/CalendlyButton'

export default function ServicesCTADark() {
  const [ref, inView] = useInView(0.15)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#1e1e20] px-4 md:px-6 lg:px-[90px] py-[50px] md:py-[60px] flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-10 transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >

      {/* Left: headline + body */}
      <div className="flex flex-col gap-[16px] md:gap-[20px] max-w-full lg:max-w-[760px]">
        <h2 className="font-black text-[24px] md:text-[36px] lg:text-[60px] leading-[0.92] tracking-[-1.5px] uppercase text-white">
          Let&apos;s Build Something<br />
          <span className="italic font-black">remarkable.</span>
        </h2>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-white/60 leading-[1.7] max-w-[520px]">
          You have the ambition. We have the method. Let&apos;s turn your brand into your most measurable growth asset.
        </p>
      </div>

      {/* Right: CTA */}
      <div className="flex flex-col gap-[12px] items-start md:items-end md:w-[245px] shrink-0">
        <CalendlyButton className="btn-cta flex items-center gap-3 bg-white rounded-full px-[20px] md:px-[24px] py-[12px] md:py-[14px] lg:py-[20px] text-[24px] font-medium uppercase whitespace-nowrap text-[#1e1e20] w-fit">
          Book a Demo
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </CalendlyButton>
        <Link
          href="mailto:hello@schoolhouselane.co"
          className="text-[14px] md:text-[16px] text-white/50 tracking-[0.96px] hover:opacity-70 transition-opacity"
        >
          hello@schoolhouselane.co
        </Link>
      </div>

    </section>
  )
}
