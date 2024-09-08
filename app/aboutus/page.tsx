
import React from 'react'
import  ExpandableCardDemo  from '../components/ExpandableCardDemo'

const Page = () => {
  return (
    <>
      <div className="relative min-h-[800px] pt-16">
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
  )
}

export default Page
