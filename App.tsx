import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Approach } from './components/Approach';
import { Services } from './components/Services';
import { Recurring } from './components/Recurring';
import { Summary } from './components/Summary';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';

const App: React.FC = () => {
  // Global state for price display (Net vs Gross)
  // Default to Gross as per standard B2C/Mixed presentation, but easily toggleable
  const [isGross, setIsGross] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#001aff] selection:text-white">
      <NavBar />
      
      <main>
        <Hero />
        
        <Approach />
        
        <ScrollReveal>
            <Services isGross={isGross} setIsGross={setIsGross} />
        </ScrollReveal>
        
        <ScrollReveal>
            <Recurring isGross={isGross} />
        </ScrollReveal>
        
        <Summary isGross={isGross} />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;