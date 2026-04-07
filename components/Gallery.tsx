import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  return (
    <section className="bg-[#f5f3ef] overflow-hidden">
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

      {/* Gallery images — grid on mobile, absolute layout on large screens */}
      <div className="mt-6 md:mt-8 px-5 md:px-[90px]">
        {/* Mobile / tablet: simple 2-column grid */}
        <div className="grid grid-cols-2 gap-2 lg:hidden">
          <div className="relative col-span-2 h-[240px] sm:h-[320px]">
            <Image src="https://www.figma.com/api/mcp/asset/7501dd6c-ad49-4198-ac66-fb97072fff07" alt="Gallery 1" fill className="object-cover rounded-sm" />
          </div>
          <div className="relative h-[160px] sm:h-[200px]">
            <Image src="https://www.figma.com/api/mcp/asset/f170589f-e437-44da-8de3-b6499728cc2e" alt="Gallery 2" fill className="object-cover rounded-sm" />
          </div>
          <div className="relative h-[160px] sm:h-[200px]">
            <Image src="https://www.figma.com/api/mcp/asset/d8e6ba02-b591-4f8b-a75e-c5800a32d48c" alt="Gallery 3" fill className="object-cover rounded-sm" />
          </div>
          <div className="relative col-span-2 h-[200px] sm:h-[260px]">
            <Image src="https://www.figma.com/api/mcp/asset/4ea14228-0675-4029-8f01-ed48ac11712e" alt="Gallery 4" fill className="object-cover rounded-sm" />
          </div>
        </div>

        {/* Desktop: original absolute layout */}
        <div className="relative h-[520px] hidden lg:block">
          <div className="absolute left-0 top-0 w-[604px] h-[475px]">
            <Image src="https://www.figma.com/api/mcp/asset/7501dd6c-ad49-4198-ac66-fb97072fff07" alt="Gallery 1" fill className="object-cover rounded-sm" />
          </div>
          <div className="absolute left-[553px] top-[142px] w-[553px] h-[149px]">
            <Image src="https://www.figma.com/api/mcp/asset/f170589f-e437-44da-8de3-b6499728cc2e" alt="Gallery 2" fill className="object-cover rounded-sm" />
          </div>
          <div className="absolute right-[221px] top-[291px] w-[308px] h-[306px]">
            <Image src="https://www.figma.com/api/mcp/asset/d8e6ba02-b591-4f8b-a75e-c5800a32d48c" alt="Gallery 3" fill className="object-cover rounded-sm" />
          </div>
          <div className="absolute right-0 top-[-242px] w-[221px] h-[680px]">
            <Image src="https://www.figma.com/api/mcp/asset/4ea14228-0675-4029-8f01-ed48ac11712e" alt="Gallery 4" fill className="object-cover rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
