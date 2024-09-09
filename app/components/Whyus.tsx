"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconSquareRoundedX } from '@tabler/icons-react';

type Offering = {
  id: number;
  title: string;
  image: string;
  loadingStates: Array<{ text: string }>;
};

const offeringsData: Offering[] = [
  {
    id: 1,
    title: 'Meet The Designer',
    image: '/images/design.jpg',
    loadingStates: [
      { text: 'Step 1: Understand requirements' },
      { text: 'Step 2: Define scope of work' },
      { text: 'Step 3: Site & Experience Centre visits' },
      { text: 'Step 4: Tentative quotation' },
      { text: 'Step 5: Customer bucketing basis budget' },
    ],
  },
  {
    id: 2,
    title: 'Design Finalization',
    image: '/images/final.jpg',
    loadingStates: [
      { text: 'Step 1: End-to-end Interior Solutions' },
      { text: 'Step 2: Choose your Design' },
      { text: 'Step 3: Pre Define Design Library' },
      { text: 'Step 4: Finalize Design' },
    ],
  },
  {
    id: 3,
    title: 'Place the Order',
    image: '/images/order.jpg',
    loadingStates: [
      { text: 'Step 1: Visit to Experience Centres' },
      { text: 'Step 2: Live mock-ups to gain trust on quality & process' },
      { text: 'Step 3: 3D and AR walkthrough' },
    ],
  },
];

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-6 h-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2.25 2.25L15 9" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const CheckFilled = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm13.36-1.814a.75.75 0 00-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

const LoaderCore = ({ loadingStates, value = 0 }: { loadingStates: Array<{ text: string }>; value?: number }) => (
  <div className="flex relative justify-start flex-col max-w-full mx-auto mt-6">
    {loadingStates.map((loadingState, index) => {
      const distance = Math.abs(index - value);
      const opacity = Math.max(1 - distance * 0.2, 0);

      return (
        <motion.div
          key={index}
          className="text-left flex gap-2 mb-4"
          initial={{ opacity: 0, y: -(value * 40) }}
          animate={{ opacity: opacity, y: -(value * 40) }}
          transition={{ duration: 0.5 }}
        >
          <div>
            {index > value && <CheckIcon className="text-black dark:text-white" />}
            {index <= value && <CheckFilled className={`text-black dark:text-white ${value === index ? 'opacity-100' : ''}`} />}
          </div>
          <span className={`text-black dark:text-white ${value === index ? 'opacity-100' : ''}`}>{loadingState.text}</span>
        </motion.div>
      );
    })}
  </div>
);

const MultiStepLoader = ({ loadingStates, loading, duration = 2000, loop = true }: { loadingStates: Array<{ text: string }>; loading?: boolean; duration?: number; loop?: boolean }) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) {
      setCurrentState(0);
      return;
    }
    const timeout = setTimeout(() => {
      setCurrentState((prevState) => (loop ? (prevState === loadingStates.length - 1 ? 0 : prevState + 1) : Math.min(prevState + 1, loadingStates.length - 1)));
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentState, loading, loop, loadingStates.length, duration]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-auto">
            <LoaderCore value={currentState} loadingStates={loadingStates} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Whyus = () => {
  const [activeOffering, setActiveOffering] = useState<Offering | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = (offering: Offering) => {
    setActiveOffering(offering);
    setLoading(false); // Reset loading state
    setTimeout(() => {
      setLoading(true); // Start loading after reset
    }, 100); // Short delay to reset the loader
  };

  const getLoaderTopPosition = () => {
    if (!activeOffering) return 'lg:top-[67%]';
    switch (activeOffering.id) {
      case 1:
        return 'lg:top-[67%] lg:left-[60%] top-[80%]';
      case 2:
        return 'lg:top-[63%] lg:left-[60%] top-[77%]';
      case 3:
        return 'lg:top-[60%] lg:left-[60%] top-[74%]';
      default:
        return 'lg:top-[67%] lg:left-[60%] top-[86%]';
    }
  };

  return (
    <section id="portfolio" className="relative flex flex-col  justify-center h-auto min-h-[1200px] lg:py-16 py-6 bg-cover bg-center" style={{ backgroundImage: 'url("/images/livingroom.jpg")' }}>
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Implementation Heading */}
      <div className="relative z-10 w-full text-center lg:mb-8">
        <h1 className="text-white text-4xl font-bold">Implementation</h1>
        <p className="text-white text-lg mt-2">This section provides an overview of the implementation methods we follow.</p>
      </div>

      {/* Offerings Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto z-10 w-full p-6 lg:space-x-10">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 relative flex justify-center items-center">
          {activeOffering ? (
            <div className="flex justify-center relative z-20 max-h-[300px] lg:max-h-[500px] w-full h-full overflow-hidden">
              <img src={activeOffering.image} alt={activeOffering.title} className="object-contain lg:object-cover w-full h-full rounded-lg shadow-lg" />
            </div>
          ) : (
            <div className="text-white text-center p-6">
              <h2 className="text-xl lg:text-3xl font-bold mb-4">Implementation Process at SpacesbyMTC</h2>
            </div>
          )}
        </div>

        {/* Clickable Numbers */}
        <div className="relative z-10 flex justify-center space-x-4 lg:space-x-10 text-center mt-4 lg:mt-0 lg:w-1/2">
          {offeringsData.map((offering) => (
            <div key={offering.id} onClick={() => handleClick(offering)} className={`cursor-pointer transition duration-300 ease-in-out ${activeOffering?.id === offering.id ? 'text-[#98B82C]' : 'text-white'}`}>
              <h3 className="text-2xl lg:text-4xl font-bold lg:mb-1 mb-1">0{offering.id}</h3>
              <p className="text-xs lg:text-base uppercase">{offering.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bullet Point Scrolling Animation */}
      <div className={`absolute z-10 w-full max-w-5xl mx-auto mt-12 ${getLoaderTopPosition()}`}>
        {activeOffering && (
          <MultiStepLoader loadingStates={activeOffering.loadingStates} loading={loading} duration={2000} loop={false} />
        )}
      </div>
    </section>
  );
};

export default Whyus;
