'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'

function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

const PHOTOS = [
  { src: '/images/jobs/jobs-life-1.jpg', alt: 'Life at Schoolhouse Lane — team culture' },
  { src: '/images/jobs/jobs-life-2.jpg', alt: 'Life at Schoolhouse Lane — office vibes' },
  { src: '/images/jobs/jobs-life-3.jpg', alt: 'Life at Schoolhouse Lane — creative environment' },
  { src: '/images/jobs/jobs-life-4.jpg', alt: 'Life at Schoolhouse Lane — collaboration' },
  { src: '/images/jobs/jobs-life-5.jpg', alt: 'Life at Schoolhouse Lane — team moments' },
  { src: '/images/jobs/jobs-life-6.jpg', alt: 'Life at Schoolhouse Lane — workspace' },
]

export default function JobsLifeMosaic() {
  const [ref, inView] = useInView(0.05)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[48px] md:py-[60px] lg:py-[60px] flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[20px] md:gap-[24px]">
        {/* Left — heading */}
        <div className="shrink-0">
          <h2 className="font-black text-[36px] md:text-[44px] lg:text-[56px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-1.4px]">
            Life at<br />Schoolhouse Lane
          </h2>
        </div>
        {/* Right — description + CTA */}
        <div className="flex flex-col gap-[16px] md:gap-[20px] md:items-end md:text-right md:max-w-[438px]">
          <p className="font-normal text-[15px] md:text-[16px] text-[#1e1e20] leading-[1.7]">
            The work is serious. The environment doesn&apos;t have to be.<br className="hidden md:block" />
            Behind every deliverable is a team that genuinely loves what they&apos;re building.
          </p>
          <Link
            href="#open-roles"
            className="self-start md:self-end btn-cta flex items-center gap-[12px] border border-[#1e1e20] rounded-full px-[24px] py-[8px] text-[16px] font-medium uppercase text-[#1e1e20]"
          >
            We&apos;re Hiring
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Desktop mosaic — 5-column complex grid (proportional to Figma percentages) */}
      <div className="hidden lg:block relative w-full" style={{ height: '460px' }}>
        {/* Photo 1: 15.45% wide, full 460px tall */}
        <div className="absolute overflow-hidden" style={{ left: '0%', top: 0, width: '15.45%', height: '460px' }}>
          <Image src={PHOTOS[0].src} alt={PHOTOS[0].alt} fill className="object-cover" sizes="220px" />
        </div>
        {/* Photo 3: 35.77% wide, top half ~220px */}
        <div className="absolute overflow-hidden" style={{ left: '16.48%', top: 0, width: '35.77%', height: '220px' }}>
          <Image src={PHOTOS[2].src} alt={PHOTOS[2].alt} fill className="object-cover" sizes="500px" />
        </div>
        {/* Photo 4: 35.77% wide, bottom half ~222px */}
        <div className="absolute overflow-hidden" style={{ left: '16.48%', top: '238px', width: '35.77%', height: '222px' }}>
          <Image src={PHOTOS[3].src} alt={PHOTOS[3].alt} fill className="object-cover" sizes="500px" />
        </div>
        {/* Photo 2: 26.33% wide, full 460px tall */}
        <div className="absolute overflow-hidden" style={{ left: '53.28%', top: 0, width: '26.33%', height: '460px' }}>
          <Image src={PHOTOS[1].src} alt={PHOTOS[1].alt} fill className="object-cover" sizes="380px" />
        </div>
        {/* Photo 5: 19.36% wide, top 300px */}
        <div className="absolute overflow-hidden" style={{ left: '80.64%', top: 0, width: '19.36%', height: '300px' }}>
          <Image src={PHOTOS[4].src} alt={PHOTOS[4].alt} fill className="object-cover" sizes="280px" />
        </div>
        {/* Photo 6: 19.36% wide, bottom 144px (with 16px gap) */}
        <div className="absolute overflow-hidden" style={{ left: '80.64%', top: '316px', width: '19.36%', height: '144px' }}>
          <Image src={PHOTOS[5].src} alt={PHOTOS[5].alt} fill className="object-cover" sizes="280px" />
        </div>
      </div>

      {/* Tablet mosaic — 2-column grid */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-[12px]" style={{ gridAutoRows: '220px' }}>
        {PHOTOS.map((photo, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="50vw" />
          </div>
        ))}
      </div>

      {/* Mobile mosaic — 2×2 top + 2 bottom stacked */}
      <div className="md:hidden grid grid-cols-2 gap-[8px]">
        {PHOTOS.map((photo, i) => (
          <div key={i} className="relative overflow-hidden aspect-square">
            <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="50vw" />
          </div>
        ))}
      </div>
    </section>
  )
}
