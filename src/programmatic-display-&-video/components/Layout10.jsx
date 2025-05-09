"use client";

import React from "react";

export function Layout10() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Transform</p>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Power Your Brand with <span className="text-blue-500">Future-Ready</span> Advertising
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Unlock unparalleled engagement with our programmatic display and
              video solutions. Drive conversions through targeted, visually
              captivating campaigns.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/icon/PrecisionTargeting.png"
                    className="size-12 noshadow m-auto"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Target Effectively
                </h6>
                <p>
                  Reach your ideal audience with precision and impact using our
                  advanced targeting tools.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/icon/EngageCreatively.png"
                    className="size-12 noshadow m-auto"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Engage Creatively
                </h6>
                <p>
                  Utilize high-impact visuals that captivate and convert your
                  audience effortlessly.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="./images/DIsplay&Videotemp/DIsplay&Videotemp2.jpg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
