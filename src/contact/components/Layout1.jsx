"use client";

import React from "react";

export function Layout1() {
  return (
    <section id="relume" className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16 lg:gap-x-24 items-center">
          {/* Left Text Section */}
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
              Connect
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Transform Your <span className="text-blue-500">Advertising</span> with Expert Guidance
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              At Automate360, we specialize in elevating your advertising
              strategies. Let us show you how our innovative solutions can drive
              your success.
            </p>
          </div>

          {/* Right Image Section */}
          <div>
            <div className="w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src="./images/Homepagetemp/Homepagetemp15.jpg"
                alt="Automate360 Advertising Visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
