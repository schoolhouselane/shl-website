import postgres from 'postgres'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const envContent = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8')
for (const line of envContent.split('\n')) {
  const m = line.match(/^([^#=]+)=(.*)$/)
  if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '')
}

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require', prepare: false })

const rows = await sql`SELECT id, slug, title, is_published, jsonb_typeof(body) as body_type, body FROM cms_posts ORDER BY id`
for (const r of rows) {
  console.log(`id=${r.id} slug=${r.slug} published=${r.is_published} body_type=${r.body_type}`)
  if (r.body_type !== 'array') {
    console.log('  BODY VALUE:', JSON.stringify(r.body).slice(0, 200))
  } else {
    const arr = r.body
    console.log(`  blocks=${Array.isArray(arr) ? arr.length : '?'}`, Array.isArray(arr) ? arr.slice(0,2).map(b=>b.type).join(',') : '')
  }
}

await sql.end()
