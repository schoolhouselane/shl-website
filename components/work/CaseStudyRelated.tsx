'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects, type WorkProject } from '@/lib/work-data'

function ArrowUpRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function CaseStudyRelated({ currentSlug }: { currentSlug: string }) {
  const [picks, setPicks] = useState<WorkProject[]>([])

  useEffect(() => {
    const pool = projects.filter(p => p.slug !== currentSlug)
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    setPicks(shuffled.slice(0, 2))
  }, [currentSlug])

  if (picks.length < 2) return null

  return (
    <section className="bg-[#f5f3ef] px-5 md:px-6 lg:px-[90px] pt-[60px] md:pt-[60px] lg:pt-[80px] pb-[60px] md:pb-[60px] lg:pb-[80px] flex flex-col gap-[40px] md:gap-[40px] lg:gap-[60px]">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[20px]">
        <h2 className="font-black text-[32px] md:text-[32px] lg:text-[64px] uppercase text-[#1e1e20] leading-normal">
          Selected Work<br />That Delivered Growth
        </h2>
        <Link
          href="/work"
          className="inline-flex items-center gap-[12px] border border-[#1e1e20] px-[24px] py-[12px] rounded-[50px] shrink-0 self-start hover:bg-[#1e1e20] hover:text-white transition-colors group"
        >
          <span className="font-medium text-[16px] uppercase whitespace-nowrap leading-normal group-hover:text-white transition-colors">
            See more work
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Two cards — same markup as WorkGrid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
        {picks.map(p => (
          <article key={p.slug} className="border border-black flex flex-col group">
            {/* Image — aspect ratio preserved */}
            <div className="relative w-full aspect-[764/428] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-[12px] px-4 md:px-[24px] lg:px-[40px] py-[16px] md:py-[20px] lg:py-[25px]">
              <div className="flex items-center justify-between gap-[12px]">
                <p className="text-[11px] md:text-[12px] text-[#777] uppercase tracking-wide leading-normal">
                  {p.tags.join(' — ')}
                </p>
                <Link
                  href={`/work/${p.slug}`}
                  className="flex items-center justify-center bg-black rounded-full w-[39px] h-[39px] md:w-[44px] md:h-[44px] lg:w-[55px] lg:h-[55px] p-[10px] md:p-[12px] lg:p-[16px] shrink-0 text-white hover:bg-[#333] transition-colors duration-200"
                  aria-label={`View ${p.title}`}
                >
                  <ArrowUpRight />
                </Link>
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-black text-[24px] uppercase text-[#1e1e20] leading-tight">
                  {p.title}
                </h3>
                <p className="font-black text-[18px] uppercase text-[#1e1e20] leading-tight">
                  {p.subtitle}
                </p>
              </div>
              <p className="text-[16px] text-[#1e1e20] leading-[1.6]">
                {p.description}
              </p>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}
