import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, Server, Globe, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { portfolioAPI } from '../services/api';
import { staticPortfolio } from '../data/staticData';

const PortfolioPage = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await portfolioAPI.getAllPortfolioItems();
        setPortfolioItems(response.data);
      } catch (error) {
        console.error('Error fetching portfolio, using static data:', error);
        // Use static data as fallback when API is unavailable
        setPortfolioItems(staticPortfolio);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const categoryIconMap = {
    'Email Deliverability': Mail,
    'Network Security': Shield,
    'Email Infrastructure': Server,
    'DNS & Authentication': Globe,
    'Server Management': Server,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-blue text-white flex items-center justify-center">
        <div className="text-cyan-highlight text-xl">Loading...</div>
      </div>
    );
  }

  const displayPortfolio = portfolioItems.length > 0 ? portfolioItems : staticPortfolio;

  return (
    <div className="min-h-screen bg-deep-blue text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Explore our successful projects in email security and network infrastructure
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPortfolio.map((item) => {
              const Icon = categoryIconMap[item.category] || Shield;
              return (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-cyan-highlight/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-10 h-10 text-cyan-highlight" />
                    <span className="px-3 py-1 bg-cyan-highlight/10 border border-cyan-highlight/20 rounded-full text-cyan-highlight text-sm">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-medium-gray mb-6">{item.description}</p>
                  
                  {item.technologies && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-light-gray"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-medium-gray pt-4 border-t border-slate-700">
                    <span>{item.client}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-deep-blue">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Let's discuss how we can help secure your email and network infrastructure
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
