'use client'
import { useInView } from '@/hooks/useInView'

export default function JobsWhyWorkHere() {
  const [ref, inView] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[40px] md:py-[60px] lg:py-[60px] border-t border-[rgba(54,31,6,0.12)] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[24px] md:gap-[40px] lg:gap-[60px]">

        {/* Label */}
        <p className="font-black text-[16px] md:text-[18px] lg:text-[22px] uppercase text-[#1e1e20] shrink-0 whitespace-nowrap">
          Why Work Here
        </p>

        {/* Content */}
        <div className="flex flex-col gap-[20px] md:gap-[25px] lg:max-w-[1037px]">
          <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[48px] text-[#1e1e20] leading-[1.05]">
            We hire for curiosity first. If you&apos;re obsessed with great work and what it can do for a business, you&apos;ll fit right in.
          </h2>
          <p className="font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[#111] leading-[1.75]">
            Real creative freedom. Clients trust us enough to take genuine risks — and that trust flows directly to you. No juniors to manage. No layers between you and the work. Just the best briefs, the best clients, and a team that raises the bar every single day.
          </p>
        </div>
      </div>
    </section>
  )
}
