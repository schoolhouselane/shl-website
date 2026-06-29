'use client'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import type { Job } from '@/lib/jobs-data'
import ApplyModal from './ApplyModal'

function ArrowUpRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

function ChevronDown({ flipped }: { flipped: boolean }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5"
      className={`transition-transform duration-300 ${flipped ? 'rotate-180' : ''}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function JobDetailsPanel({ job, onApply }: { job: Job; onApply: () => void }) {
  const { details } = job
  if (!details) return null
  return (
    <div className="flex flex-col gap-[28px] px-[30px] py-[32px] bg-[#f5f3ef] border-t border-[#1e1e20]/10">
      {/* Intro */}
      <p className="text-[14px] text-[#555] leading-[1.75] max-w-[720px]">{details.intro}</p>

      {/* The role */}
      <div className="flex flex-col gap-[10px]">
        <p className="font-extrabold text-[11px] tracking-[1.4px] uppercase text-[#1e1e20]">The role</p>
        <p className="text-[14px] text-[#555] leading-[1.75] max-w-[720px]">{details.role}</p>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
        {details.sections.map((section) => (
          <div key={section.heading} className="flex flex-col gap-[12px]">
            <p className="font-extrabold text-[11px] tracking-[1.4px] uppercase text-[#1e1e20]">
              {section.heading}
            </p>
            <ul className="flex flex-col gap-[8px]">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-[10px] text-[13px] text-[#555] leading-[1.65]">
                  <span className="mt-[6px] w-[4px] h-[4px] rounded-full bg-[#1e1e20] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Why SHL */}
      <div className="flex flex-col gap-[10px]">
        <p className="font-extrabold text-[11px] tracking-[1.4px] uppercase text-[#1e1e20]">Why Schoolhouse Lane</p>
        <p className="text-[14px] text-[#555] leading-[1.75] max-w-[720px]">{details.why}</p>
      </div>

      {/* How to apply */}
      <div className="flex flex-col gap-[10px]">
        <p className="font-extrabold text-[11px] tracking-[1.4px] uppercase text-[#1e1e20]">How to apply</p>
        <p className="text-[14px] text-[#555] leading-[1.75] max-w-[720px]">{details.howToApply}</p>
      </div>

      {/* CTA */}
      <div>
        <button
          onClick={onApply}
          className="flex items-center gap-[10px] bg-[#1e1e20] text-white rounded-[50px] px-[24px] py-[12px] text-[13px] font-bold uppercase tracking-[1.2px] hover:opacity-80 transition-opacity cursor-pointer"
        >
          Apply Now <ArrowUpRight />
        </button>
      </div>
    </div>
  )
}

interface Props {
  jobs: Job[]
}

export default function JobsRoles({ jobs }: Props) {
  const [ref, inView] = useInView(0.1)
  const [applyRole, setApplyRole] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  function toggleExpand(id: string) {
    setExpandedId(prev => prev === id ? null : id)
  }

  return (
    <>
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[40px] md:py-[60px] lg:py-[60px] transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
      >

        {/* ── Desktop: bordered table ──────────────────────────────────── */}
        <div className="hidden lg:block border border-[#1e1e20]">
          {jobs.map((job, index) => (
            <div key={job.id} className={index > 0 ? 'border-t border-[#1e1e20]' : ''}>
              <div className="flex items-stretch">
                {/* Col 1 — number */}
                <div className="border-r border-[#1e1e20] px-[30px] py-[37px] w-[120px] shrink-0 flex items-start">
                  <p className="font-black text-[16px] text-[#1e1e20] tracking-[-0.64px]">
                    {job.number}
                  </p>
                </div>

                {/* Col 2 — title + description + see more */}
                <div className="border-r border-[#1e1e20] px-[30px] py-[37px] flex-1 flex flex-col gap-[10px]">
                  <p className="font-black text-[24px] text-[#111] tracking-[-0.24px]">
                    {job.title}
                  </p>
                  <p className="text-[14px] text-[#8c8c8c] leading-[1.6]">
                    We are looking for a{' '}
                    <strong className="font-extrabold text-[#8c8c8c]">{job.boldWord}</strong>
                    {job.description}
                  </p>
                  {job.details && (
                    <button
                      onClick={() => toggleExpand(job.id)}
                      className="flex items-center gap-[6px] text-[12px] font-extrabold tracking-[1.2px] uppercase text-[#1e1e20] hover:opacity-50 transition-opacity cursor-pointer w-fit mt-[4px]"
                    >
                      {expandedId === job.id ? 'See Less' : 'See More'}
                      <ChevronDown flipped={expandedId === job.id} />
                    </button>
                  )}
                </div>

                {/* Col 3 — tags */}
                <div className="border-r border-[#1e1e20] px-[24px] py-[37px] w-[260px] shrink-0 flex flex-col gap-[12px] justify-center">
                  <div className="flex items-center gap-[9px] flex-wrap">
                    <span className="bg-[#1e1e20] text-white text-[12px] tracking-[1.44px] px-[8px] py-[4px] rounded-full whitespace-nowrap">
                      {job.location}
                    </span>
                    {job.workMode && (
                      <span className="bg-[#1e1e20] text-white text-[12px] tracking-[1.44px] px-[8px] py-[4px] rounded-full whitespace-nowrap">
                        {job.workMode}
                      </span>
                    )}
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
                  <button
                    onClick={() => setApplyRole(job.title)}
                    className="bg-[#1e1e20] flex items-center justify-center rounded-full size-[55px] text-white hover:opacity-80 transition-opacity cursor-pointer"
                    aria-label={`Apply for ${job.title}`}
                  >
                    <ArrowUpRight />
                  </button>
                  <button
                    onClick={() => setApplyRole(job.title)}
                    className="font-extrabold text-[16px] text-[#1e1e20] tracking-[1.6px] uppercase hover:opacity-60 transition-opacity cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Expanded detail panel */}
              {expandedId === job.id && (
                <JobDetailsPanel job={job} onApply={() => setApplyRole(job.title)} />
              )}
            </div>
          ))}
        </div>

        {/* ── Mobile + Tablet: card list ───────────────────────────────── */}
        <div className="lg:hidden flex flex-col gap-[16px] md:gap-[20px]">
          {jobs.map((job) => (
            <div key={job.id} className="border border-[#1e1e20] flex flex-col">
              <div className="p-[20px] md:p-[24px] flex flex-col gap-[16px]">
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
                    <button
                      onClick={() => setApplyRole(job.title)}
                      className="bg-[#1e1e20] flex items-center justify-center rounded-full size-[44px] md:size-[55px] text-white cursor-pointer hover:opacity-80 transition-opacity"
                      aria-label={`Apply for ${job.title}`}
                    >
                      <ArrowUpRight />
                    </button>
                    <button
                      onClick={() => setApplyRole(job.title)}
                      className="font-extrabold text-[11px] text-[#1e1e20] tracking-[1.4px] uppercase cursor-pointer hover:opacity-60 transition-opacity"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-[8px] flex-wrap">
                  <span className="bg-[#1e1e20] text-white text-[11px] tracking-[1.2px] px-[8px] py-[4px] rounded-full">
                    {job.location}
                  </span>
                  {job.workMode && (
                    <span className="bg-[#1e1e20] text-white text-[11px] tracking-[1.2px] px-[8px] py-[4px] rounded-full">
                      {job.workMode}
                    </span>
                  )}
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
                {job.details && (
                  <button
                    onClick={() => toggleExpand(job.id)}
                    className="flex items-center gap-[6px] text-[11px] font-extrabold tracking-[1.2px] uppercase text-[#1e1e20] hover:opacity-50 transition-opacity cursor-pointer w-fit"
                  >
                    {expandedId === job.id ? 'See Less' : 'See More'}
                    <ChevronDown flipped={expandedId === job.id} />
                  </button>
                )}
              </div>

              {/* Expanded detail panel */}
              {expandedId === job.id && (
                <JobDetailsPanel job={job} onApply={() => setApplyRole(job.title)} />
              )}
            </div>
          ))}
        </div>

      </section>

      {/* Apply modal */}
      {applyRole && (
        <ApplyModal
          role={applyRole}
          onClose={() => setApplyRole(null)}
        />
      )}
    </>
  )
}
