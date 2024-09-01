import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#191919]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">SpacesbyMTC</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#home" className=" hover:underline">Home</a>
                </li>
                <li className="mb-4">
                  <a href="#offerings" className="hover:underline">Offerings</a>
                </li>
                <li className="mb-4">
                  <a href="#portfolio" className="hover:underline">Portfolio</a>
                </li>
                <li className="mb-4">
                  <a href="#testimonials" className="hover:underline">Testimonials</a>
                </li>
              </ul>
            </div>

            {/* Address Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Experience Center</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <p>Spaces by MTC-1st floor,<br />
                    Golden Mile Rd,<br />
                    Kokapet,<br />
                    Hyderabad,<br />
                    Telangana 500075
                  </p>
                </li>
              </ul>
            </div>


            

            {/* Address Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Our Factory</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <p>H.N 1-92, Sy.No 50&52,<br />
                    Rasheedguda Village,<br />
                    Shamshabad Mandal,<br />
                    Rangareddy District,<br />
                    Hyderabad, Telangana, 501218
                  </p>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="mailto:admin@mtc-spaces.com" className="hover:underline">Email: admin@mtc-spaces.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <a href="https://flowbite.com/">SpacesbyMTC™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <ul className='text-black flex space-x-5 text-2xl'>
                <li><a target='_blank' href="https://www.instagram.com/spacesbymtc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== "><FaInstagram /></a></li>
                <li><a target='_blank' href="https://www.facebook.com/share/shkeozDiUdRjJzsy/?mibextid=qi2Omg"><FaSquareFacebook /></a></li>
                <li><a target='_blank' href="https://www.linkedin.com/company/spacesbymtc/"><FaLinkedin /></a></li>
                <li><a target='_blank' href="https://x.com/SpacesByMTC"><FaXTwitter /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
