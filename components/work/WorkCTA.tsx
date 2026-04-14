import Link from 'next/link'

export default function WorkCTA() {
  return (
    <>
      {/* Dark CTA */}
      <section className="bg-[#1e1e20] px-5 md:px-[90px] py-[60px] md:py-[80px] flex flex-col md:flex-row md:items-end md:justify-between gap-[40px]">
        <h2 className="font-black text-[40px] sm:text-[52px] md:text-[60px] uppercase text-white leading-[0.95] tracking-[-1.2px]">
          Ready for Your<br />Own Growth<br />Story?
        </h2>
        <div className="flex flex-col gap-[8px] items-center shrink-0">
          <Link
            href="/contact"
            className="btn-cta flex items-center gap-[12px] bg-white text-[#1e1e20] px-[24px] py-[20px] rounded-[50px] text-[16px] md:text-[20px] lg:text-[24px] font-medium uppercase whitespace-nowrap hover:opacity-90 transition-opacity w-fit"
          >
            Let&apos;s talk
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-[14px] text-white/60 tracking-wide">For results like these!</p>
        </div>
      </section>

      {/* Grey industry section */}
      <section className="bg-[#d7d7d7] px-5 md:px-[90px] py-[60px] md:py-[80px] flex flex-col md:flex-row md:items-end md:justify-between gap-[40px]">
        <div className="flex flex-col gap-[16px] max-w-[875px]">
          <h2 className="font-black text-[36px] sm:text-[48px] md:text-[60px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-1.5px]">
            Not Seeing Your Industry?
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#1e1e20] leading-[1.6]">
            We&apos;ve worked across hospitality, fintech, consumer, wellness, fashion, and more.{' '}
            Let&apos;s talk about what growth looks like for yours.
          </p>
        </div>

        <div className="flex flex-col gap-[12px] items-center shrink-0">
          <Link
            href="/contact"
            className="btn-cta flex items-center gap-[12px] bg-white text-black px-[24px] py-[20px] rounded-[50px] text-[18px] md:text-[24px] font-medium uppercase whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            Book a Call
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-[14px] md:text-[16px] text-[#1e1e20] text-center tracking-wide">
            hello@schoolhouselane.co
          </p>
        </div>
      </section>
    </>
  )
}
