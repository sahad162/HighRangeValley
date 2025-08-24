import React from "react";

const brands = [
  "/oriyon.png",
  "/oriyon.png",
  "/oriyon.png",
  "/oriyon.png",
  "/oriyon.png",
  "/oriyon.png",
  "/oriyon.png",
  "/oriyon.png",
  "/oriyon.png",
  "/oriyon.png",
  "/oriyon.png",
];

const Suppliers = () => {
  return (
    <section className="relative py-20    font-satoshi bg-[#F7F9F3]">
      <div className="absolute -top-30 -left-40  w-[437px] h-[437px] rounded-full opacity-60 blur-[100px] bg-[radial-gradient(circle,_#D4E157_0%,_#1D6D21_40%,_rgba(29,109,33,0.3)_60%,_transparent_100%)] pointer-events-none "></div>
       <div className="absolute top-8 left-2 xl:left-12">
        <img src="/leaf.png" alt="leaf" className="hidden sm:block w-20 mb-3  " />
       </div>
       <div className="absolute right-0 top-0  ">
         <img src="/top right.png" alt="leaf" className=" w-50 sm:w-60 mb-3  " /></div>
      <div className="w-[90%] max-w-7xl mx-auto flex flex-wrap gap-10 justify-between sm:justify-center items-center sm:items-start">
        <div className="flex flex-col gap-10 lg:gap-20 min-w-[320px] flex-1">
          <h2 className="text-3xl mt-2 sm:mt-0 sm:text-4xl md:text-4xl font-[500] font-satoshi-medium  text-[#141414] leading-tight tracking-wider">
            We're the <br  /> Supplier to Top <br /> Brands
          </h2>
          <button className="bg-gradient-to-r from-[#7ec850] to-[#2e7d32] text-white rounded-full sm:px-10 py-3 px-9 sm:py-3 text-base font-satoshi font-medium shadow-md hover:opacity-90 transition  w-fit">
            Become a partner
          </button>
        </div>

        <div className="flex flex-col gap-8  md:me-10  w-full sm:p-0  md:w-[90%] lg:w-[50%]   ">
          <p className="text-lg font-light text-[#222]">
            Our dedication to quality and reliability has earned us the trust of
            some of the biggest names in the industry. As a preferred supplier,
            we provide these leading brands with top-quality spices, ensuring
            they meet their standards for excellence. Our long-standing
            partnerships reflect our reputation for consistency and exceptional
            service, making us a key player in their supply chain.
          </p>

          <div
            className="slider relative overflow-hidden h-[100px] mask-linear"
            style={{
              "--width": "250px",
              "--height": "100px",
              "--quantity": 10,
            }}
          >
            <div className="list relative flex w-[calc(250px*10)]">
              {brands.map((src, i) => (
                <div
                  className="item absolute w-[200px] sm:w-[250px] animate-brand-slide"
                  style={{
                    left: "100%",
                    animationDelay: `calc((10s / 10) * ${i} - 10s)`,
                    animationDuration: "10s",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                  }}
                  key={i}
                >
                  <img src={src} alt={`brand-${i}`} className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes brand-slide {
            from {
              left: 100%;
            }
            to {
              left: -250px;
            }
          }

          .animate-brand-slide {
            animation-name: brand-slide;
          }

          .slider:hover .item {
            animation-play-state: paused !important;
            filter: grayscale(1);
          }

          .slider .item:hover {
            filter: grayscale(0);
          }

          .mask-linear {
            -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
            mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
          }
        `}
      </style>
    </section>
  );
};

export default Suppliers;
