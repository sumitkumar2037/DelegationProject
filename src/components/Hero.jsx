import React from "react";

export default function Hero() {
  return (
    <section className="hero ">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/dubai-delegation-2026/assets/hero.mp4" type="video/mp4" />
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
  );
}
