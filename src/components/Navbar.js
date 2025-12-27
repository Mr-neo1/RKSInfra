import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Network Security & Firewall', path: '/services#network-security' },
    { name: 'Email Deliverability', path: '/services#email-deliverability' },
    { name: 'Email Infrastructure', path: '/services#email-infrastructure' },
    { name: 'DNS & Authentication', path: '/services#dns-authentication' },
    { name: 'Phishing Protection', path: '/services#phishing-protection' },
    { name: 'Server Management', path: '/services#server-management' },
    { name: 'Expert Consulting', path: '/services#consulting' },
  ];

  const navItems = [
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Solutions', path: '/solutions' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-deep-blue/95 backdrop-blur-lg shadow-lg border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-security-blue to-shield-purple rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">
              RKS Infra
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                {item.hasDropdown ? (
                  <>
                    <button className={`transition-colors duration-300 ${
                      isActive(item.path) ? 'text-security-blue' : 'text-light-gray hover:text-cyan-highlight'
                    }`}>
                      {item.name}
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-lg shadow-xl py-2">
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block px-4 py-2 text-light-gray hover:bg-slate-800 hover:text-cyan-highlight transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
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

          <Link
            to="/contact"
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full hover:shadow-lg hover:shadow-security-blue/50 transition-all duration-300 font-semibold"
          >
            Free Email Security Audit
          </Link>

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
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="block w-full text-left text-light-gray hover:text-cyan-highlight transition-colors"
                    >
                      {item.name} {isServicesOpen ? '−' : '+'}
                    </button>
                    {isServicesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
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
                    to={item.path}
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
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full px-6 py-2 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full text-center font-semibold"
            >
              Free Email Security Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
