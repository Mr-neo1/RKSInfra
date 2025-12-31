import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Server, Globe, ShieldCheck, Monitor, Users, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { servicesAPI } from '../services/api';
import { staticServices } from '../data/staticData';
import { SEO_CONFIG } from '../config/constants';

const iconMap = {
  Shield,
  Mail,
  Server,
  Globe,
  ShieldCheck,
  Monitor,
  Users,
};

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesAPI.getAllServices();
        setServices(response.data || []);
        setError(null);
      } catch (error) {
        console.error('Error fetching services, using static data:', error);
        // Use static data as fallback when API is unavailable
        setServices(staticServices);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-blue text-white flex items-center justify-center">
        <div className="text-cyan-highlight text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-deep-blue text-white">
        <Navbar />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <p className="text-alert-orange text-xl mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300"
            >
              Retry
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Structured data for services page
  const servicesStructuredData = services.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "RKS Infra",
      "url": SEO_CONFIG.siteUrl
    },
    "areaServed": "Worldwide",
    "serviceType": service.title,
    "url": `${SEO_CONFIG.siteUrl}/services/${service.id}`
  }));

  return (
    <>
      <SEO
        title="Our Services"
        description="Comprehensive email security and network infrastructure solutions. From SPF/DKIM/DMARC configuration to Sophos firewall setup, we protect your business infrastructure."
        keywords="email security services, network security services, email deliverability, SPF DKIM DMARC setup, firewall configuration, IT infrastructure services"
        structuredData={servicesStructuredData}
      />
      <div className="min-h-screen bg-deep-blue text-white">
        <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Comprehensive email security and network infrastructure solutions designed to protect your business and ensure your emails reach the inbox
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {services.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-medium-gray text-xl">No services available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
              const Icon = iconMap[service.icon] || Shield;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group p-8 rounded-2xl border bg-slate-900/50 border-slate-800 hover:border-cyan-highlight/50 hover:bg-gradient-to-br hover:from-security-blue/10 hover:to-cyan-highlight/10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-highlight/20"
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
              );
            })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-deep-blue">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Infrastructure?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Get a free email deliverability audit and see how we can help protect your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
