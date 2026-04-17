import Link from 'next/link'

export default function WorkCTA() {
  return (
    <>
      {/* Dark CTA — 949:28051 */}
      <section className="bg-[#1e1e20] px-4 md:px-6 lg:px-[90px] py-[32px] md:py-[40px] lg:py-[80px] flex flex-row items-end justify-between gap-[12px] md:gap-[40px]">
        <h2 className="font-black text-[28px] md:text-[40px] lg:text-[60px] uppercase text-white leading-[0.92] tracking-[-1px]">
          Ready for Your<br />Own Growth<br />Story?
        </h2>
        <div className="flex flex-col gap-[8px] items-end shrink-0 md:w-[183px]">
          <Link
            href="/contact"
            className="btn-cta flex items-center gap-[8px] md:gap-[12px] bg-white text-[#1e1e20] px-[16px] md:px-[24px] py-[10px] md:py-[12px] lg:py-[20px] rounded-[50px] text-[14px] md:text-[16px] lg:text-[24px] font-medium uppercase whitespace-nowrap w-fit"
          >
            Let&apos;s talk
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-[12px] text-white tracking-wide">For results like these!</p>
        </div>
      </section>

      {/* Grey industry CTA — 949:28416 */}
      <section className="bg-[#d7d7d7] px-4 md:px-6 lg:px-[90px] py-[32px] md:py-[40px] lg:py-[80px] flex flex-col md:flex-row md:items-end md:justify-between gap-[24px] md:gap-[40px]">
        <div className="flex flex-col gap-[19px] md:max-w-[613px] lg:max-w-[875px]">
          <h2 className="font-black text-[28px] md:text-[40px] lg:text-[60px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-1px]">
            Not Seeing Your Industry?
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#1e1e20] leading-[1.6]">
            We&apos;ve worked across hospitality, fintech, consumer, wellness, fashion, and more.{' '}
            Let&apos;s talk about what growth looks like for yours.
          </p>
        </div>

        <div className="flex flex-col gap-[8px] items-start md:items-center shrink-0 md:w-[183px]">
          <Link
            href="/contact"
            className="btn-cta flex items-center gap-[12px] bg-[#1e1e20] text-white px-[24px] py-[12px] lg:py-[20px] rounded-[50px] text-[16px] lg:text-[24px] font-medium uppercase whitespace-nowrap"
          >
            Book a Call
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-[12px] text-[#1e1e20] text-center tracking-wide">
            hello@schoolhouselane.co
          </p>
        </div>
      </section>
    </>
  )
}
