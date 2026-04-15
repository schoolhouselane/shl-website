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
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] py-[80px] md:py-[120px] flex flex-col gap-[60px] md:gap-[80px]">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-[20px]">
        <h2 className="font-black text-[36px] md:text-[64px] uppercase text-[#1e1e20] leading-normal">
          some more work<br className="hidden md:block" /> like this one
        </h2>
        <Link
          href="/work"
          className="inline-flex items-center gap-[12px] border border-[#1e1e20] px-[24px] py-[8px] rounded-[50px] shrink-0 self-start hover:bg-[#1e1e20] hover:text-white transition-colors group"
        >
          <span className="font-medium text-[16px] uppercase whitespace-nowrap leading-[27.42px] group-hover:text-white transition-colors">
            ALL WORKS
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Two cards — exact same markup as WorkGrid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
        {picks.map(p => (
          <article key={p.slug} className="border border-black flex flex-col group">
            {/* Image */}
            <div className="relative w-full h-[240px] sm:h-[300px] md:h-[371px] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-[12px] px-[24px] md:px-[40px] py-[20px] md:py-[25px]">
              <div className="flex items-center justify-between gap-[12px]">
                <p className="text-[11px] md:text-[12px] text-[#777] uppercase tracking-wide leading-normal">
                  {p.tags.join(' — ')}
                </p>
                <Link
                  href={`/work/${p.slug}`}
                  className="flex items-center justify-center bg-black rounded-full w-[44px] h-[44px] md:w-[55px] md:h-[55px] p-[14px] md:p-[16px] shrink-0 text-white hover:bg-[#333] transition-colors duration-200"
                  aria-label={`View ${p.title}`}
                >
                  <ArrowUpRight />
                </Link>
              </div>
              <h3 className="font-black text-[18px] md:text-[24px] uppercase text-[#1e1e20] leading-tight">
                {p.title}
              </h3>
              <p className="text-[14px] md:text-[16px] text-[#1e1e20] leading-[1.714]">
                {p.description}
              </p>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}
