import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <div className="pt-8">
            <div className="flex items-center justify-center mb-6">
                 <div className="h-12 md:h-16 opacity-80 hover:opacity-100 transition-opacity">
                    <img 
                        src="https://cdn.prod.website-files.com/67696bf6a7f399ccfcfd653f/68626f6df01604b21d1e564b_Dropline_logo_web%20(1).svg" 
                        alt="Dropline" 
                        className="h-full w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>
            <p className="text-xs text-gray-600">
                Copyright 2025 | Powered By dropline advertising
            </p>
        </div>
      </div>
    </footer>
  );
};