import React from 'react'
import { Crown, Truck, Sliders } from "lucide-react";

function Why() {
    const features = [
    {
      icon: <Crown className="w-4 h-4 text-[#303331] " />,
      title: "Premium quality",
      description:
        "Our premium spices sourced from trusted farmers, rigorously tested for maximum flavour, aroma, and quality.",
    },
    {
      icon: <Truck className="w-4 h-4 text-[#303331] " />,
      title: "Global shipping",
      description:
        "Fast, secure, and reliable global shipping with flexible options and competitive rates. We make it easy to get the spices you need.",
    },
    {
        icon: <Sliders className="w-4 h-4 text-[#303331]" />,
      title: "Personalised service",
      description:
        "From custom blending to flexible packaging, we're committed to helping you achieve your culinary goals.",
    },
  ];
  return (
    <div className='mb-12'>
    <section className=' mt-5 '>
        <div className="max-w-5xl  mx-auto ">
            <h1 className=' text-center text-[1.8rem] md:text-[3rem] lg:text-[3rem] font-satoshi-medium'>Why Highrange Valley?</h1>
            <p className='text-sm px-4 lg:text-lg  text-center text-light font-satoshi text-[#282928] mt-5'>We are one of the <span className='font-satoshi-medium'>largest dealers of premium cardamom in Kerala</span>,<br />handpicked from the valleys of highrange, with unspoiled essence.</p>
        </div> 

      
    </section>
       <section className="py-12 bg-white relative ">
      <div className=" px-4 md:px-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-3xl shadow-xs border border-[#E8EBE9] bg-white p-6 text-center transition hover:shadow-sm"
          >
            <div className="heading flex items-center gap-4">
            <div className="flex justify-center items-center bg-[#F5F7F6] rounded-full w-8 h-8 ">{feature.icon}</div>
            <h3 className="text-lg xl:text-xl font-satoshi-medium">{feature.title}</h3>
            </div>
          
            <p className="text-gray-600 md:text-sm lg:text-base  xl:text-lg text-left mt-5 font-satoshi text-light">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Why
