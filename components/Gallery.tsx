import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] pb-[90px] md:pb-[180px]">
      <div className="relative w-full h-[300px] sm:h-[460px] md:h-[620px] lg:h-[780px] rounded-sm overflow-hidden">
        <Image
          src="/images/gallery-hero.png"
          alt="Gallery & Videos"
          fill
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Top label */}
        <p className="absolute top-5 right-5 md:top-8 md:right-8 text-white/80 text-[13px] md:text-[16px] uppercase tracking-widest">
          Gallery &amp; Videos
        </p>

        {/* Bottom content */}
        <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 right-5 md:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-bold text-[28px] sm:text-[48px] md:text-[64px] leading-none tracking-[-1px] uppercase text-white">
              Gallery
            </p>
            <p className="font-bold text-[28px] sm:text-[48px] md:text-[64px] leading-none tracking-[-1px] uppercase text-white">
              &amp; Videos
            </p>
            <p className="mt-2 text-white/80 text-[13px] md:text-[16px] max-w-[400px]">
              Loved what you saw? Let&apos;s create something like this for you.
            </p>
          </div>
          <Link
            href="/work"
            className="flex items-center justify-center bg-white rounded-full w-[48px] h-[48px] md:w-[55px] md:h-[55px] shrink-0"
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
