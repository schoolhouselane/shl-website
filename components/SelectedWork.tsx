'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import { projects } from '@/lib/work-data'

const slugs = ['datadirect', 'vivo-hotels', 'shelby', 'real-map-wipes']
const works = slugs.map(s => projects.find(p => p.slug === s)!).filter(Boolean)

function ArrowUpRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function SelectedWork() {
  const [headerRef, headerInView] = useInView(0.2)
  const [gridRef, gridInView] = useInView(0.1)

  return (
    <section className="bg-[#f5f3ef] pt-[32px] md:pt-[40px] lg:pt-[100px] pb-[40px] md:pb-[60px] lg:pb-[120px]">

      {/* Header */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="px-4 md:px-6 lg:px-[90px] mb-8 md:mb-10 lg:mb-[60px] flex flex-col gap-[20px] transition-all duration-700"
        style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <h2 className="font-black text-[24px] md:text-[32px] lg:text-[64px] leading-[0.9] tracking-[-0.5px] md:tracking-[-0.8px] lg:tracking-[-1.28px] uppercase text-[#1e1e20]">
          Selected Work<br />That Delivered Growth
        </h2>
        <p className="text-[16px] leading-[1.37] text-[#1e1e20] font-normal max-w-[608px]">
          Our work spans brand strategy, identity, campaigns, and digital. Each project is chosen because it pushed something — a category, a business, a culture — forward.
        </p>
        <Link
          href="/work"
          className="btn-cta self-start inline-flex items-center gap-[6px] border border-[#1e1e20] rounded-[50px] px-[12px] py-[8px] md:px-[24px] md:py-[12px] text-[16px] font-medium uppercase text-[#1e1e20]"
        >
          SEE MORE WORK
          <ArrowRight />
        </Link>
      </div>

      {/* 2×2 work cards grid */}
      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="px-4 md:px-6 lg:px-[90px] grid grid-cols-1 md:grid-cols-2 gap-[20px]"
      >
        {works.map((work, i) => (
          <article
            key={work.id}
            className={`border border-black flex flex-col group transition-all duration-700${i >= 2 ? ' hidden md:flex' : ''}`}
            style={{
              opacity: gridInView ? 1 : 0,
              transform: gridInView ? 'translateY(0)' : 'translateY(32px)',
              transitionDelay: `${i * 80}ms`,
            }}
          >
            {/* Image */}
            <div className="relative w-full aspect-[764/428] overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-[12px] px-[16px] md:px-[24px] lg:px-[40px] py-[16px] md:py-[20px] lg:py-[25px]">
              <div className="flex items-center justify-between gap-[12px]">
                <p className="text-[12px] text-[#777] uppercase tracking-wide leading-normal font-normal">
                  {work.tags.join(' — ')}
                </p>
                <Link
                  href={`/work/${work.slug}`}
                  className="flex items-center justify-center bg-black rounded-[27.5px] w-[39px] h-[39px] md:w-[44px] md:h-[44px] lg:w-[55px] lg:h-[55px] p-[10px] md:p-[12px] lg:p-[16px] shrink-0 text-white hover:bg-[#333] transition-colors duration-200"
                  aria-label={`View ${work.title}`}
                >
                  <ArrowUpRight />
                </Link>
              </div>
              <h3 className="font-black text-[24px] uppercase text-[#1e1e20] leading-tight">
                {work.title}
              </h3>
              <p className="text-[16px] text-[#1e1e20] leading-[1.71] font-normal">
                {work.description}
              </p>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}
