'use client'
import { useState } from 'react'

const BOOKING_URL = 'https://calendly.com/dmg-schoolhouselane/30min'

const SIZES = ['1–10', '11–50', '50–200']

function openCalendly() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Calendly = (window as any).Calendly
  if (Calendly?.initPopupWidget) {
    Calendly.initPopupWidget({ url: BOOKING_URL })
  } else {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer')
  }
}

interface Props {
  className?: string
  children: React.ReactNode
}

export default function CalendlyButton({ className, children }: Props) {
  const [open, setOpen] = useState(false)

  function handleSelect(size: string) {
    setOpen(false)
    openCalendly()
    // size available here for analytics if needed later
    void size
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Panel */}
          <div
            className="relative z-10 bg-white rounded-[24px] p-[40px] md:p-[56px] flex flex-col gap-[32px] w-full max-w-[480px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex flex-col gap-[6px]">
              <h2 className="font-black text-[22px] md:text-[28px] uppercase text-[#1e1e20] leading-tight">
                How big is your team?
              </h2>
              <p className="text-[15px] text-[#7c7c7c] leading-snug">
                Pick the option that fits — we'll tailor the conversation.
              </p>
            </div>

            {/* Size options */}
            <div className="flex flex-col gap-[12px]">
              {SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSelect(size)}
                  className="w-full border border-[#1e1e20] rounded-full px-[24px] py-[14px] text-[16px] font-medium uppercase text-[#1e1e20] text-left hover:bg-[#1e1e20] hover:text-white transition-colors duration-200 whitespace-nowrap"
                >
                  {size} people
                </button>
              ))}
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-[20px] right-[24px] text-[#7c7c7c] hover:text-[#1e1e20] text-[22px] leading-none transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
