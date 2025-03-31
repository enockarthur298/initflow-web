import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Pricing from './pages/Pricing';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  //const navigate = useNavigate();

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
                      <motion.p
                        variants={fadeInUp}
                        className="text-xl text-gray-100 mb-8"
                      >
                        Describe your firmware needs in plain English and get working code for
                        Raspberry Pi Pico, ESP32, Arduino and more - no coding experience required.
                      </motion.p>
                      <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <button
                          className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
                        >
                          Describe Your Idea
                        </button>
                        <button
                          className="bg-blue-700/50 hover:bg-blue-700/70 text-white border border-white/30 px-6 py-3 rounded-md font-medium transition-colors"
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
                          <div className="ml-6 flex space-x-4">
                            <div className="px-3 py-1 bg-blue-600 rounded text-white text-sm font-medium">
                              Device Simulator
                            </div>
                            <div className="px-3 py-1 rounded text-gray-500 text-sm">Examples</div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-4">
                            <div className="bg-gray-100 p-3 rounded-lg flex items-center mb-4">
                              <input 
                                type="text" 
                                placeholder="Describe your device's behavior..." 
                                className="w-full bg-transparent border-none focus:outline-none text-gray-800"
                                defaultValue="Make my lights blink when someone approaches"
                              />
                              <button className="ml-2 bg-blue-600 text-white p-2 rounded-full">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
                                <p>LED will blink when motion is detected</p>
                                <div className="flex items-center mt-2">
                                  <button className="text-blue-600 text-xs">Edit behavior</button>
                                  <span className="mx-2 text-gray-400">•</span>
                                  <button className="text-blue-600 text-xs">Test sensor</button>
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
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-orange-500 font-medium flex items-center"
                      >
                        Try it yourself
                        <svg
                          className="w-5 h-5 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.button>
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
                            {
                              step: 4,
                              title: 'Share',
                              description: 'Send a single link so others can see and interact with your creation.',
                              icon: '🔗'
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