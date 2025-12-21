import React from "react";

function PageNotFound() {
  return (
    <div className="relative bg-[url('/bg-image/mobile-page-not-found.jpg')] md:bg-[url('/bg-image/page-not-found.jpg')]  bg-no-repeat bg-[length:100%_100%] md:bg-cover md:bg-center min-h-screen flex justify-center items-end">
      <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      <div className=" w-full flex flex-col justify-center items-center mb-25 gap-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-satoshi-medium text-white">Page Not Found</h1>
      <p className="text-xs md:text-base text-[#FFFFFFCC] font-light font-satoshi">Even our cardamom couldn’t locate this one. Try again later</p>
      </div>
    </div>
  );
}

export default PageNotFound;
