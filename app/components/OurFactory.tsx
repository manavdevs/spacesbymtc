import React, { useState } from 'react';

const OurFactory = () => {
  // Array of 12 factory images
  const factoryImages = [
    "/images/factory/1.png",
    "/images/factory/2.png",
    "/images/factory/3.png",
    "/images/factory/4.png",
    "/images/factory/17.png",
    "/images/factory/6.png",
    "/images/factory/7.png",
    "/images/factory/8.png",
    "/images/factory/9.png",
    "/images/factory/10.png",
    "/images/factory/11.png",
    "/images/factory/12.png",
  ];

  // State to track the current index of the image set
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine the maximum number of sets of images
  const imagesPerSet = 6;
  const totalSets = Math.ceil(factoryImages.length / imagesPerSet);

  // Function to move to the next set of images
  const handleNext = () => {
    if (currentIndex < totalSets - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to move to the previous set of images
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Get the images for the current set
  const currentImages = factoryImages.slice(currentIndex * imagesPerSet, (currentIndex + 1) * imagesPerSet);

  return (
    <>
      <section id="factory" className="relative h-auto flex flex-col items-center justify-center py-16">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/factorybg.jpeg')] bg-cover bg-center filter brightness-50"></div>

        {/* Foreground content */}
        <div className="relative z-10 w-full max-w-6xl p-5 text-center">
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl mb-6 text-white">OUR FACTORY</h2>

          {/* Short Introductory Paragraph */}
          <p className="text-white text-lg lg:text-xl mb-8">
            Step inside our state-of-the-art factory where precision meets innovation to create the finest quality products.
          </p>

          {/* Image Grid with Arrows */}
          <div className="relative w-full">
            {/* Left Arrow */}
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 z-20"
              >
                &#8592;
              </button>
            )}

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {currentImages.map((src, index) => (
                <div key={index} className="relative w-full h-[200px] md:h-[250px] overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={`Factory Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            {currentIndex < totalSets - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 z-20"
              >
                &#8594;
              </button>
            )}
          </div>

          {/* Factory Description */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center bg-white bg-opacity-80 rounded-lg shadow-lg p-6 space-y-4 md:space-y-0">
            <p className="text-gray-700 font-semibold">50,000 Sqft Factory in Hyderabad with the latest cutting-edge equipment.</p>
            <p className="text-gray-700 font-semibold">Rigorous raw material check to ensure high-quality procurement.</p>
            <p className="text-gray-700 font-semibold">Batch Production method: 92% material utilization to minimize waste.</p>
            <p className="text-gray-700 font-semibold">Capacity to furnish 3,000 homes annually and offer a 10-year warranty on all woodwork.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFactory;
