import postgres from 'postgres'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const envContent = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8')
for (const line of envContent.split('\n')) {
  const m = line.match(/^([^#=]+)=(.*)$/)
  if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '')
}

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require', prepare: false })

await sql`ALTER TABLE cms_posts ADD COLUMN IF NOT EXISTS scheduled_at TIMESTAMPTZ`
console.log('✓ scheduled_at column added')
await sql.end()
