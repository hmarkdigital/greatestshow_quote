import React from 'react';
import { Check } from 'lucide-react';
import { RECURRING_PACKAGES } from '../constants';

interface RecurringProps {
  isGross: boolean;
}

export const Recurring: React.FC<RecurringProps> = ({ isGross }) => {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <section id="recurring" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#001aff]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-[#001aff] font-bold tracking-widest uppercase text-sm mb-3">Folyamatos Jelenlét</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Havidíjas Szolgáltatások</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Az egyszeri szolgáltatások lefektetik az alapokat. De a valódi közösség építése és a márkaismertség növelése folyamatos munkát igényel, ezt biztosítják havidíjas csomagjaink
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {RECURRING_PACKAGES.map((pkg) => {
            const isPremium = pkg.level === 'Premium';
            const price = isGross ? pkg.monthlyPrice.gross : pkg.monthlyPrice.net;
            const themeColor = pkg.color || '#001aff';

            return (
              <div 
                key={pkg.id}
                className="group relative rounded-3xl p-8 md:p-10 transition-all duration-300 flex flex-col hover:-translate-y-2 hover:border-opacity-100"
                style={{
                    backgroundColor: isPremium ? 'rgba(26, 26, 46, 0.6)' : '#111',
                    borderColor: themeColor,
                    borderWidth: '1px',
                    // Initial state handled here, hover state handled via onMouseEnter/Leave for dynamic color support
                    boxShadow: isPremium ? `0 0 40px ${themeColor}26` : 'none'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 50px ${themeColor}50`;
                    e.currentTarget.style.borderColor = themeColor;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = isPremium ? `0 0 40px ${themeColor}26` : 'none';
                }}
              >
                <div className="mb-8">
                  {pkg.logo ? (
                      <img src={pkg.logo} alt={pkg.name} className="h-10 mb-4 transition-transform duration-300 group-hover:scale-105" />
                  ) : (
                    <h3 className={`text-3xl font-bold mb-2 ${isPremium ? 'text-white' : 'text-gray-200'}`}>
                        {pkg.name}
                    </h3>
                  )}
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold" style={{ color: themeColor }}>
                      {formatPrice(price)}
                    </span>
                    <span className="text-gray-500">/hó</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {isGross ? 'Bruttó' : 'Nettó'} ár
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full p-0.5" style={{ backgroundColor: themeColor }}>
                        <Check size={12} className="text-white" />
                      </div>
                      <span className={`text-sm ${isPremium ? 'text-gray-200' : 'text-gray-400'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto italic border-l-2 border-yellow-600/50 pl-4 py-2 bg-yellow-900/10 text-left">
                ⚠️ Fontos: A havidíjas árak nem tartalmazzák a hirdetési keretet (Google/Meta), a szoftver díjakat és az esetleges forgatási költségeket.
            </p>
        </div>
      </div>
    </section>
  );
};