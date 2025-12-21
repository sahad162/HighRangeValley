import React from "react";
import { useState } from "react";
import { enquirySchema } from "../../validations/enquirySchemaValidation";
import { useCreateEnquiry } from "../../hooks/useCreateEnquiry";
import { toast } from "react-hot-toast";

export default function Connect() {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { mutate, isLoading } = useCreateEnquiry();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    const singleField = enquirySchema.pick({ [name]: true });

    const result = singleField.safeParse({ [name]: value });

    if (!result.success) {
      setErrors((prev) => ({
        ...prev,
        [name]: result.error.flatten().fieldErrors[name],
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    mutate(form, {
      onSuccess: () => {
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
       toast.success("Form submitted Successfully",{
        duration:3000,
       })
      },
      onError: (err) => {
          toast.error(err?.response?.data?.message || "Failed to send message");
      },
    });
  };
  return (
    <section
      className="flex flex-col md:flex-row justify-center items-stretch connect-cont gap-10 px-10 lg:px-20  pb-20  bg-[#F7F9F3]"
      id="contact"
    >
      <div className="flex flex-col justify-between   w-full ">
        <div className="space-y-6 mt-8">
          <h2
            className="font-satoshi font-medium text-4xl md:text-[3rem] leading-tight text-[#141414]"
            style={{ fontFeatureSettings: "'pnum' on, 'lnum' on" }}
          >
            Get connected now
          </h2>
          <p
            className="font-satoshi text-base xl:text-[20px] text-[#282928] leading-[30px]"
            style={{ fontFeatureSettings: "'pnum' on, 'lnum' on" }}
          >
            Our contact information is just a click away. Get in touch with us
            today and let’s start a conversation that could change the game!
          </p>
        </div>

        <div className="flex flex-col gap-6 mb-10 mt-10 md:mt-0">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0000000A] border border-[#EFEFEF] text-[#232423] text-base lg:text-lg">
              <i className="fa-solid fa-phone"></i>
            </span>
            <span className="font-satoshi text-[16px] lg:text-[18px] font-medium text-[#282928]">
              +91 9847 017714
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0000000A] border border-[#EFEFEF] text-[#232423] text-base lg:text-lg">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <span className="font-satoshi text-[16px] lg:text-[18px] font-medium text-[#282928]">
              highrangevalleyinfo@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <form
        className="flex flex-col justify-between w-full max-w-xl gap-6 md:p-8 "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center border border-[#EAECE9] rounded-[9px] h-[54px] px-4">
              <i className="fa-solid fa-user text-gray-500 mr-3"></i>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={form.name}
                className="w-full bg-transparent outline-none border-none text-[#717171] text-[18px] font-satoshi leading-[28px] placeholder-[#717171]"
              />
            </div>
            <div className="mt-1">
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name[0]}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center border border-[#EAECE9] rounded-[9px] h-[54px] px-4">
              <i className="fa-solid fa-phone text-gray-500 mr-3"></i>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                onChange={handleChange}
                value={form.phone}
                className="w-full bg-transparent outline-none border-none text-[#717171] text-[18px] font-satoshi leading-[28px] placeholder-[#717171]"
              />
            </div>
            <div className="mt-1">
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone[0]}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center border border-[#EAECE9] rounded-[9px] h-[54px] px-4">
              <i className="fa-solid fa-envelope text-gray-500 mr-3"></i>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                placeholder="Email id"
                className="w-full bg-transparent outline-none border-none text-[#717171] text-[18px] font-satoshi leading-[28px] placeholder-[#717171]"
              />
            </div>
            <div className="mt-1">
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email[0]}</p>
              )}
            </div>
          </div>
          <div>
            <div className="border border-[#EAECE9] rounded-[9px] px-4 flex items-start">
              <textarea
                className="w-full bg-transparent outline-none border-none text-[#717171] text-[18px] font-satoshi leading-[28px] placeholder-[#717171] resize-none py-4"
                rows={4}
                placeholder="Type your notes here"
                name="message"
                onChange={handleChange}
                value={form.message}
              />
            </div>
            <div className="mt-1">
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message[0]}</p>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`${
            isLoading && "opacity-70 cursor-not-allowed"
          }w-full h-[40px] lg:h-[54px] rounded-full bg-gradient-to-r from-[#88B158] to-[#146B2D] text-white text-[16px] lg:text-[18px] font-satoshi font-medium tracking-tight transition duration-200 hover:opacity-90`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </section>
  );
}