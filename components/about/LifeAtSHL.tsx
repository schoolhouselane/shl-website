'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'

export default function LifeAtSHL() {
  const [headerRef, headerInView] = useInView(0.2)
  const [collageRef, collageInView] = useInView(0.1)
  const [mobileCollageRef, mobileCollageInView] = useInView(0.1)

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px] flex flex-col gap-[30px] md:gap-[40px] lg:gap-[60px]">

      {/* Header */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 transition-all duration-700"
        style={{
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <h2 className="font-black text-[28px] md:text-[32px] lg:text-[56px] uppercase text-[#1e1e20] leading-tight max-w-[606px]">
          Life at<br />Schoolhouse Lane
        </h2>
        <div className="flex flex-col gap-[20px] lg:items-end lg:max-w-[544px]">
          <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1e1e20] leading-[1.7] lg:text-right">
            The work is serious. The environment doesn&apos;t have to be. Behind every deliverable is a team that genuinely loves what they&apos;re building.
          </p>
          <Link
            href="/jobs"
            className="hidden lg:inline-flex items-center gap-3 border border-[#1e1e20] rounded-full px-[24px] py-[12px] text-[16px] font-medium uppercase text-[#1e1e20] btn-cta"
          >
            We&apos;re Hiring
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      {/* Photo collage — matches Figma 636-688 exactly */}
      {/* Desktop: 4 proportional columns (239:553:407:299), ~16px gaps */}
      {/* Col 2 splits 220/222, Col 4 splits 288/144 */}
      <div ref={collageRef as React.RefObject<HTMLDivElement>} className="hidden md:flex gap-3 lg:gap-4 h-[320px] lg:h-[460px]">

        {/* Col 1: man — full height */}
        <div
          className="relative overflow-hidden rounded-sm transition-all duration-700"
          style={{
            flex: '239',
            opacity: collageInView ? 1 : 0,
            transform: collageInView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            transitionDelay: '0ms',
          }}
        >
          <Image src="/images/life-1.png" alt="Life at SHL" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
        </div>

        {/* Col 2: girl top + car bottom */}
        <div className="flex flex-col gap-[18px]" style={{ flex: '553' }}>
          <div
            className="relative overflow-hidden rounded-sm transition-all duration-700"
            style={{
              flex: '220',
              opacity: collageInView ? 1 : 0,
              transform: collageInView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
              transitionDelay: '80ms',
            }}
          >
            <Image src="/images/life-3.png" alt="Life at SHL" fill className="object-cover" sizes="(max-width: 768px) 50vw, 30vw" />
          </div>
          <div
            className="relative overflow-hidden rounded-sm bg-[#181818] transition-all duration-700"
            style={{
              flex: '222',
              opacity: collageInView ? 1 : 0,
              transform: collageInView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
              transitionDelay: '160ms',
            }}
          >
            <Image src="/images/life-4.png" alt="Life at SHL" fill className="object-cover" sizes="(max-width: 768px) 50vw, 30vw" />
          </div>
        </div>

        {/* Col 3: woman — full height */}
        <div
          className="relative overflow-hidden rounded-sm bg-[#1c1c1c] transition-all duration-700"
          style={{
            flex: '407',
            opacity: collageInView ? 1 : 0,
            transform: collageInView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            transitionDelay: '120ms',
          }}
        >
          <Image src="/images/life-2.png" alt="Life at SHL" fill className="object-cover object-top" sizes="(max-width: 768px) 50vw, 22vw" />
        </div>

        {/* Col 4: sofa top + phone bottom */}
        <div className="flex flex-col gap-[22px]" style={{ flex: '299' }}>
          <div
            className="relative overflow-hidden rounded-sm transition-all duration-700"
            style={{
              flex: '288',
              opacity: collageInView ? 1 : 0,
              transform: collageInView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
              transitionDelay: '200ms',
            }}
          >
            <Image src="/images/life-5.png" alt="Life at SHL" fill className="object-cover" sizes="(max-width: 768px) 50vw, 16vw" />
          </div>
          <div
            className="relative overflow-hidden rounded-sm bg-[#1a1a1a] transition-all duration-700"
            style={{
              flex: '144',
              opacity: collageInView ? 1 : 0,
              transform: collageInView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
              transitionDelay: '280ms',
            }}
          >
            <Image src="/images/life-6.png" alt="Life at SHL" fill className="object-cover" sizes="(max-width: 768px) 50vw, 16vw" />
          </div>
        </div>

      </div>

      {/* Mobile: 2-column simplified grid */}
      <div ref={mobileCollageRef as React.RefObject<HTMLDivElement>} className="grid md:hidden grid-cols-2 gap-3">
        {[
          { src: '/images/life-1.png', delay: 0 },
          { src: '/images/life-3.png', delay: 80 },
          { src: '/images/life-2.png', delay: 160 },
          { src: '/images/life-4.png', delay: 240 },
          { src: '/images/life-5.png', delay: 320 },
          { src: '/images/life-6.png', delay: 400 },
        ].map(({ src, delay }, i) => (
          <div
            key={src}
            className="relative h-[200px] overflow-hidden rounded-sm transition-all duration-700"
            style={{
              opacity: mobileCollageInView ? 1 : 0,
              transform: mobileCollageInView ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${delay}ms`,
            }}
          >
            <Image src={src} alt="Life at SHL" fill className={`object-cover${i === 2 ? ' object-top' : ''}`} sizes="50vw" />
          </div>
        ))}
      </div>

    </section>
  )
}
