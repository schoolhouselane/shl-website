'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

const slides = [
  {
    image: '/images/hero-1.png',
    mobileImage: '/images/mobile-home-hero1.png',
    heading: 'AI powered\ncreative & design',
    sub: 'We exist at the intersection of creative and Generative AI',
  },
  {
    image: '/images/hero-2.png',
    mobileImage: '/images/mobile-home-hero2.png',
    heading: "The marketing teams' creative team",
    sub: 'We remove the bottlenecks in the traditional marketing model',
  },
  {
    image: '/images/hero-3.png',
    mobileImage: '/images/mobile-home-hero3.png',
    heading: 'Creative-as-a-Service\nfor Marketing teams',
    sub: 'Top-tier creative talent with proprietary AI-powered workflows',
  },
]

const SLIDE_DURATION = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (index: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % slides.length)
    }, SLIDE_DURATION)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={`bg-[#f5f3ef] w-full transition-all duration-700 ease-in-out ${
      scrolled ? 'px-4 md:px-6 lg:px-[90px] pt-[60px] md:pt-[80px] lg:pt-[90px] pb-[30px] md:pb-[50px] lg:pb-[60px]' : ''
    }`}>

      {/* Image container */}
      <div className={`relative overflow-hidden transition-[height] duration-700 ease-in-out flex flex-col ${
        scrolled
          ? 'h-[280px] md:h-[433px] justify-center'
          : 'h-[604px] md:h-[500px] lg:h-screen justify-end pb-[64px] md:pb-[60px] lg:pb-[28vh]'
      }`}>

        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Mobile image */}
            <Image
              src={slide.mobileImage}
              alt={slide.heading}
              fill
              className="object-cover object-top md:hidden"
              priority={i === 0}
            />
            {/* Tablet + desktop image */}
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              className="object-cover object-top hidden md:block"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Content */}
        <div className={`relative z-20 flex flex-col gap-4 md:gap-6 lg:gap-[30px] max-w-full md:max-w-[714px] transition-all duration-700 pr-4 md:pr-0 ${
          scrolled ? 'pl-4 md:pl-6 lg:pl-[49px]' : 'pl-4 md:pl-6 lg:pl-[90px]'
        }`}>
          <div key={current} className="flex flex-col gap-1 text-white animate-fadeIn">
            <h1 className="font-black text-[24px] md:text-[32px] lg:text-[64px] leading-[0.87] tracking-[-0.5px] md:tracking-[-0.8px] lg:tracking-[-1.28px] uppercase">
              {slides[current].heading.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br className="md:hidden" />}</span>
              ))}
            </h1>
            <p className="font-normal text-[16px] md:text-[20px] lg:text-[24px] leading-tight mt-[3px] max-w-[231px] md:max-w-[384px] lg:max-w-[453px]">
              {slides[current].sub}
            </p>
          </div>

          <div className="flex flex-col items-start gap-[8px] md:flex-row md:items-center md:gap-[20px]">
            <Link
              href="/contact"
              className="btn-cta flex items-center gap-3 border border-white rounded-full px-[24px] py-[12px] text-white text-[16px] font-medium uppercase"
            >
              Book a Demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link
              href="/work"
              className="btn-cta flex items-center justify-center bg-white rounded-full px-[24px] py-[12px] text-[#1e1e20] text-[16px] font-medium uppercase"
            >
              See Our Work
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className={`absolute bottom-5 z-20 flex items-center gap-3 transition-all duration-700 ${
          scrolled ? 'left-4 md:left-6 lg:left-[49px]' : 'left-4 md:left-6 lg:left-[90px]'
        }`}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
          <div className="ml-2 w-[80px] h-[2px] bg-white/30 rounded-full overflow-hidden">
            <div key={current} className="h-full bg-white rounded-full animate-progress" />
          </div>
        </div>

        {/* Scroll indicator — only on desktop full screen */}
        <div className={`absolute right-[90px] bottom-[10px] z-20 hidden lg:flex flex-col items-center gap-[6px] transition-opacity duration-500 ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <div className="border border-white w-[59px] h-[63px] rounded-[27.5px] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
          <p className="text-white text-[16px] uppercase">Scroll</p>
        </div>

      </div>
    </section>
  )
}
