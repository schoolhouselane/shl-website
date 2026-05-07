const items = [
  {
    title: 'Weekly progress\nupdates',
    desc: "A structured update every week — what we've built, what's coming, and anything we need from you. No black boxes.",
  },
  {
    title: 'Production-ready\nfiles',
    desc: 'All final assets delivered in the formats you need — print, digital, social, motion. Ready to use on day one.',
  },
  {
    title: 'Creative Commerce\nthinking',
    desc: 'Strategy embedded in every decision. Not just beautiful — built to perform commercially from the first touchpoint.',
  },
  {
    title: 'Clear scope.\nNo surprises.',
    desc: 'Every project is scoped in writing before we start. Scope changes are discussed and agreed — never invoiced silently.',
  },
  {
    title: 'Post-project\nreview',
    desc: "A 30-day check-in after launch. We look at what's working, what can be optimised, and what comes next.",
  },
]

export default function PricingIncludes() {
  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[200px] flex flex-col gap-[40px] md:gap-[60px] lg:gap-[120px]">

      {/* Header row — title left, description right, baseline-aligned */}
      <div className="flex items-end justify-between">
        <h2 className="font-black text-[32px] md:text-[48px] lg:text-[64px] uppercase text-[#1e1e20] leading-[1] tracking-tight">
          Every Project<br />Includes
        </h2>
        <p className="hidden md:block text-[14px] md:text-[16px] lg:text-[20px] text-black leading-[1.8] text-right max-w-[360px] lg:max-w-[556px]">
          Regardless of package, every client gets the same team, the same process rigour, and the same commitment to commercial results.
        </p>
      </div>

      {/* Mobile: description below heading */}
      <p className="md:hidden text-[14px] text-black leading-[1.8]">
        Regardless of package, every client gets the same team, the same process rigour, and the same commitment to commercial results.
      </p>

      {/* 5 columns — all on one line, dividers between */}
      <div className="flex items-stretch overflow-x-auto scrollbar-hide">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col gap-[16px] justify-center flex-1 min-w-[180px] md:min-w-0 px-[16px] md:px-[20px] py-[32px] md:py-[40px] ${i < items.length - 1 ? 'border-r border-black' : ''}`}
          >
            <p className="font-medium text-[15px] md:text-[18px] lg:text-[22px] text-[#111] leading-snug whitespace-pre-line">
              {item.title}
            </p>
            <p className="text-[12px] md:text-[13px] lg:text-[16px] text-[#1e1e20] leading-snug">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
