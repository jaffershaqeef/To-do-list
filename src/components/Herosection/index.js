import React from 'react';
import About from '../About';
import Service from '../Services/index';
import Contact from '../Contact/index';

function Herosection() {
  return (

    <>
      {/* desktop view*/}
      <div className='relative '>

        {/* desktop view background image*/}
        <img
          className="hidden lg:block absolute w-[65%] right-0 -z-10"
          src="images/bg1.png"
          alt=""
        />

        {/* mobile view background image */}
        <img
          className="lg:hidden block absolute w-full right-0 -z-10"
          src="images/mobhome.png" alt="" />

        <div id='home' className='lg:flex justify-between relative lg:px-14 md:px-10 px-5'>
          <div className='lg:flex lg:flex-col  lg:items-start h-auto hidden text-[#191B21]'>
            
            {/* desktop banner content */}
            <p className='lg:w-[300px] w-[180px] text-[15px] lg:text-[30px] md:pt-[150px] xl:pt-[250px] md:font-bold lg:font-semibold leading-8'>
              Streamlined Cloud Journeys, Unmatched Expertise, Uncompromised Security
            </p>
            <p className='w-[300px] lg:w-[370px] xl:w-[450px] text-[12px] xl:text-[14px] mt-5'>
              With over 25 years in IT Industry. Over 7 years in cloud. And over 11 years in security printing industry.
            </p>
            <a href='#about' className='bg-[#22A75D] text-white rounded-3xl px-3 py-2 mt-5 text-[12px]'>
              LEARN MORE
            </a>
          </div>
          <div className='lg:w-[50%] flex lg:justify-start justify-center'>

            {/* desktop & mobile view hero image */}
            <img
              className="z-40 mt-[80px] md:mt-[185px] lg:mt-[100px] h-[75%] w-[65%] md:h-[75%] md:w-[60%] lg:h-[85%] lg:w-[75%] "
              src="images/man.png"
              alt=""
            />
          </div>

          {/* mobile-view  banner content */}

          <div className='lg:hidden  block justify-center items-center mt-5'>
            <p className='text-[#191B21] text-center text-[18px] md:text-[24px] px-10 md:px-40 '>
              Streamlined Cloud Journeys, Unmatched Expertise, Uncompromised Security
            </p>
            <p className='px-12 md:px-32 text-[18px] text-center text-gray-500 mt-3'>
              With over 25 years in IT Industry. Over 7 years in cloud. And over 11 years in security printing industry.
            </p>
            <div className='w-full flex justify-center items-center mt-3'>
            <a href='#about' className='bg-[#22A75D] text-white rounded-3xl px-3 py-2 mt-5 text-[12px]'>
              LEARN MORE
            </a>
            </div>
          </div>

        </div>
      </div>

      {/* about */}
      <About/>

      {/* services */}
      <Service />

      {/* contact */}
      <Contact />



    </>
  );
}

export default Herosection;
