import React from "react";
import Pill from "./pill";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 text-center pb-20 px-5 mx-auto">
      <div className="flex flex-row justify-center gap-10 md:gap-20 items-center max-w-[1200px] w-full mx-auto">
        <div className="flex flex-col gap-1 items-center">
          <Image src="/ratings.png" alt="ratings" width={120} height={30} />
          <p className="text-[#000088] font-semibold">4.9/5 Average Rating</p>
          <p className="text-[#64748B]">From our early beta users</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          {" "}
          <Pill
            icon="/shield.png"
            className="bg-[#00008A0D] !p-5"
            text="Secure Stripe Payments"
            textClass="text-[#000088]"
          />
          <p className="text-[#64748B] pt-2">Industry leading encryption</p>
        </div>
      </div>
      <div className="bg-[#02C6C60D] rounded-3xl p-8 md:w-[600px] w-[400px] relative">
        <p className="text-[80px] text-[#00008A33] absolute top-[-40px]">”</p>
        <p className="text-[#475569]">
          &quot;My Trade Pal helped me find a plumber in 20 minutes on a Sunday
          afternoon. The chat was seamless and the payment was secure.
          Couldn&apos;t recommend it enough!&quot;
        </p>
        <p className="text-[#00008A] font-semibold pt-2">
          — Sarah J., Homeowner in Birmingham
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
