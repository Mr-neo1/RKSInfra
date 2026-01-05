'use client'

import Link from 'next/link'
import { ChevronRight, CheckCircle, Mail, Shield, Monitor } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

interface HeroSectionProps {
  hero: {
    badge: string
    title: string
    subtitle: string
    stats: string[]
  }
}

export default function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-security-blue/10 to-transparent"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>
      
      <Container>
        <div className="grid md:grid-cols-[55%_45%] gap-12 items-center relative">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-security-blue/10 border border-security-blue/20 rounded-full text-cyan-highlight text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {hero.badge}
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {hero.title}
            </h1>
            
            <p className="text-xl text-light-gray leading-relaxed">
              {hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                <span>Request Infrastructure Assessment</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to an Engineer
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              {hero.stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center space-x-2 text-trust-green"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-light-gray">{stat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-3xl blur-3xl opacity-20 animate-pulse-subtle"></div>
            <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 rounded-3xl border border-neutral-700">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700">
                  <Mail className="w-8 h-8 text-cyan-highlight" />
                  <div className="flex-1">
                    <div className="h-2 bg-neutral-700 rounded-full mb-2"></div>
                    <div className="h-2 bg-neutral-700 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700">
                  <Shield className="w-8 h-8 text-security-blue" />
                  <div className="flex-1">
                    <div className="h-2 bg-neutral-700 rounded-full mb-2"></div>
                    <div className="h-2 bg-neutral-700 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700">
                  <Monitor className="w-8 h-8 text-trust-green" />
                  <div className="flex-1">
                    <div className="h-2 bg-neutral-700 rounded-full mb-2"></div>
                    <div className="h-2 bg-neutral-700 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

