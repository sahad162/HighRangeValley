import React, { useRef } from "react";
import useRev from "../../hooks/useRev";

import SkeletonCard from "../SkeletonCard";

export default function Testimonials() {
  const scrollRef = useRef(null);
  const { data, isLoading, isError } = useRev();

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

  if (isLoading) {
    return (
      <section className="py-20 px-10 lg:px-20 max-w-8xl mx-auto">
        <h2 className="text-2xl md:text-[3rem] font-medium mb-12">
          Hear what our customers say
        </h2>

        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar cursor-grab select-none"
        >
          <div className="flex gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-20 px-10 lg:px-20 text-red-600">
        Failed to load testimonials.
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className="py-20 px-10 lg:px-20 max-w-8xl mx-auto">
        <h2 className="text-2xl md:text-[3rem] font-medium font-satoshi-medium mb-12">
          Hear what our customers say’s
        </h2>
        <div className="text-center">No testimonials available.</div>
      </section>
    );
  }

  return (
    <section
      className="py-20 px-10 lg:px-20 max-w-8xl  mx-auto"
      id="testimonials"
    >
      <h2 className="text-2xl md:text-[3rem] font-medium font-satoshi-medium mb-12">
        Hear what our customers say’s
      </h2>

      <div
        ref={scrollRef}
        className="overflow-x-auto hide-scrollbar cursor-grab select-none"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="flex py-2 px-2 gap-6">
          {data.map((t) => (
            <div
              key={t.id}
              className="max-w-[285px] md:min-w-[350px] lg:min-w-[380px] 
                         bg-white rounded-xl border border-gray-200 
                         shadow-md flex flex-col justify-between p-6 flex-shrink-0"
            >
              <span className="text-6xl text-black">“</span>

              <p className="text-[#282928] xl:px-2 text-sm md:text-[1.2rem] leading-relaxed text-left font-satoshi flex-1">
                {t.comment}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7ec850] to-[#2e7d32] text-white flex items-center justify-center text-xl font-bold">
                  {t.customer_name.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm lg:text-base font-satoshi font-medium">
                  {t.customer_name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
