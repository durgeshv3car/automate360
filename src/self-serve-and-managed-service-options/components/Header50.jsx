"use client";

import React from "react";

export function Header50() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-text-alternative md:mb-4 text-white text-left">
            Explore
          </p>
          <h1 className="mb-5 text-3xl font-bold text-text-alternative md:mb-6 md:text-4xl lg:text-7xl text-white text-left">
            Choose Your Path
          </h1>
          <p className="text-text-alternative md:text-md text-white text-left">
            Discover flexible advertising solutions tailored for your needs
            self-serve or managed services available.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          // src="https://media.istockphoto.com/id/601398828/photo/indecisive-and-lost-man-chooses-the-right-path.jpg?s=612x612&w=0&k=20&c=iMaN7QQ7NKgE77JtXLDNlwYFcdWJ1DXTXZ-SE02FjME="
          src="./images/AboutusTemp/AboutusTemp7.webp"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </section>
  );
}
