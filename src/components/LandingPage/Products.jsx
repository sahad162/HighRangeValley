import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";

const products = [
  { id: 1, name: "Cardamom", img: "/p3.jpg", category: "Wholesale Products" },
  { id: 2, name: "Pepper", img: "/p2.jpg", category: "Wholesale Products" },
  { id: 3, name: "Star Anise", img: "/p1.jpg", category: "Wholesale Products" },
  { id: 4, name: "Star Anise", img: "/p1.jpg", category: "Wholesale Products" },
  { id: 5, name: "Pepper", img: "/p2.jpg", category: "Retail products" },
  { id: 6, name: "Cardamom", img: "/p3.jpg", category: "Retail products" },
  { id: 7, name: "Cardamom", img: "/p3.jpg", category: "Wholesale Products" },
  { id: 8, name: "Pepper", img: "/p2.jpg", category: "Wholesale Products" },
  { id: 9, name: "Star Anise", img: "/p1.jpg", category: "Retail products" },
];

const tabs = [
  "Wholesale Products",
  "Retail products",
];

export default function Products() {
  const [activeTab,setActiveTab]=useState("Wholesale Products");
   const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );
  return (
    <section className="py-20 px-8 lg:px-20 mb-20 bg-white" id="products">
 <div className="flex lg:max-w-7xl   flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
  <div>
    <h2 className="text-[2rem] md:text-[3rem] font-satoshi-medium text-gray-900">
      Explore Our Products
    </h2>
    <p className="mt-9 font-satoshi text-[1.1rem] text-gray-600 max-w-xl">
      We are one of the largest dealers of{" "}
      <span className="font-semibold">premium cardamom in Kerala</span>,
      handpicked from the valleys of highrange, with unspoiled essence.
    </p>
  </div>

<Link
  to="/products"
  className="mt-3 self-start lg:self-center border border-[#161716] rounded-full px-4 py-2 text-sm md:px-6 md:py-3 lg:text-base text-gray-700 hover:bg-gray-100 transition"
>
  <span className="font-satoshi text-[#161716]">
    View all products →
  </span>
</Link>

</div>


     
<div className="flex justify-between  gap-3 mb-10  overflow-x-auto hide-scrollbar">
  <div className='flex gap-3'>
  {tabs.map((tab) => (
  <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={`shrink-0 px-3 md:text-base sm:text-sm text-sm md:px-4 py-2 rounded-full font-medium font-satoshi-medium transition-colors duration-300 ${
      activeTab === tab
        ? "bg-gradient-to-r from-[#88B158] via-[#88B158] to-[#146B2D] text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
      {activeTab === tab ? (
        <span className=" bg-clip-text md:text-base sm:text-sm text-sm text-white">
          {tab}
        </span>
      ) : (
        tab
      )}
    </button>
  ))}
  </div>
   <div className="filter flex gap-2 me-0 xl:me-22  items-center ">
      <SlidersHorizontal className="w-4 h-4" />
    <span className="hidden md:block font-satoshi text-black">Filter by </span>
  </div>
</div>



      
   <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 xl:gap-6 ">
  {filteredProducts.map((product) => (
    <div key={product.id} className="flex flex-col ">
      <div className="relative rounded-xl w-full h-[212px] md:w-full xl:w-[80%] shadow-sm  overflow-hidden hover:shadow-sm transition md:h-100">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
        />
          <div className="absolute inset-0 bg-[#FAFCFB1A]"></div>
      </div>

     
      <div className="mt-3  w-full ">
        <h3 className="text-lg font-medium font-satoshi-medium text-gray-800">
          {product.name}
        </h3>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}
