import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">InitFlow Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: March 31, 2025</p>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing or using InitFlow's AI-powered firmware programming platform ("Service"),
            you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all the Terms,
            you may not use our Service.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Service Description</h2>
          <p className="text-gray-600">
            InitFlow provides an AI-assisted platform that converts natural language descriptions
            into functional firmware code for microcontrollers including but not limited to
            Raspberry Pi Pico, ESP32, and Arduino devices.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Subscription Plans</h2>
          <p className="text-gray-600">
            InitFlow operates on a monthly subscription basis. Fees are billed in advance and are non-refundable.
            You may cancel your subscription at any time, and access will continue until the end of the billing cycle.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
          <p className="text-gray-600">
            All content and technology comprising the InitFlow platform, including AI models and interfaces,
            are the exclusive property of InitFlow. Generated firmware code may be used freely for personal
            and commercial projects.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p className="text-gray-600">
            InitFlow shall not be liable for any damages resulting from the use of generated firmware code.
            Users are responsible for testing and verifying all code before deployment to physical devices.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Contact Information</h2>
          <p className="text-gray-600">
            For questions about these Terms, please contact InitFlow at:
            <a href="mailto:initflowinfo@gmail.com" className="text-blue-600 hover:underline">initflowinfo@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
