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
              Welcome to Srinagar Airport Public WiFi Service. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our WiFi service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            
            <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">2.1 Personal Information</h3>
            <p className="leading-relaxed mb-2">
              We collect the following personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mobile phone number (required for OTP verification)</li>
              <li>Device information (MAC address, device type, operating system)</li>
              <li>Network information (IP address, connection timestamps)</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mb-2 mt-4">2.2 Usage Information</h3>
            <p className="leading-relaxed">
              We automatically collect information about your use of the Service, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Session duration and connection times</li>
              <li>Bandwidth usage</li>
              <li>Websites accessed (for security and content filtering purposes)</li>
              <li>Network traffic metadata</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-2">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain the WiFi service</li>
              <li>To verify your identity through OTP verification</li>
              <li>To ensure network security and prevent abuse</li>
              <li>To monitor and analyze usage patterns</li>
              <li>To comply with legal obligations and regulatory requirements</li>
              <li>To improve our service quality</li>
              <li>To respond to your inquiries and provide support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Cookie Policy</h2>
            <p className="leading-relaxed mb-2">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain your session during WiFi usage</li>
              <li>Remember your preferences</li>
              <li>Analyze service usage</li>
              <li>Enhance security</li>
            </ul>
            <p className="leading-relaxed mt-3">
              By using our Service, you consent to our use of cookies. You can manage cookie preferences through your browser settings, though this may affect Service functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Information Sharing and Disclosure</h2>
            <p className="leading-relaxed mb-2">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> With third-party service providers who assist us in operating the Service</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
              <li><strong>Security:</strong> To protect the security and integrity of the Service or prevent fraud</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Session data and connection logs are typically retained for up to 90 days for security and troubleshooting purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Your Rights</h2>
            <p className="leading-relaxed mb-2">
              Under applicable data protection laws, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
            </ul>
            <p className="leading-relaxed mt-3">
              To exercise these rights, please contact us through the airport information desk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our Service may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-900 mb-1">Srinagar Airport</p>
              <p className="text-sm text-gray-600">Information Desk</p>
              <p className="text-sm text-gray-600 mt-2">Or visit our website for contact information</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Consent</h2>
            <p className="leading-relaxed">
              By using our Service, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree with our policies and practices, please do not use the Service.
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