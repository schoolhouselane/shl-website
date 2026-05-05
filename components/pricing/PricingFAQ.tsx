'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How are projects scoped and priced?',
    a: 'Every project starts with a free 15-minute strategy call. From there, we put together a detailed written scope — deliverables, timeline, and a fixed price. Nothing starts until the scope is agreed in writing. No surprises, ever.',
  },
  {
    q: 'Do you work on a fixed price or day rate?',
    a: 'We work on fixed-project pricing or monthly retainers depending on the package. There are no day rates, no surprise invoices. What you agree is what you pay.',
  },
  {
    q: 'What happens if the scope changes mid-project?',
    a: "If the scope changes, we agree the additional work and cost in writing before we proceed. We never invoice for work that wasn't discussed and agreed.",
  },
  {
    q: "What's your payment structure?",
    a: 'For project-based work, we typically work on a 50% deposit upfront and 50% on delivery. For monthly retainers, invoicing is at the start of each cycle.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Brand Essentials typically takes 4–6 weeks. Full Brand Systems run 8–12 weeks. Monthly creative retainers are ongoing. Timelines are confirmed in your written scope before we start.',
  },
  {
    q: 'Can I start with a small project and scale up?',
    a: "Absolutely. Many of our longest relationships started with Brand Essentials and grew into ongoing monthly partnerships. We're built to grow with you.",
  },
  {
    q: 'Do you work with startups or only established brands?',
    a: "We work with both. Our pricing tiers are specifically designed to serve businesses at every stage — from pre-revenue startups to enterprise marketing teams.",
  },
  {
    q: 'What makes Schoolhouse Lane different from other agencies?',
    a: "We exist at the intersection of creativity and commercial results. Every decision we make is anchored in brand strategy, business objectives, and measurable outcomes — not just aesthetics. We're a human agency powered by proprietary AI.",
  },
]

function PlusIcon({ open }: { open: boolean }) {
  return (
    <div className="flex items-center justify-center shrink-0 w-[44px] h-[44px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] rounded-full border border-[#1e1e20] transition-colors duration-200" style={open ? { background: '#1e1e20', borderColor: '#1e1e20' } : {}}>
      <svg
        width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke={open ? 'white' : '#1e1e20'} strokeWidth="2"
        className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </div>
  )
}

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#f5f3ef] px-4 md:px-6 lg:px-[90px] py-[60px] md:py-[80px] lg:py-[120px]">
      {/* Header */}
      <div className="flex flex-col gap-[16px] md:gap-[20px] lg:gap-[25px] mb-[40px] md:mb-[60px] lg:mb-[80px]">
        <h2 className="font-black text-[22px] md:text-[36px] lg:text-[64px] uppercase text-[#1e1e20] leading-tight whitespace-nowrap">
          Frequently Asked Questions
        </h2>
        <p className="text-[14px] md:text-[16px] lg:text-[20px] text-black max-w-[700px] leading-relaxed">
          Everything you need to know before you book a call.{' '}
          If your question isn&apos;t here, email{' '}
          <a href="mailto:hello@schoolhouselane.com" className="underline">hello@schoolhouselane.com</a>{' '}
          and we&apos;ll reply within 24 hours.
        </p>
      </div>

      {/* Accordion */}
      <div className="flex flex-col">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-black">
            <button
              className="w-full flex items-start md:items-center justify-between gap-[16px] py-[22px] md:py-[26px] px-[8px] md:px-[13px] text-left"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <div className="flex flex-col gap-[12px] flex-1">
                <p className="font-black text-[15px] md:text-[18px] lg:text-[20px] uppercase text-[#1e1e20]">
                  {faq.q}
                </p>
                <div
                  className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="font-normal text-[13px] md:text-[16px] lg:text-[20px] text-[#1e1e20] leading-relaxed pr-[20px]">
                    {faq.a}
                  </p>
                </div>
              </div>
              <PlusIcon open={open === i} />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
