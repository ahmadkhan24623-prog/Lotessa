import React, { useState } from 'react';

export default function FooterSection({ setView }) {
  // Track which modal is active: null, 'terms', 'cookies', 'privacy', or 'report'
  const [activeModal, setActiveModal] = useState(null);

  // Helper to get the correct modal title
  const getModalTitle = () => {
    if (activeModal === 'terms') return 'Digital Products Terms and Conditions';
    if (activeModal === 'cookies') return 'Cookies Policy';
    if (activeModal === 'privacy') return 'Privacy Policy';
    if (activeModal === 'report') return 'Report an Issue';
    return '';
  };

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
            <span className="text-3xl font-black tracking-wider text-[#0A2240] uppercase"></span>
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
            <a href="https://www.instagram.com" className="hover:text-[#2fb5a5] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com" className="hover:text-[#2fb5a5] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com" className="hover:text-[#2fb5a5] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>
        </div>

        {/* Right Side Info & Legal Links */}
        <div className="text-[#0A2240] text-[15px] md:text-[16px] leading-relaxed font-normal tracking-wide space-y-6 lg:pl-12">
          <p>
            Lotessa is <span className="font-bold underline decoration-1 underline-offset-2">not a medical device</span> and does not provide medical advice. Always consult a qualified healthcare professional regarding your health condition and treatment.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#0A2240]">
            <button 
              onClick={() => setActiveModal('terms')}
              className="underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors bg-transparent border-none p-0 cursor-pointer text-left font-semibold"
            >
              Terms and Conditions
            </button>

            <button 
              onClick={() => setActiveModal('cookies')}
              className="underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors bg-transparent border-none p-0 cursor-pointer text-left font-semibold"
            >
              Cookies Policy
            </button>

            <button 
              onClick={() => setActiveModal('privacy')}
              className="underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors bg-transparent border-none p-0 cursor-pointer text-left font-semibold"
            >
              Privacy Policy
            </button>
          </div>

          <div className="pt-2 text-sm font-semibold">
            <button 
              onClick={() => setActiveModal('report')}
              className="underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors bg-transparent border-none p-0 cursor-pointer text-left font-semibold text-[#0A2240]"
            >
              Report an issue
            </button>
          </div>
        </div>

      </div>

      {/* --- POPUP MODAL OVERLAY --- */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          
          {/* Modal Container: Shifts size dynamically based on if it's the report form or legal text */}
          <div className={`relative bg-white w-full rounded-xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden border border-gray-100 animate-slide-up ${activeModal === 'report' ? 'max-w-xl' : 'max-w-4xl'}`}>
            
            {/* Top Header Row */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#0A2240]">{getModalTitle()}</h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-semibold transition-colors focus:outline-none"
              >
                &times;
              </button>
            </div>

            {/* Scrollable Content View */}
            <div className="p-6 overflow-y-auto space-y-6 text-gray-700 text-[15px] leading-relaxed scrollbar-thin">
              
              {/* --- 1. TERMS AND CONDITIONS CONTENT --- */}
              {activeModal === 'terms' && (
                <>
                  <div>
                    <h4 className="text-lg font-bold text-[#0A2240] mb-2">Digital Products Terms and Conditions</h4>
                    <p className="font-semibold text-gray-800">Introduction to Lotessa</p>
                    <p className="mt-2">Welcome to Lotessa's website (the "Website").</p>
                    <p className="mt-2">The Website is provided by Lotessa Digital Health Ltd, whose registered office address is Bright Building, Richmond House, Bradford, BD7 1DB (referred to herein as "us", "we", or "our").</p>
                    <p className="mt-2">By accessing and using this Website and the digital services available on it, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please cease using the Website immediately.</p>
                    <p className="mt-2">This Website requires users to be at least 18 years old. By using this Website and accepting these terms, you confirm that you are at least 18 years of age.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#0A2240] mb-1">Privacy</h4>
                    <p>Where we purchase a subscription, it will automatically renew at the end of each billing cycle unless you cancel before the renewal date. We will notify you in advance of renewal where required by law. You may cancel auto-renewal via your account settings or by contacting us at support@lotessa.app.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#0A2240] mb-1">Electronic Communications</h4>
                    <p>By placing an order, you agree to receive communications from us electronically regarding your order with other updates.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#0A2240] mb-1">Subscription & Auto-Renewal</h4>
                    <p>Where you purchase a subscription, it will automatically renew at the end of each billing cycle unless you cancel before the renewal date. We will notify you in advance of renewal where required by law. You may cancel auto-renewal via your account settings or by contacting us at support@lotessa.app.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#0A2240] mb-1">Consumer Rights</h4>
                    <p>Where you are purchasing services from us as a consumer (as defined by the Consumer Rights Act)...</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#0A2240] mb-1">Governing Law</h4>
                    <p>These terms and conditions are governed by the laws of England and Wales. All disputes arising in connection with these terms are subject to the exclusive jurisdiction of the courts of England and Wales.</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-5 bg-gray-50/50 space-y-4">
                    <p className="font-semibold text-[#0A2240]"><span className="font-bold">TO:</span> Lotessa Digital Health Ltd, Bright Building, Richmond House, Bradford, BD7 1DB</p>
                    <p className="font-semibold text-[#0A2240]"><span className="font-bold">Email:</span> support@lotessa.app</p>
                    <p className="text-sm italic text-gray-500">I/We hereby give notice that I/We cancel my/our contract of sale of the following digital products:</p>
                    <div className="border-b border-dashed border-gray-300 pt-6 text-sm text-gray-400">Ordered on / received on:</div>
                    <div className="border-b border-dashed border-gray-300 pt-6 text-sm text-gray-400">Name of consumer(s):</div>
                    <div className="border-b border-dashed border-gray-300 pt-6 text-sm text-gray-400">Address of consumer(s):</div>
                    <div className="border-b border-dashed border-gray-300 pt-6 text-sm text-gray-400">Signature of consumer(s) (only if this form is notified on paper):</div>
                    <div className="border-b border-dashed border-gray-300 pt-6 text-sm text-gray-400">Date:</div>
                  </div>
                </>
              )}

              {/* --- 2. COOKIES POLICY CONTENT --- */}
              {activeModal === 'cookies' && (
                <>
                  <div>
                    <h4 className="text-lg font-bold text-[#0A2240] mb-2">Cookies Policy</h4>
                    <p>This Cookies Policy explains how Lotessa Digital Health Ltd uses cookies and similar tracking technologies when you visit our website.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2240] mb-1">What are Cookies?</h4>
                    <p>Cookies are small text files stored on your computer or mobile device when you browse websites. They help us remember configuration choices and provide analytics to enhance site performance.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2240] mb-1">How We Use Cookies</h4>
                    <p>We use essential cookies for user authentication, security validation, and managing platform operations. We also configure optional analytic components to understand user navigation flows and page engagement metrics.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2240] mb-1">Managing Your Preferences</h4>
                    <p>You can adjust your browser configurations to refuse or block cookie processing actions. Please note that turning off absolute tracking frameworks may modify or disconnect explicit functional blocks within our user interfaces.</p>
                  </div>
                </>
              )}

              {/* --- 3. PRIVACY POLICY CONTENT --- */}
              {activeModal === 'privacy' && (
                <>
                  <div>
                    <h4 className="text-lg font-bold text-[#0A2240] mb-2">Privacy Policy</h4>
                    <p>Your privacy protection matters profoundly to us. This Privacy Policy details how we structure, process, and protect your data parameters.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2240] mb-1">Information Collection</h4>
                    <p>We log explicit details you submit during authentication steps (such as name and contact email coordinates) alongside telemetry diagnostics relative to session interactions.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2240] mb-1">Data Usage Standards</h4>
                    <p>Collected attributes serve entirely to validate operations, securely route personalized services, prevent fraud scenarios, and process administrative transaction notifications.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A2240] mb-1">Your Legal Data Rights</h4>
                    <p>You maintain full operational control to request clear transparency, complete transmission, instantaneous correction, or permanent removal of personal information files linked to your database record. Contact support@lotessa.app to initialize these data operations.</p>
                  </div>
                </>
              )}

              {/* --- 4. REPORT AN ISSUE FORM CONTENT --- */}
              {activeModal === 'report' && (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setActiveModal(null); }}>
                  <div>
                    <label className="block text-sm font-semibold text-[#0A2240] mb-1">Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#29B2A4]/20 focus:border-[#29B2A4] transition-all" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0A2240] mb-1">Email *</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#29B2A4]/20 focus:border-[#29B2A4] transition-all" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0A2240] mb-1">Phone (Optional)</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#29B2A4]/20 focus:border-[#29B2A4] transition-all" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0A2240] mb-1">Issue Type *</label>
                    <select 
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#29B2A4]/20 focus:border-[#29B2A4] transition-all appearance-none cursor-pointer"
                    >
                      <option value="other">Other</option>
                      <option value="technical">Technical Bug</option>
                      <option value="account">Account Access</option>
                      <option value="billing">Billing Issue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0A2240] mb-1">Issue Description *</label>
                    <textarea 
                      rows="4" 
                      required 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#29B2A4]/20 focus:border-[#29B2A4] transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Actions Row at bottom of Form Layout */}
                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => setActiveModal(null)}
                      className="px-6 py-2.5 border border-gray-200 rounded-lg text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#29B2A4] hover:bg-[#22978B] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors duration-200 shadow-sm"
                    >
                      Submit Report
                    </button>
                  </div>
                </form>
              )}

            </div>

            {/* Bottom Close Bar for Legal Texts Only */}
            {activeModal !== 'report' && (
              <div className="flex justify-end p-4 border-t border-gray-100 bg-gray-50/50">
                <button
                  onClick={() => setActiveModal(null)}
                  className="bg-[#FF8A71] hover:bg-[#E57B64] text-white font-bold px-8 py-2.5 rounded-lg text-sm transition-colors duration-200 shadow-sm tracking-wide"
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </footer>
  );
}