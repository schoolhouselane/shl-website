'use client'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '99%', label: 'Client Retention' },
  { value: '6YR', label: 'Average Partnership' },
  { value: '79+', label: 'Brands Transformed' },
]

export default function Stats() {
  const [ref, inView] = useInView(0.15)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-white px-4 md:px-6 lg:px-[90px] py-[32px] md:py-[40px] lg:py-[80px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      {/* Mobile layout */}
      <div className="flex items-start justify-between gap-4 md:hidden">

        {/* Stats */}
        <div className="flex flex-col gap-[2px] w-[142px] shrink-0">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-[#1e1e20] py-[4.5px] flex flex-col gap-[4.5px]">
              <p className="font-semibold text-[32px] leading-none text-[#1e1e20] uppercase">{s.value}</p>
              <p className="font-light text-[12px] uppercase text-[#1e1e20] whitespace-nowrap">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Headline + description + button */}
        <div className="flex flex-col items-end gap-[32px] flex-1">
          <div className="flex flex-col items-end gap-[12px]">
            <h3 className="font-black text-[28px] leading-[0.92] tracking-[-0.7px] uppercase text-[#1e1e20] text-right">
              LET&apos;S BUILD<br />SOMETHING<br />remarkable.
            </h3>
            <p className="text-[12px] leading-normal text-[#1e1e20] text-right max-w-[214px]">
              15-minute strategy call. Let&apos;s discuss real ideas for your brand and what growth actually looks like for you.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center gap-[6px] border border-[#1e1e20] bg-white rounded-full px-[12px] py-[8px] text-[16px] font-medium uppercase text-[#1e1e20] whitespace-nowrap"
          >
            Let&apos;s talk
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

      </div>

      {/* Tablet+ layout — 3 equal columns */}
      <div className="hidden md:grid md:grid-cols-3 md:items-center">

        {/* Col 1: Stats */}
        <div className="flex flex-col gap-[2px]">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-[#1e1e20] py-[4.5px] flex flex-col gap-[4.5px]">
              <p className="font-semibold text-[40px] lg:text-[57px] leading-none text-[#1e1e20] uppercase">{s.value}</p>
              <p className="font-light text-[14px] uppercase text-[#1e1e20] whitespace-nowrap">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Col 2: Headline + description */}
        <div className="flex flex-col gap-[19px] px-[40px] lg:px-[60px]">
          <h3 className="font-black text-[32px] lg:text-[60px] leading-[0.92] tracking-[-1px] lg:tracking-[-1.5px] uppercase text-[#1e1e20]">
            LET&apos;S BUILD<br />SOMETHING<br />remarkable.
          </h3>
          <p className="text-[16px] leading-normal text-[#1e1e20]">
            15-minute strategy call. Let&apos;s discuss real ideas for your brand and what growth actually looks like for you.
          </p>
        </div>

        {/* Col 3: Button + email */}
        <div className="flex flex-col items-end gap-[12px] justify-center">
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center gap-[12px] bg-[#1e1e20] text-white rounded-full px-[24px] py-[12px] lg:py-[16px] text-[16px] lg:text-[18px] font-medium uppercase whitespace-nowrap"
          >
            Let&apos;s talk
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <a href="mailto:hello@schoolhouselane.co" className="text-[14px] text-[#1e1e20] hover:opacity-70 transition-opacity lowercase">
            hello@schoolhouselane.co
          </a>
        </div>

      </div>
    </section>
  )
}
