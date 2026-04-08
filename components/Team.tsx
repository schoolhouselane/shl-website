import Image from 'next/image'
import Link from 'next/link'

const teamImages = [
  '/images/people-1.png',
  '/images/people-2.png',
  '/images/people-3.png',
  '/images/people-4.png',
  '/images/people-5.png',
  '/images/people-6.png',
  '/images/people-7.png',
  '/images/people-8.png',
  '/images/people-9.png',
]

export default function Team() {
  return (
    <section className="bg-[#f5f3ef] py-[90px] md:py-[180px]">
      <h2 className="font-black text-[36px] md:text-[64px] leading-[0.9] tracking-[-1px] md:tracking-[-1.28px] uppercase text-[#1e1e20] text-right px-5 md:px-[90px] mb-8">
        People behind everything
      </h2>

      {/* Scrollable strip on mobile, full width on desktop */}
      <div className="flex overflow-x-auto gap-px scrollbar-hide">
        {teamImages.map((src, i) => (
          <div key={i} className="relative w-[140px] h-[420px] md:w-[calc((100vw)/9)] md:h-[680px] shrink-0">
            <Image src={src} alt={`Team member ${i + 1}`} fill className="object-cover object-top" />
          </div>
        ))}
      </div>

      <div className="px-5 md:px-[90px] mt-8 flex flex-col gap-5 max-w-[535px]">
        <p className="text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20]">
          A small, senior team of strategists, creatives, and brand architects. We bring deep expertise and genuine curiosity to every brief.
        </p>
        <Link href="/jobs" className="inline-flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-5 py-2 text-[14px] md:text-[16px] font-medium uppercase hover:bg-[#1e1e20] hover:text-white transition-colors">
          See Open Roles
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
