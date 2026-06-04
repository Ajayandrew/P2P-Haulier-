import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import Services from './components/Services';
import About from './components/About';
import Technology from './components/Technology';
import FleetShowcase from './components/FleetShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import CoverageNetwork from './components/CoverageNetwork';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans antialiased selection:bg-brand-orange selection:text-black overflow-x-hidden">
      
      {/* GLOBAL ENTERPRISE AMBIENT GLOWS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-blue/20 blur-[120px]" />
        <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-brand-orange/5 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-brand-blue/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustMetrics />
        <Services />
        <About />
        <Technology />
        <FleetShowcase />
        <WhyChooseUs />
        <Industries />
        <ProcessTimeline />
        <Testimonials />
        <CoverageNetwork />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}