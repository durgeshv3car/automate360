"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f8c04b]">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Targeting</p>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Engage Your Audience with <span className="text-blue-500">Precision</span> and Impact
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Leverage programmatic display and video advertising to connect
              with your ideal customers. Our advanced targeting capabilities
              ensure your message reaches the right audience at the right time.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Precision Targeting
                </h6>
                <p>
                  Utilize data-driven insights for effective audience
                  segmentation and engagement.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Engaging Content
                </h6>
                <p>
                  Create captivating video ads that resonate and drive action.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8 justify-center">
            <a href="/audience-data-activation">
              <Button title="Learn More" variant="secondary" className="bg-white">
                Learn More
              </Button>
              </a>
            </div>
          </div>
          <div>
            <img
             src="./images/Solutionpagetemp/Audiencetemp2.png"
              className="w-full rounded-image object-cover noshadow"
              alt="Relume placeholder image"
              data-aos="flip-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
