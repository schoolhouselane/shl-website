'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/useInView'

const GALLERY_IMAGES = [
  { src: '/images/gallery-1.png', alt: 'Gallery image 1' },
  { src: '/images/gallery-2.png', alt: 'Gallery image 2' },
  { src: '/images/gallery-3.png', alt: 'Gallery image 3' },
  { src: '/images/gallery-4.png', alt: 'Gallery image 4' },
]

export default function Gallery() {
  const [ref, inView] = useInView(0.1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px] transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)' }}
    >
      {/* Arrow button */}
      <div className="flex justify-end mb-3">
        <Link
          href="/work"
          className="flex items-center justify-center bg-[#1e1e20] rounded-full w-[44px] h-[44px] md:w-[55px] md:h-[55px] hover:opacity-80 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </Link>
      </div>

      {/* Text */}
      <p className="text-[16px] text-[#1e1e20] text-right leading-[1.37] mb-6 md:mb-8">
        Loved what you saw? Let&apos;s create something like this for you.
      </p>

      {/* Gallery images */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-5">
        {GALLERY_IMAGES.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            className="w-full h-auto"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) calc(50vw - 90px), 760px"
          />
        ))}
      </div>
    </section>
  )
}
