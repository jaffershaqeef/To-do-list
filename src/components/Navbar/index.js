import React, { useState, useEffect, useRef } from "react";

function Navbar() {

    // for scrollbar
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    // for popup
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolledDown(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isSidebarOpen) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <nav className={`lg:px-14 md:px-10 px-5 fixed w-full lg:h-[100px] h-[70px] top-0 flex items-center z-50 transition-colors duration-300 ease-in-out text-white  ${isScrolledDown ? 'bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#F7F651] shadow-md ' : 'bg-transparent'}`}>
            <div className="relative hidden lg:flex justify-between w-full">

                {/* logo image */}
                <div className="">
                    <a href="#home">
                        <img
                            src="images/logo.png"
                            alt="Logo"
                            className="h-[23px] w-[100px] md:w-[250px] md:h-[46px] "
                        />
                    </a>
                </div>

                {/* navbar section */}
                <div className="lg:flex justify-around items-center w-[50%] hidden text-12px">
                    <a href="#home" className="  hover:text-[#f1f1f1]" aria-label="Home">
                        <p>HOME</p>
                    </a>
                    <a href="#about" className=" hover:text-[#f1f1f1]" aria-label="About Us">
                        <p> ABOUT US</p>
                    </a>
                    <a href="#services" className=" hover:text-[#f1f1f1]" aria-label="About Us">
                        <p> SERVICES</p>
                    </a>
                    <a href="#contact" className="  hover:text-[#f1f1f1]" aria-label="Contact Us">
                        <p>CONTACT US</p>
                    </a>
                </div>
            </div>

            {/* mobile navbar*/}
            <div className="grid grid-cols-3 items-center lg:hidden ">
                <div className="lg:hidden mt-2" onClick={toggleSidebar}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>

                </div>

                <div
                    ref={sidebarRef}
                    className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-r from-[#ED374D] via-[#FA793F] to-[#F7F651]   text-white transition-transform duration-300 ${isSidebarOpen
                        ? 'translate-x-0'
                        : 'translate-x-[-100%]'
                        }`}
                >
                    <ul className="mt-8 w-full px-2">
                        <div className="flex items-center justify-between">
                            <li className="p-4"><a href="#home" className="hover:text-[#f1f1f1]" aria-label="Home"><p>HOME</p></a></li>
                            <button className="text-black pr-3" onClick={toggleSidebar}>X</button>
                        </div>
                        <li className="p-4"><a href="#about" className="hover:text-[#f1f1f1]" aria-label="About Us"><p>ABOUT US</p></a></li>
                        <li className="p-4"><a href="#services" className="hover:text-[#f1f1f1]" aria-label="Services"><p>SERVICES</p></a></li>
                        <li className="p-4"><a href="#contact" className="hover:text-[#f1f1f1]" aria-label="Contact Us"><p>CONTACT US</p></a></li>
                    </ul>
                </div>

                {/* mobile logo */}
                <div className="">
                    <img className="" src="images/logo.png" alt="" />

                </div>
            </div>
        </nav>
    );
}

export default Navbar;