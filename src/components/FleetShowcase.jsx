import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fleetItems = [
  { 
    name: "Container Linehaulers", 
    capacity: "32 Ton High-Volume FTL", 
    type: "heavy", 
    desc: "Long-haul interstate freight distribution optimized for secure box configurations.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    name: "Heavy Cargo Transports", 
    capacity: "Multi-Axle Specialized Assets", 
    type: "heavy", 
    desc: "Bespoke engineered machinery moving tools structural layout components.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600"
  },
  { 
    name: "Cold-Chain Fleet", 
    capacity: "Thermal-Controlled Units", 
    type: "heavy", 
    desc: "Continuous automated environment telemetry logging for pharmaceuticals.",
    img: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=600"
  },
  { 
    name: "Express Delivery Fleet", 
    capacity: "3.5 Ton Fast Dispatch", 
    type: "express", 
    desc: "Hyper-localized high frequency urban freight drops handling rapid closeouts.",
    img: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&q=80&w=600"
  }
];

export default function FleetShowcase() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="fleet" className="py-32 bg-gray-950/40 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">High Performance Assets</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">The P2P Tactical Fleet</h2>
          </div>
          
          <div className="flex bg-white/5 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {['all', 'heavy', 'express'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${activeTab === tab ? 'bg-brand-orange text-black' : 'text-gray-400 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetItems.filter(f => activeTab === 'all' || f.type === activeTab).map((item, index) => (
            <motion.div
              layout
              key={index}
              className="group relative rounded-2xl border border-white/5 bg-gray-900/40 overflow-hidden flex flex-col justify-between h-[380px] transition-all duration-300 hover:border-white/10"
            >
              {/* ASSET BACKGROUND IMAGE WITH TEXTURE FILTER OVERLAYS */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
              </div>
              
              <div className="p-6 space-y-2 relative z-10">
                <span className="text-[10px] font-mono font-bold tracking-widest text-brand-orange px-2 py-0.5 rounded bg-brand-orange/10">
                  {item.capacity}
                </span>
                <h3 className="text-xl font-bold pt-2 text-white">{item.name}</h3>
              </div>

              <div className="p-6 space-y-4 relative z-10">
                <p className="text-xs text-[#94A3B8] leading-relaxed">{item.desc}</p>
                <div className="w-full h-[1px] bg-white/5" />
                <div className="flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>FLEET_STATUS // AVAILABLE</span>
                  <span className="text-green-400">● Online</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}