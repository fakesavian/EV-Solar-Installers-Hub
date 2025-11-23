import React from 'react';
import { Search, FileText, CheckCircle2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
            <p className="text-slate-500 mt-4">Take an easy step towards energy independence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

            <div className="text-center relative">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-slate-50 z-10">
                    <Search className="text-emerald-500" size={36} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Search & Compare</h3>
                <p className="text-slate-600 px-4">Enter your location to find rated installers. Compare profiles, reviews, and specialties easily.</p>
            </div>

            <div className="text-center relative">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-slate-50 z-10">
                    <FileText className="text-emerald-500" size={36} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Request Quotes</h3>
                <p className="text-slate-600 px-4">Select professionals and request detailed quotes. It's free, fast, and no obligation.</p>
            </div>

            <div className="text-center relative">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-slate-50 z-10">
                    <CheckCircle2 className="text-emerald-500" size={36} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Get Installed</h3>
                <p className="text-slate-600 px-4">Hire the best match for your needs. Enjoy your new sustainable energy solution.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;