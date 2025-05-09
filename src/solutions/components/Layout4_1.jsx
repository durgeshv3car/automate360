"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout4_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Options</p>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Flexible Campaign Management <span className="text-blue-500">Tailored</span> to You
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Choose the perfect solution for your advertising needs. Whether
              you prefer hands-on control or expert guidance, we have you
              covered.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Self-Service
                </h6>
                <p>
                  Empower your team with our user-friendly platform for complete
                  campaign control.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Managed Service
                </h6>
                <p>
                  Let our experts optimize your campaigns for maximum
                  performance and results.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
      
            </div>
          </div>
          <div>
            <img
              // src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
               src="./images/Solutionpagetemp/Solutionpagetemp7.jpg"
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
