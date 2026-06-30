'use client'

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 p-10">
      <p className="text-[#b04040] font-mono text-sm bg-[#fef2f2] border border-[#fca5a5] rounded-lg px-4 py-3 max-w-xl text-center">
        {error.message || 'Unknown error'}
      </p>
      <button
        onClick={reset}
        className="border border-[#1e1e20] px-6 py-2.5 rounded-full text-sm uppercase tracking-wide font-medium hover:bg-[#f0efed]"
      >
        Try again
      </button>
    </div>
  )
}
