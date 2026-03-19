import React from "react";
import Card from "./card";
import SecondaryButton from "./secondary_button";

const Subscribe = () => {
  return (
    <div
      className="flex md:flex-row flex-col justify-center gap-10 text-center pb-20"
      id="early-access"
    >
      <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 md:p-20 w-[400px] md:w-[1200px] mx-auto !bg-[#4169E1]">
        <p className="text-[48px] font-bold">
          Be the First to Try My Trade Pal
        </p>
        <p>
          Join our early access list and get notified when we launch in your
          area. No spam, just updates.
        </p>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            className="bg-white p-3 rounded-xl text-black w-[300px] md:text-left text-center"
            placeholder="Enter your email"
          ></input>
          <SecondaryButton text="Join Early Access" className="rounded-xl!" />
        </div>
      </Card>
    </div>
  );
};

export default Subscribe;
