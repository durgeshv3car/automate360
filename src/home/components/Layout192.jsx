"use client";

import React from "react";

export function Layout192() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f9ecec]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
               src="./images/Homepagetemp/Homepagetemp27.jpg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
              data-aos="flip-left"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Engagement</p>
            <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Transform Your Advertising with <span className="text-red-600">CTV & OTT Innovation</span>
            </h2>
            <p className="md:text-md">
              Leverage the power of Connected TV to captivate your audience with
              rich media formats. Our immersive ad solutions enhance viewer
              engagement and boost brand recall like never before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
