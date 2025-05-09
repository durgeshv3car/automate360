"use client";

import React from "react";

export function Layout1_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Solutions</p>
            <h1 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              <span className="text-blue-400">Tailored Solutions</span> for Your Advertising Needs
            </h1>
            <p className="md:text-md">
              Discover innovative advertising solutions designed to elevate your
              brand. From rich media to programmatic display, we have the tools
              to maximize your impact.
            </p>
          </div>
          <div>
            <img
             src="./images/Homepagetemp/Homepagetemp22.jpg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
              data-aos="flip-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
