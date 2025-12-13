import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useCategories, useProducts } from "../../hooks/useProduct";




export default function Products() {
  const [activeTab, setActiveTab] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const {data:categories}=useCategories();
  const {data:products=[]}=useProducts();
  
  

  useEffect(()=>{
    if(categories?.length>0){
      setActiveTab(categories[0]);
    }
    
  },[categories]);

  
  // Filter products by tab + search
  const filteredProducts = products.filter(
    (product) =>
      product.categories?.some(cat => cat.id === activeTab?.id) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 px-8 lg:px-20 mb-20 bg-white" id="products">
      {/* Header */}
      <div className="flex  flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
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

      {/* Tabs + Search */}
      <div className="flex justify-between  gap-3 mb-10 overflow-x-auto hide-scrollbar">
        {/* Tabs */}
        <div className="flex gap-3">
          {categories?.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 px-3 md:text-base sm:text-sm text-sm md:px-4 py-2 rounded-full font-medium font-satoshi-medium transition-colors duration-300 ${
                activeTab?.id === tab.id
                  ? "bg-gradient-to-r from-[#88B158] via-[#88B158] to-[#146B2D] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {activeTab?.id === tab.id ? (
                <span className="bg-clip-text md:text-base sm:text-sm text-sm text-white">
                  {tab.name}
                </span>
              ) : (
                tab.name
              )}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="relative hidden md-block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 font-bold text-black" />
          <input
            type="text"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="font-satoshi pl-9 pr-3 py-2 w-48 md:w-64 rounded-full bg-gray-50 text-sm md:text-base border border-gray-200 focus:outline-none
            "
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 xl:gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0,6).map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="relative rounded-xl w-full h-[212px] md:w-full xl:w-full shadow-sm overflow-hidden hover:shadow-sm transition md:h-100">
                <img
                  src={product.images[0].image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#FAFCFB1A]"></div>
              </div>
              <div className="mt-3 w-full">
                <h3 className="text-lg font-medium font-satoshi-medium text-gray-800">
                  {product.name}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}
