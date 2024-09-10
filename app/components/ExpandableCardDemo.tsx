const ExpandableCardDemo = () => {
  const cards = [
    {
      id: 1,
      title: 'Syed Abdul Wahab',
      description: 'Chairman and Founder',
      image: '/images/peoples/syedabdulwahab.png',
    },
    {
      id: 2,
      title: 'Balasubramanyam Muthu',
      description: 'Managing Director',
      image: '/images/peoples/balasubramanyammuthu.png',
    },
    {
      id: 3,
      title: 'Lalit Chilukuri',
      description: 'Co-founder / COO',
      image: '/images/peoples/lalitchilukuri.png',
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-24 justify-center max-w-5xl mx-auto p-4 ">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gray-400 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-100 ease-in-out lg:w-[250px] sm:w-[180px] lg:h-[400px] sm:h-[220px]" // Reduced size for small screens
        >
          <div className="relative w-full lg:h-[300px] lg:w-[300px] sm:h-[100px]"> 
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full    rounded-md" // Ensures the image fills the container properly
            />
          </div>
          <div className="p-4 text-center flex flex-col justify-center lg:h-[100px] sm:h-[70px]"> {/* Adjusted card height for small screens */}
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold mb-2">{card.title}</h2> {/* Smaller text on small screens */}
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandableCardDemo;
