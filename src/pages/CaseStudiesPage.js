import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Shield, Mail, Server, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { caseStudiesAPI } from '../services/api';
import { staticCaseStudies } from '../data/staticData';

const CaseStudiesPage = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await caseStudiesAPI.getAllCaseStudies();
        setCaseStudies(response.data);
        
        // Extract unique industries and services
        const inds = ['All', ...new Set(response.data.map(cs => cs.industry))];
        const svcs = ['All', ...new Set(response.data.map(cs => cs.service))];
        setIndustries(inds);
        setServices(svcs);
      } catch (error) {
        console.error('Error fetching case studies, using static data:', error);
        // Use static data as fallback when API is unavailable
        setCaseStudies(staticCaseStudies);
        const inds = ['All', ...new Set(staticCaseStudies.map(cs => cs.industry))];
        const svcs = ['All', ...new Set(staticCaseStudies.map(cs => cs.service))];
        setIndustries(inds);
        setServices(svcs);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCaseStudies = caseStudies.filter(cs => {
    const industryMatch = selectedIndustry === 'All' || cs.industry === selectedIndustry;
    const serviceMatch = selectedService === 'All' || cs.service === selectedService;
    return industryMatch && serviceMatch;
  });

  const serviceIconMap = {
    'Email Deliverability': Mail,
    'Network Security': Shield,
    'Email Infrastructure': Server,
    'DNS & Authentication': Mail,
    'Server Management': Server,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-blue text-white flex items-center justify-center">
        <Loading fullScreen />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-blue text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Success <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Real results from businesses we've helped secure their email and network infrastructure
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-cyan-highlight" />
            <span className="font-semibold text-light-gray">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <div>
              <span className="text-sm text-medium-gray mr-2">Industry:</span>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-highlight"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div>
              <span className="text-sm text-medium-gray mr-2">Service:</span>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-highlight"
              >
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy) => {
              const Icon = serviceIconMap[caseStudy.service] || Shield;
              return (
                <div
                  key={caseStudy.id}
                  onClick={() => setSelectedCaseStudy(caseStudy)}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-highlight/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-10 h-10 text-cyan-highlight" />
                    <span className="px-3 py-1 bg-cyan-highlight/10 border border-cyan-highlight/20 rounded-full text-cyan-highlight text-sm">
                      {caseStudy.service}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{caseStudy.title}</h3>
                  <p className="text-medium-gray mb-4 text-sm">{caseStudy.client} • {caseStudy.industry}</p>
                  
                  <div className="mb-4">
                    <p className="text-light-gray text-sm mb-2"><strong>Challenge:</strong> {caseStudy.challenge.substring(0, 100)}...</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="text-sm">
                      <div className="text-trust-green font-bold">
                        {caseStudy.results.inboxRate || 
                         caseStudy.results.uptime || 
                         caseStudy.results.deliveryRate || 
                         caseStudy.results.authentication ||
                         caseStudy.results.securityIncidents ||
                         'View Details'}
                      </div>
                      <div className="text-medium-gray text-xs">Key Result</div>
                    </div>
                    <div className="flex items-center space-x-2 text-cyan-highlight font-semibold text-sm">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedCaseStudy(null)}>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-slate-700" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedCaseStudy.title}</h2>
                <p className="text-medium-gray">{selectedCaseStudy.client} • {selectedCaseStudy.industry} • {selectedCaseStudy.year}</p>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="text-medium-gray hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-cyan-highlight">The Challenge</h3>
                <p className="text-light-gray">{selectedCaseStudy.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-cyan-highlight">Our Solution</h3>
                <p className="text-light-gray">{selectedCaseStudy.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-highlight">Results</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedCaseStudy.metrics.map((metric, i) => (
                    <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                      <div className="text-sm text-medium-gray mb-1">{metric.label}</div>
                      <div className="text-2xl font-bold text-trust-green">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-cyan-highlight">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-light-gray">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCaseStudy.testimonial && (
                <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-cyan-highlight/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">"</span>
                    </div>
                    <div>
                      <p className="text-light-gray italic mb-2">{selectedCaseStudy.testimonial}</p>
                      <p className="text-sm text-medium-gray">— {selectedCaseStudy.client}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-slate-700">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300"
                  onClick={() => setSelectedCaseStudy(null)}
                >
                  <span>Get Similar Results</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-deep-blue">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Let's discuss how we can help you achieve similar results
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
