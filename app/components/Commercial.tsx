import React, { useState } from 'react';
import Navbar from './Navbar';

// Data structure containing image sets for each tile based on the selected category.
const portfolioData = {
    BTCity: {
        tiles: [
            { thumb:"/images/comingsoon.png", images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
            { thumb:"/images/comingsoon.png",images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
            { thumb:"/images/comingsoon.png",images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
            { thumb:"/images/comingsoon.png", images: ["/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png", "/images/comingsoon.png"] },
        ],
    },
    
};

type CategoryKey = keyof typeof portfolioData;

const Commercial: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('BTCity');
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
        <>
        <Navbar/>
        <section
            id="port"
            className="relative flex flex-col lg:flex-row items-center justify-center h-auto min-h-[800px] py-16"
        >
            <div className="absolute inset-0 bg-[url('/images/livingroom.jpg')] bg-cover bg-center filter brightness-50"></div>

            {/* Heading */}
            <div className="relative z-10 mb-10 text-center">
                <h1 className="text-3xl text-white p-10 md:text-6xl">Commercial Spaces</h1>
            </div>

            {/* Content Wrapper */}
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl mx-auto z-10 w-full p-5 lg:space-x-10">
                {/* Left Side List */}
                <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
                    <ul className="space-y-4 text-lg font-semibold">
                        <li
                            className={`cursor-pointer transition-colors duration-300 ${
                                selectedCategory === 'BTCity' ? 'text-[#98B82C]' : 'text-white'
                            }`}
                            onClick={() => handleCategoryChange('BTCity')}
                        >
                            BT City
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
                                className="w-full h-full object-contain  lg:object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Black Filter and Overlay Text with Hover Effect */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
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
        </>
    );
};

export default Commercial;
