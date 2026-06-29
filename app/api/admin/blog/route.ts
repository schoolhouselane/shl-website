import { auth } from '@/auth'
import { createPost, type PostInput } from '@/lib/cms-blog'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const data: PostInput = await req.json()
    const id = await createPost(data)

    if (data.isPublished) {
      revalidatePath('/blog')
      revalidatePath(`/blog/${data.slug}`)
    }

    return NextResponse.json({ id })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
