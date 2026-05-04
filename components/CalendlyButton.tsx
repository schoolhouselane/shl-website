'use client'
import { useState } from 'react'

const BOOKING_URL = 'https://calendly.com/dmg-schoolhouselane/30min'

const COMPANY_SIZES = ['1–10', '11–50', '50–200']

const SERVICES = [
  'Brand Identity & Positioning',
  'Campaigns & Creative Direction',
  'Websites & Digital Experiences',
  'AI Creative & Innovation',
  'Strategy & Growth Consulting',
]

function openCalendly(fullName: string, email: string, companySize: string, service: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Calendly = (window as any).Calendly
  const url = BOOKING_URL
  if (Calendly?.initPopupWidget) {
    Calendly.initPopupWidget({
      url,
      prefill: {
        name: fullName,
        email,
        customAnswers: { a1: companySize, a2: service },
      },
    })
  } else {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

interface Props {
  className?: string
  children: React.ReactNode
}

export default function CalendlyButton({ className, children }: Props) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [companySize, setCompanySize] = useState('')
  const [service, setService] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function reset() {
    setFullName('')
    setEmail('')
    setCompanySize('')
    setService('')
    setErrors({})
    setLoading(false)
  }

  function validate() {
    const e: Record<string, string> = {}
    if (!fullName.trim()) e.fullName = 'Required'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Valid email required'
    if (!companySize) e.companySize = 'Required'
    if (!service) e.service = 'Required'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    try {
      await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, companySize, service }),
      })
    } catch {
      // still open Calendly even if API fails
    }

    setOpen(false)
    reset()
    openCalendly(fullName, email, companySize, service)
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-6"
          onClick={() => { setOpen(false); reset() }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div
            className="relative z-10 bg-white rounded-[30px] p-[32px] md:p-[56px] lg:p-[90px] w-full max-w-[1312px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => { setOpen(false); reset() }}
              className="absolute top-[20px] right-[24px] text-[#7c7c7c] hover:text-[#1e1e20] text-[24px] leading-none transition-colors"
              aria-label="Close"
            >
              ×
            </button>

            {/* Header */}
            <div className="mb-[32px]">
              <h2 className="font-black text-[22px] md:text-[28px] uppercase text-[#1e1e20] leading-tight">
                Book a demo with our experts
              </h2>
              <p className="text-[16px] text-[#1e1e20] mt-[4px]">
                Break the ice! Let us help you out
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[32px]">

                {/* Business Email */}
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[16px] text-[#1e1e20] uppercase tracking-wide">
                    Business Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email"
                    className={`border rounded-full px-[24px] py-[14px] text-[16px] text-[#1e1e20] placeholder:text-[#7c7c7c] outline-none focus:border-[#1e1e20] transition-colors ${errors.email ? 'border-red-500' : 'border-[#1e1e20]'}`}
                  />
                  {errors.email && <p className="text-red-500 text-[13px] pl-[12px]">{errors.email}</p>}
                </div>

                {/* Full Name */}
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[16px] text-[#1e1e20] uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className={`border rounded-full px-[24px] py-[14px] text-[16px] text-[#1e1e20] placeholder:text-[#7c7c7c] outline-none focus:border-[#1e1e20] transition-colors ${errors.fullName ? 'border-red-500' : 'border-[#1e1e20]'}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-[13px] pl-[12px]">{errors.fullName}</p>}
                </div>

                {/* Company Size */}
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[16px] text-[#1e1e20] uppercase tracking-wide">
                    Company Size
                  </label>
                  <div className="relative">
                    <select
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      className={`w-full border rounded-full px-[24px] py-[14px] pr-[48px] text-[16px] outline-none focus:border-[#1e1e20] transition-colors appearance-none bg-white cursor-pointer ${companySize ? 'text-[#1e1e20]' : 'text-[#7c7c7c]'} ${errors.companySize ? 'border-red-500' : 'border-[#1e1e20]'}`}
                    >
                      <option value="" disabled>Select the size of your company</option>
                      {COMPANY_SIZES.map((s) => (
                        <option key={s} value={s}>{s} people</option>
                      ))}
                    </select>
                    <svg className="pointer-events-none absolute right-[20px] top-1/2 -translate-y-1/2 text-[#1e1e20]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                  {errors.companySize && <p className="text-red-500 text-[13px] pl-[12px]">{errors.companySize}</p>}
                </div>

                {/* Services */}
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[16px] text-[#1e1e20] uppercase tracking-wide">
                    Services
                  </label>
                  <div className="relative">
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={`w-full border rounded-full px-[24px] py-[14px] pr-[48px] text-[16px] outline-none focus:border-[#1e1e20] transition-colors appearance-none bg-white cursor-pointer ${service ? 'text-[#1e1e20]' : 'text-[#7c7c7c]'} ${errors.service ? 'border-red-500' : 'border-[#1e1e20]'}`}
                    >
                      <option value="" disabled>What service are you most interested in?</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <svg className="pointer-events-none absolute right-[20px] top-1/2 -translate-y-1/2 text-[#1e1e20]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                  {errors.service && <p className="text-red-500 text-[13px] pl-[12px]">{errors.service}</p>}
                </div>

              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1e1e20] text-white rounded-full px-[32px] py-[16px] text-[16px] md:text-[20px] font-bold uppercase whitespace-nowrap hover:bg-[#333] transition-colors disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Book a Demo'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  )
}
