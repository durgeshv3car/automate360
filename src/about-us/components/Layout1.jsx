"use client";

import React from "react";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Global</p>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Our Worldwide <span className="text-blue-500">Reach Empowers</span> Your Success
            </h1>
            <p className="md:text-md">
              With teams strategically located across three countries and five
              global offices, we ensure that your advertising goals are met
              efficiently. Our diverse expertise allows us to deliver tailored
              solutions that resonate with audiences worldwide.
            </p>
          </div>
          <div>
            <img
                src="./images/AboutusTemp/AboutusTemp3.jpg"
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
