import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-7xl flex justify-around items-start mx-auto gap-10">
          <div className='animate-fadeInLeft'>
            <Image
              src={'/images/3.jpg'}
              alt='Coffee Cream Sofa'
              width={300}
              height={500}
              className='rounded-xl'
            />
          </div>

          <div className='flex flex-col self-start ml-8 mt-20 animate-fadeInRight'>
            <div className="font-bold text-lg mb-8">
              Today&apos;s Design, Tomorrow&apos;s Reality
            </div>
            <div className="font-light text-lg text-justify">
              One-stop shop for interiors, furniture and technology.<br /> Be it a residential space or a commercial space. We have your back from<br /> start to finish.
            </div>
            <div className="font-light text-justify flex gap-2 mt-32 text-primary">
              <div className='text-3xl flex-row flex gap-2 justify-center items-center'>
                <Link href='/offerings'><CircleArrowRight size={33} /></Link>
                <Link href='/offerings'>Offerings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
