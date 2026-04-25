"use client";

import React, { useState } from "react";
import Card from "./card";
import PersonCard from "./person_card";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";

const testimonials = [
  {
    src: "/sarah.jpg",
    alt: "img-1",
    name: "Sarah Mitchell",
    role: "Homeowner",
    rating: 3,
    text: "I needed a reliable electrician for a quick repair and My Trade Pal made the whole process effortless. Within minutes I received multiple quotes from verified tradespeople and booked the job the same day. The quality of work was excellent and the pricing was transparent. Highly recommended.",
  },
  {
    src: "/david.jpg",
    alt: "img-3",
    name: "David Carter",
    role: "Property Manager",
    rating: 5,
    text: "As a property manager I frequently need plumbers, painters, and handymen. My Trade Pal has completely simplified the process of finding skilled professionals. The platform is fast, easy to use, and the tradespeople are genuinely reliable.",
  },
  {
    src: "/emily.jpg",
    alt: "img-4",
    name: "Emily Robinson",
    role: "Landlord",
    rating: 4,
    text: "I needed a reliable electrician for a quick repair and My Trade Pal made the whole process effortless. Within minutes I received multiple quotes from verified tradespeople and booked the job the same day. The quality of work was excellent and the pricing was transparent. Highly recommended.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  const getVisible = () => {
    const left = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const right = (activeIndex + 1) % testimonials.length;
    return [left, activeIndex, right];
  };

  const [left, center, right] = getVisible();

  return (
    <div
      className="flex md:flex-row flex-col justify-center gap-10 text-center pb-20"
      id="testimonials"
    >
      <Card className="flex flex-col justify-center text-center items-center gap-5 p-10 w-[400px] md:w-[1200px] mx-auto">
        <div className="flex flex-row gap-3 items-center justify-center">
           <span className="w-12 h-[3px] rounded-full bg-gradient-to-l from-black to-transparent" />
          <p className="text-black text-[28px] font-bold">Testimonials</p>
          <span className="w-12 h-[3px] rounded-full bg-gradient-to-r from-black to-transparent" />
        </div>

        <p className="relative text-[#4E4D4D] text-[28px] font-[600] pt-8 text-center w-[80%] md:w-[60%]">
          What our Satisfied Clients Say about us!
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[5px] bg-[#4169E1]"></span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5 w-full">
          {[left, center, right].map((idx, position) => {
            const isCenter = position === 1;
            const t = testimonials[idx];
            return (
             <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`
                  flex flex-col justify-start items-center rounded-3xl p-5 cursor-pointer
                  transition-all duration-300 ease-in-out
                  ${isCenter
                    ? "border-[1.5px] border-[#4169E1] shadow-[0_8px_40px_rgba(65,105,225,0.18)] scale-[1.03] bg-white"
                    : "border border-[#F1F5F9] shadow-lg bg-white hover:scale-105 hover:bg-[#02C6C60D] hover:border-[#4169E1] border-[1.5px]"
                  }
                `}
              >
                <PersonCard
                  src={t.src}
                  alt={t.alt}
                  color="#fff"
                  height={77}
                  width={77}
                />
                <p className="text-[#0F172A] text-[16px] font-bold pt-5 pb-2">
                  {t.name}
                </p>
                <p className="text-[#6B7280] text-[14px] font-[600] pb-2">
                  {t.role}
                </p>
                <p className="text-[#475569] flex-1">{t.text}</p>
                <div className="flex items-center mt-auto py-3">
                  <Rating
                    readonly
                    initialValue={t.rating}
                    size={15}
                    fillColor="#4169E1"
                    SVGstyle={{ display: "inline-block" }}
                  />
                </div>
                <Image src={"/comma.svg"} alt="Comma" width={30} height={30} />
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#E2E8F0] bg-white shadow-sm flex items-center justify-center hover:border-[#4169E1] hover:text-[#4169E1] transition-colors"
            aria-label="Previous"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#E2E8F0] bg-white shadow-sm flex items-center justify-center hover:border-[#4169E1] hover:text-[#4169E1] transition-colors"
            aria-label="Next"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Testimonials;
