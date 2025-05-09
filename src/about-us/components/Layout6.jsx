"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Discover What Sets Automate360 <span className="text-blue-500">Apart in Rich Media</span> Advertising
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              At Automate360, we redefine programmatic advertising with a
              pragmatic approach. Our rich media expertise spans Web, Mobile,
              and Connected TV, ensuring your brand reaches its audience
              effectively.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Transparent Operations
                </h6>
                <p>
                  We prioritize brand safety and transparency in every campaign
                  we manage.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Flexible Support
                </h6>
                <p>
                  Our dedicated team offers fast, flexible support tailored to
                  your advertising needs.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              // src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
               src="./images/AboutusTemp/AboutusTemp6.jpg"
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
