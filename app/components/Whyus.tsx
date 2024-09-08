import React, { useState } from 'react';
import { MultiStepLoader as Loader } from '../components/ui/multi-step-loader';
import { IconSquareRoundedX } from '@tabler/icons-react';

type Offering = {
  id: number;
  title: string;
  description: string;
  loadingStates: Array<{ text: string }>;
};

const offeringsData: Offering[] = [
  {
    id: 1,
    title: 'Meet The Designer',
    description:
      "We start by understanding your design requirements through site visits and defining the project scope. You'll also have the chance to explore our experience center to see our design capabilities. Afterward, we provide a quote customized to your budget. Once you make your design selection, we deliver final 3D visuals and an updated quotation, followed by a thorough site validation and your final design approval. After approval, we place the order with the factory and provide a detailed project plan, ensuring that we deliver your dream home as envisioned.",
    loadingStates: [
      { text: 'Step 1: Understand requirements' },
      { text: 'Step 2: Define scope of work ' },
      { text: 'Step 3: Site & Experience Centre visits' },
      { text: 'Step 4: Tentative quotation' },
      { text: 'Step 5: Customer bucketing basis budget' },
    ],
  },
  {
    id: 2,
    title: 'Design Finalization',
    description:
      "We start by understanding your design requirements through site visits and defining the project scope. You'll also have the chance to explore our experience center to see our design capabilities. Afterward, we provide a quote customized to your budget. Once you make your design selection, we deliver final 3D visuals and an updated quotation, followed by a thorough site validation and your final design approval. After approval, we place the order with the factory and provide a detailed project plan, ensuring that we deliver your dream home as envisioned.",
    loadingStates: [
      { text: 'Step 1: End-to-end Interior Solutions' },
      { text: 'Step 2: Choose your Design' },
      { text: 'Step 3: Pre Define Design Library' },
      { text: 'Step 4: Finalize Design' },
    ],
  },
  {
    id: 3,
    title: 'Place the Order',
    description:
      "We start by understanding your design requirements through site visits and defining the project scope. You'll also have the chance to explore our experience center to see our design capabilities. Afterward, we provide a quote customized to your budget. Once you make your design selection, we deliver final 3D visuals and an updated quotation, followed by a thorough site validation and your final design approval. After approval, we place the order with the factory and provide a detailed project plan, ensuring that we deliver your dream home as envisioned.",
    loadingStates: [
      { text: 'Step 1: Visit to Experience Centres ' },
      { text: 'Step 2: Live mock-ups to gain trust on quality & process' },
      { text: 'Step 3: 3D and AR walkthrough ' },
    ],
  },
];

const Whyus = () => {
  const [activeOffering, setActiveOffering] = useState<Offering | null>(null);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | ''>('');
  const [loading, setLoading] = useState(false);

  const handleClick = (offering: Offering) => {
    const currentIndex = activeOffering ? offeringsData.indexOf(activeOffering) : -1;
    const newIndex = offeringsData.indexOf(offering);

    if (newIndex > currentIndex) {
      setAnimationDirection('right');
    } else if (newIndex < currentIndex) {
      setAnimationDirection('left');
    }

    setTimeout(() => {
      setActiveOffering(offering);
      setAnimationDirection('');
      setLoading(true); // Trigger loader on click
    }, 300);
  };

  return (
    <section
      id="portfolio"
      className="relative flex flex-col lg:flex-row items-center justify-center h-auto min-h-[800px] lg:py-16 py-6 bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/livingroom.jpg")' }} // Add the path to your background image
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Offerings Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto z-10 w-full p-3 lg:space-x-10">
        {/* Text Section */}
        <div
          className={`lg:w-1/2 w-full mb-4 lg:mb-0 relative transition-all duration-500 transform ${
            animationDirection === 'right' ? 'translate-x-12 opacity-0' : ''
          } ${animationDirection === 'left' ? '-translate-x-12 opacity-0' : ''} ${
            !animationDirection ? 'opacity-100' : ''
          }`}
        >
          {activeOffering ? (
            <div className="bg-[#98B82C] p-6 text-white shadow-lg flex flex-col justify-center relative z-20 lg:max-h-[400px]">
              <h2 className="text-xl lg:text-3xl font-bold mb-4">
                Why SpacesByMTC
              </h2>
              <p className="text-sm lg:text-lg mb-2">
                {activeOffering.description}
              </p>
            </div>
          ) : (
            <div className="text-white text-center p-6">
              <h2 className="text-xl lg:text-3xl font-bold mb-4">
                Implementaion Process at SpacesbyMTC
              </h2>
            </div>
          )}
        </div>

        {/* Clickable Numbers */}
        <div className="relative z-10 flex justify-center space-x-4 lg:space-x-10 text-center mt-4 lg:mt-0 lg:w-1/2">
          {offeringsData.map((offering) => (
            <div
              key={offering.id}
              onClick={() => handleClick(offering)}
              className={`cursor-pointer transition duration-300 ease-in-out ${
                activeOffering?.id === offering.id
                  ? 'text-[#98B82C]'
                  : 'text-white'
              }`}
            >
              <h3 className="text-2xl lg:text-4xl font-bold lg:mb-1 mb-1">
                0{offering.id}
              </h3>
              <p className="text-xs lg:text-base uppercase">
                {offering.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Multi-Step Loader */}
      {activeOffering && loading && (
        <Loader
        loadingStates={activeOffering.loadingStates}
        loading={loading}
        duration={2000}
        className="custom-loader"
      />
      )}

      {/* Close Loader Button */}
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </section>
  );
};

export default Whyus;
