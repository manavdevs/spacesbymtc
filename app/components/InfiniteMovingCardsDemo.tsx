"use client";

import React from "react";
import InfiniteMovingCards from "../components/ui/InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="relative h-[18rem] flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-black/[0.05] items-center justify-center overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />

      <div className="absolute text-[13px] top-2 left-1/2 transform -translate-x-1/2 bg-black text-white py-4 px-4 rounded-full text-md lg:text-lg  z-10">
        Our Partners in Procurement
      </div>
    </div>
  );
}

const testimonials = [
  { image: '/images/logs1.png' },
  { image: '/images/logs2.png' },
  { image: '/images/logs3.png' },
  { image: '/images/logs4.png' },
  { image: '/images/logs5.png' },
  { image: '/images/logs6.png' },
  { image: '/images/logs7.png' },
  { image: '/images/logs8.png' },
  { image: '/images/logs9.png' },
  { image: '/images/logs10.png' },
  { image: '/images/logs11.png' },
  { image: '/images/logs12.png' },
  { image: '/images/logs13.png' },
  { image: '/images/logs14.png' },
];
