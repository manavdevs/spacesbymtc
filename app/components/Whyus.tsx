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
        image: "/images/designer.png", // Replace with your image path
    },
    {
        id: 2,
        title: "Design Finalization",
        description: `We provide end-to-end interior solutions. You choose your design, we use ADL to build for the target layout, and finalize the design that suits your vision.`,
        image: "/images/final.png", // Replace with your image path
    },
    {
        id: 3,
        title: "Place the Order",
        description: `You visit the experience centers, and we offer live mock-ups to ensure you trust our quality and process before placing the final order.`,
        image: "/images/place.png", // Replace with your image path
    },
];

const Whyus = () => {
    const [activeOffering, setActiveOffering] = useState<Offering>(offeringsData[0]);
    const [animate, setAnimate] = useState(false);

    const handleClick = (offering: Offering) => {
        setAnimate(false); // Reset animation
        setTimeout(() => {
            setActiveOffering(offering);
            setAnimate(true); // Reapply animation
        }, 50); // Small delay to trigger reflow and reapply the animation
    };

    return (
        <section id='portfolio' className="relative flex flex-col lg:flex-row items-center justify-center h-auto min-h-[800px] py-16">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/images/livingroom.jpg')] bg-cover bg-center filter brightness-50"></div>
            
            {/* Offerings Content */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto z-10 w-full p-5 lg:space-x-10">
                {/* Text Section */}
                <div className="lg:w-1/2 w-full mb-8 lg:mb-0 relative">
                    <div className={`bg-[#98B82C] p-8 text-white shadow-lg h-[300px] max-h-[300px] flex flex-col justify-center relative z-20 ${animate ? 'animate-fadeIn' : ''}`}>
                        <h2 className="text-3xl font-bold mb-4">Why SpacesByMTC</h2>
                        <p className="text-lg mb-4 overflow-hidden">{activeOffering.description}</p>
                    </div>
                    
                    {/* Image for Large Screens */}
                    <div className={`hidden lg:block absolute w-[450px] h-[450px] right-[-375px] top-[-100px] z-10 ${animate ? 'animate-fadeIn' : ''}`}>
                        <img src={activeOffering.image} alt={activeOffering.title} className="w-full h-full object-cover rounded-md shadow-md opacity-80" />
                    </div>
                </div>

                {/* Image Section for Small Screens */}
                <div className={`lg:hidden w-full ${animate ? 'animate-fadeIn' : ''}`}>
                    <img src={activeOffering.image} alt={activeOffering.title} className="w-full h-auto rounded-md shadow-md" />
                </div>
            </div>

            {/* Clickable Numbers */}
            <div className="relative z-10 flex justify-center space-x-5 lg:space-x-10 text-center mt-5 lg:mt-0">
                {offeringsData.map((offering) => (
                    <div
                        key={offering.id}
                        onClick={() => handleClick(offering)}
                        className={`cursor-pointer transition duration-300 ease-in-out ${activeOffering.id === offering.id ? "text-[#98B82C]" : "text-white"}`}
                    >
                        <h3 className="text-3xl lg:text-4xl font-bold lg:mb-2 mb-1">{`0${offering.id}`}</h3>
                        <p className="mt-2 text-sm lg:text-base uppercase">{offering.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Whyus;