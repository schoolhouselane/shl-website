import Image from 'next/image'
import Link from 'next/link'
import type { WorkProject } from '@/lib/work-data'
import { projects } from '@/lib/work-data'

// ─── Numbered list ───────────────────────────────────────────────────────────
function ItemList({ items }: { items: Array<{ label: string; text: string }> }) {
  return (
    <ol className="flex flex-col gap-[14px] list-decimal list-outside pl-[20px]">
      {items.map((item, i) => (
        <li key={i} className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75] font-normal">
          <span className="font-bold uppercase tracking-[-0.03em]">{item.label} </span>
          {item.text}
        </li>
      ))}
    </ol>
  )
}

// ─── Section title (supports \n line breaks) ─────────────────────────────────
function SectionTitle({ text }: { text: string }) {
  const lines = text.split('\n')
  return (
    <h2 className="font-black text-[18px] md:text-[20px] uppercase text-[#1e1e20] leading-tight">
      {lines.map((line, i) => (
        <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
      ))}
    </h2>
  )
}

// ─── Rich case study layout ──────────────────────────────────────────────────
function RichContent({ project }: { project: WorkProject }) {
  const cs = project.caseStudy!
  const related = cs.relatedSlugs
    .map(s => projects.find(p => p.slug === s))
    .filter(Boolean) as WorkProject[]

  return (
    <section className="bg-[#f5f3ef]">

      {/* ── Section 1: right-aligned block, title left + body right ─────── */}
      {/* Figma 772:592 — px-[90px] py-[20px], content right-aligned w-[973px] */}
      <div className="px-5 md:px-[90px] py-[30px] md:py-[20px] flex justify-end">
        <div className="w-full md:w-[calc(63%)] flex flex-col md:flex-row gap-[24px] md:gap-[40px]">
          {/* Title — left side within the block */}
          <div className="md:w-[37%] shrink-0">
            <SectionTitle text={cs.section1Title} />
          </div>
          {/* Body — right side, narrower */}
          <div className="flex flex-col gap-[16px] flex-1">
            <p className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75] font-normal">
              {cs.section1Intro}
            </p>
            {cs.section1Items.length > 0 && <ItemList items={cs.section1Items} />}
          </div>
        </div>
      </div>

      {/* ── Section 2: left images + right text ─────────────────────────── */}
      <div className="px-5 md:px-[90px] py-[40px] md:py-[60px] flex flex-col md:flex-row gap-[40px] md:gap-[60px]">
        {/* Left: 2 stacked images */}
        <div className="flex flex-col gap-[16px] md:w-[32%] shrink-0">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image src={cs.sideImage1} alt="" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image src={cs.sideImage2} alt="" fill className="object-cover" sizes="33vw" />
          </div>
        </div>
        {/* Right: section 2 text */}
        <div className="flex flex-col gap-[20px] flex-1">
          <SectionTitle text={cs.section2Title} />
          <p className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75] font-normal">
            {cs.section2Intro}
          </p>
          {cs.section2Items.length > 0 && <ItemList items={cs.section2Items} />}
          {/* Small photo grid */}
          {cs.galleryImages.length > 0 && (
            <div className="grid grid-cols-2 gap-[8px] mt-[8px] md:max-w-[360px]">
              {cs.galleryImages.map((src, i) => (
                <div key={i} className="relative overflow-hidden" style={{ aspectRatio: '1' }}>
                  <Image src={src} alt="" fill className="object-cover" sizes="20vw" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Section 3: related work sidebar + text + metadata ───────────── */}
      <div className="px-5 md:px-[90px] py-[40px] md:py-[60px] flex flex-col md:flex-row gap-[40px] md:gap-[60px] border-t border-[#1e1e20]/10">
        {/* Left: related work */}
        <div className="flex flex-col gap-[24px] md:w-[30%] shrink-0">
          <p className="text-[10px] uppercase tracking-[0.14em] text-[#ababab] font-extrabold">
            Related Work
          </p>
          {related.map((r, i) => (
            <div key={r.slug}>
              <Link href={`/work/${r.slug}`} className="flex gap-[12px] items-start group">
                <div className="relative w-[80px] h-[80px] shrink-0 overflow-hidden bg-[#ddd]">
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
              {i < related.length - 1 && <div className="border-t border-[#1e1e20]/15 mt-[20px]" />}
            </div>
          ))}
        </div>

        {/* Right: section 3 text + metadata */}
        <div className="flex flex-col gap-[24px] flex-1">
          <SectionTitle text={cs.section3Title} />
          <p className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75] font-normal max-w-[500px]">
            {cs.section3Body}
          </p>

          {/* Metadata table */}
          <div className="border-t border-[#1e1e20]/15 pt-[24px] grid grid-cols-2 md:grid-cols-4 gap-[20px]">
            {[
              { label: 'CLIENT',  value: cs.metaClient },
              { label: 'YEAR',    value: cs.metaYear },
              { label: 'AREA',    value: cs.metaArea },
              { label: 'PROJECT', value: cs.metaProject },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-[6px]">
                <p className="text-[10px] uppercase tracking-[0.14em] text-[#8f8f8f] font-extrabold">{label}</p>
                <p className="text-[13px] md:text-[14px] font-bold text-[#111] leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Deliverables ─────────────────────────────────────────────────── */}
      <div className="px-5 md:px-[90px] pb-[40px] md:pb-[60px] flex flex-col gap-[16px]">
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
      <div className="px-5 md:px-[90px] pb-[80px] md:pb-[120px] flex flex-col gap-[16px]">
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

// ─── Fallback simple layout ──────────────────────────────────────────────────
function SimpleContent({ project }: { project: WorkProject }) {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] py-[60px] md:py-[120px] flex flex-col gap-[80px]">
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
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" />
      </div>
      <div className="flex flex-col gap-[20px]">
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

export default function CaseStudyContent({ project }: { project: WorkProject }) {
  if (project.caseStudy) return <RichContent project={project} />
  return <SimpleContent project={project} />
}
