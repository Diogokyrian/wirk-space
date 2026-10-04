import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        

        <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg tracking-wide">
          <span className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-black text-xs font-black">W</span>
          WirkSpace
        </Link>


        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
          <Link href="/" className="text-white hover:text-[#D3AB5E] transition-colors">Home</Link>
          <Link href="/exchange" className="hover:text-[#D3AB5E] transition-colors">Exchange</Link>
          <Link href="/vendor" className="hover:text-[#D3AB5E] transition-colors">Vendor</Link>
          <Link href="/airdrops" className="hover:text-[#D3AB5E] transition-colors">Airdrops</Link>
          <Link href="/about" className="hover:text-[#D3AB5E] transition-colors">About Us</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/signin" 
            className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 transition-colors"
          >
            Sign in
          </Link>
          <Link 
            href="/signup" 
            className="bg-[#D3AB5E] hover:bg-[#E6C17A] text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-colors shadow-sm"
          >
            Sign up
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar