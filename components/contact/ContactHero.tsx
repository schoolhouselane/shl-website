'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

function ArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function ContactHero() {
  const [ref, inView] = useInView(0.05)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    interest: '',
    newsletter: false,
  })
  const [phoneError, setPhoneError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.phone && !/^[\d\s\+\-\(\)]{7,}$/.test(form.phone)) {
      setPhoneError(true)
      return
    }
    setPhoneError(false)
    setLoading(true)
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[80px] md:pt-[100px] lg:pt-[120px] pb-[40px] md:pb-[60px] lg:pb-[120px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div className="flex flex-col lg:flex-row gap-[24px] md:gap-[40px] lg:gap-[30px] lg:items-end">

        {/* ── Left column ── */}
        <div className="flex flex-col flex-1 lg:justify-between lg:min-h-[939px]">

          {/* Headline + description */}
          <div className="flex flex-col gap-[14px]">
            <h1 className="font-black text-[24px] md:text-[32px] lg:text-[64px] uppercase text-[#1e1e20] leading-[0.93] tracking-[-1.5px]">
              Let&apos;s Build Your Next Revenue Chapter
            </h1>
            <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#111] leading-[1.7] max-w-[670px]">
              15 minutes. No sales pitch. No deck. Just specific, actionable growth ideas tailored to your brand — from someone who&apos;s done it 80 times.
            </p>
          </div>

          {/* Emails + socials — desktop only here */}
          <div className="hidden lg:flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[6px]">
                <div className="border-b border-[#1e1e20] py-[10px]">
                  <Link href="mailto:hello@schoolhouselane.co" className="font-extrabold text-[20px] lg:text-[24px] text-[#1e1e20] lowercase hover:opacity-60 transition-opacity">
                    hello@schoolhouselane.co
                  </Link>
                </div>
                <p className="text-[16px] text-[#111] leading-[1.75]">
                  For new business, project briefs, and general questions
                </p>
              </div>
              <div className="flex flex-col gap-[6px]">
                <div className="border-b border-[#1e1e20] py-[10px]">
                  <Link href="mailto:careers@schoolhouselane.co" className="font-black text-[20px] lg:text-[24px] text-[#1e1e20] lowercase hover:opacity-60 transition-opacity">
                    careers@schoolhouselane.co
                  </Link>
                </div>
                <p className="text-[16px] text-[#111] leading-[1.75]">
                  Attach your portfolio and a one-paragraph cover note. No generic applications.
                </p>
              </div>
            </div>
            <div className="flex gap-[30px] items-center">
              {[
                { name: 'LinkedIn', href: 'https://linkedin.com/company/schoolhouselane' },
                { name: 'Behance', href: 'https://behance.net/schoolhouselane' },
                { name: 'Instagram', href: 'https://instagram.com/schoolhouselane' },
              ].map((s) => (
                <Link key={s.name} href={s.href} target="_blank" className="flex items-center gap-[2px] text-[20px] lg:text-[24px] text-[#1e1e20] hover:opacity-60 transition-opacity">
                  {s.name}
                  <ArrowUpRight />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column: Form card ── */}
        <div className="bg-[#1e1e20] rounded-[30px] p-[24px] md:p-[40px] lg:p-[90px] w-full lg:w-[620px] xl:w-[722px] shrink-0 flex flex-col gap-[40px] lg:gap-[63px]">

          {/* Card header */}
          <div>
            <p className="font-black text-[20px] md:text-[24px] lg:text-[32px] uppercase text-white leading-normal">
              Let&apos;s Get In Touch
            </p>
            <p className="font-normal text-[14px] md:text-[16px] text-white leading-[24px]">
              Break the ice! Let us help you out
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col gap-4 py-8">
              <p className="font-black text-[28px] md:text-[32px] text-white uppercase leading-tight">Message sent.</p>
              <p className="text-white/60 text-[15px] md:text-[16px]">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[28px] lg:gap-[39px]">

              {/* Fields wrapper */}
              <div className="flex flex-col gap-[28px] lg:gap-[40px]">

                {/* Name */}
                <input
                  required
                  type="text"
                  placeholder="What's your name?*"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  className="w-full bg-transparent border-b border-white outline-none appearance-none p-0 pb-[6px] font-['Inter',sans-serif] font-normal leading-none text-[15px] md:text-[16px] text-white placeholder:text-white transition-colors"
                />

                {/* Phone */}
                <div className="flex flex-col gap-[4px]">
                  <input
                    required
                    type="tel"
                    placeholder="What's your phone number?*"
                    value={form.phone}
                    onChange={(e) => { set('phone', e.target.value); setPhoneError(false) }}
                    className="w-full bg-transparent border-b border-white outline-none appearance-none p-0 pb-[6px] font-['Inter',sans-serif] font-normal leading-none text-[15px] md:text-[16px] text-white placeholder:text-white transition-colors"
                  />
                  {phoneError && (
                    <p className="font-normal text-[10px] text-red-500">Please enter a valid phone number.</p>
                  )}
                </div>

                {/* Email */}
                <input
                  type="email"
                  placeholder="What's your email?"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className="w-full bg-transparent border-b border-white outline-none appearance-none p-0 pb-[6px] font-['Inter',sans-serif] font-normal leading-none text-[15px] md:text-[16px] text-white placeholder:text-white transition-colors"
                />

                {/* Service dropdown */}
                <div className="flex items-center gap-[8px] border-b border-white transition-colors">
                  <select
                    value={form.service}
                    onChange={(e) => set('service', e.target.value)}
                    className="flex-1 bg-transparent outline-none appearance-none p-0 pb-[6px] font-['Inter',sans-serif] font-normal leading-none text-[15px] md:text-[16px] text-white transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#1e1e20]">What Are You Most Interested In?</option>
                    <option value="Brand Identity & Positioning" className="bg-[#1e1e20]">Brand Identity &amp; Positioning</option>
                    <option value="Gallery & Videos" className="bg-[#1e1e20]">Gallery &amp; Videos</option>
                    <option value="Websites & Digital Experiences" className="bg-[#1e1e20]">Websites &amp; Digital Experiences</option>
                    <option value="Campaigns & Creative Direction" className="bg-[#1e1e20]">Campaigns &amp; Creative Direction</option>
                    <option value="AI Creative & Innovation" className="bg-[#1e1e20]">AI Creative &amp; Innovation</option>
                    <option value="Strategy & Growth Consulting" className="bg-[#1e1e20]">Strategy &amp; Growth Consulting</option>
                    <option value="I have a project idea" className="bg-[#1e1e20]">I have a project idea</option>
                    <option value="I want to work with you" className="bg-[#1e1e20]">I want to work with you</option>
                  </select>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="shrink-0 pointer-events-none mb-[6px]">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                {/* Describe your interest */}
                <input
                  type="text"
                  placeholder="Describe your interest"
                  value={form.interest}
                  onChange={(e) => set('interest', e.target.value)}
                  className="w-full bg-transparent border-b border-white outline-none appearance-none p-0 pb-[6px] font-['Inter',sans-serif] font-normal leading-none text-[15px] md:text-[16px] text-white placeholder:text-white transition-colors"
                />
              </div>

              {/* Newsletter checkbox */}
              <label className="flex items-center gap-[8px] cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={form.newsletter}
                  onChange={(e) => set('newsletter', e.target.checked)}
                />
                <div className={`shrink-0 w-[18px] h-[18px] border border-white rounded-[3px] flex items-center justify-center transition-colors ${form.newsletter ? 'bg-white' : ''}`}>
                  {form.newsletter && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#1e1e20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <p className="font-normal text-[12px] md:text-[13px] lg:text-[14px] text-white leading-[1.75]">
                  Subscribe to our newsletter, don't miss out on anything from us.
                </p>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-cta w-full bg-white text-[#1e1e20] font-bold text-[18px] md:text-[20px] rounded-[50px] h-[47px] flex items-center justify-center gap-2 border border-white disabled:opacity-60"
              >
                {loading ? 'Sending…' : 'Submit'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

            </form>
          )}
        </div>

        {/* Emails + socials — mobile only, after form */}
        <div className="flex lg:hidden flex-col gap-[30px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[6px]">
              <div className="border-b border-[#1e1e20] py-[10px]">
                <Link href="mailto:hello@schoolhouselane.co" className="font-extrabold text-[16px] md:text-[20px] text-[#1e1e20] lowercase hover:opacity-60 transition-opacity">
                  hello@schoolhouselane.co
                </Link>
              </div>
              <p className="text-[13px] md:text-[16px] text-[#111] leading-[1.75]">
                For new business, project briefs, and general questions
              </p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="border-b border-[#1e1e20] py-[10px]">
                <Link href="mailto:careers@schoolhouselane.co" className="font-black text-[16px] md:text-[20px] text-[#1e1e20] lowercase hover:opacity-60 transition-opacity">
                  careers@schoolhouselane.co
                </Link>
              </div>
              <p className="text-[13px] md:text-[16px] text-[#111] leading-[1.75]">
                Attach your portfolio and a one-paragraph cover note. No generic applications.
              </p>
            </div>
          </div>
          <div className="flex gap-[20px] items-center flex-wrap">
            {[
              { name: 'LinkedIn', href: 'https://linkedin.com/company/schoolhouselane' },
              { name: 'Behance', href: 'https://behance.net/schoolhouselane' },
              { name: 'Instagram', href: 'https://instagram.com/schoolhouselane' },
            ].map((s) => (
              <Link key={s.name} href={s.href} target="_blank" className="flex items-center gap-[2px] text-[16px] text-[#1e1e20] hover:opacity-60 transition-opacity">
                {s.name}
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
