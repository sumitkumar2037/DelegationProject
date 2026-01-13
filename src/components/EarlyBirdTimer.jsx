import React, { useEffect, useState } from "react";

export default function EarlyBirdTimer() {
  // 17 Jan 2026, 12:00 IST
  const targetDate = new Date("2026-01-17T12:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 60000); // update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-green-500 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* ================= TEXT ================= */}
        <h2 className="text-black text-lg sm:text-2xl md:text-3xl font-semibold tracking-wide">
          THE EARLY BIRD RATE ENDS IN:
        </h2>

        {/* ================= TIMER ================= */}
        <div className="flex items-center gap-6 text-black">
          <TimeBlock value={timeLeft.days} label="Days" />
          <Colon />
          <TimeBlock value={timeLeft.hours} label="Hrs" />
          <Colon />
          <TimeBlock value={timeLeft.minutes} label="Mins" />
        </div>

        {/* ================= CTA ================= */}
        <a
          href="https://wa.me/919205412305?text=Hi, I want to know more about the Dubai Startup Delegation 2026."
          className="bg-black hover:bg-black/80  text-white font-semibold px-8 py-4 rounded-xl transition shadow-lg"
        >
          Get More Info
        </a>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function TimeBlock({ value, label }) {
  return (
    <div className="text-center min-w-[70px]">
      <div className="text-4xl md:text-5xl font-bold tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs uppercase tracking-widest text-black mt-1">
        {label}
      </div>
    </div>
  );
}

function Colon() {
  return (
    <div className="text-4xl md:text-5xl font-bold text-black -mt-4">:</div>
  );
}
