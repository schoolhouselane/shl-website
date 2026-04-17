'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useCallback } from 'react'

const services = [
  {
    num: '01',
    title: 'Strategy & Growth Consulting',
    tagline: 'The blueprint behind every brand that outperforms its category.',
    headline: 'Good Creative Without\nStrategy Is Decoration',
    body: "We start every relationship with a rigorous growth audit — then build the plan that makes the work worth doing. Strategy isn't a phase. It's the foundation.",
    bullets: [
      'Brand & business growth audits',
      'Market positioning & category design',
      'Go-to-market strategy & launch planning',
      'Quarterly growth sprints & retainers',
      'Leadership workshops & team enablement',
    ],
    result: '4× ARR growth · 12-month retainer',
    images: [
      '/images/services-01-1.png',
      '/images/services-01-2.png',
      '/images/services-01-3.png',
      '/images/services-01-4.png',
    ],
  },
  {
    num: '02',
    title: 'Brand Identity & Brand Planning',
    tagline: 'Transform your brand from a cost center into a strategic growth engine.',
    headline: 'Your Brand Should\nCommand A Category',
    body: 'Most brands are forgettable by design. We reverse-engineer the emotional triggers and market whitespace that let your brand command a category — and charge accordingly.',
    bullets: [
      'Brand strategy & competitive positioning',
      'Visual identity systems (logo, colour, type, motion)',
      'Verbal identity & brand voice guidelines',
      'Brand architecture for multi-product companies',
      'Launch campaigns & brand activation',
    ],
    result: '+312% revenue uplift · 6-month engagement',
    images: [
      '/images/services-02-1.png',
      '/images/services-02-2.png',
      '/images/services-02-3.png',
      '/images/services-02-4.png',
    ],
  },
  {
    num: '03',
    title: 'AI Creative & Innovation',
    tagline: 'Velocity without compromise. AI-augmented execution for the modern era.',
    headline: 'Faster. Smarter.\nStill Beautiful',
    body: "We deploy AI as a creative multiplier — not a shortcut. From generative visual systems to AI-assisted strategy, we move faster without sacrificing quality.",
    bullets: [
      'AI-augmented campaign production at scale',
      'Custom generative visual identity systems',
      'LLM-powered brand voice tools',
      'Rapid prototyping & concept testing',
      'AI workflow integration for in-house teams',
    ],
    result: '3× content output · 50% cost reduction',
    images: [
      '/images/services-03-1.png',
      '/images/services-03-2.png',
      '/images/services-03-3.png',
      '/images/services-03-4.png',
    ],
  },
  {
    num: '04',
    title: 'Campaigns & Creative Direction',
    tagline: 'Award-worthy work that moves the needle on business goals.',
    headline: 'We Make Cultural\nMoments That Sell',
    body: "We don't make ads. We make cultural moments that happen to sell things. Every campaign starts with the business problem and ends with proof it worked.",
    bullets: [
      'Integrated campaign strategy & ideation',
      'Art direction & creative production',
      'Social-first video & static content',
      'Influencer & creator partnerships',
      'Performance reporting & creative iteration',
    ],
    result: '+940K organic reach · 8-week campaign',
    images: [
      '/images/services-04-1.png',
      '/images/services-04-2.png',
      '/images/services-04-3.png',
      '/images/services-04-4.png',
    ],
  },
  {
    num: '05',
    title: 'Websites & Digital Experiences',
    tagline: 'Conversion-engineered sites that work while you sleep.',
    headline: 'Your Website Is\nYour Best Salesperson',
    body: 'We design and build digital experiences that convert — with performance, accessibility, and brand storytelling woven into every scroll.',
    bullets: [
      'UX strategy & conversion-focused design',
      'Webflow, Next.js & headless CMS builds',
      'E-commerce & DTC store design',
      'Speed, SEO & Core Web Vitals optimisation',
      'Post-launch A/B testing & iteration',
    ],
    result: '+187% conversion rate · 4-month build',
    images: [
      '/images/services-05-1.png',
      '/images/services-05-2.png',
      '/images/services-05-3.png',
      '/images/services-05-4.png',
    ],
  },
  {
    num: '06',
    title: 'Gallery & Videos',
    tagline: 'Visual assets so sharp they tell the story for you.',
    headline: 'Visual Assets That Do\nthe Selling for You',
    body: "Your brand is only as strong as its worst image. We produce cinematic photography and video that doesn't just look premium — it converts browsers into buyers, elevates perceived value, and gives your entire team assets they're proud to use.",
    bullets: [
      'Campaign & brand photography direction',
      'Hero brand films & campaign video production',
      'Social-first content (Reels, TikTok, Stories)',
      'Product & lifestyle still photography',
      'Motion identity & logo animation systems',
    ],
    result: '940K organic reach · 8-week campaign',
    images: [
      '/images/services-06-1.png',
      '/images/services-06-2.png',
      '/images/services-06-3.png',
      '/images/services-06-4.png',
    ],
  },
]

export default function ServicesAccordion() {
  const [active, setActive] = useState<number | null>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggle = useCallback((i: number) => {
    setActive((prev) => {
      const next = prev === i ? null : i
      if (next !== null) {
        setTimeout(() => {
          const el = rowRefs.current[next]
          if (el) {
            const headerH = window.innerWidth >= 768 ? 82 : 64
            const top = el.getBoundingClientRect().top + window.scrollY - headerH - 12
            window.scrollTo({ top, behavior: 'smooth' })
          }
        }, 50)
      }
      return next
    })
  }, [])

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] pt-[40px] md:pt-[60px] pb-[60px] lg:pb-[120px] flex flex-col gap-[40px] md:gap-[60px] lg:gap-[120px]">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
        <h2 className="font-black text-[22px] md:text-[28px] lg:text-[64px] uppercase text-[#1e1e20] leading-tight max-w-full md:max-w-[380px] lg:max-w-[514px]">
          Six Ways We Drive Growth
        </h2>
        <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1e1e20] leading-[1.8] md:text-right max-w-full md:max-w-[400px] lg:max-w-[620px]">
          Choose your starting point. Every service connects to the same outcome — your brand growing faster than your competitors&apos;.
        </p>
      </div>

      {/* Accordion */}
      <div className="flex flex-col border-t border-black/20">
        {services.map((service, i) => {
          const isOpen = active === i
          return (
            <div key={service.num} ref={(el) => { rowRefs.current[i] = el }}>

              {/* Row header */}
              <button
                onClick={() => toggle(i)}
                className="w-full text-left border-b border-black pt-[20px] pb-[24px] md:pt-[26px] md:pb-[30px] px-0 md:px-[13px] flex items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex flex-col gap-[8px] md:gap-[10px] flex-1 transition-transform duration-300 ease-out group-hover:translate-x-2">
                  <span className="font-black text-[14px] md:text-[16px] text-[#1e1e20] tracking-[-0.64px]">{service.num}</span>
                  <div className="flex flex-col gap-[6px] md:gap-[8px]">
                    <span className="font-black text-[16px] md:text-[18px] lg:text-[20px] uppercase text-[#1e1e20] leading-tight">
                      {service.title}
                    </span>
                    <span className="text-[13px] md:text-[14px] lg:text-[16px] text-[#1e1e20] leading-tight">
                      {service.tagline}
                    </span>
                  </div>
                </div>

                {/* Circle arrow */}
                <div className={`shrink-0 w-[40px] h-[40px] md:w-[44px] md:h-[44px] lg:w-[55px] lg:h-[55px] rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? 'border border-[#1e1e20]/30 group-hover:border-[#1e1e20]'
                    : 'bg-[#1e1e20] rotate-90'
                }`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#1e1e20' : 'white'} strokeWidth="2">
                    <path d="M7 7h10v10M7 17L17 7"/>
                  </svg>
                </div>
              </button>

              {/* Inline detail panel */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col lg:flex-row gap-0 pt-[30px] pb-0 md:py-[40px] lg:py-[60px] border-b border-black">

                  {/* Left col */}
                  <div className="flex flex-col justify-between gap-[30px] lg:w-[340px] xl:w-[420px] shrink-0 border-b lg:border-b-0 lg:border-r border-black pb-[30px] lg:pb-0 lg:pr-[60px]">
                    <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] lg:w-[55px] lg:h-[55px] bg-[#1e1e20] rounded-full flex items-center justify-center rotate-90">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M7 7h10v10M7 17L17 7"/>
                      </svg>
                    </div>
                  </div>

                  {/* Right col */}
                  <div className="flex flex-col gap-[24px] md:gap-[30px] flex-1 lg:pl-[60px] xl:pl-[74px] pt-[30px] lg:pt-0">
                    <h3 className="font-black text-[22px] md:text-[36px] lg:text-[56px] uppercase text-[#1e1e20] leading-tight whitespace-pre-line">
                      {service.headline}
                    </h3>
                    <p className="font-normal text-[14px] md:text-[16px] lg:text-[20px] text-[#1e1e20] leading-normal max-w-[818px]">
                      {service.body}
                    </p>
                    <ul className="list-disc pl-[20px] md:pl-[24px] flex flex-col gap-[4px]">
                      {service.bullets.map((b) => (
                        <li key={b} className="font-normal text-[14px] md:text-[16px] lg:text-[20px] text-[#1e1e20] leading-[28px] md:leading-[30px]">{b}</li>
                      ))}
                    </ul>
                    <div className="bg-[#1e1e20] flex items-center justify-center px-4 md:px-[51px] py-[18px] h-[53px]">
                      <p className="font-bold text-[11px] md:text-[12px] lg:text-[14px] text-white whitespace-nowrap">{service.result}</p>
                    </div>
                    <div className="flex gap-[5px] overflow-x-auto scrollbar-hide">
                      {service.images.map((src, j) => (
                        <div key={j} className="relative shrink-0 w-[120px] h-[120px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] bg-[#d9d9d9] overflow-hidden">
                          <Image src={src} alt="Case study" fill className="object-cover" sizes="200px" />
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="btn-cta inline-flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-[20px] md:px-[24px] py-[10px] md:py-[12px] text-[14px] md:text-[16px] font-medium uppercase text-[#1e1e20]"
                    >
                      Ready for this level of growth?
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          )
        })}
      </div>

    </section>
  )
}
