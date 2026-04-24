'use client'
import { useInView } from '@/hooks/useInView'
import type { Job } from '@/lib/jobs-data'

function ArrowUpRight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      {/* Desktop: background-graphic container */}
      <div className="hidden lg:block relative">
        {/* Decorative border lines background using CSS */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 71px, rgba(30,30,32,0.15) 71px, rgba(30,30,32,0.15) 72px)',
          backgroundSize: '100% 72px',
        }} />

        <div className="relative flex flex-col gap-[72px] py-[37px] px-[30px]">
          {jobs.map((job) => (
            <div key={job.id} className="flex items-start gap-[210px]">
              {/* Row number */}
              <p className="font-black text-[16px] text-[#1e1e20] tracking-[-0.64px] shrink-0 pt-[1px]">
                {job.number}
              </p>

              {/* Job content row */}
              <div className="flex-1 flex items-start justify-between">
                {/* Left: title + description */}
                <div className="flex flex-col gap-[12px] max-w-[700px]">
                  <p className="font-black text-[24px] text-[#111] tracking-[-0.24px]">
                    {job.title}
                  </p>
                  <p className="text-[14px] text-[#8c8c8c] leading-[1.6]">
                    We are looking for a <strong className="text-[#8c8c8c]">{job.boldWord}</strong>{job.description}
                  </p>
                </div>

                {/* Right: tags + apply */}
                <div className="flex flex-col items-end gap-[8px] shrink-0 ml-[40px]">
                  {/* Tags row */}
                  <div className="flex items-center gap-[9px]">
                    <span className="bg-[#1e1e20] text-white text-[12px] tracking-[1.44px] px-[8px] py-[4px] rounded-full">
                      {job.location}
                    </span>
                    <span className="border border-[#1e1e20] text-[#1e1e20] text-[12px] tracking-[1.44px] px-[8px] py-[4px] rounded-full">
                      {job.category}
                    </span>
                  </div>
                  {/* Employment type */}
                  <p className="text-[12px] text-[#1e1e20] tracking-[1.2px] uppercase px-[8px]">
                    {job.type}
                  </p>
                  {/* Apply Now */}
                  <div className="flex flex-col items-end gap-[8px] mt-[4px]">
                    <div className="bg-[#1e1e20] flex items-center justify-center rounded-full size-[55px]">
                      <ArrowUpRight size={24} />
                    </div>
                    <p className="font-extrabold text-[16px] text-[#1e1e20] tracking-[1.6px] uppercase">
                      Apply Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile + Tablet: card layout */}
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
              {/* Apply button */}
              <div className="flex flex-col items-end gap-[6px] shrink-0">
                <div className="bg-[#1e1e20] flex items-center justify-center rounded-full size-[44px] md:size-[55px] text-white">
                  <ArrowUpRight size={20} />
                </div>
                <p className="font-extrabold text-[11px] text-[#1e1e20] tracking-[1.4px] uppercase">
                  Apply Now
                </p>
              </div>
            </div>

            {/* Tags */}
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

            {/* Description */}
            <p className="text-[13px] md:text-[14px] text-[#8c8c8c] leading-[1.6]">
              We are looking for a <strong className="text-[#8c8c8c]">{job.boldWord}</strong>{job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
