import React from 'react'

const Portfolio = () => {
    return (
        <section id='portfolio' className="relative h-[800px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('/images/livingroom.jpg')] bg-cover bg-center filter brightness-50"></div>
            <div className="relative text-center p-10 z-5">
                <h1 className="text-3xl text-white p-10 md:text-6xl">Spaces that inspire the future</h1>     
                <p className="text-md text-white md:text-xl">
                    One-stop shop for interiors, furniture, and technology.<br />
                    Be it a residential space or a commercial space, we have your back from start to finish.
                </p>     
            </div>
        </section>
    );
};

export default Portfolio