import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Social } from "../index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AlignRight, X } from "lucide-react";

const navItems = [
  {
    name: "Home",
    slug: "",
  },
  {
    name: "About",
    slug: "about",
  },
  {
    name: "Work",
    slug: "work",
  },
  {
    name: "Contact",
    slug: "contact",
  },
];

function Header() {
  let logo = useRef();
  let social = useRef();
  let navItem = useRef();

  useGSAP(() => {
    gsap.from(logo.current, {
      opacity: 0,
      y: -100,
      duration: 1.5,
      delay: 0.4,
    });
    gsap.from(social.current, {
      opacity: 0,
      y: -100,
      duration: 1.5,
      delay: 0.4,
    });
    gsap.from(navItem.current, {
      opacity: 0,
      y: -100,
      duration: 1.5,
      delay: 0.4,
    });
  });

  const [className, setClassName] = useState("translate-x-[100%]");
  let sideNav = useRef();

  const openNav = () => {
    setClassName("");
  };
  const closeNav = () => {
    setClassName("translate-x-[100%]");
  };

  return (
    <div>
      <nav className="backdrop-blur-sm bg-black/5 fixed z-50 lg:bg-black/90 md:bg-black/90 w-full lg:w-full md:w-full h-[90px] lg:h-[90px] md:h-[90px] flex lg:flex md:flex items-center lg:items-center md:items-center justify-between lg:justify-between md:justify-between lg:overflow-hidden md:overflow-hidden">
        <div
          ref={logo}
          className="lg:w-1/3 md:w-1/3 h-full flex items-center justify-start px-8"
        >
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="h-full flex items-center justify-center px-5 cursor-pointer">
          <AlignRight onClick={openNav} />
        </div>
      </nav>
      <div
        className={`backdrop-blur-lg fixed right-0 z-50 bg-zinc-950/700 w-full lg:w-2/5 md:w-2/5 h-screen px-8 py-8 flex-col items-center justify-around flex duration-500 ease-linear ${className}`}
      >
        <div className="flex gap-2 w-full justify-start items-center px-3">
          <Social className="bg-zinc-900 h-10 w-10 flex items-center justify-center rounded-full shadow-inner shadow-zinc-800 hover:shadow-zinc-500 duration-300" />
          <div className="flex items-center justify-end w-1/4 cursor-pointer">
            <X onClick={closeNav} />
          </div>
        </div>
        <div ref={sideNav} className="w-full h-[80vh] flex flex-col gap-8 pt-5">
          {navItems.map((item) => (
            <div key={item.name} className="w-full">
              <div className="w-full px-3 h-14 text-5xl font-semibold tracking-wide overflow-hidden">
                <div className="h-14 w-full px-1 flex flex-col gap-2 hover:-translate-y-[100%] duration-500">
                  <a onClick={closeNav} href={`#${item.slug}`}>
                    {item.name}
                  </a>
                  <a onClick={closeNav} href={`#${item.slug}`}>
                    {item.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
