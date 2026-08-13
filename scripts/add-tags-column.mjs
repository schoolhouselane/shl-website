// Adds cms_posts.tags (text[]) and backfills it from the existing single
// category, then applies the multi-tag assignments for AI posts.
//   node scripts/add-tags-column.mjs --dry | --apply
import postgres from 'postgres'
import { readFileSync } from 'fs'
import { resolve } from 'path'
for (const line of readFileSync(resolve(process.cwd(), '.env.local'), 'utf8').split('\n')) {
  const m = line.match(/^([^#=]+)=(.*)$/)
  if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '')
}

// Posts that need more than the one tag they were filed under.
const MULTI = {
  'the-great-ai-migration-forecasting-the-shifts-in-enterprise-adoption': ['AI', 'Technology'],
  'the-valuation-velocity-mapping-the-private-equity-adoption-curve-for-agentic-brand-infrastructure': ['AI', 'Strategy'],
}

const apply = process.argv.includes('--apply')
const sql = postgres(process.env.POSTGRES_URL ?? process.env.DATABASE_URL, { ssl: 'require', prepare: false })

const hasCol = await sql`
  SELECT 1 FROM information_schema.columns
  WHERE table_name = 'cms_posts' AND column_name = 'tags'
`
console.log(hasCol.length ? 'tags column: present' : 'tags column: MISSING (will be added)')

if (apply && !hasCol.length) {
  await sql`ALTER TABLE cms_posts ADD COLUMN tags text[] NOT NULL DEFAULT '{}'`
  console.log('  -> column added')
}

if (apply) {
  // Backfill every row that has no tags yet from its single category.
  const filled = await sql`
    UPDATE cms_posts SET tags = ARRAY[category]
    WHERE tags IS NULL OR cardinality(tags) = 0
    RETURNING slug
  `
  console.log(`backfilled ${filled.length} rows from category`)

  for (const [slug, tags] of Object.entries(MULTI)) {
    const r = await sql`UPDATE cms_posts SET tags = ${tags} WHERE slug = ${slug} RETURNING slug`
    console.log(`  ${r.length ? 'set' : 'MISS'}  ${slug} -> [${tags.join(', ')}]`)
  }
} else {
  const rows = await sql`SELECT slug, category FROM cms_posts ORDER BY id`
  console.log(`\n${rows.length} rows would be backfilled from category; ${Object.keys(MULTI).length} would get explicit multi-tags:`)
  for (const [slug, tags] of Object.entries(MULTI)) console.log(`  ${slug} -> [${tags.join(', ')}]`)
  console.log('\nDry run — re-run with --apply.')
}

if (hasCol.length || apply) {
  const tally = {}
  const rows = await sql`SELECT tags FROM cms_posts WHERE is_published`
  for (const r of rows) for (const t of r.tags ?? []) tally[t] = (tally[t] ?? 0) + 1
  if (Object.keys(tally).length) {
    console.log('\nPublished tag usage:')
    for (const [k, v] of Object.entries(tally).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`)
  }
}

await sql.end()
