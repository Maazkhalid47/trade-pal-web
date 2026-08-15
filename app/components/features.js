import React from "react";
import Card from "./card";
import IconCard from "./icon_card";

const Features = () => {
  return (
    <div
      className="flex md:flex-row flex-col justify-center gap-10 text-center pb-20"
      id="working"
    >
      <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 w-[400px] md:w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center">
          {" "}
          <p className="text-[#000088] text-[28px]">Why Choose</p>
          <p className="text-[#000088] text-[28px] font-semibold">
            My Trade Pal?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-5">
          <div
            className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D] hover:border-[#4169E1] border-[1.5px]"
          >
            <IconCard
              src="/handshake.png"
              alt="Direct access to real opportunities icon"
              color="#fff"
              height={50}
              width={50}
            />
            <p className="text-[#0F172A] font-bold pt-5 pb-2">
              Direct Access to Real Opportunities
            </p>
            <p className="text-[#475569]">
              No middlemen. Connect directly with customers or tradespeople in
              your area.
            </p>
          </div>
          <div
            className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D] hover:border-[#4169E1] border-[1.5px]"
          >
            <IconCard
              src="/lightning.png"
              alt="Faster hiring icon"
              color="#fff"
              height={50}
              width={50}
            />
            <p className="text-[#0F172A] font-bold pt-5 pb-2">
              Faster Hiring, Less Hassle
            </p>
            <p className="text-[#475569]">
              Post once, receive applications, compare, and hire — all in
              minutes.
            </p>
          </div>
          <div
            className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D] hover:border-[#4169E1] border-[1.5px]"
          >
            <IconCard
              src="/person-1.png"
              alt="Professional profile icon"
              color="#fff"
              height={50}
              width={50}
            />
            <p className="text-[#0F172A] font-bold pt-5 pb-2">
              {" "}
              Professional Profiles That Build Trust
            </p>
            <p className="text-[#475569]">
              Showcase your skills, qualifications, and experience.
            </p>
          </div>
          <div
            className="flex flex-col justify-start items-center border rounded-3xl border-[#F1F5F9] shadow-lg p-5 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:bg-[#02C6C60D] hover:border-[#4169E1] border-[1.5px]"
          >
            <IconCard
              src="/shield.png"
              alt="Secure payments with Stripe icon"
              color="#fff"
              height={50}
              width={50}
            />
            <p className="text-[#0F172A] font-bold pt-5 pb-2">
              Secure Payments with Stripe
            </p>
            <p className="text-[#475569]">
              Payments are securely processed by Stripe with encryption and
              PCI-compliant protection. Your card details stay private and are
              never stored on My Trade Pal.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Features;
