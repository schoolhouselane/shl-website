'use client'
import { useInView, useCountUp } from '@/hooks/useInView'

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [ref, inView] = useInView(0.3)

  const match = value.match(/^([£]?)(\d+)(.*)$/)
  const prefix = match ? match[1] : ''
  const num = match ? parseInt(match[2]) : 0
  const suffix = match ? match[3] : value

  const count = useCountUp(num, inView, 1600)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col border-b border-[#1e1e20] lg:border-b-0 pb-[4px] lg:pb-0 px-[16px] lg:px-0 w-[calc(50%-10px)] md:w-auto md:flex-1 lg:flex-none lg:w-[210px] transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <p className="font-extrabold text-[36px] md:text-[52px] lg:text-[62px] tracking-[-1.87px] text-[#1e1e20] lg:text-[#3a3a3a] leading-none">
        {prefix}{inView ? count : 0}{suffix}
      </p>
      <p className="text-[12px] uppercase text-[#1e1e20] font-light mt-1">
        {label}
      </p>
    </div>
  )
}

export default function Discovery() {
  const [sectionRef, sectionInView] = useInView(0.1)
  const [statsRef, statsInView] = useInView(0.1)

  const stats = [
    { value: '79+', label: 'Brands Transformed' },
    { value: '6YR', label: 'Average Partnership' },
    { value: '5★', label: 'Average Client Review' },
    { value: '99%', label: 'Client Retention' },
  ]

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[40px] md:py-[80px] lg:pt-[80px] lg:pb-[120px] flex flex-col gap-[22px] md:gap-[32px] lg:gap-[40px]">

      {/* Headline */}
      <h2
        ref={sectionRef as React.RefObject<HTMLHeadingElement>}
        className="font-black text-[28px] md:text-[32px] lg:text-[64px] uppercase text-[#111] leading-tight transition-all duration-700"
        style={{
          opacity: sectionInView ? 1 : 0,
          transform: sectionInView ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        Fulfillment Through Discovery.
      </h2>

      {/* Body + pull quote */}
      <div
        className="flex flex-col gap-[22px] max-w-[852px] transition-all duration-700"
        style={{
          opacity: sectionInView ? 1 : 0,
          transform: sectionInView ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '150ms',
        }}
      >
        <p className="text-[16px] lg:text-[20px] text-[#1e1e20] leading-[1.8]">
          We are a human agency with an altruistic view of the world. In an era of algorithmic noise, we prioritise the emotional, the meaningful, and the real.
        </p>
        <div className="flex items-start gap-[8px]">
          <div className="w-[3px] h-6 bg-[#111] shrink-0 mt-1" />
          <p className="font-bold text-[16px] lg:text-[20px] text-[#1e1e20] leading-[1.35]">
            &ldquo;We exist at the intersection of creativity and revenue growth.&rdquo;
          </p>
        </div>
      </div>

      {/* Stats */}
      <div
        ref={statsRef as React.RefObject<HTMLDivElement>}
        className="flex flex-wrap gap-x-[20px] gap-y-[20px] md:flex-nowrap md:gap-x-0 md:gap-y-0 lg:flex-wrap lg:gap-x-[60px] lg:gap-y-[30px]"
      >
        {stats.map((s, i) => (
          <StatItem key={s.label} value={s.value} label={s.label} delay={i * 100} />
        ))}
      </div>

    </section>
  )
}
