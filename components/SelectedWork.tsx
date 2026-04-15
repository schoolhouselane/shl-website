import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/work-data'

// Match the same 4 projects shown in WorkGrid
const slugs = ['datadirect', 'vivo-hotels', 'shelby', 'real-map-wipes']
const works = slugs.map(s => projects.find(p => p.slug === s)!).filter(Boolean)

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ArrowUpRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function SelectedWork() {
  return (
    <section className="px-5 md:px-[90px] pt-[60px] pb-[80px] md:pb-[120px] bg-[#f5f3ef]">

      {/* Header */}
      <div className="mb-8 md:mb-10 flex flex-col gap-[20px]">
        <h2 className="font-black text-[36px] md:text-[64px] leading-[0.9] tracking-[-1px] md:tracking-[-1.28px] uppercase text-[#1e1e20]">
          Selected Work<br />That Delivered Growth
        </h2>
        <p className="text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20] font-normal max-w-[608px]">
          Our work spans brand strategy, identity, campaigns, and digital. Each project is chosen because it pushed something—a category, a business, a culture—forward.
        </p>
        <div>
          <Link
            href="/work"
            className="btn-cta inline-flex items-center gap-[8px] border border-[#1e1e20] rounded-[50px] px-[24px] py-[12px] text-[14px] md:text-[16px] font-normal text-[#1e1e20]"
          >
            See More Work
            <ArrowRight />
          </Link>
        </div>
      </div>

      {/* 2×2 grid — same card style as WorkGrid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
        {works.map((work) => (
          <article key={work.id} className="border border-black flex flex-col group">
            <div className="relative w-full h-[240px] sm:h-[300px] md:h-[371px] overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-[12px] px-[24px] md:px-[40px] py-[20px] md:py-[25px]">
              <div className="flex items-center justify-between gap-[12px]">
                <p className="text-[11px] md:text-[12px] text-[#777] uppercase tracking-wide leading-normal font-normal">
                  {work.tags.join(' — ')}
                </p>
                <Link
                  href={`/work/${work.slug}`}
                  className="flex items-center justify-center bg-black rounded-full w-[44px] h-[44px] md:w-[55px] md:h-[55px] p-[14px] md:p-[16px] shrink-0 text-white hover:bg-[#333] transition-colors duration-200"
                  aria-label={`View ${work.title}`}
                >
                  <ArrowUpRight />
                </Link>
              </div>
              <h3 className="font-black text-[18px] md:text-[24px] uppercase text-[#1e1e20] leading-tight">
                {work.title}
              </h3>
              <p className="text-[14px] md:text-[16px] text-[#1e1e20] leading-[1.714] font-normal">
                {work.description}
              </p>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}
