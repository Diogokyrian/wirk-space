import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="w-full bg-black py-4 px-4 md:px-8">
      
      <div className="max-w-7xl mx-auto bg-black rounded-3xl p-4 md:p-8 relative overflow-hidden">
     
        <div className="relative w-full aspect-video sm:aspect-2/1 md:h-95 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center bg-black">
          <Image 
            src="/WirkSpace4.png" 
            alt="WirkSpace Entertainment Banner"
            fill
            sizes="100vw"
            className="object-contain rounded-2xl"
            priority
          />
        </div>


        <div className="flex items-center justify-center gap-2 mt-5 mb-10">
          <span className="w-8 h-1.5 rounded-full bg-[#D3AB5E]"></span>
          <span className="w-2 h-1.5 rounded-full bg-gray-700"></span>
          <span className="w-2 h-1.5 rounded-full bg-gray-700"></span>
          <span className="w-2 h-1.5 rounded-full bg-gray-700"></span>
          <span className="w-2 h-1.5 rounded-full bg-gray-700"></span>
        </div>
     
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
          
          <div className="lg:col-span-5 flex flex-col gap-4 text-white px-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#D3AB5E]">Our vision</h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Our mission is to introduce young, vibrant minds to this amazing technology and give them a means on the liberation the digital space & Web3 space has to offer to mankind.
            </p>
          </div>

          
          <div className="lg:col-span-7 flex flex-col items-end gap-4 w-full">
        
            <div className="w-full md:w-3/4 relative flex items-center">
              <input 
                type="text" 
                placeholder="Search Wirkspace" 
                className="w-full bg-black text-gray-300 placeholder-gray-500 text-sm rounded-xl py-2 pl-3 pr-10 border border-gray-800 focus:outline-none focus:border-gray-600"
              />
              <svg className="w-4 h-4 text-gray-400 absolute right-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            <div className="relative w-full md:w-3/4 aspect-video md:h-65 rounded-2xl overflow-hidden  border-gray-800 bg-black">
              <Image 
                src="/Wirkspace2.png" 
                alt="Financial Freedom Goal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain rounded-2xl"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero