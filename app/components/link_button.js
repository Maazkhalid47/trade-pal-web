import React from "react";
import PrimaryButton from "./primary_button";

export default function LinkButton({ href, text, className = "" }) {
  return (
    <a href={href} className="inline-block">
      <PrimaryButton text={text} className={className} />
    </a>
  );
}
