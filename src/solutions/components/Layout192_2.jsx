"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout192_2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#daffd6]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
               src="./images/Solutionpagetemp/Solutionpagetemp11.jpg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
              data-aos="flip-left"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Secure</p>
            <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Protect Your Brand with <span className="text-green-700">Our Security</span> Solutions
            </h2>
            <p className="md:text-md">
              We prioritize brand safety by ensuring your ads appear in secure
              and reputable environments. Our robust security measures protect
              your campaigns from fraud and enhance your advertising integrity.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
