import React from "react";

export default function WhatYouGet() {
  const leftItems = [
    "Showcase Your Startup",
    "Pitching Competition",
    "Mentor Corner",
    "Expansion Opportunities to Middle East",
    "1 on 1 Meetings With Global Investors",
  ];

  const rightItems = [
    "Understanding Local Taxation and Laws",
    "Satellite Events",
    "Networking With Middle East & European Startups, Investors and Ecosystem",
    "After Party",
  ];

  return (
    <section className="w-full bg-black text-white py-20 md:py-28">
      {/* ================= HEADING ================= */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold tracking-wide mb-20 text-[#01ff00]">
        WHAT YOU GET
        <span className="block w-20 h-1 bg-[#01ff00] mx-auto mt-4"></span>
      </h2>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT CARD */}
        <div className="bg-[#0f0f0f] border-2 border-[#01ff00] rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-green-500/10 transition">
          <ul className="space-y-6 text-lg md:text-xl">
            {leftItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#01ff00]"></span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#0f0f0f] border-2 border-[#01ff00] rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-green-500/10 transition">
          <ul className="space-y-6 text-lg md:text-xl">
            {rightItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#01ff00]"></span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
