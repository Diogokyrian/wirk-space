"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-[#0b0e14] border-b border-gray-800/80 sticky top-0 z-50 px-4 md:px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
       
        <Link href="/" className="flex items-center gap-2.5">
          <Image 
            src="/logo.png" 
            alt="WirkSpace Logo" 
            width={120} 
            height={32} 
            className="h-8 w-auto object-contain"
            priority 
          />
        </Link>

       
        <nav className="hidden md:flex items-center gap-8 text-xs text-gray-300 font-medium">
          <Link href="/" className="hover:text-[#D3AB5E] transition-colors">Home</Link>
          <Link href="/exchange" className="hover:text-[#D3AB5E] transition-colors">Exchange</Link>
          <Link href="/vendor" className="hover:text-[#D3AB5E] transition-colors">Vendor</Link>
          <Link href="/airdrops" className="hover:text-[#D3AB5E] transition-colors">Airdrops</Link>
          <Link href="/about" className="hover:text-[#D3AB5E] transition-colors">About Us</Link>
        </nav>

   
        <div className="hidden md:flex items-center gap-4">
          <Link href="/signin" className="text-xs text-gray-300 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link href="/signup" className="bg-[#D3AB5E] hover:bg-[#D3AB5E]/90 text-[#111622] font-bold text-xs px-5 py-2.5 rounded-full transition-colors">
            Sign up
          </Link>
        </div>

   
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-[#151c2c] border border-gray-800 flex items-center justify-center text-gray-300 hover:text-[#D3AB5E] transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

    
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0b0e14] border-b border-gray-800 px-6 py-6 flex flex-col gap-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-sm text-gray-200 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#D3AB5E] transition-colors">Home</Link>
            <Link href="/exchange" onClick={() => setIsOpen(false)} className="hover:text-[#D3AB5E] transition-colors">Exchange</Link>
            <Link href="/vendor" onClick={() => setIsOpen(false)} className="hover:text-[#D3AB5E] transition-colors">Vendor</Link>
            <Link href="/airdrops" onClick={() => setIsOpen(false)} className="hover:text-[#D3AB5E] transition-colors">Airdrops</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#D3AB5E] transition-colors">About Us</Link>
          </nav>

          <div className="border-t border-gray-800 pt-4 flex flex-col gap-3">
            <Link href="/signin" onClick={() => setIsOpen(false)} className="text-xs text-gray-300 hover:text-white py-1">
              Sign in
            </Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} className="bg-[#D3AB5E] hover:bg-[#D3AB5E]/90 text-[#111622] font-bold text-xs py-3 rounded-full text-center transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar