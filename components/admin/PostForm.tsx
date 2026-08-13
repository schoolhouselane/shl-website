'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import type { ContentBlock } from '@/lib/blog-data'
import { BLOG_CATEGORIES, normalizeCategory, normalizeTags } from '@/lib/blog-categories'
import LivePreview from './LivePreview'

// ─── Editor block types ───────────────────────────────────────────────────────

type ListItem = { lead: string; text: string }

type EditorBlock =
  | { id: string; type: 'paragraph'; content: string; dark: boolean }
  | { id: string; type: 'heading'; content: string }
  | { id: string; type: 'blockquote'; content: string }
  | { id: string; type: 'image'; src: string; alt: string; width: string; height: string }
  | { id: string; type: 'image-pair'; src1: string; alt1: string; src2: string; alt2: string }
  | { id: string; type: 'callout'; content: string }
  | { id: string; type: 'rich-list'; items: ListItem[]; dark: boolean }
  | { id: string; type: 'ordered-list'; items: ListItem[] }
  | { id: string; type: 'quote-banner'; src: string; content: string }

function uid() { return Math.random().toString(36).slice(2, 9) }

// ─── Inline markdown parsing ─────────────────────────────────────────────────
// Supports **bold** and [text](href) for internal/external links.

type InlinePart = { text: string; bold?: boolean; href?: string }

function parseInline(content: string): InlinePart[] {
  const parts: InlinePart[] = []
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0, m
  while ((m = re.exec(content)) !== null) {
    if (m.index > last) parts.push({ text: content.slice(last, m.index) })
    if (m[1] !== undefined) parts.push({ text: m[1], bold: true })
    else parts.push({ text: m[2], href: m[3].trim() })
    last = m.index + m[0].length
  }
  if (last < content.length) parts.push({ text: content.slice(last) })
  return parts
}

function serializeInline(parts: InlinePart[]): string {
  return parts
    .map(p => p.href ? `[${p.text}](${p.href})` : p.bold ? `**${p.text}**` : p.text)
    .join('')
}

// ─── Convert editor block → ContentBlock ─────────────────────────────────────

function toContentBlock(b: EditorBlock): ContentBlock {
  if (b.type === 'paragraph') {
    const parts = parseInline(b.content)
    // Plain single-run text: store as `text` for cleaner output
    if (parts.length <= 1 && !parts[0]?.bold && !parts[0]?.href) {
      return { type: 'paragraph', ...(b.dark ? { dark: true } : {}), text: b.content }
    }
    return { type: 'paragraph', ...(b.dark ? { dark: true } : {}), parts }
  }
  if (b.type === 'heading') return { type: 'heading', text: b.content }
  if (b.type === 'blockquote') return { type: 'blockquote', text: b.content }
  if (b.type === 'image') return {
    type: 'image', src: b.src, alt: b.alt,
    ...(b.width ? { width: parseInt(b.width) } : {}),
    ...(b.height ? { height: parseInt(b.height) } : {}),
  }
  if (b.type === 'image-pair') return { type: 'image-pair', src1: b.src1, alt1: b.alt1, src2: b.src2, alt2: b.alt2 }
  if (b.type === 'callout') return { type: 'callout', text: b.content }
  if (b.type === 'rich-list') return { type: 'rich-list', ...(b.dark ? { dark: true } : {}), items: b.items }
  if (b.type === 'ordered-list') return { type: 'ordered-list', items: b.items }
  return { type: 'quote-banner', src: b.src, text: b.content }
}

// ─── Convert ContentBlock → editor block ─────────────────────────────────────

function fromContentBlock(cb: ContentBlock): EditorBlock {
  const id = uid()
  if (cb.type === 'paragraph') {
    const content = cb.parts ? serializeInline(cb.parts) : (cb.text ?? '')
    return { id, type: 'paragraph', content, dark: !!(cb.dark) }
  }
  if (cb.type === 'heading') return { id, type: 'heading', content: cb.text }
  if (cb.type === 'blockquote') return { id, type: 'blockquote', content: cb.text }
  if (cb.type === 'image') return { id, type: 'image', src: cb.src, alt: cb.alt, width: String(cb.width ?? ''), height: String(cb.height ?? '') }
  if (cb.type === 'image-pair') return { id, type: 'image-pair', src1: cb.src1, alt1: cb.alt1, src2: cb.src2, alt2: cb.alt2 }
  if (cb.type === 'callout') return { id, type: 'callout', content: cb.text }
  if (cb.type === 'rich-list') return { id, type: 'rich-list', items: cb.items, dark: !!(cb.dark) }
  if (cb.type === 'ordered-list') return { id, type: 'ordered-list', items: cb.items }
  return { id, type: 'quote-banner', src: cb.src, content: cb.text }
}

// ─── Default new blocks ───────────────────────────────────────────────────────

function newBlock(type: EditorBlock['type']): EditorBlock {
  const id = uid()
  if (type === 'paragraph') return { id, type, content: '', dark: false }
  if (type === 'heading') return { id, type, content: '' }
  if (type === 'blockquote') return { id, type, content: '' }
  if (type === 'image') return { id, type, src: '', alt: '', width: '', height: '' }
  if (type === 'image-pair') return { id, type, src1: '', alt1: '', src2: '', alt2: '' }
  if (type === 'callout') return { id, type, content: '' }
  if (type === 'rich-list') return { id, type, items: [{ lead: '', text: '' }], dark: false }
  if (type === 'ordered-list') return { id, type, items: [{ lead: '', text: '' }] }
  return { id, type: 'quote-banner', src: '', content: '' }
}

// ─── Helper: slug from title ──────────────────────────────────────────────────

function toSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()
}

// ─── Form data ────────────────────────────────────────────────────────────────

export interface PostFormData {
  title: string
  slug: string
  category: string
  tags?: string[]
  heroImage: string
  listingImage: string
  seoTitle: string
  seoDescription: string
  keywords: string
  publishedAt: string
  authorName: string
  authorRole: string
  authorBio: string
  authorImage: string
  body: ContentBlock[]
  isPublished: boolean
  scheduledAt?: string
  updatedAt?: string
}

function formatScheduled(iso: string) {
  return new Date(iso).toLocaleString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

function toDatetimeLocal(iso: string) {
  return iso.slice(0, 16)
}

interface Props {
  postId?: number
  initialData?: PostFormData
}

// ─── Block type colours ───────────────────────────────────────────────────────

const BLOCK_COLORS: Record<string, string> = {
  paragraph: 'bg-[#e8f4e8] text-[#2a6b2a]',
  heading: 'bg-[#e8eaf4] text-[#3a4dbf]',
  blockquote: 'bg-[#f4e8e8] text-[#b04040]',
  image: 'bg-[#f4f0e8] text-[#8a6430]',
  'image-pair': 'bg-[#f4f0e8] text-[#8a6430]',
  callout: 'bg-[#1e1e20] text-white',
  'rich-list': 'bg-[#e8f4f0] text-[#2a7060]',
  'ordered-list': 'bg-[#e8f4f0] text-[#2a7060]',
  'quote-banner': 'bg-[#f4e8f4] text-[#7a3a8a]',
}

const BLOCK_LABELS: Record<string, string> = {
  paragraph: 'Paragraph',
  heading: 'Heading',
  blockquote: 'Blockquote',
  image: 'Image',
  'image-pair': 'Image Pair',
  callout: 'Callout',
  'rich-list': 'Rich List',
  'ordered-list': 'Ordered List',
  'quote-banner': 'Quote Banner',
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function PostForm({ postId, initialData }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const today = new Date().toISOString().slice(0, 10)

  const [meta, setMeta] = useState({
    title: initialData?.title ?? '',
    slug: initialData?.slug ?? '',
    // Normalized so a legacy value (e.g. 'Branding') maps onto a real <option>
    // instead of leaving the select blank and silently rewriting on save.
    category: normalizeCategory(initialData?.category),
    // Multi-tag: a post shows under every tag in the listing filter.
    tags: normalizeTags(initialData?.tags?.length ? initialData.tags : initialData?.category) as string[],
    heroImage: initialData?.heroImage ?? '',
    listingImage: initialData?.listingImage ?? '',
    seoTitle: initialData?.seoTitle ?? '',
    seoDescription: initialData?.seoDescription ?? '',
    keywords: initialData?.keywords ?? '',
    publishedAt: initialData?.publishedAt ?? today,
    authorName: initialData?.authorName ?? 'Darren McGrath',
    authorRole: initialData?.authorRole ?? 'Partner',
    authorBio: initialData?.authorBio ?? 'A Cannes Lion-winning creative strategist with 25 years of experience.',
    authorImage: initialData?.authorImage ?? '/images/blog/blog-author.webp',
  })

  const [blocks, setBlocks] = useState<EditorBlock[]>(
    () => (Array.isArray(initialData?.body) ? initialData.body : []).map(fromContentBlock)
  )
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [showAddMenu, setShowAddMenu] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [showAuthor, setShowAuthor] = useState(false)
  const [scheduledAt, setScheduledAt] = useState(initialData?.scheduledAt ?? '')
  const [scheduleInput, setScheduleInput] = useState('')
  const [showScheduler, setShowScheduler] = useState(false)
  const [showAiPanel, setShowAiPanel] = useState(false)
  const [aiContent, setAiContent] = useState('')
  const [aiImages, setAiImages] = useState<string[]>([])
  const [aiStatus, setAiStatus] = useState<'idle' | 'generating' | 'done' | 'error'>('idle')
  const [aiError, setAiError] = useState('')

  // `tags` is a string[]; every other meta field is a string.
  function setMf<K extends keyof typeof meta>(key: K, val: (typeof meta)[K]) {
    setMeta(m => ({ ...m, [key]: val }))
  }

  function onTitleChange(val: string) {
    setMeta(m => ({ ...m, title: val, slug: m.slug || toSlug(val) }))
  }

  function updateBlock<T extends EditorBlock>(id: string, patch: Partial<T>) {
    setBlocks(bs => bs.map(b => b.id === id ? ({ ...b, ...patch } as EditorBlock) : b))
  }

  function addBlock(type: EditorBlock['type']) {
    const b = newBlock(type)
    setBlocks(bs => [...bs, b])
    setExpandedId(b.id)
    setShowAddMenu(false)
  }

  function removeBlock(id: string) {
    setBlocks(bs => bs.filter(b => b.id !== id))
    if (expandedId === id) setExpandedId(null)
  }

  function moveBlock(id: string, dir: 'up' | 'down') {
    setBlocks(bs => {
      const i = bs.findIndex(b => b.id === id)
      if (i < 0) return bs
      const j = dir === 'up' ? i - 1 : i + 1
      if (j < 0 || j >= bs.length) return bs
      const next = [...bs]
      ;[next[i], next[j]] = [next[j], next[i]]
      return next
    })
  }

  async function save(publish: boolean, scheduleOverride?: string | null): Promise<number | null> {
    if (!meta.listingImage.trim()) {
      setSaveStatus('error')
      setErrorMsg('Listing / Gallery image is required')
      return null
    }
    if (!meta.seoTitle.trim()) {
      setSaveStatus('error')
      setErrorMsg('Meta title is required')
      return null
    }
    if (!meta.seoDescription.trim()) {
      setSaveStatus('error')
      setErrorMsg('Meta description is required')
      return null
    }
    setSaveStatus('saving')
    setErrorMsg('')

    const finalScheduled = publish ? null : (scheduleOverride !== undefined ? scheduleOverride : (scheduledAt || null))

    const body = blocks.map(toContentBlock)
    const payload = {
      slug: meta.slug,
      title: meta.title,
      category: meta.tags[0] ?? meta.category,
      tags: meta.tags,
      heroImage: meta.heroImage,
      listingImage: meta.listingImage,
      seoTitle: meta.seoTitle,
      seoDescription: meta.seoDescription,
      keywords: meta.keywords.split(',').map(k => k.trim()).filter(Boolean),
      publishedAt: meta.publishedAt,
      authorName: meta.authorName,
      authorRole: meta.authorRole,
      authorBio: meta.authorBio,
      authorImage: meta.authorImage,
      body,
      isPublished: publish,
      scheduledAt: finalScheduled,
    }

    try {
      if (postId) {
        const res = await fetch(`/api/admin/blog/${postId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error((await res.json()).error)
        setScheduledAt(finalScheduled ?? '')
        setSaveStatus('saved')
        setTimeout(() => setSaveStatus('idle'), 3000)
        return postId
      } else {
        const res = await fetch('/api/admin/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error((await res.json()).error)
        const { id } = await res.json()
        setScheduledAt(finalScheduled ?? '')
        // Go to the edit page so the new post has an id (avoids duplicate
        // inserts on re-save) — never redirect to the public blog page.
        startTransition(() => router.push(`/admin/blog/${id}/edit`))
        return id as number
      }
    } catch (err) {
      setSaveStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Save failed')
      return null
    }
  }

  async function saveScheduled() {
    if (!scheduleInput) return
    const iso = new Date(scheduleInput).toISOString()
    await save(false, iso)
    setShowScheduler(false)
    setScheduleInput('')
  }

  async function generateBlocks() {
    if (!aiContent.trim()) return
    setAiStatus('generating')
    setAiError('')
    try {
      const res = await fetch('/api/admin/blog/generate-blocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: aiContent, images: aiImages.filter(Boolean) }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error ?? 'Failed')
      const newBlocks: EditorBlock[] = json.blocks.map((cb: Parameters<typeof fromContentBlock>[0]) => fromContentBlock(cb))
      setBlocks(newBlocks)
      // Only fill SEO fields from AI when the editor left them blank — never
      // overwrite meta tags an SEO expert has already written by hand.
      setMeta(m => ({
        ...m,
        seoTitle: m.seoTitle.trim() ? m.seoTitle : (json.seoTitle ?? m.seoTitle),
        seoDescription: m.seoDescription.trim() ? m.seoDescription : (json.seoDescription ?? m.seoDescription),
      }))
      setAiStatus('done')
      setAiContent('')
      setAiImages([])
    } catch (err) {
      setAiStatus('error')
      setAiError(err instanceof Error ? err.message : 'Error')
    }
  }

  async function saveAndPreview() {
    const id = await save(false)
    if (id) window.open(`/admin/preview/${id}`, '_blank')
  }

  const isEditing = !!postId

  // ─── Live preview data ───────────────────────────────────────────────────────

  const previewData = {
    title: meta.title,
    category: meta.tags.join(' \u00b7 ') || meta.category,
    heroImage: meta.heroImage,
    publishedAt: meta.publishedAt,
    authorName: meta.authorName,
    authorRole: meta.authorRole,
    authorBio: meta.authorBio,
    authorImage: meta.authorImage,
    body: blocks.map(toContentBlock),
  }

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="flex h-full">

      {/* ── Left: editor form ── */}
      <div className="flex-1 min-w-0 overflow-y-auto flex flex-col bg-[#f5f3ef]">
        <div className="flex flex-col gap-6 px-6 pt-6 pb-24 flex-1">

      {/* Meta section */}
      <section className="bg-white border border-[#e8e4df] rounded-lg p-6 flex flex-col gap-5">
        <h2 className="font-black text-sm uppercase tracking-widest text-[#999]">Post Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wide text-[#888]">Title *</label>
            <input
              className="border border-[#d9d9d9] rounded-lg px-4 py-2.5 text-[#1e1e20] focus:outline-none focus:border-[#1e1e20]"
              value={meta.title}
              onChange={e => onTitleChange(e.target.value)}
              placeholder="Post title"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wide text-[#888]">Slug *</label>
            <input
              className="border border-[#d9d9d9] rounded-lg px-4 py-2.5 text-[#1e1e20] font-mono text-sm focus:outline-none focus:border-[#1e1e20]"
              value={meta.slug}
              onChange={e => setMf('slug', e.target.value)}
              placeholder="url-slug"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wide text-[#888]">
              Tags <span className="normal-case tracking-normal">— the post appears under each one</span>
            </label>
            <div className="flex flex-wrap gap-2 border border-[#d9d9d9] rounded-lg px-3 py-2.5 bg-white">
              {BLOG_CATEGORIES.map(c => {
                const on = meta.tags.includes(c)
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={on}
                    onClick={() =>
                      setMf('tags', on ? meta.tags.filter(t => t !== c) : [...meta.tags, c])
                    }
                    className={`rounded-full px-3 py-1 text-sm border transition-colors ${
                      on
                        ? 'bg-[#1e1e20] border-[#1e1e20] text-white'
                        : 'border-[#d9d9d9] text-[#1e1e20] hover:border-[#1e1e20]'
                    }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
            {meta.tags.length === 0 && (
              <p className="text-xs text-[#c0392b]">Pick at least one tag.</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wide text-[#888]">Published Date</label>
            <input
              type="date"
              className="border border-[#d9d9d9] rounded-lg px-4 py-2.5 text-[#1e1e20] focus:outline-none focus:border-[#1e1e20]"
              value={meta.publishedAt}
              onChange={e => setMf('publishedAt', e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase tracking-wide text-[#888]">Hero Image *</label>
          <div className="flex gap-2">
            <input
              className="flex-1 border border-[#d9d9d9] rounded-lg px-4 py-2.5 text-[#1e1e20] focus:outline-none focus:border-[#1e1e20]"
              value={meta.heroImage}
              onChange={e => setMf('heroImage', e.target.value)}
              placeholder="URL or upload →"
            />
            <UploadButton onUploaded={url => setMf('heroImage', url)} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase tracking-wide text-[#888]">Listing / Gallery Image *</label>
          <div className="flex gap-2">
            <input
              className="flex-1 border border-[#d9d9d9] rounded-lg px-4 py-2.5 text-[#1e1e20] focus:outline-none focus:border-[#1e1e20]"
              value={meta.listingImage}
              onChange={e => setMf('listingImage', e.target.value)}
              placeholder="Required — used on /blog listing page"
            />
            <UploadButton onUploaded={url => setMf('listingImage', url)} />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs uppercase tracking-wide text-[#888]">Keywords (comma-separated)</label>
          <input
            className="border border-[#d9d9d9] rounded-lg px-4 py-2.5 text-[#1e1e20] focus:outline-none focus:border-[#1e1e20]"
            value={meta.keywords}
            onChange={e => setMf('keywords', e.target.value)}
            placeholder="brand strategy, leadership, Schoolhouse Lane"
          />
        </div>

        {/* SEO / meta tags */}
        <div className="border-t border-[#e8e4df] pt-5 flex flex-col gap-4">
          <p className="font-black text-xs uppercase tracking-widest text-[#999]">Meta Tags (SEO)</p>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase tracking-wide text-[#888]">Meta Title *</label>
              <span className={`text-[11px] ${meta.seoTitle.length > 60 ? 'text-[#b04040]' : 'text-[#bbb]'}`}>{meta.seoTitle.length}/60</span>
            </div>
            <input
              className="border border-[#d9d9d9] rounded-lg px-4 py-2.5 text-[#1e1e20] focus:outline-none focus:border-[#1e1e20]"
              value={meta.seoTitle}
              onChange={e => setMf('seoTitle', e.target.value)}
              placeholder="Title shown in search results & browser tab (~55 chars)"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase tracking-wide text-[#888]">Meta Description *</label>
              <span className={`text-[11px] ${meta.seoDescription.length > 160 ? 'text-[#b04040]' : 'text-[#bbb]'}`}>{meta.seoDescription.length}/160</span>
            </div>
            <textarea
              className="border border-[#d9d9d9] rounded-lg px-4 py-2.5 text-[#1e1e20] resize-none focus:outline-none focus:border-[#1e1e20]"
              rows={3}
              value={meta.seoDescription}
              onChange={e => setMf('seoDescription', e.target.value)}
              placeholder="Shown in search results and social previews (~155 chars)"
            />
          </div>
        </div>

        {/* Author (collapsed by default) */}
        <div className="border border-[#e8e4df] rounded-lg overflow-hidden">
          <button
            type="button"
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-[#888] hover:text-[#1e1e20] transition-colors"
            onClick={() => setShowAuthor(v => !v)}
          >
            <span className="uppercase tracking-wide text-xs">Author Details</span>
            <span>{showAuthor ? '▲' : '▼'}</span>
          </button>
          {showAuthor && (
            <div className="px-4 pb-4 flex flex-col gap-3 border-t border-[#e8e4df]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs uppercase tracking-wide text-[#888]">Name</label>
                  <input className="border border-[#d9d9d9] rounded-lg px-3 py-2 text-[#1e1e20] text-sm focus:outline-none focus:border-[#1e1e20]" value={meta.authorName} onChange={e => setMf('authorName', e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs uppercase tracking-wide text-[#888]">Role</label>
                  <input className="border border-[#d9d9d9] rounded-lg px-3 py-2 text-[#1e1e20] text-sm focus:outline-none focus:border-[#1e1e20]" value={meta.authorRole} onChange={e => setMf('authorRole', e.target.value)} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wide text-[#888]">Author Image URL</label>
                <input className="border border-[#d9d9d9] rounded-lg px-3 py-2 text-[#1e1e20] text-sm focus:outline-none focus:border-[#1e1e20]" value={meta.authorImage} onChange={e => setMf('authorImage', e.target.value)} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs uppercase tracking-wide text-[#888]">Bio</label>
                <textarea className="border border-[#d9d9d9] rounded-lg px-3 py-2 text-[#1e1e20] text-sm resize-none focus:outline-none focus:border-[#1e1e20]" rows={2} value={meta.authorBio} onChange={e => setMf('authorBio', e.target.value)} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Block editor */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-sm uppercase tracking-widest text-[#999]">
            Content Blocks ({blocks.length})
          </h2>
        </div>

        {/* AI panel — always visible */}
        {(
          <div className="bg-[#1e1e20] rounded-xl p-5 flex flex-col gap-4">
            <p className="text-xs text-[#999] uppercase tracking-widest font-medium">AI Block Generator</p>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#888] uppercase tracking-wide">Blog Content (raw text)</label>
              <textarea
                className="bg-[#2a2a2c] border border-[#3a3a3c] rounded-lg px-4 py-3 text-white text-sm resize-none focus:outline-none focus:border-[#666] placeholder:text-[#555]"
                rows={10}
                value={aiContent}
                onChange={e => setAiContent(e.target.value)}
                placeholder="Paste your full blog post text here. AI will structure it into headings, paragraphs, callouts, lists and more..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#888] uppercase tracking-wide">Images (upload first, paste URLs here)</label>
              {aiImages.map((url, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    className="flex-1 bg-[#2a2a2c] border border-[#3a3a3c] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#666]"
                    value={url}
                    placeholder={`Image ${i + 1} URL`}
                    onChange={e => {
                      const imgs = [...aiImages]
                      imgs[i] = e.target.value
                      setAiImages(imgs)
                    }}
                  />
                  <UploadButton onUploaded={url => {
                    const imgs = [...aiImages]
                    imgs[i] = url
                    setAiImages(imgs)
                  }} />
                  <button type="button" onClick={() => setAiImages(imgs => imgs.filter((_, j) => j !== i))} className="text-[#555] hover:text-[#b04040] text-xl">×</button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setAiImages(imgs => [...imgs, ''])}
                className="text-xs border border-[#3a3a3c] rounded-full px-4 py-1.5 text-[#666] hover:border-[#666] hover:text-[#999] transition-colors w-fit"
              >
                + Add image
              </button>
            </div>
            {aiError && <p className="text-[#b04040] text-sm">{aiError}</p>}
            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={!aiContent.trim() || aiStatus === 'generating'}
                onClick={generateBlocks}
                className="bg-white text-[#1e1e20] px-6 py-2.5 rounded-full text-sm uppercase tracking-wide font-medium hover:bg-[#f0efed] transition-colors disabled:opacity-40"
              >
                {aiStatus === 'generating' ? 'Generating…' : '✦ Generate Blocks'}
              </button>
              <button
                type="button"
                onClick={() => { setAiContent(''); setAiImages([]); setAiStatus('idle') }}
                className="text-[#666] hover:text-[#999] text-sm"
              >
                Clear
              </button>
              {aiStatus === 'generating' && <span className="text-[#666] text-xs">Usually takes 5–10 seconds…</span>}
            </div>
          </div>
        )}

        {blocks.map((block, i) => (
          <BlockCard
            key={block.id}
            block={block}
            index={i}
            total={blocks.length}
            expanded={expandedId === block.id}
            onToggle={() => setExpandedId(id => id === block.id ? null : block.id)}
            onMove={dir => moveBlock(block.id, dir)}
            onRemove={() => removeBlock(block.id)}
            onUpdate={patch => updateBlock(block.id, patch)}
          />
        ))}

        {/* Add block */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowAddMenu(v => !v)}
            className="w-full border-2 border-dashed border-[#d9d9d9] rounded-lg py-4 text-[#999] hover:border-[#1e1e20] hover:text-[#1e1e20] transition-colors text-sm uppercase tracking-wide font-medium"
          >
            + Add Block
          </button>
          {showAddMenu && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-[#e8e4df] rounded-lg shadow-lg p-3 z-10 grid grid-cols-3 gap-2">
              {(['paragraph', 'heading', 'blockquote', 'image', 'image-pair', 'callout', 'rich-list', 'ordered-list', 'quote-banner'] as const).map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => addBlock(t)}
                  className={`text-xs px-3 py-2 rounded-md font-medium uppercase tracking-wide ${BLOCK_COLORS[t]} hover:opacity-80 transition-opacity`}
                >
                  {BLOCK_LABELS[t]}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

        </div>{/* end flex flex-col gap-6 */}

        {/* Save bar */}
        <div className="sticky bottom-0 bg-white border-t border-[#e8e4df] shrink-0">
          {/* Schedule picker row */}
          {showScheduler && (
            <div className="px-6 py-3 border-b border-[#e8e4df] flex items-center gap-3 bg-[#fffbf5]">
              <span className="text-xs uppercase tracking-wide text-[#888] shrink-0">Publish at</span>
              <input
                type="datetime-local"
                value={scheduleInput}
                onChange={e => setScheduleInput(e.target.value)}
                className="border border-[#d9d9d9] rounded-lg px-3 py-2 text-sm text-[#1e1e20] focus:outline-none focus:border-[#8a6430]"
              />
              <button
                type="button"
                disabled={!scheduleInput || saveStatus === 'saving' || isPending}
                onClick={saveScheduled}
                className="bg-[#8a6430] text-white px-5 py-2 rounded-full text-sm uppercase tracking-wide font-medium hover:bg-[#7a5420] transition-colors disabled:opacity-50"
              >
                Confirm
              </button>
              <button
                type="button"
                onClick={() => { setShowScheduler(false); setScheduleInput('') }}
                className="text-[#bbb] hover:text-[#1e1e20] text-xl leading-none"
              >
                ✕
              </button>
            </div>
          )}

          {/* Main bar */}
          <div className="px-6 py-4 flex items-center justify-between gap-4">
            {/* Left: status */}
            <div className="flex items-center gap-3 min-w-0">
              {saveStatus === 'saved' && (
                <span className="text-[#2d7d2d] text-sm font-medium">✓ Saved</span>
              )}
              {saveStatus === 'error' && (
                <span className="text-[#b04040] text-sm truncate">{errorMsg}</span>
              )}
              {(saveStatus === 'idle' || saveStatus === 'saving') && (
                <span className="text-[#bbb] text-sm">
                  {isPending || saveStatus === 'saving' ? 'Saving…' : isEditing ? 'Unsaved changes' : 'New post'}
                </span>
              )}
              {scheduledAt && (
                <span className="flex items-center gap-1.5 text-xs bg-[#fef3c7] text-[#8a6430] px-3 py-1 rounded-full font-medium">
                  <span>⏰</span>
                  <span>{formatScheduled(scheduledAt)}</span>
                  <button
                    type="button"
                    onClick={() => save(false, null)}
                    className="text-[#c09050] hover:text-[#b04040] text-sm leading-none ml-0.5"
                    title="Cancel schedule"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>

            {/* Right: actions */}
            <div className="flex items-center gap-2 shrink-0">
              {postId && <DeleteButton postId={postId} />}
              <button
                type="button"
                disabled={saveStatus === 'saving' || isPending}
                onClick={saveAndPreview}
                className="border border-[#d9d9d9] px-5 py-2.5 rounded-full text-sm uppercase tracking-wide font-medium hover:border-[#1e1e20] transition-colors disabled:opacity-50 text-[#888]"
              >
                Full Preview
              </button>
              <button
                type="button"
                disabled={saveStatus === 'saving' || isPending}
                onClick={() => save(false)}
                className="border border-[#1e1e20] px-6 py-2.5 rounded-full text-sm uppercase tracking-wide font-medium hover:bg-[#f0efed] transition-colors disabled:opacity-50"
              >
                Save Draft
              </button>
              <button
                type="button"
                disabled={saveStatus === 'saving' || isPending}
                onClick={() => {
                  setShowScheduler(v => !v)
                  if (!showScheduler && scheduledAt) setScheduleInput(toDatetimeLocal(scheduledAt))
                }}
                className={`border px-5 py-2.5 rounded-full text-sm uppercase tracking-wide font-medium transition-colors disabled:opacity-50 ${
                  scheduledAt
                    ? 'border-[#8a6430] text-[#8a6430] hover:bg-[#fef3c7]'
                    : 'border-[#d9d9d9] text-[#888] hover:border-[#8a6430] hover:text-[#8a6430]'
                }`}
              >
                ⏰ Schedule
              </button>
              <button
                type="button"
                disabled={saveStatus === 'saving' || isPending}
                onClick={() => save(true)}
                className="bg-[#1e1e20] text-white px-6 py-2.5 rounded-full text-sm uppercase tracking-wide font-medium hover:bg-[#333] transition-colors disabled:opacity-50"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>{/* end left panel */}

      {/* ── Right: live preview ── */}
      <div className="w-[420px] xl:w-[480px] shrink-0 border-l-2 border-[#e8e4df] overflow-y-auto bg-white">
        <div className="bg-[#1e1e20] px-4 py-2 flex items-center gap-2 sticky top-0 z-10">
          <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
          <span className="text-[10px] font-bold text-[#888] uppercase tracking-[1.5px]">Live Preview</span>
        </div>
        <LivePreview data={previewData} />
      </div>

    </div>
  )
}

// ─── Delete button (separate client component for the confirm flow) ───────────

function DeleteButton({ postId }: { postId: number }) {
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    setLoading(true)
    await fetch(`/api/admin/blog/${postId}`, { method: 'DELETE' })
    router.push('/admin/blog')
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#888]">Delete?</span>
        <button
          type="button"
          onClick={handleDelete}
          disabled={loading}
          className="text-sm text-[#b04040] font-medium hover:underline disabled:opacity-50"
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => setConfirming(false)}
          className="text-sm text-[#888] hover:underline"
        >
          No
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setConfirming(true)}
      className="text-sm text-[#ccc] hover:text-[#b04040] transition-colors"
    >
      Delete
    </button>
  )
}

// ─── Block card ───────────────────────────────────────────────────────────────

interface BlockCardProps {
  block: EditorBlock
  index: number
  total: number
  expanded: boolean
  onToggle: () => void
  onMove: (dir: 'up' | 'down') => void
  onRemove: () => void
  onUpdate: (patch: Partial<EditorBlock>) => void
}

function BlockCard({ block, index, total, expanded, onToggle, onMove, onRemove, onUpdate }: BlockCardProps) {
  const preview = getPreview(block)

  return (
    <div className={`bg-white border rounded-lg overflow-hidden transition-all ${expanded ? 'border-[#1e1e20]' : 'border-[#e8e4df]'}`}>
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none"
        onClick={onToggle}
      >
        <span className={`text-xs font-medium px-2 py-0.5 rounded uppercase tracking-wide shrink-0 ${BLOCK_COLORS[block.type]}`}>
          {BLOCK_LABELS[block.type]}
        </span>
        <span className="flex-1 text-sm text-[#888] truncate">{preview}</span>
        <div className="flex items-center gap-1 shrink-0" onClick={e => e.stopPropagation()}>
          <button
            type="button"
            disabled={index === 0}
            onClick={() => onMove('up')}
            className="p-1.5 text-[#bbb] hover:text-[#1e1e20] disabled:opacity-20 transition-colors"
          >
            ↑
          </button>
          <button
            type="button"
            disabled={index === total - 1}
            onClick={() => onMove('down')}
            className="p-1.5 text-[#bbb] hover:text-[#1e1e20] disabled:opacity-20 transition-colors"
          >
            ↓
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="p-1.5 text-[#bbb] hover:text-[#b04040] transition-colors ml-1"
          >
            ×
          </button>
        </div>
      </div>

      {/* Fields */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-[#e8e4df]">
          <BlockFields block={block} onUpdate={onUpdate} />
        </div>
      )}
    </div>
  )
}

function getPreview(b: EditorBlock): string {
  if (b.type === 'paragraph' || b.type === 'heading' || b.type === 'blockquote' || b.type === 'callout') {
    return b.content.slice(0, 80) || '(empty)'
  }
  if (b.type === 'image') return b.src || '(no URL)'
  if (b.type === 'image-pair') return `${b.src1 || '—'} + ${b.src2 || '—'}`
  if (b.type === 'rich-list' || b.type === 'ordered-list') return `${b.items.length} item(s)`
  if (b.type === 'quote-banner') return b.content.slice(0, 80) || '(empty)'
  return ''
}

// ─── Block-specific fields ────────────────────────────────────────────────────

function BlockFields({ block, onUpdate }: { block: EditorBlock; onUpdate: (patch: Partial<EditorBlock>) => void }) {
  const inp = 'mt-3 border border-[#d9d9d9] rounded-lg px-4 py-2.5 w-full text-[#1e1e20] text-sm focus:outline-none focus:border-[#1e1e20]'
  const lbl = 'text-xs uppercase tracking-wide text-[#888] mt-3 block'

  if (block.type === 'paragraph') return (
    <div>
      <label className={lbl}>Text — use **bold** for bold, [text](/blog/slug) for links</label>
      <textarea
        className={`${inp} resize-none`}
        rows={5}
        value={block.content}
        onChange={e => onUpdate({ content: e.target.value } as Partial<typeof block>)}
      />
      <label className="flex items-center gap-2 mt-3 cursor-pointer">
        <input
          type="checkbox"
          checked={block.dark}
          onChange={e => onUpdate({ dark: e.target.checked } as Partial<typeof block>)}
        />
        <span className="text-sm text-[#888]">Intro/dark style (heavier weight, opener)</span>
      </label>
    </div>
  )

  if (block.type === 'heading') return (
    <div>
      <label className={lbl}>Heading text</label>
      <input className={inp} value={block.content} onChange={e => onUpdate({ content: e.target.value } as Partial<typeof block>)} />
    </div>
  )

  if (block.type === 'blockquote') return (
    <div>
      <label className={lbl}>Quote text</label>
      <textarea className={`${inp} resize-none`} rows={3} value={block.content} onChange={e => onUpdate({ content: e.target.value } as Partial<typeof block>)} />
    </div>
  )

  if (block.type === 'callout') return (
    <div>
      <label className={lbl}>Callout text (shown in dark box)</label>
      <textarea className={`${inp} resize-none`} rows={3} value={block.content} onChange={e => onUpdate({ content: e.target.value } as Partial<typeof block>)} />
    </div>
  )

  if (block.type === 'image') return (
    <div>
      <label className={lbl}>Image</label>
      <div className="flex gap-2 mt-3">
        <input className="flex-1 border border-[#d9d9d9] rounded-lg px-4 py-2.5 text-[#1e1e20] text-sm focus:outline-none focus:border-[#1e1e20]" value={block.src} placeholder="URL or upload →" onChange={e => onUpdate({ src: e.target.value } as Partial<typeof block>)} />
        <UploadButton onUploaded={url => onUpdate({ src: url } as Partial<typeof block>)} />
      </div>
      <label className={lbl}>Alt text</label>
      <input className={inp} value={block.alt} placeholder="Describe the image" onChange={e => onUpdate({ alt: e.target.value } as Partial<typeof block>)} />
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={lbl}>Width (px)</label>
          <input className={inp} value={block.width} placeholder="988" onChange={e => onUpdate({ width: e.target.value } as Partial<typeof block>)} />
        </div>
        <div>
          <label className={lbl}>Height (px)</label>
          <input className={inp} value={block.height} placeholder="462" onChange={e => onUpdate({ height: e.target.value } as Partial<typeof block>)} />
        </div>
      </div>
    </div>
  )

  if (block.type === 'image-pair') return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={lbl}>Image 1</label>
          <div className="flex gap-2 mt-3">
            <input className="flex-1 border border-[#d9d9d9] rounded-lg px-3 py-2 text-[#1e1e20] text-sm focus:outline-none focus:border-[#1e1e20]" value={block.src1} placeholder="URL or upload →" onChange={e => onUpdate({ src1: e.target.value } as Partial<typeof block>)} />
            <UploadButton onUploaded={url => onUpdate({ src1: url } as Partial<typeof block>)} />
          </div>
          <label className={lbl}>Alt 1</label>
          <input className={inp} value={block.alt1} onChange={e => onUpdate({ alt1: e.target.value } as Partial<typeof block>)} />
        </div>
        <div>
          <label className={lbl}>Image 2</label>
          <div className="flex gap-2 mt-3">
            <input className="flex-1 border border-[#d9d9d9] rounded-lg px-3 py-2 text-[#1e1e20] text-sm focus:outline-none focus:border-[#1e1e20]" value={block.src2} placeholder="URL or upload →" onChange={e => onUpdate({ src2: e.target.value } as Partial<typeof block>)} />
            <UploadButton onUploaded={url => onUpdate({ src2: url } as Partial<typeof block>)} />
          </div>
          <label className={lbl}>Alt 2</label>
          <input className={inp} value={block.alt2} onChange={e => onUpdate({ alt2: e.target.value } as Partial<typeof block>)} />
        </div>
      </div>
    </div>
  )

  if (block.type === 'quote-banner') return (
    <div>
      <label className={lbl}>Background Image</label>
      <div className="flex gap-2 mt-3">
        <input className="flex-1 border border-[#d9d9d9] rounded-lg px-4 py-2.5 text-[#1e1e20] text-sm focus:outline-none focus:border-[#1e1e20]" value={block.src} placeholder="URL or upload →" onChange={e => onUpdate({ src: e.target.value } as Partial<typeof block>)} />
        <UploadButton onUploaded={url => onUpdate({ src: url } as Partial<typeof block>)} />
      </div>
      <label className={lbl}>Quote text</label>
      <textarea className={`${inp} resize-none`} rows={3} value={block.content} onChange={e => onUpdate({ content: e.target.value } as Partial<typeof block>)} />
    </div>
  )

  if (block.type === 'rich-list' || block.type === 'ordered-list') {
    const isRich = block.type === 'rich-list'
    return (
      <div>
        {isRich && (
          <label className="flex items-center gap-2 mt-3 cursor-pointer">
            <input
              type="checkbox"
              checked={(block as { dark: boolean }).dark}
              onChange={e => onUpdate({ dark: e.target.checked } as Partial<typeof block>)}
            />
            <span className="text-sm text-[#888]">Dark background</span>
          </label>
        )}
        {block.items.map((item, i) => (
          <div key={i} className="mt-3 flex gap-3 items-start">
            <div className="flex-1 grid grid-cols-2 gap-2">
              <input
                className={inp + ' !mt-0'}
                value={item.lead}
                placeholder="Bold lead (e.g. Cynicism)"
                onChange={e => {
                  const items = [...block.items]
                  items[i] = { ...items[i], lead: e.target.value }
                  onUpdate({ items } as Partial<typeof block>)
                }}
              />
              <input
                className={inp + ' !mt-0'}
                value={item.text}
                placeholder="Rest of text"
                onChange={e => {
                  const items = [...block.items]
                  items[i] = { ...items[i], text: e.target.value }
                  onUpdate({ items } as Partial<typeof block>)
                }}
              />
            </div>
            <button
              type="button"
              onClick={() => {
                const items = block.items.filter((_, j) => j !== i)
                onUpdate({ items } as Partial<typeof block>)
              }}
              className="text-[#ccc] hover:text-[#b04040] mt-0.5 text-lg shrink-0"
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onUpdate({ items: [...block.items, { lead: '', text: '' }] } as Partial<typeof block>)}
          className="mt-3 text-xs border border-[#d9d9d9] rounded-full px-4 py-1.5 text-[#888] hover:border-[#1e1e20] hover:text-[#1e1e20] transition-colors"
        >
          + Add item
        </button>
      </div>
    )
  }

  return null
}

// ─── Upload button ────────────────────────────────────────────────────────────

function UploadButton({ onUploaded }: { onUploaded: (url: string) => void }) {
  const [uploading, setUploading] = useState(false)

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const form = new FormData()
    form.append('file', file)
    try {
      const res = await fetch('/api/admin/upload', { method: 'POST', body: form })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error ?? `HTTP ${res.status}`)
      onUploaded(json.url)
    } catch (err) {
      alert('Upload failed: ' + (err instanceof Error ? err.message : String(err)))
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  return (
    <label className="cursor-pointer shrink-0 flex items-center gap-1.5 border border-[#d9d9d9] rounded-lg px-3 py-2.5 text-xs font-medium text-[#888] hover:border-[#1e1e20] hover:text-[#1e1e20] transition-colors whitespace-nowrap">
      {uploading ? (
        <span>Uploading…</span>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          Upload
        </>
      )}
      <input type="file" accept="image/*" className="hidden" onChange={handleChange} disabled={uploading} />
    </label>
  )
}
