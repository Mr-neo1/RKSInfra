'use client'

import { motion } from 'framer-motion'
import { Target, Shield, Clock, Users } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

const benefits = [
  {
    icon: Target,
    title: 'Technical Expertise',
    description: 'Deep infrastructure and security knowledge backed by certifications'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Every solution built with security and compliance at its core'
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'Get secure infrastructure running in days, not months'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 monitoring and expert support when you need it'
  },
]

export default function WhyChooseUs() {
  return (
    <Section>
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Leading Companies Trust RKS Infra
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={i}
                className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-cyan-highlight/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Icon className="w-8 h-8 text-cyan-highlight mb-4" />
                <h3 className="text-xl font-bold mb-3 text-cyan-highlight">{benefit.title}</h3>
                <p className="text-medium-gray">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

