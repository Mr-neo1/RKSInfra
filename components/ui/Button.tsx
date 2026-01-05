import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-gradient-to-r from-security-blue to-cyan-highlight text-white hover:shadow-xl hover:shadow-security-blue/50',
    secondary: 'border-2 border-security-blue/30 text-white hover:bg-security-blue/10',
    ghost: 'text-security-blue hover:text-cyan-highlight',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm h-8',
    md: 'px-6 py-3 text-base h-10',
    lg: 'px-8 py-4 text-lg h-12',
  }
  
  const classes = cn(baseStyles, variants[variant], sizes[size], className)
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

