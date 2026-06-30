import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { ContentBlock } from '@/lib/blog-data'

// ─── Rule-based parser (no API key needed) ────────────────────────────────────

function parseBlocks(content: string, images: string[]): ContentBlock[] {
  const blocks: ContentBlock[] = []
  let imageIndex = 0
  let firstParagraph = true

  // Split into sections by double newline
  const sections = content.split(/\n{2,}/).map(s => s.trim()).filter(Boolean)

  for (const section of sections) {
    const lines = section.split('\n').map(l => l.trim()).filter(Boolean)
    if (!lines.length) continue

    const first = lines[0]

    // Numbered heading: "1. Title" or "1) Title"
    if (/^\d+[\.\)]\s+\S/.test(first) && first.length < 120) {
      blocks.push({ type: 'heading', text: first.replace(/^\d+[\.\)]\s+/, '').trim() })
      // remaining lines become paragraphs
      for (const line of lines.slice(1)) {
        if (line) blocks.push({ type: 'paragraph', text: line })
      }
      continue
    }

    // ALL CAPS short line = heading
    if (first === first.toUpperCase() && first.length < 80 && /[A-Z]/.test(first)) {
      blocks.push({ type: 'heading', text: first })
      for (const line of lines.slice(1)) {
        if (line) blocks.push({ type: 'paragraph', text: line })
      }
      continue
    }

    // Callout: starts with keywords
    const calloutMatch = first.match(/^(The Commercial Lesson|Commercial Lesson|Key Takeaway|Takeaway|Key Insight|The Insight|Note)[:\s—–-]+(.+)/i)
    if (calloutMatch || /^[⚡💡🔑✦▶]/.test(first)) {
      const text = calloutMatch
        ? [calloutMatch[2], ...lines.slice(1)].join(' ')
        : lines.join(' ')
      blocks.push({ type: 'callout', text })
      continue
    }

    // Blockquote: starts with " or — or is short and sentence-like
    if ((first.startsWith('"') || first.startsWith('“') || first.startsWith('—') || first.startsWith('–')) && section.length < 300) {
      blocks.push({ type: 'blockquote', text: section.replace(/^["""—–\s]+|["""]+$/g, '').trim() })
      continue
    }

    // Bullet list: lines starting with - * • ·
    if (lines.every(l => /^[-*•·]\s+/.test(l)) && lines.length >= 2) {
      const items = lines.map(l => {
        const text = l.replace(/^[-*•·]\s+/, '')
        // "Bold part: rest" or "Bold part — rest"
        const split = text.match(/^([^:—–]+)[:—–]\s+(.+)/)
        return split ? { lead: split[1].trim(), text: split[2].trim() } : { lead: '', text }
      })
      blocks.push({ type: 'rich-list', items })
      continue
    }

    // Numbered list inside section: "1. x\n2. y\n3. z"
    if (lines.every(l => /^\d+[\.\)]\s+/.test(l)) && lines.length >= 2) {
      const items = lines.map(l => {
        const text = l.replace(/^\d+[\.\)]\s+/, '')
        const split = text.match(/^([^:—–]+)[:—–]\s+(.+)/)
        return split ? { lead: split[1].trim(), text: split[2].trim() } : { lead: '', text }
      })
      blocks.push({ type: 'ordered-list', items })
      continue
    }

    // IMAGE placeholder keyword
    if (/^\[image\]/i.test(first) || /^image\s*\d*/i.test(first)) {
      const url = images[imageIndex] ?? ''
      imageIndex++
      blocks.push({ type: 'image', src: url, alt: '' })
      continue
    }

    // Regular paragraph — first one is dark
    const text = lines.join(' ')
    if (firstParagraph) {
      blocks.push({ type: 'paragraph', dark: true, text })
      firstParagraph = false
    } else {
      blocks.push({ type: 'paragraph', text })
    }
  }

  // Append any remaining images at the end if not placed
  while (imageIndex < images.length) {
    blocks.push({ type: 'image', src: images[imageIndex], alt: '' })
    imageIndex++
  }

  return blocks
}

// ─── AI parser (requires ANTHROPIC_API_KEY) ───────────────────────────────────

async function parseBlocksAI(content: string, images: string[]): Promise<ContentBlock[]> {
  const Anthropic = (await import('@anthropic-ai/sdk')).default
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const imageContext = images.length
    ? `\n\nImages to place (use exact URLs as src):\n${images.map((url, i) => `Image ${i + 1}: ${url}`).join('\n')}`
    : ''

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4096,
    system: `You are a blog content structurer for Schoolhouse Lane, a premium B2B creative strategy agency.
Convert raw blog text into a JSON array of ContentBlock objects matching the site design.

Types:
- { type:"paragraph", text:string, dark?:true } — dark:true for FIRST/intro paragraph only
- { type:"heading", text:string } — section headings
- { type:"blockquote", text:string } — short punchy quote or memorable statement
- { type:"callout", text:string } — commercial lesson, key insight, dark box
- { type:"rich-list", items:[{lead:string, text:string}], dark?:true } — bullet points with bold lead
- { type:"ordered-list", items:[{lead:string, text:string}] } — numbered steps
- { type:"image", src:string, alt:string } — place images naturally within content

Rules:
1. First paragraph always dark:true
2. Numbered sections (1. The X, 2. The Y) → headings
3. "Commercial Lesson" boxes → callout
4. Pull quotes, short statements → blockquote
5. 3+ related points with lead phrase → rich-list
6. Split long paragraphs (>4 sentences) into multiple
7. Return ONLY valid JSON array, no explanation, no markdown fences.`,
    messages: [{
      role: 'user',
      content: `Structure this blog post:\n\n${content}${imageContext}`,
    }],
  })

  const raw = message.content[0].type === 'text' ? message.content[0].text : '[]'
  const match = raw.match(/\[[\s\S]*\]/)
  if (!match) throw new Error('Invalid AI response')
  return JSON.parse(match[0])
}

// ─── Route ────────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  const jar = await cookies()
  if (jar.get('admin_auth')?.value !== '1') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { content, images = [] } = await req.json() as { content: string; images?: string[] }
  const validImages = images.filter(Boolean)

  // Use AI if key available, otherwise rule-based
  if (process.env.ANTHROPIC_API_KEY) {
    try {
      const blocks = await parseBlocksAI(content, validImages)
      return NextResponse.json({ blocks, mode: 'ai' })
    } catch {
      // Fall through to rule-based
    }
  }

  const blocks = parseBlocks(content, validImages)
  return NextResponse.json({ blocks, mode: 'rules' })
}
