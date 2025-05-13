"use client";

import React from "react";

export function Gallery10() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-10 lg:py-10">
      <div className="container">
        {/* <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Image Gallery
          </h2>
          <p className="md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div> */}
        <div className="gap-8 space-y-8 md:columns-3">
          <div  className="block w-full">
            <img
               src="/images/gif-Image/SmallReelAnimations1.gif"
              alt="Relume placeholder image 1"
              className="size-full rounded-image object-cover noshadow"
              data-aos="zoom-in"
            />
          </div>
          <div  className="block w-full">
            <img
              src="/images/gif-Image/ReelAnimations1.gif"
              alt="Relume placeholder image 2"
              className="size-full rounded-image object-cover noshadow"
              data-aos="zoom-in"
            />
          </div>
          <div  className="block w-full">
            <img
              src="/images/gif-Image/SmallReelAnimations2.gif"
              alt="Relume placeholder image 1"
              className="size-full rounded-image object-cover noshadow"
              data-aos="zoom-in"
            />
          </div>
          <div  className="block w-full">
            <img
              src="/images/gif-Image/ReelAnimations2.gif"
              alt="Relume placeholder image 3"
              className="size-full rounded-image object-cover noshadow"
              data-aos="zoom-in"
            />
          </div>
          <div  className="block w-full">
            <img
              src="/images/gif-Image/ReelAnimations3.gif"
              alt="Relume placeholder image 4"
              className="size-full rounded-image object-cover noshadow"
              data-aos="zoom-in"
            />
          </div>
          <div  className="block w-full">
            <img
              src="/images/gif-Image/SmallReelAnimations3.gif"
              alt="Relume placeholder image 5"
              className="size-full rounded-image object-cover noshadow"
              data-aos="zoom-in"
            />
          </div>
          <div  className="block w-full">
            <img
              src="/images/gif-Image/ReelAnimations4.gif"
              alt="Relume placeholder image 6"
              className="size-full rounded-image object-cover noshadow"
              data-aos="zoom-in"
            />
          </div>
          <a href="#" className="block w-full">
            <img
              src="/images/gif-Image/SmallReelAnimations4.gif"
              alt="Relume placeholder image 7"
              className="size-full rounded-image object-cover noshadow"
              data-aos="zoom-in"
            />
          </a>
        </div>


<div className="mt-10 flex justify-center">
  <a
    href="/creativegallery"
    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 uppercase text-white px-16 py-4 rounded-full border border-red-600 transition duration-300 ease-in-out shadow hover:shadow-lg"
  >
    Gallery
    <svg
      className="w-5 h-5 animate-wiggleRight"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </a>
</div>



      </div>
    </section>
  );
}
