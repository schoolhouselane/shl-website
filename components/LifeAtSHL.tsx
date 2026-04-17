'use client'
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

        {/* Right — body */}
        <div className="flex flex-col gap-[20px] md:items-end md:text-right md:max-w-[438px]">
          <p className="font-normal text-[16px] text-[#1e1e20] leading-[1.7]">
            The work is serious. The environment doesn&apos;t have to be.<br />
            Behind every deliverable is a team that genuinely loves what they&apos;re building.
          </p>
        </div>

      </div>
    </section>
  )
}
