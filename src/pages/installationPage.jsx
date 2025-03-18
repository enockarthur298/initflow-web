import React from 'react';
import { Link } from 'react-router-dom';

function InstallationPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Installation Guide</h1>
      <p className="text-lg text-gray-700 mb-8">
        Follow these steps to install InitFlow AI on Windows:
      </p>
      
      <ul className="list-disc text-gray-700 space-y-4 mb-8">
        <li>Click the download link to get the installer.</li>
        <li>Run the installer and follow the on-screen instructions.</li>
        <li>Launch InitFlow AI after installation completes.</li>
      </ul>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default InstallationPage;