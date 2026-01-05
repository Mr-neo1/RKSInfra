'use client'

import { Mail, Phone, MapPin, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-cyan-highlight/10 border border-cyan-highlight/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-cyan-highlight" />
          </div>
          <div>
            <h3 className="font-bold mb-1 text-light-gray">Email</h3>
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-medium-gray hover:text-cyan-highlight transition-colors">
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-cyan-highlight/10 border border-cyan-highlight/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-cyan-highlight" />
          </div>
          <div>
            <h3 className="font-bold mb-1 text-light-gray">Phone</h3>
            <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="text-medium-gray hover:text-cyan-highlight transition-colors">
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-cyan-highlight/10 border border-cyan-highlight/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-cyan-highlight" />
          </div>
          <div>
            <h3 className="font-bold mb-1 text-light-gray">Location</h3>
            <p className="text-medium-gray">
              {SITE_CONFIG.location}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl border border-neutral-700">
        <h3 className="text-xl font-bold mb-4 text-cyan-highlight">Business Hours</h3>
        <div className="space-y-2 text-medium-gray">
          <p>{SITE_CONFIG.businessHours}</p>
          <p className="text-sm text-light-gray">Response Time: {SITE_CONFIG.responseTime}</p>
        </div>
      </div>

      {/* Free Audit CTA Box */}
      <div className="mt-8 p-8 bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-2xl">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="w-8 h-8 text-trust-green" />
          <h3 className="text-xl font-bold">🎯 Free Email Deliverability Audit</h3>
        </div>
        <p className="text-medium-gray mb-4">
          Get a comprehensive analysis of your current email setup
        </p>
        <Button
          href="#contact-form"
          variant="primary"
          size="md"
        >
          Claim Your Free Audit
        </Button>
      </div>
    </motion.div>
  )
}

