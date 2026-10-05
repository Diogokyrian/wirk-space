import React from 'react'
import Link from 'next/link'

const resourcesData = [
  {
    title: "Skill acquisition",
    description: "Acquire all skills needed to earn and sell with our all-in-one digital course on wirkspace.",
    icon: (
      <svg className="w-5 h-5 text-[#D3AB5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Fx/futures signals",
    description: "We offer our subscribers great risk-to-rewards on trades given on Fx/futures with an accuracy of over 92%.",
    icon: (
      <svg className="w-5 h-5 text-[#D3AB5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "P2P payments",
    description: "Receive payments worldwide with our cashapp, paypal and other payment services. You can also earn commission for inviting users to use our services.",
    icon: (
      <svg className="w-5 h-5 text-[#D3AB5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "P2P Exchange",
    description: "Subscribe to wirkspace and have access to our fast and secure exchange platform for smooth transactions. Earn a commission of 50% on referrals.",
    icon: (
      <svg className="w-5 h-5 text-[#D3AB5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Claim rubies",
    description: "Claim rubies daily on wirkspace to access whitelist specs, convert to airtime and access to various benefits.",
    icon: (
      <svg className="w-5 h-5 text-[#D3AB5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "VTU services",
    description: "Subscribe to wirkspace and become eligible to convert your task earnings/rubies to data, airtime and cable subscriptions.",
    icon: (
      <svg className="w-5 h-5 text-[#D3AB5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

const Resources = () => {
  return (
    <section className="w-full bg-black py-16 px-4 md:px-8 relative overflow-hidden">
     
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 pointer-events-none"
        style={{ backgroundImage: "url('/Rectangle 4250.png')" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#D3AB5E] mb-12 tracking-tight text-center">
          Wirkspace resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {resourcesData.map((item, index) => (
            <div 
              key={index} 
              className="bg-black border border-gray-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-[#D3AB5E]/40 transition-all shadow-xl min-h-55"
            >
              <div>
              
                <div className="w-12 h-12 rounded-full border border-[#D3AB5E]/30 bg-[#D3AB5E]/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                <h3 className="text-white font-bold text-base mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-800/40">
                <Link href="#" className="text-[#D3AB5E] hover:opacity-80 text-xs font-semibold flex items-center gap-1 transition-opacity">
                  View more <span className="text-xs">&gt;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Resources