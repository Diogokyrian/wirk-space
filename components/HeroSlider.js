
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const heroImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.png",
];

export default function HeroSlider() {
  return (
    <section className="relative h-112.5 w-full overflow-hidden rounded-2xl md:h-150">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        speed={400}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="h-full w-full"
        style={{
          "--swiper-pagination-color": "#D3AB5E",
          "--swiper-pagination-bullet-inactive-color": "#4B5563",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={image} className="h-full w-full">
            <img
              src={image}
              alt={`WirkSpace hero banner ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
