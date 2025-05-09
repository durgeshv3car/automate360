"use client";

import React from "react";

export function Header50() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-text-alternative md:mb-4 text-left text-white">
            Elevate
          </p>
          <h1 className="mb-5 text-3xl font-bold text-text-alternative md:mb-6 md:text-4xl lg:text-7xl text-white text-left">
            Transform Your <span className="text-yellow-400">Advertising</span> With Rich Media
          </h1>
          <p className="text-text-alternative md:text-md text-white text-left">
            Experience the power of rich media, Turn ideas into impact with
            immersive visuals and interactive storytelling that captivate your
            audience across all channels.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-[#0290e6]">
        <img
           src="/images/Richmediapagetemp/Richmediapagetemp3.png"
          className="size-full object-contain object-right-top"
          alt="Relume placeholder image"
        />
      {/* <div class="absolute inset-0 bg-black/70"></div> */}
      </div>
    </section>
  );
}
