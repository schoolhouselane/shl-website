'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import type { WorkProject } from '@/lib/work-data'

export default function CaseStudyHero({ project }: { project: WorkProject }) {
  const [ref, inView] = useInView(0.1)
  const cs = project.caseStudy

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] pt-[82px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0 }}
    >
      {/* ── Hero image box — px-[90px] sides, colored bg, full-bleed inside ── */}
      <div className="px-5 md:px-[90px]">
        <div
          className="relative w-full overflow-hidden"
          style={{
            height: 'clamp(260px, 40vw, 627px)',
            backgroundColor: cs?.heroColor ?? '#1e1e20',
          }}
        >
          {/* Hero photo — fills the full box */}
          <Image
            src={cs?.heroImage ?? project.heroImage}
            alt={project.title}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, calc(100vw - 180px)"
          />

          {/* Dark gradient — right half, same as Figma */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 30%, transparent 55%)',
            }}
          />

          {/* Brand text overlay — right side */}
          {cs?.heroLines && cs.heroLines.length > 0 && (
            <div className="absolute right-[5%] top-1/2 -translate-y-1/2 text-center md:text-right pr-[2%]">
              {cs.heroLines.map((line, i) => (
                <p
                  key={i}
                  className="font-black uppercase leading-[1.15] text-[clamp(22px,4vw,72px)] whitespace-nowrap"
                  style={{
                    color: i === cs.heroAccentLine ? cs.heroAccentColor : '#ffffff',
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

      {/* ── Title block ─────────────────────────────────────────────────── */}
      <div className="px-5 md:px-[90px] pt-[40px] md:pt-[60px] pb-[10px] flex flex-col gap-[8px]">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-[10px] mb-[16px]">
          <Link href="/work" className="text-[12px] uppercase tracking-[0.1em] text-[#777] hover:text-[#1e1e20] transition-colors">
            Work
          </Link>
          <span className="text-[#777]">/</span>
          <span className="text-[12px] uppercase tracking-[0.08em] text-[#777]">
            {cs?.category ?? project.category}
          </span>
        </div>

        {/* Big title */}
        <h1 className="font-black text-[40px] md:text-[64px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-1.5px]">
          {project.title}
        </h1>

        {/* Subtitle */}
        {cs?.subtitle && (
          <p className="font-black text-[18px] md:text-[36px] uppercase text-[#1e1e20] leading-tight tracking-[-0.5px]">
            {cs.subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
