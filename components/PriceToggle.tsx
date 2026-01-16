import React from 'react';

interface PriceToggleProps {
  isGross: boolean;
  setIsGross: (val: boolean) => void;
}

export const PriceToggle: React.FC<PriceToggleProps> = ({ isGross, setIsGross }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <span className={`text-sm font-medium ${!isGross ? 'text-white' : 'text-gray-500'}`}>Nettó</span>
      <button 
        onClick={() => setIsGross(!isGross)}
        className="w-14 h-7 bg-white/10 rounded-full relative transition-colors focus:outline-none border border-white/20"
      >
        <div 
          className={`absolute top-1 left-1 w-5 h-5 bg-[#001aff] rounded-full transition-transform duration-300 ${
            isGross ? 'translate-x-7' : 'translate-x-0'
          }`} 
        />
      </button>
      <span className={`text-sm font-medium ${isGross ? 'text-white' : 'text-gray-500'}`}>Bruttó</span>
    </div>
  );
};