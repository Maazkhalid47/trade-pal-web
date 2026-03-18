import Image from "next/image";
import React from "react";

const Pill = ({
  text,
  icon = "",
  className = "",
  textClass = "",
  iconHeight = 12,
  iconWidth = 12,
}) => {
  return (
    <div className="w-full md:w-auto">
      <div
        className={`flex items-center justify-center md:justify-unset gap-2 text-white font-semibold px-4 py-2 rounded-full ${className}`}
      >
        {icon && (
          <Image src={icon} alt={text} height={iconHeight} width={iconWidth} />
        )}
        <span className={textClass}>{text}</span>
      </div>
    </div>
  );
};

export default Pill;
