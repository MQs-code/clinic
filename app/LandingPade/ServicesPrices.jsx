'use client';
import React, { useState } from 'react';
import { aestheticsServices } from '../data/aestheticsServices';
import BookingModal from '../BookingModel/page';

const getSuggestedService = (price) => {
  const numericPrice = Number(price) || 0;

  const sortedServices = [...aestheticsServices].sort((a, b) => {
    const priceA = Number(a.price.replace(/,/g, ''));
    const priceB = Number(b.price.replace(/,/g, ''));
    return priceA - priceB;
  });

  let matchedService = null;
  for (let i = sortedServices.length - 1; i >= 0; i--) {
    const servicePrice = Number(sortedServices[i].price.replace(/,/g, ''));
    if (numericPrice >= servicePrice) {
      matchedService = sortedServices[i];
      break;
    }
  }

  if (!matchedService && sortedServices.length > 0) {
    matchedService = sortedServices[0];
  }

  return matchedService ? {
    name: matchedService.title,
    tag: matchedService.category,
    desc: matchedService.desc,
    price: matchedService.price,
    badge: matchedService.tag
  } : {
    name: "Custom Dermal Mapping",
    tag: "Bespoke Care",
    desc: "Speak directly with our clinical desk to configure a bespoke plan matching your exact target tier.",
    price: "Variable",
    badge: "Premium Plan"
  };
};

const ServicesPrices = () => {
  const [budget, setbudget] = useState(1200); 
  const [manually, setmanually] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [directReason, setDirectReason] = useState(""); // Track reason for manual direct booking

  const suggestion = getSuggestedService(budget);

  const togglePopup = () => setmanually(!manually);
  const closePopup = () => {
    setmanually(false);
  };

  // Handles clicking "Direct Book" inside the manual input panel
  const handleDirectBookClick = () => {
    setmanually(false); // Close the manual input canvas
    setIsModalOpen(true); // Fire up the main registration modal
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 font-outfit text-slate-100 bg-neutral-950">
      
      {/* HEADER ELEMENT ROW */}
      <div className="w-full text-center mb-16 space-y-3 flex flex-col">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/5 border border-amber-500/20 px-3 py-1 rounded-full w-max mx-auto shadow-sm">
          📊 Intelligent Budget Estimator
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
          Explore Budget-Friendly Care
        </h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto font-light leading-relaxed">
          Drag the customized range track matrix to smoothly balance advanced skin procedures matching your dynamic investment capacity.
        </p>
      </div>

      {/* MAIN DUAL AREA BLOCKS */}
      <div className="flex flex-col lg:flex-row items-center gap-10 min-h-96">
        
        {/* SECTION A: CONTROLS PLATFORM */}
        <section className="w-full lg:w-1/2 flex flex-col justify-between p-8 rounded-3xl bg-neutral-900/40 border border-white/5 shadow-2xl space-y-8 min-h-96">
          <div className="flex justify-between items-center border-b border-white/5 pb-5">
            <h1 className="text-sm md:text-base font-bold text-slate-300">Estimated Budget Target</h1>
            <h1 className="font-mono text-xl md:text-2xl font-black text-amber-400 bg-amber-400/5 border border-amber-400/10 px-4 py-1.5 rounded-xl">
              Rs. {budget.toLocaleString()}
            </h1>
          </div>

          <div className="flex flex-col space-y-3">
            <input
              type="range"
              min="1200"
              max="12000" 
              step="500"
              value={budget}
              onChange={(e) => {
                setbudget(Number(e.target.value));
                setDirectReason(""); // Reset reason if slider moves
              }}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-xs font-bold text-slate-500 font-mono">
              <span>Rs. 1,200</span>
              <span>Rs. 12,000</span>
            </div>
          </div>

          <div className="flex justify-between gap-3 items-center pt-4 border-t border-white/5 text-xs font-bold tracking-widest uppercase">
            <button 
              onClick={togglePopup}
              className="text-black bg-linear-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 rounded-xl md:px-5 md:py-3 px-2 py-3 transition transform active:scale-95 flex items-center gap-2 shadow-lg shadow-amber-500/10 cursor-pointer border-none outline-none font-bold"
            >
              ✏️ Enter Manually
            </button>
            <span className="text-amber-400 flex items-center gap-1 bg-amber-500/5 border border-amber-500/10 px-3 py-1.5 rounded-lg font-sans">
              ⚡ Smart Match Active
            </span>
          </div>

          {/* MANUAL POPUP WRAPPER */}
          {manually && (
            <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/70 backdrop-blur-xl p-4">
              <div className="bg-neutral-900 border border-white/5 p-8 rounded-3xl w-full max-w-sm shadow-2xl space-y-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-300 to-rose-400"></div>
                
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-black text-white tracking-tight">Manual Configuration</h3>
                  <button onClick={() => setmanually(false)} className="text-slate-400 hover:text-white transition font-mono">✕</button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Target Budget (PKR)</label>
                    <input
                      value={budget === 0 ? '' : budget}
                      onChange={(e) => setbudget(Number(e.target.value))}
                      type="number"
                      className="w-full outline-none bg-white/5 border border-white/10 text-amber-300 rounded-xl font-mono text-center text-xl px-4 py-2.5 focus:border-amber-400 transition"
                      placeholder="Enter amount"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Reason for Direct Booking</label>
                    <input
                      value={directReason}
                      onChange={(e) => setDirectReason(e.target.value)}
                      type="text"
                      className="w-full outline-none bg-white/5 border border-white/10 text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:border-amber-400 transition"
                      placeholder="e.g., Immediate acne flare-up"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button 
                    className="flex-1 bg-linear-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-black text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl cursor-pointer shadow-lg shadow-amber-500/5 transition border-none font-black"
                    onClick={closePopup}
                  >
                    Smart Match
                  </button>
                  <button
                    onClick={handleDirectBookClick}
                    className="flex-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:bg-white/10 cursor-pointer transition font-bold"
                  >
                    Direct Book
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* SECTION B: ALGORITHMIC OUTPUT CARD */}
        <section className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white min-h-96 shadow-2xl border border-white/5 rounded-bl-3xl rounded-tr-3xl rounded-tl-xl rounded-br-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-500"></div>
          
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-amber-400/5 border border-amber-400/20 text-amber-400 rounded-full text-xs font-bold uppercase tracking-widest">
                {suggestion.tag} ({suggestion.badge})
              </span>
              <span className="text-xs font-mono text-amber-300/80 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5">
                Cost: PKR {suggestion.price}
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-snug group-hover:text-amber-300 transition-colors duration-300">
              {suggestion.name}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light max-w-md">
              {suggestion.desc}
            </p>

            <div className="pt-4">
              <button 
                onClick={() => {
                  setDirectReason(""); // Clean reason path when booking directly via matched system program card
                  setIsModalOpen(true);
                }}
                className="w-full sm:w-auto bg-linear-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-black text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-amber-500/10 cursor-pointer transition transform active:scale-95 border-none font-black"
              >
                Book This Program via WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* MODAL SYNC WITH INJECTED PROGRAM MATRIX */}
        <BookingModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          budget={budget}
          suggestion={suggestion}
          directBookingReason={directReason}
        />
      </div>
    </main>
  );
};

export default ServicesPrices;