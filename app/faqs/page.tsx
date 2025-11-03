'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Why is OTP verification required for public WiFi?",
      answer: "OTP (One-Time Password) verification is required for security and compliance purposes. It helps us verify that you have access to a valid Indian mobile number, prevent unauthorized access, comply with government regulations, and ensure that only legitimate users can access the WiFi service. This helps protect both you and the network from potential security threats."
    },
    {
      question: "Do I need an Indian mobile number to use the WiFi?",
      answer: "Yes, you need a valid Indian mobile number to use this WiFi service. The OTP verification system sends a code to your mobile number for authentication. If you don't have an Indian mobile number, you can use the 'Coupon Login' option available on the main page."
    },
    {
      question: "How long does it take to receive the OTP?",
      answer: "You should receive the OTP within a few seconds after clicking 'GET OTP'. If you don't receive it within 2-3 minutes, please check that your mobile number is correct, ensure you have network coverage, and try requesting the OTP again. Sometimes network delays may occur."
    },
    {
      question: "What if I don't receive the OTP?",
      answer: "If you don't receive the OTP, please try the following: 1) Check your mobile number for accuracy, 2) Ensure you have network coverage, 3) Wait a few minutes and try again, 4) Check if your phone has blocked SMS messages, 5) Contact the airport information desk for assistance."
    },
    {
      question: "How long can I use the WiFi?",
      answer: "The WiFi service is available during your stay at the airport. Session duration and bandwidth may be limited to ensure fair usage for all passengers. Specific time limits may apply, and you may need to reconnect after a certain period of inactivity."
    },
    {
      question: "Is the WiFi service free?",
      answer: "Yes, the WiFi service is complimentary for all passengers and visitors at Srinagar Airport. There are no charges for using the service, though standard SMS charges may apply for receiving the OTP from your mobile service provider."
    },
    {
      question: "What should I do if I can't connect to the WiFi?",
      answer: "If you're having trouble connecting, try these steps: 1) Make sure you're connected to the correct network (Srinagar Airport WiFi), 2) Forget the network and reconnect, 3) Restart your device's WiFi, 4) Ensure your device is within the airport premises, 5) Clear your browser cache, 6) Contact the airport information desk for technical support."
    },
    {
      question: "Is the WiFi connection secure?",
      answer: "While we implement security measures to protect the network, public WiFi networks should always be used with caution. We recommend: 1) Not accessing sensitive accounts or entering passwords on unsecured websites, 2) Using HTTPS-enabled websites when possible, 3) Avoiding online banking or financial transactions, 4) Using a VPN for additional security if available."
    },
    {
      question: "Can I use the WiFi for streaming videos or downloading large files?",
      answer: "The WiFi service is designed for general internet browsing and basic connectivity. Bandwidth may be limited, and activities like video streaming or large file downloads may be restricted or slow. We prioritize fair usage to ensure all passengers can access the service."
    },
    {
      question: "What devices are compatible with the WiFi?",
      answer: "The WiFi service is compatible with most modern devices including smartphones, tablets, laptops, and other WiFi-enabled devices. Ensure your device supports standard WiFi protocols (802.11 b/g/n/ac)."
    },
    {
      question: "Will my personal information be shared?",
      answer: "No, we do not sell your personal information. We only collect necessary information (mobile number) for OTP verification and network security purposes. Your data is handled according to our Privacy Policy. For more details, please read our Privacy Policy page."
    },
    {
      question: "What if I want to change my mobile number?",
      answer: "If you've already entered a mobile number but want to use a different one, click on the 'Change Mobile' button after receiving the OTP, or simply close the page and start again with a new number."
    },
    {
      question: "Is there a data limit on the WiFi?",
      answer: "Yes, there may be data usage limits per session to ensure fair access for all users. Once you reach the limit, you may need to reconnect or wait for a new session period. Specific limits may vary."
    },
    {
      question: "Can I access all websites on the WiFi?",
      answer: "While most websites are accessible, certain websites may be blocked for security, legal, or content filtering purposes. This is standard practice for public WiFi networks to ensure network security and compliance with regulations."
    },
    {
      question: "Who can I contact for support?",
      answer: "For technical support or assistance with the WiFi service, please visit the airport information desk. Our staff will be happy to help you with any connectivity issues or questions you may have."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions (FAQs)</h1>
          <p className="text-sm text-gray-600">
            Find answers to common questions about Srinagar Airport WiFi service
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-600 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h2>
          <p className="text-gray-700 text-sm mb-4">
            If you couldn't find the answer you're looking for, please feel free to contact us:
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Airport Information Desk:</strong> Available at the airport</p>
            <p><strong>Email:</strong> Contact through airport website</p>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-4">
            <Link 
              href="/terms"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Terms and Conditions
            </Link>
            <Link 
              href="/privacy-policy"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Privacy Policy
            </Link>
          </div>
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;