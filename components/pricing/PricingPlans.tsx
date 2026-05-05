'use client'
import CalendlyButton from '@/components/CalendlyButton'

const plans = [
  {
    tier: 'Beginner',
    name: 'Brand Essentials',
    desc: 'Startups and founders needing a professional, high-impact foundation fast.',
    price: '$3,500',
    priceSuffix: '/ project',
    color: '#98bfa0',
    bgStyle: 'linear-gradient(to right, #79a482, #9bc2a3)',
    features: [
      'Brand Strategy & Positioning Workshop',
      'Core Visual Identity (Logo, Typography, Color Palette)',
      'Basic Brand Guidelines',
      'Social media kit & templates',
      'Pitch deck template (10 slides)',
      'Custom AI Prompt Library (To help you create on-brand content)',
    ],
  },
  {
    tier: 'Growth',
    name: 'SME Monthly AI Creative Kit',
    desc: 'Small to medium teams needing consistent, high-quality monthly assets without agency overhead.',
    price: null,
    priceSuffix: null,
    color: '#804d14',
    bgStyle: 'linear-gradient(to right, #361f06, #804d14)',
    features: [
      'Dedicated Creative Strategist',
      'Ongoing design requests, queued and managed',
      'Blog & Newsletter Visuals',
      'Social content and paid ad creative',
      'Video and motion content production',
      'Slack integration with your team',
      'One dedicated project manager throughout',
    ],
  },
  {
    tier: 'Creative as a Service',
    name: 'Corporate Monthly AI Creative Bundle',
    desc: 'For marketing teams running multiple brands or channels who need consistent output without the constant back-and-forth.',
    price: null,
    priceSuffix: null,
    color: '#f67537',
    bgStyle: 'linear-gradient(to right, #f67639, #ffb38e)',
    features: [
      'Everything in the SME Kit, plus:',
      'Multi-brand creative production and management',
      'Full campaign creative from brief to delivery',
      'Jira, Asana and Monday.com integration',
      'SOC-2 compliant workflow and file handling',
      'Senior creative director on the account',
    ],
  },
  {
    tier: 'Startup',
    name: 'Full Brand System',
    desc: 'Growing startups ready to scale with a complete brand identity and digital presence that means business.',
    price: null,
    priceSuffix: null,
    color: '#f64343',
    bgStyle: 'linear-gradient(to right, #f64343, #ff8785)',
    features: [
      'Everything in Brand Essentials, plus:',
      'Full Brand Guidelines (print and digital)',
      'Website design up to five pages',
      'Social media template kit — twelve assets',
      'Presentation deck template',
      'Brand strategy and positioning session',
      'Three rounds of revisions',
    ],
  },
  {
    tier: 'Enterprise',
    name: 'Enterprise AI Creative Suite',
    desc: 'When you need SHL sitting inside your organisation, not on the other end of an email chain. Built for teams with serious creative volume.',
    price: null,
    priceSuffix: null,
    color: '#7aa6b4',
    bgStyle: 'linear-gradient(to right, #374b51, #7aa6b4)',
    features: [
      'Custom Enterprise AI Model Training',
      'Dedicated Schoolhouse Lane team embedded in your workflow',
      'Custom AI tooling built around your process',
      'Enterprise security and data compliance',
      'Priority turnaround, typically 24 to 48 hours',
      'Quarterly strategy and planning sessions',
    ],
  },
]

/* Same dark gradient as .btn-cta in globals.css */
const DARK_GRADIENT = 'linear-gradient(117.9deg, #787575 31.09%, #1e1e20 78.76%)'

function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function PricingPlans() {
  return (
    <section id="pricing-plans" className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px]">
      {/* Header */}
      <div className="flex flex-col gap-[12px] md:flex-row md:items-end md:justify-between mb-[40px] md:mb-[60px] lg:mb-[80px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-black text-[28px] md:text-[44px] lg:text-[64px] uppercase text-[#1e1e20] leading-[0.9] tracking-tight">
            Simple pricing.<br />Serious results.
          </h2>
          <p className="text-[14px] md:text-[16px] lg:text-[20px] text-[#1e1e20] max-w-[480px] lg:max-w-[640px]">
            From foundational brand strategy to day-to-day creative execution, we&apos;re built to serve businesses at every stage of growth.
          </p>
        </div>
        <CalendlyButton className="btn-cta shrink-0 inline-flex items-center gap-3 border border-[#1e1e20] rounded-full px-[24px] py-[12px] text-[16px] font-medium uppercase">
          Book a demo
          <ArrowRight />
        </CalendlyButton>
      </div>

      {/* Plans */}
      <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[53px]">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white border border-[#1e1e20] rounded-[20px] md:rounded-[24px] lg:rounded-[30px] overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-[32px] md:gap-[40px] p-[24px] md:p-[36px] lg:p-[46px]">
              {/* Left: plan info */}
              <div className="flex flex-col justify-between gap-[24px] lg:gap-0 lg:h-[410px] lg:w-[813px] shrink-0">
                {/* Tier badge */}
                <div className="self-start border border-black/16 rounded-full px-[12px] py-[8px]">
                  <span className="font-medium text-[14px] md:text-[16px] lg:text-[20px] capitalize" style={{ color: plan.color }}>
                    {plan.tier}
                  </span>
                </div>

                {/* Name + desc */}
                <div className="flex flex-col gap-[12px] md:gap-[18px]">
                  <h3 className="font-black text-[22px] md:text-[30px] lg:text-[40px] uppercase leading-tight" style={{ color: plan.color }}>
                    {plan.name}
                  </h3>
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#1e1e20] max-w-[400px]">
                    {plan.desc}
                  </p>
                </div>

                {/* Price */}
                {plan.price && (
                  <p className="font-bold text-[28px] md:text-[36px] lg:text-[40px] uppercase text-[#1e1e20]">
                    {plan.price}
                    <span className="font-light text-[18px] md:text-[22px] lg:text-[28px] normal-case"> {plan.priceSuffix}</span>
                  </p>
                )}

                {/* CTA — sliding dark overlay matching .btn-cta easing */}
                <CalendlyButton
                  className="group relative overflow-hidden self-start flex items-center gap-3 rounded-full px-[24px] py-[14px] md:py-[16px] lg:py-[18px] text-white text-[16px] md:text-[18px] lg:text-[24px] font-medium uppercase w-full md:w-[340px] lg:w-[408px] justify-center"
                  style={{ background: plan.bgStyle }}
                >
                  {/* Dark slide overlay */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-0 rounded-full"
                    style={{
                      background: DARK_GRADIENT,
                      transition: 'transform 0.45s cubic-bezier(0.76, 0, 0.24, 1)',
                    }}
                  />
                  {/* Content stays above overlay */}
                  <span className="relative z-10 flex items-center gap-3">
                    Book a demo
                    <span style={{ transition: 'transform 0.3s ease' }} className="group-hover:translate-x-1 inline-flex">
                      <ArrowRight />
                    </span>
                  </span>
                </CalendlyButton>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px self-stretch bg-black/10" />
              <div className="block lg:hidden h-px w-full bg-black/10" />

              {/* Right: features */}
              <div className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[18px]">
                <p className="font-bold text-[16px] md:text-[18px] lg:text-[24px]" style={{ color: plan.color }}>
                  What&apos;s Included:
                </p>
                <ul className="flex flex-col">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-[12px] md:gap-[18px] py-[4px]">
                      <span className="font-medium text-[24px] md:text-[32px] lg:text-[40px] leading-none mt-[-4px]" style={{ color: plan.color }} aria-hidden="true">
                        *
                      </span>
                      <span className="text-[13px] md:text-[14px] lg:text-[16px] text-[#1e1e20] pt-[2px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
