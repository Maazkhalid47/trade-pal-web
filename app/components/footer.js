import Image from "next/image";
import React from "react";
import SecondaryButton from "./secondary_button";

const Footer = () => {
  return (
    <div className={"bg-[#0F172A] py-16 px-10"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 pb-10">
        <div className="flex flex-col gap-6">
          <div className="flex gap-5 items-center justify-center md:justify-start">
            <Image src="/handshake.png" width={32} height={32} alt="tradePal" />
            <p className="text-[18px] font-bold">My Trade Pal</p>
          </div>
          <div className="flex justify-center md:justify-start">
            <p className="text-[#94A3B8] w-[300px] text-center md:text-left">
              Connecting the UK's best tradespeople with homeowners who value
              quality. Building trust, one job at a time.
            </p>
          </div>
          <div className="flex gap-5">
            <SecondaryButton
              icon="/apple.svg"
              className="!bg-[#1E293B] !rounded-full w-[180px] h-[60px]"
              text={"Download on App Store"}
            />
            <SecondaryButton
              icon="/play.svg"
              className="!bg-[#1E293B] !rounded-full w-[180px] h-[60px]"
              text={"Get it on Google Play"}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-100 items-center">
          <div className="flex flex-col gap-6 items-center md:items-start justify-center">
            <a className="text-[#94A3B8] cursor-pointer hover:text-white">
              Company
            </a>
            <a className="text-[#94A3B8] cursor-pointer hover:text-white">
              About Us
            </a>
            <a className="text-[#94A3B8] cursor-pointer hover:text-white">
              Our Mission
            </a>
            <a className="text-[#94A3B8] cursor-pointer hover:text-white">
              Contact
            </a>
            <a className="text-[#94A3B8] cursor-pointer hover:text-white">
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-6 items-center md:items-start justify-center">
            <a className="text-[#94A3B8] cursor-pointer hover:text-white">
              Legal
            </a>
            <a className="text-[#94A3B8] cursor-pointer hover:text-white">
              Privacy Policy
            </a>
            <a className="text-[#94A3B8] cursor-pointer hover:text-white">
              Terms of Service
            </a>
            <a className="text-[#94A3B8] cursor-pointer hover:text-white">
              Cookie Policy
            </a>
            <a className="text-[#94A3B8] cursor-pointer hover:text-white">
              Trade Agreement
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#1E293B]">
        <div className="pt-8 flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-6 md:gap-0">
          <p>© 2026 My Trade Pal Ltd. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <Image src="/facebook.svg" height={24} width={24} alt="facebook"  className="hover:cursor-pointer hover:invert hover:brightness-0 transition" />
            <Image src="/instagram.svg" height={24} width={24} alt="instagram" className="hover:cursor-pointer hover:invert hover:brightness-0 transition" />
            <Image src="/x.svg" height={24} width={24} alt="x" className="hover:cursor-pointer hover:invert hover:brightness-0 transition" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
