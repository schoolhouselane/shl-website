import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JobsHero from '@/components/jobs/JobsHero'
import JobsWhyWorkHere from '@/components/jobs/JobsWhyWorkHere'
import JobsRoles from '@/components/jobs/JobsRoles'
import JobsLifeMosaic from '@/components/jobs/JobsLifeMosaic'
import JobsTestimonials from '@/components/jobs/JobsTestimonials'
import JobsDropNote from '@/components/jobs/JobsDropNote'
import JobsCTA from '@/components/jobs/JobsCTA'
import { jobs, testimonials } from '@/lib/jobs-data'

const BASE_URL = 'https://schoolhouselane.co'

export const metadata: Metadata = {
  title: 'Jobs — Schoolhouse Lane',
  description: 'We\'re always on the search for curious minds who want to build brands that actually make money. Explore open roles at Schoolhouse Lane.',
  alternates: { canonical: `${BASE_URL}/jobs` },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Jobs — Schoolhouse Lane',
    description: 'We\'re always on the search for curious minds who want to build brands that actually make money.',
    url: `${BASE_URL}/jobs`,
    siteName: 'Schoolhouse Lane',
    locale: 'en_IE',
  },
}

export default function JobsPage() {
  return (
    <>
      <Header />
      <main id="open-roles">
        <JobsHero openRolesCount={jobs.length} />
        <JobsWhyWorkHere />
        <JobsRoles jobs={jobs} />
        <JobsLifeMosaic />
        <JobsTestimonials testimonials={testimonials} />
        <JobsDropNote />
        <JobsCTA />
      </main>
      <Footer />
    </>
  )
}
