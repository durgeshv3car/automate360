"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
  BiMap,
} from "react-icons/bi";

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 sm:px-[5%] pt-16 pb-8">
      <div className="max-w-7xl mx-auto  gap-x-8 gap-y-12 text-sm">
        
        {/* Column 1: Logo + Address + Socials */}
        <div className="col-span-2 md:col-span-1">
          <img src="/images/logo360.png" alt="Logo" className="h-8 mb-6 noshadow m-auto" />

          <div className="flex items-start gap-3 mb-4 justify-center">
            <BiMap className="mt-1 shrink-0 size-5 text-gray-300" />
            <p className="text-gray-300 text-center">
              536, 5th Floor, JMD MEGAPOLIS, Sector 48, Gurugram, Haryana 122018
            </p>
          </div>

          <div className="flex gap-4 mt-4 mb-6 justify-center">
            <a href="https://www.facebook.com/Automate360.io/" aria-label="Facebook">
              <BiLogoFacebookCircle className="size-6 hover:text-gray-300 transition" />
            </a>
            {/* <a href="#" aria-label="Twitter">
              <BiLogoTwitter className="size-6 hover:text-gray-300 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <BiLogoInstagramAlt className="size-6 hover:text-gray-300 transition" />
            </a> */}
            <a href="https://in.linkedin.com/company/automate360" aria-label="LinkedIn">
              <BiLogoLinkedinSquare className="size-6 hover:text-gray-300 transition" />
            </a>
          </div>

          <p className="text-xs text-gray-500">© 2025 automate360. All rights reserved.</p>
        </div>


   
      </div>
    </footer>
  );
}
