export default function Discovery() {
  const stats = [
    { value: '79+', label: 'Brands Transformed' },
    { value: '99%', label: 'Client Retention' },
    { value: '6yr', label: 'In Market' },
    { value: '5★', label: 'Average Client Review' },
  ]

  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] pt-[80px] pb-[120px] flex flex-col gap-[40px]">

      {/* Headline */}
      <h2 className="font-black text-[40px] md:text-[64px] uppercase text-[#111] leading-tight">
        Fulfillment Through Discovery.
      </h2>

      {/* Body + pull quote */}
      <div className="flex flex-col gap-[25px] max-w-[852px]">
        <p className="text-[16px] md:text-[20px] text-[#1e1e20] leading-[1.8]">
          We are a human agency with an altruistic view of the world. We believe that business, done right, is one of the most powerful forces for good on earth. Our job is to make the brands that share that belief impossible to ignore.
        </p>
        <div className="flex items-start gap-[12px]">
          <div className="w-[3px] h-6 bg-[#111] shrink-0 mt-1" />
          <p className="font-bold text-[16px] md:text-[20px] text-[#1e1e20] leading-[1.35]">
            &ldquo;We exist at the intersection of creativity and revenue growth.&rdquo;
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-x-[30px] md:gap-x-[60px] gap-y-[40px]">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center w-[140px] md:w-[210px]">
            <p className="font-black text-[48px] md:text-[62px] tracking-[-1.87px] text-[#3a3a3a] leading-none">
              {s.value}
            </p>
            <p className="text-[10px] md:text-[12px] uppercase tracking-[1.4px] text-[#1e1e20] mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
