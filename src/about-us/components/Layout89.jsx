"use client";

import React from "react";

export function Layout89() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#fe8745]">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Journey</p>
            <h3 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              The Journey of Automate360: <span className="text-orange-100">Innovating Advertising</span>
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Founded in 2016, Automate360 was created to tackle the challenges
              posed by traditional programmatic advertising. Our goal is to
              streamline the process, making rich media advertising accessible
              and efficient for all. With a commitment to innovation and
              transparency, we empower advertisers to achieve their objectives
              seamlessly.
            </p>
          </div>
        </div>
        <img
          src="./images/AboutusTemp/AboutusTemp7.jpg"
          className="w-full rounded-image object-cover noshadow"
          alt="Relume placeholder image"
          data-aos="zoom-in"
        />
      </div>
    </section>
  );
}
