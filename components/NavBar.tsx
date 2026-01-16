import React, { useState, useEffect } from 'react';

export const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        {/* Logo */}
        <div className="h-16 md:h-20 transition-all duration-300">
            <img 
                src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/68626f6df01604b21d1e564b_Dropline_logo_web%20(1).svg" 
                alt="Dropline" 
                className="h-full w-auto"
            />
        </div>
      </div>
    </nav>
  );
};