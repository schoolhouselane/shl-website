import Image from 'next/image'
import Link from 'next/link'

// Each item: src, width (px), bg colour if needed, object position
const strip = [
  { src: '/images/strip-01.png', w: 356, bg: '#5a4734' },
  { src: '/images/strip-02.png', w: 320, bg: '#c24751' },
  { src: '/images/strip-03.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-04.png', w: 112 },
  { src: '/images/strip-05.png', w: 160 },
  { src: '/images/strip-06.png', w: 200 },
  { src: '/images/strip-07.png', w: 111 },
  { src: '/images/strip-08.png', w: 163, bg: '#bb936a' },
  { src: '/images/strip-09.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-10.png', w: 354 },
  { src: '/images/strip-11.png', w: 200 },
  { src: '/images/strip-12.png', w: 343, bg: '#04f9f4' },
  { src: '/images/strip-13.png', w: 342 },
  { src: '/images/strip-14.png', w: 204, bg: '#003f0c' },
  { src: '/images/strip-15.png', w: 356 },
  { src: '/images/strip-16.png', w: 356, bg: '#ffffff', contain: true },
  { src: '/images/strip-17.png', w: 160 },
  { src: '/images/strip-18.png', w: 160 },
  { src: '/images/strip-19.png', w: 200 },
  { src: '/images/strip-20.png', w: 158 },
  { src: '/images/strip-21.png', w: 117, bg: '#192c3b' },
  { src: '/images/strip-22.png', w: 200 },
  { src: '/images/strip-23.png', w: 178, bg: '#ee942e' },
  { src: '/images/strip-24.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-25.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-26.png', w: 200 },
  { src: '/images/strip-27.png', w: 200 },
  { src: '/images/strip-28.png', w: 277, bg: '#bb936a' },
  { src: '/images/strip-29.png', w: 200 },
  { src: '/images/strip-30.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-31.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-32.png', w: 116, bg: '#ffffff', contain: true },
]

export default function Gallery() {
  return (
    <section className="bg-[#f5f3ef] py-[90px] md:py-[120px]">

      {/* Header row */}
      <div className="px-5 md:px-[90px] flex justify-between items-center mb-6 md:mb-8">
        <p className="text-[16px] md:text-[20px] text-[#1e1e20] leading-[1.37]">
          Loved what you saw? Let&apos;s create something like this for you.
        </p>
        <Link
          href="/work"
          className="flex items-center justify-center bg-[#1e1e20] rounded-full w-[44px] h-[44px] md:w-[55px] md:h-[55px] hover:opacity-80 transition-opacity shrink-0"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </Link>
      </div>

      {/* Horizontal image strip */}
      <div className="flex gap-px overflow-x-auto scrollbar-hide h-[200px]">
        {strip.map((item, i) => (
          <div
            key={i}
            className="relative shrink-0 h-[200px] overflow-hidden"
            style={{ width: item.w, backgroundColor: item.bg ?? 'transparent' }}
          >
            <Image
              src={item.src}
              alt=""
              fill
              className={item.contain ? 'object-contain' : 'object-cover object-center'}
              sizes={`${item.w}px`}
            />
          </div>
        ))}
      </div>

    </section>
  )
}
