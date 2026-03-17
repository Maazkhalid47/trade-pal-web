'use client'
import { motion } from "framer-motion"
import PrimaryButton from "./primary_button";
import SecondaryButton from "./secondary_button";
export default function Hero() {
    return (
        <section className="text-center">

<div className="flex flex-col md:flex-row items-center justify-center gap-30 py-16" style={{backgroundImage: 'url(/bg.png)'}}>

        {/* LEFT SIDE */}
        <div  className="flex flex-col items-start gap-5">

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
            className="text-5xl font-bold"
          >
            Or Your Next Job
          </motion.h1>

          <div className="break-all w-100 text-left">
            <p>The simplest way to connect skilled tradespeople with
homeowners. No stress, no hidden fees, just quality local
work.</p>
          </div>

          <div className="flex gap-10">
            <PrimaryButton text="Get Early Access" />
            <SecondaryButton text="I'm a TradePerson" />
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="w-[250px] border-[15px] rounded-[40px] border-black">
          <img
            src="/phone.png"
            alt="App Preview"
            className="w-full"
          />
        </div>

      </div>
            </section>
    )
}