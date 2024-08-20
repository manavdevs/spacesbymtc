"use client"

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useState } from 'react';
import { SignupFormDemo } from './components/contact';
import VideoSplashScreen from './components/VideoSplashScreen'
import Offerings from './components/Offerings'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const page = () => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false );

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
                    <Offerings/>
                    <Portfolio/>
                    <Testimonials/>
                    <SignupFormDemo/>
                    <Footer/>
                </div>
            )}
        </>
    );
}

export default page 