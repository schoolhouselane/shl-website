import postgres from 'postgres'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const envContent = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8')
for (const line of envContent.split('\n')) {
  const m = line.match(/^([^#=]+)=(.*)$/)
  if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '')
}

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require', prepare: false })

// Fetch current body
const [row] = await sql`SELECT id, body FROM cms_posts WHERE slug = 'savile-row-premium-brand-value'`

const body = row.body
let imageCount = 0
const updated = body.map(block => {
  if (block.type === 'image') {
    imageCount++
    if (imageCount === 2) {
      console.log('Changing image 2 src from', block.src, '→ /images/blog-16-1.png')
      return { ...block, src: '/images/blog-16-1.png', alt: 'A woman in an elegant green room with a parrot, evoking considered luxury and storytelling' }
    }
  }
  return block
})

await sql`UPDATE cms_posts SET body = ${JSON.stringify(updated)}::jsonb, updated_at = NOW() WHERE id = ${row.id}`
console.log('✓ Done')
await sql.end()
