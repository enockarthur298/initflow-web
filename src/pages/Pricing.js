import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Shield, Database, Globe, Users, HeadsetMic } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col">
      {/* Pricing Section */}
      <div className="flex-grow w-full max-w-7xl mx-auto px-4 py-20 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
            <Sparkles size={16} className="mr-1" />
            Limited Time Offer
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Build AI Apps Without Code
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Turn your ideas into powerful applications using natural language - no coding required
          </p>
        </div>
        
        {/* Pricing Card */}
        <div className="max-w-lg mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-indigo-100 transform transition-all hover:shadow-2xl">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-6 px-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">AI Builder Pro</h2>
              <span className="bg-white bg-opacity-20 text-white text-sm font-medium px-4 py-1 rounded-full">
                Waitlist Exclusive
              </span>
            </div>
          </div>
          
          <div className="p-8">
            <div className="mb-8 flex items-end">
              <div className="flex items-start">
                <span className="text-5xl font-extrabold text-gray-900">$49</span>
                <span className="text-xl text-gray-500 ml-2 line-through">$99</span>
              </div>
              <span className="text-lg text-gray-600 ml-2">/month</span>
              <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">50% OFF Forever</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                {
                  text: "Unlimited app creations",
                  icon: <Sparkles size={18} className="text-indigo-600 mr-2" />
                },
                {
                  text: "Full database functionality",
                  icon: <Database size={18} className="text-indigo-600 mr-2" />
                },
                {
                  text: "Custom domain publishing",
                  icon: <Globe size={18} className="text-indigo-600 mr-2" />
                },
                {
                  text: "User authentication systems",
                  icon: <Users size={18} className="text-indigo-600 mr-2" />
                },
                {
                  text: "Priority support",
                  icon: <HeadsetMic size={18} className="text-indigo-600 mr-2" />
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check size={24} className="text-green-500 mr-2 flex-shrink-0" />
                  <div className="flex items-center">
                    {item.icon}
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <div className="text-center">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300">
                Join Waitlist & Secure 50% Off
              </button>
              <p className="mt-4 text-sm text-gray-500 flex items-center justify-center">
                <Shield size={16} className="mr-1" /> Secure payment • Cancel anytime
              </p>
            </div>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-3">Trusted by innovators worldwide</p>
          <div className="flex justify-center space-x-8 opacity-70">
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
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
                <li><a href="#features" className="text-gray-400 hover:text-indigo-400 transition-colors">Features</a></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-indigo-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-gray-400 hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-gray-400 hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2025 InitFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
