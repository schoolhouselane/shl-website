'use client'
import { useInView } from '@/hooks/useInView'

const values = [
  'Be Curious',
  'Think Inside the BOX',
  'Be Great',
  'Discipline',
  'Communication',
  'Human Respect',
]

export default function Vision() {
  const [headerRef, headerInView] = useInView(0.2)
  const [listRef, listInView] = useInView(0.1)

  return (
    <section className="bg-[#1e1e20] px-4 md:px-6 lg:px-[90px] py-[40px] md:py-[80px] lg:py-[120px] flex flex-col gap-[24px] md:gap-[80px] lg:gap-[60px]">

      {/* Header */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="flex flex-col md:flex-row md:items-start md:justify-between gap-[8px] md:gap-6 transition-all duration-700"
        style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <h2 className="font-bold text-[24px] md:text-[32px] lg:text-[64px] text-white uppercase leading-tight">
          Values that we stand by
        </h2>
        <p className="text-[16px] text-white/50 leading-[1.8] md:text-right md:max-w-[323px] lg:max-w-[520px]">
          We operate from a clear set of principles. These aren&apos;t values on a wall — they&apos;re the decisions we make every day, and the standards we hold ourselves to.
        </p>
      </div>

      {/* Values list */}
      <div ref={listRef as React.RefObject<HTMLDivElement>} className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 md:grid-flow-col md:gap-x-[40px] lg:gap-x-[60px]">
        {values.map((v, i) => (
          <div
            key={v}
            className="border-b border-white flex items-center py-[10px] md:py-[10px] lg:py-[24px] transition-all duration-600"
            style={{
              opacity: listInView ? 1 : 0,
              transform: listInView ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: `${i * 60}ms`,
            }}
          >
            <p className="font-semibold text-[16px] md:text-[24px] lg:text-[24px] text-white uppercase leading-normal">
              {v}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
