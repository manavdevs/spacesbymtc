import React, { useState } from 'react';

interface PortfolioData {
    hallDining: string[];
    kitchen: string[];
    bedroom: string[];
    bathroom: string[];
}

const portfolioData: PortfolioData = {
    hallDining: [
        "/images/hall1.jpg",
        "/images/hall2.jpg",
        "/images/dining2.jpg",
        "/images/dining1.jpg"
        
        
    ],
    kitchen: [
        "/images/kitchen1.jpg",
        "/images/kitchen2.jpg",
        "/images/kitchen3.jpg",
        "/images/kitchen4.jpg"
    ],
    bedroom: [
        "/images/bedroom1.jpg",
        "/images/bedroom2.jpg",
        "/images/bedroom3.jpg",
        "/images/bedroom4.jpg"
    ],
    bathroom: [
        "/images/bathroom1.jpg",
        "/images/bathroom2.jpg",
        "/images/bathroom3.jpg",
        "/images/bathroom4.jpg"
    ]
};

type CategoryKey = keyof PortfolioData;

const Portfolio: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('hallDining');
    const [flashKey, setFlashKey] = useState(0);

    const handleCategoryChange = (category: CategoryKey) => {
        setSelectedCategory(category);
        setFlashKey(prevKey => prevKey + 1);  // Increment key to re-trigger animation
    };

    return (
        <section id="port" className="relative flex flex-col lg:flex-row items-center justify-center h-auto min-h-[800px] py-16">
            <div className="absolute inset-0 bg-[url('/images/livingroom.jpg')] bg-cover bg-center filter brightness-50"></div>
            
            {/* Heading */}
            <div className="relative z-10 mb-10 text-center">
                <h1 className="text-3xl text-white p-10 md:text-6xl">Portfolio of 3D Renders</h1>
            </div>

            {/* Content Wrapper */}
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl mx-auto z-10 w-full p-5 lg:space-x-10">
                {/* Left Side List */}
                <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
                    <ul className="space-y-4 text-lg font-semibold">
                        <li 
                            className={`cursor-pointer transition-colors duration-300 ${selectedCategory === 'hallDining' ? 'text-[#98B82C]' : 'text-white'}`} 
                            onClick={() => handleCategoryChange('hallDining')}
                        >
                            Hall & Dining
                        </li>
                        <li 
                            className={`cursor-pointer transition-colors duration-300 ${selectedCategory === 'kitchen' ? 'text-[#98B82C]' : 'text-white'}`} 
                            onClick={() => handleCategoryChange('kitchen')}
                        >
                            Kitchen
                        </li>
                        <li 
                            className={`cursor-pointer transition-colors duration-300 ${selectedCategory === 'bedroom' ? 'text-[#98B82C]' : 'text-white'}`} 
                            onClick={() => handleCategoryChange('bedroom')}
                        >
                            Bedroom
                        </li>
                        <li 
                            className={`cursor-pointer transition-colors duration-300 ${selectedCategory === 'bathroom' ? 'text-[#98B82C]' : 'text-white'}`} 
                            onClick={() => handleCategoryChange('bathroom')}
                        >
                            Bathroom
                        </li>
                    </ul>
                </div>

                {/* Right Side Image Grid */}
                <div key={flashKey} className="lg:w-3/4 w-full grid grid-cols-2 gap-4">
                    {portfolioData[selectedCategory].map((image, index) => (
                        <div 
                            key={index} 
                            className="w-full h-48 lg:h-64 bg-gray-200 rounded-md overflow-hidden shadow-md"
                        >
                            <img 
                                src={image} 
                                alt={`Portfolio ${selectedCategory} ${index}`} 
                                className="w-full h-full object-cover animate-flash" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
