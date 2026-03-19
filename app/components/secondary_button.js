"use client";

import Image from "next/image";

export default function SecondaryButton({
  text,
  onClick,
  className = "",
  icon = "",
  isHollow = false,
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        isHollow
          ? "bg-transparent border-2 border-[#02C6C6] text-[#02C6C6]"
          : "bg-[#02C6C6F2] text-white"
      } font-semibold px-6 py-3 rounded-lg cursor-pointer
      transition-all duration-300 hover:opacity-90 hover:scale-[1.02]
      active:scale-[0.98] ${className} ${icon ? "flex justify-center items-center" : ''}`}
    >
      {icon && <Image src={icon} height={14} width={14} alt={text} />}
      <p>{text}</p>
    </button>
  );
}
