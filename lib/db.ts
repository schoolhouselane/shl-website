import postgres from 'postgres'

const globalForSql = global as typeof global & { _sql?: ReturnType<typeof postgres> }

const sql = globalForSql._sql ?? postgres(process.env.DATABASE_URL!, {
  ssl: 'require',
  max: 5,
  idle_timeout: 20,
  connect_timeout: 10,
  prepare: false,
})

if (process.env.NODE_ENV !== 'production') globalForSql._sql = sql

export default sql
