'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import type { BlogPost } from '@/lib/blog-data'

const INITIAL_BOTTOM = 2

function ArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

function ArrowRight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
  const [showAll, setShowAll] = useState(false)

  const featured = posts[0]
  const side = posts.slice(1, 3)
  const bottom = posts.slice(3)
  const visibleBottom = showAll ? bottom : bottom.slice(0, INITIAL_BOTTOM)
  // Show button whenever there are bottom-row posts and user hasn't expanded yet
  const showLoadMore = !showAll && bottom.length >= INITIAL_BOTTOM

  if (!featured) return null

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[48px] md:pt-[32px] lg:pt-[120px] pb-[60px] md:pb-[80px] lg:pb-[120px] flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <h1 className="font-black text-[32px] lg:text-[64px] uppercase text-[#1e1e20] leading-none tracking-[-1px] lg:tracking-[-1.5px]">
        LATEST IDEAS AND RESEARCH
      </h1>

      {/* Row 1: Featured + side column */}
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

      {/* Bottom grid */}
      {(side.length > 0 || bottom.length > 0) && (
        <div className="flex flex-col gap-[16px] lg:gap-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[20px]">
            {/* Side cards: mobile/tablet only (shown in right column above on desktop) */}
            {side.map(post => (
              <div key={`mob-${post.slug}`} className="lg:hidden">
                <RegularCard post={post} />
              </div>
            ))}
            {/* Bottom cards */}
            {visibleBottom.map(post => (
              <RegularCard key={post.slug} post={post} />
            ))}
            {/* Load more — 3rd column slot on desktop, bottom-right aligned */}
            {showLoadMore && (
              <div className="hidden lg:flex flex-col items-end justify-end" style={{ minHeight: '633px' }}>
                <button
                  onClick={() => setShowAll(true)}
                  className="bg-[#1e1e20] flex items-center gap-[12px] justify-center px-[24px] py-[20px] rounded-[50px] text-white font-medium text-[24px] uppercase hover:opacity-80 transition-opacity whitespace-nowrap cursor-pointer"
                >
                  Load more blogs
                  <ArrowRight size={24} />
                </button>
              </div>
            )}
          </div>
          {/* Load more — below grid on mobile/tablet */}
          {showLoadMore && (
            <div className="lg:hidden flex justify-end">
              <button
                onClick={() => setShowAll(true)}
                className="bg-[#1e1e20] flex items-center gap-[10px] justify-center px-[20px] py-[12px] rounded-[50px] text-white font-medium text-[14px] md:text-[16px] uppercase hover:opacity-80 transition-opacity cursor-pointer"
              >
                Load more blogs
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
