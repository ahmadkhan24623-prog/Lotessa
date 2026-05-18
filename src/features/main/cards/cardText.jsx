import React from 'react';

const CardText = ({ category, title, description, readTime, onOpenPopup }) => {
  const isFeatured = category === "Featured Article";

  return (
    <div className={`bg-white border border-slate-100 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between font-sans group/card
      ${isFeatured ? 'p-8 md:p-10 h-full min-h-[550px]' : 'p-6 md:p-8 h-full'}
    `}>
      <div className="flex-grow">
        <span className="text-[#029664] font-bold text-xs tracking-[0.15em] uppercase block mb-4">
          {category}
        </span>
        
        <h3 
          onClick={onOpenPopup}
          className={`font-extrabold tracking-tight leading-[1.25] mb-4 cursor-pointer transition-colors duration-300
          ${isFeatured 
            ? 'text-[#029664] hover:text-[#02754e] text-2xl md:text-[30px]' 
            : 'text-zinc-900 hover:text-[#029664] group-hover/card:text-[#029664] text-xl md:text-[22px]'
          }
        `}>
          {title}
        </h3>
        
        <p className={`text-[#475467] font-normal leading-[1.65] whitespace-pre-line ${
          isFeatured ? 'text-sm md:text-base mb-8' : 'text-xs md:text-sm mb-4 text-slate-500'
        }`}>
          {description}
        </p>
      </div>
      
      <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
        <button 
          onClick={onOpenPopup}
          className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-[#101828] uppercase hover:text-[#029664] transition-colors duration-300 group/btn"
        >
          Read More 
          <svg 
            className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.1em]">
          {readTime}
        </span>
      </div>
    </div>
  );
};

export default CardText;