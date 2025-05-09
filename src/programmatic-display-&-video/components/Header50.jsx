"use client";

import React from "react";

export function Header50() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-text-alternative md:mb-4 text-white text-left">
            Innovate
          </p>
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-7xl text-white text-left">
            Precision <spam className="text-blue-500">Advertising</spam> Solutions
          </h1>
          <p className="text-text-alternative md:text-md text-white text-left">
            Automate360 empower brands to deliver high-impact display and video
            advertising that captivates audiences and drives measurable results.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          // src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          
          src="./images/DIsplay&Videotemp/DIsplay&Videotemp7.webp"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </section>
  );
}
