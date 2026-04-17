import Image from 'next/image'
import Link from 'next/link'

export default function ServicesHero() {
  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[64px] md:pt-[82px] pb-0 flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px]">

      {/* Headline */}
      <h1 className="font-black text-[24px] md:text-[32px] lg:text-[64px] uppercase text-[#1e1e20] leading-tight max-w-[921px] pt-[32px] md:pt-[40px] lg:pt-[60px]">
        Services Engineered for Enterprise Value.
      </h1>

      {/* Hero image */}
      <div className="relative w-full h-[217px] md:h-[260px] lg:h-[378px] overflow-hidden">
        <Image
          src="/images/services-hero.png"
          alt="Services"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, calc(100vw - 180px)"
        />
      </div>

      {/* Body + CTAs — stacked on mobile, side by side on tablet+ */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[16px] md:gap-6 pb-[40px] md:pb-[60px] lg:pb-[80px]">
        <p className="text-[15px] md:text-[16px] lg:text-[20px] text-[#111] leading-normal max-w-full md:max-w-[476px] lg:max-w-[921px]">
          A senior team of strategists and brand architects obsessed with turning bold ideas into measurable leverage.
        </p>
        <div className="flex flex-row items-center gap-[6px] md:gap-3 lg:gap-5 flex-wrap shrink-0">
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center gap-2 md:gap-3 border border-[#1e1e20] rounded-full px-[16px] md:px-[24px] py-[10px] md:py-[12px] text-[14px] md:text-[16px] font-medium uppercase text-[#1e1e20]"
          >
            Book a Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center gap-2 md:gap-3 bg-[#1e1e20] rounded-full px-[16px] md:px-[24px] py-[10px] md:py-[12px] text-[14px] md:text-[16px] font-medium uppercase text-white"
          >
            Explore All Services
          </Link>
        </div>
      </div>

    </section>
  )
}
