"use client";

import React from "react";
import Header from "../components/header";
import Image from "next/image";
import GradientIconButton from "../components/gradient_icon_button";

const Register = () => {
  return (
    <main>
      <Header />
      <div className="!bg-[#F8FAFC]">
        <div className="w-full flex justify-center relative">
          <section className="text-center w-full">
            <div
              className="w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(/register-bg.png)",
              }}
            >
              <div className="flex justify-center w-full">
                <form className="rounded-3xl flex flex-col items-center justify-center w-[500px] h-[800px] my-40 p-15 gap-12 bg-white">
                  <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center">
                    {" "}
                    <p className="text-black text-[28px] font-bold">
                      Early Access
                    </p>
                    <p className="text-[#02C6C6F2] text-[28px] font-bold">
                      Registration
                    </p>
                  </div>
                  <p className="text-[#64748B]">
                    Be the first to try My Trade Pal and connect locally. Join
                    our growing marketplace.
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <label
                      className="font-semibold text-[#94A3B8]"
                      htmlFor="name"
                    >
                      FULL NAME
                    </label>
                    <input
                      className="bg-[#F8FAFC] p-3 rounded-2xl text-black w-[400px] md:text-left text-center"
                      placeholder="Enter your full name"
                      name="name"
                    ></input>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label
                      className="font-semibold text-[#94A3B8]"
                      htmlFor="email"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      className="bg-[#F8FAFC] p-3 rounded-2xl text-black w-[400px] md:text-left text-center"
                      placeholder="Enter your email address"
                      name="email"
                    ></input>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label
                      className="font-semibold text-[#94A3B8]"
                      htmlFor="area"
                    >
                      CITY / AREA
                    </label>
                    <input
                      className="bg-[#F8FAFC] p-3 rounded-2xl text-black w-[400px] md:text-left text-center"
                      placeholder="Enter your city or area"
                      name="area"
                    ></input>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <label
                      className="font-semibold text-[#94A3B8]"
                      htmlFor="role"
                    >
                      ROLE / I&apos;M JOINING AS
                    </label>
                    <div className="grid grid-cols-2 gap-5">
                      <GradientIconButton icon="/person.svg" alt="Customer" />
                      <GradientIconButton
                        icon="/setting.svg"
                        alt="Tradeperson"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Register;
