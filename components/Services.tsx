import React from 'react';
import { Target, Palette, Globe, Check } from 'lucide-react';
import { ONE_TIME_SERVICES } from '../constants';
import { PriceToggle } from './PriceToggle';

interface ServicesProps {
  isGross: boolean;
  setIsGross: (val: boolean) => void;
}

const icons = {
  "A1": Target,
  "A2": Palette,
  "A3": Globe
};

export const Services: React.FC<ServicesProps> = ({ isGross, setIsGross }) => {

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <section id="services" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-[#001aff] font-bold tracking-widest uppercase text-sm mb-3">Setup Csomagok</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Digitális alapok építése</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Az induláshoz szükséges egyszeri beruházások, melyek megalapozzák a márka hosszú távú sikerét.
          </p>
          <PriceToggle isGross={isGross} setIsGross={setIsGross} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-stretch">
          {ONE_TIME_SERVICES.map((service) => {
            const Icon = icons[service.id as keyof typeof icons] || Globe;
            const price = isGross ? service.price.gross : service.price.net;

            // Check for custom range display
            const displayPrice = service.customPriceRange
              ? (isGross ? service.customPriceRange.gross : service.customPriceRange.net)
              : formatPrice(price);

            return (
              <div
                key={service.id}
                className="group relative bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-[#001aff]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,26,255,0.1)] flex flex-col h-full w-full max-w-md md:max-w-none"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#001aff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-14 h-14 rounded-xl bg-[#001aff]/20 flex items-center justify-center mb-6 text-[#001aff] group-hover:scale-110 transition-all">
                  <Icon size={28} />
                </div>

                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded text-gray-400">{service.id}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{service.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                {service.subtitle && <p className="text-sm text-[#001aff] mb-4">{service.subtitle}</p>}

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#001aff] mt-1 shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="text-xs text-gray-500 mb-1">Beruházás értéke ({isGross ? 'Bruttó' : 'Nettó'})</p>
                  <div className="text-2xl font-bold text-white">
                    {displayPrice}
                  </div>
                  {service.note && (
                    <p className="text-xs text-yellow-500/80 mt-2 italic">
                      ⚠️ {service.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};