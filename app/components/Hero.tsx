"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, easeIn, easeInOut } from 'framer-motion';

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  const slides = [
    { 
      srcSmall: '/images/Carousel1.png', 
      srcLarge: '/images/Carousel1.jpg', 
      href: '#home',
      title: 'Furniture that Fits Like a Glove',
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
      title: 'Floor Your Guests!',
      description: "Elegant flooring that’s the foundation of your dream space.",
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
      title: 'Let There Be Light Fixtures!',
      description: "Illuminate your space with our perfect lighting designs for any setting.",
    }
  ];

  useEffect(() => {
    setShowText(true);
  }, []);

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
    setAnimateText(true);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setAnimateText(true);
  };

  useEffect(() => {
    if (animateText) {
      const timer = setTimeout(() => {
        setAnimateText(false);
      }, 1000); // Duration of the text animation

      return () => clearTimeout(timer);
    }
  }, [animateText]);

  const textVariants = {
    hidden: { opacity: 1, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (  

      <div
        id="home"
        className="relative w-full h-[800px] flex items-center justify-center -mt-[80px] overflow-hidden"
      >
        <motion.div
          className="relative w-full h-full flex"
          key={activeIndex} // Ensure this div re-renders on slide change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
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
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center text-center z-20"
                  variants={textVariants}
                  initial="hidden"
                  animate={animateText ? "visible" : "hidden"}
                  transition={{ duration: 1, ease: easeInOut }}
                >
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2" style={{ textShadow: '2px 2px 4px #000000' }}>
                      {slide.title}
                    </h2>
                    <p className="text-lg text-white px-4 py-2" style={{ textShadow: '2px 2px 4px #000000' }}>
                      {slide.description}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Text overlay for large screens */}
              {!isSmallScreen && (
                <motion.div
                  className="absolute left-20 inset-y-0 flex flex-col justify-center pl-2 pr-10 text-white z-20"
                  variants={textVariants}
                  initial="hidden"
                  animate={animateText ? "visible" : "hidden"}
                  transition={{ duration: 1, ease: easeIn }}
                >
                  <h2 className="text-6xl font-bold mb-4" style={{ textShadow: '2px 2px 4px #000000' }}>
                    {slide.title}
                  </h2>
                  <p className="text-2xl" style={{ textShadow: '2px 2px 4px #000000' }}>
                    {slide.description}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute bottom-16 right-[80px] transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 text-white hover:text-amber-400 lg:text-white transition-all cursor-pointer"
          onClick={goToPrevSlide}
        >
          <span className="text-6xl font-light">&#x2190;</span>
        </button>
        <button
          type="button"
          className="absolute bottom-16 right-3 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 text-white hover:text-amber-400 lg:text-white transition-all cursor-pointer"
          onClick={goToNextSlide}
        >
          <span className="text-6xl font-light">&#x2192;</span>
        </button>
      </div>
  );
};

export default Hero;
