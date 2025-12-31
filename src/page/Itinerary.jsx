import React, { useState } from "react";

const itinerary = [
  {
    tab: "Day 1",
    title: "Dubai Konnect",
    image: "https://startupnews.fyi/wp-content/uploads/2025/12/day1.jpeg",
    description:
      "Kickstart the experience with Dubai Konnect — filled with startup showcases, partner intros, and networking.",
    points: [
      "Attend Launchpad Middle-East",
      "Engage in partner & investor introductions",
      "Present your startup to the community",
      "One-on-one networking sessions",
      "Evening networking followed by dinner",
    ],
  },
  {
    tab: "Day 2",
    title: "STEP Dubai, 14th Edition of Startup Festival in MENA",
    image: "https://startupnews.fyi/wp-content/uploads/2025/12/day2.jpeg",
    description:
      "The global stage opens. Exhibit, connect with delegates, and experience the biggest startup-tech platform.",
    points: [
      "Set up your exhibitor POD space",
      "Join as delegate for high-level networking",
      "Apply for Pitching Competition",
      "1:1 Meeting with global mentors & investors",
      "Discover 400+ startups & 8,000+ attendees",
      "Explore Evening Side Events",
      "Be part of The Heartbeat of Tech in MENA",
    ],
  },
  {
    tab: "Day 3",
    title: "STEP Dubai, 14th Edition of Startup Festival in MENA (Continues)",
    image: "https://startupnews.fyi/wp-content/uploads/2025/12/day3.jpeg",
    description:
      "The global stage opens. Exhibit, connect with delegates, and experience the biggest startup-tech platform.",
    points: [
      "Set up your exhibitor POD space",
      "Join as delegate for high-level networking",
      "Apply for Pitching Competition",
      "1:1 Meeting with global mentors & investors",
      "Discover 400+ startups & 8,000+ attendees",
      "Explore Evening Side Events",
      "Be part of The Heartbeat of Tech in MENA",
    ],
  },
  {
    tab: "Day 4",
    title: "Wrap-Up & Return",
    image: "https://startupnews.fyi/wp-content/uploads/2025/12/day4.jpeg",
    description:
      "Conclude your journey with follow-ups, explore Dubai, and catch your return flight with big wins.",
    points: [
      "Follow up with leads and close conversations",
      "Sightsee Dubai’s skyline & cultural gems",
      "Enjoy the last moments before departure",
      "Prepare for late evening flight to India",
      "Reflect on a powerful startup experience",
    ],
  },
];

export default function Itinerary() {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-7xl mx-auto mt-20 mb-4 px-5">
      {/* ================= TITLE ================= */}
      <h2 className="text-center text-[34px] font-bold mb-8">
        Delegation Plan
        <span className="block text-lg text-gray-500 mt-1">
          10–13 February, 2026
        </span>
      </h2>

      {/* ================= TABS ================= */}
      <div className="flex bg-black rounded-2xl overflow-hidden mb-8 p-1 shadow-lg">
        {itinerary.map((day, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`
        flex-1 py-3 text-sm md:text-base font-semibold rounded-xl transition-all duration-300
        ${
          active === index
            ? "bg-green-500 text-black shadow-md"
            : "text-green-100 hover:bg-green-800 hover:text-white"
        }
      `}
          >
            {day.tab}
          </button>
        ))}
      </div>

      {/* ================= CONTENT CARD ================= */}
      <div className="flex flex-col lg:flex-row gap-10 bg-white p-8 rounded-[18px] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
        {/* IMAGE */}
        <div className="flex-1">
          <img
            src={itinerary[active].image}
            alt={itinerary[active].tab}
            className="w-full h-full object-cover rounded-[14px]"
          />
        </div>

        {/* TEXT */}
        <div className="flex-1">
          <h3 className="text-2xl mb-3">{itinerary[active].title}</h3>

          <p className="text-base text-gray-600 leading-relaxed mb-4">
            {itinerary[active].description}
          </p>

          <ul className="pl-5 list-disc">
            {itinerary[active].points.map((item, i) => (
              <li key={i} className="mb-2 text-[15px] text-gray-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
