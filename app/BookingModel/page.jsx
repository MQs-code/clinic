"use client";

import { useState, useEffect } from "react";

export default function BookingModal({ 
  isOpen, 
  onClose, 
  budget, 
  suggestion, 
  directBookingReason 
}) {
  const [name, setName] = useState("");
  const [number, setnumber] = useState("");
  const [slot, setSlot] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("Dr. Sana Satar(Dermatologist)");

  useEffect(() => {
    if (suggestion?.name) {
      setDoctor(suggestion.name);
    }
  }, [suggestion]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const clinicWhatsAppNumber = "923707158959";
    const reasonSection = directBookingReason 
      ? `🚨 *Direct Booking Reason:* ${directBookingReason}%0A` 
      : "";

    const textMessage = `✨ *AESTHETICS HUB SARGODHA* ✨%0A---------------------------------------%0A👋 *Hello Desk Management,*%0A%0AI want to book an appointment. Here are my details:%0A%0A👤 *Patient Name:* ${name}%0A📞 *Patient Contact:* ${number}%0A%0A📊 *Allocated Investment:* Rs. ${budget?.toLocaleString()}%0A🎯 *Procedure Category:* ${suggestion?.tag}%0A✨ *Selected Program:* ${suggestion?.name}%0A${reasonSection}🩺 *Specialist:* ${doctor}%0A📅 *Preferred Date:* ${date}%0A⏰ *Preferred Slot:* ${slot}%0A%0A---------------------------------------%0A📍 *Location:* 149-A, Satellite Town Chowk, Sargodha.`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${clinicWhatsAppNumber}&text=${textMessage}`;
    
    setName("");
    setnumber("");
    setSlot("");
    setDate("");

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-99999 flex items-center justify-center bg-[#0B0C10]/60 backdrop-blur-xl p-3 sm:p-4">
      <div className="rounded-3xl bg-neutral-900/90 border border-white/6 p-5 sm:p-8 text-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.8)] w-full max-w-md max-h-[92vh] flex flex-col font-outfit relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-amber-300 via-yellow-100 to-rose-400"></div>

        <div className="text-center mb-4 space-y-1 shrink-0">
          <span className="inline-block text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/[0.04] border border-amber-500/20 px-2.5 py-1 rounded-full">
            👑 Premium Lounge Booking
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight pt-1">
            Secure Your Session
          </h3>
          
          <div className="mt-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-left text-xs space-y-1">
            <div className="flex justify-between items-center gap-2 text-slate-400">
              <span className="shrink-0">Program:</span> 
              <span className="text-amber-300 font-bold truncate max-w-[180px] sm:max-w-[240px] text-right">{suggestion?.name || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>Est. Investment:</span> 
              <span className="text-slate-200 font-mono">Rs. {budget?.toLocaleString()}</span>
            </div>
            {directBookingReason && (
              <div className="flex justify-between items-center gap-2 text-rose-400 border-t border-white/5 pt-1 mt-1">
                <span className="shrink-0">Reason Sent:</span> 
                <span className="italic font-light truncate max-w-[180px] sm:max-w-[240px] text-right">{directBookingReason}</span>
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 overflow-y-auto pr-1 flex-1 custom-scrollbar">
          <div>
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              Full Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl p-2.5 sm:p-3 focus:outline-none focus:border-amber-400 text-sm transition text-white"
              placeholder="e.g., Alizeh Khan"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              Contact Number:
            </label>
            <input
              type="text"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              required
              className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl p-2.5 sm:p-3 focus:outline-none focus:border-amber-400 text-sm transition text-white font-mono"
              placeholder="e.g., 03104456844"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              Consulting Specialist / Program:
            </label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full bg-neutral-900 border border-white/[0.08] rounded-xl p-2.5 sm:p-3 focus:outline-none focus:border-amber-400 text-sm transition text-slate-300 cursor-pointer"
            >
              <option value={suggestion?.name}>{suggestion?.name ? `${suggestion.name} (Matched)` : "Default Program Selection"}</option>
              <option value="Dr. Sana Satar(Dermatologist)">Dr. Sana Satar (Dermatologist)</option>
              <option value="Receptionist">Receptionist Desk</option>
              <option value="Clinical Cosmetologist Team">Clinical Cosmetologist Team</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                Preferred Slot:
              </label>
              <input
                type="text"
                placeholder="e.g., 04:30 PM"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                required
                className="w-full bg-white/[0.02] border border-white/[0.08] rounded-xl p-2.5 sm:p-3 focus:outline-none focus:border-amber-400 text-sm transition text-white"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                Date:
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-white/2 border border-white/[0.08] rounded-xl p-2.5 sm:p-3 focus:outline-none focus:border-amber-400 text-sm transition text-slate-300 font-mono"
              />
            </div>
          </div>

          <div className="space-y-2.5 pt-2 shrink-0">
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-linear-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 p-3 sm:p-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 shadow-xl shadow-amber-500/10 transform hover:-translate-y-0.5"
            >
              Confirm & Open WhatsApp
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full cursor-pointer rounded-xl bg-white/[0.03] border border-white/[0.05] p-3 sm:p-3.5 text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors hover:bg-white/[0.06]"
            >
              Dismiss Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}