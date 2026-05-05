'use client'
import { useInView, useCountUp } from '@/hooks/useInView'
import CalendlyButton from '@/components/CalendlyButton'

function BigStat({ prefix = '', target, suffix = '', label }: { prefix?: string; target: number; suffix?: string; label?: string }) {
  const [ref, inView] = useInView(0.3)
  const count = useCountUp(target, inView, 1800)
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {prefix}{inView ? count : 0}{suffix}
    </span>
  )
}

export default function AboutStats() {
  const [sectionRef, inView] = useInView(0.15)

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-[#1e1e20] px-4 md:px-6 lg:px-[90px] py-[50px] md:py-[40px] lg:py-[90px]"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-[40px] lg:gap-[60px]">

        {/* Left: 99% + CTA */}
        <div
          className="flex flex-col gap-[20px] lg:gap-[40px] md:w-[279px] shrink-0 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-40px)',
          }}
        >
          <div>
            <p className="font-black text-[14px] md:text-[24px] text-white uppercase">Client Retention</p>
            <p className="font-black text-[56px] md:text-[80px] lg:text-[128px] text-white tracking-[-3px] md:tracking-[-5.12px] leading-[0.9]">
              <BigStat target={99} suffix="%" />
            </p>
            <p className="font-medium text-[13px] md:text-[16px] text-white mt-2">Of clients stay. Every year.</p>
          </div>
          <CalendlyButton className="btn-cta inline-flex items-center justify-center gap-3 w-fit bg-white border border-[#1e1e20] rounded-full px-[12px] py-[8px] md:px-6 md:py-3 lg:px-[24px] lg:py-[20px] text-[24px] font-medium uppercase whitespace-nowrap text-[#1e1e20]">
            Book a Demo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </CalendlyButton>
        </div>

        {/* Right: 4 stats — fixed width, right-aligned */}
        <div
          className="flex flex-col gap-[12px] md:w-[424px] shrink-0 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(40px)',
            transitionDelay: '200ms',
          }}
        >
          {/* Top row */}
          <div className="flex items-end justify-between">
            <div className="flex flex-col items-end">
              <p className="font-black text-[32px] md:text-[48px] lg:text-[63px] text-white tracking-[-1.89px] leading-none">
                <BigStat target={79} suffix="+" />
              </p>
              <p className="text-[11px] md:text-[16px] uppercase text-white/60 mt-1 text-right">Brands Transformed</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-black text-[32px] md:text-[48px] lg:text-[63px] text-white tracking-[-1.89px] leading-none">
                <BigStat target={5} suffix="★" />
              </p>
              <p className="text-[11px] md:text-[16px] uppercase text-white/60 mt-1 text-right">Average Client Review</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20" />

          {/* Bottom row */}
          <div className="flex items-end justify-between">
            <div className="flex flex-col items-end">
              <p className="font-black text-[32px] md:text-[48px] lg:text-[63px] text-white tracking-[-1.89px] leading-none">
                £<BigStat target={2} suffix="M+" />
              </p>
              <p className="text-[11px] md:text-[16px] uppercase text-white/60 mt-1 text-right">Revenue Generated</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-black text-[32px] md:text-[48px] lg:text-[63px] text-white tracking-[-1.89px] leading-none">
                <BigStat target={6} /><span className="text-[32px] md:text-[40px] lg:text-[47px]">yr</span>
              </p>
              <p className="text-[11px] md:text-[16px] uppercase text-white/60 mt-1 text-right">In Market</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
