import { cookies } from 'next/headers'
import { updatePost, deletePost, type PostInput } from '@/lib/cms-blog'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const jar = await cookies()
  if (jar.get('admin_auth')?.value !== '1') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    const data: PostInput = await req.json()
    await updatePost(parseInt(id, 10), data)

    revalidatePath('/blog')
    revalidatePath(`/blog/${data.slug}`)
    // Keep the crawler-facing indexes in step with the edit (dates change too).
    revalidatePath('/sitemap.xml')
    revalidatePath('/llms.txt')

    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const jar = await cookies()
  if (jar.get('admin_auth')?.value !== '1') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await params
    await deletePost(parseInt(id, 10))
    revalidatePath('/blog')
    // A deleted post must also leave the sitemap and llms.txt, or crawlers keep
    // being pointed at a 404.
    revalidatePath('/sitemap.xml')
    revalidatePath('/llms.txt')
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
