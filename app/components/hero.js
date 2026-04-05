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
    const supabase = await createClient();

    const { data, error } = await supabase.from("users").select("*", {
      count: "exact",
    });
    if (error) {
      console.error("Error fetching user count:", error);
    } else {
      setUserCount(data.length);
    }
  }

  React.useEffect(() => {
    getUsersCount();
  }, []);

  return (
    <section className="text-center w-full">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/bg.png)",
        }}
      >
        <div className="flex justify-center w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-20 md:gap-40 py-40 w-[400px] md:w-[1200px]">
            {/* LEFT SIDE */}
            <div className="flex flex-col items-start gap-5">
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
                className="text-5xl font-bold"
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

              <div className="break-all text-center w-100 text-left m-auto md:m-0 md:px-0 px-5">
                <p className="text-center md:text-left">
                  The simplest way to connect skilled tradespeople with
                  homeowners. No stress, no hidden fees, just quality local
                  work.
                </p>
              </div>

              <div className="flex gap-10 md:px-0 px-5">
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
                <p className="text-[#64748B]">
                  Join {userCount.toLocaleString()}+ locals on the waitlist
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-[250px] border-[15px] rounded-[40px] border-black">
              <Image
                src="/phone.png"
                alt="App Preview"
                height={650}
                width={350}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
