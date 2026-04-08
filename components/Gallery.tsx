import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  return (
    <section className="bg-[#f5f3ef] overflow-hidden relative pt-[60px] md:pt-[120px] pb-0">

      {/* Top-right: arrow button + text */}
      <div className="flex flex-col gap-[12px] items-end px-5 md:px-[90px] mb-4 md:mb-0 md:absolute md:top-[120px] md:right-[90px] md:z-10">
        <Link
          href="/work"
          className="flex items-center justify-center bg-[#1e1e20] rounded-full w-[44px] h-[44px] md:w-[55px] md:h-[55px] hover:opacity-80 transition-opacity rotate-45"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </Link>
        <p className="text-[14px] md:text-[20px] text-[#1e1e20] text-right leading-[1.37] max-w-[320px]">
          Loved what you saw? Let&apos;s create something like this for you.
        </p>
      </div>

      {/* Big background text */}
      <div className="px-5 md:px-[90px] select-none pointer-events-none">
        <p className="font-bold text-[22vw] md:text-[22vw] leading-[0.88] tracking-[-0.02em] uppercase text-[#1e1e20] whitespace-nowrap overflow-hidden">
          Gallery
        </p>
        <p className="font-bold text-[22vw] md:text-[22vw] leading-[0.88] tracking-[-0.02em] uppercase text-[#1e1e20] whitespace-nowrap overflow-hidden -mt-[0.5vw]">
          <span className="text-[9vw]">&amp;</span> Videos
        </p>
      </div>

      {/* Full-bleed image overlapping the text */}
      <div
        className="relative w-full -mt-[12vw] md:-mt-[14vw] z-10"
        style={{ aspectRatio: '1728/1092' }}
      >
        <Image
          src="/images/gallery-hero.png"
          alt="Gallery & Videos"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
