'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import CalendlyButton from '@/components/CalendlyButton'

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
  { name: 'Behance',   href: 'https://www.behance.net/schoolhagency' },
  { name: 'Facebook',  href: 'https://www.facebook.com/people/Schoolhouse-Lane/61573346141652/' },
  { name: 'Instagram', href: 'https://www.instagram.com/schoolhouselane_/' },
]

function SocialIcon({ name }: { name: string }) {
  if (name === 'LinkedIn') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
  if (name === 'Behance') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.421 1.875 1.338 2.393.517.298 1.268.48 2.067.48.891 0 1.518-.21 2.053-.792l1.298.948zM15.973 13.75h4.01c-.036-1.099-.503-1.875-1.878-1.875-1.29 0-1.984.75-2.132 1.875z"/>
      <path d="M6.5 11.5c.828 0 1.5-.672 1.5-1.5S7.328 8.5 6.5 8.5H4v3h2.5zM4 14.5v3h3c.828 0 1.5-.672 1.5-1.5S7.828 14.5 7 14.5H4z"/>
      <path d="M2 6h5.5C9.434 6 11 7.343 11 9.25c0 1.157-.5 2-1.438 2.562C10.688 12.375 11.25 13.344 11.25 14.5 11.25 16.5 9.5 18 7.5 18H2V6z"/>
    </svg>
  )
  if (name === 'Facebook') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
  if (name === 'Instagram') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
  return null
}

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
      <footer className="bg-[#1e1e20] px-4 md:px-6 lg:px-[90px] py-[32px] md:py-[32px] flex flex-col gap-[24px] md:gap-[40px] lg:gap-[60px]">

        {/* TOP ROW — Logos + Tagline */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px] md:gap-6">
          <div className="flex items-center gap-[20px] shrink-0">
            <Image
              src="/everlough-logo.png"
              alt="Everlough Holdings"
              width={580}
              height={140}
              className="h-[50px] w-auto max-w-[189px]"
            />
            <div className="w-px h-[50px] md:h-[50px] lg:h-[93px] bg-white/40" />
            <div className="relative w-[97px] h-[38px]">
              <Image
                src="/logo-white.svg"
                alt="Schoolhouse Lane"
                fill
                className="object-contain object-left"
                sizes="119px"
              />
            </div>
          </div>
          <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px] uppercase text-white md:text-right leading-normal md:max-w-[367px] lg:max-w-[490px]">
            We exist at the intersection of creativity and revenue growth
          </p>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/30" />

        {/* BODY */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[24px] md:gap-[40px] lg:gap-x-[80px] xl:gap-x-[161px]">

          {/* MOBILE ONLY: Contact + Social in one row */}
          <div className="flex flex-row justify-between gap-4 md:hidden">
            <div className="flex flex-col gap-[4px]">
              <p className="font-semibold text-[16px] uppercase text-white leading-tight max-w-[170px]">
                Ready to Build Something Remarkable?
              </p>
              <div className="border-b border-white py-[10px]">
                <Link href="mailto:hello@schoolhouselane.co" className="text-[12px] text-white lowercase hover:opacity-70 transition-opacity">
                  hello@schoolhouselane.co
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] justify-start pt-[4px]">
              {social.map((s) => (
                <Link key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[4px] text-[12px] text-white hover:opacity-70 transition-opacity whitespace-nowrap">
                  {s.name}
                  <ArrowUpRight size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* TABLET + DESKTOP COL 1 — Contact (tablet) / Contact + Newsletter (desktop) */}
          <div className="hidden md:flex flex-col gap-[8px] lg:gap-[72px] md:w-[201px] lg:w-[318px] shrink-0">
            <div className="flex flex-col gap-[8px]">
              <p className="font-black md:text-[24px] lg:font-semibold lg:text-[20px] uppercase text-white leading-tight">
                Ready to Build Something Remarkable?
              </p>
              <div className="border-b border-white py-[10px]">
                <Link href="mailto:hello@schoolhouselane.co" className="text-[12px] lg:text-[16px] text-white lowercase hover:opacity-70 transition-opacity whitespace-nowrap">
                  hello@schoolhouselane.co
                </Link>
              </div>
            </div>
            {/* Newsletter — desktop only */}
            <div className="hidden lg:flex items-end gap-[20px]">
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

          {/* TABLET + DESKTOP COL 2 — Social (tablet) / Services + Social (desktop) */}
          <div className="hidden md:flex flex-col gap-[12px] lg:gap-[30px] shrink-0">
            {/* Services + Social side by side — desktop only */}
            <div className="hidden lg:flex items-start gap-x-[40px] xl:gap-x-[60px]">
              {servicesCols.map((col, ci) => (
                <div key={ci} className="flex flex-col gap-[30px]">
                  {col.map((s) => (
                    <Link key={s} href="/services" className="text-[18px] text-white capitalize hover:opacity-70 transition-opacity whitespace-nowrap">
                      {s}
                    </Link>
                  ))}
                </div>
              ))}
              {/* Social links — same text style, right of services */}
              <div className="flex flex-col gap-[30px]">
                {social.map((s) => (
                  <Link key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[4px] text-[18px] text-white hover:opacity-70 transition-opacity whitespace-nowrap">
                    {s.name}
                    <ArrowUpRight size={24} />
                  </Link>
                ))}
              </div>
            </div>
            {/* Social links — tablet only */}
            <div className="flex flex-col gap-[12px] lg:hidden">
              {social.map((s) => (
                <Link key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[4px] text-[16px] text-white hover:opacity-70 transition-opacity whitespace-nowrap">
                  {s.name}
                  <ArrowUpRight size={24} />
                </Link>
              ))}
            </div>
          </div>

          {/* COL 3 — Quote + Book a Demo (all breakpoints, sizes vary) */}
          <div className="flex flex-col gap-[19px] md:items-end md:flex-1">
            <p className="font-bold text-[18px] lg:text-[32px] uppercase text-white md:text-right leading-tight md:max-w-[169px] lg:max-w-[340px] lg:ml-auto">
              There is no cure for curiousity
            </p>
            <CalendlyButton className="btn-cta flex items-center gap-[6px] lg:gap-[12px] border border-white rounded-full px-[12px] lg:px-[24px] py-[8px] lg:py-[16px] text-[16px] font-medium uppercase text-white w-fit whitespace-nowrap">
              Book a Demo
              <ArrowRight size={24} />
            </CalendlyButton>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/30" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[24px] md:gap-0">

          {/* Cities — 2×2 grid */}
          <div className="grid grid-cols-2 gap-x-[40px] md:gap-x-[60px] gap-y-[12px] md:gap-y-[12px]">
            {offices.map((o) => (
              <div key={o.city} className="flex flex-col gap-[2px]">
                <div className="flex items-center gap-[5px]">
                  <MapPin />
                  <span className="font-bold text-[14px] md:text-[18px] uppercase text-white leading-normal whitespace-nowrap">{o.city}</span>
                </div>
                <p className="text-[12px] font-light text-white leading-normal">{o.address}</p>
              </div>
            ))}
          </div>

          {/* Legal — horizontal on mobile, stacked right-aligned on tablet+ */}
          <div className="flex flex-col gap-[8px] md:items-end">
            <div className="flex flex-row flex-wrap gap-x-[12px] gap-y-[4px] md:flex-col md:items-end md:gap-[10px]">
              <Link href="/privacy" className="font-bold text-[12px] lg:text-[16px] text-white whitespace-nowrap underline hover:opacity-70 transition-opacity">Privacy Policy</Link>
              <Link href="/code-of-conduct" className="font-bold text-[12px] lg:text-[16px] text-white whitespace-nowrap underline hover:opacity-70 transition-opacity">Code of Conduct</Link>
              <Link href="/terms" className="font-bold text-[12px] lg:text-[16px] text-white whitespace-nowrap underline hover:opacity-70 transition-opacity">Terms &amp; Conditions</Link>
            </div>
            <p className="font-bold text-[12px] lg:text-[18px] text-white whitespace-nowrap">© 2025 Schoolhouse Lane</p>
          </div>

        </div>

      </footer>

      {/* Get Growth Modal */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" onClick={() => setOpen(false)} />
          <div className="relative z-10 rounded-[30px] border border-[#1e1e20] bg-white/20 p-[12px]">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-[18px] -right-[18px] w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-[#f5f3ef] rounded-[24px] p-[40px] flex flex-col gap-[20px] w-full max-w-[356px] shadow-[0px_34px_69px_0px_rgba(0,0,0,0.19)]">
              <div className="flex flex-col gap-[8px]">
                <h2 className="font-black text-[24px] uppercase text-[#1e1e20] leading-normal tracking-[-0.48px]">
                  Get Growth Ideas in Your Inbox.
                </h2>
                <p className="text-[16px] font-medium text-[#353535] leading-normal">
                  Strategy, branding, and digital thinking monthly, never spammy.
                </p>
              </div>
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
