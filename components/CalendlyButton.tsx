'use client'

const BOOKING_URL = 'https://calendar.app.google/C4qDMvtDwRQqiCcx7'

interface Props {
  className?: string
  children: React.ReactNode
}

export default function CalendlyButton({ className, children }: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.open(BOOKING_URL, '_blank', 'noopener,noreferrer')}
    >
      {children}
    </button>
  )
}
