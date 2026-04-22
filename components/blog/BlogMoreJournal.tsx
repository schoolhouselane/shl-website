'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import type { JournalCard } from '@/lib/blog-data'

function ArrowRight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

interface Props {
  cards: JournalCard[]
}

export default function BlogMoreJournal({ cards }: Props) {
  const [ref, inView] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[48px] md:py-[60px] lg:py-[120px] flex flex-col gap-[24px] md:gap-[32px] lg:gap-[60px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-black text-[24px] md:text-[32px] lg:text-[64px] uppercase text-[#111] leading-none">
          MORE FROM THE JOURNAL
        </h2>
        <Link
          href="/blog"
          className="flex items-center gap-[6px] md:gap-[8px] border border-[#1e1e20] rounded-full px-[12px] md:px-[16px] lg:px-[24px] py-[8px] text-[13px] md:text-[14px] lg:text-[16px] font-medium uppercase text-[#1e1e20] hover:bg-[#1e1e20] hover:text-white transition-colors whitespace-nowrap"
        >
          All Blogs
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Cards — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] items-stretch">
        {cards.map((card) => (
          <Link
            key={card.slug}
            href={`/blog/${card.slug}`}
            className="flex flex-col group overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full aspect-[503/452] overflow-hidden">
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 503px"
                />
              )}
            </div>
            {/* Dark caption bar */}
            <div className="bg-[#1e1e20] px-[16px] md:px-[20px] lg:px-[26px] pt-[20px] md:pt-[22px] lg:pt-[26px] pb-[24px] md:pb-[26px] lg:pb-[30px] flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px]">
              <div className="flex gap-[12px] md:gap-[14px] lg:gap-[16px] items-end justify-between">
                <p className="font-semibold text-[18px] md:text-[20px] lg:text-[24px] text-white leading-tight flex-1">
                  {card.title}
                </p>
                <div className="bg-white flex items-center justify-center rounded-full w-[39px] h-[39px] md:w-[44px] md:h-[44px] lg:w-[55px] lg:h-[55px] shrink-0 group-hover:scale-110 transition-transform text-[#1e1e20]">
                  <ArrowRight size={18} />
                </div>
              </div>
              {card.excerpt && (
                <p className="text-[13px] md:text-[14px] lg:text-[16px] text-white/80 leading-relaxed">
                  {card.excerpt}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
