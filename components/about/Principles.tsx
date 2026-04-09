const principles = [
  {
    num: '01',
    title: 'Be Curious',
    desc: 'Mediocrity is a choice. Relentless inquiry is how we live.',
  },
  {
    num: '02',
    title: 'Communication',
    desc: 'No black boxes. Ever. Just togetherness.',
  },
  {
    num: '03',
    title: 'Human',
    desc: 'We work with people, not "clients." Emotional intelligence is our secret weapon.',
  },
  {
    num: '04',
    title: 'Be Bright. Be Industrious',
    desc: 'High-level enterprise value meets relentless output.',
  },
  {
    num: '05',
    title: 'Think Inside the BOX',
    desc: 'We balance wild imagination with commercial discipline.',
  },
  {
    num: '06',
    title: 'Discipline',
    desc: "Standards don't slip. We architect the infrastructure for ambition.",
  },
]

export default function Principles() {
  return (
    <section className="bg-[#1e1e20] py-[80px] md:py-[120px] flex flex-col gap-[60px] md:gap-[120px]">

      {/* Header */}
      <div className="px-5 md:px-[90px] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <h2 className="font-bold text-[36px] md:text-[64px] text-white uppercase max-w-[526px] leading-tight">
          Our Operating Principles:
        </h2>
        <p className="text-[16px] md:text-[20px] text-white/50 leading-[1.8] lg:text-right max-w-[582px]">
          These aren&apos;t values on a wall. They are the operating system we run on. Every brief, every decision, every conversation — these are the principles we return to.
        </p>
      </div>

      {/* Principles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {principles.map((p, i) => (
          <div
            key={p.num}
            className="relative flex items-center justify-between px-5 md:px-[90px] py-[28px] md:py-[38px] border-t border-white/10"
          >
            {/* Left: title + desc */}
            <div className="flex flex-col gap-[6px] max-w-[65%]">
              <h3 className={`font-black uppercase text-white leading-tight ${i === 0 ? 'text-[20px] md:text-[24px]' : 'text-[18px] md:text-[22px]'}`}>
                {p.title}
              </h3>
              <p className="text-[14px] md:text-[16px] text-white/40 leading-[1.7]">
                {p.desc}
              </p>
            </div>

            {/* Right: ghost number */}
            <span className="font-black text-[60px] md:text-[100px] text-white/[0.08] tracking-[-4px] leading-none select-none shrink-0">
              {p.num}
            </span>
          </div>
        ))}
      </div>

    </section>
  )
}
