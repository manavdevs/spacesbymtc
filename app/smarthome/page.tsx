import React from 'react';

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
      {/* New section with title and description */}
      <div 
        className="container mx-auto p-20 bg-cover bg-center bg-no-repeat h-[500px] flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: `url('/images/smarthome/mainbg.jpg')`, // Replace with your actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
        }}
      >
        {/* This div creates a dark overlay without affecting the text */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 p-6 rounded-md text-center">
          <h1 className="text-4xl lg:text-7xl text-white font-bold mb-4">Smart Homes</h1>
          <p className="text-lg lg:text-2xl text-gray-200">
            Elevate your living experience with the future of home automation. Manage every aspect of your home with just a touch — from lighting to entertainment, security, and more. Experience luxury, convenience, and control like never before.
          </p>
        </div>
      </div>

      {/* Map over the sections to dynamically create containers */}
      <div className="relative z-10">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="container mx-auto p-6 bg-cover bg-center bg-no-repeat shadow-lg relative"
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
    </>
  );
};

export default Page;
