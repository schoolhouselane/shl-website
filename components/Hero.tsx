import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[584px] overflow-hidden">
      <Image src="https://www.figma.com/api/mcp/asset/52ef2489-cfdd-41bc-99e7-2b06c7daca14" alt="Hero background" fill className="object-cover object-top" priority />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute bottom-10 md:bottom-[120px] left-5 md:left-[139px] flex flex-col gap-5 md:gap-[30px] max-w-[95vw] md:max-w-[698px] pr-5 md:pr-0">
        <div className="flex flex-col gap-1 text-white">
          <h1 className="font-black text-[36px] md:text-[64px] leading-[0.87] tracking-[-1px] md:tracking-[-1.28px] uppercase">
            Creative Commerce
          </h1>
          <p className="font-normal text-[18px] md:text-[36px] leading-tight mt-2">
            We exist at the intersection of creativity and revenue growth
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Link href="/contact" className="flex items-center gap-2 border border-white rounded-full px-4 md:px-6 py-2 text-white text-[13px] md:text-[16px] font-medium uppercase hover:bg-white hover:text-[#1e1e20] transition-colors">
            Let&apos;s Build Something Exceptional
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link href="/contact" className="flex items-center justify-center bg-white rounded-full px-5 py-2 text-[#1e1e20] text-[13px] md:text-[16px] font-medium uppercase hover:bg-[#f5f3ef] transition-colors">
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  )
}
