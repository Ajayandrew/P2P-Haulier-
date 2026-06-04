import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div className="text-xs font-bold tracking-widest text-brand-orange uppercase">Strategic Leverage</div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">Built For Mission-Critical Logistics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-2xl border border-white/5 bg-gray-900/20 backdrop-blur-md md:col-span-2 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/30 text-blue-400 flex items-center justify-center font-bold">01</div>
          <h3 className="text-2xl font-bold">Pan India Coverage Logistics Network</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            We interconnect multiple major trading zones seamlessly. Our deep geographical network reach covers vital economic corridors across India, facilitating rapid regional cross-dock transitions.
          </p>
        </div>
        <div className="p-8 rounded-2xl border border-white/5 bg-gray-900/20 backdrop-blur-md space-y-4">
          <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold">02</div>
          <h3 className="text-2xl font-bold">Absolute Visibility</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Every single vehicle asset emits constant location tracking markers, verified instantly inside your operational dashboards.
          </p>
        </div>
        <div className="p-8 rounded-2xl border border-white/5 bg-gray-900/20 backdrop-blur-md space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">03</div>
          <h3 className="text-2xl font-bold">Secure Systems</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Rigidly enforced lock protocols protecting heavy industrial goods and sensitive raw inputs safely.
          </p>
        </div>
        <div className="p-8 rounded-2xl border border-white/5 bg-gray-900/20 backdrop-blur-md md:col-span-2 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">04</div>
          <h3 className="text-2xl font-bold">Dedicated Solution Support Engineering</h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Forget waiting through mechanical voice queues. We provide enterprise-level logistics account engineers actively monitoring exception workflows to maximize fulfillment reliability.
          </p>
        </div>
      </div>
    </section>
  );
}