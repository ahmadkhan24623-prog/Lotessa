import React from 'react';

function Button({ text, variant = 'solid', onClick }) {
  const baseStyles = "px-6 py-2.5 text-base font-semibold rounded-xl transition-all duration-200 ease-in-out cursor-pointer";
  
  const variants = {
    outline: "bg-transparent text-[#2bb0a3] border-[1.5px] border-[#2bb0a3] hover:bg-[#2bb0a3] hover:text-white hover:border-[#2bb0a3]",
    solid: "bg-[#2bb0a3] text-white border-none hover:bg-[#228c82]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;