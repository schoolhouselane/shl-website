'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push('/admin/blog')
    } else {
      setError('Wrong password.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f3ef] flex items-center justify-center px-4">
      <div className="bg-white border border-[#e8e4df] rounded-2xl p-10 w-full max-w-sm flex flex-col gap-6">
        <div>
          <p className="font-black text-2xl uppercase text-[#1e1e20] tracking-tight">SHL Admin</p>
          <p className="text-sm text-[#999] mt-1">Enter password to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
            className="border border-[#d9d9d9] rounded-lg px-4 py-3 text-[#1e1e20] focus:outline-none focus:border-[#1e1e20]"
          />
          {error && <p className="text-sm text-[#b04040]">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#1e1e20] text-white rounded-full py-3 font-medium uppercase tracking-wide text-sm hover:bg-[#333] transition-colors disabled:opacity-50"
          >
            {loading ? 'Checking…' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  )
}
