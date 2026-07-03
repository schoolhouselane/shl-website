import { NextRequest, NextResponse } from 'next/server'

const HUB_API = process.env.HUB_API_URL ?? 'https://creative-hub-backend.up.railway.app'

export async function POST(req: NextRequest) {
  const { type, email, password } = await req.json()

  if (!email || !password || !['client', 'team'].includes(type)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const endpoint =
    type === 'client'
      ? `${HUB_API}/api/v1/auth/client/login`
      : `${HUB_API}/api/v1/auth/team/login`

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json(
        { error: data.detail ?? 'Invalid credentials' },
        { status: res.status },
      )
    }

    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Could not reach Hub' }, { status: 502 })
  }
}
