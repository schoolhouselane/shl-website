import Image from 'next/image'
import Link from 'next/link'
import type { WorkProject } from '@/lib/work-data'
import { projects } from '@/lib/work-data'
import type { CaseStudyData, CaseStudySection } from '@/lib/case-study-types'

// ─── Section title — supports \n line breaks ──────────────────────────────────
function SectionTitle({ text }: { text: string }) {
  const lines = text.split('\n')
  return (
    <h2 className="font-black text-[18px] md:text-[20px] uppercase text-[#1e1e20] leading-tight tracking-[-0.3px]">
      {lines.map((line, i) => (
        <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
      ))}
    </h2>
  )
}

// ─── Numbered list — Inter Bold labels, Inter Regular body ────────────────────
function ItemList({ items }: { items: NonNullable<CaseStudySection['items']> }) {
  return (
    <ol className="flex flex-col gap-[14px] list-decimal list-outside pl-[20px]">
      {items.map((item, i) => (
        <li key={i} className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75] font-normal">
          <span className="font-bold">{item.label} </span>
          {item.text}
        </li>
      ))}
    </ol>
  )
}

// ─── Section body — intro paragraph + optional numbered list ──────────────────
function SectionBody({ section }: { section: CaseStudySection }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75] font-normal">
        {section.intro}
      </p>
      {section.items && section.items.length > 0 && <ItemList items={section.items} />}
    </div>
  )
}

// ─── Rich layout (projects with full case study data) ─────────────────────────
function RichContent({ project, caseStudy }: { project: WorkProject; caseStudy: CaseStudyData }) {
  const related = caseStudy.relatedSlugs
    .map(s => projects.find(p => p.slug === s))
    .filter(Boolean) as WorkProject[]

  return (
    <section className="bg-[#f5f3ef]">

      {/* ── Section 1: Challenger Strategy — two-column ──────────────────── */}
      <div className="px-5 md:px-[90px] py-[50px] md:py-[70px] flex flex-col md:flex-row gap-[32px] md:gap-[80px]">
        <div className="md:w-[38%] shrink-0">
          <SectionTitle text={caseStudy.challengerStrategy.title} />
        </div>
        <div className="flex-1">
          <SectionBody section={caseStudy.challengerStrategy} />
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 md:mx-[90px] border-t border-[#1e1e20]/10" />

      {/* ── Section 2: Engineering Ecosystem — two-column ────────────────── */}
      <div className="px-5 md:px-[90px] py-[50px] md:py-[70px] flex flex-col md:flex-row gap-[32px] md:gap-[80px]">
        <div className="md:w-[38%] shrink-0">
          <SectionTitle text={caseStudy.engineeringEcosystem.title} />
        </div>
        <div className="flex-1">
          <SectionBody section={caseStudy.engineeringEcosystem} />
        </div>
      </div>

      {/* ── Full-width image — edge-to-edge, no side padding ─────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(240px, 40vw, 600px)' }}
      >
        <Image
          src={caseStudy.fullWidthImage}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── Optional: Communication Strategy ─────────────────────────────── */}
      {caseStudy.communicationStrategy && (
        <div className="px-5 md:px-[90px] py-[50px] md:py-[70px] border-t border-[#1e1e20]/10 flex flex-col md:flex-row gap-[32px] md:gap-[80px]">
          <div className="md:w-[38%] shrink-0">
            <SectionTitle text={caseStudy.communicationStrategy.title} />
          </div>
          <div className="flex-1">
            <SectionBody section={caseStudy.communicationStrategy} />
          </div>
        </div>
      )}

      {/* ── Section 3: Related Work sidebar + Human Advantage + metadata ─── */}
      <div className="px-5 md:px-[90px] py-[50px] md:py-[70px] flex flex-col md:flex-row gap-[40px] md:gap-[60px] border-t border-[#1e1e20]/10">

        {/* Left: related work list */}
        <div className="flex flex-col gap-[24px] md:w-[30%] shrink-0">
          <p className="text-[10px] uppercase tracking-[0.14em] text-[#ababab] font-bold">
            Related Work
          </p>
          {related.map((r, i) => (
            <div key={r.slug}>
              <Link href={`/work/${r.slug}`} className="flex gap-[12px] items-start group">
                <div className="relative w-[80px] h-[80px] shrink-0 overflow-hidden bg-[#ddd]">
                  <Image src={r.image} alt={r.title} fill className="object-cover" sizes="80px" />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="font-black text-[14px] md:text-[16px] uppercase text-[#111] leading-tight tracking-[-0.3px] group-hover:underline">
                    {r.title}
                  </p>
                  <p className="text-[12px] md:text-[13px] text-[#595959] leading-normal font-normal line-clamp-3">
                    {r.description}
                  </p>
                </div>
              </Link>
              {i < related.length - 1 && <div className="border-t border-[#1e1e20]/15 mt-[20px]" />}
            </div>
          ))}
        </div>

        {/* Right: human advantage text + metadata table */}
        <div className="flex flex-col gap-[24px] flex-1">
          <SectionTitle text={caseStudy.humanAdvantage.title} />
          <p className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75] font-normal max-w-[500px]">
            {caseStudy.humanAdvantage.intro}
          </p>

          {/* Metadata grid */}
          <div className="border-t border-[#1e1e20]/15 pt-[24px] grid grid-cols-2 md:grid-cols-4 gap-[20px]">
            {[
              { label: 'CLIENT',  value: caseStudy.metaClient },
              { label: 'YEAR',    value: caseStudy.metaYear },
              { label: 'AREA',    value: caseStudy.metaArea },
              { label: 'PROJECT', value: caseStudy.metaProject },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-[6px]">
                <p className="text-[10px] uppercase tracking-[0.14em] text-[#8f8f8f] font-bold">{label}</p>
                <p className="text-[13px] md:text-[14px] font-bold text-[#111] leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Deliverables ─────────────────────────────────────────────────── */}
      <div className="px-5 md:px-[90px] pb-[40px] md:pb-[60px] flex flex-col gap-[16px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#777] font-normal">Deliverables</p>
        <div className="flex flex-wrap gap-[10px]">
          {project.deliverables.map(d => (
            <span key={d} className="border border-[#1e1e20] text-[#1e1e20] text-[12px] uppercase tracking-[0.06em] px-[16px] py-[9px] rounded-full font-normal">
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* ── Results ──────────────────────────────────────────────────────── */}
      <div className="px-5 md:px-[90px] pb-[80px] md:pb-[120px] flex flex-col gap-[16px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#777] font-normal">Results</p>
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
              <span className="text-[13px] text-[#777] uppercase tracking-[0.08em] font-normal">{r.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

// ─── Simple fallback (projects without case study data) ───────────────────────
function SimpleContent({ project }: { project: WorkProject }) {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] py-[60px] md:py-[120px] flex flex-col gap-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#1e1e20]/15">
        <div className="bg-[#f5f3ef] flex flex-col gap-[20px] py-[40px] md:py-[60px] pr-0 md:pr-[60px]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#777] font-normal">The Challenge</p>
          <p className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75] font-normal">{project.challenge}</p>
        </div>
        <div className="bg-[#f5f3ef] flex flex-col gap-[20px] py-[40px] md:py-[60px] pl-0 md:pl-[60px]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#777] font-normal">Our Approach</p>
          <p className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75] font-normal">{project.approach}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#777] font-normal">Deliverables</p>
        <div className="flex flex-wrap gap-[10px]">
          {project.deliverables.map(d => (
            <span key={d} className="border border-[#1e1e20] text-[#1e1e20] text-[12px] uppercase tracking-[0.06em] px-[16px] py-[9px] rounded-full font-normal">{d}</span>
          ))}
        </div>
      </div>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" />
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#777] font-normal">Results</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#1e1e20]/20">
          {project.results.map((r, i) => (
            <div key={r.label} className={`flex flex-col gap-[10px] py-[36px] px-[32px] md:px-[40px] ${i < project.results.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[#1e1e20]/20' : ''}`}>
              <span className="font-black text-[52px] md:text-[64px] text-[#1e1e20] leading-[1] tracking-[-1.5px]">{r.value}</span>
              <span className="text-[13px] text-[#777] uppercase tracking-[0.08em] font-normal">{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Export — picks rich or simple based on whether caseStudy is provided ─────
export default function CaseStudyContent({
  project,
  caseStudy,
}: {
  project: WorkProject
  caseStudy?: CaseStudyData
}) {
  if (caseStudy) return <RichContent project={project} caseStudy={caseStudy} />
  return <SimpleContent project={project} />
}
