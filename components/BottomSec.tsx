"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const steps = [
  {
    num: "Step 1",
    title: "Sign up",
    desc: "Visit the wirkspace website and click on sign up button to get started.",
  },
  {
    num: "Step 2",
    title: "Fill in your details.",
    desc: "Fill in the required user information correctly and use a password that is easy for you to remember.",
  },
  {
    num: "Step 3",
    title: "Get coupon code.",
    desc: "You can get your coupon code from one of our dedicated vendors and can only be used once when creating an account. learn more.",
  },
  {
    num: "Step 4",
    title: "Finish registration.",
    desc: "Complete your registration to explore the numerous opportunities wirkspace has to offer.",
  },
]

const faqs = [
  "What is Wirkspace?",
  "How does Wirkspace relate to digital marketing agencies?",
  "What is the main goal of Wirkspace?",
  "How does wirkspace utilize blockchain technology?",
  "What is the registration process for becoming a wirkspace affiliate?",
  "What is the significance of airdrops updates for our subscribers?",
  "What are some of the utilities and features available on wirkspace?",
  "What are digital products and how do they fit into wirkspace?",
  "What benefits do subscribers receive upon registration?",
]

const BottomSections = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-black py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

    
        <div className="bg-black border border-gray-800/80 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-lg">
       
          <div className="w-full lg:w-[45%] h-65 md:h-80 relative rounded-xl overflow-hidden shrink-0">
            <Image
              src="/111.png"
              alt="Join Us start earning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

       
          <div className="w-full lg:w-[55%] flex flex-col text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Join Us</h2>
            <p className="text-lg font-bold text-[#D3AB5E] mb-3">start earning</p>
            <p className="text-gray-300 text-xs md:text-sm mb-6">
              You can register with wirkspace and start earning in some few steps.
            </p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-3 items-start border-b border-gray-800/60 pb-3 last:border-none">
                  <span className="text-xs font-bold text-[#D3AB5E] w-12 shrink-0 pt-0.5">{step.num}</span>
                  <div>
                    <h4 className="font-bold text-xs md:text-sm text-white mb-0.5">{step.title}</h4>
                    <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black border border-gray-800/80 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-lg">
         
          <div className="w-full lg:w-[45%] h-50 md:h-60 relative rounded-xl overflow-hidden shrink-0">
            <Image
              src="/wirkspace newsletter.png"
              alt="Subscribe to our newsletter"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div className="w-full lg:w-[55%] flex flex-col text-white">
            <h2 className="text-xl md:text-2xl font-bold text-[#D3AB5E] mb-2 tracking-tight">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
              Join our wirkspace community to stay updated on the newest web3 earning opportunities and enjoy numerous benefits of being a valued member of our community.
            </p>
            <div className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="Enter your Email address" 
                className="grow bg-black text-gray-300 placeholder-gray-500 text-xs rounded-lg py-3 pl-4 pr-3 border border-gray-700 focus:outline-none focus:border-[#D3AB5E]/40"
              />
              <button className="bg-[#D3AB5E] hover:bg-[#D3AB5E]/90 text-[#111622] font-bold text-xs px-5 py-3 rounded-lg transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        
        <div className="max-w-3xl mx-auto w-full bg-black border border-gray-800/80 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg md:text-xl font-bold text-white">Frequently asked questions</h2>
            <Link href="#" className="text-[#D3AB5E] hover:opacity-80 text-xs font-semibold flex items-center gap-1 transition-opacity">
              View more <span className="text-xs">&gt;</span>
            </Link>
          </div>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-800/60 last:border-none pb-2">
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-white hover:text-[#D3AB5E] text-xs md:text-sm font-medium text-left py-2 transition-colors"
                >
                  {faq}
                  <svg 
                    className={`w-4 h-4 text-gray-500 transition-transform shrink-0 ml-2 ${activeIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="px-3 py-2 text-[11px] md:text-xs text-gray-400 leading-relaxed bg-black rounded-lg mt-1 border border-gray-700/60">
                    Wirkspace is a comprehensive Web3 platform designed to help users earn, learn, and grow within the digital and cryptocurrency space. It offers various tools for trading, passive income, and skill acquisition.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default BottomSections