'use client'
import { useInView } from '@/hooks/useInView'

function ArrowUpRight({ size = 16 }: { size?: number }) {
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

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-[24px] md:gap-[30px] lg:gap-[30px] ${className}`}>
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[4px] text-[#1e1e20] hover:opacity-60 transition-opacity w-fit"
        >
          <span className="font-normal text-[20px] md:text-[16px] lg:text-[24px] leading-none">{s.label}</span>
          <ArrowUpRight size={16} />
        </a>
      ))}
    </div>
  )
}

export default function JobsDropNote() {
  const [ref, inView] = useInView(0.05)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-[24px] lg:px-[90px] py-[60px] md:py-[32px] lg:py-[120px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div className="flex flex-col lg:flex-row lg:gap-[117px] lg:items-end">

        {/* Left column — heading always visible; socials desktop-only */}
        <div className="lg:flex-1 flex flex-col lg:gap-[60px]">
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-black text-[32px] lg:text-[64px] uppercase text-[#1e1e20] leading-none tracking-[-1.5px]">
              Don&apos;t See Your Role?{' '}
              <span className="block">Drop Us a Note.</span>
            </h2>
            <p className="font-normal text-[16px] lg:text-[20px] text-[#111] leading-[1.75]">
              We&apos;re always open to hearing from exceptional people — even when we&apos;re not actively hiring.
              If you&apos;re obsessed with great work and what it can do for a business, we want to hear from you.
            </p>
          </div>
          <SocialLinks className="hidden lg:flex" />
        </div>

        {/* Right column — form + emails + socials (mobile/tablet) */}
        <div className="flex flex-col gap-[28px] mt-[48px] md:mt-[60px] lg:mt-0 lg:w-[504px] shrink-0">

          {/* Form + emails: stacked on mobile, side-by-side on tablet, stacked on desktop */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between lg:flex-col gap-[40px] md:gap-[20px] lg:gap-[30px]">

            {/* Input + or-divider */}
            <div className="flex flex-col gap-[20px] md:flex-1 lg:flex-none lg:w-full">
              <div className="relative flex items-center border border-[#1e1e20] rounded-full px-[24px] py-[8px] h-[44px]">
                <input
                  type="text"
                  placeholder="Get in Touch"
                  className="flex-1 bg-transparent font-medium text-[12px] uppercase tracking-[1.2px] text-[#1e1e20] placeholder:text-[#1e1e20]/60 outline-none min-w-0"
                />
                <a
                  href="mailto:careers@schoolhouselane.co"
                  className="absolute right-0 top-0 bottom-0 bg-[#1e1e20] flex items-center gap-[12px] px-[24px] rounded-full text-white font-medium text-[14px] md:text-[16px] uppercase whitespace-nowrap hover:opacity-80 transition-opacity"
                >
                  Send application
                  <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex items-center gap-[9px]">
                <div className="flex-1 h-px bg-[#d0d0d0]" />
                <p className="font-normal text-[12px] text-[#979797] shrink-0">or email us directly</p>
              </div>
            </div>

            {/* Email contacts */}
            <div className="flex flex-col gap-[12px] md:w-[44%] md:shrink-0 lg:w-full lg:shrink lg:gap-[30px]">
              <div className="flex flex-col gap-[6px] lg:gap-[11px]">
                <div className="border-b border-[#1e1e20] py-[10px]">
                  <a href="mailto:hello@schoolhouselane.co" className="font-extrabold text-[16px] lg:text-[24px] text-[#1e1e20] lowercase hover:opacity-70 transition-opacity">
                    hello@schoolhouselane.co
                  </a>
                </div>
                <p className="font-normal text-[12px] lg:text-[16px] text-[#111]">
                  For new business, project briefs, and general questions
                </p>
              </div>
              <div className="flex flex-col gap-[6px] lg:gap-[11px]">
                <div className="border-b border-[#1e1e20] py-[10px]">
                  <a href="mailto:careers@schoolhouselane.co" className="font-black text-[16px] lg:text-[24px] text-[#1e1e20] lowercase hover:opacity-70 transition-opacity">
                    careers@schoolhouselane.co
                  </a>
                </div>
                <p className="font-normal text-[12px] lg:text-[16px] text-[#111]">
                  Attach your portfolio and a one-paragraph cover note. No generic applications.
                </p>
              </div>
            </div>
          </div>

          {/* Socials — mobile + tablet only */}
          <SocialLinks className="lg:hidden" />
        </div>

      </div>
    </section>
  )
}
