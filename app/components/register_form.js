import { useRouter } from "next/navigation";
import GradientIconButton from "../components/gradient_icon_button";
import PrimaryButton from "../components/primary_button";
import React, { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["800"],
});

export const RegisterForm = () => {
  const [selected, setSelected] = useState("Customer");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      ...Object.fromEntries(formData.entries()),
      role: selected,
    };

    console.log(data);
    router.push("/success");
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
                className="shadow-[#0000000A] mx-auto rounded-3xl flex flex-col items-center justify-center w-[400px] md:w-[500px] my-40 p-15 gap-12 bg-white relative"
              >
                <div className="rounded-full bg-gradient-to-r from-[#02C6C614] to-[#fff] w-[150px] h-[150px] absolute top-[-50] right-0"></div>
                <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-center">
                  {" "}
                  <p className={`text-black text-[28px] ${inter.className}`}>
                    Early Access
                  </p>
                  <p
                    className={`bg-clip-text text-transparent text-[28px] bg-gradient-to-r from-[#4169E1] to-[#02C6C6] ${inter.className}`}
                  >
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
                    className="bg-[#F8FAFC] p-3 rounded-2xl text-black w-[300px] md:w-[400px]"
                    placeholder="e.g. John Doe"
                    name="name"
                    required={true}
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
                    className="bg-[#F8FAFC] p-3 rounded-2xl text-black w-[300px] md:w-[400px]"
                    placeholder="john@example.com"
                    name="email"
                    required={true}
                  ></input>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="font-semibold text-[#94A3B8]"
                    htmlFor="area"
                  >
                    CITY / AREA
                  </label>
                  <div className="relative w-[300px] md:w-[400px]">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <img src="/pin.svg" className="w-5 h-5" />
                    </span>

                    <input
                      className="w-full bg-[#F8FAFC] p-3 pl-10 rounded-2xl text-black"
                      placeholder="London, UK"
                      name="area"
                      required
                    />
                  </div>
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
