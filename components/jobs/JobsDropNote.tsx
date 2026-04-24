'use client'
import { useInView } from '@/hooks/useInView'

function ArrowUpRight({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/schoolhouse-lane' },
  { label: 'Behance', href: 'https://www.behance.net/schoolhouselane' },
  { label: 'Instagram', href: 'https://www.instagram.com/schoolhouselane' },
]

export default function JobsDropNote() {
  const [ref, inView] = useInView(0.05)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div className="flex flex-col lg:flex-row lg:gap-[117px] lg:items-end gap-[48px] md:gap-[60px]">

        {/* Left column */}
        <div className="flex flex-col gap-[40px] md:gap-[48px] lg:gap-[60px] lg:flex-1">
          {/* Heading + description */}
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-black text-[32px] md:text-[44px] lg:text-[64px] uppercase text-[#1e1e20] leading-none tracking-[-1.5px]">
              Don&apos;t See Your Role?{' '}
              <span className="block">Drop Us a Note.</span>
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[#111] leading-[1.75]">
              We&apos;re always open to hearing from exceptional people — even when we&apos;re not actively hiring.
              If you&apos;re obsessed with great work and what it can do for a business, we want to hear from you.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-[20px] md:gap-[24px] lg:gap-[30px]">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[4px] text-[#1e1e20] hover:opacity-60 transition-opacity w-fit"
              >
                <span className="font-normal text-[20px] md:text-[22px] lg:text-[24px] leading-none">{s.label}</span>
                <ArrowUpRight size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right column — form + emails */}
        <div className="flex flex-col gap-[30px] lg:w-[504px] shrink-0">

          {/* Input + send button */}
          <div className="flex flex-col gap-[20px]">
            {/* Input row */}
            <div className="relative flex items-center border border-[#1e1e20] rounded-full px-[24px] py-[8px]">
              <input
                type="text"
                placeholder="Get in Touch"
                className="flex-1 bg-transparent font-medium text-[12px] md:text-[14px] uppercase tracking-[1.2px] text-[#1e1e20] placeholder:text-[#1e1e20]/60 outline-none min-w-0"
              />
              {/* Pill button overlapping */}
              <a
                href="mailto:careers@schoolhouselane.co"
                className="absolute right-0 top-0 bottom-0 bg-[#1e1e20] flex items-center gap-[12px] px-[24px] rounded-full text-white font-medium text-[14px] md:text-[16px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                Send application
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Or divider */}
            <div className="flex items-center gap-[9px]">
              <div className="flex-1 h-px bg-[#d0d0d0]" />
              <p className="font-normal text-[16px] text-[#979797] shrink-0">or email us directly</p>
            </div>
          </div>

          {/* Email contacts */}
          <div className="flex flex-col gap-[30px]">
            {/* Hello email */}
            <div className="flex flex-col gap-[11px]">
              <div className="border-b border-[#1e1e20] py-[10px]">
                <a href="mailto:hello@schoolhouselane.co" className="font-extrabold text-[18px] md:text-[20px] lg:text-[24px] text-[#1e1e20] lowercase hover:opacity-70 transition-opacity">
                  hello@schoolhouselane.co
                </a>
              </div>
              <p className="font-normal text-[14px] md:text-[16px] text-[#111] leading-[1.75]">
                For new business, project briefs, and general questions
              </p>
            </div>

            {/* Careers email */}
            <div className="flex flex-col gap-[11px]">
              <div className="border-b border-[#1e1e20] py-[10px]">
                <a href="mailto:careers@schoolhouselane.co" className="font-black text-[18px] md:text-[20px] lg:text-[24px] text-[#1e1e20] lowercase hover:opacity-70 transition-opacity">
                  careers@schoolhouselane.co
                </a>
              </div>
              <p className="font-normal text-[14px] md:text-[16px] text-[#111] leading-[1.75]">
                Attach your portfolio and a one-paragraph cover note. No generic applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
