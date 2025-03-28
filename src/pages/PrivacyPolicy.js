import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: March 27, 2025</p>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Account information (e.g., name, email, payment details)</li>
            <li>Usage data (e.g., tasks performed, workflows created)</li>
            <li>Device and browser information (e.g., IP address, browser type)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">How We Use Information</h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>To provide and improve our services</li>
            <li>To process payments and manage subscriptions</li>
            <li>To communicate with you about updates and support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Data Security</h2>
          <p className="text-gray-600">
            We implement industry-standard security measures to protect your data, including encryption and secure access controls.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
          <p className="text-gray-600">
            We may use third-party services for payment processing and analytics, which are governed by their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">User Rights</h2>
          <p className="text-gray-600">
            You have the right to access, update, or delete your personal information at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Cookies and Tracking</h2>
          <p className="text-gray-600">
            We use cookies to enhance your experience and analyze platform usage. You can manage cookie preferences in your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
          <p className="text-gray-600">
            We retain your data only as long as necessary to provide our services or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Policy Updates</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy periodically. Continued use of the platform constitutes acceptance of the revised policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
