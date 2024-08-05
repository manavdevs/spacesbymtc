import Image from 'next/image'
import Link from 'next/link'
import { CircleArrowRight,CircleArrowLeft } from 'lucide-react'
import React from 'react'

const Card = () => {
  return (
    <div className="grid grid-cols-10 grid-rows-2 p-6 gap-4 h-[calc(100vh-100px)]">
      {/* Top Row */}
      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg col-span-3 flex animate-fadeInLeft">
        <Image
          src="/images/ModularKitchen.jpeg"
          alt="kitchen"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 p-5">
          <h2 className="text-sm font-bold text-white">Modular Kitchens</h2>
          <p className="text-sm font-light leading-relaxed text-white text-justify">
            Whip up magic in kitchens that adapt faster than your favorite recipe!
          </p>
        </div>
      </div>

      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg col-span-3 flex animate-fadeInTop">
        <Image
          src="/images/CommercialSpaces.jpg"
          alt="commercial space"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 p-5">
          <h2 className="text-md font-bold text-white">Commercial Space</h2>
          <p className="text-sm font-light leading-relaxed text-white text-justify">
            We make your office look so cool, even your coffee machine will feel more productive!
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-start col-span-4 p-5 animate-fadeInRight">
        <h2 className="text-xl font-bold text-black">Today's Design, Tomorrow's Reality</h2>
        <p className="text-lg font-light leading-relaxed text-black">
          One-stop shop for interiors, furniture, and technology. Be it a residential space or a commercial space. We have your back from start to finish.
        </p>
        <div className="flex justify-center mt-8 gap-4">
        <Link href="/offerings" className="text-3xl flex-row flex gap-2 justify-center items-center text-primary">
            <CircleArrowLeft size={33} />
            <span>Offerings</span>
          </Link>
          <Link href="/testimonials" className="text-3xl flex-row flex gap-2 justify-center items-center text-primary">
            <span>Testimonials</span>
            <CircleArrowRight size={33} />
          </Link>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg col-span-6 flex animate-fadeInRight">
        <Image
          src="/images/carousel2.jpg"
          alt="landscape"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-75 rounded-lg"></div>
        <div className="absolute top-0 right-0 p-5">
          <h2 className="text-md font-bold text-white p-2">Modern Furniture</h2>
          <p className="text-sm font-light leading-relaxed text-white p-2">
            Crafted with sleek lines and <br /> state-of-the-art materials to offer unparalleled <br /> comfort and durability for the modern lifestyle.
          </p>
        </div>
      </div>

      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg col-span-4 flex animate-fadeInBottom">
        <Image
          src="/images/FullHome.jpg"
          alt="sofa"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 p-5">
          <h2 className="text-md font-bold text-white">Full Home Interiors</h2>
          <p className="text-sm font-light leading-relaxed text-white">
            Our full home interior solutions integrate cutting-edge technology with innovative design, ensuring every corner of your home is both functional and fabulously futuristic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
