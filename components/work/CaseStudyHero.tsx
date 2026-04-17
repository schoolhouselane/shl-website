'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import type { WorkProject } from '@/lib/work-data'
import type { CaseStudyData } from '@/lib/case-study-types'

export default function CaseStudyHero({
  project,
  caseStudy,
}: {
  project: WorkProject
  caseStudy?: CaseStudyData
}) {
  const [ref, inView] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0 }}
    >
      {/* ── Hero image — padded to match content columns ─────────────────── */}
      <div className="px-5 md:px-6 lg:px-[90px] mt-[64px] md:mt-[82px]">
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: '3556/1432',
          backgroundColor: caseStudy?.heroColor ?? '#1e1e20',
        }}
      >
        <Image
          src={caseStudy?.heroImage ?? project.heroImage}
          alt={project.title}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) calc(100vw - 40px), calc(100vw - 180px)"
        />

        {/* Right-side dark gradient — only when heroLines exist */}
        {caseStudy?.heroLines && caseStudy.heroLines.length > 0 && (
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to left, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 35%, transparent 60%)',
            }}
          />
        )}

        {/* Brand text overlay */}
        {caseStudy?.heroLines && caseStudy.heroLines.length > 0 && (
          <div className="absolute right-[5%] md:right-[7%] top-1/2 -translate-y-1/2 text-right">
            {caseStudy.heroLines.map((line, i) => (
              <p
                key={i}
                className="font-black uppercase leading-[1.1] whitespace-nowrap"
                style={{
                  fontSize: 'clamp(28px, 4.5vw, 72px)',
                  color: i === caseStudy.heroAccentLine ? caseStudy.heroAccentColor : '#ffffff',
                  fontStyle: 'italic',
                }}
              >
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
      </div>

      {/* ── Title block ──────────────────────────────────────────────────────── */}
      <div className="px-5 md:px-6 lg:px-[90px] pt-[36px] md:pt-[32px] lg:pt-[52px] pb-[10px] flex flex-col gap-[8px]">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-[10px] mb-[14px]">
          <Link
            href="/work"
            className="text-[12px] uppercase tracking-[0.1em] text-[#777] font-normal hover:text-[#1e1e20] transition-colors"
          >
            Work
          </Link>
          <span className="text-[#777]">/</span>
          <span className="text-[12px] uppercase tracking-[0.08em] text-[#777] font-normal">
            {caseStudy?.category ?? project.category}
          </span>
        </div>

        {/* Big title */}
        <h1 className="font-black text-[40px] md:text-[32px] lg:text-[64px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-1.5px]">
          {project.title}
        </h1>

        {/* Subtitle */}
        {caseStudy?.subtitle && (
          <p className="font-black text-[22px] md:text-[24px] lg:text-[36px] uppercase text-[#1e1e20] leading-normal tracking-[-1.92px] mt-[8px]">
            {caseStudy.subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
