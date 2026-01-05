'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'
import { NAVIGATION } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-deep-blue-950/95 backdrop-blur-lg shadow-lg border-b border-neutral-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link href="/" className="flex items-center space-x-3 md:space-x-4 group" aria-label="RKS Infra Home">
            <div className="relative flex-shrink-0 transition-all duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-security-blue/40 to-cyan-highlight/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl p-1 border border-neutral-700/40 group-hover:border-cyan-highlight/60 shadow-2xl group-hover:shadow-cyan-highlight/40 transition-all duration-300 bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 backdrop-blur-md">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-transparent">
                  <Image
                    src="/logo.png"
                    alt="RKS Infra Logo"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full drop-shadow-2xl"
                    priority
                    quality={100}
                    unoptimized={false}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-security-blue via-cyan-highlight to-security-blue bg-clip-text text-transparent leading-tight drop-shadow-sm">
                RKS Infra
              </span>
              <span className="text-xs text-medium-gray/90 hidden md:block leading-none mt-0.5 font-medium">
                Infrastructure Security
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.main.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => 'hasDropdown' in item && item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => 'hasDropdown' in item && item.hasDropdown && setIsServicesOpen(false)}
              >
                {'hasDropdown' in item && item.hasDropdown ? (
                  <>
                    <button className={`transition-colors duration-300 ${
                      isActive(item.path) ? 'text-security-blue' : 'text-light-gray hover:text-cyan-highlight'
                    }`}>
                      {item.name}
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl py-2">
                        {NAVIGATION.services.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            className="block px-4 py-2 text-light-gray hover:bg-neutral-800 hover:text-cyan-highlight transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`transition-colors duration-300 ${
                      isActive(item.path) ? 'text-security-blue' : 'text-light-gray hover:text-cyan-highlight'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/contact" variant="primary" size="md">
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
          <div className="px-4 py-4 space-y-3">
            {NAVIGATION.main.map((item) => (
              <div key={item.path}>
                {'hasDropdown' in item && item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="block w-full text-left text-light-gray hover:text-cyan-highlight transition-colors"
                    >
                      {item.name} {isServicesOpen ? '−' : '+'}
                    </button>
                    {isServicesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {NAVIGATION.services.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-medium-gray hover:text-cyan-highlight transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block transition-colors ${
                      isActive(item.path) ? 'text-security-blue' : 'text-light-gray hover:text-cyan-highlight'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button href="/contact" variant="primary" size="md" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

