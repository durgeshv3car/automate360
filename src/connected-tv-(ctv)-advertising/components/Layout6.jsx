"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-3xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-4xl">
              Unlock the Power of <span className="text-blue-500">Performance Tracking</span> for Your CTV & OTT Advertising
              Campaigns
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Dive deep into your campaign's performance with our robust
              analytics tools. Our detailed reporting ensures you have the
              insights needed to optimize your strategy.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Real-Time Insights
                </h6>
                <p>
                  Monitor key metrics and make data-driven decisions to enhance
                  your campaign's effectiveness.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Data Transparency
                </h6>
                <p>
                  Access detailed reports that foster trust and ensure brand
                  safety throughout your campaigns.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
                src="./images/Connectedtvtemp/Connectedtvtemp4.jpg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
