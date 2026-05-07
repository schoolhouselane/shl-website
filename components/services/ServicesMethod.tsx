'use client'
import { useInView } from '@/hooks/useInView'

const steps = [
  {
    title: 'Diagnose',
    desc: 'Unearth latent potential and identify emotional triggers.',
  },
  {
    title: 'Strategise',
    desc: 'Bridge the gap between imagination and business success.',
  },
  {
    title: 'Create',
    desc: 'Build ecosystems where every touchpoint accelerates your goals.',
  },
  {
    title: 'Launch',
    desc: 'Deploy brand as a primary lever for market activation.',
  },
  {
    title: 'Compound',
    desc: 'Ensure your most intangible asset becomes your most measurable advantage.',
  },
]

export default function ServicesMethod() {
  const [headerRef, headerInView] = useInView(0.2)
  const [stepsRef, stepsInView] = useInView(0.1)

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[200px] flex flex-col gap-[40px] lg:gap-[80px]">

      {/* Header */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 transition-all duration-700"
        style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <h2 className="font-black text-[22px] md:text-[32px] lg:text-[64px] uppercase text-[#1e1e20] leading-tight lg:max-w-[662px]">
          The Schoolhouse Lane Method
        </h2>
        <p className="text-[14px] md:text-[16px] lg:text-[20px] text-black leading-[1.8] md:text-right md:max-w-[318px] lg:max-w-[555px]">
          Every project runs through the same five-stage method. The process is what makes the results repeatable.
        </p>
      </div>

      {/* Steps */}
      <div ref={stepsRef as React.RefObject<HTMLDivElement>} className="flex overflow-x-auto scrollbar-hide md:overflow-visible md:grid md:grid-cols-5">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`flex-shrink-0 w-[200px] md:w-auto flex flex-col gap-[12px] items-start justify-start px-[20px] md:px-[24px] lg:px-[40px] py-[32px] md:py-[12px] lg:py-[60px] transition-all duration-700${i < steps.length - 1 ? ' border-r border-[#1e1e20]' : ''}`}
            style={{
              opacity: stepsInView ? 1 : 0,
              transform: stepsInView ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: `${i * 80}ms`,
            }}
          >
            <p className="font-medium md:font-bold text-[16px] md:text-[18px] lg:text-[22px] text-[#1e1e20] leading-tight">{step.title}</p>
            <p className="text-[13px] md:text-[16px] text-[#1e1e20] leading-[1.5]">{step.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
