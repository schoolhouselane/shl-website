import { publishDueScheduled } from '@/lib/cms-blog'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const slugs = await publishDueScheduled()

  for (const slug of slugs) {
    revalidatePath(`/blog/${slug}`)
  }
  if (slugs.length > 0) {
    revalidatePath('/blog')
  }

  return NextResponse.json({ published: slugs, count: slugs.length })
}
