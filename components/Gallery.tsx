import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] pb-[90px] md:pb-[180px]">
      <div className="relative w-full">
        <Image
          src="/images/gallery-hero.png"
          alt="Gallery & Videos"
          width={1729}
          height={1092}
          className="w-full h-auto rounded-sm"
        />

        {/* Gradient at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-sm" />

        {/* Top-right label */}
        <p className="absolute top-5 right-5 md:top-8 md:right-8 text-white/80 text-[12px] md:text-[16px] uppercase tracking-widest">
          Gallery &amp; Videos
        </p>

        {/* Bottom content */}
        <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 right-5 md:right-10 flex items-end justify-between gap-4">
          <div>
            <p className="font-bold text-[40px] sm:text-[70px] md:text-[100px] lg:text-[140px] leading-[0.88] tracking-[-2px] md:tracking-[-4px] uppercase text-white select-none">
              Gallery
            </p>
            <p className="font-bold text-[40px] sm:text-[70px] md:text-[100px] lg:text-[140px] leading-[0.88] tracking-[-2px] md:tracking-[-4px] uppercase text-white select-none">
              <span className="text-[18px] sm:text-[32px] md:text-[44px] lg:text-[60px]">&amp;</span> Videos
            </p>
            <p className="mt-3 text-white/80 text-[13px] md:text-[16px] max-w-[420px]">
              Loved what you saw? Let&apos;s create something like this for you.
            </p>
          </div>

          <Link
            href="/work"
            className="flex items-center justify-center bg-white rounded-full w-[48px] h-[48px] md:w-[55px] md:h-[55px] shrink-0 hover:scale-110 transition-transform"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
