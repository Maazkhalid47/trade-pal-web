"use client";

import Image from "next/image";

export default function PrimaryButton({
  text,
  onClick,
  className = "",
  icon = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#4169E1F2] text-white font-semibold px-6 py-3 rounded-lg cursor-pointer
      transition-all duration-300 hover:opacity-90 hover:scale-[1.02] flex gap-2
      active:scale-[0.98] ${className}`}
    >
      {text}
      {icon && <Image src={icon} alt="Icon" height={12} width={12} />}
    </button>
  );
}
