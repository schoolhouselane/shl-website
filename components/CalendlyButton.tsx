'use client'

const BOOKING_URL = 'https://calendly.com/dmg-schoolhouselane/30min'

interface Props {
  className?: string
  children: React.ReactNode
}

export default function CalendlyButton({ className, children }: Props) {
  function handleClick() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Calendly = (window as any).Calendly
    if (Calendly?.initPopupWidget) {
      Calendly.initPopupWidget({ url: BOOKING_URL })
    } else {
      window.open(BOOKING_URL, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  )
}
