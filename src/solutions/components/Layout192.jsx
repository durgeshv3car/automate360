"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout192() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="./images/Solutionpagetemp/Solutionpagetemp10.jpg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
              data-aos="flip-left"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Engage</p>
            <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Transform <span className="text-blue-500">Your Advertising</span> with Rich Media
            </h2>
            <p className="md:text-md">
              Rich media advertising captivates your audience through
              interactive and immersive formats. Elevate your campaigns and
              achieve remarkable results with our innovative solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8  justify-center">
            <a href="/rich-media-advertising">
  <Button title="Learn More" variant="secondary">
    Learn More
  </Button>
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
