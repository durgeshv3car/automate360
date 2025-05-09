"use client";

import React from "react";

export function Header1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Automate360: <span className="text-blue-500">Transforming</span> the Future of Advertising
            </h1>
            <p className="md:text-md">
              At Automate360, we specialize in simplifying rich media
              advertising through innovative technology. Our mission is to
              empower brands and agencies with transparent, efficient solutions
              that drive results.
            </p>
          </div>
          <div>
            <img
              // src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
               src="./images/AboutusTemp/AboutusTemp5.jpg"
              className="w-full rounded-image object-cover h-[60vh]"
              alt="Relume placeholder image"
              data-aos="flip-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
