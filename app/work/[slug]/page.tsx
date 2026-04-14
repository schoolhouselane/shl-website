import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkCTA from '@/components/work/WorkCTA'
import CaseStudyHero from '@/components/work/CaseStudyHero'
import CaseStudyContent from '@/components/work/CaseStudyContent'
import CaseStudyNav from '@/components/work/CaseStudyNav'
import { getProjectBySlug, getAdjacentProjects, projects } from '@/lib/work-data'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Schoolhouse Lane`,
    description: project.description,
    alternates: { canonical: `https://schoolhouselane.co/work/${slug}` },
    openGraph: {
      title: `${project.title} — Schoolhouse Lane`,
      description: project.description,
      url: `https://schoolhouselane.co/work/${slug}`,
      images: [{ url: project.heroImage }],
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <Header forceDark />
      <CaseStudyHero project={project} />
      <CaseStudyContent project={project} />
      <CaseStudyNav prev={prev} next={next} />
      <WorkCTA />
      <Footer />
    </main>
  )
}
