import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: March 27, 2025</p>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing or using our platform, you agree to these Terms of Service.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Subscription Plans</h2>
          <p className="text-gray-600">
            Our platform operates on a monthly subscription basis. Fees are billed in advance and are non-refundable.
          </p>
          <p className="text-gray-600">
            You may cancel your subscription at any time, and access will continue until the end of the billing cycle.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Refund Policy</h2>
          <p className="text-gray-600">
            Refunds are only issued in cases of technical issues on our end that prevent you from using the platform as intended. To request a refund, contact us at <a href="mailto:initflowinfo@gmail.com" className="text-blue-600 hover:underline">initflowinfo@gmail.com</a> within 7 days of the issue occurring.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
          <p className="text-gray-600">
            You are responsible for maintaining the accuracy of your account information.
          </p>
          <p className="text-gray-600">
            You agree not to use the platform for any unlawful or unauthorized purposes, including but not limited to hacking, data scraping, or distributing malicious software.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Support</h2>
          <p className="text-gray-600">
            For assistance, contact us at <a href="mailto:initflowinfo@gmail.com" className="text-blue-600 hover:underline">initflowinfo@gmail.com</a>. We aim to respond to all inquiries within 24-48 hours.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
          <p className="text-gray-600">
            We are not responsible for any indirect, incidental, special, or consequential damages that may arise from your use of the platform.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Termination</h2>
          <p className="text-gray-600">
            We reserve the right to suspend or terminate your account at any time, with notice, for violations of these terms or any misuse of the platform.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Changes to Terms</h2>
          <p className="text-gray-600">
            We may update these Terms of Service from time to time. Continued use of the platform after such changes constitutes your acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
