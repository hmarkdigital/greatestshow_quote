import React from 'react';
import { Lightbulb, Layout, Share2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Approach: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Brandépítés",
      icon: Layout,
      desc: "The Greatest Show master brand identitás, bulisorozat brand identitás, teljes, egységes vizuális rendszer."
    },
    {
      id: "02",
      title: "Stratégiaalkotás",
      icon: Lightbulb,
      desc: "Brand architektúra tervezés, célcsoport-meghatározás, pozicionálás, kommunikációs üzenetek"
    },
    {
      id: "03",
      title: "Social media kommunikáció",
      icon: Share2,
      desc: "A legfontosabb pillér, a projekt sikerességét a social kommunikáció fogja leginkább meghatározni. Ezért egy jól átgondolt rendszerre van szükség."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#001aff]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
            <div className="mb-16 max-w-3xl">
                <h4 className="text-[#001aff] font-bold tracking-widest uppercase text-sm mb-3">Roadmap</h4>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A projekt megközelítése</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    A feladat egy produkciós és partyszervező márka digitális márkaépítése umbrella márkastruktúrában, ahol a fő márka erősíti az al-brandeket, de azok saját identitással rendelkeznek.
                </p>
            </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.id} delay={index * 200}>
                <div className="group h-full bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#001aff]/30 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-[#001aff]/10 rounded-lg text-[#001aff] group-hover:bg-[#001aff] group-hover:text-white transition-colors duration-300">
                            <step.icon size={24} />
                        </div>
                        <span className="text-4xl font-black text-[#1a1a1a] group-hover:text-[#001aff]/10 transition-colors duration-300">
                            {step.id}
                        </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#001aff] transition-colors">
                        {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {step.desc}
                    </p>
                </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};