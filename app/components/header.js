"use client";

import React, { useState } from "react";
import PrimaryButton from "./primary_button";
import Image from "next/image";
import LinkButton from "./link_button";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50">
      <div className="px-5 md:px-10 py-8 mt-5 rounded-2xl h-[60px] bg-white/80 shadow-md flex items-center justify-between w-full max-w-[1200px] mx-auto">
        <div className="flex gap-3 items-center">
          <Image src="/logo.png" alt="logo" height={40} width={40} />
          <p className="text-[16px] md:text-[18px] font-bold text-[#4169E1]">
            My Trade Pal
          </p>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <a
            className="nav-link text-[#4169E1] hover:text-[#02C6C6] cursor-pointer"
            href="#homeowners"
          >
            Homeowners
          </a>
          <a
            className="nav-link text-[#4169E1] hover:text-[#02C6C6] cursor-pointer"
            href="#trades"
          >
            Tradespeople
          </a>
          <a
            className="nav-link text-[#4169E1] hover:text-[#02C6C6] cursor-pointer"
            href="#working"
          >
            How it Works
          </a>
          <LinkButton
            href="#early-access"
            text="Get Early Access"
            className="!rounded-3xl"
          />
        </div>

        <button
          className="md:hidden text-2xl text-[#4169E1]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="absolute top-[80px] w-full px-5 md:hidden">
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center gap-5 py-6">
            <a
              className="nav-link text-[#4169E1] hover:text-[#02C6C6]"
              href="#homeowners"
            >
              Homeowners
            </a>
            <a
              className="nav-link text-[#4169E1] hover:text-[#02C6C6]"
              href="#trades"
            >
              Tradespeople
            </a>
            <a
              className="nav-link text-[#4169E1] hover:text-[#02C6C6]"
              href="#working"
            >
              How it Works
            </a>

            <LinkButton
              href="#early-access"
              text="Get Early Access"
              className="!rounded-3xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
