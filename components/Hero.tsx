import React from 'react';
import { MapPin, Search, ShieldCheck, DollarSign, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
      <div 
        className="h-[600px] lg:h-[700px] w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/20 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
            Find Trusted EV & Solar <br className="hidden md:block" />
            <span className="text-emerald-400">Installers Near You</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-100 max-w-2xl mx-auto font-medium drop-shadow-md">
            Search over 3,000 vetted professionals in the USA. Transition to sustainable energy with confidence.
          </p>

          {/* Search Box */}
          <div className="bg-white p-3 rounded-2xl shadow-2xl max-w-3xl mx-auto flex flex-col sm:flex-row gap-3 items-center w-full mt-8">
            <div className="relative flex-1 w-full">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Location (City or Zip Code)" 
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-slate-800"
              />
            </div>
            <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2">
              <Search size={20} />
              Find Installers
            </button>
          </div>

          {/* Value Props (Badges) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 w-full max-w-4xl">
             <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl flex items-center justify-center gap-3 shadow-lg">
                <div className="p-2 bg-emerald-100 rounded-full text-emerald-600">
                    <ShieldCheck size={20} />
                </div>
                <div className="text-left">
                    <p className="font-bold text-slate-800 text-sm">Vetted Pros</p>
                    <p className="text-xs text-slate-500">Licensed & Insured</p>
                </div>
             </div>
             <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl flex items-center justify-center gap-3 shadow-lg">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                    <DollarSign size={20} />
                </div>
                <div className="text-left">
                    <p className="font-bold text-slate-800 text-sm">Best Quotes</p>
                    <p className="text-xs text-slate-500">Competitive Pricing</p>
                </div>
             </div>
             <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl flex items-center justify-center gap-3 shadow-lg">
                <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <Leaf size={20} />
                </div>
                <div className="text-left">
                    <p className="font-bold text-slate-800 text-sm">Sustainable</p>
                    <p className="text-xs text-slate-500">Future Ready</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;