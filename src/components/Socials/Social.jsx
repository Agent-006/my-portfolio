import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socialItems = [
  {
    name: "facebook",
    slug: "/",
    element: <Facebook />,
  },
  {
    name: "instagram",
    slug: "/",
    element: <Instagram />,
  },
  {
    name: "twitter",
    slug: "/",
    element: <Twitter />,
  },
  {
    name: "linkedIn",
    slug: "/",
    element: <Linkedin />,
  },
  {
    name: "github",
    slug: "/",
    element: <Github />,
  },
];

function Social({ className = "", ...props }) {
  return socialItems.map((item) => (
    <Link className={`${className}`} to={item.slug} key={item.name}>
      {item.element}
    </Link>
  ));
}

export default Social;
