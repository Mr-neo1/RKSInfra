'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

interface TrustIndicator {
  number: string
  label: string
}

interface TrustIndicatorsProps {
  indicators: TrustIndicator[]
}

export default function TrustIndicators({ indicators }: TrustIndicatorsProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-900/50 border-y border-neutral-800">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {indicators.map((indicator, i) => (
            <motion.div 
              key={i} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent mb-2">
                {indicator.number}
              </div>
              <div className="text-medium-gray">{indicator.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

