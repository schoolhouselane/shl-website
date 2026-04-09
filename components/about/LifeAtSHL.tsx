import Image from 'next/image'
import Link from 'next/link'

export default function LifeAtSHL() {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] py-[80px] md:py-[120px] flex flex-col gap-[40px] md:gap-[60px]">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <h2 className="font-black text-[36px] md:text-[56px] uppercase text-[#1e1e20] leading-tight max-w-[606px]">
          Life at<br />Schoolhouse Lane
        </h2>
        <div className="flex flex-col gap-[20px] lg:items-end lg:max-w-[544px]">
          <p className="text-[16px] md:text-[20px] text-[#1e1e20] leading-[1.7] lg:text-right">
            The work is serious. The environment doesn&apos;t have to be. We hire people who are brilliant at what they do and genuinely great to be around.
          </p>
          <Link
            href="/jobs"
            className="btn-cta inline-flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-[24px] py-[12px] text-[16px] font-medium uppercase text-[#1e1e20]"
          >
            We&apos;re Hiring
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      {/* Photo collage */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {/* Row 1 */}
        <div className="relative h-[220px] md:h-[460px] col-span-1 overflow-hidden rounded-sm">
          <Image
            src="https://www.figma.com/api/mcp/asset/b6fcdc27-e0d0-4b50-a1b2-d01ba0e8e3bc"
            alt="Life at SHL"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative h-[220px] md:h-[460px] col-span-1 md:col-span-2 overflow-hidden rounded-sm">
          <Image
            src="https://www.figma.com/api/mcp/asset/d4fcd78a-0e31-4e10-b80b-3fdb0b4e0b3b"
            alt="Life at SHL"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative h-[220px] md:h-[460px] col-span-1 overflow-hidden rounded-sm">
          <Image
            src="/images/people-2.png"
            alt="Life at SHL"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Row 2 */}
        <div className="relative h-[180px] md:h-[240px] col-span-1 overflow-hidden rounded-sm bg-[#181818]">
          <Image
            src="/images/work-3.png"
            alt="Life at SHL"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[180px] md:h-[240px] col-span-1 md:col-span-2 overflow-hidden rounded-sm">
          <Image
            src="/images/gallery-1.png"
            alt="Life at SHL"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[180px] md:h-[240px] col-span-1 overflow-hidden rounded-sm bg-[#1a1a1a]">
          <Image
            src="/images/gallery-2.png"
            alt="Life at SHL"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </section>
  )
}
