import React, { useEffect, useRef, useState } from 'react';

const Offerings: React.FC = () => {
    const offeringsRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <section id='offerings' className="relative h-auto flex flex-col items-center justify-center py-16" ref={offeringsRef}>
            <div className="absolute inset-0 bg-[url('/images/offerings.jpg')] bg-cover bg-center filter brightness-50"></div>
            
            {/* Heading and Paragraph */}
            <div className="relative text-center p-10 z-2">
                <h1
                    className={`text-3xl text-white p-10 md:text-6xl transition-opacity duration-1500 ease-in-out transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    Check out our various Offerings
                </h1>
                <p
                    className={`text-md text-white md:text-xl mb-10 transition-opacity duration-1500 ease-in-out transform delay-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    We cover everything from Residential Houses, to Commercial Offices<br />
                    with customized Smart Home devices and Bespoke Furniture.
                </p>
            </div>

            {/* Cards with Fade-in from the Right */}
            <div className="relative z-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-10">
                {[
                    { title: 'Residential', image: '/images/residential.jpg', description: 'Flats, Villas, and Independent Houses' },
                    { title: 'Commercial', image: '/images/commercial.jpg', description: 'Office Spaces, Furnitures' },
                    { title: 'Smart Home Solution', image: '/images/smart-home.jpg', description: 'Innovative smart home technologies' },
                    { title: 'BeSpoke Furnitures', image: '/images/bespoke-furniture.jpg', description: 'Customized furniture solutions' }
                ].map((card, index) => (
                    <div
                        key={index}
                        className={`offerings-card flex flex-col items-center bg-white bg-opacity-30 backdrop-blur-md p-5 rounded-lg shadow-lg transition ease-in-out duration-1000 transform ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`}
                        style={{ transitionDelay: `${index * 400}ms` }} // Adds a 400ms delay for each card
                    >
                        <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-lg mb-5" />
                        <h2 className="text-xl text-white mb-2">{card.title}</h2>
                        <p className="text-white text-center">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Offerings;
