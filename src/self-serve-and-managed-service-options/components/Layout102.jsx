"use client";

import React from "react";

export function Layout102() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-3xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Choose Your Path: Self-Service or Managed <span className="text-blue-500">Advertising Solutions Tailored</span> for You
            </h3>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              At Automate360, we understand that every advertiser has unique
              needs. That's why we offer both self-serve and managed service
              options to empower your campaigns.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/icon/selfservemanagedService1.png"
                    className="size-12 noshadow m-auto"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Self-Service
                </h6>
                <p>
                  Take control of your advertising with our intuitive rich media
                  creation tools.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/icon/selfservemanagedService2.png"
                    className="size-12 noshadow m-auto"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Managed Service
                </h6>
                <p>
                  Let our experts handle your campaigns for optimal performance
                  and results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./images/AboutusTemp/AboutusTemp2.png"
          className="w-2/3 rounded-image object-cover m-auto"
          alt="Relume placeholder image"
          data-aos="zoom-in"
        />
      </div>
    </section>
  );
}
