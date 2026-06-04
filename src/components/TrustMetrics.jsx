import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Globe2, Award } from 'lucide-react';

const RunningCounter = ({ from = 0, to, duration = 1.5, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const [startCounting, setStartCounting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        } else {
          // 💡 FIXED: This resets the counter back to 0 the moment it leaves the screen!
          setStartCounting(false);
          setCount(from);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.2 // Triggers cleanly as soon as the card edge is visible
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [from]);

  useEffect(() => {
    if (!startCounting) return;

    let start = from;
    const end = parseInt(to);
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMiliseconds / end), 12); 
    
    const timer = setInterval(() => {
      start += Math.ceil((end - start) / 8); // Slightly faster pacing for repeatable scrolling
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [startCounting, from, to, duration]);

  return (
    <span ref={elementRef} className="font-mono">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function TrustMetrics() {
  const metrics = [
    { icon: Users, title: "Active Clients", value: 1250, suffix: "+", desc: "Enterprise partners trusting our ecosystem daily." },
    { icon: Globe2, title: "Kilometers Covered", value: 450000, suffix: " km", desc: "Heavy linehaul distribution across primary commercial grids." },
    { icon: ShieldCheck, title: "SLA Success Rate", value: 99, suffix: "%", desc: "Precision timing verified via programmatic ledger checkpoints." },
    { icon: Award, title: "Fleet Strength", value: 350, suffix: "+", desc: "Multi-modal transport vehicles active on public telemetry." }
  ];

  return (
    <section className="pt-16 pb-6 max-w-7xl mx-auto px-4 relative z-10 border-t border-white/5 mt-12 mb-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // 💡 FIXED: Removed once: true. Now the cards fade back in beautifully on every scroll look.
            viewport={{ once: false, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
            className="p-6 rounded-2xl border border-white/5 bg-gray-900/10 backdrop-blur-md flex flex-col justify-between hover:border-white/10 transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange mb-4">
                <metric.icon className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold tracking-widest text-[#94A3B8] uppercase mb-1">
                {metric.title}
              </p>
              <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                <RunningCounter to={metric.value} suffix={metric.suffix} />
              </h3>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {metric.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}