'use client'
import { useState } from 'react'
import WorkStrip from '@/components/WorkStrip'

const tabs = [
  'All',
  'Strategy',
  'Brand Identity',
  'AI Creative',
  'Campaigns',
  'Websites',
  'Gallery & Videos',
]

export default function ServicesTabs() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full pt-[60px] md:pt-[80px] lg:pt-[120px] pb-[60px] flex flex-col gap-[40px]">

      {/* Tab bar — centered, matches Figma */}
      <div className="flex items-center justify-center overflow-x-auto scrollbar-hide">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`flex items-center gap-[8px] shrink-0 border-r border-[#1e1e20] uppercase whitespace-nowrap transition-colors font-normal ${
              i === active
                ? 'bg-[#1e1e20] text-white px-[30px] md:px-[40px] lg:px-[60px] py-[10px] md:py-[20px] lg:py-[30px] text-[14px] md:text-[18px] lg:text-[24px]'
                : 'text-[#1e1e20] px-[14px] md:px-[20px] lg:px-[30px] py-[8px] md:py-[10px] text-[13px] md:text-[16px] lg:text-[24px] hover:bg-[#1e1e20]/5'
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

      <WorkStrip />

    </section>
  )
}
