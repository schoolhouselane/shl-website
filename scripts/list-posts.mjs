// Prints every blog post — static (lib/blog-data.ts) and CMS (cms_posts) —
// with its category, so the two sources can be reviewed as one list.
//
//   node scripts/list-posts.mjs           # table
//   node scripts/list-posts.mjs --csv     # csv

import postgres from 'postgres'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const envPath = resolve(process.cwd(), '.env.local')
try {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^([^#=]+)=(.*)$/)
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '')
  }
} catch {
  // fall back to ambient env
}

const ALIASES = {
  Branding: 'Marketing',
  'Branding & Finance': 'Marketing',
  Digital: 'Technology',
  'AI Strategy': 'AI',
  'AI & Strategy': 'AI',
  'AI & Technology': 'AI',
  'AI & Leadership': 'Leadership',
  'Creative Commerce': 'Creative',
}
const normalize = c => ALIASES[c?.trim()] ?? c?.trim() ?? 'Strategy'

// ── Static posts ─────────────────────────────────────────────────────────────
// blog-data.ts holds several arrays and only some are spread into allBlogPosts,
// so track which array each post sits in — DRAFT_POSTS is deliberately excluded
// from the site and must not be reported as published.
const src = readFileSync(resolve(process.cwd(), 'lib/blog-data.ts'), 'utf8')
const LIVE_ARRAYS = (src.match(/export const allBlogPosts[^=]*=\s*\[([^\]]*)\]/)?.[1] ?? '')
  .split(',')
  .map(s => s.replace('...', '').trim())
  .filter(Boolean)

const lines = src.split('\n')
let currentArray = null
const staticPosts = []
for (let i = 0; i < lines.length; i++) {
  const decl = lines[i].match(/^(?:export )?const (\w+): BlogPost\[\] = \[/)
  if (decl) { currentArray = decl[1]; continue }
  if (lines[i] === ']') { currentArray = null; continue }
  const slug = lines[i].match(/^    slug: '(.*)',$/)
  if (!slug || !currentArray) continue
  const block = lines.slice(i, i + 40).join('\n')
  const field = name => block.match(new RegExp(`^    ${name}: ['"\`](.*?)['"\`],$`, 'm'))?.[1]
  staticPosts.push({
    source: currentArray === 'blogPosts' ? 'static' : currentArray,
    slug: slug[1],
    title: field('title'),
    category: field('category'),
    publishedAt: field('publishedAt'),
    isPublished: LIVE_ARRAYS.includes(currentArray),
  })
}

// ── CMS posts ────────────────────────────────────────────────────────────────
const sql = postgres(process.env.POSTGRES_URL ?? process.env.DATABASE_URL, { ssl: 'require', prepare: false })
const rows = await sql`SELECT slug, title, category, published_at, is_published FROM cms_posts`
await sql.end()

const cmsPosts = rows.map(r => ({
  source: 'cms',
  slug: r.slug,
  title: r.title,
  category: r.category,
  publishedAt: r.published_at,
  isPublished: r.is_published,
}))

const all = [...cmsPosts, ...staticPosts].sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)))

if (process.argv.includes('--csv')) {
  console.log('source,published,date,category,stored_category,slug,title')
  for (const p of all) {
    const cat = normalize(p.category)
    console.log(
      [p.source, p.isPublished, p.publishedAt, cat, p.category, p.slug, `"${p.title.replace(/"/g, '""')}"`].join(','),
    )
  }
} else {
  for (const p of all) {
    const cat = normalize(p.category)
    const drift = cat !== p.category?.trim() ? `  (stored: ${p.category})` : ''
    const flag = p.isPublished ? ' ' : '·'
    console.log(`${flag} ${String(p.publishedAt).slice(0, 10)}  ${cat.padEnd(14)} ${p.source.padEnd(6)} ${p.slug}${drift}`)
  }
  const tally = {}
  for (const p of all.filter(x => x.isPublished)) {
    const c = normalize(p.category)
    tally[c] = (tally[c] ?? 0) + 1
  }
  console.log(`\n${all.length} posts (${all.filter(p => p.isPublished).length} published, ${all.filter(p => !p.isPublished).length} draft)`)
  for (const [k, v] of Object.entries(tally).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`)
}
