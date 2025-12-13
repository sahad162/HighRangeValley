import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useProductDetail } from "../hooks/useProduct";

const IndividualPage = () => {
  const { id } = useParams();
  const { data } = useProductDetail(id);
  const [current, setCurrent] = useState(0);
  const images = data?.images || [];

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const selectImage = (index) => {
    setCurrent(index);
  };

  return (
    <section className="min-h-screen  bg-white flex items-center justify-center py-20 lg:px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl ">
        <div>
          <div className="relative  h-[400px] w-full">
            <img
              key={current}
              src={images[current]?.image}
              alt="Cardamom"
              className="rounded-xl  object-cover w-full h-full animate-slideIn"
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full shadow-md p-2"
              onClick={next}
            >
              <ChevronRight className="w-5 h-5 text-black/50" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {images.map((img, index) => (
              <img
                key={img.id}
                src={img.image}
                alt={`Thumb ${index}`}
                onClick={() => selectImage(index)}
                className={`w-full h-32 object-cover rounded-xl cursor-pointer border-2 border-transparent`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col  justify-center  lg:w-[90%]">
          <span className="text-[#0D7E2D] font-satoshi bg-[#E5F1E9] px-4 py-1 rounded-full text-sm font-medium w-fit mb-2">
            In Stock
          </span>
          <div className="title flex justify-between">
            <h1 className="text-3xl font-medium font-satoshi-medium">
              {data?.name}
            </h1>
            <p className="text-xl font-semibold font-satoshi-medium text-gray-800 mt-1">
              ₹ {data?.actual_price}{" "}
              <span className="text-base font-satoshi">/Kg</span>
            </p>
          </div>

          <h2 className="mt-5 font-medium font-satoshi-medium text-lg">
            Product Details
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed font-satoshi text-justify">
            {data?.details}
          </p>

          <div className="mt-16 flex flex-col  gap-4">
            <button className="flex-1 bg-gradient-to-r from-[#88B158] to-[#146B2D] text-white py-3 rounded-full font-medium shadow-md hover:opacity-90 transition">
              <span className="font-satoshi-medium">Buy Now</span>
            </button>

            <Link
              to="/"
              className="flex-1 flex justify-center items-center border border-[#1A6F2F] py-3 rounded-full font-medium transition"
            >
              <span className="font-satoshi-medium text-transparent bg-clip-text bg-gradient-to-r from-[#88B158] to-[#146B2D]">
                Connect us
              </span>
            </Link>
          </div>

          <div className="mt-10 lg:mt-30 xl:mt-40 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6">
            <div className="flex items-center gap-3 ">
              <div className="border-1 border-[#282928] px-2 py-2 rounded-lg">
                <Phone className="w-5 h-5 text-gray-700" />
              </div>

              <div>
                <p className="text-xs uppercase text-black font-satoshi-medium">
                  Phone
                </p>
                <p className="text-sm font-medium font-satoshi">
                  +91 9847 017714
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 ">
              <div className="border-1 border-[#282928] px-2 py-2 rounded-lg">
                <Mail className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-xs uppercase text-black font-satoshi-medium">
                  Email
                </p>
                <p className="text-sm font-satoshi font-medium">
                  highrangevalleyinfo@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualPage;
