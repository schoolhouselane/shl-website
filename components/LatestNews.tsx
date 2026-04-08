import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    img: '/images/blog-1.png',
    title: 'Why Brand Is Your Most Measurable Asset',
    excerpt: "The companies that treat brand as strategy not decoration consistently outperform on enterprise value. Here's why.",
  },
  {
    img: '/images/blog-2.png',
    title: 'Creative Commerce: Where Imagination Meets Revenue',
    excerpt: "We don't just build identities. We build ecosystems where every touchpoint accelerates business growth.",
  },
]

export default function LatestNews() {
  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] py-[90px] md:py-[180px]">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left text */}
        <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-5">
          <h2 className="font-black text-[36px] md:text-[64px] leading-tight tracking-[-1px] md:tracking-[-1.28px] uppercase text-[#1e1e20]">
            Latest News from Our Work
          </h2>
          <p className="text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20]">
            Thinking, writing, and perspectives from the Schoolhouse Lane team on brand, culture, and the ideas shaping business today.
          </p>
          <Link href="/blog" className="btn-cta inline-flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-6 py-2 text-[16px] font-medium uppercase transition-colors">
            VIEW ALL
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-5 flex-1">
          {articles.map((a, i) => (
            <div key={i} className="flex flex-col w-full sm:w-[260px] md:w-[300px] shrink-0">
              <div className="relative h-[200px] sm:h-[260px] md:h-[300px] overflow-hidden">
                <Image src={a.img} alt={a.title} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="bg-[#1e1e20] p-5 md:p-6 flex-1">
                <div className="flex gap-4 items-start justify-between">
                  <h3 className="font-semibold text-[16px] md:text-[20px] leading-normal text-white flex-1">{a.title}</h3>
                  <div className="flex items-center justify-center bg-white rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </div>
                </div>
                <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-white/80">{a.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
