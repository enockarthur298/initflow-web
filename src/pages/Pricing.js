import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Pricing Section */}
      <div className="flex-grow w-full max-w-7xl mx-auto px-4 py-16 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Program devices using natural language - no coding required
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Pro Plan</h2>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-gray-900">$</span>
              <span className="text-5xl font-extrabold text-gray-900">$</span>
              <span className="text-xl text-gray-500 ml-2">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Create firmware with natural language commands",
                "No programming experience needed",
                "Works with common IoT devices",
                "Cancel anytime",
                "24/7 support"
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 mr-3 text-blue-600" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">InitFlow</h3>
              <p className="text-gray-400">
                Making technology work for you, through the power of words.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-blue-600 transition-colors">Features</a></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-blue-600 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-gray-400 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-gray-400 hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            2025 InitFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;