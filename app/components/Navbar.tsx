"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // Import social icons
import React from 'react';
import { FaX } from 'react-icons/fa6';

const Navbar = () => {
    
    const pathname = usePathname();

    const pages = [
        { href: '/', label: 'Home' },
        { href: '/offerings', label: 'Offerings' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/testimonials', label: 'Testimonials' },
        { href: '/contact', label: 'Contact Us' },
    ];

    const underlineAnimated = "capitalize inline-block text-2xl text-black relative underline-offset-4 cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-black";

    return (
        <section className="w-full fixed bottom-0 h-20 shadow-lg"> {/* Added background and shadow for better visibility */}
            <nav className="flex justify-between items-center h-full px-8">
                <div className="flex items-center gap-80">
                    <Image
                        src={'/images/logo.png'} 
                        alt='logo'
                        width={140}
                        height={140}
                    />
                    <div className="flex gap-10">
                        {pages.map(({ href, label }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`${isActive ? underlineAnimated : "text-primary"} text-lg`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    {/* Social Media Icons */}
                    <Link href="https://www.instagram.com/spacesbymtc?igsh=YXB1eHlrNTkwdGRj" target="_blank" aria-label="Instagram">
                        <FaInstagram size={24} className="text-primary hover:text-black transition-colors" />
                    </Link>
                    <Link href="https://www.facebook.com/share/shkeozDiUdRjJzsy/?mibextid=qi2Omg" target="_blank" aria-label="Facebook">
                        <FaFacebookF size={24} className="text-primary hover:text-black transition-colors" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/spacesbymtc/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedinIn size={24} className="text-primary hover:text-black transition-colors" />
                    </Link>
                    <Link href="https://x.com/SpacesByMTC?t=2zTUYYStdG5u1fZP5HC2wA&s=08" target="_blank" aria-label="Twitter">
                        <FaX size={24} className="text-primary hover:text-black transition-colors" />
                    </Link>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
