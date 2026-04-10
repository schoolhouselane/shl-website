const steps = [
  {
    title: 'Diagnose',
    desc: 'Unearth latent potential and identify emotional triggers.',
  },
  {
    title: 'Strategise',
    desc: 'Bridge the gap between imagination and business success.',
  },
  {
    title: 'Create',
    desc: 'Build ecosystems where every touchpoint accelerates your goals.',
  },
  {
    title: 'Launch',
    desc: 'Deploy brand as a primary lever for market activation.',
  },
  {
    title: 'Compound',
    desc: 'Ensure your most intangible asset becomes your most measurable advantage.',
  },
]

export default function ServicesMethod() {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] py-[80px] md:py-[120px] flex flex-col gap-[60px] md:gap-[80px]">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <h2 className="font-black text-[36px] md:text-[64px] uppercase text-[#1e1e20] leading-tight max-w-[662px]">
          The Schoolhouse Lane Method
        </h2>
        <p className="text-[16px] md:text-[20px] text-black leading-[1.8] lg:text-right max-w-full lg:max-w-[555px]">
          Every project runs through the same five-stage method. The process is what makes the results repeatable.
        </p>
      </div>

      {/* Steps — horizontal scroll on mobile, 5-col grid on desktop */}
      <div className="flex overflow-x-auto scrollbar-hide md:overflow-visible md:grid md:grid-cols-5 border border-black/20 divide-x divide-black/20">
        {steps.map((step, i) => (
          <div key={step.title} className="flex-shrink-0 w-[220px] md:w-auto flex flex-col gap-[16px] items-start justify-center px-[24px] md:px-[40px] py-[40px] md:py-[60px]">
            <p className="font-medium text-[18px] md:text-[22px] text-[#111] leading-tight">{step.title}</p>
            <p className="text-[14px] md:text-[16px] text-[#1e1e20] leading-[1.5]">{step.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
