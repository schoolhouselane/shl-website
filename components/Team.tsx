'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

const team = [
  {
    src: '/images/Darren McGrath.png',
    name: 'Darren McGrath',
    role: 'Partner',
    bio: 'A Cannes Lion-winning creative strategist with 25 years of experience, Darren operates where relentless inquiry meets rigorous strategy. He specialises in transforming brand from a downstream cost into an upstream engine for enterprise value creation. By aligning profit with purpose, he ensures Schoolhouse Lane architects the infrastructure for ambitious companies to capture both market share and hearts.',
  },
  {
    src: '/images/Tea Sebenick.png',
    name: 'Tea Sebenick',
    role: 'Client Services Manager',
    bio: 'Tea is the bridge between imagination and business success. With a loyal and supportive approach, she provides the alignment necessary to navigate complex shifts, ensuring our clients feel the clarity of our upstream strategic nature at every stage of the journey.',
  },
  {
    src: '/images/Ermir.png',
    name: 'Ermir Kryeziu',
    role: 'Designer',
    bio: "Ermir views design as a tool for fulfillment through discovery. He focuses on building the touchpoints that connect a brand's strategy to its checkout, ensuring that the most intangible assets become a measurable advantage for Founders and Investors alike.",
  },
  {
    src: '/images/Marigona Culaj.png',
    name: 'Marigona Culaj',
    role: 'Designer',
    bio: "Marigona believes there is no cure for curiosity. She doesn't just \"decorate\" decisions; she uses design to unearth the latent potential within an organization. By prioritizing the emotional and the real, Marigona creates visual systems that allow brands to live their stories.",
  },
  {
    src: '/images/Hassan Butt.png',
    name: 'Hassan Butt',
    role: 'Software Engineer',
    bio: 'Hassan builds the digital infrastructure that allows our brands to thrive in an era of algorithmic noise. By focusing on the intersection of technology and human-centric insight, he ensures that the checkout is as strategically potent as the brand strategy itself.',
  },
  {
    src: '/images/Erbline Shala.png',
    name: 'Erbeline Shala',
    role: 'Creative Specialist',
    bio: 'Erbeline champions the "human" in our human agency. Her role is to ensure that diversity of thought remains our competitive advantage, infusing every project with the emotional intelligence and generous spirit required to create genuine connections with customers.',
  },
  {
    src: '/images/Keith OLoughlin.png',
    name: "Keith O'Loughlin",
    role: 'Advisor to the Board',
    bio: 'With 25 years of innovation and investment experience, Keith embodies the pioneering spirit of Schoolhouse Lane. As Chairman of Everlough Holdings, he understands that in a world of "good enough," the exceptional is found through relentless inquiry. Keith guides the agency in building ecosystems that accelerate business goals and navigate complex category shifts with agility.',
  },
  {
    src: '/images/Leona Bobi.png',
    name: 'Leona Bobi',
    role: 'Designer',
    bio: 'Leona operates at the heart of Creative Commerce, making brand strategy tangible through innovative design. Her work is fueled by an adventurous spirit, ensuring every aesthetic choice accelerates the business goals of our clients while maintaining a human, altruistic touch.',
  },
  {
    src: '/images/Saqib Sami.png',
    name: 'Saqib Sami',
    role: 'Finance Manager',
    bio: 'Saqib ensures that the conviction of Conscious Capitalism is backed by rigorous financial integrity. In an agency where brand is a high-leverage strategic asset, he manages the fiscal engine that aligns profit with purpose, providing the stability and transparency necessary for our partners to drive outsized returns.',
  },
  {
    src: '/images/Shalale Mammadli.png',
    name: 'Shalale Mammadli',
    role: 'Project Manager',
    bio: 'Shalale manages the ecosystem where strategy meets execution. Driven by an ambitious and pioneering spirit, she ensures that the engine for growth remains on track, transforming high-level enterprise value into tactile, real-world results through disciplined project leadership.',
  },
  {
    src: '/images/Kamran Hussain.png',
    name: 'Kamran Hussain',
    role: 'SEO Specialist',
    bio: "Kamran rejects the \"algorithmic noise\" of standard search tactics to focus on the human inquiry that drives true growth. With 9 years of expertise, he treats SEO as an upstream strategic engine, ensuring that a brand's digital footprint is an architected infrastructure for discovery.",
  },
  {
    src: '/images/Dea Gjoshi.png',
    name: 'Dea Gjoshi',
    role: 'Content & Video Creator',
    bio: "Dea translates the \"No Cure for Curiosity\" philosophy into the era of algorithmic noise by prioritizing the emotional, the ethical, and the real. She doesn't just tell stories; she architects the human-centric content that allows brands to live their organising principles.",
  },
  {
    src: '/images/Andy Hoskins.png',
    name: 'Andy Hoskins',
    role: 'Advisor to the Board',
    bio: 'Andy brings 15 years of CFO, M&A, and investment expertise to the intersection of finance and imagination. He ensures that altruistic brand visions are anchored in fiscal reality, helping clients navigate capital raises and exits by treating brand as a high-leverage strategic asset.',
  },
  {
    src: '/images/Drinela Shala.png',
    name: 'Drinela Shala',
    role: 'Designer',
    bio: 'Drinela combines an inspiring creative vision with the rigour of brand-led value creation. She designs with the conviction that businesses should be a force for good, crafting identities that align people, purpose, and profit to capture long-term loyalty.',
  },
  {
    src: '/images/David Maxwell.png',
    name: 'David Maxwell',
    role: 'Chief Culture Officer',
    bio: "David is the guardian of the 'organising principle' — ensuring that the culture of Conscious Capitalism permeates every touchpoint of the agency. He builds the internal ecosystems that allow creativity and rigorous strategy to coexist, aligning people, purpose, and profit across every client engagement.",
  },
  {
    src: '/images/Jonny Ingle.png',
    name: 'Jonny Ingle',
    role: 'Advisor to the Board',
    bio: 'Jonny leverages 25 years of international DTC experience to bridge the gap between global scale and human-centric insight. A seasoned Global CMO, he helps clients unify internal cultures under a single organising principle, ensuring brand remains a primary lever for growth across every international touchpoint.',
  },
  {
    src: '/images/Edward Jones.png',
    name: 'Edward Jones',
    role: 'AI Agent — Client Services',
    bio: "Edward approaches the intersection of relentless inquiry and rigorous strategy with the precision of a machine and the instincts of a seasoned strategist. As an AI agent embedded in our client services team, he ensures that no detail is missed and no opportunity is left on the table.",
  },
]

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [panelW, setPanelW] = useState(347)

  const updateState = () => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setProgress(scrollLeft / (scrollWidth - clientWidth))
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }

  useEffect(() => {
    const updatePanel = () =>
      setPanelW(window.innerWidth >= 1280 ? 347 : window.innerWidth >= 768 ? 240 : 160)
    updatePanel()
    window.addEventListener('resize', updatePanel, { passive: true })
    return () => window.removeEventListener('resize', updatePanel)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updateState, { passive: true })
    updateState()
    return () => el.removeEventListener('scroll', updateState)
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 420 : -420, behavior: 'smooth' })
  }

  const handleMouseEnter = (i: number) => setActiveIndex(i)
  const handleMouseLeave = () => setActiveIndex(null)
  const handleClick = (i: number) => setActiveIndex(prev => prev === i ? null : i)

  return (
    <section className="bg-[#f5f3ef] pt-[32px] pb-0 md:py-[60px] flex flex-col gap-[40px]">

      {/* Title */}
      <div className="px-4 md:px-6 lg:px-[90px] flex justify-end">
        <div className="flex flex-col items-end gap-[16px]">
          <h2 className="font-black text-[24px] md:text-[32px] lg:text-[64px] leading-[0.9] tracking-[-0.5px] md:tracking-[-0.8px] lg:tracking-[-1.28px] uppercase text-[#1e1e20] text-right">
            People behind everything
          </h2>
          {/* Tablet-only: description + button in header */}
          <p className="hidden md:block lg:hidden text-[16px] leading-[1.37] text-[#1e1e20] max-w-[532px] text-right">
            Senior team of strategists, creatives, and brand architects. We bring deep expertise and genuine curiosity to every brief.
          </p>
          <Link
            href="/contact"
            className="hidden md:inline-flex lg:hidden btn-cta items-center gap-3 border border-[#1e1e20] rounded-full px-[24px] py-[12px] text-[16px] font-medium uppercase"
          >
            See Open Roles
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>

      {/* Scrollable strip */}
      <div className="relative">
        <div ref={scrollRef} className="flex gap-px overflow-x-auto scrollbar-hide">
          {team.map((member, i) => {
            const isActive = activeIndex === i
            return (
              <div
                key={i}
                className="flex shrink-0 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(i)}
              >
                {/* Photo */}
                <div className="relative w-[91.6px] md:w-[160px] lg:w-[200px] h-[347.84px] md:h-[500px] lg:h-[759px] overflow-hidden">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className={`object-cover object-top transition-transform duration-500 ${isActive ? 'scale-105' : 'scale-100'}`}
                    sizes="200px"
                  />
                </div>

                {/* White info panel — slides in on hover/tap */}
                <div
                  className="overflow-hidden bg-white h-[347.84px] md:h-[500px] lg:h-[762px] shrink-0"
                  style={{
                    width: isActive ? panelW : 0,
                    transition: 'width 480ms cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div
                    className="h-full flex flex-col justify-between gap-[16px] md:gap-[20px] lg:gap-[30px] px-[16px] md:px-[24px] lg:px-[40px] py-[20px] md:py-[32px] lg:py-[60px]"
                    style={{ width: panelW }}
                  >
                    <div className="flex flex-col gap-[6px]">
                      <p className="font-black text-[14px] md:text-[16px] lg:text-[24px] text-[#111] leading-tight">
                        {member.name}
                      </p>
                      <p className="text-[11px] md:text-[14px] lg:text-[16px] text-[#111] italic font-light">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-[11px] md:text-[14px] lg:text-[16px] text-[#111] font-normal leading-snug">
                      {member.bio}
                    </p>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Scroll arrows */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-white rounded-full w-[44px] h-[44px] shadow-md transition-opacity duration-200 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <button
          onClick={() => scroll('right')}
          className={`absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-white rounded-full w-[44px] h-[44px] shadow-md transition-opacity duration-200 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="px-4 md:px-6 lg:px-[90px]">
        <div className="w-full h-[2px] bg-[#1e1e20]/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1e1e20] rounded-full transition-all duration-150"
            style={{ width: `${Math.max(6, progress * 100)}%` }}
          />
        </div>
      </div>

      {/* Footer text + CTA — mobile and desktop only */}
      <div className="px-4 lg:px-[90px] flex flex-col gap-[25px] md:hidden lg:flex">
        <p className="text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20] max-w-[532px]">
          Senior team of strategists, creatives, and brand architects. We bring deep expertise and genuine curiosity to every brief.
        </p>
        <Link
          href="/contact"
          className="btn-cta inline-flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-6 py-3 text-[16px] font-medium uppercase transition-colors"
        >
          See Open Roles
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
