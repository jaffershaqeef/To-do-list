import React from 'react';

function Assignment() {
  return (
    // background
    <div>
      <div className='flex relative'>
        <div className='w-[50%] h-screen bg-blue-950'></div>
        <div className='w-[50%] h-screen bg-orange-500'></div>
      </div>

      {/* display */}

      <div className='h-screen bg-white absolute top-5 left-4 border border-black w-[90%]'>
        <nav className='h-[30px] w-full'>
          <button className=' float-right block' ><svg xmlns="http://www.w3.org/2000/svg" className='text-blue-950 ' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg></button>
        </nav>

        {/* image */}

        

        <div className='flex justify-center items-center'>
        <div className='mt-[10px] mx-auto w-[160px] h-[190px] bg-black rounded-es-[50%]'></div>
            <img src="images/me.png" className=' absolute top-[45px] left-[105px] w-[160px] h-[190px] rounded-es-[50%]' alt="" />
        </div>        {/* <img className='shadow-' src="images/me.png" alt="" /> */}
        {/* paragraph */}

        <div>
          <h1 className='text-[20px] '>I am Charles,</h1>
          <h1 className='text-[20px] '>Front-End Developer</h1>
          <p className='text-gray-600 text-[14px] font-[500] text-justify '>design and develop experiences that make people's lives simpler through Wet and Mobile apps.I work with Figma, HTML5, CSS3, JavaScript, React, ReactNative and Flutter.</p>
        </div>
      </div>






    </div>

  );
}

export default Assignment;