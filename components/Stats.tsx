import Link from 'next/link'

const stats = [
  { value: '99%', label: 'Client Retention' },
  { value: '6YR', label: 'Average Partnership' },
  { value: '79+', label: 'Brands Transformed' },
]

export default function Stats() {
  return (
    <section className="bg-white px-4 md:px-6 lg:px-[90px] py-[32px] md:py-[40px] lg:py-[80px]">
      <div className="flex items-start justify-between gap-4">

        {/* Left: Stats — all breakpoints */}
        <div className="flex flex-col gap-[2px] w-[142px] md:w-[166px] lg:w-[260px] shrink-0">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-[#1e1e20] py-[4.5px] flex flex-col gap-[4.5px]">
              <p className="font-semibold text-[32px] md:text-[40px] lg:text-[57px] leading-none text-[#1e1e20] uppercase">{s.value}</p>
              <p className="font-light text-[12px] md:text-[14px] uppercase text-[#1e1e20] whitespace-nowrap">{s.label}</p>
            </div>
          ))}
        </div>

        {/* MOBILE: headline + description + button (right-aligned) */}
        <div className="flex flex-col items-end gap-[32px] flex-1 md:hidden">
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

        {/* TABLET+: headline + description (center column) */}
        <div className="hidden md:flex flex-col gap-[19px] flex-1 px-[40px] lg:px-0">
          <h3 className="font-black text-[40px] lg:text-[60px] leading-[0.92] tracking-[-1px] lg:tracking-[-1.5px] uppercase text-[#1e1e20]">
            LET&apos;S BUILD<br />SOMETHING<br />remarkable.
          </h3>
          <p className="text-[16px] leading-normal text-[#1e1e20] max-w-[305px]">
            15-minute strategy call. Let&apos;s discuss real ideas for your brand and what growth actually looks like for you.
          </p>
        </div>

        {/* TABLET+: button (right column) */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center gap-[12px] border border-[#1e1e20] bg-white rounded-full px-[24px] py-[12px] lg:py-[16px] text-[16px] lg:text-[18px] font-medium uppercase text-[#1e1e20] whitespace-nowrap"
          >
            Let&apos;s talk
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
