import Image from "next/image";
import React from "react";

const IconCard = ({ color, src, width, height }) => {
  return (
    <div className={`flex justify-center items-center rounded-2xl bg-[${color}] w-14 h-14`}>
      <Image src={src} width={width} height={height} alt="icon" />
    </div>
  );
};

export default IconCard;
