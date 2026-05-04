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

  const animStyle: React.CSSProperties = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.99)',
    transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
  }

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[72px] md:pt-[40px] lg:pt-[60px]">

      {/* Mobile — full image, no crop */}
      <div className="md:hidden w-full overflow-hidden transition-all duration-700" style={animStyle}>
        <Image
          src={src}
          alt={alt}
          width={4095}
          height={2361}
          className="w-full h-auto"
          priority
          sizes="100vw"
        />
      </div>

      {/* Tablet + Desktop — fixed height, cropped from top */}
      <div
        className="hidden md:block relative w-full overflow-hidden transition-all duration-700"
        style={{ height: 'clamp(220px, 50vw, 578px)', ...animStyle }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          priority
          sizes="calc(100vw - 48px), calc(100vw - 180px)"
        />
      </div>

    </section>
  )
}
