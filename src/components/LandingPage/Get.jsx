











import React from 'react'
import { useState } from 'react';

function Get() {
     const [expanded, setExpanded] = useState(true);
  return (
    <section className='min-h-screen'>
    <div className='lg:bg-[url("/third_bg.jpg")] bg-no-repeat bg-cover bg-center [mask-image:linear-gradient(to_bottom,transparent,black)]'>
       <div className="  hidden  lg:flex lg:flex-row lg:justify-end">
       <div className=" max-w-lg  bg-white rounded-2xl shadow-[0px_8px_40px_rgba(0,0,0,0.15)] p-6 md:p-8">
      {/* Title */}
      <h2 className="text-xl font-medium font-satoshi-medium text-gray-900 mb-4">
        Get to know us
      </h2>

      {/* Paragraph */}
      <p className="text-gray-700 leading-6">
        At <span className="font-semibold">Highrange Valley</span>, we bring the
        authentic taste of{" "}
        <span className="font-semibold">
          Kerala’s finest spices and natural products
        </span>{" "}
        to the world. Nestled in the spice-rich region of Idukki, we have built
        a reputation for excellence in sourcing and supplying the{" "}
        <span className="font-semibold">
          highest quality cardamom, tea, coffee, honey, dry fruits, and other
          spices.
        </span>{" "}
        Whether you're a <span className="font-semibold">wholesaler</span>{" "}
        looking for bulk quantities or a retailer seeking premium goods,{" "}
        <span className="font-semibold">Highrange Valley</span> is your trusted
        partner.
      </p>

      {expanded && (
        <p className="text-gray-700 leading-6 mt-4">
          Driven by a passion for quality and sustainability, we work closely
          with local farmers to provide fresh, handpicked produce that showcases
          the true essence of our region. We are committed to meeting the
          diverse needs of our clients while ensuring that each product reaches
          you in its purest and most flavourful form. Our focus on{" "}
          <span className="font-semibold">
            customer satisfaction, consistency and ethical sourcing
          </span>{" "}
          makes us a reliable choice for businesses around the globe.
        </p>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-green-600 font-medium flex items-center gap-1 hover:underline"
      >
        {expanded ? "Read less" : "Read more"}
        <span>{expanded ? "▲" : "▼"}</span>
      </button>
    </div>


       </div>
    </div>

   
    
    </section>
  )
}

export default Get
