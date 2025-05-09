"use client";

import React from "react";

export function Layout238() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="text-3xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Choose Your <span className="text-blue-500">Ideal Advertising Solution</span>: Self-Service, Managed, or
              Hybrid Options
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="/icon/selfservemanagedService3.png"
                alt="Relume logo"
                className="size-12 noshadow"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Flexible Advertising Solutions Tailored to Your Business Needs
            </h3>
            <p>
              Our platform offers customizable options for every advertiser,
              ensuring optimal campaign success.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="/icon/selfservemanagedService4.png"
                alt="Relume logo"
                className="size-12 noshadow"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Self-Service: Empowering You to Create & Manage Your Campaigns
            </h3>
            <p>
              Utilize our intuitive tools to design and launch your ads at your
              pace.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <img
                src="/icon/selfservemanagedService5.png"
                alt="Relume logo"
                className="size-12 noshadow"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl">
              Managed Services: Expert Support for Your Advertising Campaigns
            </h3>
            <p>
              Our team of professionals will guide you through every step of
              your campaign.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
