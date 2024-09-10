import React from 'react';
import ExpandableCardDemo from '../components/ExpandableCardDemo';
import Navbar from '../components/Navbar';

const Page = () => {
  return (
    <>
      <Navbar />

      {/* Our Story Section */}
      <div className="relative min-h-[500px] pt-24 pb-16 bg-gray-500 px-4 md:px-16">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">Our Story</h1>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <p className="text-white text-lg lg:text-xl leading-loose text-justify">
            At Spaces by MTC, we create interiors that truly connect with the people who 
            live and work in them. What started as a passion for design has grown into a
             leading brand known for transforming spaces into places of beauty and function.
              Our leadership team, led by co-founder Lalit Chilukuri,
               brings over 15 years of experience, guided by the vision of Chairman Syed Abdul Wahab 
               and Director Balasubramanyam Muthu. Every project is a collaboration, where we listen,
                understand, and design spaces that reflect your needs and enhance your daily life.
          </p>
        </div>
      </div>


      <div className="relative min-h-[800px] pt-[90px]">
        {/* Background Image with Brightness */}
        <div className="absolute inset-0 bg-[url('/images/aboutusimg.jpg')] bg-cover bg-center filter brightness-50 z-10"></div>

        {/* Foreground Content */}
        <div className="relative z-20 w-full h-full text-center px-4">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-white text-3xl lg:text-5xl font-bold mb-4">Meet the Founders</h1>
            <p className="text-white text-lg lg:text-xl">
              Discover the incredible stories and passion behind the visionaries
            </p>
            <p className="text-white text-lg lg:text-xl">
              who brought these masterpieces to life.
            </p>
          </div>

          {/* Expandable Card Demo */}
          <ExpandableCardDemo />
        </div>
      </div>

      
    </>
  );
};

export default Page;
