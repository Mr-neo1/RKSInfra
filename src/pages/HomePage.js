import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Shield, Mail, Server, Globe, ShieldCheck, Monitor, Users,
  CheckCircle, Search, FileText, Settings, BarChart, ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { homeAPI, servicesAPI } from '../services/api';
import { staticHomeData, staticServices } from '../data/staticData';

const iconMap = {
  Shield,
  Mail,
  Server,
  Globe,
  ShieldCheck,
  Monitor,
  Users,
};

const HomePage = () => {
  const [homeData, setHomeData] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [homeResponse, servicesResponse] = await Promise.all([
          homeAPI.getHomeData(),
          servicesAPI.getAllServices()
        ]);
        setHomeData(homeResponse.data);
        setServices(servicesResponse.data);
      } catch (error) {
        console.error('Error fetching data, using static data:', error);
        // Use static data as fallback when API is unavailable
        setHomeData(staticHomeData);
        setServices(staticServices);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-blue text-white flex items-center justify-center">
        <div className="text-cyan-highlight text-xl">Loading...</div>
      </div>
    );
  }

  // Use static data as fallback if homeData is still null
  const displayData = homeData || staticHomeData;
  const displayServices = services.length > 0 ? services : staticServices;

  return (
    <div className="min-h-screen bg-deep-blue text-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-security-blue/10 to-transparent"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-[55%_45%] gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-security-blue/10 border border-security-blue/20 rounded-full text-cyan-highlight text-sm font-medium">
                {displayData.hero.badge}
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {displayData.hero.title}
              </h1>
              
              <p className="text-xl text-light-gray leading-relaxed">
                {displayData.hero.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get Email Security Audit</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-security-blue/30 rounded-full font-semibold hover:bg-security-blue/10 transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-4">
                {displayData.hero.stats.map((stat, i) => (
                  <div key={i} className="flex items-center space-x-2 text-trust-green">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-light-gray">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <Mail className="w-8 h-8 text-cyan-highlight" />
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
                    <Monitor className="w-8 h-8 text-trust-green" />
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

      {/* 2. TRUST INDICATORS BAR */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {displayData.trustIndicators.map((indicator, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent mb-2">
                  {indicator.number}
                </div>
                <div className="text-medium-gray">{indicator.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Email & Network <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Security Services</span>
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              End-to-end solutions that protect your business and ensure your emails reach the inbox
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service) => {
              const Icon = iconMap[service.icon] || Shield;
              return (
                <div
                  key={service.id}
                  className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-cyan-highlight/50 hover:bg-gradient-to-br hover:from-security-blue/10 hover:to-cyan-highlight/10 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-highlight/20 hover:transform hover:scale-105"
                >
                  <Icon className="w-12 h-12 mb-4 text-cyan-highlight group-hover:text-security-blue transition-colors" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-medium-gray mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-trust-green">Key Benefit:</span>
                    <p className="text-light-gray text-sm mt-1">{service.keyBenefit}</p>
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="flex items-center space-x-2 text-cyan-highlight font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SPECIALIZATION DEEP-DIVE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-deep-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Makes Us <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Different</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
              <Mail className="w-16 h-16 text-cyan-highlight mb-6" />
              <h3 className="text-3xl font-bold mb-4">Email Deliverability Specialists</h3>
              <p className="text-light-gray mb-6">
                We don't just set up email servers—we ensure every email you send lands in the inbox, not spam.
              </p>
              <ul className="space-y-3">
                {['SPF, DKIM, DMARC configuration mastery', 'IP reputation management', 'ISP relationship knowledge (Gmail, Outlook, Yahoo)', 'Bounce rate optimization', 'Spam filter bypass techniques (ethical)', 'List hygiene and authentication'].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span className="text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
              <Shield className="w-16 h-16 text-security-blue mb-6" />
              <h3 className="text-3xl font-bold mb-4">Enterprise-Grade Network Protection</h3>
              <p className="text-light-gray mb-6">
                From firewall configuration to VPN setup, we secure your entire network infrastructure.
              </p>
              <ul className="space-y-3">
                {['Sophos firewall certified expertise', 'Switch configuration and management', 'Intrusion prevention systems', 'Secure remote access solutions', 'Network segmentation', 'Continuous threat monitoring'].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span className="text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {displayData.whyChooseUs.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayData.whyChooseUs.differentiators.map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-highlight/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-cyan-highlight">{item.title}</h3>
                <p className="text-medium-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-deep-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {displayData.process.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {displayData.process.steps.map((step, i) => {
              const StepIcon = step.icon === 'Search' ? Search : step.icon === 'FileText' ? FileText : step.icon === 'Settings' ? Settings : BarChart;
              return (
                <div key={i} className="relative">
                  {i < displayData.process.steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-security-blue to-cyan-highlight transform translate-x-4"></div>
                  )}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-security-blue to-cyan-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                      <StepIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-cyan-highlight mb-2">Step {step.step}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-medium-gray text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CLIENT SUCCESS METRICS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proven <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Results</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {displayData.successMetrics.map((metric, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-6">{metric.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-medium-gray">Before:</span>
                    <span className="text-alert-orange font-semibold">{metric.before}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-cyan-highlight transform rotate-90" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-medium-gray">After:</span>
                    <span className="text-trust-green font-bold text-xl">{metric.after}</span>
                  </div>
                </div>
                <p className="text-light-gray mt-6 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY & TOOLS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-deep-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technologies We <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Master</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayData.technologies.categories.map((category, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-bold mb-4 text-cyan-highlight">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-light-gray">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES WE SERVE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who We <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Help</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayData.industries.map((industry, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-highlight/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                <p className="text-medium-gray">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SUPPORT MODELS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-deep-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {displayData.supportModels.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {displayData.supportModels.models.map((model, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-cyan-highlight">{model.type}</h3>
                <p className="text-light-gray mb-4">{model.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-trust-green">Best For:</span>
                  <p className="text-medium-gray text-sm mt-1">{model.bestFor}</p>
                </div>
                <div className="text-sm text-medium-gray">
                  Starting at: <span className="text-cyan-highlight font-semibold">{model.startingAt}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300"
            >
              <span>Discuss Your Needs</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <FAQ faqs={displayData.faq} />

      {/* 12. CONTACT/CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {displayData.cta.title}
            </h2>
            <p className="text-xl text-light-gray mb-8 max-w-2xl mx-auto">
              {displayData.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>🎯 Claim Your Free Audit</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-security-blue/30 rounded-full font-semibold hover:bg-security-blue/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
