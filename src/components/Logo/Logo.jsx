import React from "react";

function Logo() {
  return (
    <div className="flex items-center justify-start">
      <div className="w-8">
        <img src="./logo.svg" alt="logo" />
      </div>
      <div className="px-2 text-xl font-semibold tracking-wide">
        <span> Sagar | TheCoderWiz</span>
      </div>
    </div>
  );
}

export default Logo;
