'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'

const articles = [
  {
    slug: 'brand-measurable-asset',
    img: '/images/blog/listing-brand.jpg',
    title: 'Why Brand Is Your Most Measurable Asset',
    excerpt: "The companies that treat brand as strategy not decoration consistently outperform on enterprise value. Here's why.",
  },
  {
    slug: 'creative-commerce',
    img: '/images/blog/listing-creative.jpg',
    title: 'Creative Commerce: Where Imagination Meets Revenue',
    excerpt: "We don't just build identities. We build ecosystems where every touchpoint accelerates business growth.",
  },
]

export default function LatestNews() {
  const [leftRef, leftInView] = useInView(0.2)
  const [cardsRef, cardsInView] = useInView(0.1)

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[32px] md:py-[60px] lg:py-[120px]">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left text */}
        <div
          ref={leftRef as React.RefObject<HTMLDivElement>}
          className="w-full lg:w-[380px] shrink-0 flex flex-col gap-5 transition-all duration-700"
          style={{ opacity: leftInView ? 1 : 0, transform: leftInView ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <h2 className="font-black text-[24px] md:text-[32px] lg:text-[64px] leading-tight tracking-[-0.5px] md:tracking-[-0.8px] lg:tracking-[-1.28px] uppercase text-[#1e1e20]">
            Latest News from Our Work
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] leading-[1.37] text-[#1e1e20]">
            Thinking, writing, and perspectives from the Schoolhouse Lane team on brand, culture, and the ideas shaping business today.
          </p>
          <Link href="/blog" className="btn-cta inline-flex items-center gap-[6px] w-fit border border-[#1e1e20] rounded-full px-[12px] py-[8px] md:px-6 md:py-3 text-[16px] font-medium uppercase transition-colors">
            CHECK OUR BLOGS
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* Cards */}
        <div ref={cardsRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
          {articles.map((a, i) => (
            <Link
              key={i}
              href={`/blog/${a.slug}`}
              className="flex flex-col transition-all duration-700 group"
              style={{
                opacity: cardsInView ? 1 : 0,
                transform: cardsInView ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="w-full overflow-hidden">
                <Image src={a.img} alt={a.title} width={600} height={800} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <div className="bg-[#1e1e20] p-5 md:p-6 flex-1">
                <div className="flex gap-4 items-start justify-between">
                  <h3 className="font-semibold text-[24px] md:text-[20px] leading-normal text-white flex-1">{a.title}</h3>
                  <div className="flex items-center justify-center bg-white rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </div>
                </div>
                <p className="mt-3 text-[16px] md:text-[14px] leading-relaxed text-white/80">{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
