import React from 'react'
import { useState } from 'react';
import { IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';


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

function ProductsPage() {
  const [activeTab,setActiveTab]=useState("Signature Products");
  const filteredProducts = products.filter(
      (product) => product.category === activeTab
    );
  return (
    <div className="mt-17 relative">
      <section className="relative text-center bg-[url('/image_bg.jpg')] bg-cover bg-center bg-no-repeat py-30">
       
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md"></div>

        <div className="absolute -top-10 -left-3">
          <img src="/top-left.png" alt="left-leaf" />
        </div>

 <div className="absolute inset-0 overflow-hidden">
  <div className="absolute -top-16 left-[30%] w-[500px] h-[500px] rounded-full blur-[200px] opacity-60 bg-[linear-gradient(90deg,#66BB6A,#E6EE9C)]"></div>
</div>



        {/* Content */}
        <div className="relative z-10">
          <h1 className="leading-snug">  
            <span className="font-satoshi-medium  text-2xl md:text-3xl lg:text-5xl text-black block mb-3">
              Explore Our Premium Spices
            </span>
            <span className="font-satoshi-medium text-2xl md:text-3xl lg:text-5xl text-black block">
              Sourced From Trusted Farmers
            </span>
          </h1>

          {/* Spice icons */}
          <div className="flex justify-center gap-3 mt-8"> 
            <img src="/p1.jpg" alt="Spice 1" className="w-9 h-9 md:w-10 md:h-10 border-2 border-white rounded-full shadow-lg" />
            <img src="/p2.jpg" alt="Spice 2" className="w-14 h-14 md:w-16 md:h-16 border-2 border-white rounded-full shadow-lg" />
            <img src="/p3.jpg" alt="Spice 3" className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-full shadow-lg" />
            <img src="/p1.jpg" alt="Spice 4" className="w-16 h-16 md:w-20 md:h-20 border-2 border-white rounded-full shadow-lg" />
            <img src="/p2.jpg" alt="Spice 5" className="w-9 h-9 md:w-10 md:h-10 border-2 border-white rounded-full shadow-lg" />
          </div>
        </div>
         <div className="absolute -bottom-10 right-10 z-20">
        <img src="/leaf.png" alt="leaf" className=" w-24" />
      </div>
      </section>

     

<section className='bg-white py-25 lg:py-40'>
            
<div className="flex gap-3 mb-10 px-8 lg:px-20 overflow-x-auto hide-scrollbar">
  {tabs.map((tab) => (
  <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={`shrink-0 px-3 md:px-4 py-2 rounded-full font-medium font-satoshi-medium transition-colors duration-300 ${
      activeTab === tab
        ? "bg-gradient-to-r from-[#88B158] via-[#88B158] to-[#146B2D] text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
      {activeTab === tab ? (
        <span className=" bg-clip-text md:text-base text-sm text-white">
          {tab}
        </span>
      ) : (
        tab
      )}
    </button>
  ))}
</div>

    
   <div className="px-8 gap-3 lg:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {filteredProducts.map((product) => (
    <Link key={product.id} to={'/product'} className="flex flex-col ">
      <div className="relative rounded-xl w-full h-[212px] md:w-full xl:w-[80%] shadow-sm  overflow-hidden hover:shadow-sm transition md:h-100">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
        />
          <div className="absolute inset-0 bg-[#FAFCFB1A]"></div>
      </div>

     
    <div className="mt-3 flex flex-col sm:flex-row justify-between w-full items-start sm:items-center">
  <h3 className="text-sm sm:text-base lg:text-lg font-medium font-satoshi-medium text-gray-800">
    {product.name}
  </h3>

  <div className="mt-2 sm:mt-0 flex items-center gap-2 xl:me-17">
    <span className="text-[#0D7E2D] text-[10px] sm:text-sm lg:text-base font-satoshi-medium">
      10% OFF
    </span>
    <span className="flex items-center text-xs sm:text-sm lg:text-base font-satoshi-medium">
      <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1" />
      740
    </span>
  </div>
</div>

    </Link>
  ))}
</div>

      </section>
    </div>
  )
}

export default ProductsPage;
