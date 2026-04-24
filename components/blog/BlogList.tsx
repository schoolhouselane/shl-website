'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'
import type { BlogPost } from '@/lib/blog-data'

function ArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function FeaturedCard({ post }: { post: BlogPost }) {
  const img = post.listingImage ?? post.heroImage
  return (
    <Link href={`/blog/${post.slug}`} className="flex flex-col group overflow-hidden">
      {/* Mobile + Tablet: landscape */}
      <div className="relative w-full h-[220px] md:h-[266px] lg:hidden overflow-hidden">
        <Image
          src={img}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="100vw"
          priority
        />
      </div>
      {/* Desktop: near-square */}
      <div className="hidden lg:block relative w-full aspect-square overflow-hidden">
        <Image
          src={img}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="50vw"
          priority
        />
      </div>
      {/* Caption */}
      <div className="bg-[#1e1e20] px-[13px] lg:px-[24px] py-[24px] lg:py-[30px] flex flex-col gap-[12px] lg:gap-[20px]">
        <div className="flex items-start justify-between gap-[12px]">
          <p className="font-black text-[20px] md:text-[24px] lg:text-[28px] text-white leading-tight flex-1">
            {post.title}
          </p>
          <div className="bg-white flex items-center justify-center rounded-full w-[39px] h-[39px] lg:w-[55px] lg:h-[55px] shrink-0 group-hover:scale-110 transition-transform text-[#1e1e20]">
            <ArrowUpRight />
          </div>
        </div>
        {post.seoDescription && (
          <p className="text-[14px] md:text-[16px] text-white leading-relaxed">
            {post.seoDescription}
          </p>
        )}
      </div>
    </Link>
  )
}

function RegularCard({ post }: { post: BlogPost }) {
  const img = post.listingImage ?? post.heroImage
  return (
    <Link href={`/blog/${post.slug}`} className="flex flex-col group overflow-hidden h-full">
      {/* Mobile + Tablet */}
      <div className="relative w-full h-[180px] md:h-[211px] lg:hidden overflow-hidden">
        <Image
          src={img}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {/* Desktop */}
      <div className="hidden lg:block relative w-full overflow-hidden" style={{ height: '445px' }}>
        <Image
          src={img}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="33vw"
        />
      </div>
      {/* Caption */}
      <div className="bg-[#1e1e20] px-[13px] py-[24px] lg:pt-[26px] lg:pb-[30px] flex flex-col gap-[12px] lg:gap-[20px] flex-1">
        <div className="flex items-start justify-between gap-[12px]">
          <p className="font-black text-[16px] md:text-[24px] text-white leading-tight flex-1">
            {post.title}
          </p>
          <div className="bg-white flex items-center justify-center rounded-full w-[39px] h-[39px] lg:w-[55px] lg:h-[55px] shrink-0 group-hover:scale-110 transition-transform text-[#1e1e20]">
            <ArrowUpRight />
          </div>
        </div>
        {post.seoDescription && (
          <p className="text-[13px] md:text-[16px] text-white leading-relaxed">
            {post.seoDescription}
          </p>
        )}
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

  if (!featured) return null

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[48px] md:pt-[32px] lg:pt-[120px] pb-[60px] md:pb-[80px] lg:pb-[120px] flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      {/* Heading — one line on tablet+, wraps naturally on mobile */}
      <h1 className="font-black text-[32px] lg:text-[64px] uppercase text-[#1e1e20] leading-none tracking-[-1px] lg:tracking-[-1.5px]">
        LATEST IDEAS AND RESEARCH
      </h1>

      {/* Row 1: Featured full width (mobile/tablet) or 2/3 (desktop) + side column (desktop only) */}
      <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[20px]">
        <div className="w-full lg:flex-[2]">
          <FeaturedCard post={featured} />
        </div>
        {side.length > 0 && (
          <div className="hidden lg:flex flex-col gap-[20px] flex-[1]">
            {side.map(post => <RegularCard key={post.slug} post={post} />)}
          </div>
        )}
      </div>

      {/* Grid section: mobile/tablet renders side cards here; desktop renders bottom 3 */}
      {(side.length > 0 || bottom.length > 0) && (
        <div className="flex flex-col gap-[16px] lg:gap-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[20px]">
            {/* Side cards: visible in grid on mobile/tablet, hidden on desktop (shown in right column above) */}
            {side.map(post => (
              <div key={`mob-${post.slug}`} className="lg:hidden">
                <RegularCard post={post} />
              </div>
            ))}
            {/* Bottom cards: always in grid */}
            {bottom.map(post => (
              <RegularCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="flex items-center gap-[12px] bg-[#1e1e20] text-white rounded-full px-[24px] py-[12px] lg:py-[20px] text-[14px] lg:text-[24px] font-medium uppercase tracking-wide hover:opacity-80 transition-opacity"
            >
              Load more blogs
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
