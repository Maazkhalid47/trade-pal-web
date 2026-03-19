import React from "react";
import PrimaryButton from "./primary_button";
import Card from "./card";
import Image from "next/image";
import Pill from "./pill";
import IconCard from "./icon_card";

const HomeOwners = () => {
  return (
    <>
      {" "}
      <div className="!bg-[#F8FAFC] flex md:flex-row flex-col justify-center gap-10 text-center pt-40 pb-20">
        <Card className="flex flex-col justify-center text-center items-start gap-5 p-10 w-[400px] md:w-[500px] md:mx-0 mx-auto">
          <Image src="/house.png" alt="house" height={64} width={64} />
          <p className="font-semibold text-[#0F172A]">For Homeowners</p>
          <ul className="flex flex-col items-start gap-2">
            <li className="flex items-center gap-2 text-black text-[14px]">
              <img src="/tick-blue.svg" className="w-4 h-4" />
              Get free, no-obligation quotes from local trades
            </li>
            <li className="flex items-center gap-2 text-black text-[14px]">
              <img src="/tick-blue.svg" className="w-4 h-4" />
              Only browse verified tradespeople with reviews
            </li>
            <li className="flex items-center gap-2 text-black text-[14px]">
              <img src="/tick-blue.svg" className="w-4 h-4" />
              Direct chat to manage bookings in one place
            </li>
          </ul>
          <div className="flex justify-center w-full">
            <PrimaryButton
              text="Get Free Quotes"
              className="rounded-3xl! w-[300px] flex justify-center"
            />
          </div>
        </Card>
        <Card className="flex flex-col justify-center text-center items-start gap-5 p-10 w-[400px] md:w-[500px] !bg-transparent border border-[#00B3B333] md:mx-0 mx-auto">
          <Image src="/wrench.png" alt="house" height={64} width={64} />
          <p className="font-semibold text-[#0F172A]">For Tradespeople</p>
          <ul className="flex flex-col items-start gap-2">
            <li className="flex items-center gap-2 text-black text-[14px]">
              <img src="/tick-green.svg" className="w-4 h-4" />
              Access steady stream of local jobs daily
            </li>
            <li className="flex items-center gap-2 text-black text-[14px]">
              <img src="/tick-green.svg" className="w-4 h-4" />
              Choose which jobs to respond to - no pressure
            </li>
            <li className="flex items-center gap-2 text-black text-[14px]">
              <img src="/tick-green.svg" className="w-4 h-4" />
              Pay only £7.99 when your quote is accepted
            </li>
          </ul>
          <div className="flex justify-center w-full">
            <PrimaryButton
              text="Find Local Jobs"
              className="rounded-3xl! !bg-[#02C6C6F2] w-[300px] flex justify-center"
            />
          </div>
        </Card>
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-10 text-center pb-20">
        <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 w-[400px] md:w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center">
            {" "}
            <p className="text-black text-[28px]">How It Works for</p>
            <p className="text-[#4169E1] text-[28px] font-semibold">
              Homeowners
            </p>
          </div>
          <p className="relative text-black pt-3 text-center">
            Simple steps for Homeowners
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[5px] bg-[#4169E1]"></span>
          </p>
          <div className="flex justify-end w-full pb-5">
            <Pill
              text="Customer Journey"
              className="bg-[#00008A1A]"
              textClass="text-[#4169E1]"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col justify-start items-center">
              <IconCard
                src="/homeowners-1.png"
                alt="img-1"
                color="#4169E1"
                height={18}
                width={18}
              />
              <p className="text-[#0F172A] font-bold pt-5 pb-2">
                1. Post a Job
              </p>
              <p className="text-black">
                Describe the work, budget, and location.
              </p>
            </div>
            <div className="flex flex-col justify-start items-center">
              <IconCard
                src="/homeowners-2.png"
                alt="img-3"
                color="#4169E1"
                height={18}
                width={18}
              />
              <p className="text-[#0F172A] font-bold pt-5 pb-2">
                2. Receive Applications
              </p>
              <p className="text-black">
                Skilled tradespeople express interest.
              </p>
            </div>
            <div className="flex flex-col justify-start items-center">
              <IconCard
                src="/homeowners-3.png"
                alt="img-4"
                color="#4169E1"
                height={18}
                width={18}
              />
              <p className="text-[#0F172A] font-bold pt-5 pb-2">
                3. Compare & Chat
              </p>
              <p className="text-black">
                Reviews, profiles, message them,and request quotes.
              </p>
            </div>
            <div className="flex flex-col justify-start items-center">
              <IconCard
                src="/homeowners-4.png"
                alt="img-4"
                color="#4169E1"
                height={18}
                width={18}
              />
              <p className="text-[#0F172A] font-bold pt-5 pb-2">
                4. Hire & Get It Done
              </p>
              <p className="text-black">
                Choose the best fit and get your job completed.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default HomeOwners;
