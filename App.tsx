import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedInstallers from './components/FeaturedInstallers';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIChatButton from './components/AIChatButton';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedInstallers />
        <Services />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
      <AIChatButton />
    </div>
  );
}

export default App;