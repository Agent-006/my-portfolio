import React from "react";
import { Tilt } from "react-tilt";

const techItems = [
  {
    techName: "HTML5",
    icon: "../../../tech/html.png",
    level: "Advanced",
  },
  {
    techName: "CSS3",
    icon: "../../../tech/css.png",
    level: "Advanced",
  },
  {
    techName: "Javascript",
    icon: "../../../tech/javascript.png",
    level: "Advanced",
  },
  {
    techName: "ReactJs",
    icon: "../../../tech/reactjs.png",
    level: "Beginner",
  },
  {
    techName: "Tailwind",
    icon: "../../../tech/tailwind.png",
    level: "Intermediate",
  },
  {
    techName: "Appwrite",
    icon: "../../../tech/appwrite.png",
    level: "Intermediate",
  },
  {
    techName: "GSAP",
    icon: "../../../tech/GreenSock-GSAP.png",
    level: "Intermediate",
  },
  {
    techName: "Git",
    icon: "../../../tech/git.png",
    level: "Intermediate",
  },
];

function TeckBlocks() {
  return techItems.map((tech) => (
    <Tilt
      key={tech.techName}
      options={{
        max: 45,
        scale: 1.2,
        speed: 100,
      }}
      className="hover:shadow-[-1px_-1px_20px_2px] hover:shadow-blue-500 rounded-3xl duration-100"
    >
      <div className="bg-zinc-900 w-64 h-24 flex items-center justify-center gap-4 rounded-3xl shadow-inner shadow-zinc-800 hover:shadow-zinc-500">
        <div className="h-full flex items-center justify-start">
          <img
            className="rounded-xl"
            width={80}
            height={80}
            src={tech.icon}
            alt=""
          />
        </div>
        <div className="pr-5 flex flex-col gap-3">
          <h3 className="text-xl font-semibold">{tech.techName}</h3>
          <h5 className="text-xs">Level: {tech.level}</h5>
        </div>
      </div>
    </Tilt>
  ));
}

export default TeckBlocks;
