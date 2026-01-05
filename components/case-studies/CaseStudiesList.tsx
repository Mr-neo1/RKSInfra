'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { CaseStudy } from '@/types/content'

interface CaseStudiesListProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesList({ caseStudies }: CaseStudiesListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((study, i) => (
        <motion.div
          key={study.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <Link
            href={`/case-studies/${study.slug}`}
            className="group block p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-cyan-highlight/50 hover:bg-gradient-to-br hover:from-security-blue/10 hover:to-cyan-highlight/10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-highlight/20"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-security-blue/10 border border-security-blue/20 rounded-full text-cyan-highlight text-sm font-medium">
                {study.industry}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-highlight transition-colors">
              {study.title}
            </h3>
            <p className="text-medium-gray mb-4 line-clamp-3">
              {study.challenge}
            </p>
            <div className="flex items-center space-x-2 text-cyan-highlight font-semibold group-hover:translate-x-2 transition-transform">
              <span>Read Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

