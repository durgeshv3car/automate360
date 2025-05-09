"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta13() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
            Transform Your <span className="text-blue-500">Advertising</span> Experience
          </h1>
        </div>
        <div>
          <p className="md:text-md">
            Take the first step towards simplifying your rich media advertising
            journey. Our dedicated team is here to provide you with tailored
            solutions that drive results.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8  justify-center">
          <a  href="/bookdemo">
            <Button title="Request">Request</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
