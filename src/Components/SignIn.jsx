import  { useState } from 'react';

function SignUp({ setView }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex min-h-screen w-full font-sans bg-white selection:bg-[#2fb5a5] selection:text-white">
      
      {/* --- PREMIUM SAAS LEFT SIDE --- */}
      <div className="hidden lg:flex lg:w-3/5 bg-gradient-to-br from-[#22998b] via-[#2fb5a5] to-[#1e8275] flex-col justify-between p-16 text-white relative overflow-hidden">
        
        {/* Modern Ambient Glow Effects */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0a1d37]/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Branding Header */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-sm">
            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-wider uppercase">Lotessa</span>
        </div>

        {/* Middle Hero Content (Clean Left Alignment) */}
        <div className="relative z-10 max-w-xl space-y-6 my-auto">
          
          
          <h1 className="text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Lotessa
          </h1>
          
          <p className="text-lg text-white/80 font-normal leading-relaxed max-w-lg">
            Create your account today and unlock enterprise-grade tools, real-time analytics, and seamless collaboration workflows.
          </p>
        </div>

        {/* Bottom Testimonial / Trust Badge */}
        <div className="relative z-10 pt-6 flex items-center gap-6 border-t border-white/15">
          <div>
            <div className="flex text-yellow-300 text-sm mb-1">★★★★★</div>
            <p className="text-xs text-white/90 font-medium">"This platform completely streamlined our entire daily operation."</p>
          </div>
          <div className="h-8 w-px bg-white/20"></div>
          <div>
            <span className="block text-lg font-bold">10,000+</span>
            <span className="text-xs text-white/70">Active Teams</span>
          </div>
        </div>
      </div>

      {/* --- REFINED RIGHT SIDE (FORM) --- */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-center px-8 py-12 sm:px-12 lg:px-16">
        <div className="w-full max-w-md space-y-8">
          
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-[#0a1d37] tracking-tight">
              Create an account
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Already have an account?{' '}
              <button 
                onClick={() => setView('signin')} 
                className="font-semibold text-[#2fb5a5] hover:text-[#259487] transition-colors"
              >
                Sign in
              </button>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="firstName" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">First Name</label>
                <input 
                  id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleInputChange}
                  className="w-full px-3.5 py-3 rounded-lg border border-gray-200 text-gray-800 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2fb5a5]/20 focus:border-[#2fb5a5] transition-all text-sm"
                  placeholder="John" 
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="lastName" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Name</label>
                <input 
                  id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleInputChange}
                  className="w-full px-3.5 py-3 rounded-lg border border-gray-200 text-gray-800 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2fb5a5]/20 focus:border-[#2fb5a5] transition-all text-sm"
                  placeholder="Doe" 
                />
              </div>
            </div>

            {/* Email Box */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">Work Email</label>
              <input 
                id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange}
                className="w-full px-3.5 py-3 rounded-lg border border-gray-200 text-gray-800 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2fb5a5]/20 focus:border-[#2fb5a5] transition-all text-sm"
                placeholder="name@company.com" 
              />
            </div>

            {/* Password Box */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-3 pr-10 rounded-lg border border-gray-200 text-gray-800 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2fb5a5]/20 focus:border-[#2fb5a5] transition-all text-sm"
                  placeholder="At least 8 characters"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 text-xs font-medium"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center pt-1">
              <input id="terms" name="terms" type="checkbox" required
                     className="h-4 w-4 text-[#2fb5a5] border-gray-300 rounded focus:ring-[#2fb5a5] accent-[#2fb5a5]" />
              <label htmlFor="terms" className="ml-2.5 text-xs text-gray-500">
                I agree to the <a href="#terms" className="text-[#2fb5a5] font-medium hover:underline">Terms</a> and <a href="#privacy" className="text-[#2fb5a5] font-medium hover:underline">Privacy Policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-lg bg-[#2fb5a5] text-white font-semibold text-sm hover:bg-[#259487] transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2fb5a5]"
              >
                Create Account
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;