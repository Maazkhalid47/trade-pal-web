"use client";

import { useState } from "react";
import Image from "next/image";

export default function GradientIconButton({
  icon,
  alt,
  width = 24,
  height = 24,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center p-3 rounded-2xl text-black w-[200px] md:text-left text-center transition-all duration-300 cursor-pointer"
      style={{
        background: isHovered
          ? "linear-gradient(90deg, #4169E114 8%, #02C6C614 8%)"
          : "#F8FAFC",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={icon} width={width} height={height} alt={alt} />
      <p className="text-[#475569] font-bold">{alt}</p>
    </div>
  );
}
