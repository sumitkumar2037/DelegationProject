import React from "react";
import { useState } from "react";

const itinerary = [
  {
    tab: "Day 1",
    title: "Day 1",
    image: "/dubai-delegation-2026/assets/day1.jpeg",
    description: "Sharing Image (keeps the text as it is)",
    points: [],
  },
  {
    tab: "Day 2",
    title: "Day 2 – STEP Dubai, 14th Edition of Startup Festival in MENA",
    image: "/dubai-delegation-2026/assets/day2.jpeg",
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
    title:
      "Day 3 – STEP Dubai, 14th Edition of Startup Festival in MENA (Continues)",
    image: "/dubai-delegation-2026/assets/day3.jpeg",
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
    title: "Day 4 – Wrap-Up & Return",
    image: "/dubai-delegation-2026/assets/day4.jpeg",
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
    <section className="itinerary-section">
      <h2 className="itinerary-title">
        Itinerary <span>10–13 February, 2026</span>
      </h2>

      {/* Tabs */}
      <div className="itinerary-tabs">
        {itinerary.map((day, index) => (
          <button
            key={index}
            className={`itinerary-tab ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {day.tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="itinerary-body">
        <div className="itinerary-image">
          <img src={itinerary[active].image} alt={itinerary[active].tab} />
        </div>

        <div className="itinerary-content">
          <h3>{itinerary[active].title}</h3>
          <p>{itinerary[active].description}</p>

          {itinerary[active].points.length > 0 && (
            <ul>
              {itinerary[active].points.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
