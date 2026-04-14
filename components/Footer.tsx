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
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = [
      `From: ${email}`,
      phone ? `Phone: ${phone}` : '',
      '',
      message,
    ].filter(Boolean).join('\n')
    window.location.href = `mailto:hello@schoolhouselane.co?subject=Get Growth&body=${encodeURIComponent(body)}`
    setOpen(false)
  }

  return (
    <>
      <footer className="bg-[#1e1e20] py-[40px] flex flex-col gap-[60px]">

        {/* TOP ROW: Logos + Tagline */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 px-5 md:px-[90px]">

          {/* Left: two logos + divider — 575px justify-between per Figma */}
          <div className="flex items-center justify-between w-full md:w-[575px] shrink-0">
            {/* Everlough Holdings logo — cropped sides to zoom */}
            <div className="relative w-[160px] md:w-[256px] h-[38px] md:h-[62px] overflow-hidden">
              <Image
                src="/everlough-logo.png"
                alt="Everlough Holdings"
                fill
                className="object-cover scale-[1.3]"
                style={{ objectPosition: '48% 50%' }}
                sizes="(max-width: 768px) 160px, 256px"
              />
            </div>

            {/* Vertical divider — 1px × 93px */}
            <div className="w-px h-[50px] md:h-[93px] bg-white/30" />

            {/* SHL logo — 152×60 */}
            <div className="relative w-[95px] md:w-[152px] h-[38px] md:h-[60px]">
              <Image
                src="/logo-white.svg"
                alt="Schoolhouse Lane"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 95px, 152px"
              />
            </div>
          </div>

          {/* Right: tagline — 24px Bold, uppercase, right-aligned, max 490px */}
          <p className="font-bold text-[18px] md:text-[24px] uppercase text-white lg:text-right leading-normal max-w-full lg:max-w-[490px]">
            We exist at the intersection of creativity and revenue growth
          </p>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 mx-5 md:mx-[90px]" />

        {/* BODY */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-[161px] px-5 md:px-[90px]">

          {/* COL 1: Newsletter + Contact */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-[24px] shrink-0">

            {/* Newsletter card */}
            <div className="flex flex-col gap-[17px] w-full sm:w-[242px]">
              <div className="relative w-full sm:w-[242px] h-[220px] sm:h-[296px] rounded-sm overflow-hidden">
                <Image src="/images/footer-preview.png" alt="Work preview" fill className="object-cover" sizes="(max-width: 640px) 100vw, 242px" />
              </div>
              <div className="flex items-end gap-[20px]">
                <p className="font-semibold text-[18px] md:text-[20px] uppercase text-white leading-tight max-w-[162px]">
                  Get Growth Ideas in Your Inbox.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="flex items-center justify-center bg-white rounded-full w-[55px] h-[55px] shrink-0 hover:scale-105 transition-transform cursor-pointer"
                >
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>

            {/* Contact */}
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

          {/* COL 2: Nav + Social */}
          <div className="flex gap-[60px] lg:pt-[120px] shrink-0">

            {/* Nav links */}
            <div className="flex flex-col gap-[20px] md:gap-[30px]">
              {services.map((s) => (
                <Link key={s.label} href={s.href} className="text-[15px] sm:text-[18px] md:text-[24px] text-white capitalize hover:opacity-70 transition-opacity whitespace-nowrap">
                  {s.label}
                </Link>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-[20px] md:gap-[30px]">
              {social.map((s) => (
                <Link key={s.name} href={s.href} className="flex items-center gap-1 text-[15px] sm:text-[18px] md:text-[24px] text-white hover:opacity-70 transition-opacity whitespace-nowrap">
                  {s.name}
                  <ArrowUpRight size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* COL 3: Quote + CTA + Legal */}
          <div className="flex flex-col lg:items-end lg:justify-between lg:flex-1 gap-10 lg:pt-[40px] lg:min-h-[500px]">

            {/* Quote + Book a Call */}
            <div className="flex flex-col gap-[19px] lg:items-end max-w-[340px] lg:ml-auto">
              <p className="font-bold text-[24px] md:text-[32px] uppercase text-white lg:text-right leading-tight">
                There is no cure for curiousity
              </p>
              <Link
                href="/contact"
                className="btn-cta flex items-center gap-3 border border-white rounded-full px-[24px] py-[20px] text-[18px] md:text-[24px] font-medium uppercase text-white transition-colors w-fit"
              >
                Book a Call
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>

            {/* Legal */}
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
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" onClick={() => setOpen(false)} />
          <div className="relative bg-[#f5f3ef] rounded-sm p-5 sm:p-8 md:p-12 w-full max-w-[520px] z-10">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#1e1e20] cursor-pointer rounded-full hover:bg-[#1e1e20]/8 hover:rotate-90 transition-all duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <h2 className="font-black text-[32px] md:text-[40px] leading-tight uppercase text-[#1e1e20] mb-2">
              Get Growth Ideas
            </h2>
            <p className="text-[15px] text-[#1e1e20]/70 mb-8">
              Tell us what you&apos;re working on. We read every message.
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
              <input
                type="tel"
                placeholder="Phone number (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
