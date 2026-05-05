export default function PricingAIFirst() {
  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px]">
      <div className="flex flex-col gap-[32px] lg:flex-row lg:items-start lg:justify-between">
        {/* Left label */}
        <p className="font-black text-[16px] md:text-[18px] lg:text-[22px] uppercase text-[#1e1e20] shrink-0">
          AI-first
        </p>

        {/* Right content */}
        <div className="flex flex-col gap-[20px] md:gap-[25px] max-w-full lg:max-w-[837px]">
          <h2 className="font-black text-[28px] md:text-[36px] lg:text-[48px] text-[#1e1e20] leading-tight">
            Your AI-First Creative Engine
          </h2>
          <p className="font-bold text-[16px] md:text-[18px] lg:text-[24px] text-[#1e1e20]">
            Enterprise-grade creative at scale. An extension of your in-house team.
          </p>
          <div className="flex flex-col gap-[20px] text-[14px] md:text-[16px] lg:text-[20px] text-[#1e1e20]">
            <p>
              <span className="font-bold">AI Enhanced Velocity: </span>
              We use proprietary AI models to automate repetitive tasks (like resizing and versioning), enabling us to produce high volumes of on-brand content in record time.
            </p>
            <p>
              <span className="font-bold">Global &ldquo;Follow the Sun&rdquo; Production: </span>
              Our distributed team of top-tier global talent provides 24/7 production. Brief us today, review assets tomorrow.
            </p>
            <p>
              <span className="font-bold">Cost Efficient Flexibility: </span>
              Access specialized skills from motion graphics to web design on a flexible subscription basis. No bloated retainers, no hiring headaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
