'use client'
import { useInView } from '@/hooks/useInView'

const principles = [
  {
    num: '01',
    title: 'Upstream Accountability',
    desc: 'We prioritise the strategic engine over the marketing tail, ensuring every decision is anchored in enterprise value creation and business logic.',
  },
  {
    num: '02',
    title: 'Integrated Efficiency',
    desc: 'We eliminate the gap between strategy and execution by architecting ecosystems where upstream clarity informs every downstream touchpoint.',
  },
  {
    num: '03',
    title: 'Relentless Inquiry',
    desc: 'We move beyond "decorating" pre-made decisions; we use curiosity as a diagnostic tool to unearth latent commercial potential and hidden revenue drivers.',
  },
  {
    num: '04',
    title: 'Commercial Discipline',
    desc: 'We balance wild imagination with rigorous financial modeling, ensuring our creative commerce output is both culturally resonant and ruthlessly profitable.',
  },
  {
    num: '05',
    title: 'The Shared Intelligence Node',
    desc: 'We operate as a live, evolving system, aggregating data across our partner fleet to optimise performance, reduce risk, and compound value over time.',
  },
  {
    num: '06',
    title: 'Defensible Infrastructure',
    desc: 'We don\'t just tell stories; we build the technical and software-defined "moat" that protects margins and drives premium valuations for our clients.',
  },
]

export default function Principles() {
  const [headerRef, headerInView] = useInView(0.2)
  const [gridRef, gridInView] = useInView(0.1)

  return (
    <section className="bg-[#1e1e20] py-[60px] md:py-[80px] lg:py-[120px] flex flex-col gap-[40px] md:gap-[80px]">

      {/* Header */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="px-4 md:px-6 lg:px-[90px] flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-700"
        style={{
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        <h2 className="font-black text-[28px] md:text-[32px] lg:text-[64px] text-white uppercase leading-tight md:max-w-[264px] md:shrink-0">
          Our Operating Principles
        </h2>
        <p className="text-[16px] text-white/50 leading-[1.8] md:text-right md:max-w-[460px] lg:max-w-[608px]">
          Refining the lens from cultural values to commercial mechanics, our operating principles focus on the structural efficiency required to bridge the gap between high-level enterprise value and tactile execution.
        </p>
      </div>

      {/* Principles grid */}
      <div ref={gridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 md:grid-flow-col">
        {principles.map((p, i) => (
          <div
            key={p.num}
            className="relative flex items-center justify-between px-4 md:px-6 lg:px-[90px] py-[20px] md:py-[28px] lg:py-[38px] border-t border-white/10 overflow-hidden transition-all duration-700"
            style={{
              opacity: gridInView ? 1 : 0,
              transform: gridInView ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: `${i * 80}ms`,
            }}
          >
            {/* Left: title + desc */}
            <div className="flex flex-col gap-[6px] max-w-[65%]">
              <h3 className="font-black uppercase text-white leading-tight text-[14px] md:text-[18px]">
                {p.title}
              </h3>
              <p className="text-[12px] md:text-[16px] text-white/40 leading-[1.7]">
                {p.desc}
              </p>
            </div>

            {/* Right: ghost number */}
            <span
              className="font-black text-[40px] md:text-[100px] tracking-[-4px] leading-none select-none shrink-0 transition-all duration-1000"
              style={{
                color: 'white',
                opacity: gridInView ? 0.08 : 0,
                transform: gridInView ? 'translateX(0)' : 'translateX(30px)',
                transitionDelay: `${i * 80 + 300}ms`,
              }}
            >
              {p.num}
            </span>
          </div>
        ))}
      </div>

    </section>
  )
}
