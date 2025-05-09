"use client";

import React from "react";
import { Gallery10 } from "./Gallery10";

export function Layout101() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-10 lg:py-10">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Engage</p>
            <h3 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Revolutionize Your Advertising with Engaging Ad Formats
            </h3>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              Capture attention and drive engagement with our innovative ad
              formats. Experience the future of advertising through visually
              stunning and interactive content.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/icon/rich-media-icon1.png"
                    className="size-12 noshadow m-auto"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Interactive Ads
                </h6>
                <p>
                  Create immersive experiences that resonate with your audience
                  and boost brand visibility.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                   src="/icon/rich-media-icon2.png"
                    className="size-12 noshadow m-auto"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Dynamic Formats
                </h6>
                <p>
                  Utilize expandable videos, carousel ads, and more to enhance
                  user interaction.
                </p>
              </div>
            </div>
          </div>
        </div>

 <Gallery10 />

        {/* <img
         src="/images/Richmediapagetemp/Richmediapagetemp4.png"
          className="w-full rounded-image object-cover rounded-2xl"
          alt="Relume placeholder image"
        /> */}
      </div>
    </section>
  );
}
