import Image from "next/image";
import Link from "next/link";
import { CircleArrowRight,CircleArrowLeft } from "lucide-react";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            icon: "/images/press-button.png",
            title: 'Your Dream Space, Our Expert Touch',
            image: '/images/sliders1.jpg',
            description: 'We transform your vision into reality with our unparalleled expertise and experienced crew',
            hoverColor: 'bg-[#DDB892]', // Color on hover
            animation: 'animate-fadeInLeft' // Custom animation for each card
        },
        {
            id: "02",
            icon: "/images/design-thinking.png",
            title: 'Excellence In Every Design.',
            image: '/images/sliders2.jpg',
            description: 'Delivering dream spaces on time with top-quality. Your satisfaction is our priority.',
            hoverColor: 'bg-[#B08968]',
            animation: 'animate-fadeInTop'
        },
        {
            id: "03",
            icon: "/images/service-provider.png",
            title: 'Complete Journey Support',
            image: '/images/sliders3.jpg',
            description: 'Providing seamless support from inception to delivery, ensuring a satisfying journey throughout.',
            hoverColor: 'bg-[#7F5539]',
            animation: 'animate-fadeInBottom'
        },
        {
            id: "04",
            icon: "/images/pencil.png",
            title: 'Complete Customization Offerings',
            image: '/images/sliders4.jpg',
            description: 'Tailoring every detail to your vision, from layouts to finishes, with precision and care.',
            hoverColor: 'bg-[#9C6644]',
            animation: 'animate-fadeInRight'
        }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center pt-16"> {/* Adjusted padding-top */}
            <h1 className="text-4xl font-bold mb-12">Because your space deserves a touch of tomorrow!</h1>
            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`relative overflow-hidden group ${item.animation} transition duration-300 ease-in-out`}
                    >
                        <div>
                            <Image
                                src={item.image}
                                width={300}
                                height={200}
                                alt={item.title}
                                className="rounded-xl w-full"
                            />
                        </div>
                        <div className="absolute top-0 p-8 bg-white text-black opacity-70 rounded-xl backdrop-blur m-12">
                            <div className="flex justify-between items-center pb-0">    
                                <span className="text-sm font-bold">{item.id}</span>
                            </div>
                            <h2 className="text-sm font-semibold mt-0 block">{item.title}</h2>
                            <p className="text-sm font-light leading-relaxed text-black text-justify">{item.description}</p>
                        </div>
                        <div className={`inset-0 ${item.hoverColor} flex-col items-center justify-end md:flex md:absolute gap-32 pb-20 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full rounded-xl md-border-b-0`}>
                            <Image
                                src={item.icon}
                                width={110}
                                height={110}
                                alt={`${item.title} icon`}
                                className="rounded mr-2"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div>
            <h1 className="text-center text-4xl font-bold py-6">Why Us?</h1>
            <p className="text-center text-sm font-bold py-2 px-10 animate-pulse">Pick us because we make designing fun, fabulous, and futuristic—your walls will have a blast! We combine serious design expertise with a playful approach, ensuring that the process</p>
            <p className="text-center text-sm font-bold -mt-2 px-10 animate-pulse"> is as enjoyable as the end result. From wacky wallpaper to furniture that looks like it’s from a sci-fi movie, we promise a design journey full of laughs and ‘wow’ moments.</p>
            </div>
            <div className="flex justify-center mt-8 gap-5">
            <Link href="/" className="text-3xl flex-row flex gap-2 justify-center items-center text-primary">
            <CircleArrowLeft size={33} />
            <span>Home</span>
          </Link>
          
          <Link href="/portfolio" className="text-3xl flex-row flex gap-2 justify-center items-center text-primary">
          <span>Portfolio</span>
            <CircleArrowRight size={33} />
            </Link>
            
        </div>
        </div>
    );
}
