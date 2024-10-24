import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2qi1omj', 'template_lnwr4u9', form.current, {
        publicKey: '4XRPrEhAvRO9RiI2G',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('message sent')
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div id='contact' className="z-20 relative mt-10 lg:mt-20">
        {/* desktop and mobile-view background image */}
        <img src="images/footer.png" alt="" className="w-full h-[170vh] md:h-[120vh] lg:h-full" />

        <div className="absolute inset-0 flex flex-col items-center justify-start  text-white mt-5 lg:mt-10 lg:p-4">
          <h1 className="text-center xl:text-[24px] lg:text-[18px] text-[14px] ">A Passion for Discovery</h1>
          <p className="text-center xl:text-[22px] lg:text-[16px] text-[14px] w-full px-5 mt-4">
            Our vision is to revolutionize the way DevOps and IT teams utilize cloud effectively. It doesn't matter if your infrastructure runs on Amazon Web Services, Microsoft Azure, or even on Redhat OpenStack private cloud. Dev Consulting provides the optimal framework for cloud migration and cost-effective utilization.
          </p>

          {/* form-content */}
          <form ref={form} onSubmit={sendEmail} className="md:w-2/4 w-full mt-4 md:mx-auto  p-4 lg:px-14 md:space-y-4 space-y-2 ">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                className="text-black w-full  px-4 py-3 md:py-2 border rounded-2xl md:rounded-lg  focus:outline-none focus:ring-2 focus:ring-black-500"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                className="text-black w-full px-4 py-3 md:py-2 border rounded-2xl md:rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Your Subject"
                name="user_subject"
                className="text-black w-full px-4 py-3 md:py-2 border rounded-2xl md:rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                name="message"
                className="text-black w-full px-4 py-3 md:py-2 border rounded-2xl md:rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className=" w-full bg-[#462863] text-white px-4 py-3 md:py-2  rounded-2xl md:rounded-lg hover:bg-[#06050c]">
                Send Message
              </button>
            </div>
          </form>
          <h1 className='text-center my-5 xl:text-[24px] md:text-[18px] text-[16px]'>Reach Us</h1>
          <div className='md:flex text-center md:text-start w-full items-center justify-around xl:text-[20px] lg:text-[18px] text-[14px] lg:px-20
          '>
            <div className='lg:pl-20'>
              <p>Melbourne Office</p>
              <p>Bentleigh East, Victoria, 3165.</p>
              <p>+61 413 606 104</p>
              <p>info@devconsulting.com.au</p>
            </div>
            <div className='my-5'>
              <p>India Office</p>
              <p>Lakshmipuram, Kolathur,Chennai, 600 099.</p>
              <p>+91 98408 40030</p>
              <p>+91 90801 44794</p>
              <p>veera@devconsulting.com.au</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;