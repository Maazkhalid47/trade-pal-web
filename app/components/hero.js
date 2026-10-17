"use client";
import { motion } from "framer-motion";
import PrimaryButton from "./primary_button";
import SecondaryButton from "./secondary_button";
import Image from "next/image";
import Pill from "./pill";
import { createClient } from "../utils/supabase/client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const [userCount, setUserCount] = React.useState(0);

  const getUsersCount = async () => {
    const supabase = createClient();

    const { data, error } = await supabase.rpc("get_user_count");

    if (error) {
      console.error("Supabase error:", JSON.stringify(error, null, 2));
    } else {
      setUserCount(Number(data));
    }
  };

  React.useEffect(() => {
    getUsersCount();
  }, []);

  return (
    <section className="text-center w-full">
      <div
        className="w-full bg-cover bg-[65%_center] md:bg-center bg-no-repeat "
        style={{
          backgroundImage: "url(/bg2.png)",
        }}
      >
        <div className="bg-black/75 w-full">

          <div className="flex justify-center w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-40 w-[330px] md:w-[1200px]">
              {/* LEFT SIDE */}
              <div className="flex flex-col items-start gap-2">
                <Pill
                  text="NOW OPEN FOR EARLY ACCESS"
                  className="bg-[#00B3B3]/10"
                  textClass="text-[#4169E1]"
                  icon="/green-dot.svg"
                  iconHeight={8}
                  iconWidth={8}
                />

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl font-bold text-white"
                >
                  Find Trusted Trades-
                </motion.h1>

                <motion.h1
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl px-10 md:px-0 font-bold text-[#02C6C6]"
                >
                  Or Your Next Job
                </motion.h1>

                <div className="break-words w-full max-w-full min-w-0 m-auto md:m-0 px-5 md:px-0">
                  <p className="text-center md:text-left text-[#D1D5DB]">
                    The simplest way to connect skilled tradespeople with
                    homeowners. No stress, no hidden fees, just quality local
                    work.
                  </p>
                </div>

                <div className="flex gap-2 md:gap-10 md:px-0 px-5">
                  <PrimaryButton
                    text="Get Early Access"
                    className="rounded-2xl!"
                    icon="/arrow.svg"
                    onClick={() => router.push('/register')}
                  />
                  <SecondaryButton
                    text="I'm a TradePerson"
                    className="rounded-2xl!"
                    isHollow
                  />
                </div>

                <div className="pt-5 flex items-center gap-5 mx-auto w-[300px] md:w-full">
                  <div className="flex items-center">
                    <Image
                      src="/person-1.png"
                      height={40}
                      width={40}
                      alt="person 1"
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/person-2.png"
                      height={40}
                      width={40}
                      alt="person 2"
                      className="rounded-full border-2 border-white -ml-3"
                    />
                    <Image
                      src="/person-3.png"
                      height={40}
                      width={40}
                      alt="person 3"
                      className="rounded-full border-2 border-white -ml-3"
                    />
                  </div>
                  <p className="text-[#D1D5DB]">
                    Join {userCount.toLocaleString()}+ locals on the waitlist
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="relative w-[276px] rounded-[44px] bg-[#111827] p-[10px] shadow-[0_28px_70px_rgba(15,23,42,0.35),0_8px_18px_rgba(15,23,42,0.2)] ring-1 ring-[#334155]">
                {/* <div className="absolute -right-[4px] top-28 h-16 w-[4px] rounded-r-full bg-[#334155]" aria-hidden="true" /> */}
                <div className="absolute -left-[4px] top-24 h-10 w-[4px] rounded-l-full bg-[#334155]" aria-hidden="true" />
                <div className="absolute -left-[4px] top-40 h-16 w-[4px] rounded-l-full bg-[#334155]" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[36px] bg-[#f8fafc]">
                  <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-[#111827]" aria-hidden="true" />
                  <Image
                    src="/phone2.png"
                    alt="My Trade Pal app conversation preview"
                    height={650}
                    width={350}
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
