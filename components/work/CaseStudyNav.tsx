import Link from 'next/link'
import type { WorkProject } from '@/lib/work-data'

export default function CaseStudyNav({
  prev,
  next,
}: {
  prev: WorkProject | null
  next: WorkProject | null
}) {
  if (!prev && !next) return null

  return (
    <section className="border-t border-[#1e1e20]/20 bg-[#f5f3ef]">
      <div className="grid grid-cols-1 sm:grid-cols-2">

        {/* Prev */}
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group flex flex-col gap-[12px] px-5 md:px-[90px] py-[40px] md:py-[60px] sm:border-r border-[#1e1e20]/20 border-b sm:border-b-0 hover:bg-[#1e1e20] transition-colors duration-300"
          >
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#777] group-hover:text-white/50 transition-colors">
              ← Previous Project
            </span>
            <span className="font-black text-[22px] md:text-[30px] uppercase text-[#1e1e20] group-hover:text-white leading-tight tracking-[-0.5px] transition-colors">
              {prev.title}
            </span>
            <span className="text-[12px] text-[#777] uppercase tracking-[0.08em] group-hover:text-white/50 transition-colors">
              {prev.category}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Next */}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-[12px] px-5 md:px-[90px] py-[40px] md:py-[60px] text-left sm:text-right hover:bg-[#1e1e20] transition-colors duration-300"
          >
            <span className="text-[11px] uppercase tracking-[0.12em] text-[#777] group-hover:text-white/50 transition-colors">
              Next Project →
            </span>
            <span className="font-black text-[22px] md:text-[30px] uppercase text-[#1e1e20] group-hover:text-white leading-tight tracking-[-0.5px] transition-colors">
              {next.title}
            </span>
            <span className="text-[12px] text-[#777] uppercase tracking-[0.08em] group-hover:text-white/50 transition-colors">
              {next.category}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

      </div>
    </section>
  )
}
