"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta3() {
  return (
    <section data-aos="zoom-in" id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
            Elevate Your Advertising Strategy
          </h2>
          <p className="text-text-alternative md:text-md px-4">
            Discover how Automate360 can transform your advertising approach and
            drive exceptional results today.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8 justify-center">
            <div className="flex flex-wrap gap-4 mt-6">
  <a
    href="/bookdemo"
    className="px-6 py-3 text-white bg-black rounded-2xl text-base font-medium hover:bg-gray-800 transition-all duration-200"
  >
    Demo
  </a>
  <a
    href="/contact"
    className="px-6 py-3 text-black bg-white border border-gray-300 rounded-2xl text-base font-medium hover:bg-gray-100 transition-all duration-200"
  >
    Contact
  </a>
</div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="./images/HomeImages/Banner2.png"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        
      </div>
    </section>
  );
}
