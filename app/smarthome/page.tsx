"use client"
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

// Define a list of constants for title, description, and image
const sections = [
  {
    title: "Automation",
    description: "One home, One family, One touch. Take total control of everything in your house from one single app.",
    image: "/images/smarthome/automation.jpg"
  },
  {
    title: "Private Cinema",
    description: "A bespoke room built specially for you, dedicated to the ultimate movie experience.",
    image: "/images/smarthome/private.jpg"
  },
  {
    title: "Lifestyle AV",
    description: "Your home deserves the best. Fill your room with great sound; capable of a thundering movie experience or high quality music.",
    image: "/images/smarthome/av.jpg"
  },
  {
    title: "Smart Space-Commercial",
    description: "Hotels, offices, boardrooms, conference rooms, restaurants, retail spaces, businesses - you name it. We have a solution that will fit your requirements, usage, and budget.",
    image: "/images/smarthome/smart.jpg"
  }
];

const Page = () => {
  return (
    <>
    <Navbar/>
      {/* New section with title and description */}
      <div 
        className="mx-auto p-20 bg-cover bg-center bg-no-repeat h-[500px] flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: `url('/images/smarthome/mainbg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
        }}
      >
        {/* This div creates a dark overlay without affecting the text */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 p-6 rounded-md text-center">
          <h1 className="text-4xl lg:text-7xl text-white font-bold mb-4">Smart Homes</h1>
          <p className="text-sm md:text-md lg:text-2xl text-gray-200">
            Elevate your living experience with the future of home automation.
             Manage every aspect of your home with just a touch — from lighting to entertainment,
              security, and more. Experience luxury, convenience, and control like never before.
          </p>
        </div>
      </div>

      {/* Map over the sections to dynamically create containers */}
      <div className="relative z-10">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="mx-auto p-6 bg-cover bg-center bg-no-repeat shadow-lg relative"
            style={{
              backgroundImage: `url(${section.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
            }}
          >
            {/* This div creates a dark overlay without affecting the text */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 p-6 h-full flex flex-col justify-center">
              <h2 className="text-2xl lg:text-6xl mb-2 text-white">{section.title}</h2>
              <p className="text-lg lg:text-2xl text-gray-200">{section.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* New section similar to the provided design with clickable button */}
      <div 
        className="relative flex justify-center items-center h-[500px] bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url('/images/smarthome/rti_background.webp')`, // Replace with your actual image path
        }}
      >
        {/* This div creates a dark overlay without affecting the text */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center p-6 text-white flex flex-col items-center">
          <h2 className="text-4xl lg:text-6xl mb-4">RTI</h2>
          <p className="text-lg lg:text-2xl mb-6">Whole House Controls and Integration Solution</p>
          
          {/* Clickable Button */}
          <Link href="/rti">
            <button 
              className="bg-transparent border-2 border-white rounded-full w-16 h-16 flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-300 mt-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
