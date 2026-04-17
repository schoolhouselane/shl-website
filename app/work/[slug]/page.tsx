import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
  const heroImage = cs?.heroImage ?? project.heroImage
  const title = cs?.seoTitle ?? `${project.title} — Case Study`
  const description = cs?.seoDescription ?? project.description
  return {
    title,
    description,
    alternates: { canonical: `https://schoolhouselane.co/work/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://schoolhouselane.co/work/${slug}`,
      type: 'article',
      images: [{ url: heroImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [heroImage],
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://schoolhouselane.co',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Work',
        item: 'https://schoolhouselane.co/work',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://schoolhouselane.co/work/${slug}`,
      },
    ],
  }

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `https://schoolhouselane.co/work/${slug}`,
    datePublished: `${project.year}-01-01`,
    author: { '@id': 'https://schoolhouselane.co/#organization' },
    provider: { '@id': 'https://schoolhouselane.co/#organization' },
    about: { '@type': 'Organization', name: project.client },
    keywords: project.tags.join(', '),
  }

  return (
    <main className="bg-[#f5f3ef] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <Header forceDark />
      <CaseStudyHero project={project} caseStudy={caseStudy} />
      <CaseStudyContent project={project} caseStudy={caseStudy} />
      <CaseStudyCTA />
      <CaseStudyRelated currentSlug={slug} />
      <CaseStudyNav prev={prev} next={next} />
      <Footer />
    </main>
  )
}
