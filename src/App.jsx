import React from "react";
import Itinerary from "./page/Itinerary.jsx";
import { useEffect } from "react";

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
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source
            src="/dubai-delegation-2026/assets/hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-text">
          <h1>
            11th INDIAN STARTUP
            <br />
            DELEGATION TO DUBAI
          </h1>

          <p className="hero-date">February 10–13, 2026</p>

          <a href="#register" className="hero-btn">
            I AM INTERESTED
          </a>
        </div>
      </section>
      {/* ================= ABOUT STEP ================= */}
      <section className="section white">
        <div className="container">
          <p className="about-text">
            Step Dubai 2026 marks the 14th edition of the festival – bringing
            together thousands of founders, investors, creatives, and tech
            enthusiasts from around the world. Under the theme{" "}
            <strong>“Intelligence Everywhere: The AI Economy”</strong>, Step
            explores how artificial intelligence is transforming business,
            finance, technology, and creativity.
          </p>

          <div className="stats-row">
            <div>
              <h3>8000+</h3>
              <span>Attendees</span>
            </div>
            <div>
              <h3>400+</h3>
              <span>Startups</span>
            </div>
            <div>
              <h3>100+</h3>
              <span>Companies</span>
            </div>
            <div>
              <h3>$9B</h3>
              <span>Funding Present</span>
            </div>
          </div>
        </div>
      </section>
      {/* ================= WHAT YOU GET ================= */}
      {/* <section className="section dark">
        <h2 className="center white-text">WHAT YOU GET</h2>
        {/* you can add content later */}
      {/* </section>  */}
      {/* ================= ITINERARY (YOUR 4-DAY COMPONENT) ================= */}
      <Itinerary />
      {/* ================= GALLERY ================= */}
      <section className="gallery-section">
        <h2 className="section-title">GALLERY</h2>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
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
      {/* ================= ABOUT THE VENUE ================= */}{" "}
      <section className="container">
        {" "}
        <div className="card">
          {" "}
          <h3>About The Venue</h3>{" "}
          <p>
            {" "}
            Dubai Internet City is nestled within the bustling metropolis of
            Dubai, a city known for its modern architecture, luxurious
            lifestyle, and rich cultural heritage. Its strategic location offers
            easy access to major transportation hubs, making it a convenient hub
            for international businesses and entrepreneurs.{" "}
          </p>{" "}
        </div>{" "}
         
      </section>
      {/* ================= REGISTER ================= */}
      <section id="register" className="register-section gallery-section ">
        <h2 className="section-title">
          #11th DUBAI DELEGATION - Registration Form
        </h2>
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
      {/* ================= FOOTER ================= */}
      <footer className="custom-footer">
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
      </footer>
    </>
  );
}
