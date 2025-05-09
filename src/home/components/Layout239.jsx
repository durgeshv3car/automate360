"use client";

import React from "react";

export function Layout239() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Innovative</p>
              <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                Empowering <span className="text-blue-700">Advertisers</span> and Publishers
              </h2>
              <p className="md:text-md">
                Automate360 provide cutting-edge solutions that connect brands
                with their audiences seamlessly. Our platform is designed to
                enhance your advertising strategy while maximizing your ROI.
              </p>
            </div>
          </div>
          <div  className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div data-aos="flip-up" className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                
                   src="./images/Homepagetemp/Homepagetemp2.jpg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl">
                For Advertisers: Make The Most of Your Digital Spends
              </h3>
              <p>
                Leverage our Demand-Side Platform(DSP) for unmatched control and
                transparency.
              </p>
            </div>
            <div data-aos="flip-up" className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                   src="./images/Homepagetemp/Homepagetemp7.jpg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl">
                For Publishers: Optimize Revenue and Control Inventory
              </h3>
              <p>
                Our Supply-Side Platform(SSP) empowers publishers to maximize
                their earnings.
              </p>
            </div>
            <div data-aos="flip-up" className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="./images/Homepagetemp/Homepagetemp26.jpg"
                  alt="Relume placeholder image"
                  className="rounded-image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl">
                Why Choose Automate360 for Your Advertising Needs?
              </h3>
              <p>
                Experience full transparency, innovative formats, and global
                reach.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" />
        </div>
      </div>
    </section>
  );
}
