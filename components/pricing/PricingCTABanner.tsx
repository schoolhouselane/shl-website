import CalendlyButton from '@/components/CalendlyButton'

export default function PricingCTABanner() {
  return (
    <section className="bg-[#d7d7d7] px-4 md:px-6 lg:px-[90px] py-[48px] md:py-[60px]">
      <div className="flex flex-col gap-[32px] md:flex-row md:items-end md:justify-between">
        {/* Left */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="font-black text-[32px] md:text-[44px] lg:text-[60px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-0.04em]">
            Not Sure<br />Which Package?<br />Let&apos;s Talk.
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#1e1e20] leading-[1.6] max-w-[520px]">
            15 minutes. We&apos;ll tell you exactly which package makes sense for your brand, your goals, and your budget — honestly.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-[12px] items-start md:items-end shrink-0">
          <CalendlyButton className="group flex items-center gap-3 bg-white text-black rounded-full px-[24px] py-[16px] md:py-[20px] text-[18px] md:text-[20px] lg:text-[24px] font-medium uppercase hover:bg-[#1e1e20] hover:text-white transition-all duration-300">
            Book a demo
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </CalendlyButton>
          <a
            href="mailto:hello@schoolhouselane.com"
            className="text-[14px] md:text-[16px] text-[#1e1e20] tracking-wide hover:underline"
          >
            hello@schoolhouselane.com
          </a>
        </div>
      </div>
    </section>
  )
}
