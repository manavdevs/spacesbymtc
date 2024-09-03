"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SignupFormDemo } from "./components/contact";
import VideoSplashScreen from "./components/VideoSplashScreen";
import Offerings from "./components/Offerings";
import Whyus from "./components/Whyus";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
const Page = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  return (
    <>
      {isVideoPlaying ? (
        <VideoSplashScreen onVideoEnd={handleVideoEnd} />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Offerings />
          <Whyus />
          <Testimonials />
          <SignupFormDemo /> 
          <InfiniteMovingCardsDemo/>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Page;
