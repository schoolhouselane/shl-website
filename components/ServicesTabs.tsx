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

      {/* Tab bar */}
      <div className="px-4 md:px-6 lg:px-[120px]">
        <div className="flex flex-wrap lg:flex-nowrap border-b border-[#1e1e20]">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`flex items-center gap-[8px] px-[14px] md:px-[16px] lg:px-[20px] py-[10px] md:py-[14px] lg:py-[18px] shrink-0 border-r border-[#1e1e20] font-normal lg:font-medium text-[14px] md:text-[16px] lg:text-[18px] uppercase whitespace-nowrap transition-colors ${
                i === active
                  ? 'text-[#1e1e20] font-bold border-b-2 border-b-[#1e1e20] -mb-px'
                  : 'text-[#1e1e20] hover:bg-[#1e1e20]/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <WorkStrip />

    </section>
  )
}
