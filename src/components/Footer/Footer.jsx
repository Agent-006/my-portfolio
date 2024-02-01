import React from "react";
import { Link } from "react-router-dom";
import Social from "../Socials/Social";

function Footer() {
  return (
    <footer className="w-full min-h-16 mt-10 px-2 py-4 lg:py-0 md:py-0 border-t-2 flex flex-col lg:flex-row md:flex-row gap-3 lg:gap-0 md:gap-0 items-center justify-between">
      <span>
        All Rights Reserved &copy;2024 |{" "}
        <Link to="https://thecoderwiz.com/">TheCoderWiz</Link>
      </span>
      <span className="flex gap-3">
        <Social className="bg-zinc-900 h-10 w-10 flex items-center justify-center rounded-full shadow-inner shadow-zinc-800 hover:shadow-zinc-500 duration-300" />
      </span>
    </footer>
  );
}

export default Footer;
