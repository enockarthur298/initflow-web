import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Pricing from './pages/Pricing';
import { MessageSquare, Eye, Edit3, ArrowRight } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      setSubmitStatus('error');
      return;
    }
    
    setEmailError('');
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://sheetdb.io/api/v1/tem6ums13h51p', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [{
            email: email,
            timestamp: new Date().toISOString()
          }]
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
        // Update user count if needed
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      setEmailError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
     
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Router>
      <Routes>
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route
          path="/"
          element={
            <div className="font-sans text-gray-900 bg-white">
              {/* Header */}
              <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'backdrop-blur bg-white/20 shadow-sm' : 'backdrop-blur bg-white/5'} py-4`} aria-label="Main navigation">
                <div className="container mx-auto px-4">
                  <div className="flex justify-between items-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center"
                    >
                      <h1 className="text-2xl font-bold">
                        AppMagic<span className="text-blue-600">AI</span>
                      </h1>
                    </motion.div>

                    <ul className="hidden md:flex space-x-8">
                      {['Features', 'Pricing'].map((item) => (
                        <motion.li
                          key={item}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to={item.toLowerCase() === 'pricing' ? '/pricing' : `#${item.toLowerCase()}`}
                            className="font-medium text-white hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-3 py-2"
                            aria-current={window.location.pathname.includes(item.toLowerCase()) ? 'page' : undefined}
                          >
                            {item}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex items-center space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        Login
                      </motion.button>
                    
                    </div>
                  </div>
                </div>
              </nav>

              {/* Hero Section */}
              <section className="relative bg-gradient-to-br from-blue-600 to-orange-500 text-white pt-32 pb-20">
                <div className="container mx-auto px-6">
                  <div className="max-w-3xl mx-auto text-center space-y-6">
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={fadeInUp}
                    >
                      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                        Build Complete Web Apps
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-orange-100">
                          Just By Describing Them
                        </span>
                      </h1>
                      <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
                        No coding needed. Tell our AI what you want, and get a working website in minutes.
                      </p>
                    </motion.div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
                  <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
                </div>
              </section>

              {/* Features Section */}
              <section id="features" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center max-w-2xl mx-auto mb-16"
                  >
                    <h2 className="text-4xl font-bold mb-4">
                      Create Apps With Simple Words
                    </h2>
                    <p className="text-gray-600">
                      Just describe what you want, and our AI does all the technical work for you.
                    </p>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8"
                  >
                    {[
                      {
                        icon: (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        ),
                        title: 'Complete Website Creation',
                        description:
                          'Build full websites with databases, user accounts, and all the features you need - without writing a single line of code.',
                      },
                      {
                        icon: (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        ),
                        title: 'See Your App Take Shape',
                        description:
                          'Watch in real-time as our AI builds your app. Make changes by simply asking for what you want.',
                      },
                      {
                        icon: (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                            />
                          </svg>
                        ),
                        title: 'One-Click Publishing',
                        description:
                          'Your app is ready to go live with just one click. We handle all the technical hosting details.',
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600"
                      >
                        <div className="text-orange-500 mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>

              {/* Audience Section */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-3xl font-bold text-center mb-12"
                  >
                    Who Is AppMagic For?
                  </motion.h2>
                  
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8"
                  >
                    {[
                      {
                        icon: <MessageSquare className="w-10 h-10 mx-auto" />,
                        title: "Small Business Owners",
                        description: "Create your business website or app without hiring expensive developers"
                      },
                      {
                        icon: <Eye className="w-10 h-10 mx-auto" />,
                        title: "Idea People",
                        description: "Turn your app ideas into reality without learning to code or spending thousands"
                      },
                      {
                        icon: <Edit3 className="w-10 h-10 mx-auto" />,
                        title: "Content Creators",
                        description: "Build custom websites to showcase your work and engage with your audience"
                      }
                    ].map((audience, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-gray-50 p-6 rounded-lg text-center"
                      >
                        <div className="flex justify-center mb-4">{audience.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                        <p className="text-gray-600">{audience.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>

              {/* Premium Waitlist Section */}
              <div className="relative">
                <div className="absolute inset-x-0 -bottom-12 h-24 bg-gradient-to-t from-transparent to-blue-600/10 backdrop-blur-sm"></div>
                <section className="relative bg-gradient-to-br from-blue-600 to-orange-500 py-20 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                  </div>
                  
                  <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="max-w-4xl mx-auto text-center"
                    >
                      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                        </span>
                        <span className="text-sm font-medium text-white/90">Join our exclusive waitlist</span>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Join the AppMagic Waitlist
                      </h2>
                      <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Be the first to build amazing web apps without writing a single line of code
                      </p>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-lg p-1 rounded-xl shadow-2xl border border-white/10 max-w-md mx-auto"
                      >
                        <form onSubmit={handleSubmit} className="space-y-4 p-7" aria-label="Waitlist signup form">
                          <div className="relative">
                            <label htmlFor="waitlist-email" className="sr-only">Email address</label>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <input
                              id="waitlist-email"
                              type="email"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                if (emailError) setEmailError('');
                              }}
                              placeholder="Enter your email"
                              className={`w-full pl-10 pr-4 py-3 bg-white/5 text-white placeholder-blue-200/60 rounded-lg border ${emailError ? 'border-red-400' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all`}
                              required
                              disabled={isSubmitting}
                              aria-invalid={!!emailError}
                              aria-describedby={emailError ? "email-error" : undefined}
                            />
                            {emailError && (
                              <p id="email-error" className="mt-1 text-sm text-red-400">{emailError}</p>
                            )}
                          </div>
                          
                          <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                            disabled={isSubmitting}
                            aria-label={isSubmitting ? "Submitting waitlist form" : "Submit waitlist form"}
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </>
                            ) : (
                              <>
                                <ArrowRight className="w-5 h-5" />
                                Join Priority Waitlist
                              </>
                            )}
                          </button>
                        </form>
                        
                        {submitStatus === 'success' && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-3 bg-green-500/10 border border-green-400/30 rounded-lg"
                          >
                            <p className="text-sm text-green-100 flex items-center gap-2 justify-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              You're on the list! We'll be in touch soon.
                            </p>
                          </motion.div>
                        )}
                        
                        {submitStatus === 'error' && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-3 bg-red-500/10 border border-red-400/30 rounded-lg"
                          >
                            <p className="text-sm text-red-100 flex items-center gap-2 justify-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              Please enter a valid email address
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                      
                      <p className="text-sm text-white/80 mt-8">
                        Join 150+ users on our waitlist
                      </p>
                    </motion.div>
                  </div>
                </section>
                <div className="absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-transparent to-orange-500/10 backdrop-blur-sm"></div>
              </div>

              {/* Footer */}
              <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">AppMagic</h3>
                      <p className="text-gray-400">
                        Turn your ideas into reality, no coding skills required.
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
                    2025 AppMagic. All rights reserved.
                  </div>
                </div>
              </footer>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
