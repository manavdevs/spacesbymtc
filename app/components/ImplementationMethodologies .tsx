import React, { useState, useEffect } from 'react';

interface CategorySteps {
  [key: number]: string[];
}

interface Position {
  bottom: string;
  left: string;
}

interface PositionMapping {
  [key: number]: {
    lg: Position;
    sm: Position;
  };
}

const ImplementationMethodologies: React.FC = () => {
  // State to track the currently selected category
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  // State to manage which step is highlighted (i.e., white)
  const [highlightedStep, setHighlightedStep] = useState<number>(-1);

  // State to manage screen size for responsive design
  const [isLargeScreen, setIsLargeScreen] = useState<boolean | null>(null);

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

  // Custom positions for bullet points for lg and sm screens
  const positionMapping: PositionMapping = {
    1: { lg: { bottom: '100px', left: '55%' }, sm: { bottom: '35px', left: '15%' } },
    2: { lg: { bottom: '150px', left: '55%' }, sm: { bottom: '60px', left: '20%' } },
    3: { lg: { bottom: '200px', left: '55%' }, sm: { bottom: '90px', left: '20%' } },
  };

  // Function to handle category selection
  const handleCategoryClick = (category: number) => {
    setSelectedCategory(category);
    setHighlightedStep(-1); // Reset step when category changes
  };

  // Timer to highlight steps one by one
  useEffect(() => {
    const stepsLength = categorySteps[selectedCategory].length;
    let currentStep = -1;

    const interval = setInterval(() => {
      currentStep += 1;
      if (currentStep >= stepsLength) {
        clearInterval(interval); // Stop the interval when the last point is reached
      } else {
        setHighlightedStep(currentStep);
      }
    }, 1000); // 1 second interval for each point

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [selectedCategory]);

  // Detect screen size to conditionally render styles
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Assuming lg is 1024px and above
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get custom position for the current category
  const getCustomPosition = () => {
    if (!positionMapping[selectedCategory]) return {};
    return isLargeScreen ? positionMapping[selectedCategory].lg : positionMapping[selectedCategory].sm;
  };

  // SVG checkmark icon
  const CheckmarkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-white flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section id='implementation' className="relative min-h-[1000px] md:min-h-[800px] flex flex-col items-center justify-start py-10">
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

      {/* Bullet Points displayed all at once with custom positions */}
      <div
        className="absolute flex flex-col items-center justify-start h-auto space-y-4"
        style={getCustomPosition()} // Apply custom position
      >
        {categorySteps[selectedCategory].map((step, index) => (
          <div
            key={index}
            className={`text-lg font-medium flex items-center justify-start w-full transition-all ease-in-out duration-500 ${
              highlightedStep >= index ? 'text-white' : 'text-gray-500'
            }`}
          >
            {/* Checkmark Icon */}
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 mr-2">
              <CheckmarkIcon />
            </span>
            {step}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImplementationMethodologies;
