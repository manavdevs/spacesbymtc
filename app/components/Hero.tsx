import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        // Trigger the text fade-in after the component mounts
        setShowText(true);
    }, []);

    return (
        <section id='home' className="relative h-[800px] flex items-center justify-center -mt-[80px]">
            <div className="absolute inset-0 bg-[url('/images/hugeKitchen.jpg')] bg-cover bg-center filter brightness-50"></div>
            
            <div className="relative text-center p-10 z-2">
                <h1 
                    className={`text-3xl text-white p-10 md:text-6xl transition-opacity duration-1000 ease-in-out transform ${
                        showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    Today's Design Tomorrow's Reality
                </h1>     
                
                <p 
                    className={`text-md text-white md:text-xl transition-opacity duration-1000 ease-in-out transform delay-300 ${
                        showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    One-stop shop for interiors, furniture, and technology.<br />
                    Be it a residential space or a commercial space, we have your back from start to finish.
                </p>     
            </div>
        </section>
    );
};

export default Hero;