import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'DataDirect',
    tags: ['WEBSITES', 'STRATEGY'],
    description: 'Conversion-engineered digital experience for an enterprise data platform. Built to communicate complex technical value and drive qualified pipeline growth.',
    image: '/images/work-datadirect.png',
    href: '/work/datadirect',
  },
  {
    id: 2,
    title: 'Vivo Hotels',
    tags: ['WEBSITES', 'BRAND IDENTITY'],
    description: 'Conversion-engineered digital experience for a boutique hotel group. Built to elevate perceived value and turn browsers into bookers.',
    image: '/images/work-vivo.png',
    href: '/work/vivo-hotels',
  },
  {
    id: 3,
    title: 'Shelby for the Ride',
    tags: ['BRAND IDENTITY', 'CAMPAIGNS'],
    description: 'A heritage motorsport brand repositioned for the modern performance lifestyle market. Bold visual identity, campaign direction, and digital activation across every touchpoint.',
    image: '/images/work-shelby.png',
    href: '/work/shelby',
  },
  {
    id: 4,
    title: 'Real Map Wipes',
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
  return (
    <section className="bg-[#f5f3ef] pb-[60px] md:pb-[80px]">

      {/* Cards grid */}
      <div className="w-full px-5 md:px-[90px] pt-[60px] md:pt-[80px] flex flex-col gap-[40px] md:gap-[60px] items-center">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
          {projects.map((project) => (
            <article key={project.id} className="border border-black flex flex-col group">
              {/* Image */}
              <div className="relative w-full h-[240px] sm:h-[300px] md:h-[371px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-[12px] px-[24px] md:px-[40px] py-[20px] md:py-[25px]">
                <div className="flex items-center justify-between gap-[12px]">
                  <p className="text-[11px] md:text-[12px] text-[#777] uppercase tracking-wide leading-normal">
                    {project.tags.join(' — ')}
                  </p>
                  <Link
                    href={project.href}
                    className="flex items-center justify-center bg-black rounded-full w-[44px] h-[44px] md:w-[55px] md:h-[55px] p-[14px] md:p-[16px] shrink-0 text-white hover:bg-[#333] transition-colors duration-200"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight />
                  </Link>
                </div>
                <h3 className="font-black text-[18px] md:text-[24px] uppercase text-[#1e1e20] leading-tight">
                  {project.title}
                </h3>
                <p className="text-[14px] md:text-[16px] text-[#1e1e20] leading-[1.714]">
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
