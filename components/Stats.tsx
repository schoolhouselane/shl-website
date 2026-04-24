'use client'
import { useInView, useCountUp } from '@/hooks/useInView'
import CalendlyButton from '@/components/CalendlyButton'

const stats = [
  { target: 99, suffix: '%',  label: 'Client Retention' },
  { target: 6,  suffix: 'YR', label: 'Average Partnership' },
  { target: 79, suffix: '+',  label: 'Brands Transformed' },
]

function StatRow({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) {
  const [ref, inView] = useInView(0.3)
  const count = useCountUp(target, inView, 1400)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="border-b border-[#1e1e20] py-[6px] lg:py-[5px] transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <p className="font-semibold text-[44px] md:text-[52px] lg:text-[58px] text-[#1e1e20] leading-tight tracking-[-1px]">
        {inView ? count : 0}{suffix}
      </p>
      <p className="font-light text-[12px] md:text-[13px] lg:text-[14px] text-[#1e1e20] uppercase tracking-[0.5px]">
        {label}
      </p>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[40px] pb-[48px] md:pt-[48px] md:pb-[60px] lg:pt-[40px] lg:pb-[60px]">

      {/* Desktop: 3-column flex row */}
      <div className="hidden lg:flex items-end justify-between gap-[40px]">

        {/* Left — stacked stats */}
        <div className="flex flex-col w-[166px] shrink-0">
          {stats.map((s, i) => (
            <StatRow key={s.label} {...s} delay={i * 100} />
          ))}
        </div>

        {/* Center — headline + body */}
        <div
          className="flex flex-col gap-[19px] w-[446px] shrink-0 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '150ms' }}
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <h2 className="font-black text-[60px] text-[#1e1e20] leading-[0.92] tracking-[-1.5px] uppercase">
            Let&apos;s Build<br />Something<br />Remarkable.
          </h2>
          <p className="text-[16px] text-[#1e1e20] leading-[1.6]">
            15-minute strategy call. Let&apos;s discuss real ideas for your brand and what growth actually looks like for you.
          </p>
        </div>

        {/* Right — CTA */}
        <div
          className="shrink-0 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '300ms' }}
        >
          <CalendlyButton className="btn-cta inline-flex items-center gap-[12px] border border-[#1e1e20] rounded-[50px] px-[24px] py-[20px] text-[24px] font-medium uppercase text-[#1e1e20]">
            Let&apos;s talk
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </CalendlyButton>
        </div>

      </div>

      {/* Mobile + Tablet */}
      <div className="lg:hidden flex flex-col gap-[32px] md:gap-[40px]">

        {/* Heading */}
        <div
          className="flex flex-col gap-[16px] transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <h2 className="font-black text-[36px] md:text-[52px] text-[#1e1e20] leading-[0.92] tracking-[-1.2px] uppercase">
            Let&apos;s Build<br />Something<br />Remarkable.
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#1e1e20] leading-[1.6] max-w-[480px]">
            15-minute strategy call. Let&apos;s discuss real ideas for your brand and what growth actually looks like for you.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex gap-[24px] md:gap-[40px]">
          {stats.map((s, i) => (
            <StatRow key={s.label} {...s} delay={i * 80} />
          ))}
        </div>

        {/* CTA */}
        <CalendlyButton className="btn-cta inline-flex items-center gap-[10px] border border-[#1e1e20] rounded-[50px] px-[20px] py-[12px] md:py-[14px] text-[16px] md:text-[18px] font-medium uppercase text-[#1e1e20] w-fit">
          Let&apos;s talk
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </CalendlyButton>

      </div>

    </section>
  )
}
