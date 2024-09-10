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
    <div className="flex flex-row  gap-8 max-w-5xl mx-auto p-4">
      {cards.map((card) => (
        <div key={card.id} className="bg-gray-400 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-100 ease-in-out ">
          <div className="relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[300px] object-fit rounded-md" // Reduced the height from 400px to 300px
            />
          </div>
          <div className="p-2 text-center"> {/* Reduced padding here as well */}
            <h2 className="text-xl font-semibold  mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandableCardDemo;
