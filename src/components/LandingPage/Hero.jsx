import React from "react";
function Hero() {
  return (
    <section className=" bg-white relative mb-5 lg:mb-12    ">
      <div className="leaf relative top-5 -left-10">
        <img src="/top-left.png" alt="left-leaf" />
      </div>
      <div className="px-5 sm:px-10 flex flex-col-reverse md:px-20 lg:grid lg:grid-cols-2 gap-4 ">
        <div className="px-4">
          <div className="heading  w-full font-satoshi-medium">
            <h2 className="text-[2em] sm:text-[3em] lg:text-[2em] xl:text-[3em] leading-tight font-[500]">
              Awaken your senses <br /> with every sip and <br /> sprinkle
            </h2>
            <p className="mt-6 md:w-full xl:w-[70%] font-satoshi  font-light">
              Handpicked from the valleys of highrange, our teas and spices
              bring you the rich, unspoiled essence of the highlands.
            </p>
            <div className="buttons mt-7 flex lg:justify-start justify-center  gap-3">
              <button
                type="submit"
                className="flex gap-2 items-center px-3 py-3 lg:px-4 lg:py-4 rounded-full bg-gradient-to-r from-[#88B158] to-[#146B2D] text-white text-light font-satoshi font-medium tracking-tight transition duration-200 hover:opacity-90"
              >
                <i className="fa-brands fa-whatsapp text-sm md:text-2xl"></i>{" "}
                <span>Connect now</span>
              </button>

              <button className="px-3 py-3 lg:px-4 lg:py-4 flex text-[#146B2D] items-center gap-2">
                <i className="fa-solid fa-phone text-sm md:text-2xl"></i>
                <span>Call now</span>
              </button>
            </div>

            <div className="flex items-center mt-12 sm:justify-center lg:justify-start   ">
              <div className="flex -space-x-4">
                <img
                  className="w-10 h-10 md:w-13 md:h-13 object-cover rounded-full border-2 border-white shadow"
                  src="/im4.png"
                  alt="user1"
                />
                <img
                  className="w-10 h-10 md:w-13 md:h-13 object-cover rounded-full border-2 border-white shadow"
                  src="/im2.png"
                  alt="user2"
                />
                <img
                  className="w-10 h-10 md:w-13 md:h-13 object-cover rounded-full border-2 border-white shadow"
                  src="/im3.png"
                  alt="user3"
                />
                <img
                  className="w-10 h-10 md:w-13 md:h-13 object-cover rounded-full border-2 border-white shadow"
                  src="/im1.png"
                  alt="user4"
                />
              </div>

              <div className="border-l-[0.1em] ml-4 border-[#B6B6B6] h-12"></div>

              <div className="ml-6 ">
                <p className=" text-sm sm:text-base xl:text-lg font-light ">
                  <span className="text-[#146B2D] font-light font-satoshi">
                    1000+
                  </span>{" "}
                  happy customers
                  <br /> across the globe
                </p>
              </div>
            </div>
            <div className="leaf relative -top-10 -left-10">
              <img src="/leaf.png" className="rotate-270" alt="" />
            </div>
          </div>
        </div>
<div className="relative -mt-15 lg:-mt-10 xl:-mt-30 lg:w-full lg:h-full  xl:w-[95%] h-[95%]">
 
  <div className="absolute z-20 top-[25%] left-[13%] sm:top-[30%] sm:left-[20%] md:top-[25%] md:left-[20%] lg:top-[18%] lg:left-[10%] xl:top-40 xl:left-20
                  inline-block rounded-2xl px-2 py-1 sm:px-3 sm:py-2 lg:px-3 lg:py-3 xl:px-6 xl:py-4 
                  bg-white/10 backdrop-blur-md border border-white/20 shadow-lg font-satoshiItalic">
    <p className="text-gray-700 font-medium text-xs sm:text-sm  xl:text-lg">
      <span className="ms-5">
        India&apos;s <span className="bg-[linear-gradient(96.3deg,_#EA9E35_48.42%,_rgba(221,169,55,0.8)_74.76%)] bg-clip-text text-transparent">
          No.1
        </span>
      </span> <br />
      <span className="text-[#639B4B]">Wholesale & Retail</span> <br />
      <span className="text-gray-600 ms-5">Spices <span className="text-black">Seller</span></span>
    </p>
  </div>


  <div className="absolute inset-0 rounded-full opacity-60 blur-[100px] 
                  bg-[radial-gradient(circle,_#D4E157_0%,_#1D6D21_40%,_rgba(29,109,33,0.3)_60%,_transparent_100%)]"></div>

 
  <div className="relative z-10   w-full h-full">
    <img src="/left-image-fd.svg" alt="" />
  </div>
</div>

</div>
    
    </section>
  );
}

export default Hero;
