import Link from 'next/link'

export default function ServicesCTADark() {
  return (
    <section className="bg-[#1e1e20] px-5 md:px-[90px] py-[60px] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

      {/* Left: headline + body */}
      <div className="flex flex-col gap-[20px] max-w-full lg:max-w-[760px]">
        <h2 className="font-black text-[40px] sm:text-[52px] md:text-[60px] leading-[0.92] tracking-[-1.5px] uppercase text-white">
          Let&apos;s Build Something<br />
          <span className="italic font-black">remarkable.</span>
        </h2>
        <p className="text-[16px] md:text-[18px] text-white/60 leading-[1.7] max-w-[520px]">
          You have the ambition. We have the method. Let&apos;s turn your brand into your most measurable growth asset.
        </p>
      </div>

      {/* Right: CTA */}
      <div className="flex flex-col gap-[12px] items-start lg:items-end lg:w-[245px] shrink-0">
        <Link
          href="/contact"
          className="btn-cta flex items-center gap-3 bg-white rounded-full px-[20px] md:px-[24px] py-[14px] md:py-[20px] text-[16px] md:text-[24px] font-medium uppercase text-[#1e1e20] w-fit"
        >
          Book a Call
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
        <Link
          href="mailto:hello@schoolhouselane.co"
          className="text-[16px] text-white/50 tracking-[0.96px] hover:opacity-70 transition-opacity"
        >
          hello@schoolhouselane.co
        </Link>
      </div>

    </section>
  )
}
