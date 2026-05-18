import React from 'react';

function SignIn({ setView }) {
  return (
    <div className="flex min-h-screen w-full font-sans bg-white">
      
      <div className="hidden md:flex md:w-1/2 bg-[#2fb5a5] flex-col items-center justify-center p-12 text-white">
        <div className="flex items-center gap-3 animate-fade-in">
          <svg 
            className="w-12 h-12 fill-current" 
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          {/* Logo Name */}
          <h1 className="text-4xl font-black tracking-wider uppercase">
            Lotessa
          </h1>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:px-16 lg:px-24">
        <div className="w-full max-w-md space-y-8">
          
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#0a1d37] tracking-tight">
              Sign In
            </h2>
            <p className="mt-3 text-base text-gray-500">
              Don't have an account?{' '}
              <button 
                onClick={() => setView('register')} 
                className="font-semibold text-[#2fb5a5] hover:underline focus:outline-none"
              >
                Sign Up
              </button>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Email Box */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2fb5a5]/20 focus:border-[#2fb5a5] transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Box */}
            <div className="space-y-1 relative">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2fb5a5]/20 focus:border-[#2fb5a5] transition-all duration-200 pr-10"
                  placeholder="Enter your password"
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-left">
              <a href="#forgot" className="text-sm font-semibold text-[#2fb5a5] hover:underline">
                Forgot your password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-[#2fb5a5] text-white font-bold text-lg hover:bg-[#259487] transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2fb5a5]"
              >
                Login
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}

export default SignIn;