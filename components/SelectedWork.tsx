'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { projects } from '@/lib/work-data'

const slugs = ['shelby', 'vivo-hotels', 'datadirect', 'real-map-wipes']
const works = slugs.map(s => projects.find(p => p.slug === s)!).filter(Boolean)

const TABS = ['ALL', 'BRAND IDENTITY', 'GALLERY & VIDEOS', 'WEBSITES', 'CAMPAIGNS', 'AI CREATIVE', 'STRATEGY']

type StripItem = {
  src: string
  alt: string
  w: number
  tags: string[]
  href: string
}

const STRIP: StripItem[] = [
  { src: '/images/case-datadirect-1.png', alt: 'DataDirect', w: 355, tags: ['WEBSITES', 'STRATEGY'], href: '/work/datadirect' },
  { src: '/images/case-rmw-1.png', alt: 'Real Man Wipes', w: 200, tags: ['BRAND IDENTITY', 'CAMPAIGNS'], href: '/work/real-map-wipes' },
  { src: '/images/work-shelby.png', alt: 'Shelby Cycles', w: 320, tags: ['BRAND IDENTITY', 'CAMPAIGNS'], href: '/work/shelby' },
  { src: '/images/case-rmw-2.png', alt: 'Real Man Wipes', w: 250, tags: ['BRAND IDENTITY', 'CAMPAIGNS'], href: '/work/real-map-wipes' },
  { src: '/images/case-datadirect-2.png', alt: 'DataDirect', w: 300, tags: ['WEBSITES', 'STRATEGY', 'AI CREATIVE'], href: '/work/datadirect' },
  { src: '/images/work-vivo.png', alt: 'Vivo Hotels', w: 340, tags: ['WEBSITES', 'BRAND IDENTITY'], href: '/work/vivo-hotels' },
  { src: '/images/case-rmw-3.png', alt: 'Real Man Wipes', w: 200, tags: ['BRAND IDENTITY', 'CAMPAIGNS'], href: '/work/real-map-wipes' },
  { src: '/images/case-shelby-1.png', alt: 'Shelby Cycles', w: 355, tags: ['BRAND IDENTITY', 'CAMPAIGNS'], href: '/work/shelby' },
  { src: '/images/case-datadirect-3.png', alt: 'DataDirect', w: 280, tags: ['WEBSITES', 'STRATEGY', 'AI CREATIVE'], href: '/work/datadirect' },
  { src: '/images/gallery-1.png', alt: 'SHL Work', w: 270, tags: ['GALLERY & VIDEOS'], href: '/work' },
  { src: '/images/case-rmw-4.png', alt: 'Real Man Wipes', w: 355, tags: ['BRAND IDENTITY', 'CAMPAIGNS'], href: '/work/real-map-wipes' },
  { src: '/images/case-datadirect-4.png', alt: 'DataDirect', w: 300, tags: ['WEBSITES', 'STRATEGY'], href: '/work/datadirect' },
  { src: '/images/gallery-2.png', alt: 'SHL Work', w: 270, tags: ['GALLERY & VIDEOS', 'CAMPAIGNS'], href: '/work' },
  { src: '/images/case-rmw-5.png', alt: 'Real Man Wipes', w: 200, tags: ['BRAND IDENTITY', 'CAMPAIGNS'], href: '/work/real-map-wipes' },
  { src: '/images/case-datadirect-5.png', alt: 'DataDirect', w: 355, tags: ['WEBSITES', 'STRATEGY', 'AI CREATIVE'], href: '/work/datadirect' },
  { src: '/images/work-real-map-wipes.png', alt: 'Real Man Wipes', w: 200, tags: ['BRAND IDENTITY', 'CAMPAIGNS'], href: '/work/real-map-wipes' },
  { src: '/images/gallery-3.png', alt: 'SHL Work', w: 270, tags: ['GALLERY & VIDEOS'], href: '/work' },
  { src: '/images/gallery-4.png', alt: 'SHL Work', w: 270, tags: ['GALLERY & VIDEOS', 'CAMPAIGNS'], href: '/work' },
  { src: '/images/work-datadirect.png', alt: 'DataDirect', w: 340, tags: ['WEBSITES', 'STRATEGY', 'AI CREATIVE'], href: '/work/datadirect' },
]

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
  const [activeTab, setActiveTab] = useState('ALL')
  const [headerRef, headerInView] = useInView(0.2)
  const [gridRef, gridInView] = useInView(0.1)

  const filtered = activeTab === 'ALL' ? STRIP : STRIP.filter(item => item.tags.includes(activeTab))

  return (
    <section className="bg-[#f5f3ef] pt-[32px] md:pt-[40px] lg:pt-[100px] pb-[40px] md:pb-[60px]">

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
        <div>
          <Link
            href="/work"
            className="btn-cta inline-flex items-center gap-[6px] border border-[#1e1e20] rounded-[50px] px-[12px] py-[8px] md:px-[24px] md:py-[12px] text-[16px] font-medium uppercase text-[#1e1e20]"
          >
            SEE MORE WORK
            <ArrowRight />
          </Link>
        </div>
      </div>

      {/* ── Desktop: filter tabs + image strip ── */}
      <div className="hidden lg:block">

        {/* Filter tabs */}
        <div className="px-[90px]">
          <div className="flex border-t border-b border-[#1e1e20]">
            {TABS.map((tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 flex items-center gap-[10px] border-r border-[#1e1e20] whitespace-nowrap text-[20px] uppercase font-normal transition-colors duration-200 cursor-pointer
                    ${isActive
                      ? 'bg-[#1e1e20] text-white px-[40px] py-[20px]'
                      : 'bg-transparent text-[#1e1e20] px-[24px] py-[14px] hover:bg-[#1e1e20]/5'
                    }`}
                >
                  {tab}
                  {isActive && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Image strip */}
        <div className="flex gap-px overflow-x-auto scrollbar-hide h-[260px] mt-px">
          {filtered.map((item, i) => (
            <Link
              key={`${item.src}-${i}`}
              href={item.href}
              className="relative shrink-0 h-full overflow-hidden group"
              style={{ width: item.w }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="350px"
              />
            </Link>
          ))}
        </div>

      </div>

      {/* ── Mobile / tablet: project cards grid ── */}
      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="lg:hidden px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full"
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
            <div className="relative w-full aspect-[764/428] overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-[12px] px-[16px] md:px-[24px] py-[16px] md:py-[20px]">
              <div className="flex items-center justify-between gap-[12px]">
                <p className="text-[12px] text-[#777] uppercase tracking-wide leading-normal font-normal">
                  {work.tags.join(' — ')}
                </p>
                <Link
                  href={`/work/${work.slug}`}
                  className="flex items-center justify-center bg-black rounded-full w-[39px] h-[39px] md:w-[44px] md:h-[44px] p-[10px] md:p-[12px] shrink-0 text-white hover:bg-[#333] transition-colors duration-200"
                  aria-label={`View ${work.title}`}
                >
                  <ArrowUpRight />
                </Link>
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-black text-[24px] uppercase text-[#1e1e20] leading-tight">
                  {work.title}
                </h3>
                <p className="font-black text-[18px] uppercase text-[#1e1e20] leading-tight">
                  {work.subtitle}
                </p>
              </div>
              <p className="text-[16px] text-[#1e1e20] leading-normal font-normal">
                {work.description}
              </p>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}
