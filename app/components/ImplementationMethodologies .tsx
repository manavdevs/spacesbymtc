import React, { useState, useEffect } from 'react';

interface CategorySteps {
  [key: number]: string[];
}

const ImplementationMethodologies: React.FC = () => {
  // State to track the currently selected category
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  // State to manage the current visible point for each category
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Mapping categories to their respective images
  const categoryImages: { [key: number]: string } = {
    1: '/images/design.jpg',
    2: '/images/final.jpg',
    3: '/images/order.jpg',
  };

  // Bullet points for each category
  const categorySteps: CategorySteps = {
    1: [
      "Step 1: Understand requirements",
      "Step 2: Define scope of work",
      "Step 3: Site & Experience Centre visits",
      "Step 4: Tentative quotation",
      "Step 5: Customer bucketing basis budget",
    ],
    2: [
      "Step 1: End-to-end Interior Solutions",
      "Step 2: Choose your Design",
      "Step 3: Pre Define Design Library",
      "Step 4: Finalize Design",
    ],
    3: [
      "Step 1: Visit to Experience Centres",
      "Step 2: Live mock-ups to gain trust",
      "Step 3: 3D and AR walkthrough",
    ],
  };

  // Function to handle category selection
  const handleCategoryClick = (category: number) => {
    setSelectedCategory(category);
    setCurrentStep(0); // Reset step when category changes
  };

  // Timer for bullet points scrolling
  useEffect(() => {
    const stepsLength = categorySteps[selectedCategory].length;
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % stepsLength);
    }, 2000); // 2 seconds for each point
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [selectedCategory]);

  return (
    <section className="relative min-h-[1000px] md:min-h-[800px] flex flex-col items-center justify-start py-10">
      {/* Background Image with Brightness */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: 'url("/images/livingroom.jpg")' }}
      ></div>

      {/* Title and Description Centered */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-2xl lg:text-5xl mb-5 text-white">Implementation Methodologies</h1>
        <p className="text-md lg:text-xl text-white">
          Our streamlined processes ensure a smooth transition from design to delivery, making your vision a reality.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col w-full max-w-6xl p-6 justify-center items-center md:flex-row">
        {/* Left: Image for Selected Category */}
        <div className="flex-1 flex items-center justify-center mb-10 md:mb-0 md:mr-10">
          <img
            src={categoryImages[selectedCategory]}
            alt="Selected category"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Categories in Flex-Row Layout */}
        <div className="flex flex-row justify-center items-center space-x-8">
          {/* Category 1 */}
          <button
            onClick={() => handleCategoryClick(1)}
            className="flex flex-col items-center"
          >
            <span className={`text-lg lg:text-4xl font-bold ${selectedCategory === 1 ? 'text-[#98B82C]' : 'text-white'}`}>01</span>
            <span className={`text-md lg:text-xl font-semibold mt-2 ${selectedCategory === 1 ? 'text-[#98B82C]' : 'text-white'}`}>
              MEET THE DESIGNER
            </span>
          </button>

          {/* Category 2 */}
          <button
            onClick={() => handleCategoryClick(2)}
            className="flex flex-col items-center"
          >
            <span className={`text-lg lg:text-4xl font-bold ${selectedCategory === 2 ? 'text-[#98B82C]' : 'text-white'}`}>02</span>
            <span className={`text-md lg:text-xl font-semibold mt-2 ${selectedCategory === 2 ? 'text-[#98B82C]' : 'text-white'}`}>
              DESIGN FINALIZATION
            </span>
          </button>

          {/* Category 3 */}
          <button
            onClick={() => handleCategoryClick(3)}
            className="flex flex-col items-center"
          >
            <span className={`text-lg lg:text-4xl font-bold ${selectedCategory === 3 ? 'text-[#98B82C]' : 'text-white'}`}>03</span>
            <span className={`text-md lg:text-xl font-semibold mt-2 ${selectedCategory === 3 ? 'text-[#98B82C]' : 'text-white'}`}>
              PLACE THE ORDER
            </span>
          </button>
        </div>
      </div>

      {/* Scrolling Bullet Points below the categories */}
      <div className="absolute bottom-20 lg:bottom-[280px] lg:left-[65%] lg:transform lg:-translate-x-1/2 flex items-center justify-center h-10">
        <div className="overflow-hidden h-10 w-full max-w-6xl">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentStep * 100}%)`, height: '100%' }}
          >
            {categorySteps[selectedCategory].map((step, index) => (
              <div
                key={index}
                className="text-white text-center text-lg font-medium h-10 flex items-center justify-center"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationMethodologies;
