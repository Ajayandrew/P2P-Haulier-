import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = ['Home', 'Services', 'Technology', 'Fleet', 'Industries'];

  useEffect(() => {
    const sectionsToTrack = [...navItems.map(item => item.toLowerCase()), 'contact'];

    const observers = sectionsToTrack.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs?.observer && obs?.element) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  return (
    <nav className="fixed top-4 inset-x-0 max-w-7xl mx-auto z-50 px-4">
      <div className="backdrop-blur-xl bg-gray-950/60 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-300 hover:border-white/20">

        <div className="flex items-center overflow-hidden">
          <a
            href="#home"
            className="flex items-center transition-transform duration-300 hover:scale-[1.02] py-1"
          >
            <div className="w-32 sm:w-44 md:w-52 h-9 sm:h-13 md:h-16 overflow-hidden relative flex items-center">
              <img
                src="/p2p_logo.png"
                alt="P2P Haulier & Services Logo"
                className="absolute w-full h-full object-cover scale-[1.4] brightness-125 contrast-110 drop-shadow-[0_0_25px_rgba(256,146,30,0.35)]"
              />
            </div>
          </a>
        </div>


        {/* NAVIGATION LINKS */}
        <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
          {navItems.map((item) => {
            const itemLower = item.toLowerCase();
            const isActive = activeSection === itemLower;

            return (
              <a
                key={item}
                href={`#${itemLower}`}
                className={`transition-colors duration-200 relative group py-1 ${isActive ? 'text-white' : 'hover:text-white'
                  }`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-orange transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </a>
            );
          })}
        </div>

        {/* ACTION BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${activeSection === 'contact'
                ? 'bg-brand-orange text-white'
                : 'bg-white text-black hover:bg-gray-200'
              }`}
          >
            Get Quote
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="xl:hidden text-white focus:outline-none p-1">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE BREAKDOWN DROPDOWN */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 inset-x-4 bg-gray-950/95 border border-white/10 rounded-2xl p-6 backdrop-blur-2xl xl:hidden shadow-2xl z-50"
          >
            <div className="flex flex-col gap-4 text-lg font-medium text-[#94A3B8]">
              {['Home', 'Services', 'Technology', 'Fleet', 'Industries', 'Contact'].map((item) => {
                const itemLower = item.toLowerCase();
                const isActive = activeSection === itemLower;

                return (
                  <a
                    key={item}
                    href={`#${itemLower}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-2 border-b border-white/5 transition-colors ${isActive ? 'text-white font-semibold pl-2 border-l-2 border-l-brand-orange' : 'hover:text-white'
                      }`}
                  >
                    {item}
                  </a>
                );
              })}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-4 w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-orange text-white font-semibold">
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}