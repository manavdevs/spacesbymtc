import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <div className="bg-[#191919] flex justify-around items-center flex-col py-3 md:flex-row ">
        <div className="text-sm font-normal text-white">
          <p>Copyright © 2024 SpacesByMTC All rights Reserved</p>

        </div>
        <div className='py-3'>
            <ul className='text-white flex space-x-5 text-2xl'>
              <li><a target='_blank' href="https://www.instagram.com/spacesbymtc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== "><FaInstagram /></a></li>
              <li><a target='_blank' href="https://www.facebook.com/share/shkeozDiUdRjJzsy/?mibextid=qi2Omg"><FaSquareFacebook /></a></li>
              <li><a target='_blank' href="https://www.linkedin.com/company/spacesbymtc/"><FaLinkedin /></a></li>
              <li><a target='_blank' href="https://x.com/SpacesByMTC"><FaXTwitter /></a></li>
            </ul>
        </div>



      </div>
    
    </>
  )
}

export default Footer