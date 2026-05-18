import React from 'react';

export default function FooterSection({ setView }) {
  return (
    <footer className="bg-[#e6eae8] mt-16 py-16 px-6 md:px-16 lg:px-28 font-sans border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Side: Brand, Buttons, and Socials */}
        <div className="space-y-8">

          {/* Logo and Brand Name */}
          <div className="flex items-center gap-3">
            <img
              src="/logo/NavBarLogo.png"
              alt="Lotessa Logo"
              className="h-9 w-auto object-contain"
            />

            <span className="text-3xl font-black tracking-wider text-[#0A2240] uppercase">

            </span>
          </div>

          <div className="flex flex-wrap gap-4">

            <button
              onClick={() => setView('register')}
              className="bg-[#29B2A4] hover:bg-[#22978B] text-white font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-xl transition-colors duration-300 shadow-sm"
            >
              GET LOTESSA
            </button>

            <button
              onClick={() => setView('register')}
              className="flex items-center gap-2 bg-[#FF8A71] hover:bg-[#E57B64] text-white font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-xl transition-colors duration-300 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>

              JOIN THE COMMUNITY
            </button>

          </div>

          <div className="flex items-center gap-6 pt-2 text-gray-400">

            {/* Instagram */}
            <a href="#" className="hover:text-[#2fb5a5] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="hover:text-[#2fb5a5] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>

            {/* Facebook */}
            <a href="#" className="hover:text-[#2fb5a5] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>

          </div>
        </div>

        <div className="text-[#0A2240] text-[15px] md:text-[16px] leading-relaxed font-normal tracking-wide space-y-6 lg:pl-12">

          <p>
            Lotessa is <span className="font-bold underline decoration-1 underline-offset-2">not a medical device</span> and does not provide medical advice. Always consult a qualified healthcare professional regarding your health condition and treatment.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#0A2240]">
            <a href="#" className="underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors">
              Terms and Conditions
            </a>

            <a href="#" className="underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors">
              Cookies Policy
            </a>

            <a href="#" className="underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors">
              Privacy Policy
            </a>
          </div>

          <div className="pt-2 text-sm font-semibold">
            <a href="#" className="underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors">
              Report an issue
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}