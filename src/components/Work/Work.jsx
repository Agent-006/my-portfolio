import React, { useRef } from "react";
import { WorkCards } from "../index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Work() {
  let desc = useRef(null);
  let workCard = useRef(null);
  let subHeading = useRef(null);
  let mainHeading = useRef(null);

  useGSAP(() => {
    gsap.from(subHeading.current, {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: subHeading.current,
        scrub: true,
        start: "top 80%",
        end: "bottom 40%",
      },
    });
    gsap.from(mainHeading.current, {
      x: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: mainHeading.current,
        scrub: true,
        start: "top 80%",
        end: "bottom 40%",
      },
    });
    gsap.from(desc.current, {
      x: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: desc.current,
        scrub: true,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
    gsap.from(workCard.current, {
      y: -50,
      opacity: 0,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: workCard.current,
        scrub: true,
        start: "top 70%",
        end: "bottom 50%",
      },
    });
  });

  return (
    <div id="work" className="min-h-[70vh] w-full px-20 pt-24 overflow-hidden">
      <h3 ref={subHeading} className="text-sm lg:text-xl md:text-x">
        MY WORK
      </h3>
      <h1
        ref={mainHeading}
        className="text-5xl lg:text-7xl md:text-7xl font-semibold pt-4"
      >
        Projects.
      </h1>
      <p
        ref={desc}
        className="pt-10 w-full lg:w-2/4 md:w-2/4 text-sm lg:text-lg md:text-lg tracking-wider text-zinc-200"
      >
        Following projects showcasees my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories an live demos in it. It reflects my ability
        to solve complex problems, work with different technologies, and manage
        projects effectively.
      </p>
      <div
        ref={workCard}
        className="mt-52 min-h-[550px] w-full flex flex-wrap gap-12 items-center justify-center"
      >
        <WorkCards />
      </div>
    </div>
  );
}

export default Work;
