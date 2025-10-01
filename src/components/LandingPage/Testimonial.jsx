import React, { useRef } from "react";

const testimonials = [
  {
    text: `"Exceptional Quality and Service!"
    "We've been sourcing spices from Highrange Valley for years, and the quality never fails to impress."`,
    name: "Seena Ponnachan",
    img: "/testpng.png",
  },
  {
    text: `"Consistent and Reliable!"
    Our business relies on consistent quality and timely shipments."`,
    name: "Seena Ponnachan",
    img: "/testpng.png",
  },
  {
    text: `"Our Go-To Wholesale Supplier!"
    Highrange Valley offers premium spices with excellent service."`,
    name: "Seena Ponnachan",
    img: "/testpng.png",
  },
  {
    text: `"Amazing Experience!"
    Always quick responses and professional handling of our needs."`,
    name: "Seena Ponnachan",
    img: "/testpng.png",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const onMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("cursor-grabbing");
    scrollRef.current.classList.remove("cursor-grab");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.add("cursor-grab");
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const onMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.add("cursor-grab");
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-20 px-10 lg:px-20 max-w-8xl mx-auto" id="testimonials">
      <h2 className=" text-2xl  md:text-[3rem] l font-medium font-satoshi-medium mb-12">
        Hear what our customers say’s
      </h2>

      <div
        ref={scrollRef}
        className="overflow-x-auto hide-scrollbar  smooth-scroll  cursor-grab select-none"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="flex gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="max-w-[290px] md:min-w-[350px] lg:min-w-[380px] 
                         md:max-w-[380px] bg-white rounded-xl border border-gray-200 
                         shadow-md flex flex-col justify-between p-6 flex-shrink-0"
            >
              <span className="text-6xl text-black">“</span>
              <p className="text-[#282928] text-sm md:text-[1.2rem] leading-relaxed text-center font-satoshi flex-1">
                {t.text}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm lg:text-base font-satoshi font-medium">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
