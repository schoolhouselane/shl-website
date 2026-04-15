import Link from 'next/link'

export default function CaseStudyCTA() {
  return (
    <section className="bg-[#1e1e20] px-5 md:px-[90px] py-[60px] flex flex-col md:flex-row md:items-end md:justify-between gap-[40px]">

      {/* Headline */}
      <h2 className="font-black text-[40px] md:text-[60px] uppercase text-white leading-none tracking-[-1.5px]">
        LOVED THIS?<br />
        LET&apos;S APPLY IT<br />
        TO YOUR BRAND.
      </h2>

      {/* CTA group */}
      <div className="flex flex-col gap-[12px] items-start md:items-start shrink-0 w-full md:w-[245px]">
        <Link
          href="/contact"
          className="bg-white flex items-center gap-[12px] px-[24px] py-[20px] rounded-[50px] w-full justify-center hover:bg-[#f5f3ef] transition-colors"
        >
          <span className="font-medium text-[#1e1e20] text-[20px] md:text-[24px] uppercase whitespace-nowrap leading-normal">
            Book a Call
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <p className="text-[16px] text-white font-normal tracking-[0.96px] w-full text-center">
          hello@schoolhouselane.co
        </p>
      </div>

    </section>
  )
}
