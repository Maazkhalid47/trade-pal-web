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
      <Card className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 w-[330px] md:w-[1200px] mx-auto items-center">
        <div className="flex flex-col gap-6">
          <p className="text-[#0F172A] text-[28px] font-bold text-center md:text-left">
            About{" "}
            <span className="text-[#4169E1] text-[28px] font-bold">
              My Trade Pal
            </span>
          </p>
          <p className="text-[#475569]">
            We make finding the right tradesperson simple and stress-free. Whether you're fixing a leaking tap, giving your home a fresh look, or planning a bigger project, My Trade Pal brings homeowners and skilled local tradespeople together. From posting a job and receiving quotes to chatting, booking, and making payments, everything you need is in one easy-to-use place.
          </p>
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <Image src={"/check.png"} alt="Check" height={50} width={50} />
              <div>
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  Find the Right Professional
                </p>
                <p className="text-[#475569]">
                 Post your job and hear from professionals ready to help. Compare applications, profiles and quotes, then choose the right person for your project.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image src={"/lock.png"} alt="Lock" height={50} width={50} />
              <div>
                <p className="text-[#0F172A] font-bold pt-5 pb-2">
                  Pay Securely with Stripe
                </p>
                <p className="text-[#475569]">
                  When your job is complete, you can conveniently pay your professional through the app using stripe. 
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
                  Choose & Connect with Confidence
                </p>
                <p className="text-[#475569]">
                  Review applications from professionals, choose the one that's right for your job, and connect directly through the app.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="p-12 rounded-[48px] shadow-2xl shadow-[#00000040] h-[400px] flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center pl-10 lg:pt-10">
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
