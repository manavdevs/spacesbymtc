import React from 'react';

const Rti = () => {
  const gridItems = [
    { id: 1, title: 'Remote Controls', image: 'images/rti/remote.webp' },
    { id: 2, title: 'Wired Interfaces', image: 'images/rti/wired.webp' },
    { id: 3, title: 'AV Signal Distribution', image: 'images/rti/av.webp' },
    { id: 4, title: 'RTI Panel App', image: 'images/rti/rti.webp' },
  ];

  return (
    <div className="relative">
      {/* Top Section with Background Image */}
      <div 
        className="relative flex flex-col items-center justify-center h-[600px] lg:h-[500px] bg-cover bg-center bg-no-repeat text-center px-4 lg:px-20"
        style={{
          backgroundImage: `url('/images/rti/bg1.webp')`, // Replace with the path to your image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-10 text-white max-w-3xl">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">Simplify Your World with RTI</h2>
          <p className="text-base lg:text-lg leading-relaxed mb-6">
          Remote Technologies Incorporated (RTI) is a pioneer in control systems, offering innovative and intuitive devices for smart homes and businesses. With RTI, enjoy seamless control over your environment—from award-winning universal controllers to advanced audio distribution systems. Access and monitor your electronics from anywhere using the RTiPanel app, available on iPhone®, iPad®, and Android™ devices. RTI’s powerful Integration Designer® software ensures a customizable and user-friendly experience, bringing your smart home dreams to life.
          </p>
          {/* Visit RTI Button */}
          <a 
            href="https://www.rticontrol.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#98B82C] text-white font-semibold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:bg-[#7aa21b]"
          >
            Visit RTI
          </a>
        </div>
      </div>

      {/* Section before the grid */}
      <div 
        className="relative flex justify-center items-center h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/rti/bg2.webp')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Text */}
        <div className="relative z-10 text-center text-white">
          <h2 className="text-3xl lg:text-5xl mb-4">RTI</h2>
          <p className="text-lg lg:text-2xl">A pioneer in control and automation industry</p>
        </div>
      </div>

      {/* Grid Section */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 mx-auto bg-blue-200 w-full"
        style={{
          backgroundImage: `url()`, // Replace with the path to your grid background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="relative flex items-center justify-center bg-cover bg-center h-64 rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Overlay for grid items */}
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            <h2 className="relative z-10 text-white text-xl font-bold text-center p-4">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rti;
