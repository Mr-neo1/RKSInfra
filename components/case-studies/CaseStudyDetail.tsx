'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { CaseStudy } from '@/types/content'

interface CaseStudyDetailProps {
  study: CaseStudy
}

export default function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32">
        <Container size="lg">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-security-blue/10 border border-security-blue/20 rounded-full text-cyan-highlight text-sm font-medium">
                {study.industry} • {study.year}
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {study.title}
            </h1>
            <p className="text-xl text-light-gray">
              Client: {study.client}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Content Section */}
      <Section>
        <Container size="lg">
          <div className="prose prose-invert max-w-none">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-medium-gray leading-relaxed">
                  {study.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
                <p className="text-lg text-medium-gray leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 rounded-2xl border border-neutral-700 mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Results</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {study.metrics.map((metric, i) => (
                  <motion.div 
                    key={i} 
                    className="p-4 bg-neutral-800/50 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-sm text-medium-gray mb-1">{metric.label}</div>
                    <div className="text-2xl font-bold text-cyan-highlight">{metric.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {study.technologies.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {study.testimonial && (
              <motion.div 
                className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-2xl p-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <blockquote className="text-xl text-light-gray italic">
                  "{study.testimonial}"
                </blockquote>
                <div className="mt-4 text-medium-gray">
                  — {study.client}
                </div>
              </motion.div>
            )}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient">
        <Container size="lg">
          <motion.div 
            className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to See Similar Results?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Contact us today to discuss how we can help your business
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Started
            </Button>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

