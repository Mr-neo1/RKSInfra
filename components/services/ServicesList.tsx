'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Shield, Server, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { Service } from '@/types/content'

interface ServicesListProps {
  services: Service[]
}

const iconMap: Record<string, typeof Mail> = {
  Mail,
  Shield,
  Server,
  Globe,
}

export default function ServicesList({ services }: ServicesListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, i) => {
        const Icon = iconMap[service.icon] || Shield
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group block p-8 rounded-2xl border bg-neutral-900/50 border-neutral-800 hover:border-cyan-highlight/50 hover:bg-gradient-to-br hover:from-security-blue/10 hover:to-cyan-highlight/10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-highlight/20"
            >
              <Icon className="w-12 h-12 mb-4 text-medium-gray group-hover:text-cyan-highlight transition-colors" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-highlight transition-colors">{service.title}</h3>
              <p className="text-medium-gray mb-4">{service.description}</p>
              <div className="mb-4">
                <span className="text-sm font-semibold text-trust-green">Key Benefit:</span>
                <p className="text-light-gray text-sm mt-1">{service.keyBenefit}</p>
              </div>
              <div className="flex items-center space-x-2 text-cyan-highlight font-semibold group-hover:translate-x-2 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}

