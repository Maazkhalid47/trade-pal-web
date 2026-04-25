"use client";

import React from "react";
import Card from "./card";
import PersonCard from "./person_card";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div
      className="flex md:flex-row flex-col justify-center gap-10 text-center pb-20"
      id="testimonials"
    >
      <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 w-[400px] md:w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center">
          {" "}
          <p className="text-black text-[28px] font-bold">Testimonials</p>
        </div>
        <p className="relative text-[#4E4D4D] text-[28px] font-[600] pt-8 text-center w-[80%] md:w-[60%]">
          What our Satisfied Clients Say about us!
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[5px] bg-[#4169E1]"></span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5">
          <div
            className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D] hover:border-[#4169E1] border-[1.5px]"
          >
            <PersonCard
              src="/sarah.jpg"
              alt="img-1"
              color="#fff"
              height={77}
              width={77}
            />
            <p className="text-[#1A1A1A] text-[16px] font-bold pt-5 pb-2">
              Sarah Mitchell
            </p>
            <p className="text-[#6B7280] text-[14px] font-[600] pb-2">
              Homeowner
            </p>
            <p className="text-[#475569]">
              I needed a reliable electrician for a quick repair and My Trade
              Pal made the whole process effortless. Within minutes I received
              multiple quotes from verified tradespeople and booked the job the
              same day. The quality of work was excellent and the pricing was
              transparent. Highly recommended.
            </p>
            <div className="flex items-center">
              <Rating
                readonly
                initialValue={3}
                size={15}
                fillColor="#4169E1"
                SVGstyle={{ display: "inline-block" }}
              />
            </div>
            <Image src={"/comma.svg"} alt="Comma" width={30} height={30} />
          </div>
          <div
            className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D] hover:border-[#4169E1] border-[1.5px]"
          >
            <PersonCard
              src="/david.jpg"
              alt="img-3"
              color="#fff"
              height={77}
              width={77}
            />
            <p className="text-[#0F172A] text-[16px] font-bold pt-5 pb-2">
              David Carter
            </p>
            <p className="text-[#6B7280] text-[14px] font-[600] pb-2">
              Property Manager
            </p>
            <p className="text-[#475569]">
              As a property manager I frequently need plumbers, painters, and
              handymen. My Trade Pal has completely simplified the process of
              finding skilled professionals. The platform is fast, easy to use,
              and the tradespeople are genuinely reliable.
            </p>
            <div className="flex items-center">
              <Rating
                readonly
                initialValue={5}
                size={15}
                fillColor="#4169E1"
                SVGstyle={{ display: "inline-block" }}
              />
            </div>
            <Image src={"/comma.svg"} alt="Comma" width={30} height={30} />
          </div>
          <div
            className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D] hover:border-[#4169E1] border-[1.5px]"
          >
            <PersonCard
              src="/emily.jpg"
              alt="img-4"
              color="#fff"
              height={77}
              width={77}
            />
            <p className="text-[#0F172A] text-[16px] font-bold pt-5 pb-2">
              Emily Robinson
            </p>
            <p className="text-[#6B7280] text-[14px] font-[600] pb-2">
              Landlord
            </p>
            <p className="text-[#475569]">
              I needed a reliable electrician for a quick repair and My Trade
              Pal made the whole process effortless. Within minutes I received
              multiple quotes from verified tradespeople and booked the job the
              same day. The quality of work was excellent and the pricing was
              transparent. Highly recommended.
            </p>
            <div className="flex items-center">
              <Rating
                readonly
                initialValue={4}
                size={15}
                fillColor="#4169E1"
                SVGstyle={{ display: "inline-block" }}
              />
            </div>
            <Image src={"/comma.svg"} alt="Comma" width={30} height={30} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Testimonials;
