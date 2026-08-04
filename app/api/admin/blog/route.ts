import { cookies } from 'next/headers'
import { createPost, type PostInput } from '@/lib/cms-blog'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const jar = await cookies()
  if (jar.get('admin_auth')?.value !== '1') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data: PostInput = await req.json()
    const id = await createPost(data)

    if (data.isPublished) {
      revalidatePath('/blog')
      revalidatePath(`/blog/${data.slug}`)
      // Crawler-facing indexes: without these a new post is invisible to search
      // and AI tools until the next deploy.
      revalidatePath('/sitemap.xml')
      revalidatePath('/llms.txt')
    }

    return NextResponse.json({ id })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
