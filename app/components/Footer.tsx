import React from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
  FaMapMarkerAlt,
  FaIndustry,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Section */}
          <div className="col-span-2">
            <h2 className="text-4xl font-bold mb-4">Spaces By MTC</h2>
            <ul className="space-y-2 text-lg font-medium text-gray-300">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#offerings" className="hover:underline">
                  Offerings
                </a>
              </li>
              <li>
                <a href="#whysus" className="hover:underline">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex justify-start space-x-4 mt-4">
              <a
                href="https://www.instagram.com/spacesbymtc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#e4405f] transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/shkeozDiUdRjJzsy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#4267B2] transition duration-300"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.linkedin.com/company/spacesbymtc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#0077b5] transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/SpacesByMTC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#1DA1F2] transition duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Contact Icons Side by Side, taking up a larger portion */}
          <div className="flex w-full justify-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              {/* Experience Center Icon */}
              <div className="p-8 md:p-16 bg-[#2d2d2d] rounded-lg shadow-lg shadow-white/10 hover:shadow-white/20 transition duration-300 flex items-center space-x-2">
                <a
                  href="https://maps.app.goo.gl/FU7CzaPegKBNzxpZ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaMapMarkerAlt className="text-4xl md:text-5xl text-white hover:text-gray-400 transition duration-300 -ml-6" />
                  <p className="ml-6 text-sm md:text-md">Experience Center</p>
                </a>
              </div>

              {/* Factory Icon */}
              <div className="p-8 md:p-16 bg-[#2d2d2d] rounded-lg shadow-lg shadow-white/10 hover:shadow-white/20 transition duration-300 flex items-center space-x-2">
                <a
                  href="https://maps.app.goo.gl/8aYF5cqEqXDDrbJo7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaIndustry className="text-4xl md:text-5xl text-white hover:text-gray-400 transition duration-300 -ml-6" />
                  <p className="ml-6 text-sm md:text-md">Factory</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Text Centered */}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">
            © 2024 SpacesbyMTC™. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
