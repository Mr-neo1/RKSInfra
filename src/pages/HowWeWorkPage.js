import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Settings, BarChart, CheckCircle, Clock, ArrowRight, Users, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { processAPI } from '../services/api';

const HowWeWorkPage = () => {
  const [processData, setProcessData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const fetchProcess = async () => {
      try {
        const response = await processAPI.getProcessDetails();
        setProcessData(response.data);
      } catch (error) {
        console.error('Error fetching process data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProcess();
  }, []);

  if (loading || !processData) {
    return (
      <div className="min-h-screen bg-deep-blue text-white flex items-center justify-center">
        <div className="text-cyan-highlight text-xl">Loading...</div>
      </div>
    );
  }

  const stepIcons = {
    Search,
    FileText,
    Settings,
    BarChart,
  };

  return (
    <div className="min-h-screen bg-deep-blue text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            How We <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            {processData.overview.description}
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {processData.steps.map((step, i) => {
              const StepIcon = stepIcons[step.icon] || Settings;
              return (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activeStep === i ? 'transform scale-105' : ''
                  }`}
                >
                  {i < processData.steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-security-blue to-cyan-highlight transform translate-x-4 z-0"></div>
                  )}
                  <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border transition-all duration-300 ${
                    activeStep === i ? 'border-cyan-highlight shadow-xl shadow-cyan-highlight/20' : 'border-slate-700 hover:border-slate-600'
                  }`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-security-blue to-cyan-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                      <StepIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-cyan-highlight mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <div className="flex items-center justify-center space-x-2 text-sm text-medium-gray mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                      <p className="text-sm text-medium-gray">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Step Information */}
          {processData.steps[activeStep] && (
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-cyan-highlight">
                    {processData.steps[activeStep].title}
                  </h3>
                  <p className="text-light-gray mb-6">
                    {processData.steps[activeStep].description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-3 text-light-gray">Activities</h4>
                    <ul className="space-y-2">
                      {processData.steps[activeStep].activities.map((activity, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                          <span className="text-medium-gray">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-3 text-light-gray">Deliverables</h4>
                    <ul className="space-y-2">
                      {processData.steps[activeStep].deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-highlight rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-medium-gray">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-cyan-highlight" />
                      <span className="font-semibold text-light-gray">Timeline</span>
                    </div>
                    <p className="text-medium-gray">{processData.steps[activeStep].timeline}</p>
                    
                    <div className="mt-4 pt-4 border-t border-slate-600">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-cyan-highlight" />
                        <span className="font-semibold text-light-gray">Communication</span>
                      </div>
                      <p className="text-medium-gray mt-1">{processData.steps[activeStep].communication}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-deep-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Engagement <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Models</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Choose the engagement model that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processData.engagementModels.map((model, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-cyan-highlight">{model.type}</h3>
                <p className="text-light-gray mb-6">{model.description}</p>
                
                <div className="mb-6">
                  <span className="text-sm font-semibold text-trust-green">Best For:</span>
                  <p className="text-medium-gray text-sm mt-1">{model.bestFor}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-cyan-highlight" />
                    <span className="text-sm text-light-gray">Timeline: {model.timeline}</span>
                  </div>
                  <div className="text-sm text-medium-gray">
                    <strong>Pricing:</strong> {model.pricing}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-light-gray mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {model.includes.map((item, j) => (
                      <li key={j} className="flex items-start space-x-2 text-sm text-medium-gray">
                        <CheckCircle className="w-4 h-4 text-trust-green flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What to <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Expect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <Shield className="w-12 h-12 text-cyan-highlight mb-4" />
              <h3 className="text-xl font-bold mb-4 text-light-gray">Communication</h3>
              <ul className="space-y-2">
                {processData.whatToExpect.communication.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-medium-gray">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <Settings className="w-12 h-12 text-cyan-highlight mb-4" />
              <h3 className="text-xl font-bold mb-4 text-light-gray">Approach</h3>
              <ul className="space-y-2">
                {processData.whatToExpect.approach.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-medium-gray">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <Users className="w-12 h-12 text-cyan-highlight mb-4" />
              <h3 className="text-xl font-bold mb-4 text-light-gray">Support</h3>
              <ul className="space-y-2">
                {processData.whatToExpect.support.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-medium-gray">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-deep-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Measure <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Success</span>
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              We track these metrics to ensure we deliver real value
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processData.successMetrics.map((metric, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
                <CheckCircle className="w-8 h-8 text-trust-green mx-auto mb-3" />
                <p className="text-light-gray">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Let's discuss your project and see how our process can help you achieve your goals
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

export default HowWeWorkPage;
