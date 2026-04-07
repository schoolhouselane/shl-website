export default function Vision() {
  const valuesLeft = ['Be Curious', 'HUMAN', 'Think Inside the BOX']
  const valuesRight = ['Communication', 'BE INDUSTRIOUS', 'Discipline']

  return (
    <section className="bg-[#1e1e20] px-5 md:px-[90px] py-12 md:py-20">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12 md:mb-16">
        <h2 className="font-black text-[36px] md:text-[64px] leading-normal uppercase text-white max-w-[569px]">
          Vision led value creation
        </h2>
        <p className="text-[16px] md:text-[20px] leading-[1.37] text-white md:text-right max-w-[389px]">
          We transform the role of brand from a marketing tool into a strategic asset.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
        <div className="flex flex-col gap-6 md:gap-[50px]">
          {valuesLeft.map((v) => (
            <div key={v} className="border-b border-white py-3">
              <p className="font-semibold text-[22px] md:text-[32px] leading-[1.37] uppercase text-white">{v}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 md:gap-[50px]">
          {valuesRight.map((v) => (
            <div key={v} className="border-b border-white py-3">
              <p className="font-semibold text-[22px] md:text-[32px] leading-[1.37] uppercase text-white md:text-right">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
