'use client'
import { useState } from 'react'
import Image from 'next/image'

const tabs = ['BRAND IDENTITY', 'GALLERY & VIDEOS', 'WEBSITES', 'CAMPAIGNS', 'AI CREATIVE']

const images = [
  '/images/services-1.png',
  '/images/services-2.png',
  '/images/services-3.png',
  '/images/services-4.png',
  '/images/services-5.png',
  '/images/services-6.png',
  '/images/services-7.png',
  '/images/services-8.png',
  '/images/services-9.png',
  '/images/services-10.png',
]

export default function ServicesTabs() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full pb-[60px]">
      {/* Tabs + Image strip wrapper */}
      <div className="flex flex-col gap-[40px]">

        {/* Tab bar — no bottom border, only right borders between tabs */}
        <div className="flex overflow-x-auto scrollbar-hide px-5 md:px-[90px]">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-3 sm:px-5 md:px-[60px] whitespace-nowrap border-r border-[#1e1e20] shrink-0 transition-colors font-medium text-[13px] md:text-[20px] ${
                i === active
                  ? 'bg-[#1e1e20] text-white py-4 md:py-[30px]'
                  : 'bg-transparent text-[#1e1e20] py-2 md:py-[10px] hover:bg-[#1e1e20]/5'
              }`}
            >
              {tab}
              {i === active && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Image strip */}
        <div className="flex overflow-x-auto gap-px scrollbar-hide">
          {images.map((src, i) => (
            <div key={i} className="relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[200px] md:h-[200px] shrink-0 bg-[#d9d9d9]">
              <Image src={src} alt={`Service image ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
