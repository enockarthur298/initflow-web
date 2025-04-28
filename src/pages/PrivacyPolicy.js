import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>InitFlow Privacy Policy</h1>
      <p><strong>Last updated:</strong> April 28, 2025</p>

      <h2>1. Introduction</h2>
      <p>
        InitFlow ("we", "our", or "us") operates an AI-powered app building platform that enables users to create 
        applications without coding. This Privacy Policy explains how we collect, use, and protect your 
        information when you use our services.
      </p>

      <h2>2. Information Collection</h2>
      <ul>
        <li><strong>Account Information:</strong> Name, email, payment details for subscription management and waitlist registration.</li>
        <li><strong>Usage Data:</strong> App descriptions, configuration details, database structures, and platform interactions.</li>
        <li><strong>Technical Data:</strong> IP address, device type, browser information for service optimization.</li>
        <li><strong>User-Generated Content:</strong> Any content you create or upload while using our platform.</li>
      </ul>

      <h2>3. Use of Information</h2>
      <ul>
        <li>Provide and improve our AI app generation services.</li>
        <li>Process payments and manage subscriptions.</li>
        <li>Maintain waitlist records and provide exclusive offers.</li>
        <li>Enhance platform security and prevent fraud.</li>
        <li>Communicate important service updates and promotional offers.</li>
      </ul>

      <h2>4. Data Protection</h2>
      <p>
        InitFlow implements enterprise-grade security measures including: encryption (AES-256), regular security audits,
        strict access controls, and secure user authentication systems. 
        Your app designs, database structures, and generated applications are processed securely.
      </p>

      <h2>5. User Rights</h2>
      <p>
        You may request access, correction, or deletion of your personal data by contacting 
        <a href="mailto:initflowinfo@gmail.com"> initflowinfo@gmail.com</a>. 
        Note: Some data may be retained for legal compliance or to maintain service functionality.
      </p>

      <h2>6. Policy Updates</h2>
      <p>
        We may update this policy periodically. Continued use of InitFlow after changes constitutes acceptance 
        of the revised policy. Significant changes will be communicated via email or in-app notifications.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
