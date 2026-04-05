import React from "react";
import Card from "./card";
import IconCard from "./icon_card";

const Mission = () => {
  return (
    <div
      className="flex md:flex-row flex-col justify-center gap-10 text-center pb-20"
      id="mission"
    >
      <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 w-[400px] md:w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center">
          {" "}
          <p className="text-black text-[28px] font-bold">Our Mission</p>
        </div>
        <p className="relative text-[#475569] pt-8 text-center w-[80%] md:w-[60%]">
          Our mission is to simplify how homeowners connect with skilled
          tradespeople. We aim to create a trusted marketplace where
          professionals grow their businesses and customers easily find reliable
          help for their homes.
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[5px] bg-[#02C6C6F2]"></span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5">
          <div
            className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D]"
          >
            <IconCard
              src="/mission-shield.png"
              alt="img-1"
              color="#fff"
              height={50}
              width={50}
            />
            <p className="text-[#0F172A] font-bold pt-5 pb-2">Trust</p>
            <p className="text-[#475569]">
              Building confidence through verified experts and secure systems.
            </p>
          </div>
          <div
            className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D]"
          >
            <IconCard
              src="/gear.png"
              alt="img-3"
              color="#fff"
              height={50}
              width={50}
            />
            <p className="text-[#0F172A] font-bold pt-5 pb-2">Simplicity</p>
            <p className="text-[#475569]">
              Creating an effortless experience for both homeowners and pros.
            </p>
          </div>
          <div
            className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D]"
          >
            <IconCard
              src="/graph.png"
              alt="img-4"
              color="#fff"
              height={50}
              width={50}
            />
            <p className="text-[#0F172A] font-bold pt-5 pb-2"> Opportunity</p>
            <p className="text-[#475569]">
              Empowering local businesses to grow and scale their reputation.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Mission;
