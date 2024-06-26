import React, { useRef } from "react";
import { TechBlocks, Cards } from "../index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  let container = useRef(null);
  let card = useRef(null);
  let techCard = useRef(null);

  useGSAP(() => {
    gsap.to(container.current, {
      opacity: 1,
      duration: 2,
      delay: 0.5,
      ease: "power1",
      stagger: 0.3,
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
      },
    });

    gsap.from(".intro", {
      x: -300,
      duration: 2,
      delay: 0.5,
      opacity: 0,
      ease: "power1",
      scrollTrigger: {
        trigger: ".intro",
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
      },
    });

    gsap.from(".overview", {
      x: 300,
      duration: 2,
      delay: 0.5,
      opacity: 0,
      ease: "power1",
      scrollTrigger: {
        trigger: ".overview",
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
      },
    });

    gsap.from(".desc", {
      x: -300,
      duration: 2,
      delay: 0.5,
      opacity: 0,
      ease: "power1",
      scrollTrigger: {
        trigger: ".desc",
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
      },
    });

    gsap.from(card.current, {
      x: 300,
      opacity: 0,
      duration: 2,
      delay: 1,
      ease: "power2",
      scrollTrigger: {
        trigger: card.current,
        scrub: 2,
        start: "top 80%",
        end: "bottom 80%",
      },
    });

    gsap.from(".techSubHeading", {
      x: 400,
      delay: 1,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".techSubHeading",
        scrub: 2,
        start: "top 70%",
        end: "bottom 60%",
      },
    });

    gsap.from(".techHeading", {
      x: -200,
      delay: 1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".techHeading",
        scrub: 2,
        start: "top 80%",
        end: "bottom 60%",
      },
    });

    gsap.from(techCard.current, {
      x: 200,
      opacity: 0,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: techCard.current,
        scrub: 2,
        start: "top 80%",
        end: "bottom 80%",
      },
    });
  });

  return (
    <div
      ref={container}
      id="about"
      className="opacity-0 w-full min-h-screen px-20 py-8 text-zinc-200 overflow-hidden"
    >
      <h3 className="intro text-sm lg:text-xl md:text-xl">INTRODUCTION</h3>
      <h1 className="overview text-5xl lg:text-7xl md:text-7xl font-semibold pt-4">
        Overview.
      </h1>
      <p className="desc pt-10 w-full lg:w-2/4 md:w-2/4 text-sm lg:text-lg md:text-lg tracking-wider text-zinc-200">
        I&apos;m a skilled software developer with experience in JavaScript, and
        expertise in technologies like React, Next, GSAP and Locomotive.
        I&apos;m a quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. Let&apos;s work together to bring your ideas to life!
      </p>
      <div
        ref={card}
        className="mt-14 flex flex-wrap items-center justify-start gap-12"
      >
        <Cards />
      </div>
      {/* TODO: Education */}
      <h3 className="techSubHeading mt-32 text-sm lg:text-xl md:text-xl">
        TECHNOLOGIES
      </h3>
      <h1 className="techHeading text-5xl lg:text-7xl md:text-7xl font-semibold pt-5">
        Tech Stack.
      </h1>
      <div ref={techCard} className="flex flex-wrap gap-12 w-full mt-14">
        <TechBlocks />
      </div>
    </div>
  );
}

export default About;
