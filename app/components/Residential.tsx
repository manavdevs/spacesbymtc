'use client'
import React, { useState } from 'react';

// Data structure containing image sets for each tile based on the selected category.
const portfolioData = {
    flat: {
        tiles: [
            { title: "Bathroom", thumb:"images/mainbathroom.png",images: ["/images/bathroom1.jpg", "/images/bathroom2.jpg", "/images/bathroom3.jpg", "/images/bathroom4.jpg"] },
            { title: "Bedroom",thumb:"images/mainbedroom.png",images: ["/images/bedroom1.jpg", "/images/bedroom2.jpg", "/images/bedroom3.jpg", "/images/bedroom4.jpg"] },
            { title: "Dining",thumb:"images/maindining.png", images: ["/images/dining1.jpg", "/images/dining2.jpg", "/images/hall1.jpg", "/images/hall2.jpg"] },
            { title: "Kitchen",thumb:"images/mainkitchen.png", images: ["/images/kitchen1.jpg", "/images/kitchen2.jpg", "/images/kitchen3.jpg", "/images/kitchen4.jpg"] },
        ],
    },
    villa: {
      tiles: [
        { title: "Bathroom", thumb:"/images/comingsoon.png",images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
        { title: "Bedroom",thumb:"/images/comingsoon.png",images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
        { title: "Dining",thumb:"/images/comingsoon.png", images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
        { title: "Kitchen",thumb:"/images/comingsoon.png", images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
      ],
    },
    studio: {
      tiles: [
        { title: "Bathroom", thumb:"/images/comingsoon.png",images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
        { title: "Bedroom",thumb:"/images/comingsoon.png",images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
        { title: "Dining",thumb:"/images/comingsoon.png", images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
        { title: "Kitchen",thumb:"/images/comingsoon.png", images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
      ],
    },
};

type CategoryKey = keyof typeof portfolioData;

const Portfolio: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('flat');
    const [flashKey, setFlashKey] = useState(0);
    const [expandedImages, setExpandedImages] = useState<string[] | null>(null);

    // Handles category change when the left menu items are clicked
    const handleCategoryChange = (category: CategoryKey) => {
        setSelectedCategory(category);
        setFlashKey((prevKey) => prevKey + 1); // Increment key to re-trigger animation
        setExpandedImages(null); // Close any expanded images view
    };

    // Handles when a tile is clicked to show the set of images related to the selected tile
    const handleTileClick = (images: string[]) => {
        setExpandedImages(images);
    };

    // Closes the expanded view when the backdrop is clicked
    const closeExpandedView = () => {
        setExpandedImages(null);
    };

    return (
      
        <section
            id="port"
            className="relative flex flex-col lg:flex-row items-center justify-center h-auto min-h-[800px] py-16"
        >
            <div className="absolute inset-0 bg-[url('/images/livingroom.jpg')] bg-cover bg-center filter brightness-50"></div>

            {/* Heading */}
            <div className="relative z-10 mb-10 text-center">
                <h1 className="text-3xl text-white p-10 md:text-6xl">Residential Spaces</h1>
            </div>

            {/* Content Wrapper */}
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl mx-auto z-10 w-full p-5 lg:space-x-10">
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
                <div key={flashKey} className="lg:w-3/4 w-full grid grid-cols-2 gap-4">
                    {portfolioData[selectedCategory].tiles.map((tile, index) => (
                        <div
                            key={index}
                            className="relative w-full h-48 lg:h-64 bg-gray-200 rounded-md overflow-hidden shadow-md cursor-pointer group"
                            onClick={() => handleTileClick(tile.images)}
                        >
                            <img
                                src={tile.thumb} // Display the first image as a thumbnail for the tile
                                alt={`${tile.title} Thumbnail`}
                                className="w-full h-full object-cover brightness-50 transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Black Filter and Overlay Text with Hover Effect */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl lg:text-4xl text-white font-bold uppercase  transition-colors duration-300 group-hover:text-[#98B82C]">
                                    {tile.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Expanded View */}
            {expandedImages && (
                <div
                    className="fixed inset-0 z-20 bg-black bg-opacity-80 flex items-center justify-center"
                    onClick={closeExpandedView}
                >
                    <div className="relative grid grid-cols-4 gap-4 p-4">
                        {expandedImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Expanded Image ${index}`}
                                className="w-full h-auto rounded-md shadow-lg"
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
