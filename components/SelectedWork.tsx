import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/work-data'

// Show first 6 projects on the homepage
const works = projects.slice(0, 6)

export default function SelectedWork() {
  return (
    <section className="px-5 md:px-[90px] pt-[30px] pb-[80px] md:pb-[120px] bg-[#f5f3ef]">

      <div className="mb-8 md:mb-10">
        <h2 className="font-black text-[36px] md:text-[64px] leading-[0.9] tracking-[-1px] md:tracking-[-1.28px] uppercase text-[#1e1e20]">
          Selected Work<br className="hidden sm:block" />That Delivered Growth
        </h2>
        <p className="mt-4 text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20] max-w-[565px]">
          Our work spans brand strategy, identity, campaigns, and digital. Each project is chosen because it pushed something forward.
        </p>
      </div>

      {/* 2 rows × 3 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] md:gap-[22px]">
        {works.map((work) => (
          <Link
            key={work.slug}
            href={`/work/${work.slug}`}
            className="group bg-[#f5f3ef] overflow-hidden border border-[#1e1e20] md:h-[598px]"
          >
            {/* Image — full height by default, shrinks on hover */}
            <div className="relative overflow-hidden h-[280px] sm:h-[360px] md:h-[598px] md:group-hover:h-[390px] transition-all duration-500 ease-in-out">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Content — hidden by default, slides in on hover */}
            <div className="flex flex-col gap-[12px] px-[8px] overflow-hidden max-h-0 opacity-0 group-hover:max-h-[220px] group-hover:opacity-100 group-hover:py-[12px] transition-all duration-500 ease-in-out">
              <div className="flex items-start justify-between gap-[16px]">
                <h3 className="font-semibold text-[20px] md:text-[24px] uppercase text-[#1e1e20] tracking-[-0.48px] leading-[0.9] flex-1">
                  {work.title}
                </h3>
                <div className="w-[55px] h-[55px] bg-[#1e1e20] rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-45">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="rotate-45">
                    <path d="M17 17L7 7M7 7h10M7 7v10"/>
                  </svg>
                </div>
              </div>
              <p className="text-[16px] text-[#1e1e20] leading-[1.7] line-clamp-2">
                {work.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}
