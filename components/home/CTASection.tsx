'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

interface CTASectionProps {
  title: string
  description: string
}

export default function CTASection({ title, description }: CTASectionProps) {
  return (
    <Section>
      <Container>
        <motion.div 
          className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-light-gray mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              <span>Request Infrastructure Assessment</span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to an Engineer
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

