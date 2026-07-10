'use client'
import React, { useState } from 'react'
import Link from "next/link";
import Bookig from '../BookingModel/page'

const Page = () => {
  const [isModel, setIsModel] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false); // Mobile tracking state

  return (
    <main >
      
      {/* LUXURY ONYX GLASSMORPHISM HEADER */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-4 bg-[#0B0C10]/40 backdrop-blur-xl border-b border-white/[0.04] z-50 transition-all duration-300">
        
        {/* Left Side: Branded Typography Logo */}
        <div className="flex items-center gap-3">
          {/* Minimal Geometric Luxury Mark */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-200 to-amber-500 flex items-center justify-center font-serif text-black font-black text-sm shadow-lg shadow-amber-500/10 tracking-tighter">
            AH
          </div>
          <div className="flex flex-col font-outfit justify-center">
            <span className="font-black text-white tracking-widest md:text-lg text-sm leading-none uppercase">
              Aesthetics Hub
            </span>
            <span className="md:text-[9px] text-[8px] font-bold tracking-widest text-amber-400/80 uppercase mt-1 leading-none font-sans">
              Satellite Town • Sargodha
            </span>
          </div>
        </div>

        {/* Middle Side: Desktop Navigation Menu */}
        <nav className="font-outfit text-xs uppercase font-bold tracking-widest text-slate-400 space-x-8 hidden md:flex items-center">
          <Link href="#home" className="text-amber-400 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-white transition-colors duration-200">About</Link>
          <Link href="#services" className="hover:text-white transition-colors duration-200">Services</Link>
          <Link href="#contact" className="hover:text-white transition-colors duration-200">Contact</Link>
        </nav>

        {/* Right Side: Action Trigger Box */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsModel(true)}
            className="font-outfit text-xs uppercase font-bold tracking-widest text-black bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 px-5 py-3 rounded-xl transition duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/5"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Multi-Trigger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenu(!isMobileMenu)}
            className="text-slate-300 p-2 hover:text-amber-400 transition focus:outline-none"
          >
            {isMobileMenu ? (
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* LUXURY RESPONSIVE MOBILE EXPANSION OVERLAY */}
      {isMobileMenu && (
      <div className="fixed rounded-2xl ml-[5%] inset-x-0  p-4 top-20 w-[90%] bg-white/30 backdrop-blur-2xl border-b border-white/4 z-40 md:hidden animate-fadeIn font-outfit shadow-2xl">
          <div className="flex  flex-col space-y-4 text-center text-sm font-bold uppercase tracking-widest text-slate-400 py-4">
            <Link href="#home" onClick={() => setIsMobileMenu(false)} className="text-amber-400 py-2">Home</Link>
            <Link href="#about" onClick={() => setIsMobileMenu(false)} className="hover:text-white py-2 transition">About</Link>
            <Link href="#services" onClick={() => setIsMobileMenu(false)} className="hover:text-white py-2 transition">Services</Link>
            <Link href="#contact" onClick={() => setIsMobileMenu(false)} className="hover:text-white py-2 transition">Contact</Link>
            <div className="pt-4">
              <button
                onClick={() => { setIsModel(true); setIsMobileMenu(false); }}
                className="px-6 text-xs font-bold uppercase tracking-widest text-black bg-linear-to-r from-amber-300 to-amber-500 py-3.5 rounded-xl shadow-lg"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Modal Controller Integration */}
    <Bookig 
        isOpen={isModel} 
        onClose={() => setIsModel(false)} 
        budget={0}
        suggestion={null}
        directBookingReason=""
      />

    </main>
  )
}

export default Page;
