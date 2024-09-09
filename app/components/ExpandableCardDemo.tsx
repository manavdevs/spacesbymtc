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
      description: 'Co-founder / Chief Operations Officer',
      image: '/images/peoples/lalitchilukuri.png',
    },
    {
      id: 4,
      title: 'Samson Randhawa',
      description: 'Co-founder / Chief Business Officer',
      image: '/images/samson.jpeg',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto p-4">
      {cards.map((card) => (
        <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[300px] object-contain mt-6 rounded-md" // Reduced the height from 400px to 300px
            />
          </div>
          <div className="p-2 text-center"> {/* Reduced padding here as well */}
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandableCardDemo;
