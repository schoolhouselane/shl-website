'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import type { BlogPost } from '@/lib/blog-data'

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
    <Link href={`/blog/${post.slug}`} className="flex flex-col group overflow-hidden h-full">
      <div className="hidden lg:block relative w-full flex-1 overflow-hidden">
        <Image src={img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1280px) 100vw, 66vw" priority />
      </div>
      {/* Mobile + Tablet image */}
      <div className="relative w-full h-[220px] md:h-[266px] lg:hidden overflow-hidden">
        <Image src={img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="100vw" priority />
      </div>
      <div className="bg-[#1e1e20] px-[13px] lg:px-[24px] py-[24px] lg:py-[30px] flex flex-col gap-[12px] lg:gap-[20px] lg:shrink-0">
        <div className="flex items-start justify-between gap-[12px]">
          <p className="font-black text-[20px] md:text-[24px] lg:text-[28px] text-white leading-tight flex-1">{post.title}</p>
          <div className="bg-white flex items-center justify-center rounded-full w-[39px] h-[39px] lg:w-[55px] lg:h-[55px] shrink-0 group-hover:scale-110 transition-transform text-[#1e1e20]">
            <ArrowUpRight />
          </div>
        </div>
        {post.seoDescription && (
          <p className="text-[14px] md:text-[16px] text-white leading-relaxed">{post.seoDescription}</p>
        )}
      </div>
    </Link>
  )
}

function RegularCard({ post }: { post: BlogPost }) {
  const img = post.listingImage ?? post.heroImage
  return (
    <Link href={`/blog/${post.slug}`} className="flex flex-col group overflow-hidden h-full">
      <div className="relative w-full h-[180px] md:h-[211px] lg:hidden overflow-hidden">
        <Image src={img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="hidden lg:block relative w-full overflow-hidden" style={{ height: '445px' }}>
        <Image src={img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
      </div>
      <div className="bg-[#1e1e20] px-[13px] py-[24px] lg:pt-[26px] lg:pb-[30px] flex flex-col gap-[12px] lg:gap-[20px] flex-1">
        <div className="flex items-start justify-between gap-[12px]">
          <p className="font-black text-[16px] md:text-[24px] text-white leading-tight flex-1">{post.title}</p>
          <div className="bg-white flex items-center justify-center rounded-full w-[39px] h-[39px] lg:w-[55px] lg:h-[55px] shrink-0 group-hover:scale-110 transition-transform text-[#1e1e20]">
            <ArrowUpRight />
          </div>
        </div>
        {post.seoDescription && (
          <p className="text-[13px] md:text-[16px] text-white leading-relaxed">{post.seoDescription}</p>
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
  const side    = posts.slice(1, 3)   // blog 2 + 3 → right column in row 1
  const gallery = posts.slice(3)      // blog 4+ → 3-col gallery rows
  const visibleGallery = showAll ? gallery : gallery.slice(0, 3)

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

      {/* ── Mobile + Tablet ── */}
      <div className="lg:hidden flex flex-col gap-[16px] md:gap-[20px]">
        <FeaturedCard post={featured} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[20px]">
          {side.map(post => <RegularCard key={post.slug} post={post} />)}
        </div>
        {visibleGallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[20px]">
            {visibleGallery.map(post => <RegularCard key={post.slug} post={post} />)}
          </div>
        )}
        {!showAll && gallery.length > 3 && (
          <div className="flex justify-end">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#1e1e20] flex items-center gap-[10px] px-[20px] py-[12px] rounded-[50px] text-white font-medium text-[14px] md:text-[16px] uppercase hover:opacity-80 transition-opacity"
            >
              Load more blogs <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* ── Desktop ── */}
      {/* Row 1: [Featured col-span-2 row-span-2] [Blog 2] [Blog 3] */}
      <div
        className="hidden lg:grid lg:gap-[20px]"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {/* Featured — spans 2 cols × 2 rows */}
        <div style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}>
          <FeaturedCard post={featured} />
        </div>
        {/* Blog 2 + Blog 3 in col 3 */}
        {side.map(post => (
          <RegularCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Row 2+: 3-col gallery */}
      {visibleGallery.length > 0 && (
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-[20px]">
          {visibleGallery.map(post => (
            <RegularCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Load more */}
      {!showAll && gallery.length > 3 && (
        <div className="hidden lg:flex justify-end">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#1e1e20] flex items-center gap-[12px] px-[24px] py-[20px] rounded-[50px] text-white font-medium text-[20px] uppercase hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Load more blogs <ArrowRight size={24} />
          </button>
        </div>
      )}
    </section>
  )
}
