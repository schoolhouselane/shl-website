// One-off cleanup: rewrite legacy cms_posts.category values onto the current set
// (see lib/blog-categories.ts). The site already normalizes these on read, so
// this is housekeeping — run it to stop the admin list showing stale strings.
//
//   node scripts/migrate-categories.mjs --dry     # report only (default)
//   node scripts/migrate-categories.mjs --apply   # write

import postgres from 'postgres'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const envPath = resolve(process.cwd(), '.env.local')
try {
  const envContent = readFileSync(envPath, 'utf8')
  for (const line of envContent.split('\n')) {
    const m = line.match(/^([^#=]+)=(.*)$/)
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '')
  }
} catch {
  // fall back to ambient env
}

// Pure renames — old label to new label, content unchanged.
const RENAMES = {
  Branding: 'Marketing',
  'Branding & Finance': 'Marketing',
  Digital: 'Technology',
  'AI Strategy': 'AI',
  'AI & Strategy': 'AI',
  'AI & Technology': 'AI',
  'AI & Leadership': 'Leadership',
  'Creative Commerce': 'Creative',
}

// Editorial reassignments — these posts were filed under Strategy but belong in
// the AI / Technology buckets. Keyed by slug so a rerun is idempotent.
const SLUG_MOVES = {
  'the-great-ai-migration-forecasting-the-shifts-in-enterprise-adoption': 'AI',
  'the-valuation-velocity-mapping-the-private-equity-adoption-curve-for-agentic-brand-infrastructure': 'AI',
  'killing-the-operation-sponge-inside-the-schoolhouse-lane-client-hub': 'Technology',
  'the-strategic-command-center-optimizing-enterprise-brand-investment-via-the-client-hub-app': 'Technology',
}

const apply = process.argv.includes('--apply')
// Same precedence as lib/db.ts — Vercel injects POSTGRES_URL.
const sql = postgres(process.env.POSTGRES_URL ?? process.env.DATABASE_URL, { ssl: 'require', prepare: false })

const rows = await sql`SELECT id, slug, category FROM cms_posts ORDER BY id`

// A slug move wins over a rename — it is the more specific instruction.
const target = r => SLUG_MOVES[r.slug] ?? RENAMES[r.category?.trim()]
const todo = rows.filter(r => {
  const t = target(r)
  return t && t !== r.category?.trim()
})

// Anything neither current nor aliased silently renders as 'Strategy' on the
// site, so surface it here rather than letting the fallback hide it.
const CURRENT = ['Strategy', 'Marketing', 'AI', 'Technology', 'Leadership', 'Culture', 'Creative', 'SEO']
const unknown = rows.filter(r => {
  const c = r.category?.trim()
  return c && !CURRENT.includes(c) && !RENAMES[c]
})

console.log('Raw categories in cms_posts:')
const tally = {}
for (const r of rows) tally[r.category?.trim() ?? '(null)'] = (tally[r.category?.trim() ?? '(null)'] ?? 0) + 1
for (const [k, v] of Object.entries(tally).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`)

console.log(`\n${rows.length} CMS posts, ${todo.length} to change, ${unknown.length} unrecognised\n`)
for (const r of todo) {
  const kind = SLUG_MOVES[r.slug] ? 'move  ' : 'rename'
  console.log(`  ${kind}  #${r.id} ${r.slug}: ${r.category} -> ${target(r)}`)
}
for (const r of unknown) {
  console.log(`  UNKNOWN #${r.id} ${r.slug}: "${r.category}" (renders as Strategy)`)
}

if (!todo.length) {
  console.log('Nothing to do.')
} else if (!apply) {
  console.log('\nDry run — re-run with --apply to write.')
} else {
  for (const r of todo) {
    await sql`UPDATE cms_posts SET category = ${target(r)} WHERE id = ${r.id}`
  }
  console.log(`\nUpdated ${todo.length} rows.`)
}

await sql.end()
