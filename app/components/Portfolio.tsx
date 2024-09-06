import React, { useState } from 'react';

interface PortfolioData {
    flat: string[];
    villa: string[];
    studio: string[];
}

const portfolioData: PortfolioData = {
    flat: [
        "/images/hall1.jpg",
        "/images/hall2.jpg",
        "/images/dining2.jpg",
        "/images/dining1.jpg",
    ],
    villa: [
        "/images/kitchen1.jpg",
        "/images/kitchen2.jpg",
        "/images/kitchen3.jpg",
        "/images/kitchen4.jpg",
    ],
    studio: [
        "/images/bedroom1.jpg",
        "/images/bedroom2.jpg",
        "/images/bedroom3.jpg",
        "/images/bedroom4.jpg",
    ],
};

const expandedData: PortfolioData = {
    flat: [
        "/images/newFlat1.jpg",
        "/images/newFlat2.jpg",
        "/images/newFlat3.jpg",
        "/images/newFlat4.jpg",
    ],
    villa: [
        "/images/newVilla1.jpg",
        "/images/newVilla2.jpg",
        "/images/newVilla3.jpg",
        "/images/newVilla4.jpg",
    ],
    studio: [
        "/images/newStudio1.jpg",
        "/images/newStudio2.jpg",
        "/images/newStudio3.jpg",
        "/images/newStudio4.jpg",
    ],
};

type CategoryKey = keyof PortfolioData;

const Portfolio: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('flat');
    const [flashKey, setFlashKey] = useState(0);
    const [expandedView, setExpandedView] = useState<CategoryKey | null>(null);

    const handleCategoryChange = (category: CategoryKey) => {
        setSelectedCategory(category);
        setFlashKey((prevKey) => prevKey + 1); // Increment key to re-trigger animation
    };

    const handlePhotoClick = (category: CategoryKey) => {
        setExpandedView(category);
    };

    const closeExpandedView = () => {
        setExpandedView(null);
    };

    return (
        <section id="port" className="relative flex flex-col lg:flex-row items-center justify-center h-auto min-h-[800px] py-16">
            <div className="absolute inset-0 bg-[url('/images/livingroom.jpg')] bg-cover bg-center filter brightness-50"></div>

            {/* Heading */}
            <div className="relative z-10 mb-10 text-center">
                <h1 className="text-3xl text-white p-10 md:text-6xl">Our Portfolio</h1>
            </div>

            {/* Content Wrapper */}
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl mx-auto z-10 w-full p-5 lg:space-x-10">
                {/* Left Side List */}
                <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
                    <ul className="space-y-4 text-lg font-semibold">
                        <li
                            className={`cursor-pointer transition-colors duration-300 ${selectedCategory === 'flat' ? 'text-[#98B82C]' : 'text-white'}`}
                            onClick={() => handleCategoryChange('flat')}
                        >
                            D22 Flat
                        </li>
                        <li
                            className={`cursor-pointer transition-colors duration-300 ${selectedCategory === 'villa' ? 'text-[#98B82C]' : 'text-white'}`}
                            onClick={() => handleCategoryChange('villa')}
                        >
                            Bachupalli Villa
                        </li>
                        <li
                            className={`cursor-pointer transition-colors duration-300 ${selectedCategory === 'studio' ? 'text-[#98B82C]' : 'text-white'}`}
                            onClick={() => handleCategoryChange('studio')}
                        >
                            Studio Apartment
                        </li>
                    </ul>
                </div>

                {/* Right Side Image Grid */}
                <div key={flashKey} className="lg:w-3/4 w-full grid grid-cols-2 gap-4">
                    {portfolioData[selectedCategory].map((image, index) => (
                        <div
                            key={index}
                            className="relative w-full h-48 lg:h-64 bg-gray-200 rounded-md overflow-hidden shadow-md cursor-pointer group"
                            onClick={() => handlePhotoClick(selectedCategory)}
                        >
                            <img
                                src={image}
                                alt={`Portfolio ${selectedCategory} ${index}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Hover Text Reveal similar to "What We Do" */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-bold uppercase tracking-wider">Explore More</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Expanded View */}
            {expandedView && (
                <div
                    className="fixed inset-0 z-20 bg-black bg-opacity-80 flex items-center justify-center"
                    onClick={closeExpandedView}
                >
                    <div className="relative grid grid-cols-4 gap-4 p-4">
                        {expandedData[expandedView].map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Expanded ${expandedView} ${index}`}
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
