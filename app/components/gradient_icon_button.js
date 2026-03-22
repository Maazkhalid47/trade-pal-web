"use client";

import { useState } from "react";
import Image from "next/image";

export default function GradientIconButton({
  icon,
  alt,
  width = 24,
  height = 24,
  isSelected,
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border-2 ${
        isSelected ? "border-[#02C6C6]" : "border-transparent"
      } flex flex-col items-center justify-center py-5 rounded-2xl text-black md:text-left text-center transition-all duration-300 cursor-pointer`}
      style={{
        background: isHovered
          ? "linear-gradient(45deg, #4169E114 8%, #02C6C614 8%)"
          : "#F8FAFC",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Image src={icon} width={width} height={height} alt={alt} />
      <p className="text-[#475569] font-bold pt-2">{alt}</p>
    </div>
  );
}
