"use client";

import React from "react";

export function Header50() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-text-alternative md:mb-4 text-left text-white">
            Connect
          </p>
          <h1 className="mb-5 text-3xl font-bold text-text-alternative md:mb-6 md:text-4xl lg:text-7xl text-left text-white">
            Activate Your Audience
          </h1>
          <p className="text-text-alternative md:text-md text-left text-white">
            Use data-driven insights to sharpen your targeting and boost
            advertising performance.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          // src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
           src="./images/Audiencetemp/Homepagetemp14.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
}
