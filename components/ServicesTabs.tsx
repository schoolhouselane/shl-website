'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const tabs = [
  'Brand Identity',
  'Gallery & Videos',
  'Websites',
  'Campaigns',
  'AI Creative',
  'Strategy',
]

type StripItem = { src: string; w: number; bg?: string; contain?: boolean }

const marqueeImages: StripItem[] = [
  { src: '/images/strip-01.png', w: 356, bg: '#5a4734' },
  { src: '/images/strip-02.png', w: 320, bg: '#c24751' },
  { src: '/images/strip-03.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-04.png', w: 112 },
  { src: '/images/strip-05.png', w: 160 },
  { src: '/images/strip-06.png', w: 200 },
  { src: '/images/strip-07.png', w: 111 },
  { src: '/images/strip-08.png', w: 163, bg: '#bb936a' },
  { src: '/images/strip-09.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-10.png', w: 354 },
  { src: '/images/strip-11.png', w: 200 },
  { src: '/images/strip-12.png', w: 343, bg: '#04f9f4' },
  { src: '/images/strip-13.png', w: 342 },
  { src: '/images/strip-14.png', w: 204, bg: '#003f0c' },
  { src: '/images/strip-15.png', w: 356 },
  { src: '/images/strip-16.png', w: 356, bg: '#ffffff', contain: true },
  { src: '/images/strip-17.png', w: 160 },
  { src: '/images/strip-18.png', w: 160 },
  { src: '/images/strip-19.png', w: 200 },
  { src: '/images/strip-20.png', w: 158 },
  { src: '/images/strip-21.png', w: 117, bg: '#192c3b' },
  { src: '/images/strip-22.png', w: 200 },
  { src: '/images/strip-23.png', w: 178, bg: '#ee942e' },
  { src: '/images/strip-24.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-25.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-26.png', w: 200 },
  { src: '/images/strip-27.png', w: 200 },
  { src: '/images/strip-28.png', w: 277, bg: '#bb936a' },
  { src: '/images/strip-29.png', w: 200 },
  { src: '/images/strip-30.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-31.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strip-32.png', w: 116, bg: '#ffffff', contain: true },
  { src: '/images/strategy-1.jpg', w: 200 },
  { src: '/images/strategy-2.jpg', w: 200 },
  { src: '/images/strategy-3.jpg', w: 200 },
  { src: '/images/strategy-4.jpg', w: 200 },
  { src: '/images/strategy-5.jpg', w: 200 },
  { src: '/images/strategy-6.jpg', w: 200 },
  { src: '/images/strategy-7.jpg', w: 200 },
  { src: '/images/strategy-8.jpg', w: 200 },
  { src: '/images/strategy-9.jpg', w: 200 },
]

const doubled = [...marqueeImages, ...marqueeImages]

export default function ServicesTabs() {
  const [active, setActive] = useState(0)
  const stripRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)
  const rafRef = useRef<number | null>(null)

  // JS auto-scroll — pauses while dragging, seamless loop at halfway
  useEffect(() => {
    const el = stripRef.current
    if (!el) return
    const tick = () => {
      if (!isDragging.current) {
        el.scrollLeft += 1.5
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true
    startX.current = e.pageX
    scrollStart.current = stripRef.current?.scrollLeft ?? 0
    if (stripRef.current) stripRef.current.style.cursor = 'grabbing'
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return
    e.preventDefault()
    if (stripRef.current) {
      stripRef.current.scrollLeft = scrollStart.current - (e.pageX - startX.current)
    }
  }

  const stopDrag = () => {
    isDragging.current = false
    if (stripRef.current) stripRef.current.style.cursor = 'grab'
  }

  return (
    <section className="w-full pb-[60px] flex flex-col gap-[40px]">

      {/* Tab bar */}
      <div className="flex overflow-x-auto scrollbar-hide">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`flex items-center gap-[8px] px-[14px] md:px-[28px] lg:px-[60px] shrink-0 border-r border-[#1e1e20] font-normal md:font-medium text-[16px] md:text-[14px] lg:text-[20px] uppercase whitespace-nowrap transition-colors ${
              i === active
                ? 'bg-[#1e1e20] text-white py-[10px] md:py-[18px] lg:py-[30px]'
                : 'bg-transparent text-[#1e1e20] py-[8px] md:py-[12px] lg:py-[18px] hover:bg-[#1e1e20]/5'
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

      {/* Draggable image strip */}
      <div
        ref={stripRef}
        className="flex overflow-x-auto scrollbar-hide h-[200px] cursor-grab select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        <div className="flex gap-px h-[200px] shrink-0" style={{ width: 'max-content' }}>
          {doubled.map((item, i) => (
            <div
              key={i}
              className="relative shrink-0 h-[200px] overflow-hidden"
              style={{ width: item.w, backgroundColor: item.bg ?? 'transparent' }}
            >
              <Image
                src={item.src}
                alt=""
                fill
                draggable={false}
                className={item.contain ? 'object-contain' : 'object-cover object-center'}
                sizes={`${item.w}px`}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
