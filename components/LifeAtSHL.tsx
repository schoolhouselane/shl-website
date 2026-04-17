'use client'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'

export default function LifeAtSHL() {
  const [ref, inView] = useInView(0.2)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[32px] md:pt-[80px] pb-0 transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[40px]">

        {/* Left — heading */}
        <h2 className="font-black text-[28px] md:text-[32px] lg:text-[64px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-1.4px] shrink-0">
          Life at<br className="hidden md:block" />Schoolhouse Lane
        </h2>

        {/* Right — body + CTA */}
        <div className="flex flex-col gap-[20px] md:items-end md:text-right md:max-w-[438px]">
          <p className="font-normal text-[16px] text-[#1e1e20] leading-[1.7]">
            The work is serious. The environment doesn&apos;t have to be.<br />
            Behind every deliverable is a team that genuinely loves what they&apos;re building.
          </p>
          <Link
            href="/jobs"
            className="btn-cta inline-flex items-center gap-[12px] border border-[#1e1e20] text-[#1e1e20] px-[12px] py-[8px] md:px-[24px] md:py-[12px] rounded-[50px] text-[16px] font-medium uppercase w-fit"
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
