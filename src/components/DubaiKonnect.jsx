import React from "react";
import CountUp from "react-countup";

export default function DubaiKonnect() {
  return (
    <section className="w-full bg-white">
      {/* ================= TOP CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Logo */}
        <div className="md:col-span-3 flex justify-center md:justify-start">
          <img
            src="https://startupnews.fyi/wp-content/uploads/2025/01/Untitled_design-removebg-preview.png"
            alt="Dubai Konnect"
            className="w-full max-w-[220px]"
          />
        </div>

        {/* Text */}
        <div className="md:col-span-9">
          <p className="text-gray-800 text-lg leading-relaxed">
            Dubai Konnect, empowers Indian Startups to explore Dubai’s thriving
            Business Ecosystem. It facilitates participation in Top-Tier Events
            and offers opportunities to connect with Global Leaders, Investors,
            and Entrepreneurs for Fundraising and Partnerships. Dubai, with its
            Indian-friendly culture, Hindi-speaking community, and strong Indian
            presence, provides a high Per-Capita Income market, making it easy
            to sell Products, Services and build Partnerships. It's an ideal
            gateway for Indian Startups to navigate local taxes and expand their
            Global reach effectively.
          </p>
        </div>
      </div>

      {/* ================= STATS CARDS ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard end={10} label="Delegations till now" />
          <StatCard end={5} prefix="$" suffix="M+" label="Funds Raised" />
          <StatCard end={150} suffix="+" label="Delegates Participated" />
          <StatCard end={30} suffix="+" label="Business Partnerships" />
        </div>
      </div>
    </section>
  );
}

/* ================= STAT CARD ================= */

function StatCard({ end, label, prefix = "", suffix = "" }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl py-10 px-6 text-center">
      <h3 className="text-3xl sm:text-5xl font-light text-green-500">
        {prefix}
        <CountUp end={end} duration={2.2} />
        {suffix}
      </h3>
      <p className="mt-4 text-green-500">{label}</p>
    </div>
  );
}
