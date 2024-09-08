"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Importing Next.js Image component

const images = {
  sofas: [
    "/images/sofas/1.jpg",
    "/images/sofas/2.jpg",
    "/images/sofas/3.jpg",
    "/images/sofas/4.jpg",
    "/images/sofas/5.jpg",
    "/images/sofas/6.jpg",
    "/images/sofas/7.jpg",
    "/images/sofas/8.jpg",
    "/images/sofas/9.jpg",
    "/images/sofas/10.jpg",
    "/images/sofas/11.jpg",
    "/images/sofas/12.jpg",
    "/images/sofas/13.jpg",
    "/images/sofas/14.jpg",
    "/images/sofas/15.jpg",
    "/images/sofas/16.jpg",
    "/images/sofas/17.jpg",
    "/images/sofas/18.jpg",
    "/images/sofas/19.jpg",
    "/images/sofas/20.jpg",
    "/images/sofas/21.jpg",
  ],
  chairs: [
    "/images/chairs/1.jpg",
    "/images/chairs/2.jpg",
    "/images/chairs/3.jpg",
    "/images/chairs/4.jpg",
    "/images/chairs/5.jpg",
    "/images/chairs/6.jpg",
    "/images/chairs/7.jpg",
    "/images/chairs/8.jpg",
    "/images/chairs/9.jpg",
    "/images/chairs/10.jpg",
    "/images/chairs/11.jpg",
    "/images/chairs/12.jpg",
    "/images/chairs/13.jpg",
    "/images/chairs/14.jpg",
    "/images/chairs/15.jpg",
    "/images/chairs/16.jpg",
    "/images/chairs/17.jpg",
    "/images/chairs/18.jpg",
    "/images/chairs/19.jpg",
    "/images/chairs/20.jpg",
    "/images/chairs/21.jpg",
  ],
  tables: [
    "/images/tables/1.jpg",
    "/images/tables/2.jpg",
    "/images/tables/3.jpg",
    "/images/tables/4.jpg",
    "/images/tables/5.jpg",
    "/images/tables/6.jpg",
    "/images/tables/7.jpg",
    "/images/tables/8.jpg",
    "/images/tables/9.jpg",
    "/images/tables/10.jpg",
    "/images/tables/11.jpg",
    "/images/tables/12.jpg",
  ],
};

const categories = ['Sofas', 'Chairs', 'Tables'];

const Page = () => {
  const [activeCategory, setActiveCategory] = useState('sofas');
  const [fadeIn, setFadeIn] = useState(true);

  const handleCategoryClick = (category: string) => {
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
                onClick={() => handleCategoryClick(category.toLowerCase())}
                className={`py-2 px-6 bg-white text-black rounded-md hover:bg-gray-300 transition-all ${
                  activeCategory === category.toLowerCase() ? 'bg-[#98b82c] text-white' : ''
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
            {images[activeCategory].map((src, index) => (
              <div key={index} className="relative w-full h-[300px] overflow-hidden rounded-md">
                <Image
                  src={src}
                  alt={`${activeCategory} ${index + 1}`}
                  fill // Ensures the image fills the container
                  style={{ objectFit: 'cover' }} // Use `objectFit` in the style prop
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
