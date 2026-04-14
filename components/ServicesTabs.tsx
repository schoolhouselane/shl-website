'use client'
import { useState } from 'react'
import Image from 'next/image'

const tabs = [
  'Brand Identity',
  'Gallery & Videos',
  'Websites',
  'Campaigns',
  'AI Creative',
  'Strategy',
]

const marqueeImages = [
  '/images/strategy-1.jpg',
  '/images/strategy-2.jpg',
  '/images/strategy-3.jpg',
  '/images/strategy-4.jpg',
  '/images/strategy-5.jpg',
  '/images/strategy-6.jpg',
  '/images/strategy-7.jpg',
  '/images/strategy-8.jpg',
  '/images/strategy-9.jpg',
]

export default function ServicesTabs() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full pb-[60px] flex flex-col gap-[40px]">

      {/* Tab bar — border top + bottom, border-r between tabs */}
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`flex items-center gap-[10px] px-[28px] md:px-[60px] shrink-0 border-r border-[#1e1e20] font-medium text-[13px] md:text-[20px] uppercase whitespace-nowrap transition-colors ${
              i === active
                ? 'bg-[#1e1e20] text-white py-[18px] md:py-[30px]'
                : 'bg-transparent text-[#1e1e20] py-[10px] md:py-[18px] hover:bg-[#1e1e20]/5'
            }`}
          >
            {tab}
            {i === active && (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 4L12 12M12 12H4M12 12V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Auto-scrolling image strip */}
      <div className="flex overflow-hidden">
        <div className="flex gap-px animate-marquee">
          {[...marqueeImages, ...marqueeImages].map((src, i) => (
            <div key={i} className="relative shrink-0 w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-[#d9d9d9] overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" sizes="200px" />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
