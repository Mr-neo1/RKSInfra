import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Shield, Mail, Server, Globe, ShieldCheck, Monitor, Users as UsersIcon, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesAPI } from '../services/api';

const iconMap = {
  Shield,
  Mail,
  Server,
  Globe,
  ShieldCheck,
  Monitor,
  Users: UsersIcon,
};

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const [serviceResponse, allServicesResponse] = await Promise.all([
          servicesAPI.getServiceById(id),
          servicesAPI.getAllServices()
        ]);
        setService(serviceResponse.data);
        setAllServices(allServicesResponse.data);
      } catch (error) {
        console.error('Error fetching service:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-blue text-white flex items-center justify-center">
        <div className="text-cyan-highlight text-xl">Loading...</div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-deep-blue text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <Link to="/services" className="text-cyan-highlight hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Shield;
  const otherServices = allServices.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-deep-blue text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-security-blue/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-cyan-highlight hover:text-security-blue mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Services</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-security-blue to-cyan-highlight rounded-2xl flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-sm text-cyan-highlight font-medium mb-1">Service</div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {service.title}
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-light-gray leading-relaxed">
                {service.description}
              </p>

              <div className="bg-gradient-to-br from-trust-green/10 to-cyan-highlight/10 border border-trust-green/20 rounded-xl p-6">
                <div className="text-sm font-semibold text-trust-green mb-2">Key Benefit</div>
                <div className="text-2xl font-bold text-light-gray">{service.keyBenefit}</div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/how-we-work"
                  className="px-8 py-4 border-2 border-security-blue/30 rounded-full font-semibold hover:bg-security-blue/10 transition-all duration-300"
                >
                  Learn Our Process
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <CheckCircle className="w-8 h-8 text-trust-green" />
                    <div className="flex-1">
                      <div className="h-2 bg-slate-700 rounded-full mb-2"></div>
                      <div className="h-2 bg-slate-700 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <Shield className="w-8 h-8 text-security-blue" />
                    <div className="flex-1">
                      <div className="h-2 bg-slate-700 rounded-full mb-2"></div>
                      <div className="h-2 bg-slate-700 rounded-full w-2/3"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <Monitor className="w-8 h-8 text-cyan-highlight" />
                    <div className="flex-1">
                      <div className="h-2 bg-slate-700 rounded-full mb-2"></div>
                      <div className="h-2 bg-slate-700 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-highlight">Service Overview</h2>
                <p className="text-lg text-light-gray leading-relaxed">
                  {service.details}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-highlight">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <CheckCircle className="w-6 h-6 text-trust-green flex-shrink-0 mt-0.5" />
                      <span className="text-light-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <h2 className="text-3xl font-bold mb-6 text-cyan-highlight">Why Choose This Service?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-highlight/20 border border-cyan-highlight/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-highlight font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-light-gray">Expert Implementation</h3>
                      <p className="text-medium-gray">Hands-on experience with production systems, not just theory.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-highlight/20 border border-cyan-highlight/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-highlight font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-light-gray">Proven Results</h3>
                      <p className="text-medium-gray">Track record of successful implementations with measurable outcomes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cyan-highlight/20 border border-cyan-highlight/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-highlight font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-light-gray">Ongoing Support</h3>
                      <p className="text-medium-gray">Continuous monitoring and optimization to ensure long-term success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-cyan-highlight">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cyan-highlight" />
                    <div>
                      <div className="text-sm text-medium-gray">Timeline</div>
                      <div className="text-light-gray font-semibold">1-4 weeks</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-cyan-highlight" />
                    <div>
                      <div className="text-sm text-medium-gray">Support</div>
                      <div className="text-light-gray font-semibold">24/7 Available</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-lg hover:shadow-security-blue/50 transition-all duration-300 text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-highlight">Need Help Choosing?</h3>
                <p className="text-medium-gray mb-4 text-sm">
                  Not sure which service is right for you? We can help you decide.
                </p>
                <Link
                  to="/contact"
                  className="text-cyan-highlight hover:text-security-blue font-semibold text-sm flex items-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {otherServices.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-deep-blue">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Related <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherServices.map((relatedService) => {
                const RelatedIcon = iconMap[relatedService.icon] || Shield;
                return (
                  <Link
                    key={relatedService.id}
                    to={`/services/${relatedService.id}`}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-highlight/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <RelatedIcon className="w-10 h-10 text-cyan-highlight mb-4" />
                    <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                    <p className="text-medium-gray text-sm mb-4">{relatedService.description}</p>
                    <div className="flex items-center space-x-2 text-cyan-highlight font-semibold text-sm">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Let's discuss how {service.title} can help secure your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;


