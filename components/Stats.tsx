import Link from 'next/link'

const stats = [
  { value: '99%', label: 'Client Retention' },
  { value: '80+', label: 'Brands Transformed' },
  { value: '6YR', label: 'Average Partnership' },
]

export default function Stats() {
  return (
    <section className="bg-white px-5 md:px-[90px] py-[90px] md:py-[180px]">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Stats */}
        <div className="flex flex-wrap gap-8 md:gap-16">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-[#1e1e20] pb-2">
              <p className="font-semibold text-[60px] md:text-[80px] leading-none uppercase text-[#1e1e20]">{s.value}</p>
              <p className="font-light text-[13px] md:text-[16px] uppercase text-[#1e1e20] mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-full md:max-w-[446px]">
          <h3 className="font-black text-[40px] md:text-[60px] leading-[0.92] tracking-[-1.5px] uppercase text-[#1e1e20]">
            LET&apos;S BUILD<br />SOMETHING<br />remarkable.
          </h3>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#1e1e20]">
            15-minute strategy call. Let&apos;s discuss real ideas for your brand and what growth actually looks like for you.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 mt-6 border border-[#1e1e20] bg-white rounded-full px-6 py-3 text-[18px] md:text-[24px] font-medium uppercase hover:bg-[#1e1e20] hover:text-white transition-colors">
            Let&apos;s talk
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
