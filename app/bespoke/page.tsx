"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

// Defining the types for the images object
type ImagePaths = {
  sofas: string[];
  chairs: string[];
  tables: string[];
};

// Defining the images object with proper types
const images: ImagePaths = {
  sofas: [
    "/images/Sofas/1.jpg",
    "/images/Sofas/2.jpg",
    "/images/Sofas/3.jpg",
    "/images/Sofas/4.jpg",
    "/images/Sofas/5.jpg",
    "/images/Sofas/6.jpg",
    "/images/Sofas/7.jpg",
    "/images/Sofas/8.jpg",
    "/images/Sofas/9.jpg",
    "/images/Sofas/10.jpg",
    "/images/Sofas/11.jpg",
    "/images/Sofas/12.jpg",
    "/images/Sofas/13.jpg",
    "/images/Sofas/14.jpg",
    "/images/Sofas/15.jpg",
    "/images/Sofas/20.jpg",
    "/images/Sofas/21.jpg",
  ],
  chairs: [
    "/images/Chairs/1.jpg",
    "/images/Chairs/2.jpg",
    "/images/Chairs/3.jpg",
    "/images/Chairs/4.jpg",
    "/images/Chairs/5.jpg",
    "/images/Chairs/6.jpg",
    "/images/Chairs/7.jpg",
    "/images/Chairs/8.jpg",
    "/images/Chairs/9.jpg",
    "/images/Chairs/10.jpg",
    "/images/Chairs/11.jpg",
    "/images/Chairs/17.jpg",
    "/images/Chairs/18.jpg",
    "/images/Chairs/19.jpg",
    "/images/Chairs/20.jpg",
    "/images/Chairs/21.jpg",
  ],
  tables: [
    "/images/Tables/1.jpg",
    "/images/Tables/7.jpg",
    "/images/Tables/8.jpg",
    "/images/Tables/9.jpg",
    "/images/Tables/10.jpg",
    "/images/Tables/11.jpg",
    "/images/Tables/12.jpg",
  ],
};

const categories = ['Sofas', 'Chairs', 'Tables'];

const Page = () => {
  const [activeCategory, setActiveCategory] = useState<keyof ImagePaths>('sofas');
  const [fadeIn, setFadeIn] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Manage selected image state

  const handleCategoryClick = (category: keyof ImagePaths) => {
    setFadeIn(false);
    setTimeout(() => {
      setActiveCategory(category);
      setFadeIn(true);
    }, 300);
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src); // Set the selected image for full view
  };

  const handleClose = () => {
    setSelectedImage(null); // Close the full view
  };

  return (
    <>
    <Navbar/>
      <section id="portfolio" className="relative flex flex-col items-center justify-center h-auto min-h-[800px] lg:py-16 ">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/furniturebg.jpeg')] bg-cover bg-center filter brightness-50"></div>

        {/* Category Buttons */}
        <div className="relative z-10 w-full max-w-7xl text-center mb-2 lg:mt-8 mt-24  ">
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category.toLowerCase() as keyof ImagePaths)}
                className={`py-2 px-6 bg-white text-black rounded-md hover:bg-gray-300 transition-all ${
                  activeCategory === category.toLowerCase() ? 'text-green-400' : 'text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="relative z-10 w-full max-w-7xl p-5">
          <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            {images[activeCategory].map((src: string, index: number) => (
              <div
                key={index}
                className="relative w-full h-[300px] overflow-hidden rounded-md cursor-pointer"
                onClick={() => handleImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`${activeCategory} ${index + 1}`}
                  fill // Ensures the image fills the container
                  style={{ objectFit: 'cover' }} // Ensures the image maintains its aspect ratio and doesn't get cropped
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Full Image View */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative max-w-3xl w-full h-auto p-4">
                <Image
                  src={selectedImage}
                  alt="Selected Image"
                  width={1920}
                  height={1080}
                  style={{ objectFit: 'contain' }}
                  className="w-full h-auto"
                />
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white text-2xl font-bold"
                  onClick={handleClose}
                >
                  &#10005;
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Page;
