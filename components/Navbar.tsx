import React, { useState } from 'react';
import { Zap, Menu, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-2 rounded-lg">
              <Zap size={24} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-slate-800">EV Solar</span>
              <span className="text-xs font-medium text-slate-500 tracking-wide">INSTALLERS HUB</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Find Installers</a>
            <a href="#" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">EV Charging</a>
            <a href="#" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Solar Solutions</a>
            <a href="#" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">About Us</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-10 pr-4 py-2 rounded-full bg-slate-100 border-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm w-48 lg:w-64 outline-none"
                />
             </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Listed
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50">Find Installers</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50">EV Charging</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50">Solar Solutions</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50">About Us</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-emerald-600 font-semibold">Get Listed</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;