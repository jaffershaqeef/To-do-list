import React from 'react';

function Task() {
  return (
    <>
      <div>
        <div className='flex relative h-screen'>
          <div className='w-[50%]  bg-blue-950'></div>
          <div className='w-[50%]  bg-orange-500'></div>

        </div>
        <div className='absolute lg:left-12 xl:left-16 md:left-9 min-[375px]:left-5 left-4 lg:top-14 md:top-10 top-5  w-[90%]  bg-white h-screen shadow-2xl'>

          <nav className='block h-[30px] md:h-[50px] lg:h-[70px]'>
            <button className='float-right block md:hidden pr-3 mt-2'><svg xmlns="http://www.w3.org/2000/svg" className='text-blue-950 ' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            </button>
            <ul className='md:flex items-center float-right md:mt-3 lg:mt-5 hidden '>
              <li className='xl:px-5 px-3  md:text-[13px] lg:text-[16px] xl:text-[20px] font-[600] text-blue-950 '>About me</li>
              <li className='xl:px-5 px-3 md:text-[13px] lg:text-[16px] xl:text-[20px] font-[600] text-blue-950'>Skills</li>
              <li className='xl:px-5 px-3 md:text-[13px] lg:text-[16px] xl:text-[20px] font-[600] text-blue-950'>Project</li>
              <li className='xl:px-5 px-3 md:text-[13px] lg:text-[16px] xl:text-[20px] font-[600] text-blue-950 md:mr-10 lg:mr-14 xl:mr-16'>Contact</li>

            </ul>
          </nav>
          
          <div className='md:mt-[30px] xl:mt-10 mt-[210px]'>
            <div className="md:w-[60%] p-2 xl:px-5">
              <div className='flex-wrap lg:text-[18px] p-4'>
                <div className='flex'>
                <h1 className='text-[20px] md:text-[35px] lg:text-[50px] xl:text-[60px]  md:font-[600] lg:font-[700]  '>Hi</h1>
                <img src="images/handwave.png" className='w-[25px] md:w-[45px] h-[25px] md:h-[45px] lg:w-[70px] xl:w-[90px] lg:h-[70px] xl:h-[90px] lg:ml-[5px] ml-2' alt="" />
                <span className='text-[20px] md:text-[35px]  md:font-[600] lg:font-[700]  '>,</span>
              
                </div>
                
              
                <h1 className='  md:font-[600] lg:font-[700] '>I am Charles,</h1>
                <h1 className='  md:font-[600] lg:font-[700]'>Front-End Developer</h1>
                <p className=' mt-2 md:font-[500] font-[500]  md:w-[335px] lg:w-[500px] xl:w-[680px] text-justify text-gray-600 leading-8 '>design and develop experiences that make people's lives simpler through Wet and Mobile apps.I work with Figma, HTML5, CSS3, JavaScript, React, ReactNative and Flutter.</p>
              </div>
              
              <div className='p-4 mt-2 md:flex md:mt-5'>
                <button className=' px-2 py-1 md:px-3 md:py-2 border border-blue-950 mr-3 md:mr-5 text-[15px] md:text-[17px] xl:text-[20px] md:font-[500] '>HIRE ME</button>
                <button className='px-2 py-1 md:px-3 md:py-2 bg-black text-white md:mt-0 mt-2 text-[15px] md:text-[17px] xl:text-[20px] md:font-[500]'  >SEE MY PROJECTS</button>
              </div>
            </div>
            <div className="md:w-[40%]">
              <div className='absolute  lg:top-[125px] md:top-[95px] top-[60px] xl:right-[70px]  md:right-9 right-[60px] min-[375px]:right-[80px] min-[425px]:right-[105px] rounded-es-[50%] w-[160px] md:w-[210px] lg:w-[280px] xl:w-[380px] h-[190px] md:h-[240px] lg:h-[350px] xl:h-[450px] bg-black '></div>
              <img src="images/me.png" className='absolute min-[375px]:right-[85px] min-[425px]:right-[110px] lg:top-[130px] md:top-[100px] top-[65px] xl:right-[75px] md:right-10 right-16  rounded-es-[50%]  w-[160px] md:w-[210px] lg:w-[280px] xl:w-[380px] h-[190px] md:h-[240px] lg:h-[350px] xl:h-[450px] border xl:border-[3px] md:border-[2px] border-black' alt="" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Task;