"use client";

import React from "react";

export function Layout195() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#ffa43a]">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
                src="./images/Connectedtvtemp/Connectedtvtemp1.png"
              className="w-full rounded-image object-cover noshadow"
              alt="Relume placeholder image"
              data-aos="flip-left"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Targeting</p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Precision Targeting for <span className="text-blue-500">CTV & OTT</span> Advertising Success
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Leverage advanced targeting techniques to reach your ideal
              audience. Deliver your ads seamlessly on their preferred streaming
              platforms.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Smart Reach
                </h6>
                <p>
                  Engage viewers with tailored ads that resonate with their
                  interests and behaviors.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Data-Driven
                </h6>
                <p>
                  Utilize insights to optimize your campaigns for maximum impact
                  and engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
