"use client";

import React from "react";

export function Layout237() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Activate</p>
            <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              <span className="text-red-500">Engage Your Audience</span> with our Custom Audience Tool
            </h2>
            <p className="md:text-md">
              Unlock the full potential of your audience data with our advanced
              activation tools. Seamlessly integrate and leverage insights to
              drive impactful campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/icon/audience-data-activation1.png"
                  alt="Relume logo 1"
                  className="size-12 noshadow"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Behavioural Audience Targeting
              </h3>
              <p>
                Make the most of our Intent-Based Audience Targeting, Segment
                your audience based on behavior and demographics.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/icon/audience-data-activation2.png"
                  alt="Relume logo 1"
                  className="size-12 noshadow"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Advanced Retargeting Across Digital Devices
              </h3>
              <p>
                Reach out to your targeted audience where they are with our
                cross device retargeting.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/icon/audience-data-activation3.png"
                  alt="Relume logo 1"
                  className="size-12 noshadow"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Upload Your Audience Data
              </h3>
              <p>
                Engage with your known audience through their unique device ID's
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
