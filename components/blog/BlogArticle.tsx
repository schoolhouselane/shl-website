'use client'
import Image from 'next/image'
import { useState } from 'react'
import type { BlogPost, ContentBlock } from '@/lib/blog-data'

function ArrowUpRight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

// Group flat blocks into visual sections so adjacent paragraphs share tight gap,
// while sections (heading + content) are separated by larger gap.
// Images and quote-banners always get their own isolated group.
function groupBlocks(blocks: ContentBlock[]): ContentBlock[][] {
  const groups: ContentBlock[][] = []
  let current: ContentBlock[] = []

  for (const block of blocks) {
    if (block.type === 'image' || block.type === 'quote-banner' || block.type === 'image-pair') {
      if (current.length) { groups.push(current); current = [] }
      groups.push([block])
    } else if (block.type === 'heading' && current.length) {
      groups.push(current)
      current = [block]
    } else {
      current.push(block)
    }
  }
  if (current.length) groups.push(current)
  return groups
}

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={idx} className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#111]">
          {block.parts
            ? block.parts.map((p, i) => p.bold ? <strong key={i}>{p.text}</strong> : <span key={i}>{p.text}</span>)
            : block.text}
        </p>
      )

    case 'heading':
      return (
        <h2
          key={idx}
          className="font-black text-[18px] md:text-[21px] lg:text-[24px] text-[#111] leading-[1.1] tracking-[-0.48px]"
        >
          {block.text}
        </h2>
      )

    case 'blockquote':
      return (
        <div key={idx} className="flex gap-[12px] md:gap-[17px] items-start">
          <div className="w-[3px] min-h-[40px] shrink-0 self-stretch bg-[#111]" />
          <p className="font-bold text-[16px] md:text-[18px] lg:text-[20px] text-[#1e1e20] leading-snug">
            {block.text}
          </p>
        </div>
      )

    case 'image':
      return (
        <div key={idx} className="relative w-full aspect-[988/269] overflow-hidden">
          <Image
            src={block.src}
            alt={block.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 629px, 988px"
          />
        </div>
      )

    case 'callout':
      return (
        <div key={idx} className="bg-[#1e1e20] p-[12px] w-full">
          <p className="font-extrabold text-[14px] md:text-[15px] lg:text-[16px] text-white leading-relaxed whitespace-pre-line">
            {block.text}
          </p>
        </div>
      )

    case 'rich-list':
      return (
        <div key={idx} className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[20px]">
          {block.items.map((item, i) => (
            <p key={i} className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#111]">
              <span className="font-bold text-[#1e1e20]">{item.lead}</span>
              {item.text}
            </p>
          ))}
        </div>
      )

    case 'ordered-list':
      return (
        <ol key={idx} className="list-decimal pl-[21px] md:pl-[28px] flex flex-col gap-[12px]">
          {block.items.map((item, i) => (
            <li key={i} className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#111]">
              <span className="font-bold text-[#1e1e20]">{item.lead}</span>
              {item.text}
            </li>
          ))}
        </ol>
      )

    case 'image-pair':
      return (
        <div key={idx} className="flex flex-col md:flex-row gap-[16px] md:gap-[40px]">
          <div className="relative w-full md:w-1/2 aspect-[451/269] overflow-hidden">
            <Image src={block.src1} alt={block.alt1} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 294px, 474px" />
          </div>
          <div className="relative w-full md:w-1/2 aspect-[451/269] overflow-hidden">
            <Image src={block.src2} alt={block.alt2} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 294px, 474px" />
          </div>
        </div>
      )

    case 'quote-banner':
      return (
        <div
          key={idx}
          className="relative w-full overflow-hidden aspect-[988/269] flex items-center px-[16px] md:px-[24px] lg:px-[30px]"
        >
          <Image src={block.src} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 629px, 988px" />
          <div className="relative z-10 flex items-start gap-[16px] md:gap-[40px] lg:gap-[100px] w-full">
            <div className="relative h-[20px] md:h-[26px] lg:h-[34px] w-[50px] md:w-[64px] lg:w-[86px] shrink-0">
              <Image src="/logo-white.svg" alt="SHL" fill className="object-contain object-left" sizes="86px" />
            </div>
            <p
              className="font-black text-[18px] md:text-[26px] lg:text-[48px] leading-tight text-[#f2d836] uppercase tracking-[-1.6px] text-right"
              style={{ textShadow: '3px 1px 4px #f64343' }}
            >
              {block.text}
            </p>
          </div>
        </div>
      )

    default:
      return null
  }
}

// ─── Main component ────────────────────────────────────────────────────────────

interface Props {
  post: BlogPost
}

export default function BlogArticle({ post }: Props) {
  const [copied, setCopied] = useState(false)

  function copyLink() {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const articleUrl = typeof window !== 'undefined' ? window.location.href : ''
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`
  const xShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`

  const groups = post.body ? groupBlocks(post.body) : []

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[24px] md:pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[120px]">

      {/* ── Title row ─────────────────────────────────────────────────────────── */}
      <div className="pb-[24px] md:pb-[40px] lg:pb-[60px]">
        {/* Mobile: byline above title */}
        <p className="md:hidden text-[11px] font-normal uppercase text-[#777] tracking-wide mb-[8px]">
          by {post.author.name}
        </p>
        <div className="flex items-start justify-between gap-[16px] md:gap-[24px]">
          <h1 className="font-black text-[28px] md:text-[40px] lg:text-[64px] uppercase text-[#1e1e20] leading-none">
            {post.title}
          </h1>
          {/* Tablet + desktop: byline right, border-right per Figma */}
          <div className="hidden md:flex border-r border-[#1e1e20] items-start pt-[4px] pr-[16px] lg:pr-[20px] shrink-0">
            <p className="font-normal text-[13px] md:text-[16px] lg:text-[24px] uppercase text-[#1e1e20] whitespace-nowrap">
              by {post.author.name}
            </p>
          </div>
        </div>
      </div>

      {/* ── Two-column layout ─────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:gap-[28px] lg:gap-0 items-start">

        {/* Main content */}
        <div className="flex flex-col gap-[28px] md:gap-[32px] lg:gap-[40px] w-full md:max-w-[629px] lg:max-w-[988px] shrink-0">
          {groups.map((group, gi) => {
            const isSolo = group.length === 1 && (group[0].type === 'image' || group[0].type === 'quote-banner' || group[0].type === 'image-pair')
            if (isSolo) return renderBlock(group[0], gi)
            return (
              <div key={gi} className="flex flex-col gap-[12px]">
                {group.map((block, bi) => renderBlock(block, bi))}
              </div>
            )
          })}
        </div>

        {/* ── Sidebar — hidden on mobile ─────────────────────────────────────── */}
        <aside className="hidden md:flex flex-col gap-[40px] flex-1 border-l border-[#d0d0d0] pl-[16px] lg:pl-[29px] mt-0">

          {/* Share */}
          <div className="flex flex-col gap-[8px]">
            <p className="text-[9px] font-extrabold text-[#ababab] tracking-[1.44px] uppercase">
              Share this article
            </p>
            <a
              href={linkedInShare}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-black flex items-center gap-[4px] py-[8px] hover:opacity-60 transition-opacity"
            >
              <span className="text-[14px] lg:text-[16px] text-[#1e1e20] whitespace-nowrap">Share on LinkedIn</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href={xShare}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-black flex items-center gap-[4px] py-[8px] w-fit hover:opacity-60 transition-opacity"
            >
              <span className="text-[14px] lg:text-[16px] text-[#1e1e20] whitespace-nowrap">Share on X</span>
              <ArrowUpRight size={18} />
            </a>
            <button
              onClick={copyLink}
              className="border-b border-black flex items-center gap-[4px] py-[8px] w-fit hover:opacity-60 transition-opacity cursor-pointer"
            >
              <span className="text-[14px] lg:text-[16px] text-[#1e1e20] whitespace-nowrap">
                {copied ? 'Copied!' : 'Copy link'}
              </span>
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Related articles */}
          {post.relatedArticles.length > 0 && (
            <div className="flex flex-col gap-[18px]">
              <p className="text-[9px] font-extrabold text-[#ababab] tracking-[1.44px] uppercase">
                Related Articles
              </p>
              <div className="flex flex-col gap-[24px]">
                {post.relatedArticles.map((article, i) => (
                  <div key={article.slug}>
                    <a href={`/blog/${article.slug}`} className="flex gap-[12px] items-center group">
                      <div className="relative shrink-0 w-[80px] h-[80px] lg:w-[114px] lg:h-[114px] overflow-hidden">
                        <Image
                          src={article.thumbnail}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 1280px) 80px, 114px"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] lg:gap-[12px] flex-1">
                        <p className="font-black text-[13px] lg:text-[18px] text-[#111] leading-[1.1] tracking-[-0.3px]">
                          {article.title}
                        </p>
                        <p className="text-[12px] lg:text-[14px] text-[#595959] leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </a>
                    {i < post.relatedArticles.length - 1 && (
                      <div className="mt-[24px] border-b border-[#e0e0e0]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* About the writer */}
          <div className="flex flex-col gap-[18px]">
            <p className="text-[9px] font-extrabold text-[#ababab] tracking-[1.44px] uppercase">
              About the Writer
            </p>
            <div className="flex gap-[12px] items-start">
              <div className="relative shrink-0 w-[80px] h-[78px] lg:w-[115px] lg:h-[113px] overflow-hidden bg-[#313131]">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1280px) 80px, 115px"
                />
              </div>
              <div className="flex flex-col gap-[6px] lg:gap-[12px] flex-1">
                <div className="flex flex-col gap-[4px]">
                  <p className="font-bold text-[14px] lg:text-[18px] text-[#111] leading-[1.1] tracking-[-0.36px]">
                    {post.author.name}
                  </p>
                  <p className="text-[9px] font-extrabold text-[#ababab] tracking-[1.44px] uppercase">
                    {post.author.role}
                  </p>
                </div>
                <p className="text-[12px] lg:text-[15px] text-[#595959] leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>

        </aside>
      </div>

      {/* ── Mobile sidebar accordion ──────────────────────────────────────────── */}
      <div className="md:hidden mt-[40px] pt-[32px] border-t border-[#d0d0d0] flex flex-col gap-[32px]">

        {/* Share */}
        <div className="flex flex-col gap-[8px]">
          <p className="text-[9px] font-extrabold text-[#ababab] tracking-[1.44px] uppercase mb-[4px]">
            Share this article
          </p>
          <a href={linkedInShare} target="_blank" rel="noopener noreferrer"
            className="border-b border-black flex items-center gap-[4px] py-[8px] w-fit">
            <span className="text-[14px] text-[#1e1e20]">Share on LinkedIn</span>
            <ArrowUpRight size={16} />
          </a>
          <a href={xShare} target="_blank" rel="noopener noreferrer"
            className="border-b border-black flex items-center gap-[4px] py-[8px] w-fit">
            <span className="text-[14px] text-[#1e1e20]">Share on X</span>
            <ArrowUpRight size={16} />
          </a>
          <button onClick={copyLink}
            className="border-b border-black flex items-center gap-[4px] py-[8px] w-fit cursor-pointer">
            <span className="text-[14px] text-[#1e1e20]">{copied ? 'Copied!' : 'Copy link'}</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* About the writer */}
        <div className="flex flex-col gap-[12px]">
          <p className="text-[9px] font-extrabold text-[#ababab] tracking-[1.44px] uppercase">
            About the Writer
          </p>
          <div className="flex gap-[12px] items-start">
            <div className="relative shrink-0 w-[64px] h-[64px] overflow-hidden bg-[#313131]">
              <Image src={post.author.image} alt={post.author.name} fill className="object-cover object-top" sizes="64px" />
            </div>
            <div className="flex flex-col gap-[4px] flex-1">
              <p className="font-bold text-[14px] text-[#111]">{post.author.name}</p>
              <p className="text-[9px] font-extrabold text-[#ababab] tracking-[1.44px] uppercase">{post.author.role}</p>
              <p className="text-[12px] text-[#595959] leading-relaxed mt-[4px]">{post.author.bio}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
