import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

// TODO: Social links

const socialItems = [
  {
    name: "github",
    slug: "https://github.com/Agent-006",
    element: <Github />,
  },
  {
    name: "linkedIn",
    slug: "https://www.linkedin.com/in/sagar-gope-119123248/",
    element: <Linkedin />,
  },
  {
    name: "instagram",
    slug: "/",
    element: <Instagram />,
  },
  {
    name: "twitter",
    slug: "https://twitter.com/sagarghosh0610",
    element: <Twitter />,
  },
  {
    name: "facebook",
    slug: "https://www.facebook.com/profile.php?id=100010535077097",
    element: <Facebook />,
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
