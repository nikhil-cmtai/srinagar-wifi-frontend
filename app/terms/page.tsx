import React from 'react';
import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
          <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              Sringr WiFi Access ("the Service") is provided to passengers and visitors at this Airport under the guidance of the Airports Authority of India (AAI) to offer secure and seamless internet connectivity. By connecting to and using this Service, you agree to comply fully with these Terms and Conditions and the Privacy Policy outlined herein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Acceptable Use Policy</h2>
            <p className="leading-relaxed mb-3">
              You agree to use the Sringr WiFi network only for lawful purposes and in compliance with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indian laws and regulations</li>
              <li>AAI guidelines and policies</li>
              <li>Airport regulations</li>
              <li>These Terms and Conditions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Prohibited Activities</h2>
            <p className="leading-relaxed mb-3">
              You must NOT engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempt to bypass network restrictions or security measures</li>
              <li>Engage in hacking, unauthorized access, or network intrusion attempts</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Access, download, or share offensive, defamatory, or illegal content</li>
              <li>Download or share copyrighted material without permission</li>
              <li>Spread harmful code or engage in cyber-attacks</li>
              <li>Conduct bulk data transfers that degrade service quality for other users</li>
              <li>Use the network for any activities that violate applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Consequences of Violation</h2>
            <p className="leading-relaxed">
              Any violation of these Terms may result in:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Immediate suspension of access</li>
              <li>Permanent termination of access</li>
              <li>Reporting to appropriate authorities including law enforcement agencies</li>
              <li>Legal action as per applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Service Warranties</h2>
            <p className="leading-relaxed">
              The Service is provided on an "as-is" and "as-available" basis without any warranties, express or implied, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Uninterrupted connectivity</li>
              <li>Specific data speed or bandwidth</li>
              <li>Fitness for a particular purpose</li>
              <li>Error-free operation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p className="leading-relaxed mb-3">
              Sringr, AAI, or their service partners shall not be liable for any loss, damage, or data compromise resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use of or inability to use the Service</li>
              <li>Unauthorized access to your device or data</li>
              <li>Network interruptions or connectivity issues</li>
              <li>Security breaches or data compromises</li>
              <li>Any third-party actions or content accessed through the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. User Security Responsibilities</h2>
            <p className="leading-relaxed mb-3">
              Users are responsible for the security of their devices and are encouraged to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use personal firewalls and antivirus software</li>
              <li>Avoid accessing sensitive financial or personal accounts over public WiFi</li>
              <li>Keep their devices updated with latest security patches</li>
              <li>Use secure connections (HTTPS) when possible</li>
              <li>Not share personal credentials or sensitive information while using public WiFi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Network Monitoring and Modifications</h2>
            <p className="leading-relaxed mb-3">
              Sringr and AAI reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monitor network activity for maintaining operational integrity</li>
              <li>Modify, suspend, or discontinue the Service at any time without prior notice</li>
              <li>Block or restrict access to certain websites or services for security or policy compliance</li>
              <li>Implement network management practices to ensure fair usage</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Continued use of the WiFi network constitutes acceptance of these Terms and any future revisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Privacy and Data Collection</h2>
            <p className="leading-relaxed">
              Your use of the Service is subject to our{' '}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">
                Privacy Policy
              </Link>
              {' '}. By using the Service, you consent to the collection and use of your information as described in our Privacy Policy. Please review our Privacy Policy for detailed information about data collection, usage, and protection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Information</h2>
            <p className="leading-relaxed mb-3">
              Users may contact the WiFi Administrator or Airport IT Department for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clarifications regarding these Terms</li>
              <li>Grievances or complaints</li>
              <li>Requests related to service or data handling</li>
              <li>Technical support</li>
            </ul>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Srinagar Airport</p>
              <p className="text-sm text-gray-600">WiFi Administrator / Airport IT Department</p>
              <p className="text-sm text-gray-600 mt-2">Information Desk</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Governing Law and Jurisdiction</h2>
            <p className="leading-relaxed">
              This Service and its Terms are governed by the laws of India. Any disputes arising from its use shall fall under the exclusive jurisdiction of the courts of New Delhi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Modifications to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. Your continued use of the Service after any such modifications constitutes your acceptance of the modified Terms. It is your responsibility to review these Terms periodically for any updates.
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-8 pt-6 border-t border-gray-200">
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

export default TermsPage;