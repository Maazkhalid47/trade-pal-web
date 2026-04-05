import React from "react";
import IconCard from "./icon_card";
import Card from "./card";
import Pill from "./pill";

const Trades = () => {
  return (
    <div
      className="flex md:flex-row flex-col justify-center gap-10 text-center pb-20"
      id="trades"
    >
      <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 w-[400px] md:w-[1200px] !bg-transparent mx-auto">
        <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center">
          {" "}
          <p className="text-black text-[28px]">How It Works for</p>
          <p className="text-[#02C6C6F2] text-[28px] font-semibold">Tradespeople</p>
        </div>
        <p className="relative text-[#475569] pt-3 text-center">
          Streamlined process for Tradespeople
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[5px] bg-[#02C6C6F2]"></span>
        </p>
        <div className="flex justify-end w-full pb-5">
          <Pill
            icon="/cash.svg"
            text="Only pay a small fee when accepted"
            className="bg-[#02C6C61A]"
            textClass="text-[#02C6C6F2]"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col justify-start items-center">
            <IconCard
              src="/trades-1.png"
              alt="img-1"
              color="#02C6C6F2"
              height={18}
              width={18}
            />
            <p className="text-[#0F172A] font-bold pt-5 pb-2">1. Browse Jobs</p>
            <p className="text-[#475569]">Find jobs that match your skills.</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <IconCard
              src="/trades-2.png"
              alt="img-3"
              color="#02C6C6F2"
              height={18}
              width={18}
            />
            <p className="text-[#0F172A] font-bold pt-5 pb-2">
              2. Apply for Work
            </p>
            <p className="text-[#475569]">Submit your interest to the customer.</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <IconCard
              src="/trades-3.png"
              alt="img-4"
              color="#02C6C6F2"
              height={18}
              width={18}
            />
            <p className="text-[#0F172A] font-bold pt-5 pb-2">
              3. Chat & Quote
            </p>
            <p className="text-[#475569]">
              Discuss details and provide your price.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <IconCard
              src="/trades-4.png"
              alt="img-4"
              color="#02C6C6F2"
              height={18}
              width={18}
            />
            <p className="text-[#0F172A] font-bold pt-5 pb-2">
              4. Complete the Job & Get Paid
            </p>
            <p className="text-[#475569]">
              Deliver great work and grow your reputation.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Trades;
