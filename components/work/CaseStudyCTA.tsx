import Link from 'next/link'

export default function CaseStudyCTA({ accentColor = '#d8c09c' }: { accentColor?: string }) {
  return (
    <section className="bg-[#1e1e20] px-5 md:px-[90px] py-[60px] md:py-[80px] flex flex-col md:flex-row md:items-end md:justify-between gap-[40px]">
      <h2 className="font-black text-[36px] sm:text-[52px] md:text-[64px] uppercase text-white leading-[0.92] tracking-[-1.5px] max-w-[700px]">
        Loved this?<br />
        <span style={{ color: accentColor }}>Let&apos;s apply it</span><br />
        to your brand.
      </h2>
      <div className="flex flex-col gap-[8px] items-start md:items-end shrink-0">
        <Link
          href="/contact"
          className="btn-cta flex items-center gap-[12px] bg-white text-[#1e1e20] px-[28px] py-[18px] rounded-[50px] text-[16px] md:text-[20px] font-normal uppercase whitespace-nowrap hover:bg-[#f5f3ef] transition-colors w-fit"
        >
          Book a Call
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <p className="text-[13px] text-white/40 tracking-wide font-normal">hello@schoolhouselane.co</p>
      </div>
    </section>
  )
}
