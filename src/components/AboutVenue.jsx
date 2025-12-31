import React from "react";

export default function AboutVenue() {
  return (
    <section className="w-full bg-[#0b0f0d] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* ================= IMAGE ================= */}
        <div className="relative">
          <img
            src="/dubai-delegation-2026/assets/venue_lake.jpg"
            alt="Dubai Internet City"
            className="w-full aspect-auto object-cover rounded-3xl border-2 border-green-500/50 shadow-2xl"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* ================= CONTENT ================= */}
        <div>
          <p className="text-green-500 uppercase tracking-widest text-2xl font-bold mb-4">
            The Venue
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
            Dubai Internet City
          </h2>

          <p className="text-white/80 text-lg leading-relaxed">
            Dubai Internet City is nestled within the bustling metropolis of
            Dubai, a city known for its modern architecture, luxurious
            lifestyle, and rich cultural heritage. Its strategic location offers
            easy access to major transportation hubs, making it a convenient hub
            for international businesses and entrepreneurs.
          </p>

          {/* optional highlights */}
          <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-white/80">
            <div className="flex gap-2 items-start">
              <span className="text-green-500">✓</span>
              Strategic business district
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-green-500">✓</span>
              Global tech ecosystem
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-green-500">✓</span>
              Seamless connectivity
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-green-500">✓</span>
              World-class infrastructure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
