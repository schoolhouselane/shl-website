import Link from 'next/link'

export default function ServicesCTAGrey() {
  return (
    <section className="bg-[#d7d7d7] px-4 md:px-6 lg:px-[90px] py-[50px] md:py-[60px] flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-10">

      {/* Left: headline */}
      <h2 className="font-black text-[22px] md:text-[32px] lg:text-[60px] leading-[0.95] tracking-[-1.2px] uppercase text-[#1e1e20] max-w-full lg:max-w-[760px]">
        Your brand should command a category. Ready for this level of growth?
      </h2>

      {/* Right: CTA */}
      <div className="flex flex-col gap-[12px] items-start md:items-end md:w-[245px] shrink-0">
        <Link
          href="/contact"
          className="btn-cta flex items-center gap-3 bg-[#1e1e20] text-white rounded-full px-[20px] md:px-[24px] py-[12px] md:py-[14px] lg:py-[20px] text-[15px] md:text-[16px] lg:text-[24px] font-medium uppercase w-fit"
        >
          Book a Call
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
        <Link
          href="mailto:hello@schoolhouselane.co"
          className="text-[14px] md:text-[16px] text-[#1e1e20] tracking-[0.96px] hover:opacity-70 transition-opacity"
        >
          hello@schoolhouselane.co
        </Link>
      </div>

    </section>
  )
}
