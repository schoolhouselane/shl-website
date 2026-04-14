'use client'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

export default function WorkHero() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] pt-[140px] md:pt-[180px] pb-[40px] md:pb-[60px]">

      {/* Headline row with floating image */}
      <div className="relative">
        <h1
          ref={ref as React.RefObject<HTMLHeadingElement>}
          className="font-black text-[56px] sm:text-[80px] md:text-[100px] lg:text-[128px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-2px] transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          Work That<br />Delivered Growth
        </h1>

        {/* Floating image — overlaps headline, top-right */}
        <div
          className="hidden lg:block absolute top-[-60px] right-0 w-[420px] xl:w-[523px] h-[200px] xl:h-[241px] overflow-hidden transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(-20px)',
            transitionDelay: '200ms',
          }}
        >
          <Image
            src="/images/work-1.png"
            alt="Work preview"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Description */}
      <div
        className="mt-[20px] md:mt-[30px] max-w-[700px] transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '150ms',
        }}
      >
        <p className="text-[16px] md:text-[20px] text-[#111] leading-[1.6]">
          Selected projects where creativity met commerce and revenue followed.{' '}
          Every case study is chosen because it pushed something forward — a category, a business, a culture.
        </p>
      </div>

    </section>
  )
}
