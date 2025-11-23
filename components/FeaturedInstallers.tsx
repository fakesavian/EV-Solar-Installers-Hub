import React from 'react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Installer } from '../types';

const installers: Installer[] = [
  {
    id: 1,
    name: "Sunrise Solar",
    location: "Austin, TX",
    rating: 4.9,
    reviews: 120,
    tags: ["Solar", "Battery", "EV Charger"],
    logo: "https://picsum.photos/seed/sun1/100/100",
  },
  {
    id: 2,
    name: "Volt EV Solutions",
    location: "Austin, TX",
    rating: 4.8,
    reviews: 85,
    tags: ["EV Charger", "Commercial"],
    logo: "https://picsum.photos/seed/volt2/100/100",
  },
  {
    id: 3,
    name: "Sonfire Solar",
    location: "Austin, TX",
    rating: 4.9,
    reviews: 210,
    tags: ["Solar", "Roofing", "Battery"],
    logo: "https://picsum.photos/seed/son3/100/100",
  },
  {
    id: 4,
    name: "Green Energy Co",
    location: "Austin, TX",
    rating: 4.7,
    reviews: 64,
    tags: ["Solar", "HVAC"],
    logo: "https://picsum.photos/seed/grn4/100/100",
  },
  {
    id: 5,
    name: "Blue Sky Power",
    location: "Austin, TX",
    rating: 4.9,
    reviews: 150,
    tags: ["Solar", "Battery"],
    logo: "https://picsum.photos/seed/blue5/100/100",
  },
  {
    id: 6,
    name: "Texas Electric",
    location: "Austin, TX",
    rating: 4.5,
    reviews: 300,
    tags: ["EV Charger", "Panel Upgrade"],
    logo: "https://picsum.photos/seed/tex6/100/100",
  },
  {
    id: 7,
    name: "EcoFlow Installers",
    location: "Austin, TX",
    rating: 4.8,
    reviews: 92,
    tags: ["Battery", "Off-grid"],
    logo: "https://picsum.photos/seed/eco7/100/100",
  },
  {
    id: 8,
    name: "Future Current",
    location: "Austin, TX",
    rating: 5.0,
    reviews: 45,
    tags: ["EV Charger", "Smart Home"],
    logo: "https://picsum.photos/seed/fut8/100/100",
  },
];

const FeaturedInstallers: React.FC = () => {
  return (
    <section className="py-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Installers</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Browse our top-rated EV & Solar installation professionals in your area. Verified reviews and competitive quotes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {installers.map((installer) => (
            <div key={installer.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <img src={installer.logo} alt={installer.name} className="w-14 h-14 rounded-xl object-cover bg-slate-100" />
                <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-sm text-slate-800">{installer.rating}</span>
                  <span className="text-xs text-slate-400">/5</span>
                </div>
              </div>
              
              <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">{installer.name}</h3>
              <div className="flex items-center text-slate-500 text-sm mb-4">
                <MapPin size={14} className="mr-1" />
                {installer.location}
              </div>

              <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                {installer.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="w-full bg-emerald-50 text-emerald-700 font-semibold py-3 rounded-xl hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-md">
                Request Quote
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <button className="px-8 py-3 border border-slate-300 text-slate-600 font-semibold rounded-full hover:border-emerald-600 hover:text-emerald-600 transition-colors">
                View All Installers
            </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstallers;