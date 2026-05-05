'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CalendlyButton from '@/components/CalendlyButton'

export default function LoginContent() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showForgotMsg, setShowForgotMsg] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: authenticate
  }

  return (
    <>
      {/* Mobile-only header: white logo + X close */}
      <div className="md:hidden flex items-center justify-between px-[16px] h-[64px] border-b border-white/16 shrink-0">
        <Link href="/">
          <Image
            src="/logo-white.svg"
            alt="Schoolhouse Lane"
            width={102}
            height={40}
            className="h-[39px] w-auto"
          />
        </Link>
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center w-[30px] h-[30px] text-white"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main content area */}
      <section className="flex-1 flex items-center px-[16px] md:px-6 lg:px-[90px] pt-[24px] md:pt-[95px] lg:pt-[82px] pb-[24px] md:pb-[48px] lg:pb-[60px]">
        <div className="w-full flex gap-[30px] items-stretch">

          {/* Form card */}
          <div className="w-full lg:flex-1 bg-white rounded-[24px] p-[24px] md:px-[48px] md:py-[48px] lg:px-[60px] lg:py-[60px] flex flex-col gap-[24px] md:gap-[32px]">

            <h1 className="font-bold md:font-black text-[24px] md:text-[48px] lg:text-[64px] uppercase tracking-[0.24px] md:tracking-[0.64px] text-[#1e1e20] leading-none text-center md:text-left">
              WELCOME
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] md:gap-[20px]">

              {/* Email */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] text-[#1e1e20] tracking-[0.14px]">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[42px] md:h-[52px] border border-[#868686] rounded-[8px] md:rounded-[12px] px-[14px] text-[14px] md:text-[16px] font-medium text-[#1e1e20] bg-white outline-none focus:border-[#1e1e20] transition-colors placeholder:text-[#868686]"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] text-[#1e1e20] tracking-[0.14px]">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[42px] md:h-[52px] border border-[#868686] rounded-[8px] md:rounded-[12px] px-[14px] pr-[46px] text-[14px] md:text-[16px] font-medium text-[#1e1e20] bg-white outline-none focus:border-[#1e1e20] transition-colors placeholder:text-[#868686]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#868686] hover:text-[#1e1e20] transition-colors"
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
                  <button
                    type="button"
                    onClick={() => setShowForgotMsg(!showForgotMsg)}
                    className="text-[14px] text-[#d07502] hover:opacity-70 transition-opacity"
                  >
                    Forgot Password?
                  </button>
                  {showForgotMsg && (
                    <p className="text-[12px] text-[#353535] text-right">
                      Email{' '}
                      <a href="mailto:hello@schoolhouselane.co" className="text-[#d07502] underline">
                        hello@schoolhouselane.co
                      </a>{' '}
                      to reset.
                    </p>
                  )}
                </div>
              </div>

              {/* Log In */}
              <button
                type="submit"
                className="w-full bg-[#1e1e20] text-white rounded-[50px] py-[14px] text-[16px] md:text-[20px] font-bold uppercase tracking-[0.16px] hover:opacity-80 transition-opacity"
              >
                Log In
              </button>

              {/* New to SHL */}
              <p className="text-center text-[16px] font-normal text-[#1e1e20]">
                New to Schoolhouse Lane?{' '}
                <CalendlyButton className="text-[#d07502] font-bold hover:opacity-70 transition-opacity">
                  Book a Demo
                </CalendlyButton>
              </p>

              {/* Divider */}
              <div className="flex items-center gap-[16px] pt-[8px]">
                <div className="flex-1 h-px bg-[#868686]/30" />
                <span className="text-[14px] text-[#868686] tracking-[0.14px]">Or</span>
                <div className="flex-1 h-px bg-[#868686]/30" />
              </div>

              {/* Google */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-[12px] bg-white border border-[#868686]/30 rounded-[12px] md:rounded-[50px] px-[9px] py-[8px] md:py-[14px] text-[16px] font-bold text-[#1e1e20] hover:bg-[#f5f3ef] transition-colors"
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

          {/* Image panel — desktop only */}
          <div className="hidden lg:block relative rounded-[24px] overflow-hidden flex-1">
            <Image
              src="/images/hero-2.png"
              alt="Schoolhouse Lane"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* Mobile-only copyright */}
      <p className="md:hidden text-center text-[14px] text-[#868686] tracking-[0.14px] pb-[24px]">
        © 2025 Schoolhouse Lane
      </p>
    </>
  )
}
