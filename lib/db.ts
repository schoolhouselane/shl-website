import postgres from 'postgres'

const globalForSql = global as typeof global & { _sql?: ReturnType<typeof postgres> }

// Vercel Postgres uses POSTGRES_URL; fallback to DATABASE_URL for local dev
const connectionString = process.env.POSTGRES_URL ?? process.env.DATABASE_URL!

const sql = globalForSql._sql ?? postgres(connectionString, {
  ssl: 'require',
  max: 5,
  idle_timeout: 20,
  connect_timeout: 10,
  prepare: false,
})

if (process.env.NODE_ENV !== 'production') globalForSql._sql = sql

export default sql
