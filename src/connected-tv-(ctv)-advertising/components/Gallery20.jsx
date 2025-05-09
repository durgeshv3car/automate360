"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return clsx("mx-[3px] inline-block size-2 rounded-full", {
      "bg-black": current === index + 1,
      "bg-neutral-light": current !== index + 1,
    });
  };

  const imageClassName = (index) => {
    return clsx(
      "aspect-video size-full object-cover transition-opacity duration-700 ease-linear rounded-image",
      {
        "opacity-30": current !== index + 1,
      },
    );
  };

  return { api, setApi, current, handleDotClick, dotClassName, imageClassName };
};

export function Gallery20() {
  const carouselState = useCarousel();
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
            Image Gallery
          </h2>
          <p className="md:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
        >
          <CarouselContent className="ml-0">
            <CarouselItem className="pr-6 pl-0 md:pr-8">
              <div className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className={carouselState.imageClassName(0)}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pr-6 pl-0 md:pr-8">
              <div className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 2"
                  className={carouselState.imageClassName(1)}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pr-6 pl-0 md:pr-8">
              <div className="w-full">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 3"
                  className={carouselState.imageClassName(2)}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="rt-8 mt-8 flex items-center justify-between">
            <div className="mt-5 flex w-full items-start justify-start">
              <button
                onClick={carouselState.handleDotClick(0)}
                className={carouselState.dotClassName(0)}
              />
              <button
                onClick={carouselState.handleDotClick(1)}
                className={carouselState.dotClassName(1)}
              />
              <button
                onClick={carouselState.handleDotClick(2)}
                className={carouselState.dotClassName(2)}
              />
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static top-0 right-0 size-12 -translate-y-0" />
              <CarouselNext className="static top-0 right-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
