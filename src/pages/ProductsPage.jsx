import React, { useState,useEffect } from 'react';
import { IndianRupee, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCategories,useProducts } from '../hooks/useProduct';

function ProductsPage() {
  const [activeTab, setActiveTab] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const {data:categories}=useCategories();
  const {data:products=[]}=useProducts();

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  

    useEffect(()=>{
      if(categories?.length>0){
        setActiveTab(categories[0]);
      }
      
    },[categories]);

  // Filter products by tab + search
  const filteredProduct = products.filter(
    (product) =>
      product.categories?.some(cat => cat.id === activeTab?.id) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
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

        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="leading-snug">
            <span className="font-satoshi-medium text-2xl md:text-3xl lg:text-5xl text-black block mb-3">
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

      {/* Tabs + Search */}
      <section className="bg-white py-25 lg:py-40">
        <div className="flex justify-between gap-3 mb-10 px-8 lg:px-20 overflow-x-auto hide-scrollbar">
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

          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
            <input
              type="text"
              placeholder="Search Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="font-satoshi pl-9 pr-3 py-2 w-48 md:w-64 rounded-full bg-gray-50 text-sm md:text-base border border-gray-200 focus:outline-none"
            />
          </div>
        </div>

        <div className="px-8 gap-6 lg:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {filteredProduct.length > 0 ? (
            filteredProduct.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="flex flex-col">
                <div className="relative rounded-xl w-full h-[212px] md:w-full xl:w-full shadow-sm overflow-hidden hover:shadow-sm transition md:h-100">
                  <img
                    src={product.images[0].image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#FAFCFB1A]"></div>
                </div>

                <div className="mt-3 flex flex-col sm:flex-row justify-between w-full items-start sm:items-center">
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium font-satoshi-medium text-gray-800">
                    {product?.name}
                  </h3>

                  <div className="mt-2 sm:mt-0 flex items-center gap-1 ">
                    <span className="text-[#0D7E2D] text-[10px] sm:text-sm lg:text-base font-satoshi-medium">
                      {product?.offer_percentage}% OFF
                    </span>
                    <span className="flex items-center text-xs sm:text-sm lg:text-base font-satoshi-medium">
                      <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                      {product?.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 font-satoshi-medium text-lg">
                No products found 
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
