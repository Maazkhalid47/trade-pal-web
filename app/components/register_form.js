"use client";

import GradientIconButton from "../components/gradient_icon_button";
import PrimaryButton from "../components/primary_button";
import React, { useEffect, useState, useTransition } from "react";
import { Inter } from "next/font/google";
import { register } from "../register/action";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  weight: ["800"],
});

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState("Customer");
  const router = useRouter();

  const [defaultEmail, setDefaultEmail] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailFromQuery = urlParams.get("email");
    if (emailFromQuery) {
      setDefaultEmail(emailFromQuery);
    }
  }, []);

  const handleSubmit = async (formData) => {
    startTransition(async () => {
      const data = Object.fromEntries(formData.entries());

      const payload = {
        ...data,
        role: selected,
      };

      const res = await register(payload);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      router.push("/success");
    });
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
                action={handleSubmit}
                className="shadow-[#0000000A] mx-auto rounded-3xl flex flex-col items-center justify-center w-[400px] md:w-[500px] my-40 p-15 gap-5 bg-white relative"
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
                    type="email"
                    defaultValue={defaultEmail}
                    required={true}
                  ></input>
                </div>{" "}
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="font-semibold text-[#94A3B8]"
                    htmlFor="password"
                  >
                    PASSWORD
                  </label>
                  <input
                    minLength={6}
                    type="password"
                    className="bg-[#F8FAFC] p-3 rounded-2xl text-black w-[300px] md:w-[400px]"
                    placeholder="* * * * * * * *"
                    name="password"
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
                      alt="Tradesperson"
                      isSelected={selected === "Tradesperson"}
                      onClick={() => setSelected("Tradesperson")}
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
                    disabled={isPending}
                    className="w-full flex justify-center !bg-gradient-to-r !from-[#4169E1] !to-[#02C6C6]"
                    type="submit"
                  >
                    {isPending ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 text-neutral-tertiary animate-spin fill-brand"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Registering...</span>
                      </div>
                    ) : (
                      <p>Join Early Access</p>
                    )}
                  </PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
