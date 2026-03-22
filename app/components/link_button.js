import React from "react";
import PrimaryButton from "./primary_button";

export default function LinkButton({ href, text, className = "", linkClass = "" }) {
  return (
    <a href={href} className={`inline-block ${linkClass}`}>
      <PrimaryButton text={text} className={className} />
    </a>
  );
}
