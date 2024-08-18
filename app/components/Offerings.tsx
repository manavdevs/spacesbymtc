"use client";
import React from 'react';

const Offerings: React.FC = () => {
    return (
        <section id='offerings' className="relative h-auto flex flex-col items-center justify-center py-16">
            <div className="absolute inset-0 bg-[url('/images/offerings.jpg')] bg-cover bg-center filter brightness-50"></div>
            <div className="relative text-center p-10 z-2">
                <h1 className="text-3xl text-white p-10 md:text-6xl">Check out our various Offerings</h1>     
                <p className="text-md text-white md:text-xl mb-10">
                   We cover everything from Residential Houses, to Commercial Offices<br /> with customized Smart Home devices and Bespoke Furniture.
                </p>     
            </div>

            <div className="relative z-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-10">
                <div className="offerings-card flex flex-col items-center bg-white bg-opacity-30 backdrop-blur-md p-5 rounded-lg shadow-lg transition ease-in-out duration-300 hover:scale-105">
                    <img src="/images/residential.jpg" alt="Residential" className="w-full h-40 object-cover rounded-lg mb-5" />
                    <h2 className="text-xl text-white mb-2">Residential</h2>
                    <p className="text-white text-center">Flats, Villas, and Independent Houses</p>
                </div>
                <div className="offerings-card flex flex-col items-center bg-white bg-opacity-30 backdrop-blur-md p-5 rounded-lg shadow-lg transition ease-in-out duration-300 hover:scale-105">
                    <img src="/images/commercial.jpg" alt="Commercial" className="w-full h-40 object-cover rounded-lg mb-5" />
                    <h2 className="text-xl text-white mb-2">Commercial</h2>
                    <p className="text-white text-center">Office Spaces, Furnitures</p>
                </div>
                <div className="offerings-card flex flex-col items-center bg-white bg-opacity-30 backdrop-blur-md p-5 rounded-lg shadow-lg transition ease-in-out duration-300 hover:scale-105">
                    <img src="/images/smart-home.jpg" alt="Smart Home Solution" className="w-full h-40 object-cover rounded-lg mb-5" />
                    <h2 className="text-xl text-white mb-2">Smart Home Solution</h2>
                    <p className="text-white text-center">Innovative smart home technologies</p>
                </div>
                <div className="offerings-card flex flex-col items-center bg-white bg-opacity-30 backdrop-blur-md p-5 rounded-lg shadow-lg transition ease-in-out duration-300 hover:scale-105">
                    <img src="/images/bespoke-furniture.jpg" alt="BeSpoke Furnitures" className="w-full h-40 object-cover rounded-lg mb-5" />
                    <h2 className="text-xl text-white mb-2">BeSpoke Furnitures</h2>
                    <p className="text-white text-center">Customized furniture solutions</p>
                </div>
            </div>
        </section>
    );
};

export default Offerings;
