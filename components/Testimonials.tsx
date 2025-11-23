import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Customer Testimonials</h2>
          <p className="text-slate-600 mt-4">Satisfied users across the USA sharing their experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 relative transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -top-4 left-8 bg-emerald-500 text-white p-2 rounded-lg">
                    <Quote size={20} />
                </div>
                <p className="text-slate-600 italic mb-6 pt-4 leading-relaxed">
                    "I found a certified installer for my Tesla Wall Connector in less than 10 minutes. The process was seamless and the contractor was incredibly professional."
                </p>
                <div className="flex items-center gap-4">
                    <img src="https://picsum.photos/seed/user1/50/50" alt="Otis" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <p className="font-bold text-slate-900">Sarah Jenkins</p>
                        <p className="text-xs text-slate-500">Austin, TX</p>
                    </div>
                </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 relative transform hover:-translate-y-1 transition-transform duration-300">
                 <div className="absolute -top-4 left-8 bg-emerald-500 text-white p-2 rounded-lg">
                    <Quote size={20} />
                </div>
                <p className="text-slate-600 italic mb-6 pt-4 leading-relaxed">
                    "The quality of installers here is unmatched. I got three quotes for solar panels, compared them, and saved about $4,000 on my installation."
                </p>
                <div className="flex items-center gap-4">
                    <img src="https://picsum.photos/seed/user2/50/50" alt="Norris" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <p className="font-bold text-slate-900">Mike Ross</p>
                        <p className="text-xs text-slate-500">Denver, CO</p>
                    </div>
                </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 relative transform hover:-translate-y-1 transition-transform duration-300">
                 <div className="absolute -top-4 left-8 bg-emerald-500 text-white p-2 rounded-lg">
                    <Quote size={20} />
                </div>
                <p className="text-slate-600 italic mb-6 pt-4 leading-relaxed">
                    "Finally a directory that actually vets their professionals. The battery storage system works perfectly. Highly recommend using this hub."
                </p>
                <div className="flex items-center gap-4">
                    <img src="https://picsum.photos/seed/user3/50/50" alt="John" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <p className="font-bold text-slate-900">John Doe</p>
                        <p className="text-xs text-slate-500">San Diego, CA</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;