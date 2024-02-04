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
      className="hover:shadow-[-1px_-1px_20px_2px] hover:shadow-violet-600 rounded-3xl duration-100"
    >
      <div className="bg-gradient-to-bl from-fuchsia-500 via-violet-600 to-cyan-500 rounded-3xl p-[2px] flex items-center justify-center">
        <div className="bg-zinc-900/95 w-64 h-24 flex items-center justify-center gap-10 rounded-3xl shadow-inner shadow-zinc-800 hover:shadow-zinc-500">
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
          </div>
        </div>
      </div>
    </Tilt>
  ));
}

export default TeckBlocks;
