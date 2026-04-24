'use client'
import { useInView } from '@/hooks/useInView'
import type { Job } from '@/lib/jobs-data'

function ArrowUpRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

interface Props {
  jobs: Job[]
}

export default function JobsRoles({ jobs }: Props) {
  const [ref, inView] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[40px] md:py-[60px] lg:py-[60px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >

      {/* ── Desktop: bordered table ──────────────────────────────────── */}
      <div className="hidden lg:block border border-[#1e1e20]">
        {jobs.map((job, index) => (
          <div
            key={job.id}
            className={`flex items-stretch${index > 0 ? ' border-t border-[#1e1e20]' : ''}`}
          >
            {/* Col 1 — number */}
            <div className="border-r border-[#1e1e20] px-[30px] py-[37px] w-[120px] shrink-0 flex items-start">
              <p className="font-black text-[16px] text-[#1e1e20] tracking-[-0.64px]">
                {job.number}
              </p>
            </div>

            {/* Col 2 — title + description */}
            <div className="border-r border-[#1e1e20] px-[30px] py-[37px] flex-1 flex flex-col gap-[10px]">
              <p className="font-black text-[24px] text-[#111] tracking-[-0.24px]">
                {job.title}
              </p>
              <p className="text-[14px] text-[#8c8c8c] leading-[1.6]">
                We are looking for a{' '}
                <strong className="font-extrabold text-[#8c8c8c]">{job.boldWord}</strong>
                {job.description}
              </p>
            </div>

            {/* Col 3 — tags */}
            <div className="border-r border-[#1e1e20] px-[30px] py-[37px] w-[220px] shrink-0 flex flex-col gap-[12px] justify-center">
              <div className="flex items-center gap-[9px] flex-wrap">
                <span className="bg-[#1e1e20] text-white text-[12px] tracking-[1.44px] px-[8px] py-[4px] rounded-full whitespace-nowrap">
                  {job.location}
                </span>
                <span className="border border-[#1e1e20] text-[#1e1e20] text-[12px] tracking-[1.44px] px-[8px] py-[4px] rounded-full whitespace-nowrap">
                  {job.category}
                </span>
              </div>
              <p className="text-[12px] text-[#1e1e20] tracking-[1.2px] uppercase">
                {job.type}
              </p>
            </div>

            {/* Col 4 — apply */}
            <div className="px-[30px] py-[37px] w-[200px] shrink-0 flex flex-col items-center justify-center gap-[10px]">
              <button className="bg-[#1e1e20] flex items-center justify-center rounded-full size-[55px] text-white hover:opacity-80 transition-opacity cursor-pointer">
                <ArrowUpRight />
              </button>
              <p className="font-extrabold text-[16px] text-[#1e1e20] tracking-[1.6px] uppercase">
                Apply Now
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile + Tablet: card list ───────────────────────────────── */}
      <div className="lg:hidden flex flex-col gap-[16px] md:gap-[20px]">
        {jobs.map((job) => (
          <div key={job.id} className="border border-[#1e1e20] p-[20px] md:p-[24px] flex flex-col gap-[16px]">
            <div className="flex items-start justify-between gap-[12px]">
              <div className="flex flex-col gap-[4px] flex-1">
                <p className="font-black text-[11px] text-[#8c8c8c] tracking-[1.2px] uppercase">
                  {job.number}
                </p>
                <p className="font-black text-[20px] md:text-[24px] text-[#111] tracking-[-0.24px] leading-tight">
                  {job.title}
                </p>
              </div>
              <div className="flex flex-col items-end gap-[6px] shrink-0">
                <button className="bg-[#1e1e20] flex items-center justify-center rounded-full size-[44px] md:size-[55px] text-white cursor-pointer hover:opacity-80 transition-opacity">
                  <ArrowUpRight />
                </button>
                <p className="font-extrabold text-[11px] text-[#1e1e20] tracking-[1.4px] uppercase">
                  Apply Now
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[8px] flex-wrap">
              <span className="bg-[#1e1e20] text-white text-[11px] tracking-[1.2px] px-[8px] py-[4px] rounded-full">
                {job.location}
              </span>
              <span className="border border-[#1e1e20] text-[#1e1e20] text-[11px] tracking-[1.2px] px-[8px] py-[4px] rounded-full">
                {job.category}
              </span>
              <span className="text-[11px] text-[#1e1e20] tracking-[1.2px] uppercase">
                {job.type}
              </span>
            </div>
            <p className="text-[13px] md:text-[14px] text-[#8c8c8c] leading-[1.6]">
              We are looking for a{' '}
              <strong className="font-extrabold text-[#8c8c8c]">{job.boldWord}</strong>
              {job.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
