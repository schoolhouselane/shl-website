import { getAllPostsMerged } from '@/lib/cms-blog'
import { allBlogPosts, type BlogPost } from '@/lib/blog-data'

const BASE_URL = 'https://schoolhouselane.ai'

// Everything above the Journal section is hand-maintained copy. The Journal list is
// generated from the same source as /blog and the sitemap, so new CMS posts appear
// here automatically instead of silently going missing from AI crawlers.
const STATIC_SECTIONS = `# Schoolhouse Lane

> Schoolhouse Lane is a Creative Commerce agency existing at the intersection of creativity and revenue growth. We transform brand from a marketing cost into a high-leverage strategic asset for founders, operators, and investors.

Founded: 2018
Location: International
Contact: hello@schoolhouselane.ai
Website: ${BASE_URL}

## Services

- [Brand Identity & Positioning](${BASE_URL}/services): We reverse-engineer the emotional triggers and market whitespace that let your brand command a category. Verbal identity, visual identity, positioning strategy, and brand architecture.
- [Gallery & Videos](${BASE_URL}/services): Cinematic photography and video that converts browsers into buyers and elevates perceived value.
- [Websites & Digital Experiences](${BASE_URL}/services): Conversion-engineered digital experiences built with performance, accessibility, and brand storytelling at every scroll.
- [Campaigns & Creative Direction](${BASE_URL}/services): Award-worthy integrated campaign strategy and creative direction that moves the needle on business goals.
- [AI Creative & Innovation](${BASE_URL}/services): AI-augmented campaign production, generative visual systems, and LLM-powered brand voice tools.
- [Strategy & Growth Consulting](${BASE_URL}/services): Brand and business growth audits, market positioning, and quarterly growth retainers.

## Key Team

- Darren McGrath — Partner & Strategy Director. Cannes Lion-winning creative strategist with 25 years of experience. Specialises in transforming brand from a downstream cost into an upstream engine for enterprise value creation.
- Andy Hoskins — Advisor to the Board. 15 years of CFO, M&A, and investment expertise.
- Keith O'Loughlin — Advisor to the Board. Chairman of Everlough Holdings. 25 years of innovation and investment experience.
- Johnny Ingle — Advisor to the Board. Global CMO with 25 years of international DTC experience.

## The Schoolhouse Lane Method

1. Discovery — Relentless inquiry into the brand, market, and opportunity space.
2. Strategy — Positioning the brand at the intersection of commercial logic and human desire.
3. Identity — Building the visual and verbal systems that bring strategy to life.
4. Activation — Deploying the brand across every touchpoint from campaign to checkout.
5. Growth — Measuring, iterating, and scaling what works.

## Key Metrics

- 99% client retention rate
- 6-year average client partnership
- 80+ brands transformed
- Cannes Lion-winning team

## Pages

- [Home](${BASE_URL})
- [About](${BASE_URL}/about)
- [Services](${BASE_URL}/services)
- [Work](${BASE_URL}/work)
- [Pricing](${BASE_URL}/pricing)
- [The Journal](${BASE_URL}/blog)
- [Jobs](${BASE_URL}/jobs)
- [Contact](${BASE_URL}/contact)`

/** Strip the brand suffix authors often type into seoTitle, matching page <title> output. */
function cleanTitle(post: BlogPost): string {
  return (post.seoTitle ?? post.title)
    .replace(/\s*[—–|-]\s*Schoolhouse Lane\s*$/, '')
    .trim()
}

function journalSection(posts: BlogPost[]): string {
  const lines = posts.map((p) => {
    const desc = p.seoDescription?.replace(/\s+/g, ' ').trim()
    const suffix = desc ? `: ${desc}` : ''
    return `- [${cleanTitle(p)}](${BASE_URL}/blog/${p.slug})${suffix}`
  })

  return [
    '',
    '## The Journal',
    '',
    `Long-form strategy writing from the Schoolhouse Lane team (${posts.length} articles).`,
    '',
    ...lines,
    '',
  ].join('\n')
}

export async function GET() {
  // Fall back to static posts if the CMS is unreachable — a partial llms.txt is
  // far better than a 500 that leaves AI crawlers with nothing at all.
  let posts: BlogPost[]
  try {
    posts = await getAllPostsMerged()
  } catch {
    posts = allBlogPosts
  }

  const body = `${STATIC_SECTIONS}\n${journalSection(posts)}`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
