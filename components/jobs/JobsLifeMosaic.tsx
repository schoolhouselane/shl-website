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
  { src: '/images/jobs/jobs-life-1.webp', alt: 'Life at Schoolhouse Lane — creative culture' },
  { src: '/images/jobs/jobs-life-2.webp', alt: 'Life at Schoolhouse Lane — open for business' },
  { src: '/images/jobs/jobs-life-3.webp', alt: 'Life at Schoolhouse Lane — team moments' },
  { src: '/images/jobs/jobs-life-4.webp', alt: 'Life at Schoolhouse Lane — office vibes' },
  { src: '/images/jobs/jobs-life-5.webp', alt: 'Life at Schoolhouse Lane — team environment' },
  { src: '/images/jobs/jobs-life-6.webp', alt: 'Life at Schoolhouse Lane — workspace' },
]

export default function JobsLifeMosaic() {
  const [ref, inView] = useInView(0.05)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-[24px] lg:px-[90px] py-[48px] md:py-[32px] lg:py-[60px] flex flex-col gap-[40px] md:gap-[32px] lg:gap-[80px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(24px)' }}
    >
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[20px] md:gap-[24px]">
        {/* Left — heading */}
        <div className="shrink-0">
          <h2 className="font-black text-[36px] md:text-[32px] lg:text-[56px] uppercase text-[#1e1e20] leading-[0.92] tracking-[-1.4px]">
            Life at<br />Schoolhouse Lane
          </h2>
        </div>
        {/* Right — description + CTA */}
        <div className="flex flex-col gap-[16px] md:items-end md:text-right md:max-w-[544px]">
          <p className="font-normal text-[15px] md:text-[16px] text-[#1e1e20] leading-[1.7]">
            <span className="whitespace-nowrap">The work is serious. The environment doesn&apos;t have to be.</span><br />
            Behind every deliverable is a team that genuinely loves what they&apos;re building.
          </p>
          <Link
            href="#open-roles"
            className="btn-cta self-start md:self-end flex items-center gap-[12px] border border-[#1e1e20] rounded-full px-[24px] py-[8px] md:py-[12px] text-[16px] font-medium uppercase text-[#1e1e20]"
          >
            We&apos;re Hiring
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Desktop mosaic — 5-column absolute layout */}
      <div className="hidden lg:block relative w-full" style={{ height: '460px' }}>
        {/* Photo 1: 15.45% wide, full tall */}
        <div className="absolute overflow-hidden" style={{ left: '0%', top: 0, width: '15.45%', height: '460px' }}>
          <Image src={PHOTOS[0].src} alt={PHOTOS[0].alt} fill className="object-cover" sizes="220px" />
        </div>
        {/* Photo 3: 35.77% wide, top half */}
        <div className="absolute overflow-hidden" style={{ left: '16.48%', top: 0, width: '35.77%', height: '220px' }}>
          <Image src={PHOTOS[2].src} alt={PHOTOS[2].alt} fill className="object-cover" sizes="500px" />
        </div>
        {/* Photo 4: 35.77% wide, bottom half */}
        <div className="absolute overflow-hidden" style={{ left: '16.48%', top: '238px', width: '35.77%', height: '222px' }}>
          <Image src={PHOTOS[3].src} alt={PHOTOS[3].alt} fill className="object-cover" sizes="500px" />
        </div>
        {/* Photo 2: 26.33% wide, full tall */}
        <div className="absolute overflow-hidden" style={{ left: '53.28%', top: 0, width: '26.33%', height: '460px' }}>
          <Image src={PHOTOS[1].src} alt={PHOTOS[1].alt} fill className="object-cover" sizes="380px" />
        </div>
        {/* Photo 5: 19.36% wide, top 300px */}
        <div className="absolute overflow-hidden" style={{ left: '80.64%', top: 0, width: '19.36%', height: '300px' }}>
          <Image src={PHOTOS[4].src} alt={PHOTOS[4].alt} fill className="object-cover" sizes="280px" />
        </div>
        {/* Photo 6: 19.36% wide, bottom 144px */}
        <div className="absolute overflow-hidden" style={{ left: '80.64%', top: '316px', width: '19.36%', height: '144px' }}>
          <Image src={PHOTOS[5].src} alt={PHOTOS[5].alt} fill className="object-cover" sizes="280px" />
        </div>
      </div>

      {/* Tablet mosaic — exact Figma proportions, 2 rows */}
      <div className="hidden md:flex lg:hidden flex-col gap-[32px]">

        {/* Row 1: tall portrait left (29.6%) + two stacked right (68.5%) — total h≈554px */}
        <div className="flex gap-[20px] items-stretch" style={{ height: '554px' }}>
          <div className="relative overflow-hidden shrink-0" style={{ width: '29.6%' }}>
            <Image src={PHOTOS[0].src} alt={PHOTOS[0].alt} fill className="object-cover" sizes="30vw" />
          </div>
          <div className="flex flex-col gap-[22px] flex-1">
            <div className="relative overflow-hidden" style={{ height: '265px' }}>
              <Image src={PHOTOS[1].src} alt={PHOTOS[1].alt} fill className="object-cover" sizes="68vw" />
            </div>
            <div className="relative overflow-hidden flex-1">
              <Image src={PHOTOS[2].src} alt={PHOTOS[2].alt} fill className="object-cover" sizes="68vw" />
            </div>
          </div>
        </div>

        {/* Row 2: wide left (56.4%) + two stacked right (41.4%) — total h≈619px */}
        <div className="flex gap-[21px] items-stretch" style={{ height: '619px' }}>
          <div className="relative overflow-hidden shrink-0" style={{ width: '56.4%' }}>
            <Image src={PHOTOS[3].src} alt={PHOTOS[3].alt} fill className="object-cover" sizes="57vw" />
          </div>
          <div className="flex flex-col gap-[22px] flex-1">
            <div className="relative overflow-hidden" style={{ height: '404px' }}>
              <Image src={PHOTOS[4].src} alt={PHOTOS[4].alt} fill className="object-cover" sizes="41vw" />
            </div>
            <div className="relative overflow-hidden flex-1">
              <Image src={PHOTOS[5].src} alt={PHOTOS[5].alt} fill className="object-cover" sizes="41vw" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — 2-col square grid */}
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
