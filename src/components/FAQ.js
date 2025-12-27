import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-deep-blue">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Common <span className="bg-gradient-to-r from-security-blue to-cyan-highlight bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-medium-gray">
            Everything you need to know about our email security and network infrastructure services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-highlight/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/30 transition-colors"
              >
                <span className="font-semibold text-light-gray pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-highlight flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-medium-gray flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-medium-gray leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


