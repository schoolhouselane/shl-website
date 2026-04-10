'use client'
import Link from 'next/link'
import { useState } from 'react'

const serviceOptions = [
  'Brand Identity & Positioning',
  'Gallery & Videos',
  'Websites & Digital Experiences',
  'Campaigns & Creative Direction',
  'AI Creative & Innovation',
  'Strategy & Growth Consulting',
]

function ArrowUpRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function ContactHero() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    interest: '',
    newsletter: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      ``,
      form.interest,
    ].join('\n')
    window.location.href = `mailto:hello@schoolhouselane.com?subject=New enquiry from ${form.name}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] py-[80px] md:py-[120px]">
      <div className="flex flex-col lg:flex-row gap-[30px] lg:items-end">

        {/* ── Left column ── */}
        <div className="flex flex-col justify-between gap-[60px] lg:gap-0 flex-1 lg:min-h-[820px]">

          {/* Headline + description */}
          <div className="flex flex-col gap-[16px]">
            <h1 className="font-black text-[40px] md:text-[56px] lg:text-[64px] uppercase text-[#1e1e20] leading-[0.93] tracking-[-1.5px] max-w-[720px]">
              Let&apos;s Build Your Next Revenue Chapter
            </h1>
            <p className="text-[16px] md:text-[20px] text-[#111] leading-[1.7] max-w-[600px]">
              15 minutes. No sales pitch. No deck. Just specific, actionable growth ideas tailored to your brand — from someone who&apos;s done it 80 times.
            </p>
          </div>

          {/* Emails + socials */}
          <div className="flex flex-col gap-[40px]">

            {/* Email addresses */}
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[8px]">
                <div className="border-b border-[#1e1e20] py-[10px]">
                  <Link href="mailto:hello@schoolhouselane.com" className="font-extrabold text-[20px] md:text-[24px] text-[#1e1e20] lowercase hover:opacity-60 transition-opacity">
                    hello@schoolhouselane.com
                  </Link>
                </div>
                <p className="text-[14px] md:text-[16px] text-[#111] leading-[1.75]">
                  For new business, project briefs, and general questions
                </p>
              </div>

              <div className="flex flex-col gap-[8px]">
                <div className="border-b border-[#1e1e20] py-[10px]">
                  <Link href="mailto:careers@schoolhouselane.com" className="font-black text-[20px] md:text-[24px] text-[#1e1e20] lowercase hover:opacity-60 transition-opacity">
                    careers@schoolhouselane.com
                  </Link>
                </div>
                <p className="text-[14px] md:text-[16px] text-[#111] leading-[1.75]">
                  Attach your portfolio and a one-paragraph cover note. No generic applications.
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-[30px] items-center">
              {[
                { name: 'LinkedIn', href: 'https://linkedin.com/company/schoolhouselane' },
                { name: 'Behance', href: 'https://behance.net/schoolhouselane' },
                { name: 'Instagram', href: 'https://instagram.com/schoolhouselane' },
              ].map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  className="flex items-center gap-[2px] text-[20px] md:text-[24px] text-[#1e1e20] hover:opacity-60 transition-opacity"
                >
                  {s.name}
                  <ArrowUpRight />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column: Form card ── */}
        <div className="bg-[#1e1e20] rounded-[20px] md:rounded-[30px] p-[40px] md:p-[60px] lg:p-[90px] w-full lg:w-[620px] xl:w-[722px] shrink-0 flex flex-col gap-[48px]">

          {/* Card header */}
          <div className="flex flex-col gap-[4px]">
            <h2 className="font-black text-[22px] md:text-[28px] uppercase text-white leading-tight">
              LET&apos;S Make You Better
            </h2>
            <p className="text-[14px] md:text-[16px] text-white/60">
              Break the ice! Let us help you out
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col gap-4 py-8">
              <p className="font-black text-[32px] text-white uppercase leading-tight">Message sent.</p>
              <p className="text-white/60 text-[16px]">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[36px]">

              {/* Name */}
              <div className="flex flex-col gap-[10px]">
                <label className="text-[14px] md:text-[16px] text-white">What&apos;s your name?*</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-[8px] text-[16px] text-white placeholder:text-white/25 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-[10px]">
                <label className="text-[14px] md:text-[16px] text-white">What&apos;s your phone number?*</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-[8px] text-[16px] text-white placeholder:text-white/25 transition-colors"
                  placeholder="+1 (000) 000 0000"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[10px]">
                <label className="text-[14px] md:text-[16px] text-white">What&apos;s your email?</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-[8px] text-[16px] text-white placeholder:text-white/25 transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              {/* Service dropdown */}
              <div className="flex flex-col gap-[10px]">
                <div className="flex items-center justify-between border-b border-white/30 pb-[8px]">
                  <label className="text-[14px] md:text-[16px] text-white">
                    What Service Are You Most Interested In?
                  </label>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="shrink-0 pointer-events-none">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <select
                  value={form.service}
                  onChange={(e) => set('service', e.target.value)}
                  className="w-full bg-transparent outline-none text-[16px] text-white/70 focus:text-white transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#1e1e20]">Select a service…</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s} className="bg-[#1e1e20] text-white">{s}</option>
                  ))}
                </select>
              </div>

              {/* Interest / message */}
              <div className="flex flex-col gap-[10px]">
                <label className="text-[14px] md:text-[16px] text-white">Describe your interest</label>
                <textarea
                  rows={3}
                  value={form.interest}
                  onChange={(e) => set('interest', e.target.value)}
                  className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-[8px] text-[16px] text-white placeholder:text-white/25 transition-colors resize-none"
                  placeholder="Tell us about your brand and goals…"
                />
              </div>

              {/* Newsletter checkbox */}
              <label className="flex items-start gap-[10px] cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.newsletter}
                  onChange={(e) => set('newsletter', e.target.checked)}
                  className="mt-[3px] shrink-0 w-[18px] h-[18px] border border-white rounded-[3px] accent-white cursor-pointer"
                />
                <span className="text-[13px] md:text-[14px] text-white/70 leading-[1.75] uppercase">
                  Subscribe to our newsletter, don&apos;t miss out anything from us.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-white text-[#1e1e20] font-bold text-[18px] md:text-[20px] rounded-full px-[24px] py-[14px] hover:bg-white/90 transition-colors cursor-pointer"
              >
                Submit
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
