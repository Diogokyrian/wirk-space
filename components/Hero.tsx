
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const heroImages = [
  "/hero4.png",
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
];

const Hero = () => {
  return (
    <section className="w-full bg-black px-4 py-4 md:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-black p-4 md:p-8">

   
        <div
          className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-black shadow-xl sm:aspect-2/1 md:h-95 md:aspect-auto"
          style={
            {
              "--swiper-pagination-color": "#D3AB5E",
              "--swiper-pagination-bullet-inactive-color": "#4B5563",
              "--swiper-pagination-bullet-inactive-opacity": "1",
            } as React.CSSProperties
          }
        >
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            loop={true}
            speed={600}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{ clickable: true }}
            className="h-full w-full"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={image} className="relative h-full w-full">
                <Image
                  src={image}
                  alt={`WirkSpace Entertainment banner ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="rounded-2xl object-contain"
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

     
        <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">

   
          <div className="flex flex-col gap-4 px-2 text-white lg:col-span-5">
            <h2 className="text-2xl font-bold tracking-tight text-[#D3AB5E] md:text-3xl">
              Our vision
            </h2>

            <p className="text-sm leading-relaxed text-gray-400 md:text-base">
              Our mission is to introduce young, vibrant minds to this amazing
              technology and give them a means on the liberation the digital
              space & Web3 space has to offer to mankind.
            </p>
          </div>

     
          <div className="flex w-full flex-col items-end gap-4 lg:col-span-7">

       
            <div className="relative flex w-full items-center md:w-3/4">
              <input
                type="text"
                placeholder="Search Wirkspace"
                className="w-full rounded-xl border border-gray-800 bg-black py-2 pl-3 pr-10 text-sm text-gray-300 placeholder-gray-500 focus:border-gray-600 focus:outline-none"
              />

              <svg
                className="pointer-events-none absolute right-4 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

     
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black md:h-65 md:w-3/4">
              <Image
                src="/Wirkspace2.png"
                alt="Financial Freedom Goal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl object-contain"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
