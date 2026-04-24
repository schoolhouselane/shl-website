'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
  openRolesCount: number
}

export default function JobsHero({ openRolesCount }: Props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t) }, [])

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[100px] md:pt-[120px] lg:pt-[120px] pb-[60px] md:pb-[80px] lg:pb-[120px]">
      <div className="flex flex-col lg:flex-row lg:gap-[87px] lg:items-center gap-[32px] md:gap-[40px]">

        {/* Left — hero image with caption overlay */}
        <div
          className="relative shrink-0 w-full lg:w-[642px] aspect-[642/578] lg:h-[578px] overflow-hidden transition-all duration-[1000ms]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0) scale(1)' : 'translateX(-24px) scale(1.02)',
            transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <Image
            src="/images/jobs/jobs-hero.jpg"
            alt="Join Schoolhouse Lane — work from anywhere"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 642px"
            priority
          />
          {/* Caption overlay bottom-right */}
          <p className="absolute bottom-[20px] right-[16px] md:bottom-[28px] md:right-[24px] lg:right-[24px] lg:bottom-[24px] font-black text-[12px] md:text-[14px] lg:text-[16px] text-white text-right uppercase tracking-[-0.48px] max-w-[200px] md:max-w-[243px] leading-snug">
            Be part of a great team, but work from anywhere.
          </p>
        </div>

        {/* Right — title + open roles count */}
        <div
          className="flex flex-col gap-[40px] md:gap-[60px] lg:gap-[264px] lg:flex-1 transition-all duration-[900ms]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateX(0)' : 'translateX(24px)',
            transitionDelay: '150ms',
            transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {/* Title block */}
          <div className="flex flex-col gap-[12px]">
            <h1 className="font-black text-[36px] md:text-[48px] lg:text-[64px] uppercase text-[#1e1e20] leading-none tracking-[-1.92px]">
              We are always on the search for new talents.
            </h1>
            <p className="font-normal text-[16px] md:text-[18px] lg:text-[20px] text-[#111] leading-[1.75]">
              Curious minds who want to build brands that actually make money.
            </p>
          </div>

          {/* Open roles counter */}
          <div className="flex items-end gap-[8px]">
            <span className="font-black text-[40px] md:text-[48px] lg:text-[48px] text-[#1e1e20] leading-none tracking-[-1.44px]">
              {String(openRolesCount).padStart(2, '0')}
            </span>
            <span className="font-normal text-[14px] md:text-[16px] lg:text-[16px] text-[#111] leading-[1.75] uppercase pb-[4px]">
              Open Roles
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
