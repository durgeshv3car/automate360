"use client";

import React from "react";

export function Layout201() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#cfedff]">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
            data-aos="fade-up"
               src="/images/Homepagetemp/Homepagetemp1.jpg"
              className="w-full rounded-image object-cover noshadow"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Elevate</p>
            <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Maximize Your Impact with <span className="text-red-600">Programmatic</span> Advertising
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Automate360 offers a comprehensive solution for programmatic
              advertising, integrating precision targeting and rich media
              formats. Experience intelligent optimisation that drives results
              across all channels providing incremental growth to your business.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                     src="/icon/PrecisionTargeting.png"
                    className="size-12 noshadow m-auto"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Precision Targeting
                </h6>
                <p>
                  Reach your audience with pinpoint accuracy and real-time
                  insights.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/icon/RichMedia.png"
                    className="size-12 noshadow m-auto"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Rich Media
                </h6>
                <p>
                  Engage users with innovative ad formats that captivate and
                  convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
