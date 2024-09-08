import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-5 bg-white bg-opacity-30 backdrop-blur-md shadow-lg z-20">
                {/* Logo with controlled size */}
                <div className='text-white'>
                    <img src="/images/logonobg.png" alt="logo" className="h-10 w-auto" />
                </div>

                <div className='flex items-center'>
                    <ul className='hidden md:flex gap-5 text-white'>
                        <li><a href="/home">Home</a></li>
                        <li><a href="#offerings">Offerings</a></li>
                        <li><a href="#portfolio">Implementaion</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="/aboutus">About Us</a></li>

                    </ul>
                    <div className='md:hidden text-white ml-4'>
                        <button onClick={handleToggleMenu}>
                            <RxHamburgerMenu size={25} className={`transition-transform duration-1000 ${toggleMenu ? 'rotate-90' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Socials Dropdown triggered by click */}
                <div className='relative hidden md:block '>
                    <button
                        className='text-white cursor-pointer '
                        onClick={handleToggleDropdown}
                    >
                        Socials
                    </button>

                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                            <ul className='text-black'>
                                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                                    <FaSquareFacebook size={20} /> <a href="https://www.facebook.com/share/shkeozDiUdRjJzsy/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">Facebook</a>
                                </li>
                                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                                    <FaInstagram size={20} /> <a href="https://www.instagram.com/spacesbymtc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a>
                                </li>
                                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                                    <FaLinkedin size={20} /> <a href="https://www.linkedin.com/company/spacesbymtc/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </li>
                                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                                    <FaXTwitter size={20} /> <a href="https://x.com/SpacesByMTC" target="_blank" rel="noopener noreferrer">Twitter</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {toggleMenu && (
                <div className="fixed top-16 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg z-40 p-5 md:hidden animate-fadeInDown">
                    <ul className='flex flex-col gap-5 text-black'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#offerings">Offerings</a></li>
                        <li><a href="#portfolio">Implementaion</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
