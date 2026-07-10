'use client';

import { useState } from 'react';
import { aestheticsServices, serviceCategories } from '../data/aestheticsServices';
import BookingModal from '../BookingModel/page';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({ name: '', price: '', tag: '' });

  const filteredServices = activeCategory === "All" 
    ? aestheticsServices 
    : aestheticsServices.filter(service => service.category === activeCategory);

  const openModalWithService = (title, price, category) => {
    setSelectedService({
      name: title,
      price: price,
      tag: category
    });
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-8 lg:py-20 bg-[#0B0C10] font-outfit text-slate-100 overflow-hidden relative">
      <div className="absolute top-1/3 left-[-10%] w-96 h-96 bg-amber-500/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-amber-400 bg-amber-500/4 border border-amber-500/20 uppercase">
            ✨ Premium Clinical Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Our Specialized Procedures
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mx-auto font-light">
            Filter through our high-end aesthetic transformations. Every procedure is performed with clinical accuracy in Satellite Town, Sargodha.
          </p>
        </div>

        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar scroll-smooth whitespace-nowrap">
          {serviceCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-xl transition duration-300 border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-linear-to-r from-amber-300 to-amber-500 text-black border-transparent shadow-lg shadow-amber-500/10'
                  : 'bg-white/2 border-white/6 text-slate-400 hover:text-white hover:bg-white/4'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className="relative group bg-neutral-900/60 rounded-2xl p-6 border border-white/[0.05] transition-all duration-500 hover:border-amber-500/20 shadow-2xl flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-transparent group-hover:bg-linear-to-r group-hover:from-amber-400 group-hover:to-transparent transition-all duration-500 rounded-t-2xl"></div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400/90 bg-amber-400/[0.04] px-2.5 py-1 rounded-md border border-amber-400/10">
                    {item.tag}
                  </span>
                  <span className="text-sm font-mono font-black text-amber-300 bg-amber-500/[0.02] px-2 rounded-md">
                    Rs. {item.price}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors duration-300 tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                  Aesthetics Hub
                </span>
                <button 
                  onClick={() => openModalWithService(item.title, item.price, item.category)}
                  className="text-xs font-bold text-amber-400 group-hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none outline-none"
                >
                  Book Now <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        budget={Number(selectedService.price.replace(/,/g, '')) || 0}
        suggestion={selectedService}
        directBookingReason=""
      />
    </section>
  );
}