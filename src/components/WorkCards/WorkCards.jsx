import { HashTech } from "../index";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// TODO: add real projects and there deployed links

const workItems = [
  {
    name: "My Portfolio",
    about:
      "This is my personal portfolio app where all my works and experience are projected in beauty.",
    repo: "https://github.com/Agent-006/my-portfolio",
    live: "https://sagarghosh.vercel.app/",
    image: "../../../portfolio.png",
    hashTech: ["reactjs", "tailwindcss", "gsap"],
  },
  {
    name: "IncogniNote",
    about:
      "Anonymously send and receive feedback with IncogniNote, the secure messaging app for honest communication.",
    repo: "https://github.com/Agent-006/IncogniNote",
    live: "https://incogninote.vercel.app/dashboard",
    image: "../../../incogniNote.png",
    hashTech: ["nextjs", "mongodb", "tailwindcss", "shadcn"],
  },
  {
    name: "Wizzie",
    about:
      "Wizzie is a dynamic social media platform designed for seamless real-time interactions and community building.",
    repo: "https://github.com/Agent-006/Wizzie",
    live: "https://wizzie.vercel.app/",
    image: "../../../wizzie.png",
    hashTech: ["nextjs", "shadcn", "clerk", "mongodb"],
  },
];

function WorkCards() {
  return workItems.map((work) => (
    <Tilt
      key={work.name}
      options={{
        max: 35,
        speed: 100,
        scale: 1.1,
      }}
      className="duration-100"
    >
      <div className=" bg-gradient-to-bl from-fuchsia-500 via-violet-600 to-cyan-500 h-[450px] w-80 lg:w-96 md:w-96 rounded-3xl flex items-center justify-center p-[2px] duration-200">
        <div className="relative bg-zinc-950/90 w-full h-full rounded-3xl border-none flex flex-col items-center justify-between p-7">
          <div className="absolute bg-zinc-950 rounded-full h-12 w-24 top-[50%] right-10 flex justify-evenly items-center shadow-inner shadow-zinc-700 hover:shadow-zinc-400 duration-300">
            <Link
              className="hover:-rotate-45 duration-200 h-8 w-8 bg-zinc-100 text-zinc-900 flex items-center justify-center rounded-full"
              to={work.live}
              target="_blank"
            >
              <ArrowUpRight />
            </Link>
            <Link to={work.repo} target="_blank">
              <img className="h-10 w-10" src="../../../github.png" alt="" />
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
            <HashTech work={work.hashTech} />
          </div>
        </div>
      </div>
    </Tilt>
  ));
}

export default WorkCards;
