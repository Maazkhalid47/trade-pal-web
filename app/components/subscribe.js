"use client";

import React from "react";
import Card from "./card";
import SecondaryButton from "./secondary_button";
import { useRouter } from "next/navigation";

const Subscribe = () => {
  const router = useRouter();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");

    router.push(`/register?email=${encodeURIComponent(email)}`);
  }
  
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
        <form className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmit}>
          <input
            className="bg-white p-3 rounded-xl text-black w-[300px] md:text-left text-center"
            placeholder="Enter your email"
            name="email"
            type="email"
          ></input>
          <SecondaryButton text="Join Early Access" className="rounded-xl!" />
        </form>
      </Card>
    </div>
  );
};

export default Subscribe;
