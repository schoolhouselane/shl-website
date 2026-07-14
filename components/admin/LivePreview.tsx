'use client'

import type { ContentBlock } from '@/lib/blog-data'

type InlinePart = { text: string; bold?: boolean; href?: string }

function renderPart(p: InlinePart, i: number) {
  if (p.href) {
    const inner = p.bold ? <strong>{p.text}</strong> : p.text
    return (
      <a key={i} href={p.href} className="text-[#111] underline decoration-[#111]/40 underline-offset-2">
        {inner}
      </a>
    )
  }
  return p.bold ? <strong key={i}>{p.text}</strong> : <span key={i}>{p.text}</span>
}

export interface PreviewData {
  title: string
  category: string
  heroImage: string
  publishedAt: string
  authorName: string
  authorRole: string
  authorBio: string
  authorImage: string
  body: ContentBlock[]
}

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case 'paragraph':
      if (block.dark) return (
        <p key={idx} className="text-[16px] leading-relaxed text-[#111] font-semibold">
          {block.parts
            ? block.parts.map((p, i) => renderPart(p, i))
            : block.text}
        </p>
      )
      return (
        <p key={idx} className="text-[15px] leading-relaxed text-[#111]">
          {block.parts
            ? block.parts.map((p, i) => renderPart(p, i))
            : block.text}
        </p>
      )

    case 'heading':
      return (
        <h2 key={idx} className="font-black text-[18px] text-[#111] leading-[1.1] tracking-[-0.4px] pt-2">
          {block.text}
        </h2>
      )

    case 'blockquote':
      return (
        <div key={idx} className="flex gap-[12px] items-start">
          <div className="w-[3px] min-h-[40px] shrink-0 self-stretch bg-[#111]" />
          <p className="font-bold text-[15px] text-[#1e1e20] leading-snug">{block.text}</p>
        </div>
      )

    case 'image':
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={idx}
          src={block.src}
          alt={block.alt}
          className="w-full h-auto"
          style={{ aspectRatio: block.width && block.height ? `${block.width}/${block.height}` : '16/9', objectFit: 'cover' }}
        />
      )

    case 'image-pair':
      return (
        <div key={idx} className="grid grid-cols-2 gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src1} alt={block.alt1} className="w-full aspect-square object-cover" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src2} alt={block.alt2} className="w-full aspect-square object-cover" />
        </div>
      )

    case 'callout':
      return (
        <div key={idx} className="bg-[#1e1e20] p-[12px]">
          <p className="font-extrabold text-[13px] text-white leading-relaxed whitespace-pre-line">{block.text}</p>
        </div>
      )

    case 'rich-list':
      if (block.dark) return (
        <div key={idx} className="bg-[#1e1e20] p-[12px]">
          <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
            {block.items.map((item, i) => (
              <li key={i} className="text-[13px] text-white leading-relaxed">
                <span className="font-extrabold">{item.lead}</span>
                <span className="font-normal">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )
      return (
        <div key={idx} className="flex flex-col gap-[10px]">
          {block.items.map((item, i) => (
            <div key={i} className="flex gap-[10px] items-start">
              <div className="w-[3px] h-[3px] rounded-full bg-[#111] shrink-0 mt-[8px]" />
              <p className="text-[14px] text-[#111] leading-relaxed">
                <span className="font-extrabold">{item.lead}</span>
                <span>{item.text}</span>
              </p>
            </div>
          ))}
        </div>
      )

    case 'ordered-list':
      return (
        <div key={idx} className="flex flex-col gap-[10px]">
          {block.items.map((item, i) => (
            <div key={i} className="flex gap-[10px] items-start">
              <span className="font-black text-[12px] text-[#ababab] shrink-0 w-5 text-right">{i + 1}.</span>
              <p className="text-[14px] text-[#111] leading-relaxed">
                <span className="font-extrabold">{item.lead}</span>
                <span>{item.text}</span>
              </p>
            </div>
          ))}
        </div>
      )

    case 'quote-banner':
      return (
        <div key={idx} className="relative overflow-hidden min-h-[120px] flex items-center justify-center p-6"
          style={{ backgroundImage: block.src ? `url(${block.src})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/50" />
          <p className="relative text-white font-black text-[16px] text-center leading-snug">{block.text}</p>
        </div>
      )

    default:
      return null
  }
}

export default function LivePreview({ data }: { data: PreviewData }) {
  const date = data.publishedAt
    ? new Date(data.publishedAt).toLocaleDateString('en-IE', { year: 'numeric', month: 'long', day: 'numeric' })
    : ''

  return (
    <div className="bg-white min-h-full font-sans">

      {/* Category strip */}
      <div className="bg-[#f5f3ef] px-5 py-2 flex items-center gap-3">
        <span className="text-[10px] font-extrabold text-[#ababab] tracking-[1.4px] uppercase">
          {data.category || 'Category'}
        </span>
      </div>

      {/* Hero image */}
      {data.heroImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={data.heroImage} alt={data.title} className="w-full aspect-[988/462] object-cover" />
      ) : (
        <div className="w-full aspect-[988/462] bg-[#e8e4df] flex items-center justify-center">
          <span className="text-[#bbb] text-sm">Hero image</span>
        </div>
      )}

      {/* Article layout */}
      <div className="px-5 py-6 flex flex-col gap-0">

        {/* Title */}
        <h1 className="font-black text-[22px] uppercase leading-[1.05] tracking-[-0.5px] text-[#1e1e20]">
          {data.title || 'Post title'}
        </h1>

        {/* Author + date */}
        <div className="flex items-center gap-3 mt-4 pb-4 border-b border-[#e8e4df]">
          {data.authorImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.authorImage} alt={data.authorName} className="w-8 h-8 rounded-full object-cover object-top bg-[#313131]" />
          )}
          <div>
            <p className="text-[12px] font-bold text-[#111]">{data.authorName}</p>
            <p className="text-[10px] text-[#999]">{date}</p>
          </div>
        </div>

        {/* Content blocks */}
        <div className="flex flex-col gap-5 mt-5">
          {data.body.length > 0
            ? data.body.map((block, i) => renderBlock(block, i))
            : <p className="text-[#bbb] text-sm italic">Content blocks will appear here…</p>
          }
        </div>

      </div>
    </div>
  )
}
