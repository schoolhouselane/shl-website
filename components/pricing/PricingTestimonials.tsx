'use client'
import Image from 'next/image'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Adam Ferris',
    company: 'DataDirect',
    photo: '/images/pricing/person-adam.webp',
    quote: '"Within 60 days of the rebrand, our close rate on enterprise deals went from 28% to 47%. Turns out our old brand was doing the selling against us."',
  },
  {
    name: 'Tim Whyte',
    company: 'Vivo Hotels',
    photo: '/images/pricing/person-tim.webp',
    quote: '"Schoolhouse Lane gave us the brand that finally matched the quality of our product. We raised our Series A three months after the rebrand — investors noticed immediately."',
  },
  {
    name: 'Alan Bates',
    company: 'CEO at Hubbcat',
    photo: '/images/pricing/person-alan.webp',
    quote: '"Working with Schoolhouse Lane transformed how we present ourselves to the market. Our brand finally reflects the level of expertise and innovation we deliver. The impact was immediate and measurable."',
  },
]

export default function PricingTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 480 : -480, behavior: 'smooth' })
  }

  return (
    <section className="bg-[#1e1e20] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px]">
      <div className="flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px] items-end">

        {/* Heading */}
        <h2 className="w-full font-black text-[22px] md:text-[40px] lg:text-[56px] uppercase text-white leading-[1.07] tracking-tight">
          What happens when<br />your brand gets serious.
        </h2>

        {/* Cards — scrollable on mobile */}
        <div ref={scrollRef} className="w-full flex gap-[16px] md:gap-[20px] lg:gap-[52px] overflow-x-auto scrollbar-hide">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-[16px] md:rounded-[20px] px-[20px] py-[20px] md:px-[24px] md:py-[22px] flex flex-col gap-[16px] md:gap-[12px] shrink-0 w-[280px] md:flex-1 md:w-auto"
            >
              <div className="flex items-center gap-[14px]">
                <div className="relative w-[64px] h-[64px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] shrink-0">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover object-center rounded-full"
                    sizes="90px"
                  />
                </div>
                <div>
                  <p className="font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#1e1e20]">{t.name}</p>
                  <p className="text-[13px] md:text-[14px] lg:text-[16px] text-[#1e1e20] italic font-extralight">{t.company}</p>
                </div>
              </div>
              <p className="font-bold italic text-[14px] md:text-[16px] lg:text-[24px] text-[#1e1e20] leading-snug">
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        {/* Nav arrows */}
        <div className="flex gap-[30px] items-center">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous"
            className="flex items-center justify-center w-[44px] h-[44px] lg:w-[55px] lg:h-[55px] rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next"
            className="flex items-center justify-center w-[44px] h-[44px] lg:w-[55px] lg:h-[55px] rounded-full bg-white hover:bg-white/90 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
