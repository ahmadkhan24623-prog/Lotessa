import React from 'react';

const CenterText = () => {
  return (
    <div 
      id="library" 
      className="text-center max-w-4xl mx-auto pt-20 pb-12 px-4 font-sans"
    >
      <span className="text-emerald-500 font-bold text-xs tracking-[0.2em] uppercase block mb-4">
        Lotessa Library
      </span>
      
      <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold text-zinc-900 tracking-tight leading-[1.15] mb-6">
        Discover Expert Content,<br className="hidden sm:inline" /> Anytime
      </h1>
      
      <p className="text-base sm:text-lg text-zinc-600 font-normal max-w-2xl mx-auto leading-relaxed">
        Bite-sized insights, real-world tips, and trustworthy health information
      </p>
    </div>
  );
};

export default CenterText;