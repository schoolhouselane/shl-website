'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import CalendlyButton from '@/components/CalendlyButton'

export default function LoginContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showForgotMsg, setShowForgotMsg] = useState(false)

  // Show error if Google auth was denied (no account found)
  const oauthError = searchParams.get('error')
  const [error, setError] = useState(
    oauthError === 'AccessDenied' ? "We couldn't find an account linked to that Google profile." : ''
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("We couldn't find an account with that email address.")
  }

  const handleGoogle = () => {
    signIn('google', { callbackUrl: '/portal' })
  }

  return (
    <>

      {/* ── MOBILE: dark full-screen ── */}
      <div className="md:hidden flex flex-col min-h-screen bg-[#1e1e20]">

        {/* Mini header */}
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

        {/* Form card */}
        <div className="flex-1 flex items-center px-[16px] py-[24px]">
          <div className="w-full bg-white rounded-[24px] p-[24px] flex flex-col gap-[24px]">
            <div className="flex flex-col items-center gap-[4px] text-center">
              <h1 className="font-black text-[24px] uppercase tracking-[0.24px] text-[#1e1e20] leading-none">WELCOME</h1>
              <p className="text-[14px] text-[#1e1e20]">Break the ice! Let us help you out</p>
            </div>
            <MobileForm
              email={email} setEmail={setEmail}
              password={password} setPassword={setPassword}
              showPassword={showPassword} setShowPassword={setShowPassword}
              showForgotMsg={showForgotMsg} setShowForgotMsg={setShowForgotMsg}
              onSubmit={handleSubmit}
              error={error}
              onGoogle={handleGoogle}
            />
          </div>
        </div>

        <p className="text-center text-[14px] text-[#868686] tracking-[0.14px] pb-[24px]">
          © 2025 Schoolhouse Lane
        </p>
      </div>

      {/* ── DESKTOP: two-column full-screen ── */}
      <div className="hidden md:flex h-screen">

        {/* Left: cream panel */}
        <div className="flex-1 bg-[#f5f3ef] flex flex-col items-center justify-center px-[60px] lg:px-[90px] py-[80px] gap-[40px] lg:gap-[48px] overflow-y-auto">

          {/* Logo — centered */}
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt="Schoolhouse Lane"
              width={220}
              height={86}
              className="w-[160px] lg:w-[220px] h-auto invert shrink-0"
            />
          </Link>

          {/* White card */}
          <div className="bg-white rounded-[24px] w-full max-w-[710px] px-[24px] py-[40px] lg:py-[48px] flex flex-col items-center gap-[60px]">

            {/* Heading */}
            <div className="flex flex-col items-center text-center gap-[8px]">
              <h1 className="font-black text-[28px] uppercase text-[#1e1e20] leading-none tracking-[0.28px]">
                WELCOME
              </h1>
              <p className="text-[16px] text-[#1e1e20] leading-[24px]">
                Break the ice! Let us help you out
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-[544px] flex flex-col gap-[30px]">

              <div className="flex flex-col gap-[16px]">

                {/* Email */}
                <div className="flex flex-col gap-[12px]">
                  <label className="text-[16px] text-[#1e1e20] uppercase">EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[47px] border border-[#1e1e20] rounded-[50px] px-[24px] py-[14px] text-[16px] text-[#1e1e20] bg-white outline-none focus:opacity-80 transition-opacity placeholder:text-[#7c7c7c]"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-[12px]">
                  <label className="text-[16px] text-[#1e1e20] uppercase">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-[47px] border border-[#1e1e20] rounded-[50px] px-[24px] pr-[50px] py-[14px] text-[16px] text-[#1e1e20] bg-white outline-none focus:opacity-80 transition-opacity placeholder:text-[#7c7c7c]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#7c7c7c] hover:text-[#1e1e20] transition-colors"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="flex flex-col items-end gap-[4px]">
                    <button type="button" onClick={() => setShowForgotMsg(!showForgotMsg)} className="text-[16px] text-[#d07502] hover:opacity-70 transition-opacity">
                      Forgot Password?
                    </button>
                    {showForgotMsg && (
                      <p className="text-[13px] text-[#353535] text-right">
                        Email{' '}
                        <a href="mailto:hello@schoolhouselane.co" className="text-[#d07502] underline">hello@schoolhouselane.co</a>
                        {' '}to reset.
                      </p>
                    )}
                  </div>
                </div>

                {/* Error message */}
                {error && (
                  <div className="flex items-start gap-[10px] bg-red-50 border border-red-200 rounded-[12px] px-[16px] py-[12px]">
                    <svg className="shrink-0 mt-[2px]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
                    </svg>
                    <p className="text-[14px] text-red-600 leading-[1.5]">{error}</p>
                  </div>
                )}

                {/* Log In */}
                <button
                  type="submit"
                  className="w-full bg-[#1e1e20] text-white rounded-[50px] py-[14px] text-[20px] font-bold uppercase tracking-[0.2px] hover:opacity-80 transition-opacity"
                >
                  Log In
                </button>
              </div>

              {/* New to SHL */}
              <p className="text-center text-[18px] text-[#1e1e20]">
                New to Schoolhouse Lane?{' '}
                <CalendlyButton className="text-[#d07502] font-bold hover:opacity-70 transition-opacity">
                  Book a Demo
                </CalendlyButton>
              </p>

              {/* Or divider */}
              <div className="flex items-center gap-[16px]">
                <div className="flex-1 h-px bg-[#868686]/30" />
                <span className="text-[14px] text-[#868686] tracking-[0.14px]">Or</span>
                <div className="flex-1 h-px bg-[#868686]/30" />
              </div>

              {/* Google */}
              <button
                type="button"
                onClick={handleGoogle}
                className="w-full flex items-center justify-center gap-[12px] bg-white border border-[#868686]/30 rounded-[12px] px-[9px] py-[8px] text-[16px] font-bold text-[#1e1e20] hover:bg-[#f5f3ef] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

            </form>
          </div>
        </div>

        {/* Right: full-height image */}
        <div className="flex-1 relative min-h-0">
          <Image src="/images/login.png" alt="Schoolhouse Lane" fill className="object-cover object-center" priority />
        </div>

      </div>
    </>
  )
}

interface MobileFormProps {
  email: string; setEmail: (v: string) => void
  password: string; setPassword: (v: string) => void
  showPassword: boolean; setShowPassword: (v: boolean) => void
  showForgotMsg: boolean; setShowForgotMsg: (v: boolean) => void
  onSubmit: (e: React.FormEvent) => void
  error: string
  onGoogle: () => void
}

function MobileForm({ email, setEmail, password, setPassword, showPassword, setShowPassword, showForgotMsg, setShowForgotMsg, onSubmit, error, onGoogle }: MobileFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-[16px]">

      <div className="flex flex-col gap-[8px]">
        <label className="text-[14px] text-[#1e1e20] tracking-[0.14px]">Email</label>
        <input
          type="email" required placeholder="Enter your email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[42px] border border-[#868686] rounded-[8px] px-[14px] text-[14px] text-[#1e1e20] bg-white outline-none focus:border-[#1e1e20] transition-colors placeholder:text-[#868686]"
        />
      </div>

      <div className="flex flex-col gap-[8px]">
        <label className="text-[14px] text-[#1e1e20] tracking-[0.14px]">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'} required placeholder="Enter your password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[42px] border border-[#868686] rounded-[8px] px-[14px] pr-[46px] text-[14px] text-[#1e1e20] bg-white outline-none focus:border-[#1e1e20] transition-colors placeholder:text-[#868686]"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#868686] hover:text-[#1e1e20] transition-colors" aria-label={showPassword ? 'Hide' : 'Show'}>
            {showPassword ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
            )}
          </button>
        </div>
        <div className="flex flex-col items-end gap-[4px]">
          <button type="button" onClick={() => setShowForgotMsg(!showForgotMsg)} className="text-[14px] text-[#d07502] hover:opacity-70 transition-opacity">
            Forgot Password?
          </button>
          {showForgotMsg && (
            <p className="text-[12px] text-[#353535] text-right">
              Email <a href="mailto:hello@schoolhouselane.co" className="text-[#d07502] underline">hello@schoolhouselane.co</a> to reset.
            </p>
          )}
        </div>
      </div>

      {error && (
        <div className="flex items-start gap-[10px] bg-red-50 border border-red-200 rounded-[12px] px-[16px] py-[12px]">
          <svg className="shrink-0 mt-[2px]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
          </svg>
          <p className="text-[14px] text-red-600 leading-[1.5]">{error}</p>
        </div>
      )}

      <button type="submit" className="w-full bg-[#1e1e20] text-white rounded-[50px] py-[14px] text-[16px] font-bold uppercase tracking-[0.16px] hover:opacity-80 transition-opacity">
        Log In
      </button>

      <p className="text-center text-[16px] text-[#1e1e20]">
        New to Schoolhouse Lane?{' '}
        <CalendlyButton className="text-[#d07502] font-bold hover:opacity-70 transition-opacity">Book a Demo</CalendlyButton>
      </p>

      <div className="flex items-center gap-[16px] pt-[8px]">
        <div className="flex-1 h-px bg-[#868686]/30" />
        <span className="text-[14px] text-[#868686]">Or</span>
        <div className="flex-1 h-px bg-[#868686]/30" />
      </div>

      <button type="button" onClick={onGoogle} className="w-full flex items-center justify-center gap-[12px] bg-white border border-[#868686]/30 rounded-[12px] px-[9px] py-[8px] text-[16px] font-bold text-[#1e1e20] hover:bg-[#f5f3ef] transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>

    </form>
  )
}
