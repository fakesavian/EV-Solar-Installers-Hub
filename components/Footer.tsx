import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="bg-emerald-500 text-white p-1.5 rounded-lg">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <span className="font-bold text-xl">EV Solar Installers Hub</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Connecting homeowners with the best vetted professionals in the industry. Your journey to a sustainable future starts here.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Youtube size={20} /></a>
                </div>
            </div>

            {/* Directory */}
            <div>
                <h4 className="font-bold text-lg mb-6">Directory</h4>
                <ul className="space-y-3 text-slate-400 text-sm">
                    <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
                    <li><a href="#" className="hover:text-emerald-400 transition-colors">Browse Installers</a></li>
                    <li><a href="#" className="hover:text-emerald-400 transition-colors">Solar Solutions</a></li>
                    <li><a href="#" className="hover:text-emerald-400 transition-colors">EV Charging</a></li>
                    <li><a href="#" className="hover:text-emerald-400 transition-colors">Get Listed</a></li>
                </ul>
            </div>

            {/* Resources */}
            <div>
                <h4 className="font-bold text-lg mb-6">Resources</h4>
                <ul className="space-y-3 text-slate-400 text-sm">
                    <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Support</a></li>
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                <p className="text-slate-400 text-sm mb-4">Sign up to receive updates and eco-tips.</p>
                <div className="flex flex-col gap-3">
                    <div className="relative">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 p-1.5 rounded text-white hover:bg-emerald-600 transition-colors">
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} EV Solar Installers Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;