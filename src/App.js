import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Pricing from './pages/Pricing';
import { MessageSquare, Eye, Edit3, ArrowRight, CheckCircle, X, Code, Zap, Globe } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Motion animation for elements entering viewport
  const fadeInUpScroll = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        duration: 0.8,
        bounce: 0.3
      } 
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
            <div className="font-sans text-gray-900 bg-white overflow-hidden">
              {/* Header */}
              <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`} aria-label="Main navigation">
                <div className="container mx-auto px-6">
                  <div className="flex justify-between items-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center"
                    >
                      <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                          InitFlow<span className="text-blue-500">AI</span>
                        </span>
                      </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                      <ul className="flex space-x-1">
                        {[
                          { name: 'Features', link: '#features' },
                          { name: 'How it Works', link: '#how-it-works' },
                          { name: '', link: '#' }
                        ].map((item) => (
                          <motion.li
                            key={item.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link
                              to={item.link}
                              className={`font-medium px-4 py-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'} hover:bg-blue-50/10`}
                            >
                              {item.name}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>

                      
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                      <button 
                        className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      >
                        {isMobileMenuOpen ? (
                          <X className="h-6 w-6" />
                        ) : (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                  {isMobileMenuOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="md:hidden bg-white shadow-lg"
                    >
                      <div className="px-4 py-3 space-y-3">
                        {[
                          { name: 'Features', link: '#features' },
                          { name: 'How it Works', link: '#how-it-works' },
                          { name: '', link: '#' } //add pricing later
                        ].map((item) => (
                          <Link
                            key={item.name}
                            to={item.link}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                       
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>

              {/* Hero Section */}
              <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white pt-36 pb-16 md:pt-44 md:pb-24">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute -bottom-32 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={fadeInUp}
                      className="text-center mb-12"
                    >
                      <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
                        </span>
                        <span className="text-sm font-medium text-white">Build apps without code</span>
                      </div>
                      
                      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                        Transform Your Ideas
                        <br />
                        Into Working Apps
                      </h1>
                      
                      <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
                        No coding skills required. Describe what you want, and watch as InitFlowAI builds your complete web app in minutes.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                        <motion.a
                          href="#waitlist"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                        >
                          Join Waitlist
                        </motion.a>
                        
                        <motion.a
                          href="#how-it-works"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-4 bg-transparent border-2 border-white/40 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                        >
                          How It Works
                        </motion.a>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="flex justify-center mt-8 md:mt-16"
                    >
                      
                
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
              </section>

              {/* Trust Badges Section */}
              <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-8"
                  >
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Trusted by innovators worldwide</p>
                  </motion.div>
                  
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
                  >
                    {['TechCrunch', 'Product Hunt', 'Forbes', 'Startup Weekly', 'Y Combinator'].map((brand, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="text-gray-400 font-bold text-xl md:text-2xl"
                      >
                        {brand}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>

              {/* How it Works Section */}
              <section id="how-it-works" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center max-w-3xl mx-auto mb-16"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                      How InitFlowAI Works
                    </h2>
                    <p className="text-lg text-gray-600">
                      Three simple steps to transform your ideas into fully functional web applications
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {[
                      {
                        icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
                        step: "01",
                        title: "Describe Your App",
                        description: "Simply tell us what you want your app to do — no technical jargon required."
                      },
                      {
                        icon: <Code className="w-12 h-12 text-blue-600" />,
                        step: "02",
                        title: "AI Builds Everything",
                        description: "Our AI handles the coding, backend, and design automatically."
                      },
                      {
                        icon: <Globe className="w-12 h-12 text-blue-600" />,
                        step: "03",
                        title: "Launch & Share",
                        description: "Your app is ready to use, share, or even customize further."
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUpScroll}
                        className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <div className="mb-6 text-blue-600">{step.icon}</div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section id="features" className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center max-w-3xl mx-auto mb-16"
                  >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 rounded-full">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Powerful Features</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                      Everything You Need
                    </h2>
                    <p className="text-lg text-gray-600">
                      Build complete, production-ready web applications with all the features you'd expect
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: (
                          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        ),
                        title: 'Complete Web App Creation',
                        description:
                          'Get a fully functional app with database, authentication, and all the features you need without writing code.',
                      },
                      {
                        icon: (
                          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        ),
                        title: 'Realtime App Previews',
                        description:
                          'Watch as your app takes shape in real-time and make changes by simply describing what you want.',
                      },
                      {
                        icon: (
                          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                            />
                          </svg>
                        ),
                        title: 'One-Click Deployment',
                        description:
                          'Publish your app instantly to a custom domain with just one click. No server setup required.',
                      },
                      {
                        icon: (
                          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        ),
                        title: 'Advanced Security',
                        description:
                          'Built-in authentication, authorization, and data protection to keep your app and users secure.',
                      },
                      {
                        icon: (
                          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                            />
                          </svg>
                        ),
                        title: 'Responsive Design',
                        description:
                          'Your app works perfectly on any device — mobile, tablet, or desktop, automatically.',
                      },
                      {
                        icon: (
                          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        ),
                        title: 'Unlimited Iterations',
                        description:
                          'Refine your app as many times as you want. Just describe the changes.',
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUpScroll}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300"
                      >
                        <div className="text-blue-600 mb-5">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Audience Section */}
              <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center max-w-3xl mx-auto mb-16"
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                      Who Uses InitFlowAI?
                    </h2>
                    <p className="text-lg text-gray-600">
                      From entrepreneurs to creators, InitFlowAI empowers anyone with an idea
                    </p>
                  </motion.div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
                        title: "Entrepreneurs & Startups",
                        description: "Launch your MVP in minutes instead of months. Test ideas quickly without expensive development costs."
                      },
                      {
                        icon: <Eye className="w-12 h-12 text-blue-600" />,
                        title: "Non-Technical Creators",
                        description: "Bring your app ideas to life without learning to code or hiring developers."
                      },
                      {
                        icon: <Edit3 className="w-12 h-12 text-blue-600" />,
                        title: "Small Business Owners",
                        description: "Create custom tools and websites to grow your business and serve your customers better."
                      }
                    ].map((audience, index) => (
                      <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUpScroll}
                        className="bg-gray-50 p-8 rounded-2xl text-center"
                      >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                          <div className="text-blue-600">{audience.icon}</div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{audience.title}</h3>
                        <p className="text-gray-600">{audience.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonials */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUpScroll}
                    className="mt-20 max-w-4xl mx-auto"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-1 rounded-2xl shadow-xl">
                      <div className="bg-white p-8 rounded-xl">
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center mb-4">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <blockquote className="text-xl font-medium text-gray-700 mb-4">
                              "InitFlowAI has completely transformed how I build web apps. I went from idea to working product in just one day. What would have cost thousands in development was done instantly."
                            </blockquote>
                            <div>
                              <p className="font-bold">Sarah Johnson</p>
                              <p className="text-gray-500 text-sm">Founder, TechStart</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Demo/Preview Section */}
              <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={fadeInUp}
                    >
                      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 rounded-full">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium text-blue-800">See it in action</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Watch Your App <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">Come to Life</span>
                      </h2>
                      
                      <p className="text-lg text-gray-600 mb-8">
                        InitFlowAI doesn't just generate code—it builds complete, interactive web applications that are ready to use. See the magic happen in real-time.
                      </p>
                      
                      <ul className="space-y-4 mb-8">
                        {[
                          "Describe features in plain English",
                          "Watch as components and pages are generated",
                          "Make adjustments with simple instructions",
                          "Deploy your finished app instantly"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
                      >
                        Request Demo Access
                      </motion.button>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
                      <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                        <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="text-xs text-gray-500">initflow.ai/demo</div>
                        </div>
                        <div className="p-4">
                          <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm text-white mb-6">
                            <div className="text-green-400">> Create an e-commerce app with product listings and shopping cart</div>
                            <div className="text-blue-300 mt-2">Building your app... ⏳</div>
                            <div className="text-gray-400 mt-2">✓ Generated user interface</div>
                            <div className="text-gray-400">✓ Created product database</div>
                            <div className="text-gray-400">✓ Implemented shopping cart</div>
                            <div className="text-green-400 mt-2">✅ Your app is ready! Preview available at temp-url.initflow.app/shop</div>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg">
                            <div className="p-3 border-b border-gray-200">
                              <div className="flex justify-between items-center">
                                <div className="font-bold">ShopEasy</div>
                                <div className="flex gap-3">
                                  <div className="text-sm">Home</div>
                                  <div className="text-sm">Products</div>
                                  <div className="text-sm">Cart (3)</div>
                                </div>
                              </div>
                            </div>
                            <div className="p-4">
                              <div className="grid grid-cols-3 gap-4 mb-4">
                                {[1, 2, 3].map((item) => (
                                  <div key={item} className="border border-gray-200 rounded-lg p-3">
                                    <div className="bg-gray-200 w-full h-24 rounded-md mb-2"></div>
                                    <div className="font-medium">Product {item}</div>
                                    <div className="text-sm text-gray-600">$99.99</div>
                                    <button className="mt-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Add to Cart</button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

             
                  
                
                    
                   
                   

              {/* Waitlist CTA Section */}
              <section id="waitlist" className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-24">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

                {/* Decorative elements */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="text-white">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                          </span>
                          <span className="text-sm font-medium">Limited spots available</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                          Join the InitFlowAI Founder's Circle
                        </h2>
                        
                        <p className="text-xl text-blue-100 mb-8">
                          Be among the first to experience the future of no-code development. Get exclusive benefits and lock in our best pricing forever.
                        </p>
                        
                        <div className="flex items-center gap-4 mb-10">
                          <div className="flex -space-x-2">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className={`w-8 h-8 rounded-full border-2 border-blue-600 bg-blue-${500 - i*100}`}></div>
                            ))}
                          </div>
                          <div className="text-blue-100">
                            <span className="font-bold text-white">180+</span> people already joined
                          </div>
                        </div>
                      </div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                      >
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-white mb-6">Reserve Your Spot</h3>
                          
                          <form onSubmit={handleSubmit} className="space-y-5" aria-label="Waitlist signup form">
                            <div>
                              <label htmlFor="waitlist-email" className="block text-sm font-medium text-blue-100 mb-2">Email address</label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <svg className="h-5 w-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                                  placeholder="you@example.com"
                                  className={`w-full pl-10 pr-4 py-3 bg-white/5 text-white placeholder-blue-200/60 rounded-lg border ${emailError ? 'border-red-400' : 'border-white/20'} focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all`}
                                  required
                                  disabled={isSubmitting}
                                  aria-invalid={!!emailError}
                                  aria-describedby={emailError ? "email-error" : undefined}
                                />
                                {emailError && (
                                  <p id="email-error" className="mt-1 text-sm text-red-300">{emailError}</p>
                                )}
                              </div>
                            </div>
                            
                            <button
                              type="submit"
                              className="w-full bg-white text-blue-700 px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 disabled:opacity-70 flex items-center justify-center gap-2"
                              disabled={isSubmitting}
                              aria-label={isSubmitting ? "Submitting waitlist form" : "Join the waitlist"}
                            >
                              {isSubmitting ? (
                                <>
                                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Processing...
                                </>
                              ) : (
                                <>
                                  Join the Founder's Circle
                                  <ArrowRight className="ml-1 w-5 h-5" />
                                </>
                              )}
                            </button>
                          </form>
                          
                          {submitStatus === 'success' && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg"
                            >
                              <p className="text-green-100 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>You're on the list! We'll be in touch soon with exclusive access.</span>
                              </p>
                            </motion.div>
                          )}
                          
                          {submitStatus === 'error' && !emailError && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg"
                            >
                              <p className="text-red-100 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>Something went wrong. Please try again.</span>
                              </p>
                            </motion.div>
                          )}
                          
                          <div className="mt-6 text-center text-blue-200 text-sm">
                            By joining, you agree to our{" "}
                            <Link to="/terms-of-service" className="text-white underline hover:text-blue-100">Terms of Service</Link>
                            {" "}and{" "}
                            <Link to="/privacy-policy" className="text-white underline hover:text-blue-100">Privacy Policy</Link>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                  <div className="pt-16 pb-12 grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                      <Link to="/" className="inline-block mb-6">
                        <h3 className="text-2xl font-bold">
                          InitFlow<span className="text-blue-500">AI</span>
                        </h3>
                      </Link>
                      <p className="text-gray-400 max-w-md mb-6">
                        Transform your ideas into reality with InitFlowAI. The no-code platform that lets you build complete web applications just by describing what you want.
                      </p>
                      <div className="flex space-x-4">
                        {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
                          <a 
                            key={social}
                            href={`#${social}`} 
                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                          >
                            <span className="sr-only">{social}</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold mb-6">Product</h4>
                      <ul className="space-y-3">
                        {['Features', 'How it Works', 'Pricing', 'Demo'].map((item) => (
                          <li key={item}>
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold mb-6">Company</h4>
                      <ul className="space-y-3">
                        {[
                          { name: 'About Us', link: '#about' },
                          { name: 'Blog', link: '#blog' },
                          { name: 'Contact', link: '#contact' },
                          { name: 'Privacy Policy', link: '/privacy-policy' },
                          { name: 'Terms of Service', link: '/terms-of-service' }
                        ].map((item) => (
                          <li key={item.name}>
                            <Link to={item.link} className="text-gray-400 hover:text-blue-400 transition-colors">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-6 pb-10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500">
                      © 2025 InitFlowAI. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                        Status
                      </a>
                      <span className="mx-2 text-gray-600">•</span>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                        Support
                      </a>
                    </div>
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
