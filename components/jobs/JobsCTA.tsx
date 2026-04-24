'use client'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'

function ArrowRight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function JobsCTA() {
  const [ref, inView] = useInView(0.15)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#d7d7d7] px-4 md:px-6 lg:px-[90px] py-[48px] md:py-[60px] lg:py-[60px] flex flex-col md:flex-row md:items-end md:justify-between gap-[32px] md:gap-[40px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >

      {/* Left — heading + description */}
      <div className="flex flex-col gap-[16px] md:gap-[19px] lg:max-w-[875px]">
        <h2 className="font-black text-[36px] md:text-[48px] lg:text-[60px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-1.5px]">
          Think You Belong Here?
        </h2>
        <p className="font-normal text-[15px] md:text-[16px] text-[#1e1e20] leading-[1.6] max-w-[640px]">
          We hire for curiosity first. If you&apos;re obsessed with great work and what it can do for a business, the door is open.
        </p>
      </div>

      {/* Right — CTA button + email */}
      <div className="flex flex-col gap-[12px] shrink-0 md:items-end">
        <Link
          href="#open-roles"
          className="btn-cta bg-white flex items-center gap-[12px] justify-center px-[24px] py-[16px] md:py-[20px] rounded-full border border-white"
        >
          <span className="font-medium text-[18px] md:text-[20px] lg:text-[24px] text-black uppercase whitespace-nowrap">
            See all open roles
          </span>
          <ArrowRight size={22} />
        </Link>
        <p className="font-normal text-[14px] md:text-[16px] text-[#1e1e20] text-center tracking-[0.96px]">
          careers@schoolhouselane.co
        </p>
      </div>
    </section>
  )
}
