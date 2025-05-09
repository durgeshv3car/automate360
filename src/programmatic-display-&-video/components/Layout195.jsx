"use client";

import React from "react";

export function Layout195() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
             src="./images/DIsplay&Videotemp/Solutionpagetemp8.jpg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Targeting</p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Reach Your <span className="text-blue-500">Ideal Customers</span> with Precision
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Our advanced targeting options empower you to connect with your
              ideal audience. Utilize audience data and contextual insights to
              ensure your message resonates at the perfect moment.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Audience Insights
                </h6>
                <p>
                  Leverage data to understand and reach your target demographics
                  effectively.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Real-Time Data
                </h6>
                <p>
                  Make informed decisions with real-time insights and analytics
                  at your fingertips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
