import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../../Components/button';

function RightText({ setView }) {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const textElements = textRef.current.children;

    gsap.fromTo(
      textElements,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.15,
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.99,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: 'power2.out',
        delay: 0.35,
      }
    );
  }, []);

  return (
    <div className="w-full bg-[#e6eae8]">
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 min-h-[calc(100vh-70px)] flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12 py-10 xl:py-14 overflow-hidden">

        <div
          ref={textRef}
          className="w-full xl:w-[54%] flex flex-col justify-center text-left"
        >
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-left font-sora font-semibold tracking-tighter text-[#000000] leading-[1.1] whitespace-pre-line">
            Your Health <br />
            Companion <br />
            for GLP1 Medication
          </h1>

          <p className="text-lg sm:text-xl md:text-[22px] font-semibold text-black tracking-tight mb-7">
            Track. Learn. Connect. All in one place.
          </p>

          <div className="flex flex-col gap-5 text-[15px] sm:text-[16px] text-zinc-600 font-medium leading-[1.6] max-w-[580px] mb-10">
            <p>
              Navigate the changing GLP-1 landscape with confidence. Track your progress,
              manage side effects, and stay informed about medication access and alternatives.
            </p>

            <p>
              Whether you're on Ozempic, Mounjaro, Wegovy, or considering alternatives,
              Lotessa helps you maintain continuity in your health journey. Get expert insights,
              track your progress, and connect with a community navigating similar challenges.
            </p>
          </div>

          <div className="flex flex-row items-center gap-6">

            <div className="w-auto">
              <Button
                text="GET LOTESSA"
                variant="solid"
                onClick={() => setView('register')}
              />
            </div>

            <button
              onClick={() => setView('register')}
              className="flex items-center gap-2 text-[#e07a5f] font-bold text-[15px] hover:opacity-80 transition-opacity tracking-wider"
            >
              JOIN THE COMMUNITY

              <svg
                className="w-4 h-4 transform translate-y-[0.5px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>

          </div>
        </div>

        <div
          ref={imageRef}
          className="w-full xl:w-[46%] flex justify-center xl:justify-end items-center mt-8 xl:mt-0"
        >
          <img
            src="/logo/HeroImage.png"
            alt="Lotessa App UI Progress Mockups"
            className="w-full max-w-[540px] xl:max-w-[580px] h-auto object-contain select-none"
            onError={(e) => {
              if (!e.target.src.includes('MainImage2.png')) {
                e.target.src = '/logo/MainImage2.png';
              }
            }}
          />
        </div>

      </section>
    </div>
  );
}

export default RightText;