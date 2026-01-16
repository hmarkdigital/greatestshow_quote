import React, { useState } from 'react';
import { SETUP_TOTAL, TERMS, EXCLUSIONS, RECURRING_PACKAGES } from '../constants';
import { ScrollReveal } from './ScrollReveal';

interface SummaryProps {
  isGross: boolean;
}

export const Summary: React.FC<SummaryProps> = ({ isGross }) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>(RECURRING_PACKAGES[0].id);
  const [duration, setDuration] = useState<number>(6); // Default to 6 months

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(amount);
  };

  const setupPrice = isGross ? SETUP_TOTAL.gross : SETUP_TOTAL.net;
  
  // Calculator Logic
  const selectedPackage = RECURRING_PACKAGES.find(p => p.id === selectedPackageId) || RECURRING_PACKAGES[0];
  const monthlyFee = isGross ? selectedPackage.monthlyPrice.gross : selectedPackage.monthlyPrice.net;
  
  // Dynamic Calculation
  const totalContractCost = setupPrice + (monthlyFee * duration);

  return (
    <section id="summary" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Financials & Calculator */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-8">Pénzügyi Összefoglaló & Kalkulátor</h2>
                
                {/* Calculator Card */}
                <div className="bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl mb-8">
                    <div className="p-6 border-b border-white/10 bg-[#161616]">
                        <label className="text-sm text-gray-400 block mb-3 uppercase tracking-wider font-semibold">Válassz havidíjas csomagot:</label>
                        <div className="flex gap-4">
                            {RECURRING_PACKAGES.map((pkg) => (
                                <button
                                    key={pkg.id}
                                    onClick={() => setSelectedPackageId(pkg.id)}
                                    className={`flex-1 py-3 px-4 rounded-xl border transition-all duration-300 font-bold text-sm md:text-base ${
                                        selectedPackageId === pkg.id 
                                        ? `text-white` 
                                        : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                                    }`}
                                    style={selectedPackageId === pkg.id ? { backgroundColor: pkg.color, borderColor: pkg.color } : {}}
                                >
                                    {pkg.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 space-y-6">
                         {/* Setup Cost (Fixed) */}
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-white font-medium">Egyszeri Setup díj</h3>
                                <p className="text-xs text-gray-500">Stratégia + Branding + Web (A1+A2+A3)</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-xl font-bold text-white">{formatPrice(setupPrice)}</span>
                                <span className="text-xs text-gray-500">Maximum indikatív ár</span>
                            </div>
                        </div>

                         {/* Contract Duration Slider */}
                         <div className="py-4 border-t border-b border-white/10">
                             <div className="flex justify-between items-center mb-4">
                                <h3 className="text-white font-medium">Szerződés időtartama</h3>
                                <span className="text-xl font-bold text-[#001aff]">{duration} hónap</span>
                             </div>
                             
                             <input 
                                type="range" 
                                min="3" 
                                max="12" 
                                step="3"
                                value={duration}
                                onChange={(e) => setDuration(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#001aff]"
                             />
                             <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                                 <span>3 hó</span>
                                 <span>6 hó</span>
                                 <span>9 hó</span>
                                 <span>12 hó</span>
                             </div>
                         </div>

                         {/* Monthly Cost (Variable) */}
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-white font-medium">Havidíj</h3>
                                <p className="text-xs text-gray-500" style={{ color: selectedPackage.color }}>{selectedPackage.name}</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-xl font-bold" style={{ color: selectedPackage.color }}>{formatPrice(monthlyFee)}</span>
                                <span className="text-xs text-gray-500">/ hónap</span>
                            </div>
                        </div>

                        {/* Grand Total */}
                        <div className="flex justify-between items-center bg-[#001aff]/10 p-5 rounded-xl border border-[#001aff]/20 mt-4">
                            <div>
                                <span className="block text-lg font-bold text-white">Összköltség</span>
                                <span className="text-xs text-[#001aff]/70">Setup + {duration} havi díj</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-2xl font-black text-[#001aff]">{formatPrice(totalContractCost)}</span>
                            </div>
                        </div>
                         
                         <p className="text-xs text-center text-gray-500 mt-4">
                            Az árak {isGross ? 'tartalmazzák' : 'nem tartalmazzák'} az ÁFA-t.
                         </p>
                    </div>
                </div>
                
            </div>

            {/* Right Column: Legal & Exclusions */}
            <div className="lg:pl-8 lg:border-l border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">Feltételek & Tudnivalók</h2>
                
                <div className="mb-10">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-red-500 rounded-full"></span>
                        Nem tartalmazza az ár
                    </h3>
                    <ul className="space-y-3">
                        {EXCLUSIONS.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                                <span className="text-red-500 font-bold">×</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-[#001aff] rounded-full"></span>
                        Jogi feltételek
                    </h3>
                    <ul className="space-y-3">
                        {TERMS.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                                <span className="text-[#001aff] font-bold">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="mt-10 p-6 bg-[#001aff]/10 rounded-xl border border-[#001aff]/20">
                    <p className="text-sm text-blue-200">
                        <strong>Dokumentum érvényessége:</strong> 2026. március 31.
                    </p>
                    <p className="text-xs text-blue-300/60 mt-2">
                        Azonosító: TGS-DL-2026-01
                    </p>
                </div>

            </div>
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
};