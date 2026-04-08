import Link from 'next/link'

export default function Vision() {
  const valuesLeft = ['Be Curious', 'HUMAN', 'Think Inside the BOX']
  const valuesRight = ['Communication', 'BE INDUSTRIOUS', 'Discipline']

  return (
    <section className="bg-[#1e1e20] px-5 md:px-[90px] py-[90px] md:py-[180px]">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-20 mb-16 md:mb-24">
        <h2 className="font-black text-[36px] md:text-[64px] leading-normal uppercase text-white max-w-[569px]">
          Vision led value creation
        </h2>
        <div className="flex flex-col gap-6 md:items-end md:max-w-[389px]">
          <p className="text-[16px] md:text-[20px] leading-[1.37] text-white md:text-right">
            We transform the role of brand from a marketing tool into a strategic asset.
          </p>
          <Link href="/about" className="btn-cta inline-flex items-center gap-3 w-fit border border-white rounded-full px-5 py-2 text-[16px] font-medium uppercase text-white transition-colors">
            About Us
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
        <div className="flex flex-col gap-6 md:gap-[50px]">
          {valuesLeft.map((v) => (
            <div key={v} className="border-b border-white py-4 md:py-5">
              <p className="font-semibold text-[22px] md:text-[32px] leading-[1.37] uppercase text-white">{v}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 md:gap-[50px]">
          {valuesRight.map((v) => (
            <div key={v} className="border-b border-white py-4 md:py-5">
              <p className="font-semibold text-[22px] md:text-[32px] leading-[1.37] uppercase text-white md:text-right">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
