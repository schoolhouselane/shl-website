'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'

const projects = [
  {
    id: 1,
    title: 'DataDirect',
    subtitle: 'Re-engineering the Growth Engine',
    tags: ['WEBSITES', 'STRATEGY'],
    description: 'Conversion-engineered digital experience for an enterprise data platform. Built to communicate complex technical value and drive qualified pipeline growth.',
    image: '/images/work-datadirect.png',
    href: '/work/datadirect',
  },
  {
    id: 2,
    title: 'Vivo Hotels',
    subtitle: 'Architecting the Theatre of the Living',
    tags: ['WEBSITES', 'BRAND IDENTITY'],
    description: 'Conversion-engineered digital experience for a boutique hotel group. Built to elevate perceived value and turn browsers into bookers.',
    image: '/images/work-vivo.png',
    href: '/work/vivo-hotels',
  },
  {
    id: 3,
    title: 'Shelby Cycles',
    subtitle: 'Reimagining Legacy through Creative Commerce',
    tags: ['BRAND IDENTITY', 'CAMPAIGNS'],
    description: 'A heritage motorsport brand repositioned for the modern performance lifestyle market. Bold visual identity, campaign direction, and digital activation across every touchpoint.',
    image: '/images/work-shelby.png',
    href: '/work/shelby',
  },
  {
    id: 4,
    title: 'Real Man Wipes',
    subtitle: 'Weaponising Commercial Models with Attitude',
    tags: ['BRAND IDENTITY', 'CAMPAIGNS'],
    description: 'Brand identity and packaging system built to command shelf presence and own a distinct visual language in a crowded consumer category.',
    image: '/images/work-real-map-wipes.png',
    href: '/work/real-map-wipes',
  },
]

function ArrowUpRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function WorkGrid() {
  const [headerRef, headerInView] = useInView(0.2)
  const [gridRef, gridInView] = useInView(0.05)

  return (
    <section id="work-grid" className="bg-[#f5f3ef] pb-[60px] md:pb-[80px]">

      <div className="w-full px-4 md:px-6 lg:px-[90px] pt-[40px] md:pt-[60px] lg:pt-[80px] flex flex-col gap-[40px] md:gap-[60px] items-center">

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full"
        >
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="border border-black flex flex-col group transition-all duration-700"
              style={{
                opacity: gridInView ? 1 : 0,
                transform: gridInView ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 80}ms`,
              }}
            >

              {/* Image — aspect ratio 764:428 preserved at all sizes */}
              <div className="relative w-full aspect-[764/428] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-[12px] px-4 md:px-[24px] lg:px-[40px] py-[16px] md:py-[20px] lg:py-[25px]">
                <div className="flex items-center justify-between gap-[12px]">
                  <p className="text-[11px] md:text-[12px] text-[#777] uppercase tracking-wide leading-normal">
                    {project.tags.join(' — ')}
                  </p>
                  <Link
                    href={project.href}
                    className="flex items-center justify-center bg-black rounded-full w-[39px] h-[39px] md:w-[44px] md:h-[44px] lg:w-[55px] lg:h-[55px] p-[10px] md:p-[12px] lg:p-[16px] shrink-0 text-white hover:bg-[#333] transition-colors duration-200"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight />
                  </Link>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <h3 className="font-black text-[24px] uppercase text-[#1e1e20] leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-black text-[18px] uppercase text-[#1e1e20] leading-tight">
                    {project.subtitle}
                  </p>
                </div>
                <p className="text-[16px] text-[#1e1e20] leading-[1.6]">
                  {project.description}
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>

    </section>
  )
}
