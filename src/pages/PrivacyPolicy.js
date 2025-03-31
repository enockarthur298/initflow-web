import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">InitFlow Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: March 31, 2025</p>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            InitFlow ("we", "our", or "us") operates the AI-powered firmware programming platform.
            This Privacy Policy explains how we collect, use, and protect your information when you use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Information Collection</h2>
          <p className="text-gray-600 mb-2">We collect:</p>
          <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
            <li><strong>Account Information:</strong> Name, email, payment details for subscription management</li>
            <li><strong>Usage Data:</strong> Firmware descriptions, generated code, and platform interactions</li>
            <li><strong>Technical Data:</strong> IP address, device type, browser information for analytics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Use of Information</h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2 mb-4">
            <li>Provide and improve our AI firmware generation services</li>
            <li>Process payments and manage subscriptions</li>
            <li>Enhance platform security and prevent fraud</li>
            <li>Communicate important service updates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Data Protection</h2>
          <p className="text-gray-600 mb-4">
            InitFlow implements enterprise-grade security measures including:
            encryption (AES-256), regular security audits, and strict access controls.
            Your firmware descriptions and generated code are processed securely.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. User Rights</h2>
          <p className="text-gray-600 mb-4">
            You may request access, correction, or deletion of your personal data by contacting
            <a href="mailto:initflowinfo@gmail.com" className="text-blue-600 hover:underline">initflowinfo@gmail.com</a>.
            Note: Some data may be retained for legal compliance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Policy Updates</h2>
          <p className="text-gray-600">
            We may update this policy periodically. Continued use of InitFlow after changes constitutes acceptance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
