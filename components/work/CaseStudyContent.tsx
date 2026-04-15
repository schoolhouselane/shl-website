import Image from 'next/image'
import Link from 'next/link'
import type { WorkProject } from '@/lib/work-data'
import { projects } from '@/lib/work-data'

// ─── Helpers ────────────────────────────────────────────────────────────────

// Renders a plain text body with \n\n as paragraph breaks
function BodyText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-[16px] ${className}`}>
      {text.split('\n\n').map((para, i) => (
        <p key={i} className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75] font-normal">
          {para}
        </p>
      ))}
    </div>
  )
}

// ─── Rich case study layout (matches Figma node 772-551) ────────────────────
function RichContent({ project }: { project: WorkProject }) {
  const cs = project.caseStudy!
  const related = cs.relatedSlugs
    .map(s => projects.find(p => p.slug === s))
    .filter(Boolean) as WorkProject[]

  return (
    <section className="bg-[#f5f3ef]">

      {/* ── Section 1 + side images ───────────────────────────────────────── */}
      <div className="px-5 md:px-[90px] py-[40px] md:py-[80px] flex flex-col md:flex-row gap-[40px] md:gap-[60px]">

        {/* Left column: 2 stacked images */}
        <div className="flex flex-col gap-[16px] md:w-[32%] shrink-0">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image src={cs.sideImage1} alt="" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image src={cs.sideImage2} alt="" fill className="object-cover" sizes="33vw" />
          </div>
        </div>

        {/* Right column: section 1 text */}
        <div className="flex flex-col gap-[20px] flex-1">
          <h2 className="font-black text-[18px] md:text-[20px] uppercase text-[#1e1e20] leading-tight">
            {cs.section1Title}
          </h2>
          <BodyText text={cs.section1Body} />
        </div>

      </div>

      {/* ── Section 2 ────────────────────────────────────────────────────── */}
      <div className="px-5 md:px-[90px] py-[40px] md:py-[60px] flex flex-col gap-[28px]">
        <div className="flex flex-col md:flex-row-reverse gap-[40px] md:gap-[60px]">

          {/* Left: text */}
          <div className="flex flex-col gap-[20px] flex-1">
            <h2 className="font-black text-[18px] md:text-[20px] uppercase text-[#1e1e20] leading-tight">
              {cs.section2Title}
            </h2>
            <BodyText text={cs.section2Body} />
          </div>

          {/* Right: small photo grid */}
          {cs.galleryImages.length > 0 && (
            <div className="grid grid-cols-2 gap-[8px] md:w-[36%] shrink-0 self-start">
              {cs.galleryImages.map((src, i) => (
                <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '1' }}>
                  <Image src={src} alt="" fill className="object-cover" sizes="20vw" />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* ── Section 3 + related work + metadata ──────────────────────────── */}
      <div className="px-5 md:px-[90px] py-[40px] md:py-[80px] flex flex-col md:flex-row gap-[40px] md:gap-[60px]">

        {/* Left: related work */}
        <div className="flex flex-col gap-[24px] md:w-[30%] shrink-0">
          <p className="text-[10px] uppercase tracking-[0.14em] text-[#ababab] font-bold">
            Related Work
          </p>
          {related.map((r, i) => (
            <div key={r.slug}>
              <Link href={`/work/${r.slug}`} className="flex gap-[12px] items-start group">
                <div className="relative w-[80px] h-[80px] shrink-0 overflow-hidden">
                  <Image src={r.image} alt={r.title} fill className="object-cover" sizes="80px" />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="font-black text-[14px] uppercase text-[#111] leading-tight group-hover:underline">
                    {r.title}
                  </p>
                  <p className="text-[12px] text-[#595959] leading-normal line-clamp-2">
                    {r.description}
                  </p>
                </div>
              </Link>
              {i < related.length - 1 && <div className="border-t border-[#1e1e20]/15 mt-[24px]" />}
            </div>
          ))}
        </div>

        {/* Right: section 3 text + metadata */}
        <div className="flex flex-col gap-[28px] flex-1">
          <h2 className="font-black text-[18px] md:text-[20px] uppercase text-[#1e1e20] leading-tight">
            {cs.section3Title}
          </h2>
          <BodyText text={cs.section3Body} />

          {/* Metadata table */}
          <div className="mt-[20px] border-t border-[#1e1e20]/15 pt-[24px] flex flex-col gap-[12px]">
            <div className="grid grid-cols-4 gap-[8px]">
              {[
                { label: 'CLIENT', value: cs.metaClient },
                { label: 'YEAR',   value: cs.metaYear },
                { label: 'AREA',   value: cs.metaArea },
                { label: 'PROJECT', value: cs.metaProject },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-[6px]">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#8f8f8f] font-bold">{label}</p>
                  <p className="text-[13px] md:text-[14px] font-bold text-[#111] leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── Deliverables ─────────────────────────────────────────────────── */}
      <div className="px-5 md:px-[90px] pb-[60px] md:pb-[80px] flex flex-col gap-[16px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#777]">Deliverables</p>
        <div className="flex flex-wrap gap-[10px]">
          {project.deliverables.map(d => (
            <span key={d} className="border border-[#1e1e20] text-[#1e1e20] text-[12px] uppercase tracking-[0.06em] px-[16px] py-[9px] rounded-full">
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* ── Results ──────────────────────────────────────────────────────── */}
      <div className="px-5 md:px-[90px] pb-[80px] md:pb-[120px] flex flex-col gap-[20px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#777]">Results</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#1e1e20]/20">
          {project.results.map((r, i) => (
            <div
              key={r.label}
              className={`flex flex-col gap-[10px] py-[36px] px-[32px] md:px-[40px] ${
                i < project.results.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[#1e1e20]/20' : ''
              }`}
            >
              <span className="font-black text-[52px] md:text-[64px] text-[#1e1e20] leading-[1] tracking-[-1.5px]">
                {r.value}
              </span>
              <span className="text-[13px] text-[#777] uppercase tracking-[0.08em]">{r.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

// ─── Fallback: simple layout for projects without caseStudy data ─────────────
function SimpleContent({ project }: { project: WorkProject }) {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] py-[60px] md:py-[120px] flex flex-col gap-[80px] md:gap-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#1e1e20]/15">
        <div className="bg-[#f5f3ef] flex flex-col gap-[20px] py-[40px] md:py-[60px] pr-0 md:pr-[60px]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#777]">The Challenge</p>
          <p className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75]">{project.challenge}</p>
        </div>
        <div className="bg-[#f5f3ef] flex flex-col gap-[20px] py-[40px] md:py-[60px] pl-0 md:pl-[60px]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#777]">Our Approach</p>
          <p className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75]">{project.approach}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#777]">Deliverables</p>
        <div className="flex flex-wrap gap-[10px]">
          {project.deliverables.map(d => (
            <span key={d} className="border border-[#1e1e20] text-[#1e1e20] text-[12px] uppercase tracking-[0.06em] px-[16px] py-[9px] rounded-full">{d}</span>
          ))}
        </div>
      </div>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3 / 2' }}>
        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, calc(100vw - 180px)" />
      </div>
      <div className="flex flex-col gap-[28px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#777]">Results</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#1e1e20]/20">
          {project.results.map((r, i) => (
            <div key={r.label} className={`flex flex-col gap-[10px] py-[36px] px-[32px] md:px-[40px] ${i < project.results.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[#1e1e20]/20' : ''}`}>
              <span className="font-black text-[52px] md:text-[64px] text-[#1e1e20] leading-[1] tracking-[-1.5px]">{r.value}</span>
              <span className="text-[13px] text-[#777] uppercase tracking-[0.08em]">{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Export ──────────────────────────────────────────────────────────────────
export default function CaseStudyContent({ project }: { project: WorkProject }) {
  if (project.caseStudy) return <RichContent project={project} />
  return <SimpleContent project={project} />
}
