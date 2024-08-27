"use client";
import React, { useEffect, useRef, useState } from 'react';

const Offerings: React.FC = () => {
    const offeringsRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(offeringsRef.current!); // Stop observing once it's in view
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the section is in view
        );

        if (offeringsRef.current) {
            observer.observe(offeringsRef.current);
        }

        return () => {
            if (offeringsRef.current) {
                observer.unobserve(offeringsRef.current);
            }
        };
    }, []);

    const handleFlip = (index: number) => {
        setFlippedIndex(index === flippedIndex ? null : index);
    };

    return (
        <section id='offerings' className="relative h-auto flex flex-col items-center justify-center py-16" ref={offeringsRef}>
            <div className="absolute inset-0 bg-[url('/images/offerings.jpg')] bg-cover bg-center filter brightness-50"></div>
            
            {/* Heading and Paragraph */}
            <div className="relative text-center p-10 z-10">
                <h1 className="text-3xl text-white p-10 md:text-6xl">
                    Check out our various Offerings
                </h1>
                <p className="text-md text-white md:text-xl mb-10">
                    We cover everything from Residential Houses, to Commercial Offices<br />
                    with customized Smart Home devices and Bespoke Furniture.
                </p>
            </div>

            {/* Cards with Flip Trigger */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-10">
                {[
                    { 
                        title: 'Residential Spaces', 
                        image: '/images/residential.jpg', 
                        description: 'We specialize in designing stylish and functional living spaces, from luxurious villas and modern flats to cozy independent houses.' 
                    },
                    { 
                        title: 'Commercial Spaces', 
                        image: '/images/commercial.jpg', 
                        description: 'Enhance your workplace with our expert commercial design solutions. From ergonomic office spaces to tailored furniture.' 
                    },
                    { 
                        title: 'Smart Home Solutions', 
                        image: '/images/smart-home.jpg', 
                        description: 'Transform your home with our cutting-edge smart technologies. We integrate innovative systems that make everyday living more convenient, efficient, and secure.' 
                    },
                    { 
                        title: 'Bespoke Furniture', 
                        image: '/images/bespoke-furniture.jpg', 
                        description: 'Our customized furniture solutions are tailored to fit your unique style and needs. We focus on high-quality craftsmanship to deliver pieces that elevate your space and bring your vision to life.' 
                    }
                ].map((card, index) => (
                    <div 
                        key={index} 
                        className={`relative w-full h-72 perspective p-4 transform transition-transform duration-1000 ease-in-out ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }} // Adding delay for staggered animation
                    > 
                        <div className={`relative w-full h-full transition-transform duration-1000 transform-style preserve-3d ${flippedIndex === index ? 'rotate-y-180' : ''}`}>
                            {/* Front of the card (Image and Title) */}
                            <div className={`absolute inset-0 z-10 flex flex-col items-center justify-between bg-white bg-opacity-50 backdrop-blur-md p-5 rounded-lg shadow-lg ${flippedIndex === index ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-500`}>
                                <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-lg mb-3" />
                                <h2 className="text-xl text-white">{card.title}</h2>
                                <button
                                    onClick={() => handleFlip(index)}
                                    className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg w-3/4" 
                                >
                                    See More
                                </button>
                            </div>
                            {/* Back of the card (Description and Button) */}
                            <div 
                                className={`absolute inset-0 z-20 bg-white bg-opacity-50 backdrop-blur-md p-5 rounded-lg shadow-lg transform rotate-y-180 flex flex-col items-center justify-center ${flippedIndex === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-500`}
                                onClick={() => handleFlip(index)} // Flip back on click anywhere on the back
                            >
                                <p className="text-white text-center mb-5">{card.description}</p>
                                <a href="/projects">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
                                    >
                                        See Projects
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Offerings;
