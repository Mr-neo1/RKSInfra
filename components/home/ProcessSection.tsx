'use client'

import { motion } from 'framer-motion'
import { Search, FileText, Settings, BarChart } from 'lucide-react'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit & Assessment',
    description: 'We analyze your current infrastructure, identify vulnerabilities, and assess email deliverability issues. Comprehensive evaluation of your systems and requirements.'
  },
  {
    number: '02',
    icon: Settings,
    title: 'Implementation',
    description: 'Engineer-led deployment of security configurations, email infrastructure, and network hardening. Implementation follows best practices for production systems.'
  },
  {
    number: '03',
    icon: FileText,
    title: 'Validation & Testing',
    description: 'We validate every configuration, test email deliverability, verify security controls, and ensure systems operate as intended before handover.'
  },
  {
    number: '04',
    icon: BarChart,
    title: 'Monitor & Maintain',
    description: 'Ongoing monitoring of infrastructure health, email deliverability metrics, and security events. Proactive maintenance to prevent issues.'
  },
]

export default function ProcessSection() {
  return (
    <Section variant="gradient">
      <Container>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            From consultation to ongoing support
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div 
                key={i} 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-security-blue to-cyan-highlight transform translate-x-4"></div>
                )}
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-2xl border border-neutral-700 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-security-blue to-cyan-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-highlight mb-2">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-medium-gray text-sm">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

