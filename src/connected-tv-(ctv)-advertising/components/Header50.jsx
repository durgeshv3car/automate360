"use client";

import React from "react";

export function Header50() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-text-alternative md:mb-4 text-left text-white">
            Engage
          </p>
          <h1 className="mb-5 text-3xl font-bold text-text-alternative md:mb-6 md:text-4xl lg:text-7xl text-left text-white">
          <span className="text-blue-500">Reach </span>Your Audience
          </h1>
          <p className="text-text-alternative md:text-md text-left text-white">
            Deliver immersive, high-impact ads directly to living rooms. With
            Automate360, you can engage viewers on premium CTV & OTT platforms using
            precise targeting, real-time optimization, and transparent reporting
            — all through a single, programmatic workflow.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-black">
        <img
          // src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          src="./images/Connectedtvtemp/Connectedtvtemp6.png"
          className="size-full object-cover"
          alt="Reach Your Audience"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
