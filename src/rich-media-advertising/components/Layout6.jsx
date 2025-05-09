"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Effortlessly Launch Your <span className="text-blue-500">Rich Media</span> Campaigns Across Multiple Channels Today!
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Our rich media advertising solutions empower you to deploy
              campaigns swiftly and effectively. Experience seamless integration
              across various platforms to maximize your reach.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Quick Setup
                </h6>
                <p>
                  Launch campaigns in minutes, not days, with our intuitive
                  tools and templates.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Multi-Channel
                </h6>
                <p>
                  Reach your audience across display, audio, video, and
                  connected TV effortlessly.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              // src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              src="/images/Richmediapagetemp/Richmediapagetemp5.jpg"
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
