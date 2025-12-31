import React from "react";

const OurStory = () => {
  return (
    <section className="w-full bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Left – YouTube Video */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/tWz4Eqh9USc"
            title="Step Dubai After Movie"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right – Our Story Content */}
        <div className="relative bg-[#9DFF00] text-black px-6 sm:px-10 py-10 lg:py-14">
          {/* Angled Shape */}
          <div className="hidden lg:block absolute top-0 left-[-80px] h-full w-40 bg-[#9DFF00] transform -skew-x-12"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              OUR STORY
            </h2>

            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Step began as a series of intimate workshops and gatherings and
              has evolved over 13 years into the leading tech festival in Dubai.
              <span className="font-semibold">
                {" "}
                Step Dubai 2026 marks the 14th edition
              </span>{" "}
              of the festival – bringing together thousands of founders,
              investors, creatives, and tech enthusiasts from around the world.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Under the theme{" "}
              <span className="font-semibold">
                “Intelligence Everywhere: The AI Economy,”
              </span>{" "}
              Step 2026 explores how artificial intelligence is transforming
              every layer of our lives – from business and finance to technology
              and creativity. Across four dynamic tracks, hundreds of global
              startups, and 8,000+ attendees, Step continues to bring the future
              of tech, culture, and entrepreneurship to Dubai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
