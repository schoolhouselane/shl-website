import Image from 'next/image'
import Link from 'next/link'

export default function ServicesHero() {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] pt-[82px] pb-[0] flex flex-col gap-[40px]">

      {/* Headline */}
      <h1 className="font-black text-[36px] md:text-[64px] uppercase text-[#1e1e20] leading-tight max-w-[921px] pt-[40px] md:pt-[60px]">
        Services Engineered for Enterprise Value.
      </h1>

      {/* Hero image */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[378px] overflow-hidden">
        <Image
          src="/images/services-hero.png"
          alt="Services"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, calc(100vw - 180px)"
        />
      </div>

      {/* Body + CTAs */}
      <div className="flex flex-col gap-[30px] pb-[60px] md:pb-[80px]">
        <p className="text-[16px] md:text-[20px] text-[#111] leading-normal max-w-[921px]">
          A senior team of strategists and brand architects obsessed with turning bold ideas into measurable leverage.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-[12px] md:gap-[20px]">
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center gap-3 border border-[#1e1e20] rounded-full px-[24px] py-[12px] text-[16px] font-medium uppercase text-[#1e1e20]"
          >
            Book a Call
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center gap-3 bg-[#1e1e20] rounded-full px-[24px] py-[12px] text-[16px] font-medium uppercase text-white"
          >
            Explore All Services
          </Link>
        </div>
      </div>

    </section>
  )
}
