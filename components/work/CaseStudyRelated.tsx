import Image from 'next/image'
import Link from 'next/link'
import type { WorkProject } from '@/lib/work-data'
import { projects } from '@/lib/work-data'
import type { CaseStudyData } from '@/lib/case-study-types'

function ArrowUpRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function CaseStudyRelated({ caseStudy }: { caseStudy: CaseStudyData }) {
  const related = caseStudy.relatedSlugs
    .map(s => projects.find(p => p.slug === s))
    .filter(Boolean) as WorkProject[]

  if (related.length === 0) return null

  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] py-[60px] md:py-[80px]">

      <div className="flex items-end justify-between mb-[32px] md:mb-[40px]">
        <p className="text-[10px] uppercase tracking-[0.14em] text-[#ababab] font-bold">
          Some more work like this one
        </p>
        <Link
          href="/work"
          className="inline-flex items-center gap-[8px] border border-[#1e1e20] rounded-full px-[16px] py-[8px] text-[11px] uppercase tracking-[0.06em] font-normal hover:bg-[#1e1e20] hover:text-white transition-colors"
        >
          All Work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
        {related.map((r) => (
          <article key={r.slug} className="border border-black flex flex-col group">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src={r.image}
                alt={r.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col gap-[10px] px-[20px] md:px-[28px] py-[18px] md:py-[22px]">
              <div className="flex items-center justify-between gap-[12px]">
                <p className="text-[11px] text-[#777] uppercase tracking-wide font-normal">
                  {r.tags.join(' — ')}
                </p>
                <Link
                  href={`/work/${r.slug}`}
                  className="flex items-center justify-center bg-black rounded-full w-[40px] h-[40px] p-[10px] shrink-0 text-white hover:bg-[#333] transition-colors"
                  aria-label={`View ${r.title}`}
                >
                  <ArrowUpRight />
                </Link>
              </div>
              <h3 className="font-black text-[16px] md:text-[20px] uppercase text-[#1e1e20] leading-tight tracking-[-0.3px]">
                {r.title}
              </h3>
              <p className="text-[13px] md:text-[14px] text-[#1e1e20] leading-[1.6] font-normal line-clamp-3">
                {r.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
