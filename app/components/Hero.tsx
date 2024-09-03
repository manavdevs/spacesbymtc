"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLightbulb } from "react-icons/fa";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLightbulb = () => {
    setIsLightOn(!isLightOn);
  };

  const slides = [
    { 
      srcSmall: '/images/Carousel1.png', 
      srcLarge: '/images/Carousel1.jpg', 
      href: '#home',
      title: 'Crafting Interiors with Character',
      description: 'Tailored designs just for you—perfect fit for your space.',
    },
    { 
      srcSmall: '/images/Carousel2.png', 
      srcLarge: '/images/Carousel2.jpg', 
      href: '#home',
      title: "Today's Design Tomorrow's Reality",
      description: 'Your one-stop shop for interiors, furniture, and technology, start to finish.',
    },
    { 
      srcSmall: '/images/Carousel3.png', 
      srcLarge: '/images/Carousel3.jpg', 
      href: '#home',
      title: 'Building Spaces to Connect!',
      description: "Elegant Designs that’s the foundation of your dream space.",
    },
    { 
      srcSmall: '/images/Carousel4.png', 
      srcLarge: '/images/Carousel4.jpg', 
      href: '#home',
      title: 'Sofa, So Good!',
      description: "Comfort meets creativity with our stylish lounging and luxury seating.",
    },
    { 
      srcSmall: '/images/Carousel5.png', 
      srcLarge: '/images/Carousel5.jpg', 
      href: '#home',
      title: (
        <span>
          Let There Be L
          <button
            type="button"
            className="inline-flex items-center justify-center text-white  ease-in-out cursor-pointer"
            onClick={toggleLightbulb}
          >
            <FaLightbulb className={`${isLightOn ? "text-yellow-400 transition duration-300" : "text-white transition duration-300"}`} size={30} />
          </button>
          ght
        </span>
      ),
      description: "Illuminate your space with our perfect lighting designs for any setting.",
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (  
    <div
      id="home"
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            <Link href={slide.href}>
              <img
                src={isSmallScreen ? slide.srcSmall : slide.srcLarge}
                className="w-full h-full object-fill filter brightness-50"
                alt={`Slide ${index + 1}`}
              />
            </Link>

            {/* Text overlay for mobile screens */}
            {isSmallScreen && (
              <div className="absolute inset-0 flex items-center justify-center text-center z-20 px-4">
                <div>
                  <h2 className={`text-2xl font-bold text-white mb-2`}>
                    {slide.title}
                  </h2>
                  <p className={`text-lg text-white px-4 py-2`}>
                    {slide.description}
                  </p>
                </div>
              </div>
            )}

            {/* Text overlay for large screens */}
            {!isSmallScreen && (
              <div className="absolute left-20 inset-y-0 flex flex-col justify-center text-white z-20 px-4">
                <h2 className={`text-6xl font-bold mb-4`}>
                  {slide.title}
                </h2>
                <p className={`text-2xl`}>
                  {slide.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute bottom-16 left-[100px] lg:left-[200px] z-10 flex items-center justify-center h-10 w-10 text-white hover:text-amber-400 lg:text-white transition-all cursor-pointer"
        onClick={goToPrevSlide}
      >
        <span className="text-6xl font-light">&#x2190;</span>
      </button>
      <button
        type="button"
        className="absolute bottom-16 right-[100px] lg:right-[200px] z-10 flex items-center justify-center h-10 w-10 text-white hover:text-amber-400 lg:text-white transition-all  cursor-pointer"
        onClick={goToNextSlide}
      >
        <span className="text-6xl font-light">&#x2192;</span>
      </button>
    </div>
  );
};

export default Hero;
