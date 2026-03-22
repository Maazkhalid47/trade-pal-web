import GradientIconButton from "../components/gradient_icon_button";
import PrimaryButton from "../components/primary_button";
import React, { useState } from "react";

export const RegisterForm = () => {
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      ...Object.fromEntries(formData.entries()),
      role: selected,
    };

    console.log(data);
  };

  return (
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
              <form
                onSubmit={handleSubmit}
                className="shadow-[#0000000A] mx-auto rounded-3xl flex flex-col items-center justify-center w-[400px] md:w-[500px] my-40 p-15 gap-12 bg-white"
              >
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
                  Be the first to try My Trade Pal and connect locally. Join our
                  growing marketplace.
                </p>
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="font-semibold text-[#94A3B8]"
                    htmlFor="name"
                  >
                    FULL NAME
                  </label>
                  <input
                    className="bg-[#F8FAFC] p-3 rounded-2xl text-black w-[300px] md:w-[400px] md:text-left text-center"
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
                    className="bg-[#F8FAFC] p-3 rounded-2xl text-black w-[300px] md:w-[400px] md:text-left text-center"
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
                    className="bg-[#F8FAFC] p-3 rounded-2xl text-black w-[300px] md:w-[400px] md:text-left text-center"
                    placeholder="Enter your city or area"
                    name="area"
                  ></input>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <p className="font-semibold text-[#94A3B8]">
                    ROLE / I&apos;M JOINING AS
                  </p>
                  <div className="grid grid-cols-2 gap-5 w-[300px] md:w-[400px]">
                    <GradientIconButton
                      icon="/person.svg"
                      alt="Customer"
                      isSelected={selected === "Customer"}
                      onClick={() => setSelected("Customer")}
                    />
                    <GradientIconButton
                      icon="/setting.svg"
                      alt="Tradeperson"
                      isSelected={selected === "Tradeperson"}
                      onClick={() => setSelected("Tradeperson")}
                    />
                  </div>
                  <p className="text-[#64748B] py-5">
                    I agree to the{" "}
                    <a
                      href="/privacy"
                      className="text-[#4169E1] hover:underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms" className="text-[#4169E1] hover:underline">
                      Terms of Service
                    </a>
                    . *
                  </p>
                  <PrimaryButton
                    text="Join Early Access"
                    className="w-full flex justify-center !bg-gradient-to-r !from-[#4169E1] !to-[#02C6C6]"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
