import Image from "next/image";
import React from "react";

const PersonCard = ({ color, src, width, height }) => {
  return (
    <div
      className={`flex justify-center items-center rounded-full overflow-hidden h-[77px] w-[77px]`}
      style={{ backgroundColor: color }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="icon"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default PersonCard;
