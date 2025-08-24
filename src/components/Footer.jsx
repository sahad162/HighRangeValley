import React from 'react'
function Footer() {
  return (
    <footer className="bg-[#030703]  font-satoshi text-white/60 relative overflow-x-hidden ">
      <div className="absolute -top-40 -right-20 md:-right-80  w-[90%] h-[80%] md:w-[70%] md:h-[70%] rounded-full opacity-60 blur-[100px] bg-[radial-gradient(circle,_#D4E157_0%,_#1D6D21_40%,_rgba(29,109,33,0.3)_60%,_transparent_100%)] pointer-events-none "></div>

      <div className=" relative z-10 max-w-7xl mx-auto  px-4 sm:px-8 py-12 ">
        <div className="flex flex-col  items-center ">
          <div className="w-[15%] h-[15%] md:w-[15%]  lg:w-[8%] lg:h-[10%] ">
            <img
              src="/Footer_logo.png"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <nav className="mt-9   sm:w-[50%] w-full  ">
            <ul className="flex flex-wrap justify-between text-sm sm:text-md sm:font-normal ">
              <li className="cursor-pointer text-white hover:text-white/50">About us</li>
              <li className="cursor-pointer text-white hover:text-white/50">Our Products</li>
              <li className="cursor-pointer text-white hover:text-white/50">Testimonials</li>
              <li className="cursor-pointer text-white hover:text-white/50">Contact us</li>
            </ul>
          </nav>
        </div>

        <div className="w-full h-px bg-white/10 my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-6">
          <span className='font-satoshi text-light text-white/80'>Highrangevalley @ 2025 All rights reserved</span>
          <div className="flex space-x-12 text-lg">
            <i className="cursor-pointer fa-brands fa-youtube text-white hover:text-red-500"></i>
            <i className="cursor-pointer fa-brands fa-instagram text-white hover:text-pink-500"></i>
            <i className="cursor-pointer fa-brands fa-facebook-f text-white hover:text-blue-500"></i>
            <i className="hidden md:block  cursor-pointer fa-brands fa-threads text-white hover:text-gray-300/40"></i>
            <i className="hidden md:block cursor-pointer fa-brands fa-x-twitter text-white hover:text-white/30"></i>
          </div>
        </div>
      </div>

      <div className="w-full mt-2 lg:mt-10">
        <img
          src="/footer_name.png"
          alt="footer-name"
          className="w-full h-auto object-cover"
        />
      </div>
    </footer>
  );
}

export default Footer;
