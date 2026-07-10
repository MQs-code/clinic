'use client'

import Image from "next/image";
import Link from "next/link";
import Services from './Services'
import Kinetic from './Kinetic'
import ServicesPrices from './ServicesPrices'
import BookingModal from "../BookingModel/page";
import { useState } from "react";

export default function Hero() {
  const [isModel, setIsModel] = useState(false)

  return (
    <main className="bg-[#0B0C10] min-h-screen text-slate-100 selection:bg-amber-500/20 overflow-x-hidden">
      
      <section className="relative min-h-[70vh] lg:min-h-screen flex items-center justify-center py-20 lg:py-0 overflow-hidden font-outfit">
        
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-amber-500/3 rounded-full blur-[140px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-[-15%] right-[-5%] w-[45vw] h-[45vw] bg-rose-500/2 rounded-full blur-[160px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest text-amber-400 bg-amber-500/4 border border-amber-500/20 uppercase backdrop-blur-md shadow-2xl">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                Satellite Town Chowk, Sargodha
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[0.95]">
                Sculpting Your <br />
                <span className="bg-linear-to-r from-amber-200 via-yellow-100 to-rose-300 bg-clip-text text-transparent italic font-serif font-light block mt-3">
                  Ultimate Aesthetic
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide">
                Step into Sargodha's most elite, award-winning medical aesthetic clinic. Driven by clinical precision and 5-star luxury, we deliver premium skin rejuvenation, medical lasers, and advanced anti-aging procedures tailored to your profile.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <button
                  onClick={() => setIsModel(true)}
                  className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-xl text-black bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-amber-500/10"
                >
                  ✨ Secure Appointment
                </button>
            
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest border border-slate-800 rounded-xl text-slate-300 bg-white/[0.02] hover:bg-white/[0.05] hover:border-slate-700 transition duration-200"
                >
                  Explore Procedures
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-900 max-w-md mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">4.9 ★</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">743+ Reviews</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">11 AM</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Opens Daily</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">VIP</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Lounge Care</p>
                </div>
              </div>

            </div>

            <div className="lg:col-span-7 w-full max-w-2xl mx-auto lg:max-w-none [perspective:1400px] flex items-center justify-center py-6">
              <div className="relative w-full aspect-4/3 rounded-3xl border border-amber-500/10 bg-linear-to-br from-neutral-900 to-neutral-950 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out [transform-style:preserve-3d] rotate-x-[8deg] rotate-y-[-12deg] group hover:rotate-x-[3deg] hover:rotate-y-[-4deg]">
                <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-amber-400/20 to-transparent opacity-60 pointer-events-none -z-10 blur-[1px]"></div>

                <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 transition-all duration-700 ease-out [transform:translateZ(40px)] group-hover:[transform:translateZ(60px)]">
                  <Image
                    src="/aesthtic.png"
                    alt="Aesthetics Hub Sargodha Premium Luxury Interior"
                    fill
                    priority
                    className="object-cover transition-transform duration-1000 ease-out scale-[1.01] group-hover:scale-105"
                    sizes="(max-w-1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

           <BookingModal
  isOpen={isModel} 
  onClose={() => setIsModel(false)} 
  budget={1200}
  suggestion={{
    name: "General Aesthetic Consultation",
    tag: "Clinical Consultation"
  }}
/>

          </div>
        </div>
      </section>

      <section>
        <Kinetic/>
      </section>
      
      <section id="#services">
        <Services/>
      </section>
      
      <section>
        <ServicesPrices/>
      </section>
    </main>
  );
}