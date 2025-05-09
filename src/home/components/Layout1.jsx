"use client";

import React from "react";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#e6e6e6]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Empower</p>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Optimize Your Media Buys with <span className="text-blue-700">Confidence</span>
            </h1>
            <p className="md:text-md">
              Our Demand-Side Platform (DSP) gives brands and agencies the tools
              they need to effectively plan, activate, and optimize their media
              strategies. Experience unparalleled transparency and control over
              your advertising campaigns.
            </p>
          </div>
          <div>
            <img
            data-aos="flip-right"
              src="./images/Homepagetemp/Homepagetemp11.jpg"
              className="w-full rounded-image object-cover noshadow"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
