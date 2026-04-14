import Image from 'next/image'
import Link from 'next/link'

const cards = [
  {
    img: '/images/strategy-1.jpg',
    title: 'Brand Strategy & Positioning',
    desc: 'Transforming brand from a marketing cost into a high-leverage strategic asset for growth.',
    href: '/contact',
  },
  {
    img: '/images/strategy-2.jpg',
    title: 'Gallery & Videos',
    desc: 'Cinematic photography and video that converts browsers into buyers and elevates perceived value.',
    href: '/contact',
  },
  {
    img: '/images/strategy-3.jpg',
    title: 'Websites & Digital',
    desc: 'Conversion-engineered sites with performance, accessibility, and brand storytelling woven into every scroll.',
    href: '/contact',
  },
  {
    img: '/images/strategy-4.jpg',
    title: 'Campaigns & Creative',
    desc: 'Cultural moments that happen to sell things — every campaign starts with the business problem.',
    href: '/contact',
  },
  {
    img: '/images/strategy-5.jpg',
    title: 'AI Creative & Innovation',
    desc: 'AI as a creative multiplier — faster execution without sacrificing craft or quality.',
    href: '/contact',
  },
  {
    img: '/images/strategy-6.jpg',
    title: 'Strategy & Growth Consulting',
    desc: 'The growth audit, plan, and execution framework behind every brand that outperforms its category.',
    href: '/contact',
  },
]

const marqueeImages = [
  '/images/strategy-1.jpg',
  '/images/strategy-2.jpg',
  '/images/strategy-3.jpg',
  '/images/strategy-4.jpg',
  '/images/strategy-5.jpg',
  '/images/strategy-6.jpg',
  '/images/strategy-7.jpg',
  '/images/strategy-8.jpg',
  '/images/strategy-9.jpg',
]

export default function ServicesStrategy() {
  return (
    <section className="bg-[#f5f3ef] flex flex-col pb-[0]">

      {/* Card grid */}
      <div className="px-5 md:px-[90px] py-[60px] md:py-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e20]">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group bg-[#f5f3ef] flex flex-col overflow-hidden border border-[#1e1e20]"
          >
            {/* Image — shrinks on hover */}
            <div className="relative overflow-hidden h-[240px] sm:h-[280px] md:h-[340px] transition-all duration-500 ease-in-out group-hover:h-[160px] md:group-hover:h-[200px]">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[12px] px-[8px] py-[12px]">
              <div className="flex items-start justify-between gap-[16px]">
                <h3 className="font-semibold text-[18px] md:text-[22px] uppercase text-[#1e1e20] tracking-[-0.44px] leading-[0.95] flex-1">
                  {card.title}
                </h3>
                <div className="w-[44px] h-[44px] md:w-[55px] md:h-[55px] bg-[#1e1e20] rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-45">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="rotate-45">
                    <path d="M17 17L7 7M7 7h10M7 7v10"/>
                  </svg>
                </div>
              </div>
              <p className="text-[14px] md:text-[16px] text-[#1e1e20] leading-[1.7] line-clamp-2">
                {card.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Scrolling image strip */}
      <div className="flex overflow-hidden border-t border-[#1e1e20]/20">
        <div className="flex gap-px animate-marquee">
          {[...marqueeImages, ...marqueeImages].map((src, i) => (
            <div key={i} className="relative shrink-0 w-[160px] h-[140px] md:w-[200px] md:h-[160px] bg-[#d9d9d9] overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" sizes="200px" />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
