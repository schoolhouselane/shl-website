import postgres from 'postgres'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const envContent = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8')
for (const line of envContent.split('\n')) {
  const m = line.match(/^([^#=]+)=(.*)$/)
  if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '')
}

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require', prepare: false })

// body was stored as a JSON string ("\"[...]\"") — unwrap by extracting inner text and re-casting to jsonb
const result = await sql`
  UPDATE cms_posts
  SET body = (body #>> '{}')::jsonb, updated_at = NOW()
  WHERE jsonb_typeof(body) = 'string'
  RETURNING id, slug, jsonb_typeof(body) as new_type, jsonb_array_length(body) as block_count
`
console.log('Fixed rows:', result)
await sql.end()
