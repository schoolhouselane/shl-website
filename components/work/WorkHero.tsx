'use client'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

export default function WorkHero() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] pt-[140px] md:pt-[180px] pb-[60px] md:pb-[120px]">

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 700ms, transform 700ms',
        }}
      >

        {/* Heading — "Work That" + image on same line, bottom-aligned */}
        <h1 className="font-black text-[56px] sm:text-[80px] md:text-[100px] lg:text-[115px] xl:text-[128px] uppercase text-[#1e1e20] tracking-[-2px] leading-none">

          {/* Line 1: "Work That" + image, share bottom edge */}
          <span className="flex items-end">
            <span className="whitespace-nowrap leading-none">Work That</span>
            <span
              className="hidden lg:block relative overflow-hidden shrink-0 ml-auto"
              style={{
                width: 'clamp(300px, 36.3vw, 523px)',
                height: 'clamp(160px, 16.7vw, 241px)',
              }}
            >
              <Image
                src="/images/work-hero-fashion.png"
                alt="SHL editorial work"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 380px, 523px"
                priority
              />
            </span>
          </span>

          {/* Line 2 */}
          <span className="block leading-none">Delivered Growth</span>
        </h1>

        {/* Body text */}
        <p
          className="mt-[24px] md:mt-[30px] text-[16px] md:text-[20px] text-[#111] leading-[1.6] max-w-[900px]"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 700ms 150ms',
          }}
        >
          Selected projects where creativity met commerce and revenue followed.{' '}
          Every case study is chosen because it pushed something forward — a category, a business, a culture.
        </p>

      </div>

    </section>
  )
}
