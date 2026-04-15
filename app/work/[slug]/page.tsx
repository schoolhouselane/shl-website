import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkCTA from '@/components/work/WorkCTA'
import CaseStudyHero from '@/components/work/CaseStudyHero'
import CaseStudyContent from '@/components/work/CaseStudyContent'
import CaseStudyCTA from '@/components/work/CaseStudyCTA'
import CaseStudyRelated from '@/components/work/CaseStudyRelated'
import CaseStudyNav from '@/components/work/CaseStudyNav'
import { getProjectBySlug, getAdjacentProjects, projects } from '@/lib/work-data'
import { getCaseStudyData } from '@/data/case-studies'

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
  const cs = getCaseStudyData(slug)
  return {
    title: cs?.seoTitle ?? `${project.title} — Schoolhouse Lane`,
    description: cs?.seoDescription ?? project.description,
    alternates: { canonical: `https://schoolhouselane.co/work/${slug}` },
    openGraph: {
      title: cs?.seoTitle ?? `${project.title} — Schoolhouse Lane`,
      description: cs?.seoDescription ?? project.description,
      url: `https://schoolhouselane.co/work/${slug}`,
      images: [{ url: cs?.heroImage ?? project.heroImage }],
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

  const caseStudy = getCaseStudyData(slug)
  const { prev, next } = getAdjacentProjects(slug)

  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <Header forceDark />
      <CaseStudyHero project={project} caseStudy={caseStudy} />
      <CaseStudyContent project={project} caseStudy={caseStudy} />
      {caseStudy && <CaseStudyCTA accentColor={caseStudy.accentColor} />}
      {caseStudy && <CaseStudyRelated caseStudy={caseStudy} />}
      <CaseStudyNav prev={prev} next={next} />
      <WorkCTA />
      <Footer />
    </main>
  )
}
