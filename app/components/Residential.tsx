'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';  // Assuming Navbar doesn't require props
import Image from 'next/image'; // Correctly importing Image from 'next/image'
import { FaTimes } from 'react-icons/fa'; // Close icon

const portfolioData = {
  flat: {
    tiles: [
      { title: 'Bathroom', thumb: '/images/mainbathroom.png', images: ['/images/bathroom1.jpg', '/images/bathroom2.jpg', '/images/bathroom3.jpg', '/images/bathroom4.jpg'] },
      { title: 'Bedroom', thumb: '/images/mainbedroom.png', images: ['/images/bedroom1.jpg', '/images/bedroom2.jpg', '/images/bedroom3.jpg', '/images/bedroom4.jpg'] },
      { title: 'Dining', thumb: '/images/maindining.png', images: ['/images/dining1.jpg', '/images/dining2.jpg', '/images/hall1.jpg', '/images/hall2.jpg'] },
      { title: 'Kitchen', thumb: '/images/mainkitchen.png', images: ['/images/kitchen1.jpg', '/images/kitchen2.jpg', '/images/kitchen3.jpg', '/images/kitchen4.jpg'] },
    ],
  },
  villa: {
    tiles: [
      { title: 'Bathroom', thumb: '/images/bachu/bathroom1.JPG', images: ['/images/bachu/bathroom1.JPG', '/images/bachu/bathroom2.JPG', '/images/bachu/bathroom3.JPG', '/images/bachu/bathroom4.JPG'] },
      { title: 'Bedroom', thumb: '/images/bachu/bedroom1.JPG', images: ['/images/bachu/bedroom1.JPG', '/images/bachu/bedroom2.JPG', '/images/bachu/bedroom3.JPG', '/images/bachu/bedroom4.JPG'] },
      { title: 'Living Room', thumb: '/images/bachu/living1.JPG', images: ['/images/bachu/living1.JPG', '/images/bachu/living2.JPG', '/images/bachu/living3.JPG', '/images/bachu/living4.JPG'] },
      { title: 'Kitchen', thumb: '/images/bachu/kitchen1.JPG', images: ['/images/bachu/kitchen1.JPG', '/images/bachu/kitchen2.JPG', '/images/bachu/kitchen3.JPG', '/images/bachu/kitchen4.JPG'] },
    ],
  },
  studio: {
    tiles: [
      { title: 'Bathroom', thumb: '/images/comingsoon.png', images: ['/images/comingsoon.png', '/images/comingsoon.png', '/images/comingsoon.png', '/images/comingsoon.png'] },
      { title: 'Bedroom', thumb: '/images/comingsoon.png', images: ['/images/comingsoon.png', '/images/comingsoon.png', '/images/comingsoon.png', '/images/comingsoon.png'] },
      { title: 'Dining', thumb: '/images/comingsoon.png', images: ['/images/comingsoon.png', '/images/comingsoon.png', '/images/comingsoon.png', '/images/comingsoon.png'] },
      { title: 'Kitchen', thumb: '/images/comingsoon.png', images: ['/images/comingsoon.png', '/images/comingsoon.png', '/images/comingsoon.png', '/images/comingsoon.png'] },
    ],
  },
};

type CategoryKey = keyof typeof portfolioData;

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('flat');
  const [flashKey, setFlashKey] = useState(0);
  const [expandedImages, setExpandedImages] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null); // Index of the current image
  const [isPortrait, setIsPortrait] = useState(false); // New state for image orientation

  // Handles category change
  const handleCategoryChange = (category: CategoryKey) => {
    setSelectedCategory(category);
    setFlashKey((prevKey) => prevKey + 1); // Increment key to re-trigger animation
    setExpandedImages(null); // Close expanded images
    setCurrentImageIndex(null); // Reset index
  };

  // Handle tile click for full-screen view
  const handleTileClick = (images: string[]) => {
    setExpandedImages(images);
    setCurrentImageIndex(0); // Start with the first image
  };

  // Determine if the image is portrait or landscape
  const checkImageOrientation = (imgSrc: string) => {
    const img = new window.Image(); // Ensure using window.Image in Next.js
    img.src = imgSrc;
    img.onload = () => {
      setIsPortrait(img.height > img.width);
    };
  };

  useEffect(() => {
    if (expandedImages && currentImageIndex !== null) {
      checkImageOrientation(expandedImages[currentImageIndex]);
    }
  }, [expandedImages, currentImageIndex]);

  // Go to next image
  const nextImage = () => {
    if (expandedImages && currentImageIndex !== null) {
      setCurrentImageIndex((currentIndex) =>
        currentIndex !== null && currentIndex === expandedImages.length - 1 ? 0 : (currentIndex ?? 0) + 1
      );
    }
  };

  // Go to previous image
  const prevImage = () => {
    if (expandedImages && currentImageIndex !== null) {
      setCurrentImageIndex((currentIndex) =>
        currentIndex !== null && currentIndex === 0 ? expandedImages.length - 1 : (currentIndex ?? 0) - 1
      );
    }
  };

  // Handle close of expanded view
  const handleClose = () => {
    setExpandedImages(null);
    setCurrentImageIndex(null);
  };

  return (
    <>
      <Navbar />
      <section
        id="port"
        className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen h-full py-10 lg:py-16"
      >
        <div className="absolute inset-0 bg-[url('/images/livingroom.jpg')] bg-cover bg-center filter brightness-50"></div>

        <div className="relative z-10 mb-6 text-center">
          <h1 className="text-3xl text-white p-5 md:text-6xl">Residential Spaces</h1>
        </div>

        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-6xl mx-auto z-10 w-full p-5 lg:space-x-10 h-full">
          {/* Left Side List */}
          <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
            <ul className="space-y-4 text-lg font-semibold">
              <li
                className={`cursor-pointer transition-colors duration-300 ${
                  selectedCategory === 'flat' ? 'text-[#98B82C]' : 'text-white'
                }`}
                onClick={() => handleCategoryChange('flat')}
              >
                D22 Flat
              </li>
              <li
                className={`cursor-pointer transition-colors duration-300 ${
                  selectedCategory === 'villa' ? 'text-[#98B82C]' : 'text-white'
                }`}
                onClick={() => handleCategoryChange('villa')}
              >
                Bachupally Villa
              </li>
              <li
                className={`cursor-pointer transition-colors duration-300 ${
                  selectedCategory === 'studio' ? 'text-[#98B82C]' : 'text-white'
                }`}
                onClick={() => handleCategoryChange('studio')}
              >
                Studio Apartment
              </li>
            </ul>
          </div>

          {/* Right Side Image Grid */}
          <div key={flashKey} className="lg:w-3/4 w-full grid grid-cols-2 gap-4 p-4 h-full">
            {portfolioData[selectedCategory].tiles.map((tile, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-lg overflow-hidden relative"
                onClick={() => handleTileClick(tile.images)}
              >
                <div className="w-full h-[200px] relative"> {/* Fix height for uniformity */}
                  <Image
                    src={tile.thumb}
                    alt={tile.title}
                    layout="fill" // Ensures the image fills the container
                    objectFit="cover" // Ensures the image covers the container while keeping aspect ratio
                    className="transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl lg:text-2xl text-white font-bold uppercase transition-colors duration-300 group-hover:text-[#98B82C]">
                    {tile.title}
                  </span>
                </div>
              </div>
            ))}
          </div>


        </div>

        {/* Full-Screen Image View */}
        {expandedImages && currentImageIndex !== null && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
            <button
              className="absolute top-5 right-5 text-white text-2xl p-2 z-50"
              onClick={handleClose}
            >
              <FaTimes />
            </button>
            <div className="relative w-full h-full flex justify-center items-center p-4">
              <Image
                src={expandedImages[currentImageIndex]}
                alt="Expanded Image"
                layout="intrinsic"
                width={isPortrait ? 600 : 1000} // Adjusting width for portrait images
                height={isPortrait ? 1000 : 600} // Adjusting height for portrait images
                objectFit="contain"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>

            <button
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 z-40"
              onClick={prevImage}
            >
              {'<'}
            </button>
            <button
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 z-40"
              onClick={nextImage}
            >
              {'>'}
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Portfolio;
