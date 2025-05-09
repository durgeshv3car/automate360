"use client";

import React from "react";

export function Header30() {
  return (
    <section id="relume" className="px-[5%] py-10 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                Smarter <span className="text-blue-500">Programmatic Advertising</span> for a Dynamic World
              </h1>
              <p className="md:text-md">
                Experience the future of digital advertising with Automate360.
                Our platform combines precision targeting and intelligent
                optimization to connect you with your audience seamlessly across
                digital devices.
              </p>
            </div>
          </div>
          <div>
            <img
            data-aos="fade-down"
             src="./images/HomeImages/Banner1.png"
              className="size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



    