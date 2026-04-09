'use client'
import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────
   EFFECT 1 — Smooth Follow (spring physics)
   A large translucent circle lags behind the
   real cursor with spring-eased interpolation.
───────────────────────────────────────────── */
function Effect1({ active }: { active: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const ball = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)

  useEffect(() => {
    if (!active) return
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    el.addEventListener('mousemove', onMove)

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12
      pos.current.y += (target.current.y - pos.current.y) * 0.12
      if (ball.current) {
        ball.current.style.transform = `translate(${pos.current.x - 28}px, ${pos.current.y - 28}px)`
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      el.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [active])

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden cursor-none bg-[#f5f3ef] flex flex-col items-center justify-center gap-6">
      {/* Lagging ball */}
      <div ref={ball} className="absolute top-0 left-0 w-[56px] h-[56px] rounded-full border-2 border-[#1e1e20] pointer-events-none opacity-60 transition-transform" style={{ willChange: 'transform' }} />
      {/* Static dot */}
      <p className="text-[13px] uppercase tracking-[2px] text-[#1e1e20]/40 font-medium">Move your cursor</p>
      <h3 className="font-black text-[28px] md:text-[36px] uppercase text-[#1e1e20] text-center leading-tight px-4">
        Smooth<br />Follow
      </h3>
      <button className="border border-[#1e1e20] rounded-full px-6 py-2 text-[14px] uppercase font-medium text-[#1e1e20] hover:bg-[#1e1e20] hover:text-white transition-colors">
        Hover Me
      </button>
    </div>
  )
}

/* ─────────────────────────────────────────────
   EFFECT 2 — Particle Trail
   A chain of 12 fading dots follows the cursor
   like a comet tail.
───────────────────────────────────────────── */
const TRAIL_LENGTH = 14

function Effect2({ active }: { active: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<(HTMLDivElement | null)[]>([])
  const trail = useRef<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  )
  const mouse = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)

  useEffect(() => {
    if (!active) return
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    el.addEventListener('mousemove', onMove)

    const tick = () => {
      trail.current.unshift({ ...mouse.current })
      trail.current.length = TRAIL_LENGTH
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return
        const p = trail.current[i]
        const size = Math.max(2, 14 - i)
        dot.style.transform = `translate(${p.x - size / 2}px, ${p.y - size / 2}px)`
        dot.style.width = `${size}px`
        dot.style.height = `${size}px`
        dot.style.opacity = `${(1 - i / TRAIL_LENGTH) * 0.9}`
      })
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      el.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [active])

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden cursor-none bg-[#1e1e20] flex flex-col items-center justify-center gap-6">
      {/* Trail dots */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { dotsRef.current[i] = el }}
          className="absolute top-0 left-0 rounded-full bg-white pointer-events-none"
          style={{ willChange: 'transform', position: 'absolute' }}
        />
      ))}
      <p className="text-[13px] uppercase tracking-[2px] text-white/30 font-medium relative z-10">Move your cursor</p>
      <h3 className="font-black text-[28px] md:text-[36px] uppercase text-white text-center leading-tight px-4 relative z-10">
        Particle<br />Trail
      </h3>
      <button className="border border-white rounded-full px-6 py-2 text-[14px] uppercase font-medium text-white hover:bg-white hover:text-[#1e1e20] transition-colors relative z-10">
        Hover Me
      </button>
    </div>
  )
}

/* ─────────────────────────────────────────────
   EFFECT 3 — Spotlight
   A radial gradient follows the cursor on a
   near-black background, revealing the content.
───────────────────────────────────────────── */
function Effect3({ active }: { active: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const overlay = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (overlay.current) {
        overlay.current.style.background = `radial-gradient(260px circle at ${x}px ${y}px, transparent 0%, rgba(30,30,32,0.97) 100%)`
      }
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [active])

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden cursor-none flex flex-col items-center justify-center gap-6 bg-[#f5f3ef]">
      {/* Content underneath */}
      <p className="text-[13px] uppercase tracking-[2px] text-[#1e1e20]/40 font-medium relative z-10">Move your cursor</p>
      <h3 className="font-black text-[28px] md:text-[36px] uppercase text-[#1e1e20] text-center leading-tight px-4 relative z-10">
        Spotlight<br />Reveal
      </h3>
      <button className="border border-[#1e1e20] rounded-full px-6 py-2 text-[14px] uppercase font-medium text-[#1e1e20] relative z-10">
        Hover Me
      </button>
      {/* Dark overlay with spotlight cutout */}
      <div
        ref={overlay}
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ background: 'rgba(30,30,32,0.97)' }}
      />
    </div>
  )
}

/* ─────────────────────────────────────────────
   EFFECT 4 — Magnetic Snap
   Cursor grows into a large ring and snaps
   (magnetically pulls) toward buttons on hover.
───────────────────────────────────────────── */
function Effect4({ active }: { active: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const cursor = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!active) return
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      if (dot.current) {
        dot.current.style.transform = `translate(${target.current.x - 4}px, ${target.current.y - 4}px)`
      }
    }
    el.addEventListener('mousemove', onMove)

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.14
      pos.current.y += (target.current.y - pos.current.y) * 0.14
      const size = hovered ? 72 : 36
      if (cursor.current) {
        cursor.current.style.transform = `translate(${pos.current.x - size / 2}px, ${pos.current.y - size / 2}px)`
        cursor.current.style.width = `${size}px`
        cursor.current.style.height = `${size}px`
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      el.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [active, hovered])

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden cursor-none bg-[#1e1e20] flex flex-col items-center justify-center gap-6">
      {/* Ring cursor */}
      <div
        ref={cursor}
        className="absolute top-0 left-0 rounded-full border-2 border-white pointer-events-none mix-blend-difference transition-[width,height] duration-200"
        style={{ willChange: 'transform' }}
      />
      {/* Dot */}
      <div ref={dot} className="absolute top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none" style={{ willChange: 'transform' }} />

      <p className="text-[13px] uppercase tracking-[2px] text-white/30 font-medium relative z-10">Move your cursor</p>
      <h3 className="font-black text-[28px] md:text-[36px] uppercase text-white text-center leading-tight px-4 relative z-10">
        Magnetic<br />Ring
      </h3>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-white rounded-full px-6 py-2 text-[14px] uppercase font-medium text-white hover:bg-white hover:text-[#1e1e20] transition-colors relative z-10"
      >
        Hover Me
      </button>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function CursorDemoPage() {
  const [active, setActive] = useState<number | null>(null)

  const effects = [
    { id: 1, name: 'Smooth Follow', tag: 'Subtle & Elegant', Component: Effect1 },
    { id: 2, name: 'Particle Trail', tag: 'Dynamic & Playful', Component: Effect2 },
    { id: 3, name: 'Spotlight Reveal', tag: 'Bold & Dramatic', Component: Effect3 },
    { id: 4, name: 'Magnetic Ring', tag: 'Modern & Interactive', Component: Effect4 },
  ]

  return (
    <main className="min-h-screen bg-[#f5f3ef] px-5 md:px-[90px] py-[80px] md:py-[120px]">

      {/* Header */}
      <div className="flex flex-col gap-[16px] mb-[60px] md:mb-[80px]">
        <p className="text-[13px] uppercase tracking-[3px] text-[#1e1e20]/40 font-medium">Internal Demo</p>
        <h1 className="font-black text-[40px] md:text-[72px] uppercase text-[#1e1e20] leading-tight">
          Cursor Effects
        </h1>
        <p className="text-[16px] md:text-[20px] text-[#1e1e20]/60 max-w-[560px] leading-[1.7]">
          Hover inside each card to preview the effect. Pick your favourite — we&apos;ll apply it site-wide.
        </p>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {effects.map(({ id, name, tag, Component }) => (
          <div key={id} className="flex flex-col gap-3">
            {/* Card */}
            <div
              className="h-[360px] md:h-[440px] rounded-sm overflow-hidden border border-[#1e1e20]/10"
              onMouseEnter={() => setActive(id)}
              onMouseLeave={() => setActive(null)}
            >
              <Component active={active === id} />
            </div>

            {/* Label row */}
            <div className="flex items-center justify-between px-1">
              <div>
                <p className="font-bold text-[18px] text-[#1e1e20] uppercase">{name}</p>
                <p className="text-[13px] text-[#1e1e20]/50 uppercase tracking-[1px]">{tag}</p>
              </div>
              <span className="font-black text-[32px] text-[#1e1e20]/[0.06] tracking-[-2px]">0{id}</span>
            </div>
          </div>
        ))}
      </div>

    </main>
  )
}
