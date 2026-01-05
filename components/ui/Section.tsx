import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'dark'
}

export default function Section({ 
  children, 
  className,
  variant = 'default'
}: SectionProps) {
  const variants = {
    default: '',
    gradient: 'bg-gradient-to-br from-slate-900 to-deep-blue-900',
    dark: 'bg-deep-blue-950',
  }
  
  return (
    <section className={cn('py-20 px-4 sm:px-6 lg:px-8', variants[variant], className)}>
      {children}
    </section>
  )
}

