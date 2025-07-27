import React from "react";

export default function Connect() {
  return (
   <section className="flex flex-col md:flex-row justify-center items-stretch gap-10 px-6 md:px-[100px] py-20 bg-[#F7F9F3]">
  {/* Left Info Column */}
  <div className="flex flex-col justify-between max-w-xl  w-full ">
    <div className="space-y-6 mt-8">
      <h2
        className="font-satoshi font-medium text-4xl md:text-[48px] leading-tight text-[#141414]"
        style={{ fontFeatureSettings: "'pnum' on, 'lnum' on" }}
      >
        Get connected now
      </h2>
      <p
        className="font-satoshi text-lg md:text-[20px] text-[#282928] leading-[30px]"
        style={{ fontFeatureSettings: "'pnum' on, 'lnum' on" }}
      >
        Our contact information is just a click away. Get in touch with us today and let’s start a conversation that could change the game!
      </p>
    </div>

    <div className="flex flex-col gap-6 mb-10 mt-10 md:mt-0">
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F7F9F3] border border-[#EFEFEF] text-[#232423] text-lg">
          <i className="fa-solid fa-phone"></i>
        </span>
        <span className="font-satoshi text-[18px] font-medium text-[#282928]">+91 9847 017714</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F7F9F3] border border-[#EFEFEF] text-[#232423] text-lg">
          <i className="fa-solid fa-envelope"></i>
        </span>
        <span className="font-satoshi text-[18px] font-medium text-[#282928]">highrangevalleyinfo@gmail.com</span>
      </div>
    </div>
  </div>

  {/* Right Form */}
  <form className="flex flex-col justify-between w-full max-w-xl gap-6 md:p-8 ">
    <div className="flex flex-col gap-6">
      <div className="flex items-center border border-[#EAECE9] rounded-[9px] h-[54px] px-4">
        <i className="fa-solid fa-user text-gray-500 mr-3"></i>
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-transparent outline-none border-none text-[#717171] text-[18px] font-satoshi leading-[28px] placeholder-[#717171]"
        />
      </div>
      <div className="flex items-center border border-[#EAECE9] rounded-[9px] h-[54px] px-4">
        <i className="fa-solid fa-phone text-gray-500 mr-3"></i>
        <input
          type="text"
          placeholder="Phone"
          className="w-full bg-transparent outline-none border-none text-[#717171] text-[18px] font-satoshi leading-[28px] placeholder-[#717171]"
        />
      </div>
      <div className="flex items-center border border-[#EAECE9] rounded-[9px] h-[54px] px-4">
        <i className="fa-solid fa-envelope text-gray-500 mr-3"></i>
        <input
          type="email"
          placeholder="Email id"
          className="w-full bg-transparent outline-none border-none text-[#717171] text-[18px] font-satoshi leading-[28px] placeholder-[#717171]"
        />
      </div>
      <div className="border border-[#EAECE9] rounded-[9px] px-4 flex items-start">
        <textarea
          className="w-full bg-transparent outline-none border-none text-[#717171] text-[18px] font-satoshi leading-[28px] placeholder-[#717171] resize-none py-4"
          rows={4}
          placeholder="Type your notes here"
        />
      </div>
    </div>
    <button
      type="submit"
      className="w-full h-[54px] rounded-full bg-gradient-to-r from-[#88B158] to-[#146B2D] text-white text-[18px] font-satoshi font-medium tracking-tight transition duration-200 hover:opacity-90"
    >
      Submit
    </button>
  </form>
</section>

  );
}
