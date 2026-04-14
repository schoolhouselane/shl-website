'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { projects } from '@/lib/work-data'

const CATEGORIES = ['ALL', 'BRAND IDENTITY', 'GALLERY & VIDEOS', 'WEBSITES', 'CAMPAIGNS', 'AI CREATIVE', 'STRATEGY'] as const
type Category = typeof CATEGORIES[number]

function ArrowUpRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

function ArrowDownRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 7l10 10M17 7v10H7" />
    </svg>
  )
}

export default function WorkGrid() {
  const [active, setActive] = useState<Category>('ALL')

  const filtered = active === 'ALL'
    ? projects
    : projects.filter((p) => p.tags.includes(active))

  return (
    <section className="bg-[#f5f3ef] pb-[60px] md:pb-[80px] flex flex-col gap-[60px] md:gap-[120px] items-center">

      {/* Filter bar */}
      <div className="w-full overflow-x-auto scrollbar-none">
        <div className="flex items-center border-t border-b border-[#1e1e20] min-w-max mx-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex items-center gap-[8px] justify-center px-[20px] md:px-[30px] lg:px-[60px] py-[20px] md:py-[30px] border-r border-[#1e1e20] cursor-pointer transition-colors whitespace-nowrap text-[14px] md:text-[18px] lg:text-[24px] font-['SansSerifBookFLF',serif] ${
                active === cat
                  ? 'bg-[#1e1e20] text-white'
                  : 'bg-transparent text-[#1e1e20] hover:bg-[#1e1e20]/8'
              }`}
            >
              {cat}
              {active === cat && <ArrowDownRight />}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="w-full px-5 md:px-[90px] flex flex-col gap-[40px] md:gap-[60px] items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
          {filtered.map((project) => (
            <article key={project.id} className="border border-black flex flex-col">
              {/* Image */}
              <div className="relative w-full h-[240px] sm:h-[300px] md:h-[371px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-[12px] px-[24px] md:px-[40px] py-[20px] md:py-[25px]">
                {/* Tag row */}
                <div className="flex items-start justify-between gap-[12px]">
                  <p className="text-[11px] md:text-[12px] text-[#777] uppercase tracking-wide leading-normal">
                    {project.tags.join(' — ')}
                  </p>
                  <Link
                    href={`/work/${project.slug}`}
                    className="flex items-center justify-center bg-black rounded-full w-[44px] h-[44px] md:w-[55px] md:h-[55px] shrink-0 text-white hover:scale-105 transition-transform"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight />
                  </Link>
                </div>

                <h2 className="font-black text-[18px] md:text-[24px] uppercase text-[#1e1e20] leading-tight">
                  {project.title}
                </h2>
                <p className="text-[14px] md:text-[16px] text-[#1e1e20] leading-[1.7]">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* No results state */}
        {filtered.length === 0 && (
          <p className="text-[16px] text-[#777] py-[40px]">No projects in this category yet.</p>
        )}

        {/* CTA — visible when no filter is active or all results shown */}
        <Link
          href="/contact"
          className="btn-cta flex items-center gap-[12px] bg-[#1e1e20] text-white px-[24px] py-[16px] rounded-[50px] text-[14px] md:text-[16px] font-medium uppercase hover:opacity-90 transition-opacity"
        >
          Start Your Project
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

    </section>
  )
}
