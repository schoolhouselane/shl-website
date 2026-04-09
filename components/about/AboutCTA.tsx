import Link from 'next/link'

export default function AboutCTA() {
  return (
    <section className="bg-[#d7d7d7] px-5 md:px-[90px] py-[60px] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

      {/* Left: headline + body */}
      <div className="flex flex-col gap-[19px] max-w-full lg:max-w-[446px]">
        <h2 className="font-black text-[32px] sm:text-[40px] md:text-[60px] leading-[0.92] tracking-[-1.5px] uppercase text-[#1e1e20]">
          LET&apos;S BUILD<br />SOMETHING<br />remarkable.
        </h2>
        <p className="text-[16px] leading-[1.6] text-[#1e1e20]">
          15-minute strategy call. Let&apos;s discuss real ideas for your brand and what growth actually looks like for you.
        </p>
      </div>

      {/* Right: CTA + email */}
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
          className="text-[16px] text-[#1e1e20] tracking-[0.96px] hover:opacity-70 transition-opacity"
        >
          hello@schoolhouselane.co
        </Link>
      </div>

    </section>
  )
}
