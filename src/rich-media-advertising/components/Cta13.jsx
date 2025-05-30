"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta13() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
            Engage <span className="text-blue-400">Your Audience</span> with Rich Media
          </h1>
        </div>
        <div>
          <p className="md:text-md">
            Transform your advertising strategy with our innovative rich media
            solutions. Contact us today to discover how we can help you create
            captivating campaigns that resonate with your audience.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8  justify-center">
            <a  href="/bookdemo">
            <Button title="Get Started">Get Started</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
