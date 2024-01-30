import React from "react";
import { HashTech } from "../index";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

const WorkItems = [
  {
    name: "Nike UI Design",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eveniet repellendus quibusdam amet praesentium consequatur!",
    repo: "",
    live: "",
    image: "../../../public/Screenshot 2024-01-06 012412.png",
    hashTech: {},
  },
  {
    name: "Nike UI Design",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eveniet repellendus quibusdam amet praesentium consequatur!",
    repo: "",
    live: "",
    image: "../../../public/Screenshot 2024-01-06 015305.png",
    hashTech: {},
  },
  {
    name: "Nike UI Design",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eveniet repellendus quibusdam amet praesentium consequatur!",
    repo: "",
    live: "",
    image: "../../../public/Screenshot 2024-01-06 012412.png",
    hashTech: {},
  },
];

function WorkCards() {
  return WorkItems.map((work) => (
    <Tilt
      key={work.name}
      options={{
        max: 35,
        speed: 100,
        scale: 1.1,
      }}
      className="duration-100"
    >
      <div className=" bg-gradient-to-bl from-fuchsia-500 via-violet-600 to-cyan-500 h-[450px] w-96 rounded-3xl flex items-center justify-center p-[2px] duration-200">
        <div className="relative bg-zinc-950/90 w-full h-full rounded-3xl border-none flex flex-col items-center justify-between p-7">
          <div className="absolute bg-zinc-950 rounded-full h-12 w-24 top-[50%] right-10 flex justify-evenly items-center shadow-inner shadow-zinc-700 hover:shadow-zinc-400 duration-300">
            <Link to={work.live}>
              <img className="h-full" src="../../../public/github.png" alt="" />
            </Link>
            <Link to={work.live}>
              <img className="h-full" src="../../../public/github.png" alt="" />
            </Link>
          </div>
          <div className="h-40 w-full rounded-3xl overflow-hidden">
            <img
              className="object-scale-down"
              src={work.image}
              alt={work.name}
            />
          </div>
          <div className="gap-2 flex flex-col items-start justify-center">
            <h1 className="font-semibold text-lg tracking-wider">
              {work.name}
            </h1>
            <p className="text-sm tracking-wider">{work.about}</p>
          </div>
          <div>
            <HashTech />
          </div>
        </div>
      </div>
    </Tilt>
  ));
}

export default WorkCards;
