import React from "react";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

const cardData = [
  {
    skill: "JavaScipt",
    icon: "../../../mobile.png",
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    skill: "ReactJs",
    icon: "../../../creator.png",
    docs: "https://react.dev/",
  },
  {
    skill: "GSAP animations",
    icon: "../../../web.png",
    docs: "https://gsap.com/",
  },
];

function Cards() {
  return cardData.map((card) => (
    <Tilt
      key={card.skill}
      options={{
        max: 45,
        scale: 1.2,
        speed: 100,
      }}
      className="duration-100"
    >
      <div className="bg-gradient-to-bl from-fuchsia-500 via-violet-600 to-cyan-500 h-72 w-60 rounded-3xl p-[2px] flex items-center justify-center">
        <div className="bg-zinc-950/90 w-full h-full rounded-3xl border-none flex flex-col items-center justify-between p-8">
          <div className="flex flex-col items-center justify-center gap-8">
            <img width={60} src={card.icon} alt="icon" />
            <h1 className="text-lg font-semibold">{card.skill}</h1>
          </div>
          <Link
            to={card.docs}
            target="_blank"
            className="px-5 py-2 border-none shadow-inner shadow-zinc-800 rounded-full hover:shadow-zinc-500 duration-500"
          >
            Go to Docs
          </Link>
        </div>
      </div>
    </Tilt>
  ));
}

export default Cards;
