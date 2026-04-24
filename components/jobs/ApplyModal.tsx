'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  role: string
  onClose: () => void
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function ApplyModal({ role, onClose }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [cvName, setCvName] = useState('')
  const [cvError, setCvError] = useState('')
  const overlayRef = useRef<HTMLDivElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose()
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    setCvError('')
    if (!file) { setCvName(''); return }
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(file.type)) {
      setCvError('Please upload a PDF or Word document.')
      e.target.value = ''; setCvName(''); return
    }
    if (file.size > 5 * 1024 * 1024) {
      setCvError('File must be under 5MB.')
      e.target.value = ''; setCvName(''); return
    }
    setCvName(file.name)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    const data = new FormData(e.currentTarget)
    data.set('role', role)
    try {
      const res = await fetch('/api/apply', { method: 'POST', body: data })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error ?? 'Something went wrong.')
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  const inputClass = "w-full h-[44px] border border-black/10 rounded-[8px] px-[12px] text-[15px] font-medium bg-white outline-none focus:border-[#1e1e20] transition-colors placeholder:text-[#c4c4c4] text-[#1e1e20]"
  const labelClass = "text-[11px] font-extrabold tracking-[1.2px] uppercase text-[#1e1e20]/50"

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" onClick={onClose} />

      {/* Glass outer wrapper — matches newsletter popup exactly */}
      <div className="relative z-10 rounded-[30px] border border-[#1e1e20] bg-white/20 p-[12px] w-full max-w-[600px] max-h-[92dvh] flex flex-col">

        {/* Floating close button */}
        <button
          onClick={onClose}
          className="absolute -top-[18px] -right-[18px] w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm cursor-pointer z-10"
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Inner card */}
        <div className="bg-[#f5f3ef] rounded-[24px] overflow-y-auto shadow-[0px_34px_69px_0px_rgba(0,0,0,0.19)] flex flex-col">

          {/* Success state */}
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center gap-[20px] px-[40px] py-[60px] text-center">
              <div className="size-[64px] rounded-full border-2 border-[#1e1e20] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e1e20" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="font-black text-[24px] text-[#1e1e20] uppercase tracking-[-0.48px] mb-[8px]">Application Sent</p>
                <p className="text-[16px] font-medium text-[#353535] leading-normal max-w-[320px]">
                  Thanks for applying. We&apos;ll review your application and be in touch.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-[4px] flex items-center justify-center gap-[12px] bg-[#1e1e20] text-white rounded-[50px] px-[24px] py-[12px] text-[16px] font-bold uppercase hover:opacity-80 transition-opacity cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] p-[32px] md:p-[40px]">

              {/* Heading */}
              <div className="flex flex-col gap-[6px]">
                <p className="text-[11px] font-extrabold tracking-[1.2px] uppercase text-[#1e1e20]/50">
                  Applying for
                </p>
                <h2 className="font-black text-[22px] md:text-[28px] uppercase text-[#1e1e20] leading-tight tracking-[-0.48px]">
                  {role}
                </h2>
              </div>

              {/* Full Name */}
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="ap-name" className={labelClass}>
                  Full Name <span className="text-[#1e1e20]/30">*</span>
                </label>
                <input id="ap-name" name="name" type="text" required placeholder="Jane Smith" className={inputClass} />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="ap-email" className={labelClass}>
                    Email <span className="text-[#1e1e20]/30">*</span>
                  </label>
                  <input id="ap-email" name="email" type="email" required placeholder="jane@example.com" className={inputClass} />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="ap-phone" className={labelClass}>
                    Phone <span className="text-[#1e1e20]/25 normal-case tracking-normal text-[10px]">(optional)</span>
                  </label>
                  <input id="ap-phone" name="phone" type="tel" placeholder="+353 87 000 0000" className={inputClass} />
                </div>
              </div>

              {/* LinkedIn + Portfolio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="ap-linkedin" className={labelClass}>
                    LinkedIn <span className="text-[#1e1e20]/25 normal-case tracking-normal text-[10px]">(optional)</span>
                  </label>
                  <input id="ap-linkedin" name="linkedin" type="url" placeholder="linkedin.com/in/you" className={inputClass} />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label htmlFor="ap-portfolio" className={labelClass}>
                    Portfolio URL <span className="text-[#1e1e20]/25 normal-case tracking-normal text-[10px]">(optional)</span>
                  </label>
                  <input id="ap-portfolio" name="portfolio" type="url" placeholder="yourportfolio.com" className={inputClass} />
                </div>
              </div>

              {/* Cover Letter */}
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="ap-cover" className={labelClass}>
                  Cover Letter <span className="text-[#1e1e20]/30">*</span>
                </label>
                <textarea
                  id="ap-cover"
                  name="cover"
                  required
                  rows={4}
                  placeholder="Tell us why you're the right fit. One focused paragraph — no generic applications."
                  className="w-full border border-black/10 rounded-[8px] px-[12px] py-[10px] text-[15px] font-medium bg-white outline-none focus:border-[#1e1e20] transition-colors placeholder:text-[#c4c4c4] text-[#1e1e20] resize-none"
                />
              </div>

              {/* CV Upload */}
              <div className="flex flex-col gap-[6px]">
                <label className={labelClass}>
                  CV / Resume <span className="text-[#1e1e20]/30">*</span>
                </label>
                <input ref={fileRef} id="ap-cv" name="cv" type="file" accept=".pdf,.doc,.docx" required onChange={handleFileChange} className="hidden" />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="flex items-center justify-between w-full h-[44px] border border-black/10 rounded-[8px] px-[12px] bg-white hover:border-[#1e1e20] transition-colors cursor-pointer group"
                >
                  <span className={`text-[15px] font-medium truncate ${cvName ? 'text-[#1e1e20]' : 'text-[#c4c4c4]'}`}>
                    {cvName || 'Upload PDF or Word — max 5MB'}
                  </span>
                  <span className="text-[11px] font-extrabold tracking-[1.2px] uppercase text-[#1e1e20]/40 group-hover:text-[#1e1e20] transition-colors shrink-0 ml-[12px]">
                    Browse
                  </span>
                </button>
                {cvError && <p className="text-red-500 text-[12px]">{cvError}</p>}
              </div>

              {/* Error */}
              {status === 'error' && (
                <p className="text-red-500 text-[13px] bg-red-50 border border-red-200 rounded-[8px] px-[12px] py-[10px]">
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex items-center justify-center gap-[12px] bg-[#1e1e20] text-white rounded-[50px] px-[24px] py-[14px] text-[16px] font-bold uppercase hover:opacity-80 disabled:opacity-50 transition-opacity cursor-pointer disabled:cursor-default"
              >
                {status === 'submitting' ? 'Sending…' : 'Submit Application'}
                {status !== 'submitting' && <ArrowRight size={18} />}
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  )
}
