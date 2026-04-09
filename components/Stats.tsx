import Link from 'next/link'

const stats = [
  { value: '99%', label: 'Client Retention' },
  { value: '6YR', label: 'Average Partnership' },
  { value: '80+', label: 'Brands Transformed' },
]

export default function Stats() {
  return (
    <section className="bg-white px-5 md:px-[90px] pt-[40px] pb-[60px]">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-0">

        {/* Left: Stats */}
        <div className="flex flex-col gap-[2px] w-full md:w-[166px] shrink-0">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-[#1e1e20]/50 py-[4.5px] flex flex-col gap-[4.5px]">
              <p className="font-semibold text-[48px] md:text-[57px] leading-none text-[#1e1e20] uppercase">{s.value}</p>
              <p className="font-light text-[14px] uppercase text-[#1e1e20] whitespace-nowrap">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Center: Headline + body */}
        <div className="flex flex-col gap-[19px] max-w-full md:w-[446px] shrink-0">
          <h3 className="font-black text-[40px] md:text-[60px] leading-[0.92] tracking-[-1.5px] uppercase text-[#1e1e20]">
            LET&apos;S BUILD<br />SOMETHING<br />remarkable.
          </h3>
          <p className="text-[16px] leading-[1.6] text-[#1e1e20]">
            15-minute strategy call. Let&apos;s discuss real ideas for your brand and what growth actually looks like for you.
          </p>
        </div>

        {/* Right: CTA */}
        <div className="shrink-0">
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center gap-3 border border-[#1e1e20] bg-white rounded-full px-[24px] py-[20px] text-[16px] md:text-[24px] font-medium uppercase text-[#1e1e20] transition-colors"
          >
            Let&apos;s talk
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
