"use client";

import React, { useState } from "react";
import Image from "next/image";
import LinkButton from "./link_button";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50">
      <div className="px-5 md:px-2 lg:px-10 py-8 mt-5 rounded-2xl h-15 bg-white/70 shadow-md flex items-center justify-between w-full max-w-300 mx-auto">
        <a href="/#hero" className="flex gap-3 items-center">
          <Image src="/logo2.png" alt="logo" height={40} width={40} />
          <p className="text-[16px] md:text-[18px] font-bold text-[#4169E1]">
            My Trade Pal
          </p>
        </a>

        <div className="hidden md:flex gap-4 lg:gap-8 items-center md:text-sm lg:text-lg">
          <a
            className="nav-link text-[#4169E1] hover:text-[#02C6C6] cursor-pointer font-semibold"
            href="/#both-sides"
          >
            Homeowners
          </a>
          <a
            className="nav-link text-[#4169E1] hover:text-[#02C6C6] cursor-pointer font-semibold"
            href="/#both-sides"
          >
            Tradespeople
          </a>
          <a
            className="nav-link text-[#4169E1] hover:text-[#02C6C6] cursor-pointer font-semibold"
            href="/#homeowners"
          >
            How it Works
          </a>
          <a
            className="nav-link text-[#4169E1] hover:text-[#02C6C6] cursor-pointer font-semibold"
            href="/#contact"
          >
            Contact-us
          </a>
          <LinkButton
            href="/register"
            text="Get Early Access"
            className="rounded-2xl!"
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
        <div className="absolute top-20 w-full px-5 md:hidden">
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center gap-5 py-6">
            <a
              className="nav-link text-[#4169E1] hover:text-[#02C6C6] font-semibold"
              href="#homeowners"
            >
              Homeowners
            </a>
            <a
              className="nav-link text-[#4169E1] hover:text-[#02C6C6] font-semibold"
              href="#trades"
            >
              Tradespeople
            </a>
            <a
              className="nav-link text-[#4169E1] hover:text-[#02C6C6] font-semibold"
              href="#homeowners"
            >
              How it Works
            </a>
            <a
              className="nav-link text-[#4169E1] hover:text-[#02C6C6] font-semibold"
              href="#contact"
            >
              Contact-us
            </a>

            <LinkButton
              href="/register"
              text="Get Early Access"
              className="rounded-2xl!"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
