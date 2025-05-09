"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Extend</p>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Unlock the Power of <span className="text-blue-500">Connected TV</span> Advertising for Maximum
              Engagement
            </h1>
            <p className="md:text-md">
              Access premium inventory on leading connected TV platforms to
              deliver high-impact viewing experiences. Engage your audience with
              innovative ad formats that drive results and enhance brand
              visibility.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8 justify-center">
            <a href="/connected-tv-(ctv)-advertising">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              </a>
            </div>
          </div>
          <div>
            <img
              src="./images/Solutionpagetemp/Solutionpagetemp4.jpg"
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
