import React from 'react'

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
      description: 'Co founder / Chief Operations officer',
      image: '/images/peoples/lalitchilukuri.png',
    },
    {
      id: 4,
      title: 'Samson Randhawa',
      description: 'Co Founder/ Chief Business Officer',
      image: '/images/founder4.jpg',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {cards.map((card) => (
        <div key={card.id} className="bg-white rounded-lg shadow-lg p-6">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-[300px] object-contain rounded-t-lg mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
          <p className="text-gray-600 text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpandableCardDemo;
