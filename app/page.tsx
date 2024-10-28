"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SignupFormDemo } from "./components/contact";
import VideoSplashScreen from "./components/VideoSplashScreen";
import Offerings from "./components/Offerings";
// import Whyus from "./components/Whyus";
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
        // <div>
        //   <Navbar />
        //   <Hero />
        //   <Offerings />
        //   {/* <Whyus /> */}
        //   <ImplementationMethodologies/>
        //   <Testimonials />
        //   <OurFactory/>
        //   <SignupFormDemo /> 
        //   <InfiniteMovingCardsDemo/>
        //   <Footer />

        // </div>
        <div>
          <h1 className="flex justify-center items-center">Temporarily Out of Service</h1>
        </div>
      )}
    </>
  );
};

export default Page;
