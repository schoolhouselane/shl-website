import Image from 'next/image'
import Link from 'next/link'

const works = [
  {
    src: '/images/work-1.png',
    title: 'Aureum Spirits',
    tag: 'Brand Identity',
  },
  {
    src: '/images/work-2.png',
    title: 'Meridian Health',
    tag: 'Campaign Strategy',
  },
  {
    src: '/images/work-3.png',
    title: 'Nova Commerce',
    tag: 'Website & Digital',
  },
  {
    src: '/images/work-4.png',
    title: 'Solstice Labs',
    tag: 'Brand Strategy',
  },
  {
    src: '/images/work-5.png',
    title: 'Vantage Capital',
    tag: 'AI Creative',
  },
  {
    src: '/images/work-6.png',
    title: 'Helio Studios',
    tag: 'Brand Identity',
  },
]

export default function SelectedWork() {
  return (
    <section className="px-5 md:px-[90px] py-12 md:py-20 bg-[#f5f3ef]">
      <div className="mb-8 md:mb-10">
        <h2 className="font-black text-[36px] md:text-[64px] leading-[0.9] tracking-[-1px] md:tracking-[-1.28px] uppercase text-[#1e1e20]">
          Selected Work<br />That Delivered Growth
        </h2>
        <p className="mt-4 text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20] max-w-[565px]">
          Our work spans brand strategy, identity, campaigns, and digital. Each project is chosen because it pushed something forward.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {works.map((work, i) => (
          <Link
            key={i}
            href="/work"
            className="group relative h-[260px] sm:h-[320px] md:h-[420px] rounded-sm overflow-hidden block"
          >
            <Image
              src={work.src}
              alt={work.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
              <p className="text-white/70 text-[12px] md:text-[13px] uppercase tracking-widest mb-1">{work.tag}</p>
              <h3 className="text-white font-bold text-[20px] md:text-[26px] leading-tight mb-4">{work.title}</h3>
              <div className="flex items-center gap-2 border border-white rounded-full px-4 py-2 w-fit text-white text-[12px] md:text-[13px] font-medium uppercase">
                View Case Study
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end gap-5">
        <div className="flex-1">
          <p className="font-semibold text-[20px] md:text-[24px] leading-[0.9] tracking-[-0.48px] uppercase text-[#1e1e20] max-w-[403px]">
            Brand Strategy &amp; Positioning
          </p>
          <p className="mt-3 text-[15px] md:text-[16px] leading-[1.71] text-[#1e1e20]">
            Transforming brand from a marketing cost into a high-leverage strategic asset for growth.
          </p>
        </div>
        <Link href="/work" className="flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-5 py-2 text-[14px] md:text-[16px] font-medium uppercase hover:bg-[#1e1e20] hover:text-white transition-colors">
          View All Work
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
