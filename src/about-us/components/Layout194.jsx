"use client";

import React from "react";

export function Layout194() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#67d4e1]">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              // src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              src="./images/AboutusTemp/AboutusTemp4.jpg"
              className="w-full rounded-image object-cover noshadow"
              alt="Relume placeholder image"
                data-aos="flip-left"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Our Core Values: <span className="text-blue-600">Driving Success Through</span> Pragmatism and
              Transparency
            </h3>
            <p className="md:text-md">
              At Automate360, we believe in a pragmatic approach that simplifies
              the complexities of rich media advertising. Our core values of
              simplicity, innovation, and accountability guide us in delivering
              exceptional results for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
