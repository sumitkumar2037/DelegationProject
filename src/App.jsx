import React from "react";
import Itinerary from "./page/Itinerary.jsx";
import { useEffect } from "react";
import OurStory from "./page/OurStory.jsx";
import ExpandNorthStar from "./components/ExpandNorthstar.jsx";
import DubaiKonnect from "./components/DubaiKonnect.jsx";
import WhatYouGet from "./components/WhatYouGet.jsx";
import Hero from "./components/Hero.jsx";
import DubaiDelegationForm from "./components/DelegationForm.jsx";
import AboutVenue from "./components/AboutVenue.jsx";
import EarlyBirdTimer from "./components/EarlyBirdTimer.jsx";
import ConnectWithUs from "./components/ConnectWithUs.jsx";

export default function App() {
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  const galleryImages = [
    "/dubai-delegation-2026/assets/gallery/gallery1.jpg",
    "/dubai-delegation-2026/assets/gallery/gallery2.jpg",
    "/dubai-delegation-2026/assets/gallery/gallery3.jpg",
    "/dubai-delegation-2026/assets/gallery/gallery4.jpg",
    "/dubai-delegation-2026/assets/gallery/gallery5.jpg",
    "/dubai-delegation-2026/assets/gallery/gallery6.jpg",
    "/dubai-delegation-2026/assets/gallery/gallery7.png",
    "/dubai-delegation-2026/assets/gallery/gallery8.jpg",
  ];

  return (
    <>
      {/* ================= HERO WITH VIDEO ================= */}
      <Hero />
      <EarlyBirdTimer />
      <ExpandNorthStar />
      <DubaiKonnect />
      <WhatYouGet />
      <Itinerary />
      {/* ================= GALLERY ================= */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {" "}
          <h2 className="section-title">GALLERY</h2>
          <div className="gallery-grid ">
            {galleryImages.map((img, index) => (
              <div className="gallery-item" key={index}>
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= PAST DELEGATES ================= */}
      <section className="section white past-delegates">
        <h2 className="center">PAST DELEGATES</h2>

        <div className="past-delegates-grid">
          {[
            "pd1.jpeg",
            "pd2.jpeg",
            "pd3.jpeg",
            "pd4.jpeg",
            "pd21.png",
            "pd6.jpeg",
            "pd7.png",
            "pd8.webp",
            "pd9.jpg",
            "pd10.jpg",
            "pd11.jpg",
            "pd12.png",
            "pd13.png",
            "pd14.png",
            "pd22.jpeg",
            "pd16.png",
            "pd23.webp",
            "pd18.png",
            "pd19.jpeg",
            "pd20.webp",
          ].map((logo, index) => (
            <div key={index} className="delegate-logo">
              <img
                src={`/dubai-delegation-2026/assets/gallery/past_delegates/${logo}`}
                alt={`Past Delegate ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
      <AboutVenue />

      {/* ================= REGISTER ================= */}
      <section id="register" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="section-title">Register Here</h2>
        <iframe
          src="https://tally.so/embed/mOxoek?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          style={{
            width: "100%",
            height: "1500px",
            border: "none",
          }}
          title="Register Form"
        />
      </section>
      <ConnectWithUs />
      {/* <DubaiDelegationForm /> */}
      {/* ================= FOOTER ================= */}
      {/* <footer className="custom-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>StartupNews.fyi</h3>
            <p>
              StartupNews.fyi is India's leading news & Technology media company
              that focuses on Startups in India and stories across the globe.
            </p>
          </div>

          <ul className="footer-links">
            <li>
              <a href="https://startupnews.fyi/about-startupnewsdotfyi/">
                About Us
              </a>
            </li>
            <li>
              <a href="https://startupnews.fyi/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="https://startupnews.fyi/privacy-startupnewsdotfyi/">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://startupnews.fyi/terms-startupnewsdotfyi/">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="https://startupnews.fyi/return-refund-startupnewsdotfyi/">
                Return & Refund Policy
              </a>
            </li>
            <li>
              <a href="https://startupnews.fyi/advertise-with-us/">
                Advertise With Us
              </a>
            </li>
            <li>
              <a href="https://startupnews.fyi/partners/">Partners</a>
            </li>
          </ul>

          <ul className="footer-links">
            <li>
              <a href="https://startupnews.fyi">Startup News</a>
            </li>
            <li>
              <a href="https://startupnews.fyi/events">Startup Events</a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          © 2025 StartupNews.fyi | DOTFYI Media Ventures Private Limited. All
          Rights Reserved.
        </div>
      </footer> */}
    </>
  );
}
