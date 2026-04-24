'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import type { BlogPost } from '@/lib/blog-data'

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="flex flex-col group overflow-hidden h-full">
      <div className="relative w-full aspect-[503/638] overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 503px"
        />
      </div>
      <div className="bg-[#1e1e20] px-[12px] md:px-[16px] lg:px-[13px] pt-[20px] md:pt-[22px] lg:pt-[26px] pb-[24px] md:pb-[26px] lg:pb-[30px] flex flex-col gap-[12px] md:gap-[16px] lg:gap-[20px] flex-1">
        <div className="flex items-end justify-between">
          <p className={`font-black text-white leading-tight flex-1 pr-[12px] ${featured ? 'text-[24px] md:text-[28px] lg:text-[28px]' : 'text-[18px] md:text-[20px] lg:text-[24px]'}`}>
            {post.title}
          </p>
          <div className="bg-white flex items-center justify-center rounded-full w-[39px] h-[39px] md:w-[44px] md:h-[44px] lg:w-[55px] lg:h-[55px] shrink-0 group-hover:scale-110 transition-transform text-[#1e1e20]">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  )
}

interface Props {
  posts: BlogPost[]
}

export default function BlogList({ posts }: Props) {
  const [ref, inView] = useInView(0.05)

  const featured = posts[0]
  const side = posts.slice(1, 3)
  const bottom = posts.slice(3, 6)
  const hasMore = posts.length > 6

  if (!featured) return null

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[60px] md:pt-[80px] lg:pt-[120px] pb-[60px] md:pb-[80px] lg:pb-[120px] flex flex-col gap-[32px] md:gap-[40px] lg:gap-[60px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      {/* Page heading */}
      <h1 className="font-black text-[32px] md:text-[48px] lg:text-[64px] uppercase text-[#1e1e20] leading-none tracking-[-1px] lg:tracking-[-1.5px]">
        LATEST IDEAS<br />AND RESEARCH
      </h1>

      {/* Row 1: Featured (full width mobile/tablet) + 2 side cards (desktop right column) */}
      <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[20px]">
        <div className="w-full lg:flex-[2]">
          <BlogCard post={featured} featured />
        </div>
        {side.length > 0 && (
          <div className="hidden lg:flex flex-col gap-[20px] flex-[1]">
            {side.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* Grid: side cards (mobile/tablet only) + bottom cards (all) + load more */}
      {(side.length > 0 || bottom.length > 0) && (
        <div className="flex flex-col gap-[16px] lg:gap-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[20px]">
            {/* Side cards hidden on desktop (shown in right column above) */}
            {side.map(post => (
              <div key={`mob-${post.slug}`} className="lg:hidden">
                <BlogCard post={post} />
              </div>
            ))}
            {/* Bottom cards always shown */}
            {bottom.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="flex items-center gap-[10px] bg-[#1e1e20] text-white rounded-full px-[24px] py-[12px] text-[14px] lg:text-[16px] font-medium uppercase tracking-wide hover:opacity-80 transition-opacity"
            >
              Load more blogs
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
