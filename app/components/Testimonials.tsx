"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const testimonials = [
        {
          name: 'Durga Rao',
          role: 'Swish Living Customer',
          feedback: 'I just love their design for all stunning details. You must know what can you do for a project before taking it, but with swish living, the sky is the limit.',
          rating: 3
        },
        {
          name: 'Marin',
          role: 'Swish Living Customer',
          feedback: 'I just love their design for all stunning details. You must know what can you do for a project before taking it, but with swish living, the sky is the limit.',
          rating: 3
        },
        {
          name: 'Akthar',
          role: 'Swish Living Customer',
          feedback: 'I just love their design for all stunning details. You must know what can you do for a project before taking it, but with swish living, the sky is the limit.',
          rating: 3
        },
    ];

    const testimonialsRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(testimonialsRef.current!); // Stop observing once it's in view
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the section is in view
        );

        if (testimonialsRef.current) {
            observer.observe(testimonialsRef.current);
        }

        return () => {
            if (testimonialsRef.current) {
                observer.unobserve(testimonialsRef.current);
            }
        };
    }, []);

    return (
        <section id='testimonials' className="relative h-auto flex flex-col items-center justify-center py-16" ref={testimonialsRef}>
            <div className="absolute inset-0 bg-[url('/images/client.jpg')] bg-cover bg-center filter brightness-50"></div>

            {/* Title and description */}
            <div className="relative text-center p-10">
                <h1
                    className={`text-3xl text-white p-10 md:text-6xl transition-opacity duration-1500 ease-in-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    Client Testimonials
                </h1>
                <p
                    className={`text-md text-white md:text-xl mb-10 transition-opacity duration-1500 ease-in-out delay-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    Our clients love the spaces we’ve helped create, be it residential or commercial. Here’s what they have to say about working with us.
                </p>
            </div>

            <div className={styles.testimonialsContainer}>
                <div className={styles.testimonialsTrack}>
                    {testimonials.concat(testimonials).map((testimonial, index) => (
                        <div className={styles.testimonialCard} key={index}>
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.role}</p>
                            <div className={styles.iconPlaceholder}></div>
                            <p>{testimonial.feedback}</p>
                            <div className={styles.rating}>
                              {'★'.repeat(testimonial.rating)}
                              {'☆'.repeat(5 - testimonial.rating)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
