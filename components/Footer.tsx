'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const services = [
  { label: 'Brand Identity', href: '/services' },
  { label: 'Gallery & Videos', href: '/services' },
  { label: 'Campaigns', href: '/services' },
  { label: 'Websites', href: '/services' },
  { label: 'AI Creative', href: '/services' },
  { label: 'Strategy', href: '/services' },
]

const social = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/schoolhouselane' },
  { name: 'Behance', href: 'https://behance.net/schoolhouselane' },
  { name: 'Instagram', href: 'https://instagram.com/schoolhouselane' },
]

function ArrowUpRight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10"/>
    </svg>
  )
}

export default function Footer() {
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
      <footer className="bg-[#1e1e20] px-5 md:px-[90px] py-[40px] md:py-[60px] flex flex-col gap-[40px] md:gap-[60px]">

        {/* TOP ROW: Logo + Tagline */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-[280px]">
          <div className="shrink-0 w-[160px] md:w-[242px]">
            <Image
              src="/logo-white.svg"
              alt="Schoolhouse Lane"
              width={242}
              height={96}
              className="object-contain w-full h-auto"
            />
          </div>
          <p className="font-bold text-[28px] md:text-[48px] leading-tight uppercase text-white md:text-right">
            We exist at the intersection of creativity and revenue growth
          </p>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-[161px]">

          {/* LEFT GROUP: image col + CTA col */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-[24px] shrink-0">
            {/* Image column */}
            <div className="flex flex-col gap-[17px] w-full sm:w-[242px]">
              <div className="relative w-full sm:w-[242px] h-[220px] sm:h-[296px] rounded-sm overflow-hidden">
                <Image src="/images/footer-preview.png" alt="Work preview" fill className="object-cover" />
              </div>
              <div className="flex items-end gap-[20px]">
                <p className="font-semibold text-[18px] md:text-[20px] uppercase text-white leading-tight max-w-[162px]">
                  Get Growth Ideas in Your Inbox.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="flex items-center justify-center bg-white rounded-full w-[55px] h-[55px] shrink-0 hover:scale-105 transition-transform"
                >
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>

            {/* CTA column */}
            <div className="flex flex-col gap-[8px] sm:w-[235px]">
              <p className="font-semibold text-[18px] md:text-[20px] uppercase text-white leading-tight">
                Ready to Build Something Remarkable?
              </p>
              <div className="border-b border-white py-[10px]">
                <Link href="mailto:hello@schoolhouselane.co" className="text-[16px] text-white lowercase hover:opacity-70 transition-opacity whitespace-nowrap">
                  hello@schoolhouselane.co
                </Link>
              </div>
            </div>
          </div>

          {/* MIDDLE: Services + Social */}
          <div className="flex gap-[60px] lg:pt-[120px] shrink-0">
            {/* Services */}
            <div className="flex flex-col gap-[20px] md:gap-[30px]">
              {services.map((s) => (
                <Link key={s.label} href={s.href} className="text-[18px] md:text-[24px] text-white capitalize hover:opacity-70 transition-opacity whitespace-nowrap">
                  {s.label}
                </Link>
              ))}
            </div>

            {/* Social */}
            <div className="flex flex-col gap-[20px] md:gap-[30px]">
              {social.map((s) => (
                <Link key={s.name} href={s.href} className="flex items-center gap-1 text-[18px] md:text-[24px] text-white hover:opacity-70 transition-opacity whitespace-nowrap">
                  {s.name}
                  <ArrowUpRight size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: Tagline + BOOK A CALL + bottom links */}
          <div className="flex flex-col lg:items-end lg:justify-between lg:flex-1 gap-10 lg:pt-[40px] lg:min-h-[500px]">
            <div className="flex flex-col gap-[19px] lg:items-end max-w-[340px] lg:ml-auto">
              <p className="font-bold text-[24px] md:text-[32px] uppercase text-white lg:text-right leading-tight">
                There is no cure for curiousity
              </p>
              <Link
                href="/contact"
                className="btn-cta flex items-center gap-3 border border-white rounded-full px-6 py-4 md:px-[24px] md:py-[20px] text-[16px] font-medium uppercase text-white transition-colors w-fit"
              >
                Book a Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>

            <div className="flex gap-[10px] items-center lg:justify-end">
              <p className="font-bold text-[15px] md:text-[18px] text-white whitespace-nowrap">LLC. SchoolhouseLane</p>
              <Link href="/privacy" className="font-bold text-[15px] md:text-[18px] text-white whitespace-nowrap hover:opacity-70 transition-opacity">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Get Growth Modal */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative bg-[#f5f3ef] rounded-sm p-8 md:p-12 w-full max-w-[520px] z-10">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#1e1e20] hover:opacity-60">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <h2 className="font-black text-[32px] md:text-[40px] leading-tight uppercase text-[#1e1e20] mb-2">
              Get Growth Ideas
            </h2>
            <p className="text-[15px] text-[#1e1e20]/70 mb-8">
              Drop your email and a note — we&apos;ll get back within 24 hours.
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
              <button type="submit" className="flex items-center justify-center gap-2 bg-[#1e1e20] text-white rounded-full px-6 py-3 text-[15px] font-medium uppercase hover:opacity-80 transition-opacity">
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
