"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SignupFormDemo } from "./components/contact";
import VideoSplashScreen from "./components/VideoSplashScreen";
import Offerings from "./components/Offerings";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

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
          <Portfolio />
          <Testimonials />
          <SignupFormDemo /> {/* The form is now toggled by a floating icon */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Page;
