import React from 'react'

const ExpandableCardDemo = () => {
  const cards = [
    {
      id: 1,
      title: 'Syed Abdul Wahab',
      description: 'Description for Founder 1',
      image: '/images/peoples/syedabdulwahab.png',
    },
    {
      id: 2,
      title: 'Balasubramanyam Muthu',
      description: 'Description for Founder 2',
      image: '/images/peoples/balasubramanyammuthu.png',
    },
    {
      id: 3,
      title: 'Lalit Chilukuri',
      description: 'Description for Founder 3',
      image: '/images/peoples/lalitchilukuri.png',
    },
    {
      id: 4,
      title: 'Founder 4',
      description: 'Description for Founder 4',
      image: '/images/founder4.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {cards.map((card) => (
        <div key={card.id} className="bg-white rounded-lg shadow-lg p-6">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-[500px] object-fit rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpandableCardDemo;
