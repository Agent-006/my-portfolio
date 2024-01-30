import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Logo, Social } from "../index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

  return (
    <nav className="bg-black/90 w-full h-[90px] flex items-center justify-between overflow-hidden">
      <div
        ref={logo}
        className="w-1/3 h-full flex items-center justify-start px-8"
      >
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div
        ref={navItem}
        className="w-1/3 h-full flex items-center justify-center gap-6"
      >
        {navItems.map((item) => (
          <div key={item.name}>
            <a
              className="border-2 px-5 py-3 rounded-full"
              href={`#${item.slug}`}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
      <div
        ref={social}
        className="w-1/3 h-full flex items-center justify-end gap-3 px-8"
      >
        <Social className="bg-zinc-900 h-10 w-10 flex items-center justify-center rounded-full shadow-inner shadow-zinc-800 hover:shadow-zinc-500 duration-300" />
      </div>
    </nav>
  );
}

export default Header;
