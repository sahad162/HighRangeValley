import React, { useState } from "react";
import "../../App.css";
import { ChevronDown, ChevronUp } from "lucide-react";

function Gettoknow() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative min-h-screen font-satoshi">
      <div className="hidden lg:block relative min-h-screen">
        <div
          className="absolute inset-0 bg-[url('/bg-image/bg-image-get.jpg')] bg-cover bg-center
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_50%)]"
        />

        <div className="relative z-10 flex justify-end px-6 py-10">
          <div
            className="lg:mt-20 xl:mt-28 lg:me-10 xl:me-40
            lg:max-w-md xl:max-w-lg w-full bg-white/95
            rounded-2xl shadow-[0px_8px_40px_rgba(0,0,0,0.15)] p-6 md:p-8"
          >
            <h2 className="text-xl font-medium mb-4">Get to know us</h2>

            <p className="text-gray-700 text-sm lg:text-base font-satoshi leading-6">
              At <span className="font-semibold">Highrange Valley</span>, we
              bring the authentic taste of{" "}
              <span className="font-semibold">
                {" "}
                Kerala’s finest spices and natural products{" "}
              </span>{" "}
              to the world. Nestled in the spice-rich region of Idukki, we have
              built a reputation for excellence in sourcing and supplying the{" "}
              <span className="font-semibold">
                {" "}
                highest quality cardamom, tea, coffee, honey, dry fruits, and
                other spices.{" "}
              </span>{" "}
              Whether you're a <span className="font-semibold">
                wholesaler
              </span>{" "}
              looking for bulk quantities or a retailer seeking premium goods,{" "}
              <span className="font-semibold">Highrange Valley</span> is your
              trusted partner.{" "}
            </p>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expanded
                  ? "max-h-[500px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 text-sm xl:text-base leading-6">
                Driven by a passion for quality and sustainability, we work
                closely with local farmers to provide fresh, handpicked produce
                that showcases the true essence of our region. We are committed
                to meeting the diverse needs of our clients while ensuring that
                each product reaches you in its purest and most flavourful form.
              </p>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-green-600 font-medium flex items-center gap-1 hover:underline"
            >
              {expanded ? (
                <div className=" flex items-center gap-1">
                  Read less <ChevronUp />
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  Read more <ChevronDown />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="mobile lg:hidden ">
        <div className=" flex justify-center mb-5 w-full ">
          <div className=" bg-white/95 p-6 max-w-[90%] sm:max-w-sm md:max-w-2xl rounded-2xl shadow-xl ">
            <h2 className="text-xl font-medium font-satoshi-medium text-gray-900 mb-4">
              Get to know us
            </h2>
            {/* Paragraph */}
            <p className="text-gray-700 text-sm lg:text-base font-satoshi leading-6">
              At <span className="font-semibold">Highrange Valley</span>, we
              bring the authentic taste of{" "}
              <span className="font-semibold">
                {" "}
                Kerala’s finest spices and natural products{" "}
              </span>{" "}
              to the world. Nestled in the spice-rich region of Idukki, we have
              built a reputation for excellence in sourcing and supplying the{" "}
              <span className="font-semibold">
                {" "}
                highest quality cardamom, tea, coffee, honey, dry fruits, and
                other spices.{" "}
              </span>{" "}
              Whether you're a <span className="font-semibold">
                wholesaler
              </span>{" "}
              looking for bulk quantities or a retailer seeking premium goods,{" "}
              <span className="font-semibold">Highrange Valley</span> is your
              trusted partner.{" "}
            </p>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expanded
                  ? "max-h-[500px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 text-sm xl:text-base leading-6">
                Driven by a passion for quality and sustainability, we work
                closely with local farmers to provide fresh, handpicked produce
                that showcases the true essence of our region. We are committed
                to meeting the diverse needs of our clients while ensuring that
                each product reaches you in its purest and most flavourful form.
              </p>
            </div>
            {/* Toggle Button */}{" "}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-green-600 font-medium flex items-center gap-1 hover:underline"
            >
              {expanded ? "Read less" : "Read more"}
              <span>{expanded ? <ChevronUp /> : <ChevronDown />}</span>
            </button>
          </div>
        </div>
        <div className='min-h-screen bg-[url("/bg-image/mobile_bg.jpg")] bg-no-repeat bg-cover bg-center relative inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_40%)] '></div>
      </div>
    </section>
  );
}

export default Gettoknow;
