'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function ArrowUpRight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

function ArrowRight({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function MapPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

const offices = [
  { city: 'DUBLIN',    address: '24A Baggot Street Upper' },
  { city: 'PRISTINE',  address: 'M568+R6G, Tringë Smajli' },
  { city: 'LAHORE',    address: 'Overseas Enclave' },
  { city: 'SÃO PAULO', address: 'R. Caetés, 763 - Perdizes' },
]

const servicesCols = [
  ['Brand Identity', 'Gallery & Videos', 'Campaigns'],
  ['Websites', 'AI Creative', 'Strategy'],
]

const social = [
  { name: 'LinkedIn',  href: 'https://linkedin.com/company/schoolhouselane' },
  { name: 'Behance',   href: 'https://behance.net/schoolhouselane' },
  { name: 'Instagram', href: 'https://instagram.com/schoolhouselane' },
]

export default function Footer() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:hello@schoolhouselane.co?subject=Get Growth Ideas&body=${encodeURIComponent(`Subscribe: ${email}`)}`
    setOpen(false)
  }

  return (
    <>
      <footer className="bg-[#1e1e20] py-[40px] flex flex-col gap-[60px]">

        {/* TOP ROW — Logos + Tagline */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 px-5 md:px-[90px]">
          <div className="flex items-center gap-[20px] shrink-0">
            {/* Everlough logo — width auto so no trailing whitespace */}
            <Image
              src="/everlough-logo.png"
              alt="Everlough Holdings"
              width={580}
              height={140}
              className="h-[42px] md:h-[70px] w-auto max-w-[290px]"
            />
            <div className="w-px h-[50px] md:h-[93px] bg-white/40" />
            <div className="relative w-[95px] md:w-[119px] h-[35px] md:h-[47px]">
              <Image
                src="/logo-white.svg"
                alt="Schoolhouse Lane"
                fill
                className="object-contain object-left"
                sizes="119px"
              />
            </div>
          </div>
          <p className="font-bold text-[18px] md:text-[24px] uppercase text-white lg:text-right leading-normal max-w-full lg:max-w-[490px]">
            We exist at the intersection of creativity and revenue growth
          </p>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/30 mx-5 md:mx-[90px]" />

        {/* BODY */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 xl:gap-[161px] px-5 md:px-[90px]">

          {/* COL 1 — Contact + Newsletter */}
          <div className="flex flex-col gap-[72px] shrink-0 lg:w-[318px]">

            {/* Ready to Build + email */}
            <div className="flex flex-col gap-[8px]">
              <p className="font-semibold text-[20px] uppercase text-white leading-tight max-w-[236px]">
                Ready to Build Something Remarkable?
              </p>
              <div className="border-b border-white py-[10px]">
                <Link
                  href="mailto:hello@schoolhouselane.co"
                  className="text-[16px] text-white lowercase hover:opacity-70 transition-opacity whitespace-nowrap"
                >
                  hello@schoolhouselane.co
                </Link>
              </div>
            </div>

            {/* Get Growth Ideas */}
            <div className="flex items-end gap-[20px]">
              <p className="font-semibold text-[20px] uppercase text-white leading-tight max-w-[203px]">
                Get Growth Ideas in Your Inbox.
              </p>
              <button
                onClick={() => setOpen(true)}
                className="flex items-center justify-center bg-white rounded-full w-[55px] h-[55px] shrink-0 hover:scale-105 transition-transform cursor-pointer text-[#1e1e20]"
              >
                <ArrowUpRight size={24} />
              </button>
            </div>

          </div>

          {/* COL 2 — Services + Social */}
          <div className="flex flex-wrap gap-x-[40px] gap-y-[30px] shrink-0 md:gap-x-[60px]">
            {servicesCols.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-[20px] md:gap-[30px]">
                {col.map((s) => (
                  <Link
                    key={s}
                    href="/services"
                    className="text-[18px] text-white capitalize hover:opacity-70 transition-opacity whitespace-nowrap"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-[20px] md:gap-[30px]">
              {social.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  className="flex items-center gap-[4px] text-[18px] text-white hover:opacity-70 transition-opacity whitespace-nowrap"
                >
                  {s.name}
                  <ArrowUpRight size={24} />
                </Link>
              ))}
            </div>
          </div>

          {/* COL 3 — Quote + Book a Call */}
          <div className="flex flex-col lg:items-end lg:flex-1 gap-10">
            <div className="flex flex-col gap-[19px] lg:items-end max-w-[340px] lg:ml-auto">
              <p className="font-bold text-[32px] uppercase text-white lg:text-right leading-tight">
                There is no cure for curiousity
              </p>
              <Link
                href="/contact"
                className="btn-cta flex items-center gap-[12px] border border-white rounded-full px-[24px] py-[16px] text-[18px] font-medium uppercase text-white w-fit whitespace-nowrap"
              >
                Book a Call
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/30 mx-5 md:mx-[90px]" />

        {/* BOTTOM BAR — cities left, legal right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-0 px-5 md:px-[90px]">

          {/* Cities — 2×2 grid */}
          <div className="grid grid-cols-2 gap-x-[40px] md:gap-x-[60px] gap-y-[16px]">
            {offices.map((o) => (
              <div key={o.city} className="flex flex-col gap-[4px]">
                <div className="flex items-center gap-[5px]">
                  <MapPin />
                  <span className="font-bold text-[18px] uppercase text-white leading-normal whitespace-nowrap">{o.city}</span>
                </div>
                <p className="text-[12px] font-light text-white leading-normal">{o.address}</p>
              </div>
            ))}
          </div>

          {/* Legal — 3 links stacked + copyright to the right */}
          <div className="flex items-end gap-[40px]">
            <div className="flex flex-col gap-[10px]">
              <Link href="/privacy" className="font-bold text-[16px] text-white whitespace-nowrap underline hover:opacity-70 transition-opacity">Privacy Policy</Link>
              <Link href="/code-of-conduct" className="font-bold text-[16px] text-white whitespace-nowrap underline hover:opacity-70 transition-opacity">Code of Conduct</Link>
              <Link href="/terms" className="font-bold text-[16px] text-white whitespace-nowrap underline hover:opacity-70 transition-opacity">Terms &amp; Conditions</Link>
            </div>
            <p className="font-bold text-[18px] text-white whitespace-nowrap">© 2025 Schoolhouse Lane</p>
          </div>

        </div>

      </footer>

      {/* Get Growth Modal */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" onClick={() => setOpen(false)} />

          {/* Outer wrapper */}
          <div className="relative z-10 rounded-[30px] border border-[#1e1e20] bg-white/20 p-[12px]">

            {/* Close button — top-right outside the inner box */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-[18px] -right-[18px] w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Inner content box */}
            <div className="bg-[#f5f3ef] rounded-[24px] p-[40px] flex flex-col gap-[20px] w-full max-w-[356px] shadow-[0px_34px_69px_0px_rgba(0,0,0,0.19)]">

              {/* Header */}
              <div className="flex flex-col gap-[8px]">
                <h2 className="font-black text-[24px] uppercase text-[#1e1e20] leading-normal tracking-[-0.48px]">
                  Get Growth Ideas in Your Inbox.
                </h2>
                <p className="text-[16px] font-medium text-[#353535] leading-normal">
                  Strategy, branding, and digital thinking monthly, never spammy.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                <input
                  type="email"
                  required
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[40px] border border-black/12 rounded-[8px] px-[10px] text-[16px] font-medium bg-white outline-none focus:border-[#1e1e20] transition-colors placeholder:text-[#c4c4c4]"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-[12px] bg-[#1e1e20] text-white rounded-[50px] px-[24px] py-[12px] text-[16px] font-bold uppercase hover:opacity-80 transition-opacity"
                >
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </form>

            </div>
          </div>
        </div>
      )}
    </>
  )
}
