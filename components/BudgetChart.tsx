import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { SETUP_TOTAL, RECURRING_PACKAGES } from '../constants';

interface BudgetChartProps {
  isGross: boolean;
}

export const BudgetChart: React.FC<BudgetChartProps> = ({ isGross }) => {
  const setupCost = isGross ? SETUP_TOTAL.gross : SETUP_TOTAL.net;
  
  // Calculate First Year Cost: Setup + (6 months of Basic OR 12 months of Premium?)
  // Let's visualize the "Zero to Hero" Example which uses 6 months of Prime
  const monthlyPrime = isGross ? RECURRING_PACKAGES[1].monthlyPrice.gross : RECURRING_PACKAGES[1].monthlyPrice.net;
  const sixMonthPrime = monthlyPrime * 6;
  
  const data = [
    {
      name: 'Setup (Egyszeri)',
      value: setupCost,
      color: '#2563eb'
    },
    {
      name: '6 Hó Prime (Havidíj)',
      value: sixMonthPrime,
      color: '#1e40af'
    },
    {
      name: 'Összesen (Beruházás)',
      value: setupCost + sixMonthPrime,
      color: '#10b981' // Green for total
    }
  ];

  const formatCurrency = (value: number) => {
     return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 0 }).format(value);
  }

  return (
    <div className="h-[300px] w-full bg-[#111] p-4 rounded-xl border border-white/5">
        <h3 className="text-white text-lg font-semibold mb-4 text-center">ZERO TO HERO Példaszámítás</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={120} 
            tick={{fill: '#9ca3af', fontSize: 12}} 
            interval={0}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff' }}
            formatter={(value: number) => [formatCurrency(value), 'Összeg']}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};