"use client";
import { motion } from "framer-motion";
import PrimaryButton from "./primary_button";
import SecondaryButton from "./secondary_button";
import Image from "next/image";
import Pill from "./pill";
export default function Hero() {
  return (
    <section className="text-center">
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-30 py-40"
        style={{ backgroundImage: "url(/bg.png)" }}
      >
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

          <div className="break-all text-center w-100 text-left m-auto md:m-0">
            <p className="text-center md:text-left">
              The simplest way to connect skilled tradespeople with homeowners.
              No stress, no hidden fees, just quality local work.
            </p>
          </div>

          <div className="flex gap-10">
            <PrimaryButton
              text="Get Early Access"
              className="rounded-3xl!"
              icon="/arrow.svg"
            />
            <SecondaryButton
              text="I'm a TradePerson"
              className="rounded-3xl!"
              isHollow
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[250px] border-[15px] rounded-[40px] border-black">
          <Image src="/phone.png" alt="App Preview" height={630} width={340} />
        </div>
      </div>
    </section>
  );
}
