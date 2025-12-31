import React from "react";

export default function ConnectWithUs() {
  return (
    <section className="w-full bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl  md:text-5xl font-bold lg:tracking-widest mb-20">
          CONNECT WITH US
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-center">
          <div>
            <p className="text-white text-xl mb-4">Call</p>
            <p className="text-2xl md:text-3xl font-medium">
              Kapil Suri&nbsp;
              <a
                href="tel:+919899008322"
                className="hover:text-green-500 transition"
              >
                +919899008322
              </a>
            </p>
          </div>
          <div>
            <p className="text-white text-xl mb-4">Email</p>
            <a
              href="mailto:office@startupnews.fyi"
              className="text-2xl md:text-3xl font-medium hover:text-green-500 transition"
            >
              office@startupnews.fyi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
