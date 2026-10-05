'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

export default function SignUpPage() {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white p-6 relative flex flex-col justify-between">
 
      <div className="flex justify-between items-center max-w-5xl mx-auto w-full pt-2">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="WIRKSPACE" 
            width={120} 
            height={30} 
            priority 
            className="object-contain"
          />
        </div>
      </div>

     
      <div className={`max-w-4xl mx-auto w-full my-auto transition-opacity ${showModal ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
        <div className="text-center mb-8">
          <h1 className="text-sm font-medium">
            Hello, Welcome to <span className="text-[#c29b38]">wirkspace!</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1">Please sign up to explore web3 opportunities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
          <div className="space-y-4 md:pr-12 md:border-r border-[#c29b38]/40">
            <div>
              <label className="text-[10px] text-gray-400 block mb-1">Email</label>
              <div className="relative">
                <input type="email" className="w-full bg-transparent border-b border-gray-700 pb-2 text-xs focus:outline-none focus:border-[#c29b38]" />
                <span className="absolute right-0 bottom-2 text-gray-500 text-xs">@</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-gray-400 block mb-1">First name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-700 pb-2 text-xs focus:outline-none focus:border-[#c29b38]" />
              </div>
              <div>
                <label className="text-[10px] text-gray-400 block mb-1">Last name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-700 pb-2 text-xs focus:outline-none focus:border-[#c29b38]" />
              </div>
            </div>

            <div>
              <label className="text-[10px] text-gray-400 block mb-1">Username</label>
              <input type="text" className="w-full bg-transparent border-b border-gray-700 pb-2 text-xs focus:outline-none focus:border-[#c29b38]" />
            </div>

            <div>
              <label className="text-[10px] text-gray-400 block mb-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  className="w-full bg-transparent border-b border-gray-700 pb-2 text-xs focus:outline-none focus:border-[#c29b38]" 
                />
               
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 bottom-2 text-[#c29b38] text-xs cursor-pointer focus:outline-none"
                >
                  {showPassword ? '👁️‍🗨️' : '👁'}
                </button>
              </div>
            </div>

            <div className="flex items-end space-x-2 pt-1">
              <div className="flex-1">
                <label className="text-[10px] text-gray-400 block mb-1">Type activation PIN here</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-700 pb-2 text-xs focus:outline-none focus:border-[#c29b38]" />
              </div>
              <button className="text-[10px] text-[#c29b38] border border-[#c29b38] px-3 py-1.5 rounded-md hover:bg-gray-800 transition">
                Get Activation PIN
              </button>
            </div>
          </div>

          <div className="space-y-3 flex flex-col justify-center md:pl-4">
            <button className="w-full py-3 px-4 border border-[#c29b38] rounded-full text-xs font-medium flex items-center justify-center space-x-3 hover:bg-[#c29b38]/10 transition">
              <svg className="w-4 h-4 text-[#c29b38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 7L2 7" />
              </svg>
              <span className="text-[#c29b38]">Continue with Gmail</span>
            </button>

            <button className="w-full py-3 px-4 border border-[#c29b38] rounded-full text-xs font-medium flex items-center justify-center space-x-3 hover:bg-[#c29b38]/10 transition">
              <svg className="w-4 h-4 text-[#c29b38]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
              <span className="text-[#c29b38]">Continue with Twitter</span>
            </button>
          </div>
        </div>

      
        <div className="mt-10 max-w-md mx-auto">
          <button 
            onClick={() => setShowModal(true)}
            className="w-full py-3 bg-[#c29b38] text-black font-semibold rounded-full text-xs hover:opacity-90 transition shadow-lg"
          >
            Sign up
          </button>
        </div>
      </div>

     
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center p-4 z-50">
          <button 
            onClick={() => setShowModal(false)}
            className="absolute top-6 right-8 text-gray-400 hover:text-white text-xl font-light"
          >
            ✕
          </button>

          <div className="text-center mb-6">
            <h2 className="text-sm font-medium mb-1">
              Hello, Welcome to <span className="text-[#c29b38]">wirkspace!</span>
            </h2>
            <p className="text-xs text-gray-400">Please sign up to explore web3 opportunities.</p>
          </div>

          <div className="bg-[#121212] border border-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center max-w-md w-full">
            <p className="text-xs text-gray-300 mb-6 text-center">
              Enter verification code sent to your Email address
            </p>

         
            <div className="flex space-x-3 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-14 bg-transparent border border-[#c29b38] rounded-xl text-center text-lg font-semibold text-white focus:outline-none focus:ring-1 focus:ring-[#c29b38]"
                />
              ))}
            </div>

            <div className="text-xs text-gray-400 text-center">
              Didn't get verification code?{' '}
              <button className="text-[#c29b38] hover:underline focus:outline-none">
                send again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}