'use client'
import Image from 'next/image'
import Link from 'next/link'
import CalendlyButton from '@/components/CalendlyButton'

export default function PricingHero() {
  return (
    <section className="relative w-full h-[600px] md:h-[640px] lg:h-screen overflow-hidden flex items-end pb-[60px] md:pb-[80px] lg:pb-[120px]">
      {/* Background image */}
      <Image
        src="/images/pricing.png"
        alt="Schoolhouse Lane — AI Creative Agency"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-6 lg:px-[90px] max-w-[900px]">
        <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] mb-[28px] md:mb-[36px] lg:mb-[40px]">
          <h1 className="font-black text-[28px] md:text-[44px] lg:text-[64px] leading-[0.9] tracking-[-0.5px] md:tracking-[-1px] lg:tracking-[-1.92px] uppercase text-white">
            Serious Strategy.<br />Unbeatable Speed.<br />Simple Pricing.
          </h1>
          <p className="font-normal text-[14px] md:text-[18px] lg:text-[20px] text-white leading-snug max-w-[480px] lg:max-w-[606px]">
            Access world-class human talent supercharged by proprietary AI. No content-mill fluff, just high-converting creative priced to help you grow.
          </p>
        </div>

        <div className="flex flex-col items-start gap-[10px] md:flex-row md:items-center md:gap-[20px]">
          <CalendlyButton className="btn-cta flex items-center gap-3 border border-white rounded-full px-[24px] py-[12px] text-white text-[16px] font-medium uppercase">
            Get Started
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </CalendlyButton>
          <Link
            href="#pricing-plans"
            className="btn-cta flex items-center justify-center bg-white rounded-full px-[24px] py-[12px] text-[#1e1e20] text-[16px] font-medium uppercase"
          >
            See All Packages
          </Link>
        </div>
      </div>
    </section>
  )
}
