import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LeftText({ setView }) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const textItems = contentRef.current.children;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(
      image,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power2.out',
      }
    );

    tl.fromTo(
      textItems,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
      },
      '-=0.5'
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full p-15 py-16 xl:py-24 flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-16 overflow-hidden"
    >

      <div
        ref={imageRef}
        className="w-full xl:w-[45%] flex justify-center xl:justify-start items-center"
      >
        <img
          src="/logo/MainImage.png"
          alt="Community members hugging"
          className="w-full max-w-[520px] h-auto object-contain rounded-2xl shadow-sm select-none"
          onError={(e) => {
            if (!e.target.src.includes('MainImage2.png')) {
              e.target.src = '/logo/MainImage2.png';
            }
          }}
        />
      </div>

      <div
        ref={contentRef}
        className="w-full xl:w-[52%] flex flex-col justify-center text-left"
      >
        <span className="text-[#007a6b] font-bold text-base md:text-lg tracking-wide mb-3 block">
          Lotessa Community
        </span>

        <h2 className="text-4xl lg:text-5xl font-sora font-bold tracking-tighter text-[#000000] leading-tight">
          Join a Community That <br />
          Understands Your GLP–1 <br />
          Journey.
        </h2>

        <div className="flex flex-col gap-5 text-[15px] sm:text-[16px] text-zinc-600 font-medium leading-[1.65] max-w-[620px] mb-8">
          <p>
            You are not alone on this journey. Lotessa brings together people across
            the UK who are managing Mounjaro, Wegovy, and other GLP–1 medications,
            sharing real experiences, tracking real progress, and supporting each other
            through every dose increase, side effect, and non-scale victory.
          </p>

          <p>
            Our content is clinically reviewed. Our community is real.
          </p>
        </div>

        <div>
          <button
            onClick={() => setView('register')}
            className="inline-flex items-center gap-3 bg-[#ff8a75] hover:bg-[#ff765e] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-sm text-[15px] tracking-wide group"
          >
            <svg
              className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
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

      </div>

    </section>
  );
}

export default LeftText;