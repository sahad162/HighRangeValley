import React from 'react'
function Footer() {
  return (
    <footer className="bg-[#030703]  font-satoshi text-white/60 relative overflow-x-hidden ">
      <div className="absolute -top-40 -right-20  w-[437px] h-[437px] rounded-full opacity-60 blur-[100px] bg-[radial-gradient(circle,_#D4E157_0%,_#1D6D21_40%,_rgba(29,109,33,0.3)_60%,_transparent_100%)] pointer-events-none "></div>

      <div className=" relative z-10 max-w-7xl mx-auto  px-4 sm:px-8 py-12 ">
        <div className="flex flex-col  items-center ">
          <div className="w-[122px] h-[140px]">
            <img
              src="/Footer_logo.png"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <nav className="mt-9   sm:w-[50%] w-full  ">
            <ul className="flex flex-wrap justify-between text-base sm:text-md sm:font-normal ">
              <li className="cursor-pointer hover:text-white">About us</li>
              <li className="cursor-pointer hover:text-white">Our Products</li>
              <li className="cursor-pointer hover:text-white">Testimonials</li>
              <li className="cursor-pointer hover:text-white">Contact us</li>
            </ul>
          </nav>
        </div>

        <div className="w-full h-px bg-white/10 my-10"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-6">
          <span>Highrangevalley @ 2025 All rights reserved</span>
          <div className="flex space-x-12 text-lg">
            <i className="cursor-pointer fa-brands fa-youtube hover:text-red-500"></i>
            <i className="cursor-pointer fa-brands fa-instagram hover:text-pink-500"></i>
            <i className="cursor-pointer fa-brands fa-facebook-f hover:text-blue-500"></i>
            <i className="hidden sm:block cursor-pointer fa-brands fa-threads hover:text-gray-300/40"></i>
            <i className="hidden sm:block cursor-pointer fa-brands fa-x-twitter hover:text-white/30"></i>
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
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
