'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const HUB_URL = process.env.NEXT_PUBLIC_HUB_URL ?? 'https://hub.schoolhouselane.ai'

type Tab = 'client' | 'team'
type Mode =
  | 'login'
  | 'signup'
  | 'signup-success'
  | 'forgot-email'
  | 'verify-otp'
  | 'new-password'
  | 'password-changed'

// ── Design tokens — exact production ──────────────────────────────
const inputCls = 'w-full h-[47px] border border-[#1e1e20] rounded-[50px] px-[24px] py-[14px] text-[16px] text-[#1e1e20] bg-white outline-none focus:opacity-80 transition-opacity placeholder:text-[#7c7c7c]'
const btnDark = 'w-full bg-[#1e1e20] text-white rounded-[50px] py-[14px] text-[20px] font-bold uppercase tracking-[0.2px] hover:opacity-80 transition-opacity disabled:opacity-60 flex items-center justify-center gap-[8px]'

// Mobile input — same as original MobileForm
const mInputCls = 'w-full h-[42px] border border-[#868686] rounded-[8px] px-[14px] text-[14px] text-[#1e1e20] bg-white outline-none focus:border-[#1e1e20] transition-colors placeholder:text-[#868686]'
const mBtnDark = 'w-full bg-[#1e1e20] text-white rounded-[50px] py-[14px] text-[16px] font-bold uppercase tracking-[0.16px] hover:opacity-80 transition-opacity disabled:opacity-60 flex items-center justify-center gap-[8px]'

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[16px] text-[#1e1e20] uppercase">{children}</p>
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[12px] w-full">
      <Label>{label}</Label>
      {children}
    </div>
  )
}

function MLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] text-[#1e1e20] tracking-[0.14px]">{children}</p>
}

function MField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <MLabel>{label}</MLabel>
      {children}
    </div>
  )
}

function BackToLogin({ onClick, mobile }: { onClick: () => void; mobile?: boolean }) {
  return (
    <button onClick={onClick} className={`flex items-center gap-[8px] text-[#d07502] hover:opacity-70 transition-opacity ${mobile ? 'text-[14px]' : 'text-[16px]'}`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d07502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 5l-7 7 7 7" />
      </svg>
      Back to Login
    </button>
  )
}

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[85px] h-[85px] rounded-full bg-[#f5f3ef] flex items-center justify-center shrink-0">
      {children}
    </div>
  )
}

function ErrorBox({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-[10px] bg-red-50 border border-red-200 rounded-[12px] px-[16px] py-[12px]">
      <svg className="shrink-0 mt-[2px]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
      </svg>
      <p className="text-[13px] text-red-600 leading-[1.5]">{message}</p>
    </div>
  )
}

// ── Tab switcher (Figma overlay pill) ────────────────────────────
function TabSwitcher({ tab, onSwitch }: { tab: Tab; onSwitch: (t: Tab) => void }) {
  return (
    <div className="relative inline-grid" style={{ gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}>
      <button
        onClick={() => onSwitch(tab === 'client' ? 'team' : 'client')}
        className={`col-start-1 row-start-1 bg-[#f5f3ef] rounded-[50px] py-[14px] px-[60px] w-[315px] flex items-center text-[#1e1e20] text-[16px] font-normal tracking-[0.16px] ${tab === 'client' ? 'justify-end' : 'justify-start'}`}
      >
        {tab === 'client' ? 'Team' : 'Client'}
      </button>
      <div
        className={`col-start-1 row-start-1 bg-[#1e1e20] rounded-[50px] py-[14px] w-[180px] flex items-center justify-center text-white text-[16px] font-medium tracking-[0.16px] pointer-events-none ${tab === 'team' ? 'justify-self-end' : 'justify-self-start'}`}
      >
        {tab === 'client' ? 'Client' : 'Team'}
      </div>
    </div>
  )
}

// ── Eye icons ──────────────────────────────────────────────────────
const eyeOn = (
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

function Spinner() {
  return (
    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

// ── Main component ────────────────────────────────────────────────
export default function LoginContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const oauthError = searchParams.get('error')

  const [tab, setTab] = useState<Tab>('client')
  const [mode, setMode] = useState<Mode>('login')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)

  const [fullName, setFullName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [jobPosition, setJobPosition] = useState('')

  const [forgotEmail, setForgotEmail] = useState('')
  const [otpDigits, setOtpDigits] = useState(['', '', '', ''])
  const otpRef0 = useRef<HTMLInputElement>(null)
  const otpRef1 = useRef<HTMLInputElement>(null)
  const otpRef2 = useRef<HTMLInputElement>(null)
  const otpRef3 = useRef<HTMLInputElement>(null)
  const otpRefs = [otpRef0, otpRef1, otpRef2, otpRef3]
  const [resetToken, setResetToken] = useState('')
  const [resendTimer, setResendTimer] = useState(0)

  const [newPw, setNewPw] = useState('')
  const [confirmPw, setConfirmPw] = useState('')
  const [showNewPw, setShowNewPw] = useState(false)
  const [showConfirmPw, setShowConfirmPw] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(oauthError === 'AccessDenied' ? "We couldn't find an account linked to that Google profile." : '')

  useEffect(() => {
    if (resendTimer <= 0) return
    const id = setTimeout(() => setResendTimer(t => t - 1), 1000)
    return () => clearTimeout(id)
  }, [resendTimer])

  function reset() {
    setEmail(''); setPassword(''); setShowPw(false)
    setFullName(''); setCompanyName(''); setJobPosition('')
    setForgotEmail(''); setOtpDigits(['', '', '', '']); setResetToken('')
    setNewPw(''); setConfirmPw(''); setShowNewPw(false); setShowConfirmPw(false)
    setError('')
  }

  function go(m: Mode) { setMode(m); setError('') }
  function switchTab(t: Tab) { setTab(t); reset() }

  async function hubPost(action: string, body: object) {
    const res = await fetch('/api/hub-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: tab, action, ...body }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error ?? 'Something went wrong.')
    return data
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault(); setLoading(true); setError('')
    try {
      const data = await hubPost('login', { email, password })
      window.location.href = `${HUB_URL}/auth/sso?token=${encodeURIComponent(data.token)}&role=${tab}`
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally { setLoading(false) }
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault(); setLoading(true); setError('')
    try {
      await hubPost('signup-request', { full_name: fullName, email, company_name: companyName, job_position: jobPosition })
      go('signup-success')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally { setLoading(false) }
  }

  async function handleForgotEmail(e: React.FormEvent) {
    e.preventDefault(); setLoading(true); setError('')
    try {
      await hubPost('forgot-password', { email: forgotEmail })
      setResendTimer(300)
      go('verify-otp')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally { setLoading(false) }
  }

  async function handleVerifyOTP(e: React.FormEvent) {
    e.preventDefault()
    const otp = otpDigits.join('')
    if (otp.length < 4) { setError('Please enter the 4-digit code.'); return }
    setLoading(true); setError('')
    try {
      const data = await hubPost('verify-otp', { email: forgotEmail, otp })
      setResetToken(data.reset_token)
      go('new-password')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Invalid or expired code.')
    } finally { setLoading(false) }
  }

  async function handleResendOTP() {
    if (resendTimer > 0) return
    setLoading(true)
    try {
      await hubPost('forgot-password', { email: forgotEmail })
      setOtpDigits(['', '', '', ''])
      setResendTimer(300)
      setError('')
    } catch { } finally { setLoading(false) }
  }

  async function handleNewPassword(e: React.FormEvent) {
    e.preventDefault()
    if (newPw.length < 8) { setError('Password must be at least 8 characters.'); return }
    if (newPw !== confirmPw) { setError('Passwords do not match.'); return }
    setLoading(true); setError('')
    try {
      await hubPost('reset-password', { reset_token: resetToken, new_password: newPw })
      go('password-changed')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally { setLoading(false) }
  }

  function handleOtpInput(idx: number, val: string) {
    const digit = val.replace(/\D/g, '').slice(-1)
    const next = [...otpDigits]
    next[idx] = digit
    setOtpDigits(next)
    if (digit && idx < 3) otpRefs[idx + 1].current?.focus()
  }

  function handleOtpKeyDown(idx: number, e: React.KeyboardEvent) {
    if (e.key === 'Backspace' && !otpDigits[idx] && idx > 0) {
      otpRefs[idx - 1].current?.focus()
    }
  }

  function handleOtpPaste(e: React.ClipboardEvent, idx: number) {
    e.preventDefault()
    const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4 - idx)
    if (!digits) return
    const next = [...otpDigits]
    for (let i = 0; i < digits.length; i++) next[idx + i] = digits[i]
    setOtpDigits(next)
    otpRefs[Math.min(idx + digits.length, 3)].current?.focus()
  }

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  // ── Desktop card sections ────────────────────────────────────────
  let desktopCard: React.ReactNode
  let mobileCard: React.ReactNode

  if (mode === 'login') {
    const loginForm = (desktop: boolean) => {
      const iCls = desktop ? inputCls : mInputCls
      const bCls = desktop ? btnDark : mBtnDark
      return (
        <form onSubmit={handleLogin} className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[12px]">
            {desktop ? <Label>EMAIL</Label> : <MLabel>Email</MLabel>}
            <input type="email" required autoComplete="email"
              placeholder="Enter your business email"
              value={email} onChange={e => setEmail(e.target.value)}
              className={iCls} />
          </div>
          <div className="flex flex-col gap-[12px]">
            {desktop ? <Label>PASSWORD</Label> : <MLabel>Password</MLabel>}
            <div className="relative">
              <input type={showPw ? 'text' : 'password'} required autoComplete="current-password"
                placeholder="Enter your password"
                value={password} onChange={e => setPassword(e.target.value)}
                className={`${iCls} pr-[52px]`} />
              <button type="button" onClick={() => setShowPw(!showPw)}
                className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#7c7c7c] hover:text-[#1e1e20] transition-colors">
                {showPw ? eyeOff : eyeOn}
              </button>
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={() => go('forgot-email')}
                className={`${desktop ? 'text-[16px]' : 'text-[14px]'} text-[#d07502] hover:opacity-70 transition-opacity`}>
                Forgot Password?
              </button>
            </div>
          </div>
          {error && <ErrorBox message={error} />}
          <button type="submit" disabled={loading} className={bCls}>
            {loading && <Spinner />}
            {loading ? 'Signing in…' : 'Log In'}
          </button>
        </form>
      )
    }

    desktopCard = (
      <>
        <div className="flex flex-col items-center text-center gap-[8px]">
          <h1 className="font-black text-[28px] uppercase text-[#1e1e20] leading-none tracking-[0.28px]">WELCOME BACK!</h1>
          <p className="text-[16px] text-[#1e1e20] leading-[24px]">Log in to your account.</p>
        </div>

        <TabSwitcher tab={tab} onSwitch={switchTab} />

        <div className="w-full max-w-[544px] flex flex-col gap-[30px]">
          {loginForm(true)}
          <p className="text-center text-[18px] text-[#1e1e20]">
            New to Schoolhouse Lane?{' '}
            <button onClick={() => go('signup')} className="text-[#d07502] font-bold hover:opacity-70 transition-opacity">
              Create your account
            </button>
          </p>
        </div>
      </>
    )

    mobileCard = (
      <>
        <div className="flex flex-col items-center gap-[4px] text-center">
          <h1 className="font-black text-[24px] uppercase tracking-[0.24px] text-[#1e1e20] leading-none">WELCOME BACK!</h1>
          <p className="text-[14px] text-[#1e1e20]">Log in to your account.</p>
        </div>
        <TabSwitcher tab={tab} onSwitch={switchTab} />
        {loginForm(false)}
        <p className="text-center text-[16px] text-[#1e1e20]">
          New to Schoolhouse Lane?{' '}
          <button onClick={() => go('signup')} className="text-[#d07502] font-bold hover:opacity-70 transition-opacity">
            Create your account
          </button>
        </p>
      </>
    )
  }

  else if (mode === 'signup') {
    const signupForm = (desktop: boolean) => {
      const iCls = desktop ? inputCls : mInputCls
      const bCls = desktop ? btnDark : mBtnDark
      const F = desktop
        ? ({ label, children }: { label: string; children: React.ReactNode }) => <Field label={label}>{children}</Field>
        : ({ label, children }: { label: string; children: React.ReactNode }) => <MField label={label}>{children}</MField>
      return (
        <form onSubmit={handleSignup} className="flex flex-col gap-[16px]">
          <F label={desktop ? 'NAME AND SURNAME' : 'Name and Surname'}>
            <input type="text" required autoComplete="name"
              placeholder="Enter your full name"
              value={fullName} onChange={e => setFullName(e.target.value)}
              className={iCls} />
          </F>
          <F label={desktop ? 'EMAIL' : 'Email'}>
            <input type="email" required autoComplete="email"
              placeholder="Enter your business email"
              value={email} onChange={e => setEmail(e.target.value)}
              className={iCls} />
          </F>
          {tab === 'client' && (
            <F label={desktop ? 'COMPANY NAME' : 'Company Name'}>
              <input type="text"
                placeholder="Name of the company you're signing up for"
                value={companyName} onChange={e => setCompanyName(e.target.value)}
                className={iCls} />
            </F>
          )}
          <F label={desktop ? 'JOB POSITION' : 'Job Position'}>
            <input type="text"
              placeholder="What job do you do?"
              value={jobPosition} onChange={e => setJobPosition(e.target.value)}
              className={iCls} />
          </F>
          {error && <ErrorBox message={error} />}
          <button type="submit" disabled={loading} className={`${bCls} mt-[8px]`}>
            {loading && <Spinner />}
            {loading ? 'Sending…' : 'Create your account'}
          </button>
        </form>
      )
    }

    desktopCard = (
      <>
        <div className="flex flex-col items-center text-center gap-[8px]">
          <h1 className="font-black text-[28px] uppercase text-[#1e1e20] leading-none tracking-[0.28px]">WELCOME</h1>
          <p className="text-[16px] text-[#1e1e20] leading-[24px]">Fill the form so we can create your personal account.</p>
        </div>
        <TabSwitcher tab={tab} onSwitch={switchTab} />
        <div className="w-full max-w-[544px] flex flex-col gap-[30px]">
          {signupForm(true)}
          <p className="text-center text-[18px] text-[#1e1e20]">
            Already have an account?{' '}
            <button onClick={() => go('login')} className="text-[#d07502] font-bold hover:opacity-70 transition-opacity">Log in</button>
          </p>
        </div>
      </>
    )

    mobileCard = (
      <>
        <div className="flex flex-col items-center gap-[4px] text-center">
          <h1 className="font-black text-[24px] uppercase tracking-[0.24px] text-[#1e1e20] leading-none">WELCOME</h1>
          <p className="text-[14px] text-[#1e1e20]">Fill the form so we can create your personal account.</p>
        </div>
        <TabSwitcher tab={tab} onSwitch={switchTab} />
        {signupForm(false)}
        <p className="text-center text-[16px] text-[#1e1e20]">
          Already have an account?{' '}
          <button onClick={() => go('login')} className="text-[#d07502] font-bold hover:opacity-70 transition-opacity">Log in</button>
        </p>
      </>
    )
  }

  else if (mode === 'signup-success') {
    const content = (desktop: boolean) => (
      <div className="flex flex-col items-center gap-[32px] text-center">
        <IconCircle>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d07502" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
          </svg>
        </IconCircle>
        <div>
          <h1 className={`font-black uppercase text-[#1e1e20] leading-none ${desktop ? 'text-[28px]' : 'text-[24px]'}`}>CHECK YOUR EMAIL</h1>
          <p className={`text-[#1e1e20] mt-[8px] ${desktop ? 'text-[16px]' : 'text-[14px]'}`}>We will send you a link once your profile is created.</p>
        </div>
        <BackToLogin onClick={() => go('login')} mobile={!desktop} />
      </div>
    )
    desktopCard = content(true)
    mobileCard = content(false)
  }

  else if (mode === 'forgot-email') {
    const content = (desktop: boolean) => {
      const iCls = desktop ? inputCls : mInputCls
      const bCls = desktop ? btnDark : mBtnDark
      return (
        <>
          <div className={`flex flex-col items-center text-center gap-[8px]`}>
            <h1 className={`font-black uppercase text-[#1e1e20] leading-none ${desktop ? 'text-[28px]' : 'text-[24px]'}`}>FORGOT PASSWORD?</h1>
            <p className={`text-[#1e1e20] ${desktop ? 'text-[16px]' : 'text-[14px]'}`}>Enter your email and we'll send you a verification code.</p>
          </div>
          <div className={`w-full flex flex-col gap-[30px] ${desktop ? 'max-w-[544px]' : ''}`}>
            <form onSubmit={handleForgotEmail} className="flex flex-col gap-[16px]">
              {desktop ? <Field label="EMAIL"><input type="email" required autoComplete="email" placeholder="Enter your email address" value={forgotEmail} onChange={e => setForgotEmail(e.target.value)} className={iCls} /></Field>
                : <MField label="Email"><input type="email" required autoComplete="email" placeholder="Enter your email address" value={forgotEmail} onChange={e => setForgotEmail(e.target.value)} className={iCls} /></MField>}
              {error && <ErrorBox message={error} />}
              <button type="submit" disabled={loading} className={`${bCls} mt-[8px]`}>
                {loading && <Spinner />}
                {loading ? 'Sending code…' : 'Send verification code'}
              </button>
            </form>
            <BackToLogin onClick={() => go('login')} mobile={!desktop} />
          </div>
        </>
      )
    }
    desktopCard = content(true)
    mobileCard = content(false)
  }

  else if (mode === 'verify-otp') {
    const content = (desktop: boolean) => {
      const bCls = desktop ? btnDark : mBtnDark
      return (
        <div className="flex flex-col items-center gap-[32px] w-full">
          <IconCircle>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d07502" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </IconCircle>
          <div className="text-center">
            <h1 className={`font-black uppercase text-[#1e1e20] leading-none ${desktop ? 'text-[28px]' : 'text-[24px]'}`}>VERIFY YOUR EMAIL</h1>
            <p className={`text-[#1e1e20] mt-[8px] ${desktop ? 'text-[16px]' : 'text-[14px]'}`}>
              We sent a code to <strong>{forgotEmail}</strong>
            </p>
          </div>
          <form onSubmit={handleVerifyOTP} className="flex flex-col items-center gap-[24px] w-full">
            <div className="flex gap-[12px]">
              {otpDigits.map((d, i) => (
                <input key={i} ref={otpRefs[i]} type="text" inputMode="numeric" maxLength={1}
                  value={d}
                  onChange={e => handleOtpInput(i, e.target.value)}
                  onKeyDown={e => handleOtpKeyDown(i, e)}
                  onPaste={e => handleOtpPaste(e, i)}
                  className={`w-[52px] h-[52px] border rounded-[12px] text-center text-[20px] font-bold text-[#1e1e20] outline-none transition-all ${
                    d ? 'border-[#1e1e20]' : 'border-[#cdcdcd]'
                  } focus:border-[#1e1e20] focus:ring-1 focus:ring-[#1e1e20]`}
                />
              ))}
            </div>
            <div className="w-full flex flex-col gap-[8px]">
              {error && <ErrorBox message={error} />}
              <button type="submit" disabled={loading} className={bCls}>
                {loading && <Spinner />}
                {loading ? 'Verifying…' : 'Verify account'}
              </button>
              <p className={`text-center mt-[4px] text-[#1e1e20] ${desktop ? 'text-[16px]' : 'text-[14px]'}`}>
                {resendTimer > 0
                  ? <>Resend code in <strong>{fmt(resendTimer)}</strong></>
                  : <button type="button" onClick={handleResendOTP} className="text-[#d07502] hover:opacity-70 transition-opacity">Resend code</button>
                }
              </p>
            </div>
          </form>
          <BackToLogin onClick={() => go('login')} mobile={!desktop} />
        </div>
      )
    }
    desktopCard = content(true)
    mobileCard = content(false)
  }

  else if (mode === 'new-password') {
    const content = (desktop: boolean) => {
      const iCls = desktop ? inputCls : mInputCls
      const bCls = desktop ? btnDark : mBtnDark
      const F = desktop
        ? ({ label, children }: { label: string; children: React.ReactNode }) => <Field label={label}>{children}</Field>
        : ({ label, children }: { label: string; children: React.ReactNode }) => <MField label={label}>{children}</MField>
      return (
        <>
          <div className="text-center">
            <h1 className={`font-black uppercase text-[#1e1e20] leading-none ${desktop ? 'text-[28px]' : 'text-[24px]'}`}>NEW PASSWORD</h1>
            <p className={`text-[#1e1e20] mt-[8px] ${desktop ? 'text-[16px]' : 'text-[14px]'}`}>Create a new password for your account.</p>
          </div>
          <div className={`w-full flex flex-col gap-[30px] ${desktop ? 'max-w-[544px]' : ''}`}>
            <form onSubmit={handleNewPassword} className="flex flex-col gap-[16px]">
              <F label={desktop ? 'NEW PASSWORD' : 'New Password'}>
                <div className="relative">
                  <input type={showNewPw ? 'text' : 'password'} required autoComplete="new-password"
                    placeholder="Min. 8 characters"
                    value={newPw} onChange={e => setNewPw(e.target.value)}
                    className={`${iCls} pr-[52px]`} />
                  <button type="button" onClick={() => setShowNewPw(!showNewPw)}
                    className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#7c7c7c] hover:text-[#1e1e20] transition-colors">
                    {showNewPw ? eyeOff : eyeOn}
                  </button>
                </div>
              </F>
              <F label={desktop ? 'CONFIRM PASSWORD' : 'Confirm Password'}>
                <div className="relative">
                  <input type={showConfirmPw ? 'text' : 'password'} required autoComplete="new-password"
                    placeholder="Enter the same password"
                    value={confirmPw} onChange={e => setConfirmPw(e.target.value)}
                    className={`${iCls} pr-[52px]`} />
                  <button type="button" onClick={() => setShowConfirmPw(!showConfirmPw)}
                    className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#7c7c7c] hover:text-[#1e1e20] transition-colors">
                    {showConfirmPw ? eyeOff : eyeOn}
                  </button>
                </div>
              </F>
              {error && <ErrorBox message={error} />}
              <button type="submit" disabled={loading} className={`${bCls} mt-[8px]`}>
                {loading && <Spinner />}
                {loading ? 'Saving…' : 'Set new password'}
              </button>
            </form>
            <BackToLogin onClick={() => go('login')} mobile={!desktop} />
          </div>
        </>
      )
    }
    desktopCard = content(true)
    mobileCard = content(false)
  }

  else if (mode === 'password-changed') {
    const content = (desktop: boolean) => (
      <div className="flex flex-col items-center gap-[32px] text-center">
        <IconCircle>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d07502" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
          </svg>
        </IconCircle>
        <div>
          <h1 className={`font-black uppercase text-[#1e1e20] leading-none ${desktop ? 'text-[28px]' : 'text-[24px]'}`}>PASSWORD CHANGED!</h1>
          <p className={`text-[#1e1e20] mt-[8px] ${desktop ? 'text-[16px]' : 'text-[14px]'}`}>Your password has been successfully changed.</p>
        </div>
        <button onClick={() => { reset(); go('login') }} className={desktop ? btnDark : mBtnDark}>
          Back to Login
        </button>
      </div>
    )
    desktopCard = content(true)
    mobileCard = content(false)
  }

  return (
    <>
      {/* ── MOBILE ── */}
      <div className="md:hidden flex flex-col min-h-screen bg-[#1e1e20]" suppressHydrationWarning>
        <div className="flex items-center justify-between px-[16px] h-[64px] border-b border-white/16 shrink-0">
          <Link href="/">
            <Image src="/logo-white.svg" alt="Schoolhouse Lane" width={102} height={40} className="h-[39px] w-auto" />
          </Link>
          <button onClick={() => router.back()} className="flex items-center justify-center w-[30px] h-[30px] text-white" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center px-[16px] py-[24px]">
          <div className="w-full bg-white rounded-[24px] p-[24px] flex flex-col gap-[24px]">
            {mobileCard}
          </div>
        </div>
        <p className="text-center text-[14px] text-[#868686] tracking-[0.14px] pb-[24px]">
          © 2025 Schoolhouse Lane
        </p>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex h-screen" suppressHydrationWarning>
        {/* Left: cream panel */}
        <div className="flex-1 bg-[#f5f3ef] flex flex-col items-center justify-center px-[60px] lg:px-[90px] py-[80px] gap-[40px] lg:gap-[48px] overflow-y-auto">
          <Image
            src="/logo-white.svg"
            alt="Schoolhouse Lane"
            width={220}
            height={86}
            className="w-[160px] lg:w-[220px] h-auto invert shrink-0"
          />
          <div className="bg-white rounded-[24px] w-full max-w-[710px] px-[24px] py-[40px] lg:py-[48px] flex flex-col items-center gap-[60px]">
            {desktopCard}
          </div>
        </div>
        {/* Right: full-height image */}
        <div className="flex-1 relative min-h-0 sticky top-0 h-screen">
          <Image src="/images/login.png" alt="Schoolhouse Lane" fill className="object-cover object-center" priority />
        </div>
      </div>
    </>
  )
}
