import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const headingRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );

    gsap.fromTo(leftColRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 85%',
        }
      }
    );

    gsap.fromTo(rightColRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rightColRef.current,
          start: 'top 85%',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-[#e6eae8] py-20 px-6 md:px-16 lg:px-28 font-sans selection:bg-emerald-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div ref={headingRef} className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl lg:text-9xl  font-bold uppercase tracking-tighter text-zinc-900 ">
            CONTACT US
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div ref={leftColRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-none mb-10">
              Fill the form.<br />It's easy.
            </h2>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="flex flex-col relative group/input">
                  <label className="text-xs font-semibold  placeholder:text-black/30 text-gray-400 uppercase tracking-wider mb-1">First name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none transition-colors duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2fb5a5] scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                </div>

                <div className="flex flex-col relative group/input">
                  <label className="text-xs font-semibold  placeholder:text-black/30 text-gray-400 uppercase tracking-wider mb-1">Last name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b  placeholder:text-black/30 border-gray-300 py-2 focus:outline-none transition-colors duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2fb5a5] scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                </div>
              </div>

              <div className="flex flex-col pt-2 relative group/input">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Your message</label>
                <textarea 
                  rows="3"
                  className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none transition-colors duration-300 resize-none"
                />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2fb5a5] scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-500 ease-out origin-center" />
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  className="group flex items-center gap-3 bg-[#FF6F61] text-white font-bold uppercase tracking-wider px-8 py-4 text-xs  transition-all duration-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                 SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          <div ref={rightColRef} className="md:pt-2">
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight mb-6">
              Let's talk about <span className="text-[#3EB489] underline decoration-2 underline-offset-4">everything.</span>
            </h2>
            <p className="text-gray-500 text-[25px] font-[550] leading-relaxed max-w-md">
              We're here to help you navigate your journey. Whether it's support, partnership, or just a friendly hello.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}