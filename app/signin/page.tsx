import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d1117] text-white p-4">
      <div className="w-full max-w-md p-6 space-y-6">
        

        <div className="text-center space-y-1">
          <h2 className="text-xl font-medium">Hello, Welcome back!</h2>
          <p className="text-sm text-gray-300">Please login into your account</p>
        </div>
        
        <form className="space-y-5 pt-4">
   
          <div className="relative">
            <label className="block text-xs font-light text-gray-400 mb-2">Email</label>
            <div className="flex items-center border-b border-gray-600 pb-1">
              <input 
                type="email" 
                required
                className="w-full bg-transparent focus:outline-none text-white text-sm placeholder-gray-500"
              />
              <span className="text-gray-400 text-sm pl-2">@</span>
            </div>
          </div>
          
   
          <div>
            <label className="block text-xs font-light text-gray-400 mb-2">Password</label>
            <div className="border-b border-gray-600 pb-1">
              <input 
                type="password" 
                required
                className="w-full bg-transparent focus:outline-none text-white text-sm"
              />
            </div>
            <div className="text-right mt-1.5">
              <a href="#" className="text-[11px] text-[#c29b38] hover:text-[#c29b38]">Forgot password?</a>
            </div>
          </div>

       
          <button 
            type="submit"
            className="w-full py-3 font-medium text-black bg-[#c29b38] rounded-full hover:opacity-90 transition shadow-md"
          >
            Sign in
          </button>
        </form>

   
        <div className="flex items-center my-4">
          <div className="grow border-t border-gray-700"></div>
          <span className="px-3 text-xs text-gray-400 font-light">Or</span>
          <div className="grow border-t border-gray-700"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button type="button" className="w-full py-3 px-4 border border-[#c29b38] rounded-full text-xs font-medium flex items-center justify-center space-x-3 hover:bg-gray-800 transition">
            <svg className="w-4 h-4 text-[#c29b38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
            <span className="text-[#c29b38]">Continue with Gmail</span>
          </button>
          
          <button type="button" className="w-full py-3 px-4 border border-[#c29b38] rounded-full text-xs font-medium flex items-center justify-center space-x-3 hover:bg-gray-800 transition">
            <svg className="w-4 h-4 text-[#c29b38]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
            <span className="text-[#c29b38]">Continue with Twitter</span>
          </button>
        </div>

        {/* Footer Link */}
        <div className="text-center text-xs text-gray-400 pt-3">
          Don't have an account?{' '}
          <Link href="/signup" className="text-gray-200">
            sign up <span className="text-[#c29b38] hover:underline">here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}