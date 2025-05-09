"use client";

import React from "react";

export function Layout84() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f5d3ff]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <h3 className="text-3xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
            Our Experience and <span className="text-pink-800">Expertise in Rich Media</span> Advertising
          </h3>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              With over Nine years in the industry, we have honed our skills in
              rich media advertising. Our dedicated team is committed to
              delivering innovative solutions that drive results.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                  50+
                </h3>
                <p>Talented professionals driving our creative solutions.</p>
              </div>
              <div>
                <h3 className="mb-2 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                  3
                </h3>
                <p>Global offices ensuring seamless support and operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
