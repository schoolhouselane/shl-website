import { NextRequest, NextResponse } from 'next/server'

const HUB_API = process.env.HUB_API_URL ?? 'https://backend-production-e0fa.up.railway.app'

type Action = 'login' | 'signup-request' | 'forgot-password' | 'verify-otp' | 'reset-password'

const ENDPOINTS: Record<string, Record<Action, string>> = {
  client: {
    login:           '/api/v1/auth/client/login',
    'signup-request': '/api/v1/auth/client/signup-request',
    'forgot-password': '/api/v1/auth/client/forgot-password',
    'verify-otp':    '/api/v1/auth/client/verify-otp',
    'reset-password': '/api/v1/auth/client/reset-password',
  },
  team: {
    login:           '/api/v1/auth/team/login',
    'signup-request': '/api/v1/auth/team/login', // teams don't self-signup, fallback
    'forgot-password': '/api/v1/auth/team/forgot-password',
    'verify-otp':    '/api/v1/auth/team/verify-otp',
    'reset-password': '/api/v1/auth/team/reset-password',
  },
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { type, action = 'login', ...rest } = body

  if (!['client', 'team'].includes(type)) {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }

  const endpoint = ENDPOINTS[type]?.[action as Action]
  if (!endpoint) {
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  }

  try {
    const res = await fetch(`${HUB_API}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rest),
      signal: AbortSignal.timeout(15000),
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json(
        { error: data.detail ?? 'Request failed' },
        { status: res.status },
      )
    }

    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Could not reach Hub' }, { status: 502 })
  }
}
