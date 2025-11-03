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
              By accessing and using the public WiFi service at Srinagar Airport ("the Service"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Service Description</h2>
            <p className="leading-relaxed">
              The Service provides complimentary wireless internet access to passengers and visitors at Srinagar Airport. The Service is provided on an "as is" and "as available" basis without any warranties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Eligibility</h2>
            <p className="leading-relaxed">
              To use the Service, you must:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Have a valid Indian mobile number</li>
              <li>Be at least 18 years of age or have parental consent</li>
              <li>Provide accurate and complete information during registration</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. User Responsibilities</h2>
            <p className="leading-relaxed mb-3">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transmit any malicious code, viruses, or harmful content</li>
              <li>Engage in any activity that could disrupt or interfere with the Service</li>
              <li>Attempt to gain unauthorized access to any systems or networks</li>
              <li>Use the Service for any illegal activities or to transmit illegal content</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or harvest information about other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. OTP Verification</h2>
            <p className="leading-relaxed">
              Access to the Service requires verification via One-Time Password (OTP) sent to your registered mobile number. You are responsible for keeping your mobile number secure and notifying us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Service Limitations</h2>
            <p className="leading-relaxed">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Limit bandwidth usage and connection duration</li>
              <li>Monitor network traffic for security purposes</li>
              <li>Block or restrict access to certain websites or services</li>
              <li>Suspend or terminate access for violations of these Terms</li>
              <li>Modify or discontinue the Service at any time without notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Privacy and Data Collection</h2>
            <p className="leading-relaxed">
              Your use of the Service is subject to our Privacy Policy. By using the Service, you consent to the collection and use of your information as described in our Privacy Policy. Please review our{' '}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">
                Privacy Policy
              </Link>
              {' '}for more information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Disclaimer of Warranties</h2>
            <p className="leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, Srinagar Airport and its service providers shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify, defend, and hold harmless Srinagar Airport and its service providers from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Modifications to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. Your continued use of the Service after any such modifications constitutes your acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Termination</h2>
            <p className="leading-relaxed">
              We may terminate or suspend your access to the Service immediately, without prior notice, for any breach of these Terms or for any other reason we deem necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">14. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us through the airport information desk or visit our website.
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