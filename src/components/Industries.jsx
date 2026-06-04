import React from 'react';

export default function Industries() {
  const industries = ["Automotive", "FMCG", "Manufacturing", "Retail Systems", "Healthcare", "E-Commerce"];

  return (
    <section id="industries" className="py-32 bg-gray-950/40 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">Market Verticals</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Tailored Across High-Velocity Sectors</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className="p-6 rounded-xl border border-white/5 bg-gray-900/20 backdrop-blur-sm text-center space-y-3 group hover:bg-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-brand-orange mx-auto scale-0 group-hover:scale-100 transition-transform duration-300" />
              <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors duration-200">{ind}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}