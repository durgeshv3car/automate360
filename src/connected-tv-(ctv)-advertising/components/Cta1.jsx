"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Transform Your <span className="text-blue-500">TV Advertising</span> Today
            </h2>
            <p className="md:text-md">
              Discover how our CTV & OTT solutions can elevate your advertising
              strategy and engage your audience effectively.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8  justify-center">
            <a  href="/bookdemo">
              <Button title="Request">Request</Button>
             </a>
            </div>
          </div>
          <div>
            <img
              src="./images/Connectedtvtemp/Connectedtvtemp10.jpg"
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
