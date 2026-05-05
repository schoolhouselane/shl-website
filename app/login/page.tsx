import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoginContent from '@/components/login/LoginContent'

export const metadata: Metadata = {
  title: 'Login — Client Portal',
  description: 'Log in to your Schoolhouse Lane client portal.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://schoolhouselane.co/login' },
}

export default function LoginPage() {
  return (
    <main className="bg-[#f5f3ef] flex flex-col min-h-screen">
      <Header forceDark />
      <LoginContent />
      <Footer />
    </main>
  )
}
