'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import CalendlyButton from '@/components/CalendlyButton'

const HUB_URL = process.env.NEXT_PUBLIC_HUB_URL ?? 'https://hub.schoolhouselane.ai'

type Tab = 'client' | 'team'

export default function LoginContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const oauthError = searchParams.get('error')

  const [tab, setTab] = useState<Tab>('client')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showForgotMsg, setShowForgotMsg] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(
    oauthError === 'AccessDenied' ? "We couldn't find an account linked to that Google profile." : ''
  )

  function resetForm() {
    setEmail('')
    setPassword('')
    setError('')
    setShowPassword(false)
    setShowForgotMsg(false)
  }

  function switchTab(t: Tab) {
    setTab(t)
    resetForm()
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/hub-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: tab, email, password }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Invalid email or password.')
        return
      }

      // Redirect to Hub with token — Hub reads it from URL and logs in
      const dest = `${HUB_URL}?token=${encodeURIComponent(data.token)}&role=${tab}`
      window.location.href = dest
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = () => {
    const callbackUrl = searchParams.get('callbackUrl') ?? `${HUB_URL}?role=team`
    signIn('google', { callbackUrl })
  }

  const eyeOpen = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  )
  const eyeOff = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )

  return (
    <>
      {/* ── MOBILE ── */}
      <div className="md:hidden flex flex-col min-h-screen bg-[#1e1e20]">
        <div className="flex items-center justify-between px-[16px] h-[64px] border-b border-white/10 shrink-0">
          <Link href="/">
            <Image src="/logo-white.svg" alt="Schoolhouse Lane" width={102} height={40} className="h-[39px] w-auto" />
          </Link>
          <button onClick={() => router.back()} className="flex items-center justify-center w-[30px] h-[30px] text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 flex items-center px-[16px] py-[24px]">
          <div className="w-full bg-white rounded-[24px] p-[24px] flex flex-col gap-[20px]">
            <h1 className="font-black text-[24px] uppercase tracking-[0.24px] text-[#1e1e20] leading-none text-center">WELCOME</h1>

            {/* Tabs */}
            <TabSwitcher tab={tab} onSwitch={switchTab} />

            <FormBody
              tab={tab}
              email={email} setEmail={setEmail}
              password={password} setPassword={setPassword}
              showPassword={showPassword} setShowPassword={setShowPassword}
              showForgotMsg={showForgotMsg} setShowForgotMsg={setShowForgotMsg}
              error={error} loading={loading}
              onSubmit={handleSubmit}
              onGoogle={handleGoogle}
              eyeOpen={eyeOpen} eyeOff={eyeOff}
              mobile
            />
          </div>
        </div>

        <p className="text-center text-[14px] text-[#868686] pb-[24px]">© 2025 Schoolhouse Lane</p>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex h-screen">
        {/* Left: cream panel */}
        <div className="flex-1 bg-[#f5f3ef] flex flex-col items-center justify-center px-[60px] lg:px-[90px] py-[80px] gap-[40px] overflow-y-auto">
          <Link href="/">
            <Image src="/logo-white.svg" alt="Schoolhouse Lane" width={220} height={86} className="w-[160px] lg:w-[220px] h-auto invert shrink-0" />
          </Link>

          <div className="bg-white rounded-[24px] w-full max-w-[580px] px-[32px] py-[40px] lg:py-[48px] flex flex-col items-center gap-[32px]">
            <div className="flex flex-col items-center text-center gap-[8px]">
              <h1 className="font-black text-[28px] uppercase text-[#1e1e20] leading-none tracking-[0.28px]">WELCOME</h1>
              <p className="text-[15px] text-[#6b6b6b]">Sign in to your Schoolhouse Lane portal</p>
            </div>

            {/* Tabs */}
            <TabSwitcher tab={tab} onSwitch={switchTab} />

            <FormBody
              tab={tab}
              email={email} setEmail={setEmail}
              password={password} setPassword={setPassword}
              showPassword={showPassword} setShowPassword={setShowPassword}
              showForgotMsg={showForgotMsg} setShowForgotMsg={setShowForgotMsg}
              error={error} loading={loading}
              onSubmit={handleSubmit}
              onGoogle={handleGoogle}
              eyeOpen={eyeOpen} eyeOff={eyeOff}
            />
          </div>
        </div>

        {/* Right: image */}
        <div className="flex-1 relative min-h-0">
          <Image src="/images/login.png" alt="Schoolhouse Lane" fill className="object-cover object-center" priority />
        </div>
      </div>
    </>
  )
}

function TabSwitcher({ tab, onSwitch }: { tab: Tab; onSwitch: (t: Tab) => void }) {
  return (
    <div className="flex w-full bg-[#f5f3ef] rounded-[12px] p-[4px] gap-[4px]">
      {(['client', 'team'] as Tab[]).map(t => (
        <button
          key={t}
          onClick={() => onSwitch(t)}
          className={`flex-1 py-[10px] rounded-[8px] text-[14px] font-bold uppercase tracking-[0.08em] transition-all ${
            tab === t
              ? 'bg-[#1e1e20] text-white shadow-sm'
              : 'text-[#6b6b6b] hover:text-[#1e1e20]'
          }`}
        >
          {t === 'client' ? 'Client' : 'Team'}
        </button>
      ))}
    </div>
  )
}

interface FormProps {
  tab: Tab
  email: string; setEmail: (v: string) => void
  password: string; setPassword: (v: string) => void
  showPassword: boolean; setShowPassword: (v: boolean) => void
  showForgotMsg: boolean; setShowForgotMsg: (v: boolean) => void
  error: string
  loading: boolean
  onSubmit: (e: React.FormEvent) => void
  onGoogle: () => void
  eyeOpen: React.ReactNode
  eyeOff: React.ReactNode
  mobile?: boolean
}

function FormBody({ tab, email, setEmail, password, setPassword, showPassword, setShowPassword, showForgotMsg, setShowForgotMsg, error, loading, onSubmit, onGoogle, eyeOpen, eyeOff, mobile }: FormProps) {
  const inputCls = mobile
    ? 'w-full h-[42px] border border-[#e2e2e2] rounded-[8px] px-[14px] text-[14px] text-[#1e1e20] bg-white outline-none focus:border-[#1e1e20] transition-colors placeholder:text-[#aaa]'
    : 'w-full h-[48px] border border-[#e2e2e2] rounded-[50px] px-[20px] text-[15px] text-[#1e1e20] bg-white outline-none focus:border-[#1e1e20] transition-colors placeholder:text-[#aaa]'
  const labelCls = 'text-[13px] font-semibold text-[#1e1e20] uppercase tracking-[0.06em]'

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-[18px]">
      {/* Email */}
      <div className="flex flex-col gap-[8px]">
        <label className={labelCls}>Email</label>
        <input
          type="email" required autoComplete="email"
          placeholder={tab === 'client' ? 'Your business email' : 'Your team email'}
          value={email} onChange={e => setEmail(e.target.value)}
          className={inputCls}
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-[8px]">
        <label className={labelCls}>Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'} required autoComplete="current-password"
            placeholder="Enter your password"
            value={password} onChange={e => setPassword(e.target.value)}
            className={`${inputCls} pr-[48px]`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#aaa] hover:text-[#1e1e20] transition-colors"
          >
            {showPassword ? eyeOff : eyeOpen}
          </button>
        </div>

        <div className="flex flex-col items-end gap-[4px]">
          <button
            type="button"
            onClick={() => setShowForgotMsg(!showForgotMsg)}
            className="text-[13px] text-[#d07502] hover:opacity-70 transition-opacity"
          >
            Forgot password?
          </button>
          {showForgotMsg && (
            <p className="text-[12px] text-[#6b6b6b] text-right">
              Email{' '}
              <a href="mailto:hello@schoolhouselane.ai" className="text-[#d07502] underline">
                hello@schoolhouselane.ai
              </a>{' '}
              to reset your password.
            </p>
          )}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-start gap-[10px] bg-red-50 border border-red-200 rounded-[10px] px-[14px] py-[10px]">
          <svg className="shrink-0 mt-[2px]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
          </svg>
          <p className="text-[13px] text-red-600 leading-[1.5]">{error}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1e1e20] text-white rounded-[50px] py-[13px] text-[15px] font-bold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity disabled:opacity-60 flex items-center justify-center gap-[8px]"
      >
        {loading && (
          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        )}
        {loading ? 'Signing in…' : `Sign in as ${tab === 'client' ? 'Client' : 'Team'}`}
      </button>

      {/* New to SHL — only for client tab */}
      {tab === 'client' && (
        <p className="text-center text-[14px] text-[#6b6b6b]">
          New to Schoolhouse Lane?{' '}
          <CalendlyButton className="text-[#d07502] font-bold hover:opacity-70 transition-opacity">
            Book a Demo
          </CalendlyButton>
        </p>
      )}

      {/* Google — only for team tab */}
      {tab === 'team' && (
        <>
          <div className="flex items-center gap-[12px]">
            <div className="flex-1 h-px bg-[#e2e2e2]" />
            <span className="text-[13px] text-[#aaa]">or</span>
            <div className="flex-1 h-px bg-[#e2e2e2]" />
          </div>
          <button
            type="button"
            onClick={onGoogle}
            className="w-full flex items-center justify-center gap-[10px] bg-white border border-[#e2e2e2] rounded-[12px] px-[12px] py-[10px] text-[14px] font-semibold text-[#1e1e20] hover:bg-[#f5f3ef] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" className="shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </>
      )}
    </form>
  )
}
