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
        description: `We begin by understanding your requirements. This involves defining the scope of work, visiting the site and experience centers, providing a tentative quotation, and categorizing the customer based on the budget.`,
        image: "/images/architecture.jpg", // Replace with your image path
    },
    {
        id: 2,
        title: "Design Finalization",
        description: `We provide end-to-end interior solutions. You choose your design, we use ADL to build for the target layout, and finalize the design that suits your vision.`,
        image: "/images/interior-design.jpg", // Replace with your image path
    },
    {
        id: 3,
        title: "Place the Order",
        description: `You visit the experience centers, and we offer live mock-ups to ensure you trust our quality and process before placing the final order.`,
        image: "/images/3d-modeling.jpg", // Replace with your image path
    },
];

const Whyus = () => {
    const [activeOffering, setActiveOffering] = useState<Offering>(offeringsData[0]);

    const handleClick = (offering: Offering) => {
        setActiveOffering(offering);
    };

    return (
        <section id='portfolio' className="relative flex flex-col lg:flex-row items-center justify-center h-auto min-h-[800px]">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/images/livingroom.jpg')] bg-cover bg-center filter brightness-50"></div>
            
            {/* Offerings Content */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto z-10 w-full p-5 lg:space-x-10">
                {/* Text Section */}
                <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
                    <div className="bg-[#98B82C] p-8 text-white shadow-lg h-[300px] max-h-[300px] flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">Why SpacesByMTC</h2>
                        <p className="text-lg mb-4 overflow-hidden">{activeOffering.description}</p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2 w-full">
                    <img src={activeOffering.image} alt={activeOffering.title} className="w-full h-auto rounded-md shadow-md" />
                </div>
            </div>

            {/* Clickable Numbers */}
            <div className="relative z-10 flex justify-center space-x-5 lg:space-x-10 text-center mt-5 lg:mt-0">
                {offeringsData.map((offering) => (
                    <div
                        key={offering.id}
                        onClick={() => handleClick(offering)}
                        className={`cursor-pointer ${activeOffering.id === offering.id ? "text-[#98B82C]" : "text-gray-600"} transition duration-300 ease-in-out`}
                    >
                        <h3 className="text-3xl lg:text-4xl font-bold">{`0${offering.id}`}</h3>
                        <p className="mt-2 text-sm lg:text-base uppercase">{offering.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Whyus;
