import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, Server, Globe, ArrowRight, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { solutionsAPI } from '../services/api';
import { staticSolutions } from '../data/staticData';

const SolutionsPage = () => {
  const [solutions, setSolutions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await solutionsAPI.getAllSolutions();
        setSolutions(response.data);
        
        // Extract unique categories
        const cats = ['All', ...new Set(response.data.map(s => s.category))];
        setCategories(cats);
      } catch (error) {
        console.error('Error fetching solutions, using static data:', error);
        // Use static data as fallback when API is unavailable
        setSolutions(staticSolutions);
        const cats = ['All', ...new Set(staticSolutions.map(s => s.category))];
        setCategories(cats);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, []);

  const filteredSolutions = selectedCategory === 'All' 
    ? displaySolutions 
    : displaySolutions.filter(s => s.category === selectedCategory);

  const iconMap = {
    'Email Deliverability': Mail,
    'Network Security': Shield,
    'Email Infrastructure': Server,
    'DNS & Authentication': Globe,
    'Server Management': Server,
    'Phishing Protection': Shield,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-deep-blue text-white flex items-center justify-center">
        <div className="text-cyan-highlight text-xl">Loading...</div>
      </div>
    );
  }

  const displaySolutions = solutions.length > 0 ? solutions : staticSolutions;

  return (
    <div className="min-h-screen bg-deep-blue text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Solutions for Your <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Challenges</span>
          </h1>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Detailed, step-by-step solutions to common email security and network infrastructure problems
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-security-blue to-cyan-highlight text-white'
                    : 'bg-slate-800 text-light-gray hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSolutions.map((solution) => {
              const Icon = iconMap[solution.category] || Shield;
              return (
                <div
                  key={solution.id}
                  onClick={() => setSelectedSolution(solution)}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-highlight/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-10 h-10 text-cyan-highlight" />
                      <span className="px-3 py-1 bg-cyan-highlight/10 border border-cyan-highlight/20 rounded-full text-cyan-highlight text-sm">
                        {solution.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  
                  <div className="mb-4">
                    <p className="text-medium-gray mb-2"><strong className="text-light-gray">Problem:</strong> {solution.problem}</p>
                    <p className="text-light-gray"><strong>Solution:</strong> {solution.solution}</p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-2 text-sm text-medium-gray">
                      <Clock className="w-4 h-4" />
                      <span>{solution.timeframe}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-cyan-highlight font-semibold">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Details Modal/Expanded View */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedSolution(null)}>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">{selectedSolution.title}</h2>
              <button
                onClick={() => setSelectedSolution(null)}
                className="text-medium-gray hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-cyan-highlight">Problem</h3>
                <p className="text-light-gray">{selectedSolution.problem}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-cyan-highlight">Solution</h3>
                <p className="text-light-gray">{selectedSolution.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-highlight">Implementation Steps</h3>
                <ol className="space-y-3">
                  {selectedSolution.steps.map((step, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-cyan-highlight/20 border border-cyan-highlight/30 rounded-full flex items-center justify-center text-cyan-highlight font-bold">
                        {i + 1}
                      </span>
                      <span className="text-light-gray pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2 text-light-gray">Timeframe</h4>
                  <p className="text-medium-gray">{selectedSolution.timeframe}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-light-gray">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSolution.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-light-gray">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-light-gray">Best For Industries</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSolution.industries.map((industry, i) => (
                    <span key={i} className="px-3 py-1 bg-trust-green/10 border border-trust-green/20 rounded-full text-sm text-trust-green">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-700">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300"
                  onClick={() => setSelectedSolution(null)}
                >
                  <span>Get This Solution</span>
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
              Don't See Your Solution?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              We solve unique challenges every day. Let's discuss your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
