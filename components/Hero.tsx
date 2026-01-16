import React from 'react';
import { ChevronDown } from 'lucide-react';
import { CLIENT_INFO } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#001aff]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px]" />
        
        {/* Abstract Lines SVG */}
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 50 0 100 50 T 200 50" stroke="url(#gradient)" strokeWidth="0.5" fill="none" />
          <path d="M0 70 Q 50 20 100 70 T 200 70" stroke="url(#gradient)" strokeWidth="0.5" fill="none" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#001aff" stopOpacity="0" />
              <stop offset="50%" stopColor="#001aff" stopOpacity="1" />
              <stop offset="100%" stopColor="#001aff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-4 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              {CLIENT_INFO.name}
            </h3>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">Árajánlat: {CLIENT_INFO.date}</span>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            <span className="blue-gradient-text">Digitális marketing</span> <br />
            árajánlat
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stratégia, Branding és Webfejlesztés a partysorozat sikeres elindításához.
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};