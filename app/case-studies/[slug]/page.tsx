import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug, caseStudies } from '@/lib/content'
import { SEO_CONFIG } from '@/lib/constants'
import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug || '',
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: study.title,
    description: study.challenge,
    keywords: [study.industry, study.service, 'case study', 'success story'],
    openGraph: {
      title: `${study.title} | RKS Infra`,
      description: study.challenge,
      url: `${SEO_CONFIG.siteUrl}/case-studies/${slug}`,
    },
  }
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    notFound()
  }

  return <CaseStudyDetail study={study} />
}

