'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [otpMessage, setOtpMessage] = useState('');
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate OTP sending
    setOtpSent(true);
    setOtpMessage(`OTP has been sent to ${mobileNumber}. Please enter the 6-digit code.`);
    // Focus first OTP input
    setTimeout(() => {
      otpInputRefs.current[0]?.focus();
    }, 100);
  };

  const handleOtpChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const pastedDigits = pastedData.split('').filter(char => /^\d$/.test(char));
    
    if (pastedDigits.length > 0) {
      const newOtp = [...otp];
      pastedDigits.forEach((digit, i) => {
        if (i < 6) {
          newOtp[i] = digit;
        }
      });
      setOtp(newOtp);
      
      // Focus the next empty input or the last one
      const nextIndex = Math.min(pastedDigits.length, 5);
      otpInputRefs.current[nextIndex]?.focus();
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    
    if (otpString.length === 6) {
      // Success - log to console
      console.log('OTP Verification Success!', {
        mobileNumber,
        otp: otpString,
        timestamp: new Date().toISOString()
      });
      
      // You can add navigation or success message here
      alert('OTP verified successfully!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-1">
              Namaste
            </h1>
            <p className="text-sm text-gray-700 font-normal">
              Welcome to Srinagar Airport
            </p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <a
              href="/faqs"
              className="text-blue-600 text-sm font-semibold hover:underline transition-colors"
            >
              FAQs
            </a>
            <button
              aria-label="Help"
              className="inline-flex items-center justify-center bg-black rounded-full w-7 h-7 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="text-white text-base font-semibold">?</span>
            </button>
          </div>
        </div>

        {/* Note */}
        <div className="mb-4 p-2.5 bg-gray-50 rounded-md border-l-4 border-blue-500">
          <p className="text-xs text-gray-700 leading-relaxed">
            <span className="font-bold">Note:</span> This is only for passengers who have an Indian mobile number. If a passenger doesn't have an Indian mobile number, please click on coupon login.
          </p>
        </div>

        {/* Mobile Number Input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label 
              className="block text-sm font-medium text-gray-700 mb-2" 
              htmlFor="mobile"
            >
              WhatsApp Number*
            </label>
            <div className="relative">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                placeholder="WhatsApp Number*"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2.5 text-base placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                maxLength={10}
                pattern="[0-9]*"
                required
                disabled={otpSent}
              />
            </div>
          </div>

          {/* OTP Boxes - Right below mobile input */}
          {otpSent && (
            <>
              {/* Success Message - Compact */}
              <div className="py-2 px-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-xs text-green-800">
                  ✓ {otpMessage}
                </p>
              </div>

              {/* OTP Input Boxes */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2 text-center">
                  Enter OTP
                </label>
                <div className="flex justify-center gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        otpInputRefs.current[index] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      onPaste={handleOtpPaste}
                      className="w-10 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      pattern="[0-9]"
                      required
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Policies and Info */}
          <p className="text-xs text-gray-600 leading-relaxed">
            By connecting, you agree to our{' '}
            <a 
              href="/privacy-policy" 
              className="text-blue-600 hover:text-blue-700 underline font-medium"
            >
              Privacy Policy
            </a>
            {' '}and{' '}
            <a 
              href="/terms" 
              className="text-blue-600 hover:text-blue-700 underline font-medium"
            >
              Terms and Conditions
            </a>
            , including Cookie Use. You may receive a text with verification code - standard text messaging rates may apply.
          </p>

          {/* OTP Info */}
          <div className="flex items-center bg-blue-50 rounded-lg px-3 py-2.5 border border-blue-100">
            <div className="flex-shrink-0 mr-3">
              <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <span className="text-sm text-gray-700 flex-1 font-normal">
              Why OTP verification is required for public WIFI?
            </span>
            <button 
              type="button"
              className="ml-3 px-4 py-1.5 bg-black hover:bg-gray-800 rounded-lg text-white text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => {
                router.push('/faqs');
              }}
            >
              Learn more
            </button>
          </div>

          {/* Buttons - Split */}
          {!otpSent ? (
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-base uppercase tracking-wide rounded-lg py-2.5 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
              disabled={mobileNumber.length !== 10}
            >
              GET OTP
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setOtpSent(false);
                  setOtp(Array(6).fill(''));
                  setOtpMessage('');
                }}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-sm rounded-lg py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Change Mobile
              </button>
              <button
                type="button"
                onClick={handleOtpSubmit}
                className="flex-1 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm uppercase rounded-lg py-2 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
                disabled={otp.join('').length !== 6}
              >
                Verify
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Page;