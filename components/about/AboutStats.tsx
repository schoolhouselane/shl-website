import Link from 'next/link'

export default function AboutStats() {
  return (
    <section className="bg-[#1e1e20] px-5 md:px-[90px] py-[60px] md:py-[90px]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-[60px]">

        {/* Left: 99% + CTA */}
        <div className="flex flex-col gap-[20px] md:gap-[40px] lg:w-[559px] shrink-0">
          <div>
            <p className="font-black text-[18px] md:text-[24px] text-white uppercase">Client Retention</p>
            <p className="font-black text-[80px] md:text-[128px] text-white tracking-[-5.12px] leading-[0.9]">99%</p>
            <p className="font-medium text-[14px] md:text-[16px] text-white mt-2">Of clients stay. Every year.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-white/50 text-[14px] md:text-[16px] uppercase tracking-wide">Want results like these?</p>
            <Link
              href="/contact"
              className="btn-cta inline-flex items-center gap-3 w-fit border border-white rounded-full px-6 py-3 text-[16px] font-medium uppercase text-white"
            >
              Let&apos;s talk
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        {/* Right: 4 stats grid */}
        <div className="flex flex-col gap-[20px] flex-1">
          {/* Top row */}
          <div className="flex justify-between gap-4">
            <div>
              <p className="font-black text-[48px] md:text-[63px] text-white tracking-[-1.89px] leading-none">79+</p>
              <p className="text-[12px] md:text-[16px] uppercase text-white/60 mt-1">Brands Transformed</p>
            </div>
            <div className="text-right">
              <p className="font-black text-[48px] md:text-[63px] text-white tracking-[-1.89px] leading-none">5★</p>
              <p className="text-[12px] md:text-[16px] uppercase text-white/60 mt-1">Average Client Review</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20" />

          {/* Bottom row */}
          <div className="flex justify-between gap-4">
            <div>
              <p className="font-black text-[48px] md:text-[63px] text-white tracking-[-1.89px] leading-none">£2M+</p>
              <p className="text-[12px] md:text-[16px] uppercase text-white/60 mt-1">Revenue Generated</p>
            </div>
            <div className="text-right">
              <p className="font-black text-[48px] md:text-[63px] text-white tracking-[-1.89px] leading-none">
                6<span className="text-[36px] md:text-[47px]">yr</span>
              </p>
              <p className="text-[12px] md:text-[16px] uppercase text-white/60 mt-1">In Market</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
