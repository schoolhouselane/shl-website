'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function AboutHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="bg-[#f5f3ef] px-5 md:px-[90px] pb-[60px] pt-[40px] md:pt-0 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-[60px]">

      {/* Left */}
      <div
        className="flex flex-col gap-[30px] max-w-full lg:max-w-[607px] shrink-0 transition-all duration-900"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateX(0)' : 'translateX(-30px)',
          transitionDuration: '900ms',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="flex flex-col gap-[18px]">
          <h1 className="font-black text-[40px] md:text-[64px] leading-tight tracking-[-1.28px] uppercase text-[#1e1e20]">
            The ideas engine behind Creative Commerce.
          </h1>
          <p className="text-[16px] md:text-[20px] leading-[1.75] text-[#111] max-w-[598px]">
            Founded in 2018, Schoolhouse Lane was built on the conviction that profit and purpose aren&apos;t in tension—they are the same thing. We don&apos;t make pretty things that don&apos;t sell; we make things that sell beautifully.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] md:gap-[20px] transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '300ms',
            transitionDuration: '700ms',
          }}
        >
          <Link
            href="/contact"
            className="btn-cta inline-flex items-center gap-3 border border-[#1e1e20] rounded-full px-[24px] py-[12px] text-[16px] font-medium uppercase text-[#1e1e20]"
          >
            Book a Call
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link
            href="#team"
            className="btn-cta inline-flex items-center gap-3 bg-[#1e1e20] rounded-full px-[24px] py-[12px] text-[16px] font-medium uppercase text-white"
          >
            Meet the Team
          </Link>
        </div>
      </div>

      {/* Right: hero image */}
      <div
        className="relative w-full lg:w-[701px] h-[300px] sm:h-[400px] md:h-[560px] lg:h-[739px] shrink-0 overflow-hidden transition-all"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateX(0) scale(1)' : 'translateX(30px) scale(1.02)',
          transitionDuration: '1000ms',
          transitionDelay: '100ms',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <Image
          src="/images/about-hero.png"
          alt="Schoolhouse Lane team"
          fill
          className="object-cover object-top"
        />
      </div>

    </section>
  )
}
