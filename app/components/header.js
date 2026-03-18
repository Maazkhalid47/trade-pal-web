import React from "react";
import PrimaryButton from "./primary_button";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50">
      <div className="px-10 mt-5 rounded-3xl h-[60px] bg-white/80 shadow-md flex items-center justify-between w-[400px] md:w-[1200px]">
        <div className="flex gap-5 items-center">
          <Image src="/logo.png" alt="logo" height={48} width={48} />
          <p className="text-[18px] font-bold text-[#4169E1]">My Trade Pal</p>
        </div>
        <div className="flex gap-8 items-center">
          <a
            href="#"
            className="text-[18px] font-semibold text-[#4169E1] hover:underline hover:decoration-[#4169E1] transition duration-300"
          >
            Homeowners
          </a>
          <a
            href="#"
            className="text-[18px] font-semibold text-[#4169E1] hover:underline hover:decoration-[#4169E1] transition duration-300"
          >
            Tradespeople
          </a>
          <a
            href="#"
            className="text-[18px] font-semibold text-[#02C6C6] hover:underline hover:decoration-[#02C6C6] transition duration-300"
          >
            How it Works
          </a>
          <PrimaryButton text="Get Early Access" className="rounded-3xl!" />
        </div>
      </div>
    </div>
  );
};

export default Header;
