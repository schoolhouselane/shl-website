import Image from 'next/image'
import type { WorkProject } from '@/lib/work-data'

export default function CaseStudyContent({ project }: { project: WorkProject }) {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] py-[60px] md:py-[120px] flex flex-col gap-[80px] md:gap-[120px]">

      {/* Challenge + Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#1e1e20]/15">
        <div className="bg-[#f5f3ef] flex flex-col gap-[20px] py-[40px] md:py-[60px] pr-0 md:pr-[60px]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#777]">The Challenge</p>
          <p className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75]">
            {project.challenge}
          </p>
        </div>
        <div className="bg-[#f5f3ef] flex flex-col gap-[20px] py-[40px] md:py-[60px] pl-0 md:pl-[60px]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#777]">Our Approach</p>
          <p className="text-[16px] md:text-[18px] text-[#1e1e20] leading-[1.75]">
            {project.approach}
          </p>
        </div>
      </div>

      {/* Deliverables */}
      <div className="flex flex-col gap-[20px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#777]">Deliverables</p>
        <div className="flex flex-wrap gap-[10px]">
          {project.deliverables.map((d) => (
            <span
              key={d}
              className="border border-[#1e1e20] text-[#1e1e20] text-[12px] md:text-[13px] uppercase tracking-[0.06em] px-[16px] py-[9px] rounded-full"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Detail image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3 / 2' }}>
        <Image
          src={project.image}
          alt={`${project.title} — detail`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, calc(100vw - 180px)"
        />
      </div>

      {/* Results */}
      <div className="flex flex-col gap-[28px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#777]">Results</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#1e1e20]/20">
          {project.results.map((r, i) => (
            <div
              key={r.label}
              className={`flex flex-col gap-[10px] py-[36px] px-[32px] md:px-[40px] ${
                i < project.results.length - 1
                  ? 'border-b sm:border-b-0 sm:border-r border-[#1e1e20]/20'
                  : ''
              }`}
            >
              <span className="font-black text-[52px] md:text-[64px] text-[#1e1e20] leading-[1] tracking-[-1.5px]">
                {r.value}
              </span>
              <span className="text-[13px] text-[#777] uppercase tracking-[0.08em]">
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
