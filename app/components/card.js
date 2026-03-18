import React from "react";

const Card = ({ className = "", children }) => {
  return (
    <div className={`bg-white shadow-md rounded-3xl p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
