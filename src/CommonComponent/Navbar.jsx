// "use client";

// import { Button, useMediaQuery } from "@relume_io/relume-ui";
// import { AnimatePresence, motion } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { RxChevronDown } from "react-icons/rx";
// import { Link } from "react-router-dom";

// const useRelume = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const isMobile = useMediaQuery("(max-width: 991px)");

//   const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

//   const openOnMobileDropdownMenu = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const openOnDesktopDropdownMenu = () => {
//     !isMobile && setIsDropdownOpen(true);
//   };

//   const closeOnDesktopDropdownMenu = () => {
//     !isMobile && setIsDropdownOpen(false);
//   };

//   const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
//   const animateMobileMenuButtonSpan = isMobileMenuOpen
//     ? ["open", "rotatePhase"]
//     : "closed";
//   const animateDropdownMenu = isDropdownOpen ? "open" : "close";
//   const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";

//   return {
//     toggleMobileMenu,
//     openOnDesktopDropdownMenu,
//     closeOnDesktopDropdownMenu,
//     openOnMobileDropdownMenu,
//     animateMobileMenu,
//     animateMobileMenuButtonSpan,
//     animateDropdownMenu,
//     animateDropdownMenuIcon,
//   };
// };

// export function Navbar() {
//   const useActive = useRelume();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section
//       id="relume"
//       className={`py-2 sticky top-0 z-[999] flex w-full items-center border-b border-border-primary transition-colors duration-300 lg:min-h-18 lg:px-[5%] ${
//         scrolled ? "bg-gray-100 shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="size-full lg:flex lg:items-center lg:justify-between">
//         <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
//           <Link to="/">
//             <img
//               src="/images/logo360.png"
//               alt="Logo image"
//               style={{width:150}}
//               className="noshadow"
//             />
//           </Link>
//           <button
//             className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
//             onClick={useActive.toggleMobileMenu}
//           >
//             <motion.span
//               className="my-[3px] h-0.5 w-6 bg-black"
//               animate={useActive.animateMobileMenuButtonSpan}
//               variants={{
//                 open: { translateY: 8, transition: { delay: 0.1 } },
//                 rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
//                 closed: {
//                   translateY: 0,
//                   rotate: 0,
//                   transition: { duration: 0.2 },
//                 },
//               }}
//             />
//             <motion.span
//               className="my-[3px] h-0.5 w-6 bg-black"
//               animate={useActive.animateMobileMenu}
//               variants={{
//                 open: { width: 0, transition: { duration: 0.1 } },
//                 closed: {
//                   width: "1.5rem",
//                   transition: { delay: 0.3, duration: 0.2 },
//                 },
//               }}
//             />
//             <motion.span
//               className="my-[3px] h-0.5 w-6 bg-black"
//               animate={useActive.animateMobileMenuButtonSpan}
//               variants={{
//                 open: { translateY: -8, transition: { delay: 0.1 } },
//                 rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
//                 closed: {
//                   translateY: 0,
//                   rotate: 0,
//                   transition: { duration: 0.2 },
//                 },
//               }}
//             />
//           </button>
//         </div>
//         <motion.div
//           variants={{
//             open: { height: "var(--height-open, 100dvh)" },
//             close: { height: "var(--height-closed, 0)" },
//           }}
//           initial="close"
//           exit="close"
//           animate={useActive.animateMobileMenu}
//           transition={{ duration: 0.4 }}
//           className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
//         >
//           <Link
//             to="/"
//             className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 text-left"
//           >
//             Home
//           </Link>
//           <div
//             onMouseEnter={useActive.openOnDesktopDropdownMenu}
//             onMouseLeave={useActive.closeOnDesktopDropdownMenu}
//           >
//             <button
//               className="flex w-full items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
//               onClick={useActive.openOnMobileDropdownMenu}
//             >
//               <Link to="/rich-media-advertising"><span>Solutions</span></Link>
//               <motion.span
//                 variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
//                 animate={useActive.animateDropdownMenuIcon}
//                 transition={{ duration: 0.3 }}
//               >
//                 <RxChevronDown />
//               </motion.span>
//             </button>
//             <AnimatePresence>
//               <motion.nav
//                 variants={{
//                   open: {
//                     visibility: "visible",
//                     opacity: "var(--opacity-open, 100%)",
//                     display: "block",
//                     y: 0,
//                   },
//                   close: {
//                     visibility: "hidden",
//                     opacity: "var(--opacity-close, 0)",
//                     display: "none",
//                     y: "var(--y-close, 0%)",
//                   },
//                 }}
//                 animate={useActive.animateDropdownMenu}
//                 initial="close"
//                 exit="close"
//                 transition={{ duration: 0.2 }}
//                 className="bg-[#fff] lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
//               >
//                 <Link  to="/rich-media-advertising" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
//                   Rich Media Advertising
//                 </Link>
//                 <Link to="/programmatic-display-&-video" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
//                 Programmatic Display & Video
//                 </Link>
//                 <Link to="/connected-tv-(ctv)-advertising" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
//                 Connected TV (CTV) & OTT Advertising
//                 </Link>
//                 <Link to="/audience-data-activation" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
//                 Audience Data Activation
//                 </Link>
//                 <Link to="/self-serve-and-managed-service-options" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
//                 SSP/DSP
//                 </Link>
//                 <Link to="/solutions" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
//                 View All
//                 </Link>
//               </motion.nav>
//             </AnimatePresence>
//           </div>
//           <Link to="/about-us" className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 text-left">
//             About Us
//           </Link>
//           <Link to="/contact" className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 text-left">
//             Contact Us
//           </Link>
//           <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-4 lg:flex-row text-left bg-red-600 p-2 rounded-md text-white">
//             <Link to="/bookdemo" title="Book Demo" size="sm" className="w-full">
//               Book Demo
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { RxChevronDown } from "react-icons/rx";
import { Link } from "react-router-dom";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };

  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";

  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar() {
  const useActive = useRelume();
  const [scrolled, setScrolled] = useState(false);
  const [isLogoShrinked, setIsLogoShrinked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setIsLogoShrinked(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="relume"
      className={`py-2 sticky top-0 z-[999] flex w-full items-center border-b border-border-primary transition-colors duration-300 lg:min-h-18 lg:px-[5%] ${
        scrolled ? "bg-gray-100 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href="/">
            <img
              src={
                isLogoShrinked
                  ? "/images/logoshot.png"
                  : "/images/logo360.png"
              }
              alt="Logo"
              style={{
                width: isLogoShrinked ? 87 : 150,
              }}
              className="noshadow"
            />
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>

        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <a
            href="/"
            className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 text-left"
          >
            Home
          </a>

          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              className="flex w-full items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              <span>Solutions</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <RxChevronDown />
              </motion.span>
            </button>

            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="bg-[#fff] lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
              >
                <a href="/rich-media-advertising" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
                  Rich Media Advertising
                </a>
                <a href="/programmatic-display-&-video" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
                  Programmatic Display & Video
                </a>
                <a href="/connected-tv-(ctv)-advertising" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
                  Connected TV (CTV) & OTT Advertising
                </a>
                <a href="/audience-data-activation" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
                  Audience Data Activation
                </a>
                <a href="/self-serve-and-managed-service-options" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
                  SSP/DSP
                </a>
                <a href="/solutions" className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-left">
                  View All
                </a>
              </motion.nav>
            </AnimatePresence>
          </div>

          <a href="/about-us" className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 text-left">
            About Us
          </a>
          <a href="/contact" className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 text-left">
            Contact Us
          </a>

          <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-4 lg:flex-row text-left bg-red-600 p-2 rounded-md text-white text-center">
            <a href="/bookdemo" title="Book Demo" size="sm" className="w-full">
              Book Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
