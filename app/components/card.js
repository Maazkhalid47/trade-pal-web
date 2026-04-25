import React from "react";

const Card = ({ className = "", id = "", children }) => {
  return (
    <div id={id} className={`bg-white shadow-md rounded-3xl p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
