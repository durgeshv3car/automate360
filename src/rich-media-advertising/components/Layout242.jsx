"use client";

import React from "react";

export function Layout242() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#e1f7ff]">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 w-full md:mb-18 lg:mb-20">
            <h3 className="text-3xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Unleash the power of <span className="text-blue-500">dynamic creatives</span> with our <span className="text-blue-500">advanced rich
              media</span> creation tool
            </h3>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/icon/rich-media-icon3.png"
                  alt="Relume logo 1"
                  className="size-12  m-auto noshadow"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Engage audiences with interactive elements that drive deeper
                connections.
              </h3>
              <p className="mb-5 md:mb-6">
                Our platform enables seamless video integration for captivating
                storytelling. Boost interaction and build stronger connections
                through immersive, clickable ad experiences.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/icon/rich-media-icon4.png"
                  alt="Relume logo 1"
                  className="size-12 noshadow m-auto"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Transform your campaigns with innovative, interactive
                advertising solutions.
              </h3>
              <p className="mb-5 md:mb-6">
                Create memorable experiences that resonate with your target
                audience. Elevate performance with cutting-edge ad formats that
                captivate, engage, and convert.
              </p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                 src="/icon/rich-media-icon1.png"
                  alt="Relume logo 1"
                  className="size-12 noshadow m-auto"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
                Elevate your brand with engaging video content that captivates
                viewers.
              </h3>
              <p className="mb-5 md:mb-6">
                Leverage our tools for impactful video ads, Deliver powerful
                stories through engaging video content that captures attention
                and drives results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
