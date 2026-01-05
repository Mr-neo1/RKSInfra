'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Shield, Server, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { Service } from '@/types/content'

interface ServicesOverviewProps {
  services: Service[]
}

const iconMap: Record<string, typeof Mail> = {
  Mail,
  Shield,
  Server,
  Globe,
}

export default function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Infrastructure That Works. Security That Protects.
          </motion.h2>
          <motion.p 
            className="text-xl text-medium-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive IT infrastructure and security services tailored to your business needs.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Shield
            return (
              <motion.div
                key={service.id}
                className="group p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-cyan-highlight/50 hover:bg-gradient-to-br hover:from-security-blue/10 hover:to-cyan-highlight/10 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-highlight/20 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Icon className="w-12 h-12 mb-4 text-cyan-highlight group-hover:text-security-blue transition-colors" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-medium-gray mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-trust-green">Key Benefit:</span>
                  <p className="text-light-gray text-sm mt-1">{service.keyBenefit}</p>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center space-x-2 text-cyan-highlight font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

