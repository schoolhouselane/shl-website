import type { Metadata } from 'next'
import { Suspense } from 'react'
import LoginContent from '@/components/login/LoginContent'

export const metadata: Metadata = {
  title: 'Login — Client Portal',
  description: 'Log in to your Schoolhouse Lane client portal.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://schoolhouselane.co/login' },
}

export default function LoginPage() {
  return (
    <main>
      <Suspense>
        <LoginContent />
      </Suspense>
    </main>
  )
}
