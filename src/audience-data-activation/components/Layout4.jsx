"use client";

import React from "react";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className=" gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Activate</p>
            <h1 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Unlock The <span className="text-blue-500">Power Of Audience Data</span> With Our Powerful Audience Tool
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Leverage your audience data to create tailored advertising
              experiences. Drive engagement and conversions with
              precision-targeted campaigns.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Data Insights
                </h6>
                <p>
                  Transform raw data into actionable insights for your
                  campaigns.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Personalization Strategies
                </h6>
                <p>
                  Deliver personalized content that resonates with your
                  audience's preferences.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="./images/Audiencetemp/Audiencetemp5.png"
              className="w-full rounded-image object-cover noshadow"
              alt="Relume placeholder image"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
