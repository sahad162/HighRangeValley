import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Cardamom", img: "/p3.jpg", category: "Signature Products" },
  { id: 2, name: "Pepper", img: "/p2.jpg", category: "Signature Products" },
  { id: 3, name: "Star Anise", img: "/p1.jpg", category: "Signature Products" },
  { id: 4, name: "Star Anise", img: "/p1.jpg", category: "Wholesale products" },
  { id: 5, name: "Pepper", img: "/p2.jpg", category: "Retail products" },
  { id: 6, name: "Cardamom", img: "/p3.jpg", category: "Dry Fruits" },
  { id: 7, name: "Cardamom", img: "/p3.jpg", category: "Signature Products" },
  { id: 8, name: "Pepper", img: "/p2.jpg", category: "Signature Products" },
  { id: 9, name: "Star Anise", img: "/p1.jpg", category: "Signature Products" },
];

const tabs = [
  "Signature Products",
  "Dry Fruits",
  "Wholesale products",
  "Retail products",
];

export default function Products() {
  const [activeTab,setActiveTab]=useState("Signature Products");
   const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );
  return (
    <section className="py-20 px-8 md:px-20 mb-20 bg-white" id="products">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-satoshi-medium  text-gray-900">
            Explore Our Products
          </h2>
          <p className="mt-9 font-satoshi text-gray-600 max-w-xl">
            We are one of the largest dealers of{" "}
            <span className="font-semibold">premium cardamom in Kerala</span>,
            handpicked from the valleys of highrange, with unspoiled essence.
          </p>
        </div>
        <Link to="/products"  className="border border-[#161716]  rounded-full  px-2 py-2 text-gray-700 hover:bg-gray-100 transition">
          <span className="font-satoshi  text-[#161716]">View all products →</span> 
        </Link>
      </div>

     
<div className="flex gap-6 mb-10 md:justify-center overflow-x-auto hide-scrollbar">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`shrink-0 px-4 py-2 rounded-full font-medium font-satoshi-medium transition-colors duration-300 ${
        activeTab === tab
          ? "bg-[#F3F5F4]"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {activeTab === tab ? (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88B158] to-[#146B2D]">
          {tab}
        </span>
      ) : (
        tab
      )}
    </button>
  ))}
</div>



      
   <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
  {filteredProducts.map((product) => (
    <div key={product.id} className="flex flex-col ">
      <div className="relative rounded-xl w-full h-full md:w-full xl:w-[80%] shadow-sm  overflow-hidden hover:shadow-sm transition md:h-100">
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
