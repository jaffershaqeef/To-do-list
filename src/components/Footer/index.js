import React, { useState } from 'react'
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { TiSocialLinkedinCircular, TiSocialYoutubeCircular } from "react-icons/ti";




function Footer() {
  // go-to-top button state
  const [isHovered, setIsHovered] = useState(false);

  // social-media icons
  const symbols = [
    {
      tag: <FaXTwitter />,
      link : "https://www.facebook.com/login/"
    },
    {
      tag: <FaFacebook />,
      link : ""
    },
    {
      tag: <FaInstagram />,
      link : ""
    },
    {
      tag: <TiSocialLinkedinCircular />,
      link : ""
    },
    {
      tag: <TiSocialYoutubeCircular />,
      link : ""
    }
  ];

  return (
    <div className='bg-[#462863] h-[50vh] md:h-[70vh] xl:h-[70vh] -mt-56 lg:-mt-48 flex flex-col justify-center items-center md:px-14'>
      <div className='lg:mt-40 md:mt-32 mt-40 w-full flex items-center justify-center text-[14px] lg:text-[18px] '>

        {/* navbar content */}
        <div className="lg:flex hidden justify-center gap-5 items-center lg:w-[70%] text-white">
          <a href="#home" className="  hover:text-[#a7a3a3]" aria-label="Home">
            HOME &nbsp; &nbsp;/
          </a>
          <a href="#about" className="hover:text-[#a7a3a3]" aria-label="About Us">
            ABOUT US &nbsp; &nbsp;/
          </a>
          <a href="#services" className="hover:text-[#a7a3a3]" aria-label="About Us">
            SERVICES &nbsp; &nbsp;/
          </a>
          <a href="#contact" className=" hover:text-[#a7a3a3]" aria-label="Contact Us">
            CONTACT US &nbsp; &nbsp;
          </a>
        </div>

      </div>
      <div className='relative grid grid-cols-1 lg:grid-cols-3 gap-3 lg:mt-20 mt-10 space-y-4'>
         
         {/* logo image */}
        <div className=''>
          <img className='lg:h-[50px] h-[30px] mx-auto' src="images/logo1.png" alt="" />
        </div>

        {/* social media icons */}
        <div className='flex gap-1'>
          {
            symbols.map((symbol, index) => (
              <div key={index} className='lg:w-[35px] lg:h-[35px] w-[25px] h-[25px] cursor-pointer mx-auto  rounded-full border flex gap-0 justify-center items-center text-white'>
                <a target="_blank" rel="noopener noreferrer" href={symbol.link}>
                  {symbol.tag}
                </a>
              </div>
            ))
          }
        </div>

        {/* meerana link */}
        <div className='flex flex-col text-white  text-center'>
          <p className='text-[14px] lg:text-right '>© 2024 Dev Consulting. All rights reserved.</p>
          <a href='https://www.meerana.ae/' className='cursor-pointer text-[14px] underline' target="_blank" rel="noopener noreferrer">Designed & Developed by Meerana Technologies LLP</a>

          <div className=''>
              
          </div>
        </div>

        {/* mobile-view go-to-top button */}
        <div className='absolute lg:hidden block -right-2 -top-6 md:top-0 md:-right-28'>
         <a href="#home">
         <div className='flex justify-center items-center w-[30px] h-[30px] text-white bg-[#141414] shadow-[0px_0px_0px_4px_rgba(180,160,255,0.253)] rounded-full'>
            <span  className="material-symbols-outlined text-[16px]">
              arrow_upward
            </span>
          </div>
         </a>
        </div>


        {/* desktop-view go-to-top button */}
        <div className='absolute right-10 -top-20 hidden lg:block'>
          <a href="#home">
            <button
              className={`relative flex items-center justify-center h-[50px] rounded-full bg-[#141414] shadow-[0px_0px_0px_4px_rgba(180,160,255,0.253)] cursor-pointer overflow-hidden transition-all duration-300 ${isHovered ? 'w-[140px] rounded-[50px] bg-[#b5a0ff]' : ' w-[50px]'
                }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <svg
                className={`w-3  transition-transform duration-300 ${isHovered ? 'translate-y-[-200%]' : ''
                  }`}
                viewBox="0 0 384 512"
              >
                <path
                  className="fill-white"
                  d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                />
              </svg>
              <span
                className={`absolute  text-white text-xs transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 text-[0px] -bottom-5'
                  }`}
              >
                Back to Top
              </span>
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Footer