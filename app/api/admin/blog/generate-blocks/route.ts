import Anthropic from '@anthropic-ai/sdk'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM = `You are a blog content structurer for Schoolhouse Lane, a premium creative strategy agency.
You convert raw blog text into a structured JSON array of ContentBlock objects that match the website's design system.

ContentBlock types available:
- { type: "paragraph", text: string, dark?: true } — dark:true for the opening/intro paragraph (bold, heavier weight)
- { type: "heading", text: string } — section headings (H2 level)
- { type: "blockquote", text: string } — pull quotes, short impactful statements
- { type: "callout", text: string } — key insight or commercial lesson in a dark box
- { type: "rich-list", items: [{lead: string, text: string}], dark?: true } — bullet points with bold lead text
- { type: "ordered-list", items: [{lead: string, text: string}] } — numbered points with bold lead
- { type: "image", src: string, alt: string } — use placeholder src "IMAGE_PLACEHOLDER_1", "IMAGE_PLACEHOLDER_2" etc for images mentioned in text

Rules:
1. First paragraph is always { type: "paragraph", dark: true, text: "..." } — the hook/opener
2. Use headings for major sections (numbered like "1. The...", "2. The...")
3. Use callout for "commercial lesson" or key takeaway boxes
4. Use blockquote for short memorable quotes or statements
5. Use rich-list when there are 3+ related points with a lead phrase
6. Keep paragraphs focused — split long blocks into multiple paragraphs
7. If text mentions images, insert image blocks with placeholder src
8. Return ONLY valid JSON array, no markdown, no explanation.`

export async function POST(req: Request) {
  const jar = await cookies()
  if (jar.get('admin_auth')?.value !== '1') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { content, images } = await req.json() as { content: string; images?: string[] }

  const imageContext = images?.length
    ? `\n\nImages available (use these src values in image blocks where appropriate):\n${images.map((url, i) => `IMAGE_${i + 1}: ${url}`).join('\n')}`
    : ''

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4096,
    system: SYSTEM,
    messages: [
      {
        role: 'user',
        content: `Structure this blog post content into ContentBlock JSON:\n\n${content}${imageContext}`,
      },
    ],
  })

  const raw = message.content[0].type === 'text' ? message.content[0].text : ''

  // Extract JSON array from response
  const match = raw.match(/\[[\s\S]*\]/)
  if (!match) {
    return NextResponse.json({ error: 'Failed to parse response' }, { status: 500 })
  }

  const blocks = JSON.parse(match[0])
  return NextResponse.json({ blocks })
}
