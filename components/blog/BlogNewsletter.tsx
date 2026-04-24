'use client'
import { useState } from 'react'

export default function BlogNewsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section className="bg-[#d7d7d7] px-4 md:px-6 lg:px-[90px] py-[48px] md:py-[56px] lg:py-[60px]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-[32px] lg:gap-[60px]">

        {/* Left: headline + description */}
        <div className="flex flex-col gap-[12px] lg:gap-[20px] lg:max-w-[875px]">
          <h2 className="font-black text-[32px] md:text-[40px] lg:text-[60px] uppercase text-[#1e1e20] leading-none tracking-[-1px] lg:tracking-[-1.5px]">
            Get growth ideas<br />in your inbox.
          </h2>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#1e1e20] leading-[1.6]">
            Strategy, branding, and digital thinking — monthly, never spammy.
          </p>
        </div>

        {/* Right: email form */}
        <div className="shrink-0 w-full lg:w-[546px]">
          {submitted ? (
            <p className="text-[16px] font-medium text-[#1e1e20]">You're in. Talk soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR@EMAIL.COM"
                required
                className="w-full border border-[#1e1e20] rounded-full px-[24px] py-[10px] pr-[150px] text-[14px] lg:text-[16px] text-[#1e1e20] bg-transparent placeholder:text-[#1e1e20]/50 outline-none focus:ring-2 focus:ring-[#1e1e20]/20"
              />
              <button
                type="submit"
                className="absolute right-0 flex items-center gap-[10px] bg-[#1e1e20] text-white rounded-full px-[24px] py-[10px] text-[14px] lg:text-[16px] font-medium uppercase tracking-wide hover:opacity-80 transition-opacity"
              >
                Subscribe
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
