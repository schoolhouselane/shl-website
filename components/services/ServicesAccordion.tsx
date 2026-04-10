'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const detailImages = [
  '/images/services-d1.png',
  '/images/services-d2.png',
  '/images/services-d3.png',
  '/images/services-d4.png',
]

const services = [
  {
    num: '01',
    title: 'Brand Identity & Positioning',
    tagline: 'Transform your brand from a cost center into a strategic growth engine.',
    headline: 'Your Brand Should Command A Category',
    body: 'Most brands are forgettable by design. We reverse-engineer the emotional triggers and market whitespace that let your brand command a category — and charge accordingly.',
    bullets: [
      'Brand strategy & competitive positioning',
      'Visual identity systems (logo, colour, type, motion)',
      'Verbal identity & brand voice guidelines',
      'Brand architecture for multi-product companies',
      'Launch campaigns & brand activation',
    ],
    result: '+312% revenue uplift · 6-month engagement',
  },
  {
    num: '02',
    title: 'Gallery & Videos',
    tagline: 'Visual assets so sharp they tell the story for you.',
    headline: 'Visual Assets That Do the Selling for You',
    body: "Your brand is only as strong as its worst image. We produce cinematic photography and video that doesn't just look premium — it converts browsers into buyers, elevates perceived value, and gives your entire team assets they're proud to use.",
    bullets: [
      'Campaign & brand photography direction',
      'Hero brand films & campaign video production',
      'Social-first content (Reels, TikTok, Stories)',
      'Product & lifestyle still photography',
      'Motion identity & logo animation systems',
    ],
    result: '940K organic reach · 8-week campaign',
  },
  {
    num: '03',
    title: 'Websites & Digital Experiences',
    tagline: 'Conversion-engineered sites that work while you sleep.',
    headline: 'Your Website Is Your Best Salesperson',
    body: 'We design and build digital experiences that convert — with performance, accessibility, and brand storytelling woven into every scroll.',
    bullets: [
      'UX strategy & conversion-focused design',
      'Webflow, Next.js & headless CMS builds',
      'E-commerce & DTC store design',
      'Speed, SEO & Core Web Vitals optimisation',
      'Post-launch A/B testing & iteration',
    ],
    result: '+187% conversion rate · 4-month build',
  },
  {
    num: '04',
    title: 'Campaigns & Creative Direction',
    tagline: 'Award-worthy work that moves the needle on business goals.',
    headline: 'We Make Cultural Moments That Sell',
    body: "We don't make ads. We make cultural moments that happen to sell things. Every campaign starts with the business problem and ends with proof it worked.",
    bullets: [
      'Integrated campaign strategy & ideation',
      'Art direction & creative production',
      'Social-first video & static content',
      'Influencer & creator partnerships',
      'Performance reporting & creative iteration',
    ],
    result: '+940K organic reach · 8-week campaign',
  },
  {
    num: '05',
    title: 'AI Creative & Innovation',
    tagline: 'Velocity without compromise. AI-augmented execution for the modern era.',
    headline: 'Faster. Smarter. Still Beautiful',
    body: "We deploy AI as a creative multiplier — not a shortcut. From generative visual systems to AI-assisted strategy, we move faster without sacrificing quality.",
    bullets: [
      'AI-augmented campaign production at scale',
      'Custom generative visual identity systems',
      'LLM-powered brand voice tools',
      'Rapid prototyping & concept testing',
      'AI workflow integration for in-house teams',
    ],
    result: '3× content output · 50% cost reduction',
  },
  {
    num: '06',
    title: 'Strategy & Growth Consulting',
    tagline: 'The blueprint behind every brand that outperforms its category.',
    headline: 'Good Creative Without Strategy Is Decoration',
    body: "We start every relationship with a rigorous growth audit — then build the plan that makes the work worth doing. Strategy isn't a phase. It's the foundation.",
    bullets: [
      'Brand & business growth audits',
      'Market positioning & category design',
      'Go-to-market strategy & launch planning',
      'Quarterly growth sprints & retainers',
      'Leadership workshops & team enablement',
    ],
    result: '4× ARR growth · 12-month retainer',
  },
]

export default function ServicesAccordion() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-[#f5f3ef] px-5 md:px-[90px] pt-[60px] pb-[120px] flex flex-col gap-[60px] md:gap-[120px]">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <h2 className="font-black text-[36px] md:text-[64px] uppercase text-[#1e1e20] leading-tight max-w-[514px]">
          Six Ways We Drive Growth
        </h2>
        <p className="text-[16px] md:text-[20px] text-black leading-[1.8] lg:text-right max-w-full lg:max-w-[620px]">
          Choose your starting point. Every service connects to the same outcome — your brand growing faster than your competitors&apos;.
        </p>
      </div>

      {/* Accordion */}
      <div className="flex flex-col border-t border-black/20">
        {services.map((service, i) => (
          <div key={service.num} className="border-b border-black">

            {/* Collapsed row */}
            <button
              onClick={() => setActive(i)}
              className="w-full text-left px-0 md:px-[13px] pt-[26px] pb-[30px] flex flex-col gap-[12px] cursor-pointer group"
            >
              <span className="font-black text-[16px] text-[#1e1e20] tracking-[-0.64px]">{service.num}</span>
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col gap-[8px]">
                  <span className={`font-black text-[18px] md:text-[20px] uppercase text-[#1e1e20] leading-tight transition-opacity ${active === i ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                    {service.title}
                  </span>
                  <span className="text-[14px] md:text-[16px] text-[#1e1e20]/60 leading-tight">
                    {service.tagline}
                  </span>
                </div>
                {/* Arrow indicator */}
                <div className={`flex-shrink-0 w-[44px] h-[44px] md:w-[55px] md:h-[55px] rounded-full flex items-center justify-center transition-all duration-300 ${active === i ? 'bg-[#1e1e20] rotate-90' : 'border border-[#1e1e20]/30 group-hover:border-[#1e1e20]'}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active === i ? 'white' : '#1e1e20'} strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </div>
            </button>

            {/* Expanded detail panel */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === i ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[74px] pt-[10px] pb-[40px] lg:pb-[60px]">

                {/* Left: title + vertical divider */}
                <div className="hidden lg:flex flex-col gap-[12px] w-[340px] shrink-0 border-r border-black/10 pr-[40px]">
                  <p className="font-black text-[20px] md:text-[24px] uppercase text-[#1e1e20] leading-tight">
                    {service.title}
                  </p>
                  <p className="text-[16px] md:text-[20px] text-[#1e1e20] leading-normal max-w-[304px]">
                    {service.tagline}
                  </p>
                </div>

                {/* Right: full detail */}
                <div className="flex flex-col gap-[30px] flex-1">
                  <h3 className="font-black text-[28px] sm:text-[40px] md:text-[56px] uppercase text-[#1e1e20] leading-tight">
                    {service.headline}
                  </h3>
                  <p className="text-[16px] md:text-[20px] text-[#1e1e20] leading-normal max-w-[818px]">
                    {service.body}
                  </p>
                  <ul className="list-disc pl-[24px] flex flex-col gap-[4px]">
                    {service.bullets.map((b) => (
                      <li key={b} className="text-[16px] md:text-[20px] text-[#1e1e20] leading-[30px]">{b}</li>
                    ))}
                  </ul>

                  {/* Result bar */}
                  <div className="bg-[#1e1e20] flex items-center justify-center px-[51px] py-[18px] h-[53px]">
                    <p className="font-bold text-[12px] md:text-[14px] text-white whitespace-nowrap">{service.result}</p>
                  </div>

                  {/* Images */}
                  <div className="flex gap-[5px] overflow-x-auto scrollbar-hide">
                    {detailImages.map((src, j) => (
                      <div key={j} className="relative shrink-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-[#d9d9d9] overflow-hidden">
                        <Image src={src} alt="Case study" fill className="object-cover" />
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="btn-cta inline-flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-[24px] py-[12px] text-[16px] font-medium uppercase text-[#1e1e20]"
                  >
                    Ready for this level of growth?
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
