import React from "react";
import CountUp from "react-countup";

export default function ExpandNorthStar() {
  return (
    <section className="w-full bg-white">
      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Logo (smaller column) */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <img
            src="https://cdn.prod.website-files.com/6615a761fb83776fb5668f99/661ed85f3f01604127d65d68_STEP_SECONDARY%20LOGO.svg"
            alt="Step Conferrence Logo"
            className="w-full max-w-xs"
          />
        </div>

        {/* Content Card (wider column) */}
        <div className="md:col-span-8">
          <div className="bg-white shadow-2xl rounded-md p-10 md:p-12">
            <p className="text-sm tracking-widest text-green-500 font-extrabold mb-4">
              WORLD'S LARGEST STARTUP AND INVESTOR CONNECTOR EVENT
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Step Dubai 2026 marks the 14th edition of the festival – bringing
              together thousands of founders, investors, creatives, and tech
              enthusiasts from around the world. Under the theme “Intelligence
              Everywhere: The AI Economy,” Step 2026 explores how artificial
              intelligence is transforming every layer of our lives – from
              business and finance to technology and creativity. Across four
              dynamic tracks, hundreds of global startups, and 8,000+ attendees,
              Step continues to bring the future of tech, culture, and
              entrepreneurship to Dubai.
            </p>
          </div>
        </div>
      </div>

      {/* ================= STATS SECTION ================= */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <Stat end={100} suffix="+" label="Participating Countries" />
          <Stat end={400} suffix="+" label="Startups Showcasing" />
          <Stat prefix="$" end={9} suffix="B" label="Funding Present" />
          <Stat end={8000} suffix="+" separator="," label="Attendees" />
        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE STAT ================= */

function Stat({ end, prefix = "", label, suffix = "", separator }) {
  return (
    <div>
      <h3 className="text-5xl font-light">
        {prefix || ""}
        <CountUp end={end} duration={2.5} separator={separator} />
        {suffix}
      </h3>
      <p className="mt-3 text-lg lg:text-2xl text-white">{label}</p>
    </div>
  );
}
