'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useInView } from '@/hooks/useInView'
import type { BlogPost } from '@/lib/blog-data'
import { BLOG_CATEGORIES, normalizeTags } from '@/lib/blog-categories'
import CategoryTag from './CategoryTag'

const PER_PAGE = 9 // 3 × 3 grid, matching the Figma page
const ALL = 'All'

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

function Card({ post, hidden = false }: { post: BlogPost; hidden?: boolean }) {
  const img = post.listingImage ?? post.heroImage
  return (
    // `hidden` swaps display instead of unmounting, so every post stays in the
    // server-rendered HTML for crawlers that don't run JS — filtering and paging
    // are presentational only. Never combine with `flex`: Tailwind's display
    // utilities would fight over specificity.
    <Link
      href={`/blog/${post.slug}`}
      className={`${hidden ? 'hidden' : 'flex'} flex-col group overflow-hidden h-full`}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={img}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="bg-[#1e1e20] px-[13px] py-[24px] lg:pt-[26px] lg:pb-[30px] flex flex-col gap-[12px] lg:gap-[20px] flex-1">
        <div className="flex items-start justify-between gap-[12px]">
          <div className="flex flex-col gap-[10px] lg:gap-[15px] flex-1">
            <CategoryTag post={post} />
            <p className="font-black text-[16px] md:text-[20px] text-white leading-tight">{post.title}</p>
          </div>
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
  const [active, setActive] = useState<string>(ALL)
  const [page, setPage] = useState(0)

  // Categories that actually have posts, in the canonical BLOG_CATEGORIES order.
  const categories = useMemo(() => {
    const present = new Set(posts.flatMap(p => normalizeTags(p.tags?.length ? p.tags : p.category)))
    return BLOG_CATEGORIES.filter(c => present.has(c))
  }, [posts])

  // Deep links like /blog?category=Marketing. Read on mount rather than through
  // useSearchParams so the page keeps its current rendering mode and needs no
  // Suspense boundary — the server HTML is always the unfiltered list.
  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get('category')
    if (!raw) return
    const match = BLOG_CATEGORIES.find(c => c.toLowerCase() === raw.toLowerCase())
    if (match) setActive(match)
  }, [])

  const visible = useMemo(
    () =>
      active === ALL
        ? posts
        : posts.filter(p => normalizeTags(p.tags?.length ? p.tags : p.category).includes(active as never)),
    [posts, active],
  )

  const pageCount = Math.max(1, Math.ceil(visible.length / PER_PAGE))
  const current = Math.min(page, pageCount - 1)

  function selectCategory(next: string) {
    setActive(next)
    setPage(0)
    // Keep the URL shareable without a navigation/re-render.
    const url = new URL(window.location.href)
    if (next === ALL) url.searchParams.delete('category')
    else url.searchParams.set('category', next)
    window.history.replaceState(null, '', url)
  }

  if (!posts.length) return null

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[48px] md:pt-[32px] lg:pt-[120px] pb-[60px] md:pb-[80px] lg:pb-[120px] flex flex-col gap-[24px] md:gap-[32px] lg:gap-[40px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div className="flex flex-col gap-[16px] lg:gap-[24px]">
        <h1 className="font-black text-[32px] lg:text-[64px] uppercase text-[#1e1e20] leading-none tracking-[-1px] lg:tracking-[-1.5px]">
          LATEST IDEAS AND RESEARCH
        </h1>
        <p className="text-[16px] lg:text-[20px] text-[#111] leading-normal lg:max-w-[981px]">
          If you&rsquo;re thinking about how AI is reshaping brand, creative strategy, and enterprise
          value this is one of the better collections out there right now.
        </p>
      </div>

      {/* ── Category filter ── */}
      <div className="flex flex-col gap-[16px] lg:gap-[24px]">
        <div className="flex flex-wrap items-center gap-[12px] lg:gap-[20px]">
          {[ALL, ...categories].map(cat => {
            const isActive = cat === active
            return (
              <button
                key={cat}
                type="button"
                onClick={() => selectCategory(cat)}
                aria-pressed={isActive}
                className={`flex items-center justify-center gap-[8px] lg:gap-[12px] px-[16px] lg:px-[24px] py-[8px] lg:py-[12px] rounded-[50px] border font-medium text-[13px] lg:text-[16px] uppercase whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-[#1e1e20] border-[#1e1e20] text-white'
                    : 'border-[#1e1e20] text-[#1e1e20] hover:bg-[#1e1e20]/5'
                }`}
              >
                {cat === ALL ? 'All blogs' : cat}
                <ArrowRight size={18} />
              </button>
            )
          })}
        </div>

        <div className="flex items-start justify-between gap-[16px] text-[11px] lg:text-[12px] uppercase text-[#777] leading-normal">
          <p>
            {active === ALL ? 'Blogs' : `${active} blogs`} are categorised by the latest post
          </p>
          <p className="whitespace-nowrap">
            {visible.length} {visible.length === 1 ? 'blog' : 'blogs'} showing
          </p>
        </div>
      </div>

      {/* ── Grid ── */}
      {visible.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px]">
          {visible.map((post, i) => (
            <Card
              key={post.slug}
              post={post}
              hidden={i < current * PER_PAGE || i >= (current + 1) * PER_PAGE}
            />
          ))}
        </div>
      ) : (
        <p className="text-[16px] text-[#777] py-[40px]">No blogs in this category yet.</p>
      )}

      {/* ── Pagination ── */}
      {pageCount > 1 && (
        <div className="flex items-center justify-end gap-[12px] lg:gap-[16px]">
          <button
            type="button"
            onClick={() => setPage(current - 1)}
            disabled={current === 0}
            aria-label="Previous page"
            className="flex items-center justify-center rounded-full w-[55px] h-[55px] lg:w-[82px] lg:h-[82px] transition-opacity disabled:opacity-40 disabled:cursor-not-allowed bg-[#1e1e20]/10 text-[#1e1e20] enabled:hover:bg-[#1e1e20]/20"
          >
            <span className="rotate-180 flex"><ArrowRight size={24} /></span>
          </button>
          <button
            type="button"
            onClick={() => setPage(current + 1)}
            disabled={current >= pageCount - 1}
            aria-label="Next page"
            className="flex items-center justify-center rounded-full w-[55px] h-[55px] lg:w-[82px] lg:h-[82px] bg-[#1e1e20] text-white transition-opacity disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:opacity-80"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      )}
    </section>
  )
}
