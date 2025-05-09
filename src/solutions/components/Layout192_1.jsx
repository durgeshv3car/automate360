"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout192_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="./images/Solutionpagetemp/Solutionpagetemp5.jpg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
              data-aos="flip-left"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Optimize</p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Utilize <span className="text-blue-500">Audience Data</span> for Successful Campaigns
            </h2>
            <p className="md:text-md">
              Leverage our powerful audience insights tool to enhance your
              advertising strategies. By activating data-driven targeting, you
              can significantly improve campaign performance and achieve better
              results.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8  justify-center">
            <a href="/audience-data-activation">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
