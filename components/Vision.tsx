const values = [
  'Be Curious',
  'Think Inside the BOX',
  'Be Great',
  'Discipline',
  'Communication',
  'Human Respect',
]

export default function Vision() {
  return (
    <section className="bg-[#1e1e20] px-4 md:px-6 lg:px-[90px] py-[40px] md:py-[80px] lg:py-[120px] flex flex-col gap-[24px] md:gap-[40px] lg:gap-[60px]">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[8px] lg:gap-6">
        <h2 className="font-bold text-[24px] md:text-[32px] lg:text-[64px] text-white uppercase leading-tight">
          Values that we stand by
        </h2>
        <p className="text-[16px] md:text-[18px] text-white/50 leading-[1.8] lg:text-right max-w-[460px] lg:max-w-[520px]">
          We operate from a clear set of principles. These aren&apos;t values on a wall — they&apos;re the decisions we make every day, and the standards we hold ourselves to.
        </p>
      </div>

      {/* Values list */}
      <div className="flex flex-col">
        {values.map((v) => (
          <div
            key={v}
            className="border-b border-white flex items-center py-[10px] md:py-[18px] lg:py-[24px]"
          >
            <p className="font-semibold text-[16px] md:text-[20px] lg:text-[24px] text-white uppercase leading-normal">
              {v}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
