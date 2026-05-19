import React from 'react';
import Button from '../../Components/button';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-block transition-all duration-300 ease-out text-[#0a1d37] font-semibold text-[16px] hover:text-[#2fb5a5] hover:scale-105 transform origin-left pb-3 max-[1200px]:w-full max-[1200px]:text-left max-[1200px]:text-lg max-[1200px]:py-4 max-[1200px]:border-b max-[1200px]:border-gray-100"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#2fb5a5] transition-all duration-300 ease-out group-hover:w-full max-[1200px]:hidden" />
    </a>
  );
}

function NavBarItem({ isOpen, setIsOpen, setView }) {
  
  const handleScroll = (e, targetId) => {
    e.preventDefault(); 
    setIsOpen(false);   

    gsap.to(window, {
      duration: 1.4,      
      scrollTo: { 
        y: targetId, 
        offsetY: 90         
      }, 
      ease: 'power4.out'    
    });
  };

  return (
    <div
      className={`
        min-[1200px]:flex min-[1200px]:items-center min-[1200px]:justify-between min-[1200px]:gap-12 min-[1200px]:flex-1 min-[1200px]:ml-12 min-[1200px]:opacity-100 min-[1200px]:visible min-[1200px]:translate-y-0 min-[1200px]:pointer-events-auto
        
        max-[1200px]:absolute max-[1200px]:top-[70px] max-[1200px]:left-0 
        max-[1200px]:w-full max-[1200px]:h-[calc(100vh-70px)] 
        max-[1200px]:bg-white max-[1200px]:p-8 max-[1200px]:ml-0
        max-[1200px]:flex-col max-[1200px]:items-start max-[1200px]:justify-start
        
        transition-all duration-300 ease-in-out origin-top z-40
        
        ${
          isOpen
            ? 'max-[1200px]:flex max-[1200px]:opacity-100 max-[1200px]:visible max-[1200px]:translate-y-0'
            : 'max-[1200px]:hidden max-[1200px]:opacity-0 max-[1200px]:invisible max-[1200px]:-translate-y-4 max-[1200px]:pointer-events-none'
        }
      `}
    >
      <div className="flex items-center gap-8 max-[1200px]:flex-col max-[1200px]:items-start max-[1200px]:w-full max-[1200px]:gap-0">

        <NavLink
          href="#"
          label="Get Lotessa"
          onClick={(e) => {
            e.preventDefault();
            setView('register');
            setIsOpen(false);
          }}
        />

        <NavLink
          href="#"
          label="Join the Community"
          onClick={(e) => {
            e.preventDefault();
            setView('register');
            setIsOpen(false);
          }}
        />

        <NavLink
          href="#library"
          label="Lotessa Library"
          onClick={(e) => handleScroll(e, '#library')}
        />

        <NavLink
          href="#partner"
          label="Partner With Lotessa"
          onClick={(e) => handleScroll(e, '#partner')}
        />

        <NavLink
          href="#contact"
          label="Contact Us"
          onClick={(e) => handleScroll(e, '#contact')}
        />

      </div>

      <div className="flex items-center gap-4 max-[1200px]:flex-col max-[1200px]:w-full max-[1200px]:mt-auto max-[1200px]:gap-3">

        <div className="max-[1200px]:w-full [&>*]:max-[1200px]:w-full">
          <Button
            text="Sign In"
            variant="outline"
            onClick={(e) => {
              e.preventDefault();
              setView('signin');
              setIsOpen(false);
            }}
          />
        </div>

        <div className="max-[1200px]:w-full [&>*]:max-[1200px]:w-full">
          <Button
            text="Create Account"
            variant="solid"
            onClick={(e) => {
              e.preventDefault();
              setView('register');
              setIsOpen(false);
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default NavBarItem;