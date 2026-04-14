'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import type { WorkProject } from '@/lib/work-data'

export default function CaseStudyHero({ project }: { project: WorkProject }) {
  const [ref, inView] = useInView(0.1)

  return (
    <section className="bg-[#f5f3ef]">
      {/* Text block */}
      <div className="px-5 md:px-[90px] pt-[140px] md:pt-[180px] pb-[40px] md:pb-[60px]">

        {/* Breadcrumb + meta row */}
        <div className="flex flex-wrap items-center gap-[12px] mb-[28px]">
          <Link
            href="/work"
            className="text-[12px] uppercase tracking-[0.1em] text-[#777] hover:text-[#1e1e20] transition-colors"
          >
            Work
          </Link>
          <span className="text-[#777]">/</span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] uppercase tracking-[0.08em] text-[#777] border border-[#1e1e20]/25 px-[12px] py-[5px] rounded-full"
            >
              {tag}
            </span>
          ))}
          <span className="text-[11px] uppercase tracking-[0.08em] text-[#777] ml-auto">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h1
          ref={ref as React.RefObject<HTMLHeadingElement>}
          className="font-black text-[56px] sm:text-[80px] md:text-[100px] lg:text-[120px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-2px] transition-all duration-700 max-w-[1100px]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          {project.title}
        </h1>

        {/* Description */}
        <p
          className="mt-[24px] md:mt-[36px] text-[16px] md:text-[20px] text-[#111] leading-[1.6] max-w-[660px] transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '150ms',
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Full-width hero image */}
      <div
        className="relative w-full overflow-hidden transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transitionDelay: '250ms',
          aspectRatio: '16 / 7',
        }}
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  )
}
