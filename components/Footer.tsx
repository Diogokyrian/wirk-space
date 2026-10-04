import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-[#151515] border-t border-gray-800/80 text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
        
          <div className="md:col-span-5 flex flex-col gap-4">
           
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D3AB5E] flex items-center justify-center text-[#111622] font-bold text-base shadow-md">
                W
              </div>
              <span className="text-white text-xl font-bold tracking-tight">WirkSpace</span>
            </div>

            <p className="text-gray-400 text-xs tracking-wide">
              Follow Us
            </p>

          
            <div className="flex items-center gap-3">
      
              <Link href="#" className="w-8 h-8 rounded-lg bg-[#D3AB5E] border border-gray-800 flex items-center justify-center text-white hover:text-[#D3AB5E] hover:border-[#D3AB5E]/40 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>

              <Link href="#" className="w-8 h-8 rounded-lg bg-[#D3AB5E] border border-gray-800 flex items-center justify-center text-white hover:text-[#D3AB5E] hover:border-[#D3AB5E]/40 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>


              <Link href="#" className="w-8 h-8 rounded-lg bg-[#D3AB5E] border border-gray-800 flex items-center justify-center text-white hover:text-[#D3AB5E] hover:border-[#D3AB5E]/40 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>

           
              <Link href="#" className="w-8 h-8 rounded-lg bg-[#D3AB5E] border border-gray-800 flex items-center justify-center text-white hover:text-[#D3AB5E] hover:border-[#D3AB5E]/40 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.119.098.152.228.163.33.016.116.033.378.019.582z"/>
                </svg>
              </Link>

              <Link href="#" className="w-8 h-8 rounded-lg bg-[#D3AB5E] border border-gray-800 flex items-center justify-center text-white hover:text-[#D3AB5E] hover:border-[#D3AB5E]/40 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
            </div>
          </div>

        
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-bold text-sm text-white">Our services</h4>
            <ul className="flex flex-col gap-2 text-xs text-gray-400">
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Affiliates</Link></li>
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Exchange</Link></li>
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Rubies</Link></li>
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Airdrops</Link></li>
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Earn</Link></li>
            </ul>
          </div>

         
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-bold text-sm text-white">About Us</h4>
            <ul className="flex flex-col gap-2 text-xs text-gray-400">
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Roadmap</Link></li>
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Whitepaper</Link></li>
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Mission</Link></li>
            </ul>
          </div>

       
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-bold text-sm text-white">Resources</h4>
            <ul className="flex flex-col gap-2 text-xs text-gray-400">
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Legal</Link></li>
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Rubies</Link></li>
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Vendor</Link></li>
              <li><Link href="#" className="hover:text-[#D3AB5E] transition-colors">Socials</Link></li>
            </ul>
          </div>

        </div>

   
        <div className="pt-6 border-t border-gray-800/60 text-center text-gray-500 text-[11px]">
          Copyright 2026 Kyrian Chidiogo Tech.
        </div>

      </div>
    </footer>
  )
}

export default Footer