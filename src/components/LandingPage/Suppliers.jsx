import React from "react";


const Suppliers = () => {
  return (
    <section className="relative py-20  font-satoshi bg-[#F7F9F3]">
      <div className="absolute -top-30 -left-40  w-[437px] h-[437px] rounded-full opacity-60 blur-[100px] bg-[radial-gradient(circle,_#D4E157_0%,_#1D6D21_40%,_rgba(29,109,33,0.3)_60%,_transparent_100%)] pointer-events-none "></div>
       <div className="absolute top-16 left-2 xl:left-10">
        <img src="/leaf.png" alt="leaf" className="hidden sm:block w-20 mb-3  " />
       </div>
       <div className="absolute right-0 top-0  ">
         <img src="/top right.png" alt="leaf" className=" w-50 sm:w-60 mb-3  " /></div>
      <div className=" px-10 lg:px-20 mt-10 mb-10 flex flex-wrap gap-10 justify-between sm:justify-center items-center sm:items-start">
        <div className="flex flex-col gap-10 lg:gap-20 min-w-[320px] flex-1">
          <h2 className="text-3xl mt-2 sm:mt-0 sm:text-4xl md:text-4xl font-[500] font-satoshi-medium  text-[#141414] leading-tight tracking-wider">
            We're the <br  /> Supplier to Top <br /> Brands
          </h2>
          <button className="bg-gradient-to-r from-[#7ec850] to-[#2e7d32] text-white rounded-full sm:px-10 py-3 px-9 sm:py-3 text-base font-satoshi font-medium shadow-md hover:opacity-90 transition  w-fit">
            Become a partner
          </button>
        </div>

        <div className="flex flex-col gap-8     w-full sm:p-0   lg:w-[50%]   ">
          <p className="text-base xl:text-lg font-light text-[#222]">
            Our dedication to quality and reliability has earned us the trust of
            some of the biggest names in the industry. As a preferred supplier,
            we provide these leading brands with top-quality spices, ensuring
            they meet their standards for excellence. Our long-standing
            partnerships reflect our reputation for consistency and exceptional
            service, making us a key player in their supply chain.
          </p>
          <div className="brand">
            <img src="/oriyon.png" alt="brand" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suppliers;
