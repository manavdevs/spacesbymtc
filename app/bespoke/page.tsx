"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Importing Next.js Image component

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
    // "/images/Sofas/16.JPG",
    // "/images/Sofas/17.JPG",
    // "/images/Sofas/18.JPG",
    // "/images/Sofas/19.JPG",
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
    // "/images/Chairs/12.JPG",
    // "/images/Chairs/13.JPG",
    // "/images/Chairs/14.JPG",
    // "/images/Chairs/15.JPG",
    // "/images/Chairs/16.JPG",
    "/images/Chairs/17.jpg",
    "/images/Chairs/18.jpg",
    "/images/Chairs/19.jpg",
    "/images/Chairs/20.jpg",
    "/images/Chairs/21.jpg",
  ],
  tables: [
    "/images/Tables/1.jpg",
    // "/images/Tables/2.JPG",
    // "/images/Tables/3.JPG",
    // "/images/Tables/4.JPG",
    // "/images/Tables/5.JPG",
    // "/images/Tables/6.JPG",
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
  const [activeCategory, setActiveCategory] = useState<keyof ImagePaths>('sofas'); // Use the keys of ImagePaths for activeCategory
  const [fadeIn, setFadeIn] = useState(true);

  const handleCategoryClick = (category: keyof ImagePaths) => {
    setFadeIn(false);
    setTimeout(() => {
      setActiveCategory(category);
      setFadeIn(true);
    }, 300); // Duration of the fade-out before changing category
  };

  return (
    <>
      <section id="portfolio" className="relative flex flex-col items-center justify-center h-auto min-h-[800px] lg:py-16 py-6">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/furniturebg.jpeg')] bg-cover bg-center filter brightness-50"></div>

        {/* Category Buttons */}
        <div className="relative z-10 w-full max-w-7xl text-center mb-6">
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category.toLowerCase() as keyof ImagePaths)}
                className={`py-2 px-6 bg-white text-black rounded-md hover:bg-gray-300 transition-all ${
                  activeCategory === category.toLowerCase() ? 'bg-green-400 text-white' : ''
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
              <div key={index} className="relative w-full h-[300px] overflow-hidden rounded-md">
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
      </section>
    </>
  );
};

export default Page;
