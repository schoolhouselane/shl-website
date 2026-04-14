'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

const team = [
  {
    src: '/images/team-andy-hoskins.jpg',
    name: 'Andy Hoskins',
    role: 'Advisor to the Board',
    bio: 'Andy brings 15 years of CFO, M&A, and investment expertise to the intersection of finance and imagination. In the pursuit of Conscious Capitalism, he ensures that altruistic brand visions are anchored in fiscal reality. Andy views diversity of thought as a competitive advantage, helping clients navigate capital raises and exits by treating brand as a high-leverage strategic asset.',
  },
  {
    src: '/images/team-drinela-shala.jpg',
    name: 'Drinela Shala',
    role: 'Designer',
    bio: 'Drinela combines an inspiring creative vision with the rigour of brand-led value creation. She designs with the conviction that businesses should be a force for good, crafting identities that align people, purpose, and profit to capture long-term loyalty.',
  },
  {
    src: '/images/team-ermir-kryeziu.jpg',
    name: 'Ermir Kryeziu',
    role: 'Designer',
    bio: 'Ermir views design as a tool for fulfillment through discovery. He focuses on building the touchpoints that connect a brand\'s strategy to its checkout, ensuring that the most intangible assets become a measurable advantage for Founders and Investors alike.',
  },
  {
    src: '/images/team-marigona-culaj.jpg',
    name: 'Marigona Culaj',
    role: 'Designer',
    bio: 'Marigona believes there is no cure for curiosity. She doesn\'t just "decorate" decisions; she uses design to unearth the latent potential within an organization. By prioritizing the emotional and the real, Marigona creates visual systems that allow brands to live their stories.',
  },
  {
    src: '/images/team-saqib-sami.jpg',
    name: 'Saqib Sami',
    role: 'Finance Manager',
    bio: 'Saqib ensures that the conviction of Conscious Capitalism is backed by rigorous financial integrity. In an agency where brand is a high-leverage strategic asset, he manages the fiscal engine that aligns profit with purpose, providing the stability and transparency necessary for our partners to drive outsized returns.',
  },
  {
    src: '/images/team-tea-sebenick.jpg',
    name: 'Tea Sebenick',
    role: 'Client Services Manager',
    bio: 'Tea is the bridge between imagination and business success. With a loyal and supportive approach, she provides the alignment necessary to navigate complex shifts, ensuring our clients feel the clarity of our upstream strategic nature at every stage of the journey.',
  },
  {
    src: '/images/team-darren-mcgrath.jpg',
    name: 'Darren McGrath',
    role: 'Partner',
    bio: 'A Cannes Lion-winning creative strategist with 25 years of experience, Darren operates where relentless inquiry meets rigorous strategy. He specialises in transforming brand from a downstream cost into an upstream engine for enterprise value creation. By aligning profit with purpose, he ensures Schoolhouse Lane architects the infrastructure for ambitious companies to capture both market share and hearts.',
  },
  {
    src: '/images/team-erbeline-shala.jpg',
    name: 'Erbeline Shala',
    role: 'Creative Specialist',
    bio: 'Erbeline champions the "human" in our human agency. Her role is to ensure that diversity of thought remains our competitive advantage, infusing every project with the emotional intelligence and generous spirit required to create genuine connections with customers.',
  },
  {
    src: '/images/team-keith-oloughlin.jpg',
    name: "Keith O'Loughlin",
    role: 'Advisor to the Board',
    bio: 'With 25 years of innovation and investment experience, Keith embodies the pioneering spirit of Schoolhouse Lane. As Chairman of Everlough Holdings, he understands that in a world of "good enough," the exceptional is found through relentless inquiry. Keith guides the agency in building ecosystems that accelerate business goals and navigate complex category shifts with agility.',
  },
  {
    src: '/images/team-leona-bobi.jpg',
    name: 'Leona Bobi',
    role: 'Designer',
    bio: 'Leona operates at the heart of Creative Commerce, making brand strategy tangible through innovative design. Her work is fueled by an adventurous spirit, ensuring every aesthetic choice accelerates the business goals of our clients while maintaining a human, altruistic touch.',
  },
  {
    src: '/images/team-hassan-butt.jpg',
    name: 'Hassan Butt',
    role: 'Software Engineer',
    bio: 'Hassan builds the digital infrastructure that allows our brands to thrive in an era of algorithmic noise. By focusing on the intersection of technology and human-centric insight, he ensures that the checkout is as strategically potent as the brand strategy itself.',
  },
  {
    src: '/images/team-shalale-mammadli.jpg',
    name: 'Shalale Mammadli',
    role: 'Project Manager',
    bio: 'Shalale manages the ecosystem where strategy meets execution. Driven by an ambitious and pioneering spirit, she ensures that the engine for growth remains on track, transforming high-level enterprise value into tactile, real-world results through disciplined project leadership.',
  },
  {
    src: '/images/team-johnny-ingle.jpg',
    name: 'Johnny Ingle',
    role: 'Advisor to the Board',
    bio: 'Johnny leverages 25 years of international DTC experience to bridge the gap between global scale and human-centric insight. A seasoned Global CMO, he helps clients unify internal cultures under a single organising principle, ensuring brand remains a primary lever for growth across every international touchpoint.',
  },
  {
    src: '/images/team-dea-gjoshi.jpg',
    name: 'Dea Gjoshi',
    role: 'Content & Video Creator',
    bio: 'Dea translates the No Cure for Curiosity philosophy into the era of algorithmic noise by prioritizing the emotional, the ethical, and the real. Through cinematic discovery and creative innovation, she builds the Creative Commerce touchpoints that capture hearts and minds, transforming abstract strategy into pioneering media.',
  },
]

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateState = () => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setProgress(scrollLeft / (scrollWidth - clientWidth))
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }

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

  return (
    <section className="bg-[#f5f3ef] py-[60px] flex flex-col gap-[40px]">

      {/* Title */}
      <div className="px-5 md:px-[90px] flex justify-end">
        <h2 className="font-black text-[36px] md:text-[64px] leading-[0.9] tracking-[-1px] md:tracking-[-1.28px] uppercase text-[#1e1e20] text-right">
          People behind everything
        </h2>
      </div>

      {/* Scrollable strip */}
      <div className="relative">
        <div ref={scrollRef} className="flex gap-px overflow-x-auto scrollbar-hide">
          {team.map((member, i) => (
            <div key={i} className="group flex shrink-0">

              {/* Photo */}
              <div className="relative w-[140px] md:w-[200px] h-[300px] md:h-[759px] overflow-hidden">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="200px"
                />
              </div>

              {/* White info card — expands on hover */}
              <div className="overflow-hidden transition-all duration-500 ease-in-out w-0 group-hover:w-[200px] md:group-hover:w-[347px] h-[300px] md:h-[762px] bg-white">
                <div className="w-[200px] md:w-[347px] h-full flex flex-col justify-between px-[20px] md:px-[40px] py-[24px] md:py-[60px]">
                  <div className="flex flex-col gap-[6px]">
                    <p className="font-black text-[18px] md:text-[24px] text-[#111] leading-tight">
                      {member.name}
                    </p>
                    <p className="text-[13px] md:text-[16px] text-[#111] italic font-light">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-[13px] md:text-[16px] text-[#111] font-semibold italic leading-snug">
                    {member.bio}
                  </p>
                </div>
              </div>

            </div>
          ))}
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
      <div className="px-5 md:px-[90px]">
        <div className="w-full h-[2px] bg-[#1e1e20]/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1e1e20] rounded-full transition-all duration-150"
            style={{ width: `${Math.max(6, progress * 100)}%` }}
          />
        </div>
      </div>

      {/* Footer text + CTA */}
      <div className="px-5 md:px-[90px] flex flex-col gap-[25px]">
        <p className="text-[16px] md:text-[20px] leading-[1.37] text-[#1e1e20] max-w-[532px]">
          A small, senior team of strategists, creatives, and brand architects. We bring deep expertise and genuine curiosity to every brief.
        </p>
        <Link
          href="/jobs"
          className="btn-cta inline-flex items-center gap-3 w-fit border border-[#1e1e20] rounded-full px-6 py-3 text-[16px] font-medium uppercase transition-colors"
        >
          See Open Roles
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  )
}
