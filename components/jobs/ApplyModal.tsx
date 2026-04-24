'use client'
import { useEffect, useRef, useState } from 'react'

interface Props {
  role: string
  onClose: () => void
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

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

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape
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
      e.target.value = ''
      setCvName('')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setCvError('File must be under 5MB.')
      e.target.value = ''
      setCvName('')
      return
    }
    setCvName(file.name)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)
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

  const inputClass = "w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-[12px] text-white text-[15px] font-normal placeholder:text-white/40 transition-colors duration-200"
  const labelClass = "text-[10px] font-extrabold tracking-[1.4px] uppercase text-white/50"

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6"
    >
      <div className="bg-[#1e1e20] w-full md:w-[640px] md:rounded-none max-h-[92dvh] md:max-h-[90vh] overflow-y-auto flex flex-col">

        {/* Header */}
        <div className="flex items-start justify-between px-6 md:px-[40px] pt-[32px] pb-[24px] border-b border-white/10 shrink-0">
          <div>
            <p className="text-[10px] font-extrabold tracking-[1.4px] uppercase text-white/50 mb-[6px]">
              Applying for
            </p>
            <h2 className="font-black text-[22px] md:text-[28px] text-white uppercase leading-tight">
              {role}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors mt-[4px] cursor-pointer"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Success state */}
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center gap-[20px] px-6 md:px-[40px] py-[60px] text-center flex-1">
            <div className="size-[64px] rounded-full border-2 border-white flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div>
              <p className="font-black text-[24px] text-white uppercase mb-[8px]">Application Sent</p>
              <p className="text-white/60 text-[15px] leading-relaxed max-w-[360px]">
                Thanks for applying. We&apos;ll review your application and be in touch.
              </p>
            </div>
            <button
              onClick={onClose}
              className="mt-[8px] border border-white/30 text-white text-[14px] font-medium uppercase tracking-wide px-[24px] py-[10px] rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-[24px] px-6 md:px-[40px] py-[32px]">

            {/* Full Name */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="apply-name" className={labelClass}>Full Name <span className="text-white/30">*</span></label>
              <input id="apply-name" name="name" type="text" required placeholder="Jane Smith" className={inputClass} />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="apply-email" className={labelClass}>Email <span className="text-white/30">*</span></label>
                <input id="apply-email" name="email" type="email" required placeholder="jane@example.com" className={inputClass} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="apply-phone" className={labelClass}>Phone <span className="text-white/30 normal-case tracking-normal text-[9px]">(optional)</span></label>
                <input id="apply-phone" name="phone" type="tel" placeholder="+353 87 000 0000" className={inputClass} />
              </div>
            </div>

            {/* LinkedIn + Portfolio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="apply-linkedin" className={labelClass}>LinkedIn <span className="text-white/30 normal-case tracking-normal text-[9px]">(optional)</span></label>
                <input id="apply-linkedin" name="linkedin" type="url" placeholder="linkedin.com/in/you" className={inputClass} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="apply-portfolio" className={labelClass}>Portfolio URL <span className="text-white/30 normal-case tracking-normal text-[9px]">(optional)</span></label>
                <input id="apply-portfolio" name="portfolio" type="url" placeholder="yourportfolio.com" className={inputClass} />
              </div>
            </div>

            {/* Cover Letter */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="apply-cover" className={labelClass}>Cover Letter <span className="text-white/30">*</span></label>
              <textarea
                id="apply-cover"
                name="cover"
                required
                rows={5}
                placeholder="Tell us why you're the right fit. One focused paragraph — no generic applications."
                className={`${inputClass} resize-none border-b-0 border border-white/20 focus:border-white/60 px-[14px] py-[12px]`}
              />
            </div>

            {/* CV Upload */}
            <div className="flex flex-col gap-[6px]">
              <label className={labelClass}>CV / Resume <span className="text-white/30">*</span></label>
              <input
                ref={fileRef}
                id="apply-cv"
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex items-center justify-between border border-white/20 hover:border-white/60 transition-colors px-[16px] py-[14px] text-left cursor-pointer group"
              >
                <span className={`text-[14px] ${cvName ? 'text-white' : 'text-white/40'} truncate flex-1`}>
                  {cvName || 'Upload PDF or Word — max 5MB'}
                </span>
                <span className="text-white/40 group-hover:text-white transition-colors shrink-0 ml-[12px] text-[12px] font-medium uppercase tracking-wide">
                  Browse
                </span>
              </button>
              {cvError && <p className="text-red-400 text-[12px] mt-[2px]">{cvError}</p>}
            </div>

            {/* Error message */}
            {status === 'error' && (
              <p className="text-red-400 text-[13px] border border-red-400/30 px-[14px] py-[10px]">
                {errorMsg}
              </p>
            )}

            {/* Submit */}
            <div className="flex items-center justify-between pt-[8px] border-t border-white/10">
              <p className="text-white/30 text-[12px]">
                Sent to careers@schoolhouselane.co
              </p>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex items-center gap-[10px] bg-white text-[#1e1e20] font-medium text-[15px] uppercase tracking-wide px-[28px] py-[14px] rounded-full hover:bg-white/90 disabled:opacity-50 transition-all cursor-pointer disabled:cursor-default"
              >
                {status === 'submitting' ? 'Sending…' : 'Submit Application'}
                {status !== 'submitting' && <ArrowRight size={16} />}
              </button>
            </div>

          </form>
        )}
      </div>
    </div>
  )
}
