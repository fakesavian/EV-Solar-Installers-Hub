import React from 'react';
import { Zap, Sun, Battery } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">What we offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Our Services</h2>
          <p className="text-slate-500">Comprehensive solutions for your sustainable energy journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">EV Charging Installation</h3>
            <p className="text-slate-600 leading-relaxed">
              Professional installation of Level 2 and DC Fast Chargers for homes and businesses. Get connected with certified electricians.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sun className="text-orange-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Solar Panel Systems</h3>
            <p className="text-slate-600 leading-relaxed">
              Custom solar PV system design and installation. Maximize your energy production and reduce your carbon footprint today.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Battery className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Battery Storage</h3>
            <p className="text-slate-600 leading-relaxed">
              Energy resilience with advanced battery storage solutions. Keep your lights on during outages and store excess solar power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;