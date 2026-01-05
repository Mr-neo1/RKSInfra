'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FORM_CONFIG } from '@/lib/constants'
import { coreServices } from '@/lib/content'
import Button from '@/components/ui/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  serviceNeeded: z.string().min(1, 'Please select a service'),
  problemDescription: z.string().min(20, 'Problem description must be at least 20 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const submitFormData = new FormData()
      submitFormData.append('access_key', FORM_CONFIG.accessKey)
      submitFormData.append('name', data.name)
      submitFormData.append('company', data.company)
      submitFormData.append('email', data.email)
      submitFormData.append('serviceNeeded', data.serviceNeeded)
      submitFormData.append('subject', `Inquiry: ${data.serviceNeeded}`)
      submitFormData.append('message', data.problemDescription)

      const response = await fetch(FORM_CONFIG.endpoint, {
        method: 'POST',
        body: submitFormData,
      })

      const result = await response.json()

      if (result.success) {
        setSuccess(true)
        reset()
      } else {
        setError(result.message || 'Failed to submit form')
      }
    } catch (err) {
      setError('Failed to submit form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div 
      id="contact-form"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8">Request a Custom Quote</h2>
      <p className="text-medium-gray mb-8">
        All our services are provided with custom quotes tailored to your specific infrastructure needs. Please provide details about your requirements below.
      </p>
      
      {success && (
        <div className="mb-6 p-6 bg-trust-green/10 border border-trust-green/20 rounded-lg">
          <div className="flex items-start space-x-3 mb-4">
            <CheckCircle className="w-6 h-6 text-trust-green flex-shrink-0 mt-1" />
            <div>
              <p className="text-trust-green font-semibold mb-2">Thank you! Your message has been sent successfully.</p>
              <p className="text-light-gray text-sm mb-4">We'll get back to you within 4 hours. In the meantime, you can reach us through:</p>
              <div className="space-y-2 text-sm">
                <div>
                  <strong className="text-white">Email:</strong> <a href="mailto:contact@rksinfra.com" className="text-cyan-highlight hover:underline">contact@rksinfra.com</a>
                </div>
                <div>
                  <strong className="text-white">WhatsApp:</strong> <a href="https://wa.me/917065219519" target="_blank" rel="noopener noreferrer" className="text-cyan-highlight hover:underline">+91 7065219519</a>
                </div>
                <div className="text-medium-gray mt-3">
                  <strong className="text-white">Schedule a call:</strong> Contact us to schedule a Calendly meeting.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-alert-orange/10 border border-alert-orange/20 rounded-lg">
          <p className="text-alert-orange">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-light-gray">
            Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-cyan-highlight transition-colors text-white"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-alert-orange">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2 text-light-gray">
            Company *
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-cyan-highlight transition-colors text-white"
            placeholder="Your Company Name"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-alert-orange">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-light-gray">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-cyan-highlight transition-colors text-white"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-alert-orange">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="serviceNeeded" className="block text-sm font-medium mb-2 text-light-gray">
            Service Needed *
          </label>
          <select
            id="serviceNeeded"
            {...register('serviceNeeded')}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-cyan-highlight transition-colors text-white"
          >
            <option value="">Select a service...</option>
            {coreServices.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.serviceNeeded && (
            <p className="mt-1 text-sm text-alert-orange">{errors.serviceNeeded.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="problemDescription" className="block text-sm font-medium mb-2 text-light-gray">
            Problem Description *
          </label>
          <textarea
            id="problemDescription"
            {...register('problemDescription')}
            rows={8}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-cyan-highlight transition-colors resize-none text-white"
            placeholder="Please describe your infrastructure challenges, requirements, or the problems you're trying to solve..."
          ></textarea>
          {errors.problemDescription && (
            <p className="mt-1 text-sm text-alert-orange">{errors.problemDescription.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={loading}
        >
          {loading ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}

