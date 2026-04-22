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
    <section className="bg-[#d7d7d7] px-4 md:px-6 lg:px-[90px] py-[48px] lg:py-[60px]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-[32px] lg:gap-[60px]">

        {/* Left: headline + sub */}
        <div className="flex flex-col gap-[12px] lg:gap-[16px]">
          <h2 className="font-black text-[32px] md:text-[40px] lg:text-[60px] uppercase text-[#1e1e20] leading-none tracking-[-1.5px]">
            Get growth ideas<br />in your inbox.
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#1e1e20] leading-[1.6] max-w-[420px]">
            Brand strategy, creative thinking, and real-world lessons — straight from the SHL team.
          </p>
        </div>

        {/* Right: email form */}
        <div className="flex flex-col gap-[12px] lg:w-[546px] shrink-0">
          {submitted ? (
            <p className="text-[16px] font-medium text-[#1e1e20]">
              You're in. Talk soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full border border-[#1e1e20] rounded-full px-[24px] py-[10px] pr-[140px] text-[16px] text-[#1e1e20] bg-transparent placeholder:text-[#1e1e20]/50 outline-none focus:ring-2 focus:ring-[#1e1e20]/30"
              />
              <button
                type="submit"
                className="absolute right-0 bg-[#1e1e20] text-white rounded-full px-[24px] py-[10px] text-[14px] font-medium uppercase tracking-wide hover:opacity-80 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
