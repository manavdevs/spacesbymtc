import React from 'react';

const OurFactory = () => {
  const factoryImages = [
    "/images/factory/1.png",
    "/images/factory/2.png",
    "/images/factory/3.png",
    "/images/factory/4.png",
    "/images/factory/6.png",
    "/images/factory/7.png",
  ];

  return (
    <>
      <section id="factory" className="relative h-auto flex flex-col items-center justify-center py-16">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/factorybg.jpeg')] bg-cover bg-center filter brightness-50"></div>

        {/* Foreground content */}
        <div className="relative z-10 w-full max-w-6xl p-5 text-center">
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl  mb-6 text-white">OUR FACTORY</h2>

          {/* Short Introductory Paragraph */}
          <p className="text-white text-lg lg:text-xl mb-8">
            Step inside our state-of-the-art factory where precision meets innovation to create the finest quality products.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {factoryImages.map((src, index) => (
              <div key={index} className="relative w-full h-[200px] md:h-[250px] overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={`Factory Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Factory Description */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center bg-white bg-opacity-80 rounded-lg shadow-lg p-6 space-y-4 md:space-y-0">
            <p className="text-gray-700 font-semibold">50,000 Sqft Factory in Hyderabad with the latest cutting-edge equipment.</p>
            <p className="text-gray-700 font-semibold">Rigorous raw material check to ensure high-quality procurement.</p>
            <p className="text-gray-700 font-semibold">Batch Production method: 92% material utilization to minimize waste.</p>
            <p className="text-gray-700 font-semibold">Capacity to furnish 3,000 homes annually and offer a 10-year warranty on all woodwork.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFactory;