"use client";

import React, { useEffect, useState } from "react";
import InfiniteMovingCards  from "../components/ui/InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[18rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image:'/images/logs1.png'
  },
  {
    image:'/images/logs2.png'
  },
  {
    image:'/images/logs3.png'
  },
  {
    image:'/images/logs4.png'
  },
  {
    image:'/images/logs5.png'
  },
  {
    image:'/images/logs6.png'
  },
  {
    image:'/images/logs7.png'
  },
  {
    image:'/images/logs8.png'
  },
  {
    image:'/images/logs9.png'
  },
  {
    image:'/images/logs10.png'
  },
  
  {
    image:'/images/logs11.png'
  },
  {
    image:'/images/logs12.png'
  },
  {
    image:'/images/logs13.png'
  },
  {
    image:'/images/logs14.png'
  },

];
