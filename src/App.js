import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Inside the App function:


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
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Sign up
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-20">
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
                Your AI workforce, <br /> ready to transform <br /> your business
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-300 mb-8"
              >
                Join thousands of businesses using InitFlow to automate workflows,
                reduce costs, and accelerate growth with autonomous virtual workers.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Download for Windows
                </button>
                
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                <div className="bg-gray-800 p-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-6 flex space-x-4">
                    <div className="px-3 py-1 bg-gray-700 rounded text-white text-sm font-medium">
                      Workers
                    </div>
                    <div className="px-3 py-1 rounded text-gray-400 text-sm">Tasks</div>
                    <div className="px-3 py-1 rounded text-gray-400 text-sm">Analytics</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      { title: 'Data Assistant', task: 'Processing data entries', status: 'active' },
                      { title: 'Customer Service', task: 'Handling inquiries', status: 'active' },
                      { title: 'Scheduler', task: 'Managing appointments', status: 'idle' },
                    ].map((worker, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="bg-gray-800 p-4 rounded-lg flex items-center"
                      >
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {worker.title[0]}
                        </div>
                        <div className="ml-4 flex-grow">
                          <h4 className="text-white font-medium">{worker.title}</h4>
                          <p className="text-gray-400 text-sm">{worker.task}</p>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            worker.status === 'active'
                              ? 'bg-green-500/20 text-green-500'
                              : 'bg-yellow-500/20 text-yellow-500'
                          }`}
                        >
                          {worker.status === 'active' ? 'Active' : 'Idle'}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
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
            Preview App Demo
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video Placeholder */}
            <motion.div variants={fadeInUp} className="relative">
              <img
                src="https://via.placeholder.com/600x400"
                alt="App Demo"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/30 p-4 rounded-full">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </motion.div>
            {/* Key Feature Highlights */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6">Key Features Demonstrated</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Intuitive Dashboard",
                    description:
                      "Manage all your virtual workers from a single, easy-to-use interface.",
                  },
                  {
                    title: "Task Automation",
                    description:
                      "See how to automate repetitive tasks with just a few clicks.",
                  },
                  {
                    title: "Real-time Analytics",
                    description: "Monitor performance and productivity in real-time.",
                  },
                  {
                    title: "Seamless Integration",
                    description:
                      "Integrate with your existing tools and workflows effortlessly.",
                  },
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
              Where automation and <br /> intelligence become one
            </h2>
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: '24/7 Operation',
                description:
                  'Virtual workers that never sleep, ensuring round-the-clock productivity without overtime costs.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                ),
                title: 'Adaptive Learning',
                description:
                  'Advanced AI that learns your business processes and continually improves over time.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                ),
                title: 'Process Automation',
                description:
                  'Seamlessly automate repetitive tasks across customer service, data entry, and admin workflows.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: 'Human-like Accuracy',
                description:
                  'AI workers that deliver consistent, error-free results across all their assigned tasks.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6">
                A true autonomy platform, not just another automation tool
              </h2>
              <p className="text-gray-600 mb-6">
                Deploy fully autonomous virtual workers capable of understanding context, making
                decisions, and executing complete workflows without constant supervision.
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-blue-600 font-medium flex items-center"
              >
                Learn more
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
              <div className="bg-gray-50 p-8 rounded-lg">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {[
                    {
                      step: 1,
                      title: 'Task Assignment',
                      description: 'AI receives and understands the task.',
                    },
                    {
                      step: 2,
                      title: 'Decision Making',
                      description: 'AI analyzes data and makes informed decisions.',
                    },
                    {
                      step: 3,
                      title: 'Execution',
                      description: 'AI performs the necessary actions.',
                    },
                    {
                      step: 4,
                      title: 'Completion',
                      description: 'AI verifies and completes the task.',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center mb-4"
                    >
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                        {item.step}
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
                Transforming businesses with autonomous virtual workers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#solutions" className="text-gray-400 hover:text-blue-600 transition-colors">Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Pricing</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="text-gray-400 hover:text-blue-600 transition-colors">Terms of Service</a></li>
                <li><a href="/cookie-policy" className="text-gray-400 hover:text-blue-600 transition-colors">Cookie Policy</a></li>
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
}

export default App;