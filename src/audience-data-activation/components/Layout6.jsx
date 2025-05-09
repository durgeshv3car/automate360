"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Unlock the power of audience data for unparalleled <span className="text-green-500">advertising success.</span>
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Targeting the right audience segments can significantly enhance
              your ROI. By leveraging data-driven insights, we help you connect
              with high-value customers who are most likely to engage.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Targeted Approach
                </h6>
                <p>
                  Focus on demographics, interests, and behaviors to maximize
                  campaign effectiveness.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Data Insights
                </h6>
                <p>
                  Utilize real-time analytics for informed decision-making and
                  optimized ad performance.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="./images/Audiencetemp/Audiencetemp3.png"
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
