'use client'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import CalendlyButton from '@/components/CalendlyButton'

export default function WorkHero() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[80px] md:pt-[100px] lg:pt-[180px] pb-[40px] md:pb-[80px] lg:pb-[120px]">

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 700ms, transform 700ms',
        }}
      >

        {/* Heading — "Work That" + image on same line, bottom-aligned */}
        <h1 className="font-black text-[38px] sm:text-[70px] md:text-[92px] lg:text-[115px] xl:text-[128px] uppercase text-[#1e1e20] tracking-[-2px] leading-none">

          {/* Line 1: "Work That" + image, share bottom edge */}
          <span className="flex items-end">
            <span className="whitespace-nowrap leading-none">Work That</span>
            <span
              className="hidden md:block relative overflow-hidden shrink-0 ml-auto"
              style={{
                width: 'clamp(200px, 28vw, 523px)',
                height: 'clamp(88px, 11.5vw, 241px)',
              }}
            >
              <Image
                src="/images/work-hero.png"
                alt="SHL editorial work"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 200px, (max-width: 1280px) 300px, 523px"
                priority
              />
            </span>
          </span>

          {/* Line 2 */}
          <span className="block leading-none">Delivered Growth</span>
        </h1>

        {/* Body text */}
        <div
          className="mt-[24px] md:mt-[30px] flex flex-col gap-0"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 700ms 150ms',
          }}
        >
          <p className="text-[15px] md:text-[20px] text-[#111] leading-[1.6] max-w-[900px]">
            Selected projects where creativity met commerce and revenue followed.
          </p>
          <p className="text-[15px] md:text-[20px] text-[#111] leading-[1.6] max-w-[900px]">
            Every case study is chosen because it pushed something forward a category, a business, a culture.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="mt-[28px] md:mt-[32px] flex flex-wrap gap-[12px] md:gap-[20px] items-center"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 700ms 250ms',
          }}
        >
          <CalendlyButton className="btn-cta inline-flex items-center gap-[12px] border border-[#1e1e20] rounded-[50px] px-[20px] md:px-[24px] py-[10px] md:py-[12px] text-[14px] md:text-[16px] font-medium uppercase text-[#1e1e20]">
            Book a Demo
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </CalendlyButton>

          <a
            href="#work-grid"
            className="inline-flex items-center justify-center bg-[#1e1e20] rounded-[50px] px-[20px] md:px-[24px] py-[10px] md:py-[12px] h-[44px] md:h-[54px] text-[14px] md:text-[16px] font-medium uppercase text-white whitespace-nowrap"
          >
            See Our Work
          </a>
        </div>

      </div>

    </section>
  )
}
