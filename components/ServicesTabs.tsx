'use client'
import { useState } from 'react'
import Image from 'next/image'

const tabs = ['BRAND IDENTITY', 'GALLERY & VIDEOS', 'WEBSITES', 'CAMPAIGNS', 'AI CREATIVE']

const logos = [
  'https://www.figma.com/api/mcp/asset/1dda5351-2782-4e43-b33f-7ae0dec42b80',
  'https://www.figma.com/api/mcp/asset/fedd8562-a37d-4c31-8198-4efc333e86f1',
  'https://www.figma.com/api/mcp/asset/3044d102-79c0-4e56-a4df-2cbac3f36320',
  'https://www.figma.com/api/mcp/asset/4ea14228-0675-4029-8f01-ed48ac11712e',
  'https://www.figma.com/api/mcp/asset/f977039b-1a3c-4dac-9a1e-c25e0ec806bf',
  'https://www.figma.com/api/mcp/asset/46541a8e-7deb-41c6-bb30-2dd699718836',
  'https://www.figma.com/api/mcp/asset/f170589f-e437-44da-8de3-b6499728cc2e',
  'https://www.figma.com/api/mcp/asset/932c8f14-84ef-47e0-8826-4ae0d2c34f88',
  'https://www.figma.com/api/mcp/asset/d8e6ba02-b591-4f8b-a75e-c5800a32d48c',
  'https://www.figma.com/api/mcp/asset/6fca2f3f-c95e-40d0-b0f4-424dcba7e91a',
]

export default function ServicesTabs() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full">
      {/* Tabs — scrollable on mobile */}
      <div className="flex overflow-x-auto border-b border-[#1e1e20] scrollbar-hide">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2 px-6 md:px-[60px] py-4 md:py-[30px] text-[14px] md:text-[24px] whitespace-nowrap border-r border-[#1e1e20] shrink-0 transition-colors font-['SansSerifBookFLF',serif] ${
              i === active ? 'bg-[#1e1e20] text-white' : 'bg-transparent text-[#1e1e20] hover:bg-[#1e1e20]/5'
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

      {/* Logos strip — scrollable on mobile */}
      <div className="flex overflow-x-auto gap-px scrollbar-hide">
        {logos.map((src, i) => (
          <div key={i} className="relative w-[120px] h-[120px] md:w-[200px] md:h-[200px] shrink-0">
            <Image src={src} alt={`Client ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
