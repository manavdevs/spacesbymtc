"use client";
import React, { useState, useEffect } from "react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Aditi S., Hyderabad",
            role: "Spaces By MTC Customer",
            feedback: "I wanted my living room to reflect my personality, but I couldn't find the right furniture anywhere. 'Spaces by MTC' took the time to understand my style and crafted custom pieces that fit perfectly. The craftsmanship and attention to detail are simply outstanding. My home feels more 'me' than ever before!",
            rating: 4,
        },
        {
            name: "Neha K., Hyderabad",
            role: "Spaces By MTC Customer",
            feedback: "When we expanded our business, we needed a workspace that was both modern and inspiring. 'Spaces by MTC' transformed our vision into reality. Their design for our new office is sleek, professional, and fosters creativity. It's been a game-changer for our team's productivity.",
            rating: 5,
        },
        {
            name: "Meera L., Hyderabad",
            role: "Spaces By MTC Customer",
            feedback: "Moving into a new apartment, I wanted it to feel luxurious and comfortable at the same time. 'Spaces by MTC' exceeded my expectations. They turned my empty rooms into a chic, cozy haven that I look forward to coming home to every day. The whole experience was smooth and stress-free.",
            rating: 5,
        },
        {
            name: "Rohit P., Hyderabad",
            role: "Spaces By MTC Customer",
            feedback: "As a retail store owner, I wanted a space that would captivate customers the moment they walked in. 'Spaces by MTC' created a layout that not only maximizes our display area but also provides a seamless shopping experience. Sales have definitely seen a boost since the redesign!",
            rating: 5,
        },
        {
            name: "Vikram R., Hyderabad",
            role: "Spaces By MTC Customer",
            feedback: "Our office needed a refresh, but we wanted something unique. 'Spaces by MTC' delivered exactly that. The custom furniture they designed for our workspace not only looks incredible but also enhances functionality. We've received so many compliments from clients and employees alike.",
            rating: 4,
        },
        {
            name: "Ravi & Anjali D., Hyderabad",
            role: "Spaces By MTC Customer",
            feedback: "With two young kids, our home needed to be functional but also stylish. 'Spaces by MTC' understood our needs perfectly. They designed spaces that are both kid-friendly and elegant, making our home the perfect blend of fun and sophistication. We couldn't be happier!",
            rating: 5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3); // Default to 3 (for large screens)

    useEffect(() => {
        const updateVisibleCount = () => {
            setVisibleCount(window.innerWidth >= 1024 ? 3 : 1);
        };

        updateVisibleCount(); // Initial check
        window.addEventListener("resize", updateVisibleCount);

        return () => {
            window.removeEventListener("resize", updateVisibleCount);
        };
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(intervalId);
    }, []);

    const getVisibleTestimonials = () => {
        let visible = [];
        for (let i = 0; i < visibleCount; i++) {
            // Looping effect
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    return (
        <section id="testimonials" className="relative h-auto flex flex-col items-center justify-center py-16">
            <div className="absolute inset-0 bg-[url('/images/client.jpg')] bg-cover bg-center filter brightness-50"></div>

            {/* Title and description */}
            <div className="relative text-center p-10">
                <h1 className="text-3xl text-white p-10 md:text-6xl transition-opacity duration-[1500ms] ease-in-out opacity-100 translate-y-0">
                    Client Testimonials
                </h1>
                <p className="text-md text-white md:text-xl mb-10 transition-opacity duration-[1500ms] ease-in-out delay-500 opacity-100 translate-y-0">
                    Our clients love the spaces we’ve helped create, be it residential or commercial. Here’s what they have to say about working with us.
                </p>
            </div>

            {/* Testimonials Carousel */}
            <div className="relative w-full overflow-hidden max-w-8xl mx-auto">
                <div className="flex lg:gap-5 gap-4 transition-transform duration-700 ease-in-out" style={{
                    transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                }}>
                    {testimonials.concat(testimonials).map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-md text-center flex-shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out"
                            style={{
                                width: visibleCount === 3 ? "calc(33.33% - 16px)" : "calc(100% - 16px)",
                            }}
                        >
                            <h3 className="font-bold">{testimonial.name}</h3>
                            <p className="text-gray-500">{testimonial.role}</p>
                            <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto my-4"></div>
                            <p className="text-gray-600">{testimonial.feedback}</p>
                            <div className="text-yellow-400 text-xl mt-4">
                                {"★".repeat(testimonial.rating)}
                                {"☆".repeat(5 - testimonial.rating)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
