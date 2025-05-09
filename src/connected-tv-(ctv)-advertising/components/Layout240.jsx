"use client";

import React from "react";

export function Layout240() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 w-full text-center md:mb-18 lg:mb-20">
          <h2 className="text-3xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
            Seamless <span className="text-blue-500">Integration Across</span> Channels for Enhanced CTV & OTT Advertising Success
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col items-center text-center" data-aos="zoom-in">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src="/images/Connectedtvtemp/Connectedtvtemp8.jpg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Optimize Campaigns in Real-Time to Maximize Engagement and ROI
            </h3>
            <p>
              Our CTV & OTT advertising solutions ensure your brand reaches the right
              audience effortlessly.
            </p>
          </div>
          <div className="flex w-full flex-col items-center text-center" data-aos="zoom-in">
            <div className="rb-6 mb-6 md:mb-8">
              <img
               src="./images/Connectedtvtemp/Connectedtvtemp9.jpg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Commitment to Brand Safety and Compliance for Peace of Mind
            </h3>
            <p>
              We prioritize transparency and adhere to strict compliance
              standards to protect your brand.
            </p>
          </div>
          <div className="flex w-full flex-col items-center text-center" data-aos="zoom-in">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src="./images/Connectedtvtemp/Connectedtvtemp7.jpg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Data-Driven Insights for Effective Audience Targeting
            </h3>
            <p>
              Utilize advanced targeting options to connect with your ideal
              audience on CTV.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
