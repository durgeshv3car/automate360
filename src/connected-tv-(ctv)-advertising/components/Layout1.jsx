"use client";

import React from "react";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Engagement</p>
            <h1 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Unlock the Future of <span className="text-yellow-500">TV Advertising</span>
            </h1>
            <p className="md:text-md">
              Connected TV advertising offers unparalleled access to engaged
              audiences, delivering your brand message directly on the big
              screen. Experience high-impact formats and targeted campaigns that
              resonate with viewers.
            </p>
          </div>
          <div>
            <img
                      src="./images/Connectedtvtemp/Connectedtvtemp5.jpg"
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
