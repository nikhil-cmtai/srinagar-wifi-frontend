import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p className="leading-relaxed">
              Srinagar WiFi Access ("the Service") is provided to passengers and visitors at this Airport under the guidance of the Airports Authority of India (AAI) to offer secure and seamless internet connectivity. By connecting to and using this Service, you agree to comply fully with this Privacy Policy and the Terms and Conditions outlined herein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="leading-relaxed mb-3">
              When you connect to the WiFi network, certain technical and personal data may be automatically collected, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Device Information:</strong> MAC address, IP address, operating system and browser type</li>
              <li><strong>Connection Data:</strong> Connection timestamps, session duration, and data usage</li>
              <li><strong>Authentication Details:</strong> Your mobile number or email ID (used for OTP verification)</li>
              <li><strong>Network Activity:</strong> Websites accessed and network traffic metadata (for security and content filtering purposes)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">
              This information is collected to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensure proper functioning of the network</li>
              <li>Enhance user experience</li>
              <li>Maintain service quality</li>
              <li>Ensure network security</li>
              <li>Comply with applicable laws and security regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Retention</h2>
            <p className="leading-relaxed">
              Data logs may be retained for a specific duration as required by Government of India regulations, security agencies, or AAI policy. This retention is necessary for security purposes, compliance with legal obligations, and network monitoring.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Information Sharing and Disclosure</h2>
            <p className="leading-relaxed mb-3">
              Your data is stored securely and will not be shared, sold, or used for commercial purposes beyond those required for service delivery and analytics.
            </p>
            <p className="leading-relaxed">
              However, information may be shared with authorised law enforcement or government agencies when required by law, court order, or in compliance with Government of India regulations and AAI security policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Security</h2>
            <p className="leading-relaxed mb-3">
              Reasonable technical and organisational safeguards are implemented to protect your data against unauthorised access or misuse.
            </p>
            <p className="leading-relaxed">
              However, users are reminded that no public WiFi network can guarantee absolute security. By using this Service, you acknowledge and accept this inherent risk. We encourage you to take appropriate precautions such as using personal firewalls and avoiding access to sensitive financial or personal accounts over public WiFi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact Information</h2>
            <p className="leading-relaxed mb-3">
              Users may contact the WiFi Administrator or Airport IT Department for clarifications, grievances, or requests related to data handling.
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Srinagar Airport</p>
              <p className="text-sm text-gray-600">WiFi Administrator / Airport IT Department</p>
              <p className="text-sm text-gray-600 mt-2">Information Desk</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Related Terms</h2>
            <p className="leading-relaxed">
              This Privacy Policy should be read in conjunction with our{' '}
              <Link href="/terms" className="text-blue-600 hover:underline font-medium">
                Terms and Conditions
              </Link>
              {' '}. By using the Service, you acknowledge that you have read, understood, and agree to both documents.
            </p>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
          <Link 
            href="/terms"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View Terms and Conditions
          </Link>
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;