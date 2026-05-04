'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
  src: string
  alt: string
}

export default function BlogHero({ src, alt }: Props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[24px] md:pt-[40px] lg:pt-[60px]">
      <div
        className="relative w-full overflow-hidden transition-all duration-700 aspect-[4095/2361] md:aspect-auto md:h-[clamp(220px,50vw,578px)]"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.99)',
          transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 768px) 100vw, calc(100vw - 48px), calc(100vw - 180px)"
        />
      </div>
    </section>
  )
}
