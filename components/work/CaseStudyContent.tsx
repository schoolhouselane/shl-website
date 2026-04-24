'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import type { WorkProject } from '@/lib/work-data'
import { projects } from '@/lib/work-data'
import type { CaseStudyData, CaseStudySection } from '@/lib/case-study-types'

// ─── Section title — supports \n line breaks ──────────────────────────────────
function SectionTitle({ text }: { text: string }) {
  const lines = text.split('\n')
  return (
    <h2 className="font-black text-[16px] lg:text-[20px] uppercase text-[#1e1e20] leading-tight tracking-[-0.3px]">
      {lines.map((line, i) => (
        <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
      ))}
    </h2>
  )
}

// ─── Numbered list — Inter Bold labels, Inter Regular body ────────────────────
function ItemList({ items }: { items: NonNullable<CaseStudySection['items']> }) {
  return (
    <ol className="flex flex-col gap-[12px] list-decimal list-outside pl-[20px]">
      {items.map((item, i) => (
        <li key={i} className="text-[14px] lg:text-[18px] text-[#595959] leading-normal font-normal">
          <span className="font-bold uppercase text-[#1e1e20]">{item.label} </span>
          {item.text}
        </li>
      ))}
    </ol>
  )
}

// ─── Section body — intro paragraph + optional numbered list ──────────────────
function SectionBody({ section }: { section: CaseStudySection }) {
  return (
    <div className="flex flex-col gap-[12px]">
      <p className="text-[14px] lg:text-[18px] text-[#595959] leading-normal font-normal">
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

  const hasLeftImages = caseStudy.ecosystemSideImages && caseStudy.ecosystemSideImages.length > 0

  const [sec1Ref, sec1InView] = useInView(0.1)
  const [sec2Ref, sec2InView] = useInView(0.05)

  return (
    <section className="bg-[#f5f3ef]">

      {/* ── Section 1: Challenger Strategy — left image (optional) + right text ── */}
      <div
        ref={sec1Ref as React.RefObject<HTMLDivElement>}
        className="px-5 md:px-6 lg:px-[90px] py-[20px] md:py-[30px] flex flex-col md:flex-row items-start justify-between gap-[32px] md:gap-0 transition-all duration-700"
        style={{ opacity: sec1InView ? 1 : 0, transform: sec1InView ? 'translateY(0)' : 'translateY(24px)' }}
      >
        {/* Left column: single image */}
        {caseStudy.challengerSideImage && (
          <div className="w-full md:w-[32%] shrink-0">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '503/283' }}>
              <Image
                src={caseStudy.challengerSideImage}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 32vw"
              />
            </div>
          </div>
        )}
        {/* Right column: title + body */}
        <div className={`flex flex-col items-end gap-[12px] w-full ${caseStudy.challengerSideImage ? 'md:w-[63%]' : ''}`}>
          <div className="w-full md:w-[78%]">
            <SectionTitle text={caseStudy.challengerStrategy.title} />
          </div>
          <div className="w-full md:w-[52%]">
            <SectionBody section={caseStudy.challengerStrategy} />
          </div>
        </div>
      </div>

      {/* ── Section 2+3: Engineering Ecosystem + Human Advantage ─────────── */}
      <div
        ref={sec2Ref as React.RefObject<HTMLDivElement>}
        className="px-5 md:px-6 lg:px-[90px] pt-[60px] pb-[80px] md:pb-[60px] lg:pb-[120px] flex flex-col gap-[60px] transition-all duration-700"
        style={{ opacity: sec2InView ? 1 : 0, transform: sec2InView ? 'translateY(0)' : 'translateY(24px)', transitionDelay: '100ms' }}
      >

        {/* Engineering Ecosystem: left images + right content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-[32px] md:gap-0">

          {/* Left column: stacked images */}
          {hasLeftImages && (
            <div className="flex flex-col gap-[24px] w-full md:w-[32%] shrink-0">
              {caseStudy.ecosystemSideImages!.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: '503/283' }}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 32vw"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Right column: title + body + mood-board */}
          <div className={`flex flex-col items-end gap-[12px] w-full ${hasLeftImages ? 'md:w-[63%]' : ''}`}>
            <div className="w-full md:w-[78%]">
              <SectionTitle text={caseStudy.engineeringEcosystem.title} />
            </div>
            <div className="w-full md:w-[52%]">
              <SectionBody section={caseStudy.engineeringEcosystem} />
            </div>
            {caseStudy.ecosystemMoodBoard && (
              <div
                className="relative w-full md:w-[49%] overflow-hidden bg-[#f5f3ef]"
                style={{ aspectRatio: '472/289' }}
              >
                <Image
                  src={caseStudy.ecosystemMoodBoard}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 31vw"
                />
              </div>
            )}
          </div>
        </div>

        {/* ── Optional: Communication Strategy ─────────────────────────── */}
        {caseStudy.communicationStrategy && (
          <div className="flex flex-col md:flex-row items-start justify-between gap-[32px] md:gap-0 border-t border-[#1e1e20]/10 pt-[60px]">
            <div className="flex flex-col items-end gap-[12px] w-full">
              <div className="w-full md:w-[78%]">
                <SectionTitle text={caseStudy.communicationStrategy.title} />
              </div>
              <div className="w-full md:w-[52%]">
                <SectionBody section={caseStudy.communicationStrategy} />
              </div>
            </div>
          </div>
        )}

        {/* ── Divider ──────────────────────────────────────────────────── */}
        <div className="border-t border-[#1e1e20]/10" />

        {/* ── Human Advantage + Related Work sidebar ────────────────────── */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-[32px] md:gap-0">

          {/* Left: related work sidebar — same 32% as other left columns */}
          <div className="flex flex-col gap-[18px] w-full md:w-[32%] shrink-0">
            <p className="text-[9px] uppercase tracking-[1.44px] text-[#ababab] font-extrabold">
              Related work
            </p>
            {related.map((r, i) => (
              <div key={r.slug}>
                <Link href={`/work/${r.slug}`} className="flex gap-[12px] items-start group">
                  <div className="relative w-[114px] h-[114px] shrink-0 overflow-hidden bg-[#ddd]">
                    <Image
                      src={caseStudy.relatedThumbnails?.[i] ?? r.image}
                      alt={r.title}
                      fill
                      className="object-cover"
                      sizes="114px"
                    />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <p className="font-black text-[18px] uppercase text-[#111] leading-[1.1] tracking-[-0.36px] group-hover:underline">
                      {r.title}
                    </p>
                    <p className="text-[15px] text-[#595959] leading-normal font-normal line-clamp-3">
                      {r.description}
                    </p>
                  </div>
                </Link>
                {i < related.length - 1 && <div className="border-t border-[#1e1e20]/15 mt-[24px]" />}
              </div>
            ))}
          </div>

          {/* Right: Human Advantage + metadata — same 63% as other right columns */}
          <div className="flex flex-col items-end gap-[12px] w-full md:w-[63%]">
            <div className="w-full md:w-[78%]">
              <SectionTitle text={caseStudy.humanAdvantage.title} />
            </div>
            <p className="font-bold text-[14px] lg:text-[20px] text-[#1e1e20] leading-normal w-full md:w-[49%]">
              {caseStudy.humanAdvantage.intro}
            </p>

            {/* Metadata row */}
            <div className="border-t border-[#1e1e20]/15 pt-[21px] w-full md:w-[49%] flex flex-wrap md:flex-nowrap items-start justify-between gap-[16px]">
              {[
                { label: 'CLIENT',  value: caseStudy.metaClient },
                { label: 'YEAR',    value: caseStudy.metaYear },
                { label: 'AREA',    value: caseStudy.metaArea },
                { label: 'PROJECT', value: caseStudy.metaProject },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-[21px]">
                  <p className="text-[12px] uppercase tracking-[1.92px] text-[#8f8f8f] font-extrabold">{label}</p>
                  <p className="text-[14px] font-bold text-[#111] leading-[1.75]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

// ─── Simple fallback (projects without case study data) ───────────────────────
function SimpleContent({ project }: { project: WorkProject }) {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-6 lg:px-[90px] py-[60px] md:py-[60px] lg:py-[120px] flex flex-col gap-[80px]">
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
