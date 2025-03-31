import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Pricing from './pages/Pricing';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [inputText, setInputText] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
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
              <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'backdrop-blur bg-white/20 shadow-sm' : 'backdrop-blur bg-white/5'} py-4`}>
                <div className="container mx-auto px-4">
                  <div className="flex justify-between items-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center"
                    >
                      <h1 className="text-2xl font-bold">
                        InitFlow<span className="text-blue-600">AI</span>
                      </h1>
                    </motion.div>

                    <ul className="hidden md:flex space-x-8">
                      {['Features', 'Pricing', 'Enterprise'].map((item) => (
                        <motion.li
                          key={item}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to={item.toLowerCase() === 'pricing' ? '/pricing' : `#${item.toLowerCase()}`}
                            className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
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
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={fadeInUp}
                      className="max-w-lg"
                    >
                      <motion.h1
                        variants={fadeInUp}
                        className="text-5xl font-bold leading-tight mb-6"
                      >
                        Program Microcontrollers
                        <br />
                        With Just Words
                      </motion.h1>
                      <motion.p variants={fadeInUp} className="text-lg text-white/90 mb-8">
                        Describe your firmware needs in plain English and get working code for
                        Raspberry Pi Pico, ESP32, Arduino and more - no coding experience required.
                      </motion.p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative"
                    >
                      <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                        <div className="bg-gray-100 p-3 flex items-center">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="ml-6 flex space-x-4">
                            <div className="px-3 py-1 bg-blue-600 rounded text-white text-sm font-medium">
                              InitFlow AI Assistant
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-4">
                            <div className="bg-gray-100 p-3 rounded-lg flex items-center mb-4">
                              <input 
                                type="text" 
                                placeholder="Tell InitFlow what you want your device to do..." 
                                className="w-full bg-transparent border-none focus:outline-none text-gray-800"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                              />
                              <button className="ml-2 bg-blue-600 text-white p-2 rounded-full">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="bg-gray-100 p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-3">
                                <h4 className="font-medium text-gray-800">Virtual Device Simulator</h4>
                                <span className="px-2 py-1 bg-green-500/20 text-green-600 text-xs rounded-full">Running</span>
                              </div>
                              <div className="flex items-center justify-center bg-gray-200 rounded-lg p-6">
                                <div className="relative">
                                  {/* LED Light Simulation */}
                                  <div className="w-16 h-16 bg-yellow-400 rounded-full shadow-lg animate-pulse"></div>
                                  {/* Motion Sensor */}
                                  <div className="absolute -right-4 -top-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h.01M17 10h.01M20 10h.01M14 14h.01M17 14h.01M20 14h.01M8 10h.01M11 10h.01M8 14h.01M11 14h.01" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 text-sm text-gray-600">
                                <p>Behavior generated by InitFlow AI under our Terms of Service</p>
                                <div className="flex items-center mt-2">
                                  <button className="text-blue-600 text-xs">Edit behavior</button>
                                  <span className="mx-2 text-gray-400">•</span>
                                  <button className="text-blue-600 text-xs">View Terms</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
                  <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
                </div>
              </section>

              {/* Preview App Demo Section */}
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="py-20 bg-white"
              >
                <div className="container mx-auto px-6">
                  <motion.h2
                    variants={fadeInUp}
                    className="text-3xl font-bold text-center mb-12"
                  >
                    From Imagination to Reality in Seconds
                  </motion.h2>
                  <div className="grid md:grid-cols-1 gap-12 items-center justify-center">
                    <motion.div variants={fadeInUp} className="relative max-w-2xl mx-auto">
                      <div className="rounded-lg shadow-lg overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
                        <img
                          src="https://via.placeholder.com/800x450"
                          alt="Firmware programming demo"
                          className="w-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="bg-blue-600/80 p-4 rounded-full hover:bg-blue-600 transition-colors">
                            <svg
                              className="w-12 h-12 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>

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
                      You imagine, <br /> we handle the magic
                    </h2>
                    <p className="text-gray-600">
                      No coding required. Just describe what you want in plain English.
                    </p>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                        title: 'Hardware-Aware Code Generation',
                        description:
                          'Generates optimized firmware code tailored for Raspberry Pi Pico, ESP32, Arduino and other popular microcontrollers.',
                      },
                      {
                        icon: (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                            />
                          </svg>
                        ),
                        title: 'Sensor & Peripheral Support',
                        description:
                          'Works with common sensors (DHT, PIR, ultrasonic) and peripherals (LEDs, relays, displays) out of the box.',
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
                        title: 'Virtual Hardware Testing',
                        description:
                          'Test your firmware on virtual hardware before flashing to physical devices.',
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
                        title: 'One-Click Deployment',
                        description:
                          'Download ready-to-flash firmware binaries or use our web-based flasher tool.',
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
                    Who Is InitFlow For?
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
                        icon: "👩‍💻",
                        title: "Makers & Hobbyists",
                        description: "Bring your IoT ideas to life without deep coding knowledge"
                      },
                      {
                        icon: "🏭",
                        title: "Prototypers",
                        description: "Rapidly prototype hardware concepts before investing in custom development"
                      },
                      {
                        icon: "🏫",
                        title: "Educators",
                        description: "Teach electronics and IoT concepts without getting bogged down in complex coding"
                      }
                    ].map((audience, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-gray-50 p-6 rounded-lg text-center"
                      >
                        <div className="text-4xl mb-4">{audience.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                        <p className="text-gray-600">{audience.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>

              {/* Workflow Section */}
              <section id="solutions" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={fadeInUp}
                    >
                      <h2 className="text-3xl font-bold mb-6">
                        From Words to Actions, <span className="text-blue-600">Instantly</span>
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Simply describe what you want in everyday language, and watch as InitFlow translates your words into device actions - no coding required. The magic happens behind the scenes, letting you focus on ideas, not implementation.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                    >
                      <div className="bg-white p-8 rounded-lg shadow-md">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={staggerContainer}
                        >
                          {[
                            {
                              step: 1,
                              title: 'Describe',
                              description: 'Tell InitFlow what you want your device to do in plain English.',
                              icon: '💬'
                            },
                            {
                              step: 2,
                              title: 'Watch',
                              description: 'See your instructions translated into device actions in real-time.',
                              icon: '👁️'
                            },
                            {
                              step: 3,
                              title: 'Refine',
                              description: 'Adjust through simple conversation - "make it faster" or "add a delay".',
                              icon: '✏️'
                            },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              variants={fadeInUp}
                              className="flex items-center mb-6"
                            >
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-400 text-white rounded-full flex items-center justify-center mr-4 shadow-md">
                                <span className="text-xl">{item.icon}</span>
                              </div>
                              <div>
                                <h4 className="text-lg font-bold">{item.title}</h4>
                                <p className="text-gray-600">{item.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
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
                        Join the InitFlow Waitlist
                      </h2>
                      <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Be the first to access our AI-powered firmware programming platform
                      </p>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-lg p-1 rounded-xl shadow-2xl border border-white/10 max-w-md mx-auto"
                      >
                        <form onSubmit={handleSubmit} className="space-y-4 p-7">
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              className="w-full pl-10 pr-4 py-3 bg-white/5 text-white placeholder-blue-200/60 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                          
                          <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 flex items-center justify-center gap-2"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </>
                            ) : (
                              <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
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
                      <h3 className="text-xl font-bold mb-4">InitFlow</h3>
                      <p className="text-gray-400">
                        Making technology work for you, through the power of words.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                      <ul className="space-y-2">
                        <li><a href="#features" className="text-gray-400 hover:text-blue-600 transition-colors">Features</a></li>
                        <li><a href="#solutions" className="text-gray-400 hover:text-blue-600 transition-colors">Solutions</a></li>
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
          }
        />
      </Routes>
    </Router>
  );
}

export default App;