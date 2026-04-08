'use client'
import { useState } from 'react'

export default function GetGrowthModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:hello@schoolhouselane.co?subject=Get Growth&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-3 w-fit border border-white rounded-full px-6 py-3 text-[16px] font-medium uppercase text-white hover:bg-white hover:text-[#1e1e20] transition-colors font-[var(--font-manrope)]"
      >
        Get Growth
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative bg-[#f5f3ef] rounded-sm p-8 md:p-12 w-full max-w-[520px] z-10">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#1e1e20] hover:opacity-60"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <h2 className="font-black text-[32px] md:text-[40px] leading-tight uppercase text-[#1e1e20] mb-2">
              Let&apos;s Get You Growing
            </h2>
            <p className="text-[15px] text-[#1e1e20]/70 mb-8">
              Drop us your email and a note. We&apos;ll get back to you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#1e1e20]/30 rounded-sm px-4 py-3 text-[15px] bg-white outline-none focus:border-[#1e1e20] transition-colors"
              />
              <textarea
                placeholder="Tell us about your brand (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full border border-[#1e1e20]/30 rounded-sm px-4 py-3 text-[15px] bg-white outline-none focus:border-[#1e1e20] transition-colors resize-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#1e1e20] text-white rounded-full px-6 py-3 text-[15px] font-medium uppercase hover:opacity-80 transition-opacity"
              >
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
