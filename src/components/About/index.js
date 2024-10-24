import React from 'react';

function About() {
  return (
    <>
      <div className="relative w-full lg:-mt-28 xl:-mt-48 my-10 section">

        {/* desktop-view background image */}
        <img src="images/group2.png" alt="" className="hidden lg:block w-full" />

        {/* mobile-view background image */}
        <img src="images/mobabout.png" alt="" className="lg:hidden block w-full md:h-[90vh]" />

        {/* desktop &  mobile view text-content */}
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-5 w-[80%] mx-auto h-auto">
          <div id='about' className='lg:mb-[400px]'>
            <p className=' hidden'></p>
          </div>
          <p className="text-white font-bold text-[16px] md:text-[26px] w-full px-5 lg:px-10 flex justify-center md:mt-10 ">
            What We Do
          </p>
          <div className="text-white items-center text-[14px] justify-center text-center lg:text-start lg:text-[18px]  md:mt-10">
            <p>
              With a proven track record of successful projects and a team of certified professionals, we excel in cloud implementation, migration, and specialize in Azure Landing Zone automation, OpenShift implementation, DevSecOps, and Kubernetes orchestration.
            </p>
            <p className="mt-4 ">
              Our commitment to excellence and industry-leading practices ensures that your cloud journey is not only seamless but also optimized for security, efficiency, and innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;