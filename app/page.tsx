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
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
import OurFactory from "./components/OurFactory";
import ImplementationMethodologies from "./components/ImplementationMethodologies ";
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
<<<<<<< HEAD
          <Navbar />
          <Hero />
          <Offerings />
          {/* <Whyus /> */}
          <ImplementationMethodologies/>
          <Testimonials />
          <OurFactory/>
          <SignupFormDemo /> 
          <InfiniteMovingCardsDemo/>
          <Footer />
=======
        <Navbar />
        <Hero />
        <Offerings />
        <ImplementationMethodologies/>
        <Testimonials />
        <OurFactory/>
        <SignupFormDemo /> 
        <InfiniteMovingCardsDemo/>
        <Footer />
>>>>>>> efe3c3721cec0d3fc9db4dfe400a6b8534882c1e
        </div>
      )}
    </>
  );
};

export default Page;