import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function MainLastText() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%', 
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        leftColumnRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        rightColumnRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white font-sans pt-16 md:pt-24 pb-20">
      
      <div ref={headerRef} className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 text-center mb-16 md:mb-24">
        <span className="text-[#029664] font-bold text-xs tracking-[0.2em] uppercase block mb-4">
          PARTNER WITH LOTESSA
        </span>
        <h1 className="text-[36px] sm:text-[46px] md:text-[54px] font-extrabold text-[#000000] tracking-tight leading-[1.15] max-w-[900px] mx-auto mb-6">
          Shape the Future of GLP–1 Health Support
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-zinc-600 font-normal leading-[1.7] max-w-[760px] mx-auto">
          Lotessa connects brands, clinicians, researchers, and writers with one of 
          the UK's fastest-growing GLP-1 communities. Backed by the University of 
          Bradford and trusted by thousands of users, we're building a platform 
          where evidence-based knowledge, safe communities, and innovative 
          health tech meet.
        </p>
      </div>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 overflow-hidden">
        
        <div ref={leftColumnRef} className="w-full lg:w-[55%] flex flex-col justify-start text-left">
          
          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl mt-19 md:text-3xl font-extrabold text-[#000000] mb-4">
              Write for Lotessa
            </h2>
            <h3 className="text-lg mt-10 md:text-xl font-bold text-zinc-600 mb-4">
              Are you a medical writer, clinician, or researcher?
            </h3>
            <ul className="space-y-4 leading-[2.2] text-sm md:text-base text-zinc-500 font-normal list-inside list-disc pl-1">
              <li>Share your expertise with 10,000+ engaged GLP-1 users.</li>
              <li>Publish credited, evidence-based articles in our Knowledge Library.</li>
              <li>Help people living with obesity, diabetes, and other metabolic conditions.</li>
              <li>Gain visibility as a thought leader in digital health.</li>
            </ul>
          </div>

          <hr className="border-[#F2F4F7] my-8" />

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl mt-20 md:text-3xl font-extrabold text-[#000000] mb-4">
              Sponsor & Partner
            </h2>
            <h3 className="text-lg mt-10 md:text-xl font-bold text-zinc-600 mb-4">
              Are you a health and wellness brand?
            </h3>
            <ul className="space-y-4 leading-[2.2]  text-sm md:text-base text-zinc-500 font-normal list-inside list-disc pl-1">
              <li>Reach a targeted, motivated audience through meaningful partnerships.</li>
              <li>Sponsor community groups aligned with your values.</li>
              <li>Co-create knowledge content that resonates with our members.</li>
              <li>Build brand awareness and trust in a growing GLP-1 market.</li>
            </ul>
          </div>

        </div>

        <div ref={rightColumnRef} className="w-full lg:w-[40%] flex justify-center lg:justify-end items-start mt-8 lg:mt-0">
          <div className="w-full max-w-[420px] lg:max-w-[460px]">
            <img 
              src="/logo/MainImage2.png" 
              alt="Lotessa Progress Dashboard App Mockup" 
              className="w-full h-auto object-contain select-none"
              onError={(e) => {
                if (!e.target.src.includes('HeroImage.png')) {
                  e.target.src = '/logo/HeroImage.png';
                }
              }}
            />
          </div>
        </div>

      </section>
    </div>
  );
}

export default MainLastText;