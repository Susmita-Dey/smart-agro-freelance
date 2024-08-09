import React from "react";

function Button({ text, className }) {
  return (
    <button
      className={`bg-[#F7C35F] text-black rounded-xl text-sm ${className}`}
    >
      {text.toUpperCase()}
    </button>
  );
}

export default Button;
