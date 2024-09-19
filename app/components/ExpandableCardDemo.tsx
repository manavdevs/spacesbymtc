const ExpandableCardDemo = () => {
  const cards = [
    {
      id: 1,
      name: 'Syed Abdul Wahab',
      designation: 'Chairman and Founder',
      image: '/images/peoples/syedabdulwahab.jpg',
      companies: [
        { name: 'MINDSTEC', logo: '/images/companies/mindstec.png' },
        { name: 'MIANTIC AV', logo: '/images/companies/miantic.png' },
        { name: 'MTC', logo: '/images/companies/mtc.png' },
      ],
    },
    {
      id: 2,
      name: 'Balasubramanyam Muthu',
      designation: 'Managing Director',
      image: '/images/peoples/balasubramanyammuthu.png',
      companies: [
        { name: 'MTC', logo: '/images/companies/mtc.png' },
      ],
    },
    {
      id: 3,
      name: 'Lalit Chilukuri',
      designation: 'Co-founder / COO',
      image: '/images/peoples/lalitchilukuri.png',
      companies: [
        { name: 'Amazon', logo: '/images/companies/amazon.png' },
        { name: 'Uber', logo: '/images/companies/uber.png' },
        { name: 'Darwinbox', logo: '/images/companies/darwinbox.png' },
      ],
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-10 justify-center max-w-7xl mx-auto p-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-100 ease-in-out w-[250px] h-auto"
        >
          {/* Image Section */}
          <div className="relative w-full h-[250px]">
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Info Section */}
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold mb-2">{card.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{card.designation}</p>
            <div className="flex justify-center gap-4">
              {card.companies.map((company, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-20 w-20 object-contain"
                  />
                  <p className="text-xs text-gray-600 mt-1">{company.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandableCardDemo;
