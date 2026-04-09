'use client'
import { useInView, useCountUp } from '@/hooks/useInView'

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [ref, inView] = useInView(0.3)

  // Parse numeric part and suffix
  const match = value.match(/^([£]?)(\d+)(.*)$/)
  const prefix = match ? match[1] : ''
  const num = match ? parseInt(match[2]) : 0
  const suffix = match ? match[3] : value

  const count = useCountUp(num, inView, 1600)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col items-center text-center w-[140px] md:w-[210px] transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <p className="font-black text-[48px] md:text-[62px] tracking-[-1.87px] text-[#3a3a3a] leading-none">
        {prefix}{inView ? count : 0}{suffix}
      </p>
      <p className="text-[10px] md:text-[12px] uppercase tracking-[1.4px] text-[#1e1e20] mt-1">
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
    { value: '99%', label: 'Client Retention' },
    { value: '6yr', label: 'In Market' },
    { value: '5★', label: 'Average Client Review' },
  ]

  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] pt-[80px] pb-[120px] flex flex-col gap-[40px]">

      {/* Headline */}
      <h2
        ref={sectionRef as React.RefObject<HTMLHeadingElement>}
        className="font-black text-[40px] md:text-[64px] uppercase text-[#111] leading-tight transition-all duration-700"
        style={{
          opacity: sectionInView ? 1 : 0,
          transform: sectionInView ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        Fulfillment Through Discovery.
      </h2>

      {/* Body + pull quote */}
      <div
        className="flex flex-col gap-[25px] max-w-[852px] transition-all duration-700"
        style={{
          opacity: sectionInView ? 1 : 0,
          transform: sectionInView ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '150ms',
        }}
      >
        <p className="text-[16px] md:text-[20px] text-[#1e1e20] leading-[1.8]">
          We are a human agency with an altruistic view of the world. We believe that business, done right, is one of the most powerful forces for good on earth. Our job is to make the brands that share that belief impossible to ignore.
        </p>
        <div className="flex items-start gap-[12px]">
          <div className="w-[3px] h-6 bg-[#111] shrink-0 mt-1" />
          <p className="font-bold text-[16px] md:text-[20px] text-[#1e1e20] leading-[1.35]">
            &ldquo;We exist at the intersection of creativity and revenue growth.&rdquo;
          </p>
        </div>
      </div>

      {/* Stats */}
      <div ref={statsRef as React.RefObject<HTMLDivElement>} className="flex flex-wrap gap-x-[30px] md:gap-x-[60px] gap-y-[40px]">
        {stats.map((s, i) => (
          <StatItem key={s.label} value={s.value} label={s.label} delay={i * 100} />
        ))}
      </div>

    </section>
  )
}
