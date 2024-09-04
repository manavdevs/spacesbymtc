import React, { useState } from 'react';

type Offering = {
    id: number;
    title: string;
    description: string;
    image: string;
};

const offeringsData: Offering[] = [
    {
        id: 1,
        title: "Meet The Designer",
        description:
            "We begin by understanding your design requirements, which involves defining the scope of work and visiting your site. You'll have the opportunity to explore our experience center, giving you a look and feel of our design acumen. We then provide a quote, tailored to your budget.",
        image: "/images/designer.png",
    },
    {
        id: 2,
        title: "Design Finalization",
        description:
            "Once you've made your design selection, we provide a final set of 3D visuals and an updated quotation. We then conduct a detailed site validation and obtain your final approval on the design, ensuring everything is perfect before moving forward.",
        image: "/images/final.png",
    },
    {
        id: 3,
        title: "Place the Order",
        description:
            "After the final design is approved, we place your order with the factory. You'll receive a detailed project plan before execution begins, and we work diligently to deliver your dream home, just as you envisioned.",
        image: "/images/place.png",
    },
];

const Whyus = () => {
    const [activeOffering, setActiveOffering] = useState<Offering>(offeringsData[0]);
    const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | ''>('');

    const handleClick = (offering: Offering) => {
        const currentIndex = offeringsData.indexOf(activeOffering);
        const newIndex = offeringsData.indexOf(offering);

        if (newIndex > currentIndex) {
            setAnimationDirection('right');
        } else if (newIndex < currentIndex) {
            setAnimationDirection('left');
        }

        setTimeout(() => {
            setActiveOffering(offering);
            setAnimationDirection('');
        }, 300); // Delay to allow the animation to complete
    };

    return (
        <section
            id="portfolio"
            className="relative flex flex-col lg:flex-row items-center justify-center h-auto min-h-[800px] lg:py-16 py-6"
        >
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/images/livingroom.jpg')] bg-cover bg-center filter brightness-50"></div>

            {/* Offerings Content */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto z-10 w-full p-3 lg:space-x-10">
                {/* Text Section */}
                <div
                    className={`lg:w-1/2 w-full mb-4 lg:mb-0 relative transition-all duration-500 ${
                        animationDirection === 'right'
                            ? 'translate-x-12 opacity-0'
                            : ''
                    } ${
                        animationDirection === 'left'
                            ? '-translate-x-12 opacity-0'
                            : ''
                    } ${!animationDirection ? 'opacity-100' : ''}`}
                >
                    <div className="bg-[#98B82C] p-4 text-white shadow-lg h-auto max-h-[200px] lg:max-h-[300px] flex flex-col justify-center relative z-20">
                        <h2 className="text-xl lg:text-3xl font-bold mb-2 lg:mb-4">
                            Why Spaces By MTC
                        </h2>
                        <p className="text-sm lg:text-lg mb-2 overflow-hidden">
                            {activeOffering.description}
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div
                    className={`lg:w-1/2 w-full relative transition-all duration-500 ${
                        animationDirection === 'right'
                            ? 'translate-x-12 opacity-0'
                            : ''
                    } ${
                        animationDirection === 'left'
                            ? '-translate-x-12 opacity-0'
                            : ''
                    } ${!animationDirection ? 'opacity-100' : ''}`}
                >
                    <img
                        src={activeOffering.image}
                        alt={activeOffering.title}
                        className="w-[250px] h-auto lg:w-[450px] lg:h-[450px] object-cover rounded-md shadow-md opacity-80 mx-auto"
                    />
                </div>
            </div>

            {/* Clickable Numbers */}
            <div className="relative z-10 flex justify-center space-x-4 lg:space-x-10 text-center mt-4 lg:mt-0">
                {offeringsData.map((offering) => (
                    <div
                        key={offering.id}
                        onClick={() => handleClick(offering)}
                        className={`cursor-pointer transition duration-300 ease-in-out ${
                            activeOffering.id === offering.id
                                ? 'text-[#98B82C]'
                                : 'text-white'
                        }`}
                    >
                        <h3 className="text-2xl lg:text-4xl font-bold lg:mb-1 mb-1">
                            0{offering.id}
                        </h3>
                        <p className="text-xs lg:text-base uppercase">
                            {offering.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Whyus;
