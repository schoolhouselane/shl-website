import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  return (
    <section className="bg-[#f5f3ef] overflow-hidden pt-0 pb-[90px] md:pb-[180px]">
      <div className="px-5 md:px-[90px]">
        <p className="text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20] text-right mb-2 md:mb-4">
          Loved what you saw? Let&apos;s create something like this for you.
        </p>
        <div className="relative">
          <p className="font-bold text-[80px] sm:text-[140px] md:text-[220px] lg:text-[352px] leading-[0.9] tracking-[-2px] md:tracking-[-7px] uppercase text-[#1e1e20] select-none">
            Gallery
          </p>
          <div className="absolute right-0 top-0">
            <Link href="/work" className="flex items-center justify-center bg-[#1e1e20] rounded-full w-[44px] h-[44px] md:w-[55px] md:h-[55px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </Link>
          </div>
        </div>
        <p className="font-bold text-[80px] sm:text-[140px] md:text-[220px] lg:text-[352px] leading-[0.9] tracking-[-2px] md:tracking-[-7px] uppercase text-[#1e1e20] select-none -mt-4 md:-mt-10">
          <span className="text-[36px] sm:text-[64px] md:text-[100px] lg:text-[158px]">&amp;</span> VIDEOS
        </p>
      </div>

      <div className="mt-6 md:mt-10 px-5 md:px-[90px]">
        <div className="relative w-full h-[300px] sm:h-[420px] md:h-[600px] lg:h-[720px] rounded-sm overflow-hidden">
          <Image
            src="/images/gallery-hero.png"
            alt="Gallery & Videos"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
