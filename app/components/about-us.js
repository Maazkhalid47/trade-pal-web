"use client";

import React from "react";
import Card from "./card";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

const AboutUs = () => {
  return (
    <div
      className="flex md:flex-row flex-col justify-center gap-10 pb-20"
      id="about-us"
    >
      <Card className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 w-[400px] md:w-[1200px] mx-auto items-center">
        <div className="flex flex-col gap-6">
          <p className="text-[#0F172A] text-[28px] font-bold text-center md:text-left">
            About{" "}
            <span className="text-[#4169E1] text-[28px] font-bold">
              My Trade Pal
            </span>
          </p>
          <p className="text-[#475569]">
            We're bridging the gap between quality home services and digital
            convenience. Our platform is designed to handle everything from
            first contact to final payment.
          </p>
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <Image src={"/check.png"} alt="Check" height={50} width={50} />
              <div>
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  Trusted Professionals
                </p>
                <p className="text-[#475569]">
                  Every pro is manually vetted and reviewed by homeowners like
                  you.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image src={"/lock.png"} alt="Lock" height={50} width={50} />
              <div>
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  Secure Payments
                </p>
                <p className="text-[#475569]">
                  Funds are held safely in escrow and only released when the job
                  is done.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/lightning.png"}
                alt="Lightning"
                height={50}
                width={50}
              />
              <div>
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  Fast Job Matching
                </p>
                <p className="text-[#475569]">
                  Get multiple quotes within hours, not days, from nearby
                  experts.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="p-12 rounded-[48px] shadow-2xl shadow-[#00000040] h-[400px] flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <Image
              src={"/collab-1.png"}
              alt="Collaboration 1"
              height={114}
              width={114}
              className="-ml-10"
            />
            <Image
              src={"/logo-large.png"}
              alt="Logo"
              height={80}
              width={80}
              className="-ml-10 z-10"
            />
            <Image
              src={"/collab-2.png"}
              alt="Collaboration 2"
              height={114}
              width={114}
              className="-ml-10"
            />
          </div>
          <div className="flex flex-col gap-6 bg-[#F8FAFC] shadow-lg shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-2xl p-8 w-full md:w-[320px]">
            <div className="flex justify-between items-center">
              <p className="text-[#94A3B8] font-bold">PROJECT PROGRESS</p>
              <p className="text-[#14B8A6] font-bold">85%</p>
            </div>
            <ProgressBar
              completed={85}
              bgColor="#14B8A6"
              height="8px"
              labelColor="#14B8A6"
            />
            <div className="flex gap-2">
              <Image src={"/tick.svg"} width={12} height={12} alt="Check" />
              <p className="text-[#475569]">Collaboration in progress</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutUs;
