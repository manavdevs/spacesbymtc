import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Amit Kumar, New Delhi",
            image: "/images/delhi.png",
            text: "I couldn't be happier with how the team at Spaces contributed to shaping our office space. Their commitment to incorporating natural light and green elements has created a workspace that feels energizing and conducive to creativity.",
            tint: 'bg-blue-400',
        },
        {
            name: "Rajesh and Priya Gupta, Mumbai",
            image: "/images/mumbai.png",
            text: "We are delighted with the transformation of our home by Manjusha. Her blend of traditional Indian aesthetics with futuristic design elements created a space that feels both culturally rich and refreshingly modern. A big Kudos!",
            tint: 'bg-yellow-400',
        },
        {
            name: "Ananya and Arjun, Bengaluru",
            image: "/images/bangalore.png",
            text: "The team at MTC Space, led by Kanika, understood our desire for a home that reflects our love for nature. Their eco-friendly approach and use of natural materials have made our living space not only beautiful but also sustainable. Hats off to their work and I would highly recommend this to everyone around!",
            tint: 'bg-green-400',
        },
    ];

    return (
        <section id='testimonials' className="relative h-auto flex flex-col items-center justify-center py-16">
            <div className="absolute inset-0 bg-[url('/images/client.jpg')] bg-cover bg-center filter brightness-50"></div>

            {/* Title and description */}
            <div className="relative text-center p-10 ">
                <h1 className="text-3xl text-white p-10 md:text-6xl">Client Testimonials</h1>
                <p className="text-md text-white md:text-xl mb-10">
                    Our clients love the spaces we’ve helped create, be it residential or commercial. Here’s what they have to say about working with us.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="relative  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-10">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="relative testimonial-card flex flex-col items-center p-8 rounded-lg shadow-lg text-center transition duration-300 ease-in-out transform hover:scale-105">
                        {/* Blur with tint overlay */}
                        <div className={`absolute inset-0 ${testimonial.tint} bg-opacity-30 backdrop-blur-md rounded-lg`}></div>
                        <div className="relative z-10">
                            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-white shadow-lg" />
                            <h2 className="text-xl text-white mb-2">{testimonial.name}</h2>
                            <p className="text-white">{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
