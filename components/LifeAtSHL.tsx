import Link from 'next/link'

export default function LifeAtSHL() {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] pt-[60px] md:pt-[100px] pb-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[40px] md:gap-[60px]">

        {/* Left — heading */}
        <h2 className="font-['Inter'] font-black text-[48px] sm:text-[56px] md:text-[64px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-1.4px] shrink-0">
          Life at<br />Schoolhouse Lane
        </h2>

        {/* Right — body + CTA */}
        <div className="flex flex-col gap-[20px] md:items-end md:text-right max-w-[438px]">
          <p className="font-['Inter'] font-normal text-[16px] text-[#1e1e20] leading-[1.7]">
            The work is serious. The environment doesn&apos;t have to be.<br />
            Behind every deliverable is a team that genuinely loves what they&apos;re building.
          </p>
          <Link
            href="/careers"
            className="flex items-center gap-[12px] border border-[#1e1e20] text-[#1e1e20] px-[24px] py-[8px] rounded-[50px] text-[16px] font-medium uppercase w-fit hover:bg-[#1e1e20] hover:text-white transition-colors"
          >
            We&apos;re Hiring
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
