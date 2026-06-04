import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      <div className="relative rounded-3xl border border-brand-blue/40 bg-gradient-to-br from-[#030712] via-brand-blue/20 to-gray-900 p-12 md:p-20 text-center overflow-hidden group">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-orange/10 blur-[100px] pointer-events-none" />
        
        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">Ready To Move Smarter?</h2>
          <p className="text-[#94A3B8] text-base md:text-lg font-light leading-relaxed">
            Optimize your logistics operations, lower execution friction parameters, and scale shipping volumes through technology-driven transportation frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="#contact" className="px-8 py-4 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:bg-gray-200 transition-transform duration-300 hover:scale-[1.02]">
              Request Enterprise Quote
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors duration-300">
              Contact Strategy Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}