'use client'
import { useState } from 'react'
import Image from 'next/image'

const tabs = ['BRAND IDENTITY', 'GALLERY & VIDEOS', 'WEBSITES', 'CAMPAIGNS', 'AI CREATIVE']

const images = [
  'https://www.figma.com/api/mcp/asset/5b14f6a1-ec93-44f5-9b68-8ab966cc8225',
  'https://www.figma.com/api/mcp/asset/cbc09abd-1905-4eea-9e9e-cf0168f2a3dd',
  'https://www.figma.com/api/mcp/asset/4bdd19d3-aeb5-41a4-bf0a-c217b2dcb2cf',
  'https://www.figma.com/api/mcp/asset/53381509-50ac-441d-9443-c4d6825a7d02',
  'https://www.figma.com/api/mcp/asset/ed5750c7-08fc-4b35-ae22-828fa1797070',
  'https://www.figma.com/api/mcp/asset/4afe7016-93ee-469c-9a33-d523056db5d3',
  'https://www.figma.com/api/mcp/asset/5787bb68-37ce-4e4b-8921-ba8d55abe695',
  'https://www.figma.com/api/mcp/asset/e1741fee-235f-4557-a2d8-6ff6ff514db5',
  'https://www.figma.com/api/mcp/asset/3bacd7bf-e65a-444e-bb23-b775893675b5',
  'https://www.figma.com/api/mcp/asset/1d77ef24-800b-436e-88e5-921a0e40118d',
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
              className={`flex items-center gap-2 px-5 md:px-[60px] whitespace-nowrap border-r border-[#1e1e20] shrink-0 transition-colors font-medium text-[14px] md:text-[20px] ${
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
            <div key={i} className="relative w-[120px] h-[120px] md:w-[200px] md:h-[200px] shrink-0 bg-[#d9d9d9]">
              <Image src={src} alt={`Service image ${i + 1}`} fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
