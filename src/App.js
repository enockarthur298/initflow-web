import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Pricing from './pages/Pricing';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [deviceCommand, setDeviceCommand] = useState('');
  const [currentSimulation, setCurrentSimulation] = useState({
    title: 'Make my lights blink when someone approaches',
    description: 'LED lights + motion sensor',
    active: true
  });
  
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

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (deviceCommand.trim()) {
      setCurrentSimulation({
        title: deviceCommand,
        description: 'Virtual device simulation',
        active: true
      });
      setDeviceCommand('');
    }
  };

  // Example gallery items
  const exampleGallery = [
    {
      title: "Make my lights blink when someone approaches",
      description: "LED lights + motion sensor",
      icon: "💡"
    },
    {
      title: "Notify me when mail arrives",
      description: "Mailbox sensor notification",
      icon: "📬"
    },
    {
      title: "Water plants every morning",
      description: "Self-watering garden system",
      icon: "🌱"
    },
    {
      title: "Turn on fan when room gets too hot",
      description: "Temperature-controlled fan",
      icon: "🌡️"
    }
  ];

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
              <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'backdrop-blur bg-white/90 shadow-sm' : 'backdrop-blur bg-white/5'} py-4`}>
                <div className="container mx-auto px-4">
                  <div className="flex justify-between items-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center"
                    >
                      <h1 className="text-2xl font-bold">
                        Init<span className="text-orange-500">Flow</span>
                      </h1>
                    </motion.div>

                    <ul className="hidden md:flex space-x-8">
                      {['Features', 'Examples', 'Pricing'].map((item) => (
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
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
                      >
                        Try It Free
                      </motion.button>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Hero Section */}
              <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-32 pb-20">
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
                        className="text-6xl font-bold leading-tight mb-6"
                      >
                        Tell it. <br />
                        <span className="text-orange-400">Watch it work.</span>
                      </motion.h1>
                      <motion.p
                        variants={fadeInUp}
                        className="text-xl text-blue-100 mb-8"
                      >
                        Describe what you want your devices to do in plain English, 
                        and see it happen instantly. No coding required.
                      </motion.p>
                      <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <a 
                          href="#try-it"
                          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
                        >
                          Describe Your Idea
                          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </a>
                        <button
                          className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-md font-medium transition-colors"
                        >
                          See It Work Free
                        </button>
                      </motion.div>
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
                          <div className="ml-6 flex-1 text-center">
                            <div className="text-gray-700 text-sm font-medium">
                              Device Simulator
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h4 className="text-blue-800 font-medium mb-2">Current Command:</h4>
                              <p className="text-gray-700 font-medium">{currentSimulation.title}</p>
                              <div className="mt-3 text-sm text-gray-500">{currentSimulation.description}</div>
                            </div>
                            
                            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center min-h-[200px]">
                              <div className="text-center">
                                <div className="relative inline-block">
                                  {/* Simulated LED light */}
                                  <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-4 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-yellow-400 ${currentSimulation.active ? 'animate-pulse' : ''}`}></div>
                                  </div>
                                  {/* Simulated motion sensor */}
                                  <div className="w-8 h-8 rounded-full bg-blue-500 absolute -right-2 -top-2 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  </div>
                                </div>
                                <p className="text-gray-700 mt-4">Motion detected! Lights blinking.</p>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <h4 className="text-gray-700 font-medium mb-2">Try a different command:</h4>
                              <form onSubmit={handleCommandSubmit} className="flex">
                                <input
                                  type="text"
                                  value={deviceCommand}
                                  onChange={(e) => setDeviceCommand(e.target.value)}
                                  placeholder="Describe your device's behavior..."
                                  className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button 
                                  type="submit"
                                  className="bg-orange-500 text-white p-3 rounded-r-md hover:bg-orange-600 transition-colors"
                                >
                                  Try It
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
                  <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
                </div>
              </section>

              {/* Example Gallery Section */}
              <section id="examples" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-3xl font-bold text-center mb-4"
                  >
                    Example Gallery
                  </motion.h2>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
                  >
                    Browse through these examples to see how InitFlow turns simple descriptions into working device behaviors.
                  </motion.p>
                  
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                  >
                    {exampleGallery.map((example, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 cursor-pointer"
                        onClick={() => setCurrentSimulation({
                          title: example.title,
                          description: example.description,
                          active: true
                        })}
                      >
                        <div className="text-4xl mb-4">{example.icon}</div>
                        <h3 className="text-lg font-bold mb-2 text-gray-800">{example.title}</h3>
                        <p className="text-gray-600">{example.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>

              {/* Try It Section */}
              <section id="try-it" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                    >
                      <h2 className="text-3xl font-bold mb-6">
                        You imagine, we handle the magic
                      </h2>
                      <p className="text-gray-600 mb-6">
                        InitFlow turns everyday language into device actions instantly. No coding required.
                        Just describe what you want your device to do, and watch it happen.
                      </p>
                      
                      <ul className="space-y-4 mb-8">
                        {[
                          {
                            title: "Turn everyday language into device actions",
                            description: "Just describe what you want in plain English"
                          },
                          {
                            title: "Fix mistakes through conversation",
                            description: "Simply say 'Make it faster' or 'Change the color'"
                          },
                          {
                            title: "Test ideas on realistic virtual hardware",
                            description: "See your ideas work before building physical devices"
                          },
                          {
                            title: "Share working projects with one link",
                            description: "Let others interact with your creations instantly"
                          }
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-orange-500 rounded-full p-1 mt-1 mr-3">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
                              <p className="text-gray-600">{feature.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                      >
                        See It Work Free
                      </motion.button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                    >
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4 text-center">Mobile Demo</h3>
                        <div className="relative mx-auto w-[280px] h-[560px] bg-gray-900 rounded-[36px] p-4 shadow-xl overflow-hidden">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl"></div>
                          <div className="bg-white h-full w-full rounded-[24px] overflow-hidden flex flex-col">
                            <div className="bg-blue-600 text-white p-4">
                              <h4 className="text-lg font-bold">InitFlow Mobile</h4>
                            </div>
                            <div className="flex-1 p-4 overflow-y-auto">
                              <div className="space-y-4">
                                <div className="bg-gray-100 rounded-lg p-3">
                                  <p className="text-sm">Describe your device behavior:</p>
                                  <p className="font-medium mt-1">Water plants every morning</p>
                                </div>
                                
                                <div className="bg-blue-50 rounded-lg p-3">
                                  <p className="text-sm text-blue-700">InitFlow is creating your device...</p>
                                </div>
                                
                                <div className="bg-green-50 rounded-lg p-3">
                                  <p className="text-sm text-green-700">Device created!</p>
                                  <div className="mt-2 bg-white rounded p-2 flex items-center">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                      <span className="text-lg">🌱</span>
                                    </div>
                                    <div>
                                      <p className="font-medium">Plant Watering System</p>
                                      <p className="text-xs text-gray-500">Waters daily at 7:00 AM</p>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="bg-gray-100 rounded-lg p-3">
                                  <p className="text-sm">Make it water twice a day</p>
                                </div>
                                
                                <div className="bg-blue-50 rounded-lg p-3">
                                  <p className="text-sm text-blue-700">Updating your device...</p>
                                </div>
                                
                                <div className="bg-green-50 rounded-lg p-3">
                                  <p className="text-sm text-green-700">Device updated!</p>
                                  <div className="mt-2 bg-white rounded p-2">
                                    <p className="font-medium">Plant Watering System</p>
                                    <p className="text-xs text-gray-500">Waters daily at 7:00 AM and 6:00 PM</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border-t">
                              <div className="flex">
                                <input 
                                  type="text" 
                                  placeholder="Type your command..." 
                                  className="flex-1 p-2 border rounded-l-lg focus:outline-none text-sm"
                                />
                                <button className="bg-orange-500 text-white p-2 rounded-r-lg">
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-center text-gray-500 mt-4 text-sm">30-second creation cycle</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* For Who Section */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-3xl font-bold text-center mb-4"
                  >
                    Who Is InitFlow For?
                  </motion.h2>
                  
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8 mt-12"
                  >
                    {[
                      {
                        icon: "👩‍🏫",
                        title: "Teachers",
                        description: "Make technology accessible to students without the complexity of coding. Create interactive demonstrations in seconds."
                      },
                      {
                        icon: "🛠️",
                        title: "Makers",
                        description: "Focus on results, not code. Quickly prototype and test ideas before building physical devices."
                      },
                      {
                        icon: "🔰",
                        title: "Beginners",
                        description: "Start creating smart devices without the intimidation of programming languages. Learn as you go with natural language."
                      }
                    ].map((persona, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-gray-50 p-8 rounded-lg text-center"
                      >
                        <div className="text-4xl mb-4">{persona.icon}</div>
                        <h3 className="text-xl font-bold mb-3">{persona.title}</h3>
                        <p className="text-gray-600">{persona.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <div className="container mx-auto px-6 text-center">
                  <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-3xl font-bold mb-6"
                  >
                    Ready to transform how you create smart devices?
                  </motion.h2>
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-xl mb-8 max-w-2xl mx-auto"
                  >
                    Start creating with InitFlow today. No coding skills required.
                  </motion.p>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
                      Describe Your Idea
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
                      See It Work Free
                    </button>
                  </motion.div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">
                        Init<span className="text-orange-500">Flow</span>
                      </h3>
                      <p className="text-gray-400">
                        Tell it. Watch it work.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                      <ul className="space-y-2">
                        <li><a href="#examples" className="text-gray-400 hover:text-orange-500 transition-colors">Examples</a></li>
                        <li><a href="#try-it" className="text-gray-400 hover:text-orange-500 transition-colors">Try It</a></li>
                        <li><Link to="/pricing" className="text-gray-400 hover:text-orange-500 transition-colors">Pricing</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-4">Legal</h4>
                      <ul className="space-y-2">
                        <li><Link to="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</Link></li>
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