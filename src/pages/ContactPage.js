import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesAPI } from '../services/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    subject: '',
    message: '',
  });
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesAPI.getAllServices();
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append('access_key', 'b6304684-ad60-44ba-9601-af8df41406eb');
      formData.append('name', formData.name);
      formData.append('email', formData.email);
      formData.append('phone', formData.phone || '');
      formData.append('serviceInterest', formData.serviceInterest || '');
      formData.append('subject', formData.subject || 'General Inquiry');
      formData.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceInterest: '',
          subject: '',
          message: '',
        });
      } else {
        setError(data.message || 'Failed to submit form');
      }
    } catch (err) {
      setError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-deep-blue text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Get in <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help secure your email infrastructure and network.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-highlight/10 border border-cyan-highlight/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-highlight" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-light-gray">Email</h3>
                    <a href="mailto:contact@rksinfra.com" className="text-medium-gray hover:text-cyan-highlight transition-colors">
                      contact@rksinfra.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-highlight/10 border border-cyan-highlight/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cyan-highlight" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-light-gray">Phone</h3>
                    <a href="tel:+911234567890" className="text-medium-gray hover:text-cyan-highlight transition-colors">
                      +91 [Your Number]
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-highlight/10 border border-cyan-highlight/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-highlight" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-light-gray">Location</h3>
                    <p className="text-medium-gray">
                      Ludhiana, Punjab, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold mb-4 text-cyan-highlight">Business Hours</h3>
                <div className="space-y-2 text-medium-gray">
                  <p>24/7 Support Available</p>
                  <p className="text-sm text-light-gray">Response Time: Within 4 hours</p>
                </div>
              </div>

              {/* Free Audit CTA Box */}
              <div className="mt-8 p-8 bg-gradient-to-br from-security-blue/10 to-cyan-highlight/10 border border-security-blue/20 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-trust-green" />
                  <h3 className="text-xl font-bold">🎯 Free Email Deliverability Audit</h3>
                </div>
                <p className="text-medium-gray mb-4">
                  Get a comprehensive analysis of your current email setup
                </p>
                <a
                  href="#contact-form"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-lg hover:shadow-security-blue/50 transition-all duration-300"
                >
                  Claim Your Free Audit
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              
              {success && (
                <div className="mb-6 p-4 bg-trust-green/10 border border-trust-green/20 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-trust-green" />
                  <p className="text-trust-green">Thank you! Your message has been sent successfully. We'll get back to you within 4 hours.</p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-alert-orange/10 border border-alert-orange/20 rounded-lg">
                  <p className="text-alert-orange">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-light-gray">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-highlight transition-colors text-white"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-light-gray">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-highlight transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-light-gray">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-highlight transition-colors text-white"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium mb-2 text-light-gray">
                    Service Interest
                  </label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-highlight transition-colors text-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-light-gray">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-highlight transition-colors text-white"
                    placeholder="General Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-light-gray">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-highlight transition-colors resize-none text-white"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-security-blue to-cyan-highlight rounded-full font-semibold hover:shadow-xl hover:shadow-security-blue/50 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
